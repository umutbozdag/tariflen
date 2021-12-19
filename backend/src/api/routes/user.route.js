const express = require('express')
const router = express.Router()
const { createUserHandler, getUsersHandler, getUserHandler, deleteUserHandler, updateUsersHandler } = require('../controller/user.controller')

// Create user
router.post('/', createUserHandler)

// Get users
router.get('/', getUsersHandler)

// Get one user
router.get('/:userId', getUserHandler)

// Delete user
router.delete('/:userId', deleteUserHandler)

// Update user
router.put('/:userId', updateUsersHandler)

module.exports = router