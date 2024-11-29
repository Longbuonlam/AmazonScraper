const https = require('https');
const fs = require('fs');
require('dotenv').config();

// URL of the Amazon product page
const url = encodeURIComponent('url-of-the-amazon-product-page');     
const options = {
  hostname: 'api.crawlbase.com',
  path: '/?token=' + process.env.TOKEN + '&scraper=amazon-product-details&url=' + url
};

https.request(options, (response) => {
  let body = '';
  response
    .on('data', (chunk) => (body += chunk))
    .on('end', () => {
      try {
        const data = JSON.parse(body); // Parse the JSON response
        const newReviews = data.body?.reviews; 

        if (!Array.isArray(newReviews)) {
          console.error('New reviews are not in array format or missing');
          return;
        }

        const filePath = 'reviews.json';

        // Read existing reviews.json if it exists
        fs.readFile(filePath, 'utf8', (err, fileData) => {
          let existingReviews = [];

          if (!err) {
            try {
              existingReviews = JSON.parse(fileData); // Parse existing data
              if (!Array.isArray(existingReviews)) {
                console.error('Existing reviews data is not an array. Starting fresh.');
                existingReviews = [];
              }
            } catch (parseErr) {
              console.error('Failed to parse existing reviews.json, starting fresh');
            }
          }

          // Merge new reviews with existing reviews
          const updatedReviews = [...existingReviews, ...newReviews];

          // Write the updated reviews back to the file
          fs.writeFile(filePath, JSON.stringify(updatedReviews, null, 2), (err) => {
            if (err) throw err;
            console.log('Reviews updated and saved to reviews.json');
          });
        });
      } catch (err) {
        console.error('Failed to process response:', err.message);
      }
    });
}).end();