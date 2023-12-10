const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const path = require("path");
const authRoutes = require("./routes/auth");
const displayRoutes = require("./routes/display");
const batteryRoutes = require("./routes/battery");
const touchRoutes = require("./routes/touch");
const lcdRoutes = require("./routes/lcd");
const logicRoutes = require("./routes/logic");
const ribonRoutes = require("./routes/ribon");
const speakerRoutes = require("./routes/speaker");
const ribonSwitchRoutes = require("./routes/ribonSwitch");
const backShellRoutes = require("./routes/backShell");
const simTryRoutes = require("./routes/simTry");
const ocaRoutes = require("./routes/oca_glass");
const glassRoutes = require("./routes/glass");
const bodyRoutes = require("./routes/body");

// midleware
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

app.use(express.json());
// app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/display", displayRoutes);
app.use("/api/battery", batteryRoutes);
app.use("/api/touch", touchRoutes);
app.use("/api/lcd", lcdRoutes);
app.use("/api/logic", logicRoutes);
app.use("/api/ribon", ribonRoutes);
app.use("/api/speaker", speakerRoutes);
app.use("/api/switch", ribonSwitchRoutes);
app.use("/api/shell", backShellRoutes);
app.use("/api/sim", simTryRoutes);
app.use("/api/oca", ocaRoutes);
app.use("/api/glass", glassRoutes);
app.use("/api/body", bodyRoutes);

connectDB();

const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build/")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
