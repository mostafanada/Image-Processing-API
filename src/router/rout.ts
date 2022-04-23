import express from 'express';
import showimage from './showimage/showimage';
const routes = express.Router();

routes.get('/server', (req: express.Request, res:express.Response): void => {
  res.send("sh3'al ya ryes");
});
routes.use('/image', showimage);

export default routes;
