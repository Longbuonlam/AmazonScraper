# AmazonScraper

1. Đăng ký 1 tài khoản tại website crawbase: https://crawlbase.com/
2. Đăng nhập và lấy token của tài khoản tại đường dẫn https://crawlbase.com/docs/crawling-api/#other-notes (token để xác minh rằng bạn đã đăng ký tài khoản của bên crawbase, đồng thời cũng là điều kiện cần để có thể sử dụng các api để crawl data từ bên thứ 3 này).
3. Mở thư mục project này trong visual studio code, tạo file môi trường .env và dán token vào theo định dạng sau: TOKEN= 'your_token' (With no ' ').
4. Mở cửa sổ terminal.
5. Gõ vào terminal 2 lệnh sau:
- npm install crawlbase
- npm install dotenv
6. Trong file index.js, thay vào 'url-of-the-amazon-product-page' bằng url của 1 sản phẩm mà bạn muốn lấy data về review trên Amazon.
7. Gõ vào terminal và tiến hành chạy chương trình: node index.js.
8. Khi chạy xong, sẽ xuất hiện file reviews.json, trong đấy bao gồm toàn bộ thông tin về các review của sản phẩm đó, từ lần thứ 2 chạy, file reviews.json sẽ tự động update thêm những review mới vào.
