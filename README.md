# [balldontlie-tracker](https://balldontlie-5b4e2d2e88fb.herokuapp.com/)

![GitHub repo size](https://img.shields.io/github/repo-size/epicasino/balldontlie-tracker)
![GitHub](https://img.shields.io/github/license/epicasino/balldontlie-tracker)
![GitHub top language](https://img.shields.io/github/languages/top/epicasino/balldontlie-tracker)
![GitHub language count](https://img.shields.io/github/languages/count/epicasino/balldontlie-tracker)

## Description

- A simple, sleek, and functional NBA player search application to track your favorite basketball players in the NBA.
- With this application, you can easily track the entire NBA roster with a simple search, and save your favorite players in your account's dashboard.
- Player data and storage possible by the implementation of a MySQL database to store user data, NBA team logos, and api info recieved from third party apis.

## Features

- Search for players in the NBA and get their up-to-date information, along with their weight and height, if provided 🏀
- Account creation to save your favorite players to your account, and a login option to access them for later 🔥
- Saved players get an in depth description, such as season stats and team-logo 🏀 🔥

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

[**Live deployment of the website is provided via Heroku.**](https://balldontlie-5b4e2d2e88fb.herokuapp.com/)

## Usage

**You will be presented with the homepage upon visiting the application. Click on the form in the middle of the page to start searching for a player.**
**Type your favorite player in the text field, then press 'Search' next to the text field.**
![BallDontLie Homepage](./assets/images/Step%202.png)

**In this example, we searched up 'LeBron James.' Searching by only First or Last name will show multiple results. To save a player, click "Save Player"**
![BallDontLie Search Player Results](./assets/images/Step%204.png)

**If you haven't signed in, or made an account, you will be redirected to the login/register page to register/log in. In this instance, we will need to create an account.**
**Type your desired username and password.**
![BallDontLie Login Page](./assets/images/Step%205.png)

**After registering/logging in, you are able to now save players. After searching, click "Save Player" once more to save your player. You will be prompted that the player is saved, and you will be redirected to the homepage.**
![BallDontLie Search Player Results, User is Logged In.](./assets/images/Step%207.png)

**To access your saved players, click "Dashboard" on the navbar.**
![BallDontLie Homepage, User clicks on Dashboard](./assets/images/Step%208.png)

**On your dashboard,  will be presented with a personal 'Hello' along with a section with your saved players. In this instance, we will click on our previously saved player, 'LeBron James.'**
![BallDontLie Dashboard Page](./assets/images/Step%209.png)

**You will then be presented with the player's information and stat sheet, along with the boxes having the player's team colors. If you choose to stop tracking the player, you can click on the "Delete Player" button.**
![BallDontLie Player Page](./assets/images/Step%2010.png)

**Upon deleting the player, your dashboard will update with the removal of the saved player. If you choose to end your session, a "Logout" button is located on the top-right of the page.**
![BallDontLie updated dashboard after deleting a player, user logs out](./assets/images/Step%2011.png)

## Credits

### Project Collaborators

- [Epicasino (Ray)](https://github.com/epicasino)
- [Af0nz0 (Alfonso)](https://github.com/Af0nz0)
- [earnest-dawn (Earnest)](https://github.com/earnest-dawn)
- [JosePerez013](https://github.com/JosePerez013)
- [jrainey95 (Jonathan)](https://github.com/jrainey95)

### Honorable Mentions**

- [nba-color: used in the player section of the application to retrieve the player's team colors.](https://www.npmjs.com/package/nba-color)
- [balldontlie.io: API used to get updated NBA player info.](https://app.balldontlie.io/)

## License

MIT License

Copyright (c) 2023 Ray Badua

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
