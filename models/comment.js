import mongoose from "mongoose";
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  username: { type: String, required: true },
  playlistId: { type: Schema.Types.ObjectId, ref: "Playlist" },
},
  { timestamps: false }
);

export default mongoose.model("Comment" , commentSchema)