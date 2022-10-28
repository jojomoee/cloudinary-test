import '../styles/style.css';
import { Cloudinary } from '@cloudinary/url-gen';
import { crop, fill, imaggaCrop } from '@cloudinary/url-gen/actions/resize';

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello Template!</h1>
  </div>
`;

const cl = new Cloudinary({
  cloud: {
    cloudName: 'df4mxwcwl',
  },
});
//https://res.cloudinary.com/df4mxwcwl/image/upload/v1666822165/my-website/sonnenaufgang.jpg
const myImage = cl.image('my-website/sonnenaufgang.jpg');

// Resize to 250 x 250 pixels using the 'fill' crop mode.
myImage.resize(crop(500, 500));

// Render the image in an 'img' element.
const imgElement = document.createElement('img');
document.body.appendChild(imgElement);
imgElement.src = myImage.toURL();
