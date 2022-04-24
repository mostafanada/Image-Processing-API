import path from 'path';
import sharp from 'sharp';

async function resize(
  nameofimage: string,
  width: number,
  hight: number
): Promise<string> {
  const fileinput = path.resolve(`images/oreg/${nameofimage}.jpg`);
  const filenewpath = path.resolve(
    `images/temp/${nameofimage}_${width}_${hight}.jpg`
  );
  await sharp(fileinput)
    .resize(width, hight)
    .toFile(filenewpath)
    .then((): string => {
      return `images/temp/${nameofimage}_${width}_${hight}.jpg`;
    })
    .catch((err) => {
      console.log(err);
    });
  return `images/temp/${nameofimage}_${width}_${hight}.jpg`;
}
export default resize;
