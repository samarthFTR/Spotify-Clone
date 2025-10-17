import express from "express";
import Song from "../models/song.model.js";

const router = express.Router();

// Get all songs
router.get("/", async (req, res) => {
  const songs = await Song.find();
  res.json(songs);
});

// Add new song
router.post("/", async (req, res) => {
  const { title, artist } = req.body;
  const newSong = new Song({ title, artist });
  await newSong.save();
  res.status(201).json(newSong);
});

export default router;
