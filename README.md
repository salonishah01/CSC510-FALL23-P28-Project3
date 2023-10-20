<p align="center"><img width="500" src="./assets/SlashLogo.jpeg"></p>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![DOI](https://zenodo.org/badge/704785726.svg)](https://zenodo.org/badge/latestdoi/704785726)
[![GitHub issues](https://img.shields.io/github/issues/ameghana/CSC510-FALL23-P27-Project2)](https://github.com/ameghana/CSC510-FALL23-P27-Project2/issues)
[![GitHub closed issues](https://img.shields.io/github/issues-closed/ameghana/CSC510-FALL23-P27-Project2)](https://github.com/ameghana/CSC510-FALL23-P27-Project2/issues?q=is%3Aissue+is%3Aclosed)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/ameghana/CSC510-FALL23-P27-Project2)](https://github.com/ameghana/CSC510-FALL23-P27-Project2/pulls?q=is%3Aopen+is%3Apr)
[![Npm package version](https://badgen.net/npm/v/express)](https://npmjs.com/package/express)
[![python](https://img.shields.io/badge/Python-3.9-3776AB.svg?style=flat&logo=python&logoColor=white)](https://www.python.org)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.63.0-009688.svg?style=flat&logo=FastAPI&logoColor=white)](https://fastapi.tiangolo.com)
[![GitHub contributors](https://img.shields.io/github/contributors/ameghana/CSC510-FALL23-P27-Project2)](https://github.com/ameghana/CSC510-FALL23-P27-Project2/graphs/contributors)
![GitHub all releases](https://img.shields.io/github/downloads/ameghana/CSC510-FALL23-P27-Project2/total)
[![GitHub Discussions](https://img.shields.io/github/discussions/ameghana/CSC510-FALL23-P27-Project2)](https://github.com/ameghana/CSC510-FALL23-P27-Project2/discussions)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Discord](https://img.shields.io/discord/1161405668079698112)](https://github.com/ameghana/CSC510-FALL23-P27-Project2/blob/main/docs/SE%20Discord%20Chat%20Screenshot.png)
![GitHub forks](https://img.shields.io/github/forks/ameghana/CSC510-FALL23-P27-Project2)
[![codecov](https://codecov.io/gh/NCSU-Group7-SE2021/slash/branch/main/graph/badge.svg?token=E9TCZQ6NGF)](https://codecov.io/gh/NCSU-Group7-SE2021/slash)

Are you a fan of shopping? Are you on the lookout for fantastic online shopping deals? Look no further because Slash is your go-to destination for discovering the greatest deals!

Slash is an open-source web framework that makes use of FastAPI to scrape the best deals from various e-commerce websites such as eBay, Amazon, BestBuy, Costco, Target, and Walmart. Slash makes it easy for users to filter,organise and download search results.It also provides visualisation in the form of charts and graphs.

- **Fast**: Slash lets you save more than 50% of your time by swiftly comparing deals from various websites in just seconds.
- **Easy**: Slash introduces user-friendly public APIs that make it a breeze to filter, sort, and search through search results.
- **Powerful**: Generates JSON responses that are highly customizable to achieve the desired output.

---

## :rocket: Improvements in Phase-II

We have added a lot of new features to slash in our Phase-II.

1. A login page has been implemented to facilitate user authentication.
2. A visually appealing user interface (UI) has been designed and integrated.
3. Users can download CSV files directly from the results page.
4. Progressive Web Application (PWA) feature has been successfully implemented, enhancing the web experience for users.

---

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

## :movie_camera: Checkout our video

<p align="center"><img width="700" src="./assets/slash-phase3.gif"></p>

---

## :rocket: Installation

## 1. Python Virtual Environment Setup (Windows)
We need the python 3.9 version, hence we need to setup a virtual environment(venv). Following are the steps to setup venv:

```
Install python 3.9 #installing python
py --list #to view all versions on python present
py -3.9 -m venv {virtual environment name} #creating a virtual environment
cd {virtual environment name} #navigating to virtual environment
Scripts\activate #activating virtual environment
```

## 2. Python Virtual Environment Setup (Mac OS)
1.We need the python 3.9 version, Follow the below steps for setup 1)Install Homebrew:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

2.Now install PyEnv to switch between different version of python

```
brew install pyenv
```

3.Now to install required version of python using PyEnv, run this command:

```
pyenv install 3.9.2
```

4.To SetUp MacOS path for pyEnv in ZSH or OhMyZSH

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
git clone https://github.com/ameghana/CSC510-FALL23-P27-Project2.git
cd CSC510-FALL23-P27-Project2
```

2. All the python requirements of the project are listed in the `requirements.txt` file. Use pip to install all of those.

```
pip3 install -r requirements.txt
```

## 4. Node Setup for Front-end
1. For the frontend setup ensure that [Node](https://nodejs.org/en/) is preinstalled. 

```
Install node 18.17.1 #installing older version of node.js
```

2. All the node requirements are listed in `client/package.json` file. Use npm to install all of those.

```
cd client
npm install
```
Here if you are facing an error

```
ERROR: upstream dependency conflict
```

To resolve, the below command is executed

```
npm install --force
```

You may also encounter this issue:

```
ImportError: cannot import name 'NotRequired' from 'typing_extensions'
```

To resolve that, We have to execute: 

```
pip install typing_extensions==4.7.1 –upgrade
```

## 5. Run the Application
1.After installing all the prerequisites, navigate to the `src` directory using the `cd` command. Once you are inside the `src` directory, execute the Python command to launch the `main.py` file.

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

Wrapper API to fetch slash scrape results. This API provides a one step solution to access scrape results from all our integrated websites.

    https://slash-app-staging.azurewebsites.net/{site}/{item_name}

**Required parameters:**

- **site**: _az_ for amazon; _wm_ for walmart; _eb_ for ebay; _cc_ for costco; _tg_ for target and _bb_ for bustbuy. Alternatively '_all_' in site can be used to get results for all sites.

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
- Add login feature to store user history to provide features like bookmarking, price drop alerts and many more.
- Our API can be used by end users such as developers who are tech-savvy individuals looking to get a one stop solution for web scraping ecommerce websites such as Amazon, Target, Ebay,etc along with API access to multiple ecommerce websites. It'll be available directly for access to people without having to dive deep into the code.
- An iOS or Android application.
- Add reviews to the products

# Team Members

## Phase 2 Team Members

- [Meghana Chowdary Ainampudi](https://github.com/ameghana)
- [Sai Abhigna Tummala](https://github.com/abhigna98)
- [Sravya Karanam](https://github.com/SreeKaranam)
- [Sucharitha Nadendla](https://github.com/Nsucharitha)

## :email: Support

For any queries and help, please reach out to us at: csc510se.p27@gmail.com
