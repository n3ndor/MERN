const express = require("express");
const app = express();
//add cors for cross-origin requests
const cors = require("cors")
app.use(cors())


//shorthand import
require("./routes/person.routes")(app);
//the same import in longhand
// const personRoutes = require("./routes/person.routes"); //assign the exported function to a const
// personRoutes(app); // invoke the function and pass in the express "app" server



app.listen(8000, () => console.log(`Listening on port: ${port}`));