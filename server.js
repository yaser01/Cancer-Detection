const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3001

app.use('/', express.static(path.join(__dirname, 'build')))
app.get("*", (req, res) => {
    let url = path.join(__dirname, '../Y/build', 'index.html');
    if (!url.startsWith('/app/')) // since we're on local windows
      url = url.substring(1);
    res.sendFile(url);
  });

