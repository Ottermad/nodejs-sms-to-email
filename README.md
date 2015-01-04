Node.js SMS to Email
====================

This is a simple Node.js and Express.js application which can receive an SMS, get the body of the SMS, and send an email based on the SMS body. It works by using Twilio who allow me to configure a phone number so when it receives an SMS it sends a POST request to my Node.js app with the data from the SMS. My app then gets the body of the SMS and splits in on commas into an array containing:

* The email address to send the email to

* The email address the email should be sent from

* The subject

* The email body/message

It then uses the Sendgrid API to send the email with the data from the array. For example, a user could send an SMS saying:

`you@example.com,me@example.net,Hello World,This is an example message.`

And and the email sent would be:

* To: `you@example.com`

* From: `me@example.net`

* Subject: `Hello World`

* Body: `This is an example message.`

Overall, in this app I have used:

* [Twilio](https://www.twilio.com/) - to receive the SMS

* [Sendrgid](https://sendgrid.com/) - to send the email

* [Node.js](http://nodejs.org/) - the runtime environment for my app

* [Express.js](http://expressjs.com/) - a framework to make receiving POST requests easy

Hopefully, a live demo will be up soon.




