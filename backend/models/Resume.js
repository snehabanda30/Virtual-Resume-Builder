const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for a Resume
const resumeSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',  // Reference to the User model
    required: true
  },
  personalInfo: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    address: { type: String },
    summary: { type: String } // A short summary or objective
  },
  workExperience: [{
    jobTitle: { type: String, required: true },
    company: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    responsibilities: { type: String } // Key responsibilities for the job
  }],
  education: [{
    degree: { type: String, required: true },
    school: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    grade: { type: String }, // e.g., GPA or other grade information
    activities: { type: String } // Extracurricular activities, if any
  }],
  skills: [{
    skillName: { type: String, required: true },
    proficiency: { type: String } // e.g., Beginner, Intermediate, Advanced
  }],
  certifications: [{
    certificationName: { type: String },
    issuingOrganization: { type: String },
    issueDate: { type: Date },
    expirationDate: { type: Date }
  }],
  projects: [{
    projectName: { type: String },
    description: { type: String },
    technologiesUsed: { type: [String] }, // Array of technologies
    startDate: { type: Date },
    endDate: { type: Date }
  }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Create a model for the Resume schema
const Resume = mongoose.model('Resume', resumeSchema);

module.exports = Resume;
