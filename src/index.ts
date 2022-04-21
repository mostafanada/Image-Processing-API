import express from 'express';
import router from './router/rout';
// import filecheck from './functions/checkimages';

const app = express();
const port = 3000;
app.use('/', router);

app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});
// const test=filecheck("fjord.jpg","oeg");
// console.log(test);
export default app;
