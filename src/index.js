const { config } = require('dotenv');
const app = require("./app");

config();

const port = process.env.PORT || 4000;
app.listen( port, () => {
  console.log(`app is running on http://localhost:${port}`)
});