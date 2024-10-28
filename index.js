const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());

app.use(cors());

const port = process.env.PORT || 5500;

let users = [];

function randomNumber() {
    return Math.floor(Math.random() * 10000000)
}

app.post("/user", (req, res) => {
    const newUser = {
        Id: randomNumber(),
        name: req.body.name,
        Rollnum: req.body.Rollnum,
        password: req.body.password
    }
    users.push(newUser);
    res.status(201).json({ message: "user created successfully", users })
})

app.get("/user", (req, res) => {
    res.status(200).json({ message: "users", users })
})

const data = {
    name: "Mustafa",
    Rollnum: "21",
    status: true
}
app.get("/go", (req, res) => {
    res.json(data);
})

//crud operations create post  read get update put/patch  delete
app.get("/about", (req, res) => {
    res.status(200).send("this is about page ");
})
app.get("/contact", (req, res) => {
    res.send("this is contact page ");
})
app.get("/home", (req, res) => {
    res.send("this is  page ");
})


app.listen(port, () => {
    console.log(`Example app listening at ${port}`);
});
