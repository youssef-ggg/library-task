# library-task
## Intro
This is a simple library node.js API that writes to a relation datababse
It uses express.js for routing and sequelize for database communcaion
## prerequest
- a Relational database Eithe MYSQL or postgres 
- create a database (TODO:make this part of the build process)  
## Intialization
1. create .env file the .env variables are in the .env.example folder the user can replace the values with his own
2. run `npm i`  
3. run `npm run build` this line will migrate the tables to the database using sequelize.
4. run `npm run dev` this start the app

## Information
The documentation of the input and the output can be seen in test/api folder and if you installed the Rest Client extention on VSCode you can run test the application api from the files in the test/api e.g. the book.http file