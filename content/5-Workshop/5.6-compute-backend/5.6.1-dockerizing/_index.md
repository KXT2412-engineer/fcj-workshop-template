---
title: "Dockerizing .NET API"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 5.6.1. </b> "
---

# Dockerizing the .NET API

The first step to bring the application to Fargate is to package it into a Docker Container. Below is the standard content of the `Dockerfile` for a .NET 8 application (usually located in the root directory).

```dockerfile
# Use the ASP.NET Core base image for the runtime environment
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 8080

# Use the SDK image to build the application
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy project files (.csproj) and restore libraries (NuGet packages)
COPY ["API/API.csproj", "API/"]
COPY ["BLL/BLL.csproj", "BLL/"]
COPY ["DAL/DAL.csproj", "DAL/"]
RUN dotnet restore "API/API.csproj"

# Copy all remaining code and proceed to build
COPY . .
WORKDIR "/src/API"
RUN dotnet build "API.csproj" -c Release -o /app/build

# Publish the application (Create executable files)
FROM build AS publish
RUN dotnet publish "API.csproj" -c Release -o /app/publish

# Merge into the final image (Extremely lightweight)
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "API.dll"]
```

### Push Image to Amazon ECR
Next, open **Amazon ECR ➔ Repositories ➔ Create repository**. Create a Private repository named `snaptics-api`.

Open the terminal on your computer and run the following cluster of commands to build and push the image to AWS:
```bash
# 1. Log Docker into the AWS system (Replace <ACCOUNT_ID> with your ID)
aws ecr get-login-password --region ap-southeast-1 | docker login --username AWS --password-stdin <ACCOUNT_ID>.dkr.ecr.ap-southeast-1.amazonaws.com

# 2. Build the Docker image
docker build -t snaptics-api .

# 3. Tag the image
docker tag snaptics-api:latest <ACCOUNT_ID>.dkr.ecr.ap-southeast-1.amazonaws.com/snaptics-api:latest

# 4. Push to the Cloud
docker push <ACCOUNT_ID>.dkr.ecr.ap-southeast-1.amazonaws.com/snaptics-api:latest
```
At this point, your application is safely residing on AWS ECR.
