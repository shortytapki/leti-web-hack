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
    description: "Тёплая женская кофта",
    image: `https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=1972&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
  },
  {
    category: 3,
    id: 3,
    title: 'Унисекс',
    description: "Унисекс товар",
    price: 1000,
    image: `https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=1972&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
  },
  {
    category: 4,
    id: 4,
    title: 'Аксессуар',
    description: "Красивый аксессуар",
    price: 1000,
    image: `https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=1972&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
  },
  {
    category: 5,
    id: 5,
    title: 'Ремувка',
    description: "Крутая ремувка",
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
  return res.json(users.at(0));
});

app.post('/api/v1/auth/register', (req, res) => {
  return res.json(users.at(0))
})
app.listen(port, () => {
  console.log(`The server listening on port ${port}`)
});