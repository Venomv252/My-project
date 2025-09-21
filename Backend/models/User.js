import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  role: { type: String, default: 'user' },
  portfolio: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Stock' }],
  watchlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Stock' }],
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);
export default User;
