const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

//Set static path
app.use(express.static(path.join(__dirname, "client")));

app.use(bodyParser.json());

const publicVapidKey = "fmUCsOy2QHz7PB6so8PospI1eAbB5AQsiU89C129kvCHbVZsSgS2ZOyohAhRBN4svXuysykP6LL40tjMQuE5yWz0MSbrpLG3ZHaluvF1fO+8PiFsNJXZfBWqoGwmsWVj";
const privateVapidKey = "09AI6VO6tD1L0TsAAN-a7dVynn8neXqtUsVFgVk_0Og";

webpush.setVapidDetails('mailto:test@test.com', publicVapidKey, privateVapidKey);

//Subcribe Route
app.post('/subscribe', (req, res) => {
    //Get pushSubscription object
    const subscription = req.body;

    //Send 201 - resource created
    res.status(201).json({});

    //Create payload
    const payload = JSON.stringify({
        title: 'Push Test'
    });

    //Pass object into sendNotification
    webpush.sendNotification(subscription, payload).catch(
        err => console.error(err)
    );
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));