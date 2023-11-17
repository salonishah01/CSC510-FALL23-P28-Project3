<p align="center"><img width="500" src="./assets/SlashLogo.jpeg"></p>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![DOI](https://zenodo.org/badge/704785726.svg)](https://zenodo.org/badge/latestdoi/704785726)
[![GitHub issues](https://img.shields.io/github/issues/salonishah01/CSC510-FALL23-P28-Project3)](https://github.com/salonishah01/CSC510-FALL23-P28-Project3/issues)
[![GitHub closed issues](https://img.shields.io/github/issues-closed/salonishah01/CSC510-FALL23-P28-Project3)](https://github.com/salonishah01/CSC510-FALL23-P28-Project3/issues?q=is%3Aissue+is%3Aclosed)
[![Npm package version](https://badgen.net/npm/v/express)](https://npmjs.com/package/express)
[![python](https://img.shields.io/badge/Python-3.9-3776AB.svg?style=flat&logo=python&logoColor=white)](https://www.python.org)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.63.0-009688.svg?style=flat&logo=FastAPI&logoColor=white)](https://fastapi.tiangolo.com)
[![GitHub contributors](https://img.shields.io/github/contributors/salonishah01/CSC510-FALL23-P28-Project3)](https://github.com/salonishah01/CSC510-FALL23-P28-Project3/graphs/contributors)
![GitHub all releases](https://img.shields.io/github/downloads/ameghana/CSC510-FALL23-P27-Project2/total)
[![GitHub Discussions](https://img.shields.io/github/discussions/ameghana/CSC510-FALL23-P27-Project2)](https://github.com/ameghana/CSC510-FALL23-P27-Project2/discussions)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![codecov](https://codecov.io/gh/NCSU-Group7-SE2021/slash/branch/main/graph/badge.svg?token=E9TCZQ6NGF)](https://codecov.io/gh/NCSU-Group7-SE2021/slash)

# Slash - Ultimate Shopping Companion 🛒✨🚀

## Unleash the Power of Slash for Ultimate Shopping Discoveries!

Are you tired of endless scrolling through e-commerce sites, hoping for the perfect deal? Say goodbye to the hassle and welcome Slash, your ultimate companion for discovering incredible online shopping deals! Slash isn't just a web framework; it's a game-changer in the world of online shopping, leveraging FastAPI to scrape and present the best deals from eBay, Amazon, BestBuy, Costco, Target, and Walmart.

## Why Choose Slash?

- **Lightning-Fast Comparison:** Revolutionize your deal-hunting experience. Compare deals from different websites in seconds, saving valuable time!

- **Effortless Navigation:** User-friendly public APIs make it a breeze to filter, sort, and search through results, ensuring you find exactly what you're looking for.

- **Tailored Outputs:** Slash isn't just about finding deals; it's about finding the right deals for you. Generate highly customizable JSON responses to fit your unique preferences.

## 🚀 DELTA: Unveiling Phase III from Phase II

Get ready for a shopping experience like never before with Phase III enhancements:

- **Revamped UI:** Our commitment to an enhanced user experience is evident in the redesigned, visually appealing application interface.

- **Streamlined Registration:** Say goodbye to registration headaches. We've introduced a new database to streamline the user registration process.

- **Fortified Security:** Your security is our priority. Slash now employs JSON Web Tokens (JWT) for robust and secure user authentication.

- **Watchlist Feature:** Introducing a revolutionary feature! Create watchlists to monitor the prices of specific items, ensuring you never miss a deal.

- **Automated Monitoring:** We've implemented a scheduler to automatically monitor the prices of items on your watchlists, keeping you informed in real-time.

- **Smart Notifications:** Slash goes the extra mile by sending you email notifications when the price of an item in your watchlist drops.

## 🚀 Features Unveiled in Phase II

- **Seamless Authentication:** Enjoy a secure shopping experience with the implementation of a dedicated login page for user authentication.

- **Aesthetically Pleasing UI:** Immerse yourself in a visually appealing user interface, ensuring an enjoyable and intuitive browsing experience.

- **CSV Download:** Slash empowers you further by enabling direct CSV file downloads from the results page, making data accessibility a breeze.

- **Progressive Web Application (PWA):** Embrace the latest web technologies. Slash is now a progressive web application for an enhanced and responsive web experience.

## Elevate Your Shopping Game with Slash!
Get ready to redefine yur online shopping experience.
Slash isn't just a tool; its your shopping ally, your deal-finder, and your gateway to a world of unbeatable offers.
Dive in and let the savings begin!🛒✨🚀

<p align="center">
  <a href="#movie_camera-checkout-our-video">Checkout our video</a>
  ::
  <a href="#rocket-installation">Installation</a>
  ::
  <a href="#computer-technology-used">Technology Used</a>
  ::
  <a href="#bulb-use-case">Use Case</a>
  ::
  <a href="#file_cabinet-api">API</a>
  ::
  <a href="#page_facing_up-why">Why</a>
  ::
  <a href="#golf-future-roadmap">Future Roadmap</a>
  ::
  <a href="#sparkles-contributors">Contributors</a>
  ::
  <a href="#email-support">Support</a>

</p>

---

## :rocket: Checkout our video

## :movie_camera: Login/Log out

<p align="center"><img width="700" src="./assets/Slash%20Demo%20Login%20Logout.gif"></p>

## :movie_camera: Progressive Web-Application

<p align="center"><img width="700" src="./assets/Slash%20Demo%20PWA.gif"></p>

## :movie_camera: Results

<p align="center"><img width="700" src="./assets/Slash%20Demo%20Results.gif"></p>

---

## :rocket: Installation

## 1. Python Virtual Environment Setup (Windows)
We need the Python 3.9 version; hence, we need to setup a virtual environment (venv). Following are the steps to setup venv:

```
Install python 3.9 #installing python
py --list #to view all versions on python present
py -3.9 -m venv {virtual environment name} creating a virtual environment
cd {virtual environment name} #navigating to virtual environment
Scripts\activate #activating virtual environment
```

## 2. Python Virtual Environment Setup (Mac OS)
1. We need the Python 3.9 version. Follow the below steps for setup: 1) Install Homebrew:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

2. Now install PyEnv to switch between different version of python

```
brew install pyenv
```

3. Now, to install the required version of Python using PyEnv, run this command:

```
pyenv install 3.9.2
```

4. To set up the MacOS path for pyEnv in ZSH or OhMyZSH

```
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zshrc
echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.zshrc
echo -e 'if command -v pyenv 1>/dev/null 2>&1; then\n  eval "$(pyenv init --path)"\n  eval "$(pyenv init -)"\nfi' >> ~/.zshrc
pyenv global 3.9.2
pyenv versions
```

## 3. Clone the Repository
1. Clone the Github repository to a desired location on your computer. You will need [git](https://git-scm.com/) to be preinstalled on your machine. Once the repository is cloned, you will then `cd` into the local repository.

```
git clone https://github.com/salonishah01/CSC510-FALL23-P28-Project3.git
cd CSC510-FALL23-P28-Project3
```

2. All the Python requirements of the project are listed in the `requirements.txt` file. Use pip to install all of those.

```
pip3 install -r requirements.txt
```

## 4. Node Setup for Front-end
1. For the frontend setup, ensure that [Node](https://nodejs.org/en/) is preinstalled. 

```
Install node 18.17.1 by installing older version of node.js
```

2. All the node requirements are listed in the `client/package.json` file. Use npm to install all of those.

```
cd client
npm install
```
If you are facing an error,

```
ERROR: upstream dependency conflict
```

To resolve this, the below command is executed

```
npm install --force
```

You may also encounter this issue:

```
ImportError: cannot import name 'NotRequired' from 'typing_extensions'
```

To resolve that, we have to execute:

```
pip install typing_extensions==4.7.1 -upgrade
```

## 5. Run the Application
1. After installing all the prerequisites, navigate to the `src` directory using the `cd` command. Once you are inside the `src` directory, execute the Python command to launch the `main.py` file.

```
cd src

For Mac
python3 main.py

For Windows
python main.py
```

2. Once the backend is up and running, you will have to `cd` into the `client` folder. Once in the `client` folder, use the node command to start the webserver.

```
cd client
npm run start
```

## :computer: Technology Used

- FastAPI : https://fastapi.tiangolo.com
- ASGI Server - Uvicorn : https://www.uvicorn.org
- Docker : https://www.docker.com
- Azure : https://azure.microsoft.com/en-us/

## :bulb: Use Case

- **_Students_**: Students coming to university are generally on a budget and time constraint and generally spend hours wasting time to search for products on Websites. Slash is the perfect tool for these students that slashes all the unnecessary details on a website and helps them get prices for a product across multiple websites.Users can compare prices for specific products across multiple e-commerce platforms, helping them make informed purchasing decisions. Make the most of this tool in the upcoming Black Friday Sale.
- **_Data Analysts_**: Finding data for any project is one of the most tedious job for a data analyst, and the datasets found might not be the most recent one. Using slash, they can create their own dataset in real time and format it as per their needs so that they can focus on what is actually inportant.
- **_Market Analysts_**: Businesses and market analysts can use the website's data to gain insights into market trends, consumer behavior, and competitive pricing. Companies can perform competitive analysis by comparing their product offerings and pricing to those of competitors on different e-commerce platforms.

## :file_cabinet: API

## Documentation

Documentation can be accessed anytime via the below link.

     `https://slash-app-staging.azurewebsites.net/`

## Search Items Api

Wrapper API to fetch slash scrape results. This API provides a one-step solution to access scrape results from all our integrated websites.

    https://slash-app-staging.azurewebsites.net/{site}/{item_name}

**Required parameters:**

- **site**: _az_ for amazon; _wm_ for walmart; _eb_ for ebay; _cc_ for costco; _tg_ for target; and _bb_ for bustbuy. Alternatively, '_all_' in site can be used to get results for all sites.

- **item_name**: items to be searched by slash web api; _examples below_

`https://slash-app-staging.azurewebsites.net/az/toys`

`https://slash-app-staging.azurewebsites.net/all/dell`

**Optional parameters**

- **relevant**: string relevance: items will be ordered by relevance. Not supported currently.
- **order_by_col**: string column_name: items will be ordered by the column name. Currently only the 'price' column ordering is supported.
- **reverse**: boolean val: items will be displayed in the same or the opposite order based on the value of this parameter.
- **listLengthInd**: integer len(default value is 10): sets the upper limit on the number of entries that will be displayed
- **export**: boolean val(default value is false): items can be exported in a csv file;; _examples below_

`https://slash-app-staging.azurewebsites.net/all/dell?export=false&listLengthInd=5&order_by_col=price&reverse=false`

## :page_facing_up: Why

- In today's online marketplace, consumers are presented with an overwhelming array of options. The sheer abundance of products and sellers can make it challenging to find the best deals. Slash addresses this challenge by streamlining the deal-finding process.
- The widespread availability of internet access has revolutionized retail, enabling individuals and businesses to sell products globally. This digital transformation has leveled the playing field, making it possible for businesses of all sizes to reach a global audience.
- The e-commerce sector has experienced remarkable growth, accelerated further by events like the COVID-19 pandemic. In 2020, U.S. e-commerce sales surged by 44%, accounting for over 21% of total retail sales. This growth highlights the significance of e-commerce in modern consumer behavior.
- The e-commerce landscape is marked by intense competition among dealers and market players. This competition is evident in price patterns, where price cuts have become commonplace. However, navigating these price cuts and finding the best deals can be a daunting task, even in the realm of online shopping.
- Slash's goal is to overcome this challenge by providing a user-friendly, all-encompassing solution for discovering the finest product deals offered by major market retailers.
- Slash in its current form is for students who wish to get the best deals out of every e-commerce site and can be used by anyone who is willing to develop an application that consumes these web APIs.
- Future scope includes anything from a web application with a frontend or any Android or IOS application that utilises these Web APIs at their backend. Anyone can build their own custom application on top of these web APIs.

## :golf: Future Roadmap

- Host website on a public server so customers can use it
- Scrapping from all E-commerce websites
- Real-Time updates using Websocket or Server-Sent Events(SSE) to provide users with immediate notifications when price drop occurs websites
- Third Party authentication using gmail, outlook
- Forget password can be implemented in the existing UI
- Database improvisation
- Implement option to sort by rating

## Team Members

## Phase 3 Team Members

- [Saloni Shah](https://github.com/salonishah01)
- [Romil Shah](https://github.com/romil2807)
- [Sahil Changlani](https://github.com/sahilchanglani)
- [Rushil Vegada](https://github.com/rushilv20)

## :email: Support

For any queries and help, please reach out to us at: csc510se.p27@gmail.com

## Demo video

[Phase-3 Enhancements Demo Video] - add video link here
