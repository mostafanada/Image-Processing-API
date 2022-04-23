## Getting Started

This repo contains a basic resize for image app in **Typescript** in an API.


## Prerequisites Technologies

Your must install the following in order to use the project:
- [Node & NPM](https://nodejs.org/en/download/)
- [Typescript](https://www.npmjs.com/package/typescript) (install it globally)
- [Jasmine](https://www.npmjs.com/package/jasmine)

## Setup Steps
To get started:

1-Download the zip file locally.

2-using `cd` command.

3-install all dependencies using **npm**.

#### Runing the program locally in development mode

  `npm run start`

-and then head to your browser at `localhost:3000` and it should be working.

#### Runing the program locally in production mode

  `npm run build`
  
  `node dist/index.js`

#### Test the app

    npm run test
 
#### Code formating 

I'm using prettier and eslint

    npm run prettier

    npm run lint
    
    


### Examples

-Available images 
•	encenadaport
•	fjord
•	icelandwaterfall
•	palmtunnel
•	santamonica

1)`http://localhost:3000/image?filename=fjord&width=100&height=200`

(retrieve the image with hight=200 and width=100 which name fjord_100_200)

2)`Localhost:3000/image?filename=fj&width=100&hight=100`

(retrieve the message "File isn't exist")

3)`Localhost:3000/image?filename=fjod&width=100&hight=100`

(retrieve the message “Please, Set valid width and height“)

4)`Localhost:3000/image?filename=fjod&width=100`

(retrieve the message"Please, Set valid width and height")
