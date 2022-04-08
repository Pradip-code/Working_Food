import express from "express";
import ejs from "ejs";
import expressLayouts from "express-ejs-layouts";
import webRoute from "./routes/web.js"
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

// express server setup
const app = express();
//assets
app.use(webRoute);
app.use(expressLayouts);
app.use(express.static(join(__dirname, "../public")));
app.set("views", join(__dirname, "../resources/views"));
//const Partialss = join(__dirname, "../template/partials");

app.set("view engine", "ejs");

//





//server config
app.listen(process.env.PORT, () => {
  console.log(`server is running  `);
});
