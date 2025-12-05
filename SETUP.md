# Hướng dẫn cài đặt chức năng Gửi lời chúc

## 1. Cài đặt dependencies

Dependencies đã được cài đặt:
- mongoose

## 2. Cấu hình MongoDB

Tạo file `.env.local` trong thư mục gốc của project và thêm MongoDB URI:

```env
MONGODB_URI=mongodb://localhost:27017/wedding-web
```

Hoặc sử dụng MongoDB Atlas:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/wedding-web?retryWrites=true&w=majority
```

## 3. Cấu trúc dữ liệu

Mỗi lời nhắn bao gồm:
- **name**: Tên người gửi (bắt buộc)
- **message**: Lời nhắn (bắt buộc)
- **willAttend**: Có đến không? (optional)
- **attendWith**: Đi với bao nhiêu người? (optional)
- **guestOf**: Khách của cô dâu hay chú rể? (optional)
- **createdAt**: Thời gian tạo (tự động)

## 4. API Endpoints

### POST /api/messages
Tạo lời nhắn mới

**Request Body:**
```json
{
  "name": "Nguyễn Văn A",
  "message": "Chúc hai bạn hạnh phúc!",
  "willAttend": "Mình chắc chắn sẽ đến",
  "attendWith": "2 người",
  "guestOf": "Khách mời cô dâu"
}
```

**Response:**
```json
{
  "success": true,
  "data": { ... },
  "message": "Lời nhắn đã được gửi thành công"
}
```

### GET /api/messages
Lấy danh sách lời nhắn

**Query Parameters:**
- `page`: Số trang (mặc định: 1)
- `limit`: Số lượng mỗi trang (mặc định: 50)

**Response:**
```json
{
  "success": true,
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 50,
    "total": 100,
    "pages": 2
  }
}
```

## 5. Sử dụng

1. Người dùng điền form và gửi lời chúc
2. Form sẽ validate các trường bắt buộc (tên, lời nhắn)
3. Sau khi gửi thành công, form sẽ reset và hiển thị popup cảm ơn
4. Nhấn nút "XEM LỜI CHÚC" để xem danh sách các lời chúc đã gửi
5. Nhấn nút "GỬI QUÀ MỪNG CƯỚI" để xem thông tin chuyển khoản

## 6. Chạy project

```bash
npm run dev
```

Truy cập http://localhost:3000 để xem kết quả.

