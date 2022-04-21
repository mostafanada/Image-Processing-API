import path from 'path';
import express from 'express';
import checkfile from '../../functions/checkimages';
import resize from '../../functions/resize';
const showimage = express.Router();
showimage.get('/', async (req: express.Request, res: express.Response) => {
  try {
    const name = req.query.filename as string;
    const widthtemp = req.query.width as string;
    const heighttemp = req.query.height as string;
    const width = parseInt(widthtemp);
    const height = parseInt(heighttemp);
    const tempFileName = `${name}_${width}_${height}.jpg`;
    let tempFilePath: string;

    if (!checkfile(`${name}.jpg`, 'oreg')) {
      res.send("File isn't exist");
    } else if (
      req.query.width === undefined &&
      req.query.height === undefined
    ) {
      res.sendFile(path.resolve(`images/oreg/${name}.jpg`));
    } else if (isNaN(width) || isNaN(height)) {
      res.send('Please, Set valid width and height');
    } else {
      if (checkfile(tempFileName, 'temp')) {
        tempFilePath = path.resolve(`images/temp/${tempFileName}`);
      } else {
        tempFilePath = await resize(name, width, height);
        tempFilePath = path.resolve(tempFilePath);
      }
      res.sendFile(tempFilePath);
    }
  } catch (err) {
    console.error(err);
  }
});
export default showimage;
