const express = require("express");

const app = express();

const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("<h1>Hello World! - from my rest api server</h1>");
});

app.get('/users', (req, res) => {
    const users = [
        {
            id: 1,
            name: 'user 1',
            age: 25,
        },
        {
            id: 2,
            name: 'user 2',
            age: 30,
        }
    ];

    res.json(users);
});