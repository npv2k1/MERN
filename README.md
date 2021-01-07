# MERN

## Client

Đây là folder chứa code FontEnd sử dụng react. Cách khởi tạo.

```powershell
npx create-react-app client
```

Để chạy ta sử dụng lệnh:

```powershell
npm start
```

Cách kết nối react app với server nodejs

```json
{
  ...
  "proxy": "http://localhost:5000/",
  ...
}

```



## Server

Đây là folder chứa code BackEnd.

cài đặt port  của server là 5000 để kết nối với react app

```javascript
var port = normalizePort(process.env.PORT || '5000');
```

# MERN

Cách bước để chạy mern

Build client:

```powershell
cd client && npm install && npm install --only=dev --no-shrinkwrap && npm run build
```

Thêm folder client vào server

```javascript
app.use(express.static("./../client/build"));
```

Chạy server

```powershell
cd server && npm start
```

