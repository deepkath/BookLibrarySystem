# BookLibrarySystem

**client**
This directory contains react client side code for book library system. It covers functionalities like fetch, add, edit book details.
Book detail contains fields like title, author, description, count. Edit will work only for description and count fields.

**server**
For giving seed data for the books, I have used a json file named books.json. For server side code, I have set up a express server serving the client application and APIs like fetchAll, fetch particular, add, edit.

**Steps to run the application**
> node installed on system.
> npm install 
(to download all node modules dependencies)
> npm run prod
(It will create the client build and post that will start the express server as well)
> Application will be accessible on localhost:3000.
