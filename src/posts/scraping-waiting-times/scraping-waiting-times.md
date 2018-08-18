---
title: "Scraping waiting times at Liseberg amusement park"
date: "2018-08-08"
author: 'Kalle'
type: 'Project'
tags: ['python', 'web scraping', 'beautiful soup']
published: true
---
This post describes how I scrape the waiting times for all attractions from the web site of the amusement park [Liseberg](https://www.liseberg.se) in Gothenburg. My idea is to scrape the times during the next season and scan the data for patterns. Hopefully, I'll be able to find a recipe for selecting days with short waiting times.

The scraper is implemented in Python 3 and uses two libraries: [BeautifulSoup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/) and [Selenium](http://selenium-python.readthedocs.io).

# Finding the data to scrape
The first step is to find a reliable source for the data. As always with web scraping, any change by the publisher might break the scraper, so the web page should remain unchanged for a long time.

In the case of Liseberg, the waiting times are displayed on a [page of their web site](https://www.liseberg.se/attraktioner/), which received a large update prior to the current season, so it should not be altered anytime soon.

# Downloading the source code of the web site

## Reasoning behind
The first step in scraping is to download the source code of the web site. For static web sites, this is really simple: simply use a library such as `requests` or `urllib` and download the website. Liseberg's site, however, is a dynamic site which pre-loads the site and then updates it as soon as the waiting times have been fetched from a database. The result is that with a simple library such as `requests`, instead of displaying the waiting times, the site displays a placeholder along the lines of *"Loading waiting times ..."*.

To solve this, Google turned my attention to the library `Selenium`, which I've never used before. According to its [website](https://www.seleniumhq.org):

> Selenium automates browsers. That's it!

This means that the developer can choose between different web browser backends and let a web browser such as Chrome or Firefox fetch the site. Selenium is normally used for testing of web pages, but can be used for other purposes, such as scraping.

Note that, in order to use a certain browser backend, the driver of the browser has to be downloaded and placed in the directory `/usr/bin` or `/usr/local/bin`. A list of links to the drivers can be found in the documentation of Selenium for Python ([link](http://selenium-python.readthedocs.io/installation.html#drivers)).

## The code

First we import the module `webdriver` from Selenium and select the backend of Google Chrome

```python
from selenium import webdriver
browser = webdriver.Chrome()
```

Next, we tell the browser to download the webpage that we wish to scrape

```python
url = 'https://www.liseberg.se/attraktioner/?filter=sommar&view=list'
browser.get(self.url)
```

We then wait for three seconds (arbitrarily chosen) in order to allow the waiting times to be loaded correctly, before retrieving the HTML code of the webpage.

```python
import time
time.sleep(3)  # Give all elements time to load
html = browser.page_source
```

# Selecting the important parts
## Reasoning behind
The HTML code for all but the simplest of web sites is very hard for a human to read. In order to sort out the mess, a library such as `Beautiful Soup` can be used. According to its [documentation](https://www.crummy.com/software/BeautifulSoup/bs4/doc/):

> Beautiful Soup is a Python library for pulling data out of HTML and XML files. It works with your favorite parser to provide idiomatic ways of navigating, searching, and modifying the parse tree. It commonly saves programmers hours or days of work.

In essence, Beautiful Soup swallows a complex HTML or XML string and spits out an object which can be navigated through as the instance of a class.

## The code
First, we import Beautiful Soup and parse the HTML code handed to us by Selenium:

```python
from bs4 import BeautifulSoup
soup = BeautifulSoup(html, 'html5lib')
```
On the second line, we specify which parser BeautifulSoup should use, in this case `html5lib` since it is extremenly lenient and we don't really care about the execution time of the scraper. Available parsers are listed in the [documentation](https://www.crummy.com/software/BeautifulSoup/bs4/doc/#installing-a-parser).

Second, we select from the soup the list containing all of the attractions on Liseberg's web site:

```python
attractions = [item.a.div.div for item in soup('li', 'card-grid__list-item')]
```
This locates the `li` element of the class `card-grid__list-item`, which holds all of the attractions and then, for each `li`, it selects the specific `div` that holds the attraction.

For each attraction in the list we then proceed to extract the name of the attraction:

```python
name = attraction.h3.text
```

We then extract the waiting time for the attraction:

```python
waiting_time_str = attraction.find('div', 'queue').text
```
which returns a text like *"Kö: 10-20 min, stänger 23:00"*, which translates to: *"Queue: 10-20 min, closes 23:00"*. In order to extract the relevant information (*"10-20 min"*), we use a regular expression:

```python
import re
only_time_pattern = '\d{1,2}-\d{1,2} min'
try:
    waiting_time = re.search(only_time_pattern, waiting_time_str).group(0)
except AttributeError:
    waiting_time = 'undefined'
```
where the try-catch statement handles cases where the attraction is closed.

By doing the above for all attractions, we get all of the names and all of the waiting times for the attractions at Liseberg.


# Future steps
The next obvious steps are:

- Store the data in a database or a csv file.
- Let the scraper run for a long time, preferably an entire season.
- Dig through the data and search for patterns.

It would also be interesting to log weather information along with the waiting times. My guess is that there is a correlation between the weather forecast and the waiting lines, but that is for another post.
