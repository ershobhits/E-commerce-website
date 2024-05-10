import mongoose from "mongoose";
// import colors from "colors";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://ecommerce01:anshumanec01@clusterec0.zx7porb.mongodb.net/ecommerce"
    );
    mongoose.set("bufferCommands", false);
    console.log(`DataBase connected succesfully `);
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`);
  }
};

export default connectDB;
