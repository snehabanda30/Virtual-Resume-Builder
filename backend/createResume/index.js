// backend/index.js
const { CosmosClient } = require('@azure/cosmos');
const connectToDatabase = require('./config/cosmosConfig');
const User = require('./models/User'); // Assuming you still have access to your Mongoose models

// Connect to Cosmos DB (this is your existing Cosmos DB connection logic)
connectToDatabase();

// Example of an Azure Function that handles a POST request for creating a resume
module.exports.createResume = async function (context, req) {
  const { userId, personalInfo, workExperience, education, skills, certifications, projects } = req.body;

  // Find the user to ensure they exist
  try {
    const user = await User.findById(userId);
    if (!user) {
      context.res = {
        status: 404,
        body: 'User not found'
      };
      return;
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

    context.res = {
      status: 201,
      body: newResume
    };
  } catch (err) {
    context.res = {
      status: 500,
      body: 'Error creating resume: ' + err.message
    };
  }
};
