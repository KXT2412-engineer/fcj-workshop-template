---
title: "Blog 1"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 3.1. </b> "
---

# AWS ĐÃ NÂNG CẤP AMAZON COGNITO NHƯ THẾ NÀO MÀ NGƯỜI DÙNG GẦN NHƯ KHÔNG HỀ NHẬN RA?

Trong các hệ thống hiện đại, authentication gần như là “cửa chính” của toàn bộ ứng dụng. Chỉ cần hệ thống đăng nhập gặp lỗi vài phút, người dùng có thể không thể truy cập dịch vụ, reset password thất bại hoặc gián đoạn toàn bộ trải nghiệm.

Với những hệ thống identity quy mô lớn như Amazon Cognito – nơi phục vụ hàng trăm triệu user profiles – việc thay đổi hạ tầng backend không chỉ đơn giản là deploy phiên bản mới. Một thay đổi nhỏ cũng có thể tạo ra downtime hoặc ảnh hưởng đến hành vi authentication của ứng dụng.

Gần đây, AWS đã chia sẻ về cách Amazon Cognito được nâng cấp lên next-generation infrastructure, mang đến nhiều capability mới như high-throughput performance, customer-managed encryption keys và multi-Region replication, trong khi người dùng gần như không nhận ra bất kỳ gián đoạn nào.

Điều khiến mình thấy thú vị không chỉ nằm ở các tính năng mới, mà còn ở cách AWS thực hiện migration quy mô lớn với mục tiêu zero downtime.

![Sơ đồ kiến trúc chuyển đổi không gián đoạn của Amazon Cognito](/fcj-workshop-template/images/3-BlogsPosted/3.1-Blog1/blog1.jpg)

---

## Điều gì mới trên Amazon Cognito?

Sau quá trình nâng cấp kiến trúc, Amazon Cognito đã mở khóa thêm một số capability đáng chú ý:

### 1. High-throughput performance

Hạ tầng mới cho phép Cognito xử lý lượng request lớn hơn, hỗ trợ các workload hiện đại với:

- Hàng chục triệu người dùng trong một user pool.
- Hàng nghìn transaction mỗi giây (TPS).
- Độ trễ thấp để không ảnh hưởng đến trải nghiệm đăng nhập.

Điều này đặc biệt hữu ích với các hệ thống có lượng người dùng lớn hoặc cần scale authentication nhanh chóng.

### 2. Customer-managed keys (CMK)

Một thay đổi đáng chú ý khác là khả năng sử dụng customer-managed encryption keys thông qua AWS KMS. Thay vì hoàn toàn phụ thuộc vào key do AWS quản lý, doanh nghiệp có thể:

- Tự quản lý vòng đời encryption key.
- Kiểm soát tốt hơn dữ liệu mã hóa at-rest.
- Đáp ứng các yêu cầu compliance và security.

Đây là một capability khá quan trọng đối với các hệ thống enterprise hoặc tổ chức có yêu cầu bảo mật cao.

### 3. Multi-Region replication

AWS cũng bổ sung khả năng đồng bộ user pool sang Region khác, bao gồm:

- User profile.
- Password.
- User attributes.
- Configuration.

Nếu xảy ra Regional failure, hệ thống authentication vẫn có thể tiếp tục hoạt động. Theo mình, đây là điểm khá đáng giá vì authentication thường là một trong những thành phần “không được phép chết” trong kiến trúc hệ thống.

---

## Điều gì thay đổi trong kiến trúc?

Theo AWS, Cognito trước đây phụ thuộc khá nhiều vào một data store tập trung. Điều này giúp việc quản lý dữ liệu đơn giản hơn nhưng lại làm chậm quá trình mở rộng tính năng mới. Ở kiến trúc mới, Cognito được thiết kế theo hướng:

- **Identity-first design:** Thay vì cố gắng trở thành một hệ thống lưu trữ tổng quát, hạ tầng mới tập trung vào đúng bài toán identity management. Điều này giúp hệ thống tối ưu hơn cho user authentication, identity operations và scalability.
- **Backward compatibility:** Một nguyên tắc mình thấy rất hay là: _Infrastructure có thể thay đổi, nhưng ứng dụng của customer không nên bị ảnh hưởng_. AWS cố gắng giữ mọi thay đổi phía backend tương thích với behavior cũ để tránh breaking changes.
- **Avoid one-way doors:** Kiến trúc mới được thiết kế để có thể thay đổi dần theo thời gian thay vì những quyết định “không thể quay đầu”. Điều này giúp AWS dễ mở rộng capability mới trong tương lai.

---

## AWS đã migration như thế nào mà gần như không downtime?

Đây có lẽ là phần thú vị nhất của bài blog. Để migrate hàng trăm triệu user profiles mà không ảnh hưởng đến customer, AWS áp dụng nhiều kỹ thuật validation song song:

- **Shadow mode validation:** AWS chạy request trên cả hệ thống cũ và hệ thống mới cùng lúc, sau đó so sánh: _response structure, status code và behavior_. Nếu có khác biệt bất thường, hệ thống sẽ phát hiện ngay trước khi ảnh hưởng production. Điều mình thấy hay ở đây là AWS không chỉ test functionality mà còn test cả behavior consistency.
- **Dual-write architecture:** Trong thời gian migration, mọi request đều được ghi vào _legacy infrastructure_ và _new infrastructure_. Nếu ghi vào hệ thống mới thất bại, request vẫn tiếp tục thành công ở hệ thống cũ. Điều này giúp customer gần như không bị ảnh hưởng.
- **Anti-entropy validation:** AWS còn triển khai cơ chế liên tục so sánh dữ liệu giữa hai hệ thống để phát hiện sai lệch. Nếu có divergence, legacy system sẽ đóng vai trò source of truth để reconcile dữ liệu. Đây là một approach khá thú vị trong các hệ thống distributed.
- **Incremental rollout & rollback:** Thay vì migrate toàn bộ cùng lúc, AWS rollout từng phần và luôn giữ khả năng rollback nếu có vấn đề. Điều này giúp giảm đáng kể rủi ro khi thay đổi hạ tầng ở quy mô lớn.

---

## Điều mình học được từ case này

Sau khi đọc bài blog, điều mình thấy đáng học nhất không nằm ở Cognito hay những feature mới, mà là cách AWS tư duy về infrastructure modernization.

Thông thường khi nói về migration, chúng ta thường nghĩ đến việc **migrate nhanh nhất có thể**. Tuy nhiên, với những hệ thống critical như authentication, thứ quan trọng hơn lại là **migrate an toàn nhất có thể**.

Shadow mode, dual write, anti-entropy validation và rollback capability cho thấy AWS ưu tiên khả năng kiểm chứng từng bước thay vì “big bang migration”. Theo mình, đây là mindset khá đáng học khi làm việc với hệ thống production hoặc những service có ảnh hưởng lớn đến người dùng.

---

## Kết luận

Việc Amazon Cognito chuyển sang next-generation infrastructure không chỉ mang lại thêm capability mới như multi-Region replication, customer-managed keys hay high-throughput performance, mà còn cho thấy cách AWS xử lý một bài toán migration quy mô lớn với mức độ gián đoạn gần như bằng 0.

Đây cũng là một ví dụ khá thú vị về cách các hệ thống authentication quy mô lớn được hiện đại hóa mà vẫn đảm bảo backward compatibility cho customer.

**Bài viết tham khảo:**

- 🔗 **[AWS Blog: Amazon Cognito unlocks new capabilities...](https://aws.amazon.com/.../amazon-cognito-unlocks.../...)**
