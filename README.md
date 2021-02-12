# MERN

## Client

```powershell
npx create-react-app client
```

Start

```powershell
npm start
```

conect server nodejs

```json
{
  ...
  "proxy": "http://localhost:5000/",
  ...
}

```

## Server
port

```javascript
var port = normalizePort(process.env.PORT || "5000");
```

# MERN

start mern

Build client:

```powershell
cd client && npm install && npm install --only=dev --no-shrinkwrap && npm run build
```

React build:

```javascript
app.use(express.static("./../client/build"));
```

Run server

```powershell
cd server && npm start
```
