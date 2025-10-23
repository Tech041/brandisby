import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import authRouter from "./routes/user.auth.route.js";
import tenantRouter from "./routes/tenant.onboarding.route.js";
import connectCloudinary from "./config/cloudinary.js";
import productRouter from "./routes/product.route.js";

const app = express();
// DB connection
connectDB();
connectCloudinary();
const allowedOrigin = [process.env.LOCAL_HOST, process.env.CLIENT_URL];

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: allowedOrigin,
    credentials: true,
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(helmet());

// Routes
app.use("/api", authRouter);
app.use("/api", tenantRouter);
app.use("/api", productRouter);
app.get("/", (req, res) => {
  res.send("API WORKING");
});

// Global error handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// app.use((req, res, next) => {
//   console.log(`Incoming request: ${req.method} ${req.url}`);
//   next();
// });

export default app;
