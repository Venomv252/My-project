import mongoose from "mongoose";

const Stockschema = new mongoose.Schema({
  symbol: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  currentPrice: { type: Number, required: true },
  historicalData: [{ date: Date, price: Number, volume: Number }],
  lastUpdated: { type: Date, default: Date.now },
},
{timestamps:true}
);

const Stock = mongoose.model('Stock',Stockschema);
export default Stock;