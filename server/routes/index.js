import Users from '../controllers/user';

export default (app) => {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.get(
    '/api', (req, res) => res.status(200).send({
      message: 'Welcome to the BookStore API!'
    })
  );

  app.get(
    '/api/test', (req, res) => res.status(200).send({
      message: 'Test message from CRUD-1!'
    })
  );

  app.post('/api/users', Users.signUp);

  app.get('/api/users/get-all', Users.getAllUsers);
};