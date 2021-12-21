const express = require('express')
const router = express.Router()
const { createUserHandler, getUsersHandler, getUserHandler, deleteUserHandler, updateUsersHandler, getUserWithUsernameHandler } = require('../controller/user.controller')

// Create user
router.post('/', createUserHandler)

// Get users
router.get('/', getUsersHandler)

// Get one user
router.get('/:email', getUserHandler)

router.get('/profile/:username', getUserWithUsernameHandler)

// Delete user
router.delete('/:email', deleteUserHandler)

// Update user
router.put('/:email', updateUsersHandler)

module.exports = router