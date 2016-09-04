var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/users')
/* GET users listing. */
router.get('/', userCtrl.getUsers);
router.post('/', userCtrl.createUser);

router.get('/:id', userCtrl.getUser);
router.put('/:id', userCtrl.updateUser);
router.delete('/:id', userCtrl.deleteUser);


module.exports = router;
