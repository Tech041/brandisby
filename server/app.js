import express from "express";
import "dotenv/config";
import connectDB from "./config/mongodb.js";

const app = express();
connectDB()

export default app;
