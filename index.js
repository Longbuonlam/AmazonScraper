const https = require('https');
const fs = require('fs');

// URL of the Amazon product page
const url = encodeURIComponent('https://www.amazon.com/dp/B0B7CBZZ16?th=1');     
const options = {
  hostname: 'api.crawlbase.com',
  path: '/?token=FHVib6rqJcvAYbGpVHEpMQ&scraper=amazon-product-details&url=' + url
};

https.request(options, (response) => {
    let body = '';
    response.on('data', chunk => body += chunk).on('end', () => {
      fs.writeFile('response.json', body, (err) => {
        if (err) throw err;
        console.log('Response saved to response.json');
      });
    });
  }).end();