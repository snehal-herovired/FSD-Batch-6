const bcrypt = require('bcrypt');
const UserModel = require("../models/userModel");

const registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    console.log(username, email, password);
    let userobj = {
        username: username,
        password: password,
        email: email
    };
    try {
        let data = await UserModel(userobj).save();
        if (data) {
            return res.json({
                message:"data inserted successfully"
            });
        }
        return res.json({
            message:"data not inserted"
        });
    } catch (error) {
        return res.json({
            message:"Error"
        });
    }
};

const loginUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await UserModel.findOne({ username, email });
    if (!user) {
      return res.json({ error: 'User not found' });
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid password' });
    }
    // const token = user.generateAuthToken();
    res.json({ user });
  } catch (error) {
    return res.json({
        message:"Error"
    });
  }
};

module.exports = {
    registerUser,
    loginUser
};
