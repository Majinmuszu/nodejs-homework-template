const Contact = require("./schemas/contact");
const User = require("./schemas/user");

/// Contacts

const getAllContacts = (owner) => Contact.find({ owner });
const getContactById = (id) => Contact.findById(id);
const createContact = ({ name, email, phone, _id }) =>
  Contact.create({ name, email, phone, owner: _id });
const removeContact = (id) => Contact.findByIdAndRemove(id);
const updateContact = ({ id, name, email, phone, favorite }) =>
  Contact.findByIdAndUpdate(id, { name, email, phone, favorite });
const getFavContacts = (favorite, owner) => Contact.find({ favorite, owner });

///Users

const getAllUsers = () => User.find();
const getUser = (email) => User.findOne({ email });
const getUserById = (_id) => User.findOne({ _id });
const updateUserSubscription = (_id, subscription) =>
  User.findOneAndUpdate({ _id }, { subscription });
const updateUserJWT = (_id, token) => User.findByIdAndUpdate(_id, { token });

module.exports = {
  createContact,
  removeContact,
  updateContact,
  getAllContacts,
  getContactById,
  getFavContacts,
  getUser,
  getAllUsers,
  updateUserSubscription,
  getUserById,
  updateUserJWT,
};
