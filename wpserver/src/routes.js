const { Router } = require('express');
const fs = require('fs');
const Redis = require("ioredis");
const redis = new Redis({  
  host: 'redis',   // Redis host
})

const routes = Router();

routes.get('/redis', (req, res) => {

  // Arguments to commands are flattened, so the following are the same:
  redis.sadd('set', 1, 3, 5, 7);
  redis.sadd('set', [1, 3, 5, 7]);
    
  // All arguments are passed directly to the redis server:
  redis.set('key', 100, 'EX', 10);

  
  redis.set('foo', 'bar');
  redis.get('foo', function (err, result) {
    console.log(result);
  });
   
  // Or using a promise if the last argument isn't a function
  redis.get('key').then(function (result) {
    console.log(result);
  });
     
  // Or using a promise if the last argument isn't a function
  redis.get('foo').then(function (result) {
    console.log(result);
  });
   


  res.render('index', { title: 'Redis!!' });
});

/**
 * GET home page
 */
routes.get('/', (req, res) => {
  try {
    const db = fs.readFileSync('/run/secrets/db_password', 'utf8'); ///run/secrets/DB_PASSWORD
    console.log('db3!!!!', db)    
  } catch (err) {}

  res.render('index', { title: 'Express!' });
});

/**
 * GET /list
 *
 * This is a sample route demonstrating
 * a simple approach to error handling and testing
 * the global error handler. You most certainly want to
 * create different/better error handlers depending on
 * your use case.
 */
routes.get('/list', (req, res, next) => {
  const { title } = req.query;

  if (title == null || title === '') {
    // You probably want to set the response HTTP status to 400 Bad Request
    // or 422 Unprocessable Entity instead of the default 500 of
    // the global error handler (e.g check out https://github.com/kbariotis/throw.js).
    // This is just for demo purposes.
    next(new Error('The "title" parameter is required'));
    return;
  }

  res.render('index', { title });
});

module.exports = routes;
