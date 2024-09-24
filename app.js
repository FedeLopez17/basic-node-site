import { createServer } from "http";
import * as fs from "fs";

const server = createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  console.log(req.url);

  let page = "./views/";

  switch (req.url) {
    case "/":
      page += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      page += "about.html";
      res.statusCode = 200;
      break;
    case "/contact":
      page += "contact-me.html";
      res.statusCode = 200;
      break;
    default:
      page += "404.html";
      res.statusCode = 404;
  }

  fs.readFile(page, (err, data) => {
    if (err) {
      console.log.err;
    } else {
      res.end(data);
    }
  });
});

server.listen(8080, "localhost", () =>
  console.log("Listening for requests on port 8080")
);
