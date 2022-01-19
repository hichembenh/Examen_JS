const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password,
            "test"
        ).toString(),
        isAdmin:req.body.isAdmin
    });
    console.log(newUser)

    try {
        const savedUser = await newUser.save();
        console.log('saved',savedUser)
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

//LOGIN

router.post("/login", async (req, res) => {
    try {
        console.log(req.body)
        const user = await User.findOne({username: req.body.username});
        if (!user) {
            console.log("no user")
            return res.status(401).json("Wrong username!");
        }

        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            "test"
        );
        const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        console.log(OriginalPassword)

        if(OriginalPassword !== req.body.password) {
            console.log("bad password")
            return res.status(401).json("Wrong credentials!");
        }
        const accessToken = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin,
            },
            "test",
            {expiresIn: "3d"}
        );

        const {password, ...others} = user._doc;

        console.log("connected")
        res.status(200).json({...others, accessToken});
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

module.exports = router;
