import Contact from "../models/Contact.js";
import mongoose from "mongoose";

export const contactUs = async (req, res) => {
  const postCommentData = req.body;
  const postComment = new Contact(postCommentData);
  try {
    await postComment.save();
    res.status(200).json("Posted a comment successfully");
  } catch (error) {
    console.log(error);
    res.status(409).json("Couldn't post a new comment");
  }
};
