import { Router } from "express";

export const tradesRouter = Router();

tradesRouter.get("/", async (req, res) => {
    const { symbol } = req.query;
    const price = symbol === "TATA_INR" ? "1001.50" : "134.38";

    res.json([
        {
            id: 1,
            isBuyerMaker: false,
            price,
            quantity: "1.00",
            quoteQuantity: price,
            timestamp: Date.now()
        }
    ]);
})
