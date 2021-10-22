const cors = require('cors');
const express = require("express");
const userRouter = require('./routers/user-router');

const app = express();
app.use(express.static(__dirname + 'public'));
app.use(cors());

app.use('/api/users', userRouter);

const port = 8001;
app.listen(port, () => {
  console.log(`We are live on ${port}`);
});
