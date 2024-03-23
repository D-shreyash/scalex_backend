import mongoose from "mongoose";

const PricingAndTransactionSchema = new mongoose.Schema(
  {
    chainId: {
      require: true,
      type: String,
    },
    dexId: {
      require: true,
      type: String,
    },
    url: {
      require: true,
      type: String,
    },
    pairAddress: {
      require: true,
      type: String,
    },
    baseToken: {
      address: String,
      name: String,
      symbol: String,
    },
    quoteToken: {
      address: String,
      name: String,
      symbol: String,
    },
    priceNative: String,
    priceUsd: String,
    volume: {
      h24: Number,
      h6: Number,
      h1: Number,
      m5: Number,
    },
    priceChange: {
      h24: Number,
      h6: Number,
      h1: Number,
      m5: Number,
    },
    liquidity: {
      usd: Number,
      base: Number,
      quote: Number,
    },
    pairCreatedAt: Date,
    info: {
      imageUrl: String,
      websites: [
        {
          label: String,
          url: String,
        },
      ],
      socials: [
        {
          types: String,
          url: String,
        },
      ],
    },
  },
  { timestamps: true }
);

const Price = mongoose.model("price", PricingAndTransactionSchema);

export default Price;
