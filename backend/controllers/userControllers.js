//controller for handling the functionality for user routes
//fetches data from db (async process) and responds with json

import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

//@desc    Auth user & get token
//@route   POST /api/users/login
//@access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  //comparing entered pw with db pw using matchPassword
  //method defined in userModel.js
  //if true, responding with json containing user data
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: null,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password.');
  }
});

export { authUser };
