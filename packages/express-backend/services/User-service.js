import mongoose from "mongoose";
import userModel from "../models/UserInfo.js";

mongoose.set("debug", true);

// Future DB connection (if needed directly in service)
// mongoose.connect("mongodb://localhost:27017/closet", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).catch((error) => console.log(error));

function getUsers(name, username) {
  let promise;
  if (name === undefined && username === undefined) {
    promise = userModel.find();
  } else if (name && !username) {
    promise = getUserByName(name);
  } else if (username && !name) {
    promise = getUserByUserName(username);
  } else if (name && job) {
    promise = getUserByNameAndUserName(name, username);
  }
  return promise;
}

function getUserById(_id) {
  return userModel.findById(_id);
  //I dont know if we will need to use an id finder for users but I have it here just incase
}

function getUserByName(name) {
  return userModel.find({ name: name });
}

function getUserByUserName(username) {
  return userModel.find({ username: username });
}

function getUserByNameAndUserName(name, username) {
  return userModel.find({ name: name, username: username });
}

function addUser(user) {
    const userToAdd = new userModel(user);
    const promise = userToAdd.save();
    return promise;
  }

  function delUser(id) {
    return userModel.findByIdAndDelete(id);
}

export default {
  getUsers,
  getUserById,
  getUserByName,
  getUserByUserName,
  getUserByNameAndUserName,
  addUser,
  delUser,
};
