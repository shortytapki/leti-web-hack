const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

// const jsonParser = bodyParser.json();
// const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: '*' }));

app.use(express.static(path.resolve('../client/dist')));
// app.use(bodyParser);
const port = 8080;

const users = [{ username: 'shortytapki', password: '12345678', email: "shorty@tapki.ru" }];
const products = [
  {
    category: 1,
    id: 1,
    title: 'Мужская',
    price: 500,
    description: "Очень тёплая и комфортная",
    image: `https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=1972&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
  },
  {
    category: 2,
    id: 2,
    title: 'Женская',
    price: 500,
    description: "Ещё очень балдёжный товар",
    image: `https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=1972&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
  },
  {
    category: 3,
    id: 3,
    title: 'Унисекс',
    description: "Ещё очень балдёжный товар фуфф кефтеме",
    price: 1000,
    image: `https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=1972&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
  },
  {
    category: 4,
    id: 4,
    title: 'Аксессуар',
    description: "Ещё очень балдёжный товар фуфф кефтеме",
    price: 1000,
    image: `https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=1972&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
  },
  {
    category: 5,
    id: 5,
    title: 'Другое',
    description: "Ещё очень балдёжный товар фуфф кефтеме",
    price: 1000,
    image: `https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=1972&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
  },
]


app.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, '../client/dist/index.html'))
})
app.get('/api/v1/products', (req, res) => {
  return res.json(products)
});

app.post('/api/v1/auth/login', (req, res) => {
  const { username, password } = req.body;
  const authInvoker = users.find(user => user.username === username);
  if (!authInvoker) {
    res.status(400);

    return res.send('No user');
  }
  if (authInvoker.password !== password) {
    res.status(400);
    return res.send('Wrong password');
  }
  return res.json(authInvoker);
});

app.post('/api/v1/auth/register', (req, res) => {

})
app.listen(port, () => {
  console.log(`The server listening on port ${port}`)
});