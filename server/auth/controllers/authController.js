const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../modules/user");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables

// =======================================
// Controller: Create a New User
// =======================================
exports.createUser = [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be at least 8 characters").isLength({ min: 8 }),
    async (req, res) => {
        // Validate user input
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            // Check if user already exists
            const existingUser = await User.findOne({ email: req.body.email });
            if (existingUser) {
                return res.status(400).json({ msg: "User already exists" });
            }

            // Hash the password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt);

            // Create a new user
            const newUser = await User.create({
                email: req.body.email,
                password: hashedPassword,
            });

            // Generate JWT token
            //const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

            res.status(201).json({ msg: "User created successfully", user: newUser });
        } catch (error) {
            console.error("Error creating user:", error);
            res.status(500).json({ msg: "Server error" });
        }
    }
];

// =======================================
// Controller: User Login
// =======================================
exports.loginUser = [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password is required").exists(),
    async (req, res) => {
        // Validate user input
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            // Check if user exists
            const user = await User.findOne({ email: req.body.email });
            if (!user) {
                return res.status(400).json({ msg: "Invalid credentials" });
            }

            // Compare passwords
            const isMatch = await bcrypt.compare(req.body.password, user.password);
            if (!isMatch) {
                return res.status(400).json({ msg: "Invalid credentials" });
            }

            // Generate JWT token
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

            res.status(200).json({ msg: "User logged in successfully", user, token });
        } catch (error) {
            console.error("Error logging in:", error);
            res.status(500).json({ msg: "Server error" });
        }
    }
];

// =======================================
// Controller: Get User Details
// =======================================
exports.getUserDetails = async (req, res) => {
    try {
        // Fetch user details excluding the password
        const user = await User.findById(req.user.id).select("-password");
        res.status(200).json({ user });
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ msg: "Server error" });
    }
};

// =====================================
// Controller: Update User Details
// =====================================
exports.updateUserDetails = async (req, res) => {
    try {
        const { password, ...updateFields } = req.body;

        // Get user from DB
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ msg: "Invalid password" });
        }

        // Update user fields (excluding password)
        const updatedUser = await User.findByIdAndUpdate(
            req.user.id,
            { $set: updateFields },
            { new: true, runValidators: true }
        ).select("-password");

        res.status(200).json({ msg: "User updated successfully", user: updatedUser });
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ msg: "Server error" });
    }
};
