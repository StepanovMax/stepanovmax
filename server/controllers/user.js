import model from '../models';

const { User } = model;
console.log('>> userSignUp')
class Users {
  static signUp(req, res) {
    const { name, username, email, password } = req.body
    return User.create({
      name,
      username,
      email,
      password
    }).then(
      userData => res.status(201).send({
        success: true,
        message: 'User successfully created',
        userData
      })
    )
  }

  static getAllUsers(req, res) {
    return User.findAll({
      raw: true,
    }).then(
      userData => res.status(201).send({
        success: true,
        message: 'Users successfully showed',
        userData
      })
    )
  }
}

export default Users;