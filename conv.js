const fs = require('fs');
const path = require('path');
const base64Img = require('base64-img');

// Path to the image file
const imagePath = 'C:\Users\Adiva\OneDrive\Desktop\ram\images\1.jpg';

// Convert the image to Base64
const base64Data = base64Img.base64Sync(imagePath);

// Create the JSON object
const imageObject = {
  image_name: 'C:\Users\Adiva\OneDrive\Desktop\ram\images\1.jpg',
  image_data: base64Data
};

// Convert the JSON object to a string
const jsonData = JSON.stringify(imageObject, null, 2);

// Save the JSON string to a file
const filePath = path.join(__dirname, 'data.json');
fs.writeFileSync(filePath, jsonData);
