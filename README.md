# library-task
## Intro
This is a simple library node.js API that writes to a datababse
It uses express.js for routing and sequelize for database communcaion
## prerequest
- A Relational database Either MYSQL or postgres
- Node.js installed 
- create a database (TODO:make this part of the build process)  
## Intialization
1. create .env file the .env variables are in the .env.example folder the user can replace the values with his own
2. run `npm i`  
3. run `npm run build` this line will migrate the tables to the database using sequelize.
4. run `npm run dev` this start the app

## Information
The documentation of the input and the output APIS can be seen in test/api folder and if you installed the Rest Client extention on VSCode you can run these APIS  in the ./test/api file example the book.http file
            
## The code Architecture  
The code follows the simple MVC model with a datamanager archituctere it can be extended with more modules there is the controllers -> service -> datamnager layer
the each model's datamanager layer acesses the model related to it and does the model's crud operations.
There is a base for each layer that each layer module inherits from it for the common operations.