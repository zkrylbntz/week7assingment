// Import packages
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

// Set up packages
const app = express();

app.use(express.json());

app.use(cors());

// Set up configs
dotenv.config();

// Set up db pool with connection string from .env
const dbConnectionString = process.env.DATABASE_URL;
export const db = new pg.Pool({ connectionString: dbConnectionString });

// Set up a port and listen to it
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Ready to rumble on PORT ${PORT}`);
});

// Endpoint for root route
app.get("/", (req, res) => {
  res.json({
    message: "You are looking at my root route.",
  });
});

// My endpoints
// I need an endpoint to READ data from db --> SQL query to get data
app.get("/reviews", async (req, res) => {
  try {
    const reviewsData = await db.query(`SELECT * FROM reviews`);
    console.log(reviewsData);
    res.status(200).json(reviewsData.rows);
  } catch (error) {
    console.error("This is an error!", error);
    res.status(500).json({ success: false });
  }
});

// I need an endpoint to CREATE data in the db --> we are going to use SQL query to  add the data. The data here is stored in the body, so we will add the body data to the db.
app.post("/add-review", async (req, res) => {
  try {
    const { users_name, book_name, review, rating } = req.body;
    const newReview = await db.query(
      `INSERT INTO reviews (users_name, book_name, review, rating)
          VALUES ($1, $2, $3, $4);`,
      [users_name, book_name, review, rating]
    );
    res.status(200).json(newReview.rows);
  } catch (error) {
    console.error("This is an error!", error);
    res.status(500).json({ success: false });
  }
});

// STRECTH GOALS
// An endpoint for deleting data --> we need params

// SUPER MEGA STRETCH GOAL
// An endpoint to update the data
