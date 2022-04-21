import supertest from 'supertest';
import app from '../index';
import checkfile from '../functions/checkimages';
import resize from '../functions/resize';

const request = supertest(app);
describe('Test the server', () => {
  it('gets the router', async () => {
    const response = await request.get('/image');
    expect(response.status).toBe(200);
  });
  it('Get photo from oreg folder', async () => {
    const response = await request.get('/image?filename=fjord');
    expect(response.status).toEqual(200);
  });
  it('The photo is not exist', async () => {
    const response = await request.get('/image?filename=nsd');
    expect(response.text).toBe("File isn't exist");
  });
  it('Resize the photo', async () => {
    const response = await request
      .get('/image?filename=fjord&width=100&height=200')
      .expect('Content-Type', 'image/jpeg')
      .expect(200);
  });
  it('Invalid width and height', async () => {
    const response = await request.get(
      '/image?filename=fjord&width=cx&height=fg'
    );
    expect(response.text).toBe('Please, Set valid width and height');
  });
});

describe('Test the checker and resize', () => {
  it('File is exist', async () => {
    const response = await checkfile('fjord.jpg', 'oreg');

    expect(response).toBe(true);
  });
  it("File isn't exist", async () => {
    const response = await checkfile('fjorv.jpg', 'oreg');

    expect(response).toBe(false);
  });
  it('File is exist', async () => {
    const response = await checkfile('fjord_100_200.jpg', 'temp');

    expect(response).toBe(true);
  });
  it('Resize image', async () => {
    const resizeimage = await resize('encenadaport', 100, 200);
    expect(resizeimage).toEqual('images/temp/encenadaport_100_200.jpg');
  });
  // it('', () => {
  //     expect(checkFileExist('img_100x200.jpg', 'thumb')).toBeFalse();
  // });
});
