import express from "express";
import cors from "cors";
import { orderRouter } from "./routes/order-routes";
import { depthRouter } from "./routes/depth-routes";
import { tradesRouter } from "./routes/trade-routes";
import { klineRouter } from "./routes/kline-routes";
import { tickersRouter } from "./routes/ticker-routes";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1/order", orderRouter);
app.use("/api/v1/depth", depthRouter);
app.use("/api/v1/trades", tradesRouter);
app.use("/api/v1/klines", klineRouter);
app.use("/api/v1/tickers", tickersRouter);


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});