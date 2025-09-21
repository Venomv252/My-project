import mongoose from "mongoose";

const portfolioschema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: "True",
    },
    stockId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Stock",
      required: "True",
    },
    quantity: { type: Number, required: true },
    averageBuyPrice: { type: Number, required: true },
    addedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Portfolio = mongoose.model("Portfolio", portfolioschema);
export default Portfolio;
