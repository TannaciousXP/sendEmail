# sendEmail

Receive a JSON.body with the following format: { to: "myemail@example.com", subject: “hello”, body: “world” }, then use nodemailer API to send the email

hosted on [heroku](https://pxt-sendemail.herokuapp.com/), view page for instructions

by Peter X. Tan

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

- [Node 8.x.x.](https://nodejs.org/en/)

## Setup

```
$ git clone https://github.com/TannaciousXP/sendEmail.git
$ cd sendEmail
$ yarn install
```

## Configuration

Inside the config folder, there will be a **exampleGmail.json** file, you will need to __**create**__ a gmail.json file with the same structure.

There are two ways to make the API call, with and without OAuth2

```
{
  "user": "no OAuth2",
  "pass": "no OAuth2",
  "clientId": "with OAuth2",
  "clientSecret": "with OAuth",
  "refreshToken": "with OAuth"
}
```

Without OAuth: make sure to enable [less secure apps in Google](https://myaccount.google.com/lesssecureapps) and fill out user and pass

```
{
  "user": "your email address",
  "pass": "your email password",
}
```

With OAuth: follow the [video](https://www.youtube.com/watch?v=hfWe1gPCnzc) to get your clientId, clientSecret, refreshToken

```
{
  "clientId": "follow video to get clientId",
  "clientSecret": "follow video to get clientSecret",
  "refreshToken": "follow video to get refreshToken"
}
```

After you make your gmail.json file inside **controllerEmail.js** line 24 - 50 will have two transporter __**uncomment for appropriate OAuth**__.

### Inside Terminal

```
$ yarn start
```

## Deployment

I used [Heroku](https://dashboard.heroku.com/) and [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) because it's quick and easy

### After you set up Heroku and Heroku CLI

```
$ heroku create <your name for the app>
$ git push heroku master
$ heroku open
```

Now you can replace **https://pxtan-sendemail.herokuapp.com**/sendEmail with **<your heroku URL>**/sendEmail

## Testing

Once you made **gmail.json** and **uncomment appropriate transporter**

Inside the **sendEmail.test.js** you will need to change the **postData and options**

- postData: line 4 - to your receiving email
- options: line 11 - to your own deployment website or you can just use mine

```
yarn test
```