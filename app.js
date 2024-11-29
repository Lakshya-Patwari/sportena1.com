const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname+"/views/index.html")
});

app.get("/register", (req, res) => {
    res.sendFile(__dirname+"/views/register.html")
})

app.post('/auth/register', (req, res) => {
    const { name, college, phone, email, sport } = req.body;

    console.log('Form Data:', { name, college, phone, email, sport });

    res.send(`Thank you for registering, ${name}!`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
