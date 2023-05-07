const express = require('express');
const cors = require('cors');
const app = express();

// middleware
app.use(cors())

const port = process.env.PORT || 5000;

const user = [
    {id: 1, name: 'Manna', email: 'mannainfo@gmail.com'},
    {id: 2, name: 'Joshim', email: 'joshim@gmail.com'},
    {id: 3, name: 'Sabnur', email: 'sabnurfo@gmail.com'},
]


app.get('/', (req, res) => {
    res.send('Users management server running')
})

app.get('/user', (req, res) => {
    res.send(JSON.stringify(user));
})

app.listen(port, () => {
    console.log(`Server is running port: ${port}`);  
})