[![Build Status](https://travis-ci.com/khuynh92/32-combining-reducers.svg?branch=master)](https://travis-ci.com/khuynh92/32-combining-reducers)


heroku: http://khoa-32-combining-reducers.herokuapp.com  
PR: https://github.com/khuynh92/32-combining-reducers/pull/1  
Travis: https://travis-ci.com/khuynh92/32-combining-reducers    

# LAB 32-combining-reducers

This project is a basic react redux app that keeps track of categories and budgets. The data will persist on refresh. All application state is stored in a redux store

## To install
Download this repo and in the root directory, type in to the CLI `npm i` to install all dependencies 

## To Run
Type into the cli of the root directory `npm run watch` to start the react app. A new window will open in your default browser

## How To Use the App
To use the app, Click on Dashboard. Fill in the form with a Category, and Budget(numbers only). Upon submit, you will be displayed a list of created categories. To remove categories, simply click on the red x next to the title.

To Enter Category edit mode, `double click` a category. A new form will appear where you can change the contents of the category. Hit `update` to change the contents, or revert back to the old content with `cancel`

To add an Expense to a Category, click the green + button and fill out the form. 

To edit an Expense, double click on the expense you want to edit. Submit to change the expense, or cancel to revert to the previous state.
