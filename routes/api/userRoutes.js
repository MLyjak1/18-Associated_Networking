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
// /api/users/:userId/friends

router.route('/:userId/friends').post(addFriend);

// /api/users/:userId/friends/:userId

router.route('/:userId/friends/:userId').delete(removeFriend);

module.export = router;























module.exports = router;