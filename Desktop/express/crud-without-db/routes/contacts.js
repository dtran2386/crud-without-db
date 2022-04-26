const express = require('express')

const router = express.Router()

const { getContacts, getContactById, createContact, updateContactById, deleteContact } = require('../controllers/contacts')

router.route('/').get(getContacts).post(createContact)
router.route('/:id').get(getContactById).patch(updateContactById).delete(deleteContact)

module.exports = router