import mongoose from "mongoose";

const likedSchema = new mongoose.Schema({
  title: String,
  artist: String,
  likedAt: { type: Date, default: Date.now }
});

export default mongoose.model("LikedSong", likedSchema);
