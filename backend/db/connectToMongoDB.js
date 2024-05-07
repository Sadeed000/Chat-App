import mongoose from "mongoose";

const connectToMongoDB = async () => {
	try {
		await mongoose.connect('mongodb+srv://khsadeed000:sadeed0786@cluster0.4zikal0.mongodb.net/');
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;


