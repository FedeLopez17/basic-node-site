import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// We do it this way since __dirname is not available in ES modules (unlike in CommonJS)
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.listen(8080, () => console.log("Listening for requests on port 8080"));

const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

const users = ["Rose", "Cake", "Biff"];

app.get("/", (req, res) => {
  res.render("index", { links, users });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact-me");
});

app.use((req, res) => {
  res.status(404).render("404");
});
