const router = require('express').Router();
const { getUsers, getSingleUser, createUser, updateUser, deleteUser, addFriend, removeFriend } = require('../../controllers/userController');

// /api/users/
router.route('/')
    .get(getUsers)
    .post(createUser);

// /api/users/:userId
router.route('/:userId')
    .get(getSingleUser)
    .delete(deleteUser)
    .put(updateUser);

// /api/users/:userId/friends/:fiendId

router.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(removeFriend);

module.export = router;























module.exports = router;