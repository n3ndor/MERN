const express = require("express");
const app = express();
//add cors for cross-origin requests
const cors = require("cors")
app.use(cors())
const port = 8000;
app.use(express.json());
require("./config/mongoose.config");
app.use(express.urlencoded({ extended: true }));
//shorthand import
require("./routes/person.routes")(app);
//the same import in longhand
// const personRoutes = require("./routes/person.routes"); //assign the exported function to a const
// personRoutes(app); // invoke the function and pass in the express "app" server



app.listen(port, () => console.log(`Listening on port: ${port}`));