// routes/auth.js
const express = require('express');
const jwt     = require('jsonwebtoken');
const User    = require('../models/User');
const router  = express.Router();

// Register
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, department, role } = req.body;
    // Düz şifreyle yarat
    const user = await User.create({ name, email, password, department, role });
    res.status(201).json({ message: 'Kayıt başarılı' });
  } catch(err) {
    res.status(400).json({ error: err.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) 
      return res.status(404).json({ error: 'Kullanıcı bulunamadı' });

    // bcrypt yok, düz karşılaştırma:
    if (password !== user.password) 
      return res.status(401).json({ error: 'Şifre yanlış' });

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET || 'secretkey',
      { expiresIn: '1d' }
    );
    res.json({
      token,
      user: { id: user._id, name: user.name, email: user.email }
    });
  } catch(err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
