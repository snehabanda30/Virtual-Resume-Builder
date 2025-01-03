// cosmosConfig.js
const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    await mongoose.connect('mongodb+srv://sbanda1:smrLuceAHMXx5ha@resume-builder.mongocluster.cosmos.azure.com/?tls=true&authMechanism=SCRAM-SHA-256&retrywrites=false&maxIdleTimeMS=120000', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to Cosmos DB for MongoDB!');
  } catch (error) {
    console.error('Error connecting to the database:', error);
    process.exit(1);
  }
};

module.exports = connectToDatabase;
