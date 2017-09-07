# group-project

Clone and NPM install
```bash
$ git clone
$ npm install
```

Create .env file and update credentials
```bash
$ touch .env
```
```bash
PORT=<Local Port>
DB_PORT=<DB PORT>
DB_URL=postgres://user:password@localhost:port/dbname
DB_USER=<USER>
DB_PASSWORD=<YOUR PASSWORD>
DB_NAME=<DB NAME>
```
If connecting locally, ensure you the database created

Start up the server
```bash
node index.js
nodemon index.js
```
