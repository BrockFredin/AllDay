# allday

Instructions:

1)  Listen to this song:  https://www.youtube.com/watch?v=lY7V1AzuJXA
2)  Switch to this feature Branch (feature/gulpwatch): https://github.com/BrockFredin/allday/tree/feature/gulpwatch

*Pay special attention to: https://github.com/BrockFredin/allday/blob/feature/gulpwatch/web/gulpfile.js
This file contains a task ‘test’, ‘default’, and a watch function to automatically run any unit tests upon changes to any file types defined in the paths directory (line 9).  This is set to run the unit test task ‘test’ when any .js or JavaScript file changes automatically without any manual intervention.  

Commands to initiate the robot within terminal
3) open terminal and cd (change directory) into allday/web/
4) type 'gulp' and view unit test default run
5) Implement any file changes to .JS (JavaScript) files and view automatic unit test runs

Notable install commands:

npm install gulp-karma
npm install gulp
sudo npm install gulp --save-dev -g
sudo npm install --save-dev gulp-jasmine-phantom -g
npm install --save-dev gulp-jasmine-phantom -g
npm install --save-dev gulp-jasmine

Requires

Karma config file
Unit tests with some framework (Jasmine with Karma as a test runner using phantomJS headless browser)
