
import { Router } from "express";

export const tickersRouter = Router();

const tickers = [
    {
        firstPrice: "133.80",
        high: "138.42",
        lastPrice: "134.38",
        low: "129.74",
        priceChange: "2.14",
        priceChangePercent: "1.62",
        quoteVolume: "42172881.45",
        symbol: "SOL_USDC",
        trades: "18429",
        volume: "313842.18"
    },
    {
        firstPrice: "1000.00",
        high: "1009.40",
        lastPrice: "1001.50",
        low: "999.80",
        priceChange: "1.50",
        priceChangePercent: "0.15",
        quoteVolume: "124908.30",
        symbol: "TATA_INR",
        trades: "128",
        volume: "124.72"
    }
];

tickersRouter.get("/", async (req, res) => {
    res.json(tickers);
});
