'use strict';

// [START gae_node_request_example]
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello, world!').end();
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END gae_node_request_example]

module.exports = app;

// const {Storage} = require("@google-cloud/storage");
// const storage = new Storage();
// const bucketName = 'cs1530group11';
// const srcFilename = 'database.json';
// const destFilename = 'database.json';


// const server = http.createServer((req,res) => {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Welcome to pingg-express!');
// })

// async function downloadFile() {
//     const options = {
//         // The path to which the file should be downloaded, e.g. "./file.txt"
//         destination: destFilename,
//     };

//     // Download the file
//     await storage.bucket(bucketName).file(srcFilename).download(options);

//     console.log(`gs://${bucketName}/${srcFilename} downloaded to ${destFilename}.`);
// }
  
// downloadFile().catch(console.error);

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// })


