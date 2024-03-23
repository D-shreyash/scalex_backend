import Price from "../models/PricingAndTransactionModel.js";

export const setPrice = async (req, res) => {
  try {
    const {
      chainId,
      dexId,
      url,
      pairAddress,
      baseToken,
      quoteToken,
      priceNative,
      priceUsd,
      volume,
      priceChange,
      liquidity,
      pairCreatedAt,
      info: { imageUrl, websites, socials },
    } = req.body;

    const ChainId = await Price.findOne({ quoteToken });

    if (ChainId) {
      return res.status(400).json({ error: "crypto already exist" });
    }

    if (
      !(
        chainId &&
        dexId &&
        url &&
        pairAddress &&
        baseToken &&
        quoteToken &&
        priceNative &&
        priceUsd &&
        volume &&
        priceChange &&
        liquidity &&
        pairCreatedAt
      )
    ) {
      return res.status(400).json({ error: "Missing or invalid fields" });
    }

    const newPrice = new Price({
      chainId,
      dexId,
      url,
      pairAddress,
      baseToken,
      quoteToken,
      priceNative,
      priceUsd,
      volume,
      priceChange,
      liquidity,
      pairCreatedAt,
      info: { imageUrl, websites, socials },
    });

    if (newPrice) {
      await newPrice.save();
      return res.status(201).json({ success: "Data saved successfully done" });
    } else {
      return res.status(400).json({ error: "Invalid Crypto data" });
    }
  } catch (e) {
    console.log(e);
  }
};

export const getdata = async (req, res) => {
  try {
    let dataToSend = await Price.find();
    res.json(dataToSend);
  } catch (error) {
    console.error("Error fetching records:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
