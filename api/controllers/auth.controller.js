import User from "../models/user.model.js"
import bcrypt from "bcrypt";

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password || username === '' || email === '' || password === '') {
        return res.status(400).json({ message: "All fields are required" });
    }

    //hashing password 
    const hashedPassword = bcrypt.hashSync(password, 10);

    const newUser = new User({
        username,
        email,
        password: hashedPassword,
    })

    // to handle exceptions if user details is not unique
    try {
        await newUser.save();
        res.json({ message: "Signup successful" })
    } catch (error) {
        next(error);
    }
}