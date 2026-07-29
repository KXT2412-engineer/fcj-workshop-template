const fs = require('fs');
const path = require('path');

const newTablesContent = fs.readFileSync('C:\\Users\\nguye\\.gemini\\antigravity\\brain\\2dc0f9cd-5ef3-4579-b691-9c33be050bb7\\scratch\\new_en_tables.md', 'utf8');

// Parse newTablesContent into an array of tables
const weekTables = [];
let currentWeek = 0;
let currentTable = [];
let inTable = false;

const lines = newTablesContent.split(/\r?\n/);
for (const line of lines) {
    if (line.match(/^### Week \d+/)) {
        currentWeek = parseInt(line.match(/\d+/)[0]);
        inTable = false;
        currentTable = [];
    } else if (line.startsWith('|')) {
        inTable = true;
        currentTable.push(line);
    } else if (inTable && line.trim() === '') {
        inTable = false;
        weekTables[currentWeek] = currentTable.join('\n');
    }
}
if (inTable && currentTable.length > 0) {
    weekTables[currentWeek] = currentTable.join('\n');
}

// Replace tables in _index.md for each week
const basePath = 'a:\\FPT subject\\New folder\\fcj-workshop-template\\content\\1-Worklog';
for (let i = 1; i <= 12; i++) {
    if (!weekTables[i]) continue;
    const folderPath = path.join(basePath, '1.' + i + '-Week' + i);
    const filePath = path.join(folderPath, '_index.md');
    
    if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const fileLines = fileContent.split(/\r?\n/);
        
        let newFileLines = [];
        let replaced = false;
        let skippingOldTable = false;
        
        for (let j = 0; j < fileLines.length; j++) {
            const line = fileLines[j];
            if (line.startsWith('|') && !replaced) {
                // start of old table, skip old lines and insert new table
                newFileLines.push(weekTables[i]);
                skippingOldTable = true;
                replaced = true;
            } else if (skippingOldTable && line.startsWith('|')) {
                // still skipping old table
                continue;
            } else if (skippingOldTable && !line.startsWith('|')) {
                // end of old table
                skippingOldTable = false;
                newFileLines.push(line);
            } else {
                newFileLines.push(line);
            }
        }
        
        fs.writeFileSync(filePath, newFileLines.join('\n'), 'utf8');
        console.log('Updated Week ' + i + ' _index.md');
    }
}
