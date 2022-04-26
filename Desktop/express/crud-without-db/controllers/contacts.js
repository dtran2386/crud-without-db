const uuid = require('uuid')

let contacts = require('../contacts-seed')

exports.getContacts = (req, res) => {
  res.json(contacts)
}

exports.getContactById = (req, res) => {
  const id = req.params.id

  for (let contact of contacts) {
    if (contact.id === id) {
      res.json(contact)
      return
    }
  }

  res.status(404).json({ message: 'Contact not found' });
}

exports.createContact = (req, res) => {
  const { name, age, race } = req.body

  const newContact = {
    id: uuid.v4(),
    name,
    age,
    race
  }

  contacts.push(newContact)

  res.json(newContact)
}

exports.updateContactById = (req, res) => {
  const id = req.params.id
  const { name, age, race } = req.body

  const updatedContact = {
    name,
    age,
    race
  }

  for (let contact of contacts) {
    if (contact.id === id) {
      contact.name = name
      contact.age = age
      contact.race = race
    }

    res.json(updatedContact)
  }
}

exports.deleteContact = (req, res) => {
  const id = req.params.id

  contacts = contacts.filter(item => {
    if (item.id !== id) {
      return true
    }
    return false
  })

  res.json({ message: 'Deleted contact from list' })
}