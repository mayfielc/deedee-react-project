const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const app = express();

require('dotenv').config();
app.use(logger('dev'));
app.use(express.json());
app.use(cors());

app.use(favicon(path.join(__dirname,'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build',)));

app.get('/test', function(req, res) {
    res.send('hello');
});

app.get('/podcasts', function(req, res) {
    res.send({
        podcast: {
            name: 'DeeDee Says',
            episodes: [
                {
                    title: 'episode 35',
                    url: 'https://cf-media.sndcdn.com/tEAOQ7w3f5XH.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vdEVBT1E3dzNmNVhILjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1NzAzMTczMDV9fX1dfQ__&Signature=JnCbyMGHZwMDT6syFMsa031bS5gzYoED0Ah0Xi1~dDK5R3v7KtcenHBGC-Th-SI7Dm5CLeOzN9AlOQtSPTinFo0Npr66KfYkuptcT66~qDGQfv7AwKLUfKdxgbKa4V6mBvFqCNCZ62nrc41AfBIqVZiCzN~B-wdC6I0R7T4t17M2NtexXHYHvyQCZDH4chN0v-C4kkc9MW2JDpJLM0DtDVPf8lULnaJ2jUrfOdL9Afwiy0CUSYzs6ivYbvuFdiLbqAGZ36gKCsul0sjK3rqzA6wdOzs529b3INb0Aiuhn9rWh9u5yoiY-D-98pUAv9YbAc4RpIJTfp-iR4adoMbZ1Q__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ'
                }
            ]
        }
    });
});

app.get('/createUser', (req, res) => {
    const {userid} = req.query
    
    MongoClient.connect(
        process.env.DATABASE_URL, 
    { useNewUrlParser: true }, 
    (err, client) => {
        const db = client.db('testDatabase')
        const collection = db.collection('testCollection')
        collection.insertOne({userid: userid})
        client.close()
    });
})

const port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
});