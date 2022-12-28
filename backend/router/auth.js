const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Json Web Token Secure token
JWT_SEC_KEY = "fweer8933223^$83(4]RWE$#)";

router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hasPass = await bcrypt.hash(req.body.password, salt);

    const newuser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hasPass,
    });

    const user = await newuser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json("User Save error" + error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json("Wrong Credensial email");
    }

    const passValidate = await bcrypt.compare(req.body.password, user.password);

    const encptData = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
        data: user,
      },
      JWT_SEC_KEY
    );

    res.json({ status: "Ok", data: encptData });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
