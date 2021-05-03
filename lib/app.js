// import dependencies
import express from 'express';
import cors from 'cors';
import movies from '../data/movies.js';

// make an express app
const app = express();

// allow our server to be called from any website
app.use(cors());

/* // example route to see if app is alive!
app.get('/hello', (req, res) => {
  // send back a short response
  res.send('Hello World!');
}); */

app.get('/api/movies', (req, res) => {
  res.json(movies);
});

app.get('/api/movies/0', (req, res) => {
  res.json(movies[0]);
});

export default app;