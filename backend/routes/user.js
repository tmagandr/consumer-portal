const UserController = require('../controller/user_controller');

module.exports = (app) => {
  app.get('/api/users', UserController.get)
  app.post('/api/users', UserController.create);
  app.put('/api/users/:id', UserController.edit);
  app.delete('/api/users/:id', UserController.delete);

}
