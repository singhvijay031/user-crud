const express = require("express");
const app = express();
const indexRouter = require("./routes/index.route");
const userRouter = require("./routes/users.route");
const postRouter = require("./routes/users.route");

app.use(express.json());

app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/post", postRouter);

app.listen(8080, () => {
  console.log("Server is running");
});
