var User = require('../models/users');


function getUsers(req, res, next) {
  User.find({}, function(err, users) {
    if (err) {
      res.send(err);
    } else {
      return res.json(users);
    }
  });
}

function createUser(req, res, next) {
  var user = new User(req.body)
  user.save(function(err, user) {
    if (err) {
      res.send(err);
    } else {
      res.json(user);
    }
  });
}

function getUser(req, res, next) {
  User.findById(req.params.id, function(err, user){
    if (err) {
      res.send(err)
    } else {
      if (!user) {
        res.status = 404;
        res.json({error: 'Not found'});
      } else {
        res.json(user);
      }
    }
  });
}

function updateUser(req, res, next) {
  User.findById(req.params.id, function(err, user) {
    if (err) {
      res.send(err);
    } else {
      if (!user) {
        res.status = 404;
        res.json({error: 'Not found'});
      }
      Object.assign(user, req.body).save((err, user) => {
        if (err) {
          res.send(err)
        } else {
          return res.json(user);
        }
      })
    }
  })
}

function deleteUser(req, res, next) {
  User.findById(req.params.id, function(err, user) {
    if (err) {
      res.send(err);
    } else {
      if (!user) {
        res.status = 404;
        res.json({error: 'Not found'})
      } else {
        user.remove(function(err) {
          if (err) {
            res.send(err);
          } else {
            return res.json({status: 'Ok'});
          }
        });
      }
    }
  })
}

module.exports = {getUsers, getUser, createUser, updateUser, deleteUser};
