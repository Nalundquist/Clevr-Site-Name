# Clevr Site Name

### Created by Zachary Waggoner and Noah Lundquist in November/December of 2022

## Links

* [Repository](https://github.com/nalundquist/phoebes-pizza)

## Description

![Component Diagram](./online-forum-diagram.drawio.png)

A React/Redux based website for a fictional social media site, up/down-voting of posts WIP.  Currently an experiment with utilizing Redux-based state management, such in tandem with seed data, and sorting in reducers (also WIP).   

## Features

* Uses reducers bound to a root reducer to manage state across components.
* A forum to talk about your opinions on the Jerry Seinfeld vehicle "Bee Movie", your favorite potions, or your love of tubers.
* Post on the internet (or maybe don't?)


## Technologies Used

* Built in VS Code (v.1.70.1) using the following languages/Tools:
	* Javascript
	* React
	* Redux
	* CSS
	* JSX
	* HTML

Tested in Latest Google Chrome build

## Installation


* Download [Git Bash](https://git-scm.com/downloads)
* Input the following into Git Bash to clone this repository onto your computer:

		>git clone https://github.com/nalundquist/clevr-site-name

* Enter the cloned project folder "clevr-site-name" and type:

		>npm install

* After such you can type:

		>npm run start

* To host the site on your machine at localhost:3000.

## Known Bugs


* As of this writing the reducer handling sorting does not actually do that
* Much of the seed data is seeded using dispatches inside of the App.js which is probably not best practice.  Refactoring needed.

## License

Licensed under [GNU GPL 3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)