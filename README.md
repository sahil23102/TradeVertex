# OrderFlow Exchange

A full-stack crypto exchange simulation built as a learning project for understanding order books, matching engines, real-time market data, and exchange architecture.

This repository is organized into two main phases:

- `week-01-orderbook-foundations`: foundational order book and Binance-style UI/proxy work
- `week-02-trading-exchange`: a multi-service exchange system with API, matching engine, websocket streaming, market data processing, and frontend UI

## Project goals

- Build an order book and matching engine
- Simulate real-time market activity
- Expose market data over HTTP and WebSockets
- Create a trading UI similar to crypto exchange dashboards
- Learn distributed-style backend architecture in a single codebase

## Architecture overview

The system is split into independent services that together mimic a real exchange:

- `trading-frontend`: Next.js UI for viewing markets, charts, order book, and placing orders
- `http-api`: Express API for REST endpoints such as depth, ticker, trades, orders, and kline data
- `matching-engine`: core trade matching logic and order processing
- `websocket-server`: streams live market updates to connected clients
- `market-data-db`: stores and refreshes market data and candlestick-style views
- `market-maker-bot`: generates simulated trading activity for testing and market behavior
- `infrastructure`: Docker Compose configuration for Redis and TimescaleDB/PostgreSQL

## Folder structure

```text
orderbook/
├── README.md
├── .gitignore
├── week-01-orderbook-foundations/
│   ├── day-01-orderbook-basics/
│   └── day-02-binance-ui-and-proxy/
│       ├── binance-market-ui/
│       ├── binance-realtime-market-ui/
│       └── exchange-proxy/
└── week-02-trading-exchange/
    ├── infrastructure/
    ├── http-api/
    ├── market-data-db/
    ├── market-maker-bot/
    ├── matching-engine/
    ├── trading-frontend/
    └── websocket-server/
```

## Tech stack

### Frontend
- Next.js
- React
- React DOM
- Tailwind CSS
- PostCSS
- lightweight-charts
- Axios
- TypeScript

### Backend
- Node.js
- TypeScript
- Express
- Redis
- WebSockets (`ws`)
- PostgreSQL client (`pg`)
- CORS

### Infrastructure and data
- Redis
- Docker
- Docker Compose
- TimescaleDB / PostgreSQL

### Testing and tooling
- Vitest
- TypeScript compiler
- ESLint
- ts-node

## Main services

### 1. Matching engine
The matching engine is responsible for processing orders and executing trades against the order book.

Key responsibilities:
- accept buy/sell orders
- maintain bid/ask order books
- match orders when price crosses
- emit trade events and order updates
- push system messages to downstream services

### 2. HTTP API
The HTTP API exposes REST endpoints for client interactions and data retrieval.

Typical responsibilities:
- order creation
- depth queries
- ticker info
- kline data
- recent trades
- balance-related routes (planned or partial)

### 3. WebSocket server
The websocket service streams realtime updates to the frontend so users can see live price movement and market updates.

### 4. Market data worker
This service gathers and organizes market-related data, likely for historical and derived views such as candlestick aggregates.

### 5. Frontend UI
The trading frontend is a dashboard-style interface that resembles a real crypto exchange.

Typical UI features include:
- market list
- price chart
- order book depth
- trade panel
- order entry panel
- market summary tabs

## Local setup

### Prerequisites
- Node.js 18+
- npm
- Docker and Docker Compose

### Start infrastructure

```bash
cd week-02-trading-exchange/infrastructure
docker compose up -d
```

This starts:
- Redis on port `6379`
- TimescaleDB/PostgreSQL on port `5432`

### Install dependencies for each service

```bash
cd week-02-trading-exchange/matching-engine
npm install

cd ../http-api
npm install

cd ../websocket-server
npm install

cd ../market-data-db
npm install

cd ../trading-frontend
npm install
```

### Run services

Start the matching engine:

```bash
cd week-02-trading-exchange/matching-engine
npm run dev
```

Start the HTTP API:

```bash
cd week-02-trading-exchange/http-api
npm run dev
```

Start the websocket server:

```bash
cd week-02-trading-exchange/websocket-server
npm run dev
```

Start the market data worker:

```bash
cd week-02-trading-exchange/market-data-db
npm run dev
```

Start the frontend:

```bash
cd week-02-trading-exchange/trading-frontend
npm run dev
```

Then open the frontend in the browser, usually on:

```text
http://localhost:3000
```



