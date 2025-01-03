const express = require('express');
const Resume = require('./models/Resume');
const User = require('./models/User');
const router = express.Router();

// Route to create a new resume
router.post('/createResume', async (req, res) => {
  try {
    const { userId, personalInfo, workExperience, education, skills, certifications, projects } = req.body;
    
    // Find the user to ensure they exist
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send('User not found');
    }

    // Create a new resume
    const newResume = new Resume({
      user: user._id,
      personalInfo,
      workExperience,
      education,
      skills,
      certifications,
      projects
    });

    // Save the resume to the database
    await newResume.save();
    res.status(201).json(newResume);
  } catch (err) {
    res.status(500).send('Error creating resume: ' + err.message);
  }
});

module.exports = router;
