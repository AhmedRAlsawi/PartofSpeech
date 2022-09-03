const express = require("express");
const app = express();
const cors = require("cors");
const bp = require("body-parser");
const taskDataRoutes = require("./routes/taskData.route");
const rankRoutes = require("./routes/Rank.route");
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});

app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
/**
 * To set the base URL for data routes
 */
app.use("/task-data", taskDataRoutes);

/**
 * To set the base URL for score routes
 */
app.use("/score", rankRoutes);
