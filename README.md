# What does basically a social media application have. Lets take a look into it.

--> As the name suggests, a social media application is a web application that allows users to share content with other users.

# Lets take a look in what features a social media application have ? -->

  -- Pagination
  -- Search and Filter Functionality
  -- It will include client-side-routing / Details page.
  -- It will be a fully functioning CRUD application.
  -- It will have a user authentication system.

# Auth or Authentication is a complex process so lets take a look into it too..

--> Authentication is the process of verifying that a user is who they say they are.
--> We are going to allow our user to register or login in our database.
--> We will provide 2 sign in options. Either Sign in with your email or sign in with your google id.
--> We will also provide a forgot password option.
--> We will use JWT and Google OAuth.

# At last we will add a comments section.

# And refactor the User Interface and make it fully responsive.

# MERN Stack:- 
        - MERN Stack is a JavaScript stack used for easier and faster deployment of full stack web applications.
        - It is a combination of the following technologies:
            - MongoDB (M) :- It is a NoSQL database.
            - Express (E) :- It is a web application framework for Node.js.
            - React   (R) :- It is a JavaScript library for building user interfaces.
            - Node.js (N) :- It is a JavaScript runtime environment for executing JavaScript code outside a browser.

# Last but not the Least WE WILL DEPLOY OUR APPLICATION TO HEROKU.

# Lets first set our folder structure and directly dive into the code :-

  -- First we are going to create a new folder for the project.
  -- Open the folder in your desired code editor
  -- Create two folders in the parent directory named as follows:- 
        - client
        - server
  -- Set up a new react app in the client folder by using the following command:- 
        - npx create-react-app ./ OR yarn create react-app ./
  -- Till our React App is initialized lets create a index.js file in the server directory.
  -- In a second terminal open the server folder and initialize a "package.json" file by writing the following command:- 
        - npm init -y
  -- Now we will install the following packages in the package.json file:-
       - "body-parser" :- It will help us to send post requests.
       - "cors" :- It will help us to send requests from different domains.
       - "express" :- It will help us to create a server.
       - "mongoose" :- It will help us to connect to the database.
       - "nodemon" :- It will help us to restart the server when we make changes in the code.
       # To install you can run the following command in the terminal:-
          - npm install body-parser cors express mongoose nodemon 
          - This should add all the dependencies in the package.json file.
  -- We can go to index.js file and import the required dependencies.
  -- In the newest versions of node.js we can use the "import" statement for the imports. We can allow our app to do by just adding a "type" in the package.json file, like so - "type":"module"
  
  -- Now when we are in the package.json file just add some scripts for more convinience :- 
      - "start": "node index.js",
        "dev": "nodemon index.js",
  -- Lets install all the dependencies of same versions in our client side as well:- 
      - "@material-ui/core" :- It will help us to create the Material UI components.
      - "@material-ui/icons" :- It will help us to create the Material UI icons.
      - "@material-ui/lab" :- It will help us to create the Material UI components.
      - "axios" :- It will help us to make requests to the server.
      - "jwt-decode" :- It will help us to decode the JWT token.
      - "material-ui-chip-input" :- It will help us to create the Material UI chips.
      - "moment" :- A lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates.
      - "react-file-base64" :- It will help us to upload images to the server.
      - "react-google-login" :- It will help us to create the google login button.
      - "react-redux" :- It will help us to create the redux store.
      - "react-router-dom" :- It will help us to create the react router.
      - "redux" :- It will help us to create the redux store.
      - "redux-thunk" :- It will help us to create the redux thunk.
      - To download or add these dependencies you need to run the following command in your terminal:- 
           -- npm install @material-ui/core @material-ui/icons @material-ui/lab axios jwt-decode material-ui-chip-input moment react-file-base64 react-google-login react-redux react-router-dom redux redux-thunk

  -- Add the package.json in the client after the dependencies are added.

  -- Lets take a look in the app that create-react-app made for us.
  -- In the directory we can see that there is a folder named "src". Delete it !!
  -- Create a new folder with the same name.
  -- Inside that folder create two files named as follows:- 
           1. index.js
           2. App.js
  -- In the App.js file initialize a functional component using the shortcut "rafce".
  -- In the index.js file just paste the following code:- 
           --> import React from "react";
               import * as ReactDOMClient from "react-dom/client";
               import App from "./App";

               const container = document.getElementById("root")

               const root = ReactDOMClient.createRoot(container);

               root.render(
                    <App />
                ) 
  -- Lets now just start our react app and lets check whether we have done everything properly or not ?
  -- To start your application run the following command in your terminal:- 
         - npm start OR yarn start
  -- If you have done everything properly you must see compiled successfully.

# Lets Just Close everything and start with our Server side coding because it has more thing to do init.

-- Initialize the app in the index.js file.
-- Use all the necessary dependencies and then start with the database connection.
-- For this we are gonna use MongoDB Atlas Cloud Database.
-- Just visit their official website and create a new shared free cluster or database for your application.
-- After that you will get a cluster name and a database name.
-- Lets connect the database with our application.
-- Create a connection uri variable and paste the connection string.
-- Then just use the mongoose.connect function to coneect to the database.
-- At last add a .then function which will help us to perform some functions after the connection of the database is established.
-- When everything is set up properly then your server side index.js file should look like this:-
            import  express  from "express";
            import bodyParser from "body-parser";
            import mongoose from "mongoose";
            import cors from "cors";
            import postRoutes from "./routes/posts.js"

            const app = express();

            app.use('/posts',postRoutes);

            app.use(bodyParser.json({ limit: "30mb", extended: "true" }));
            app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" }));
            app.use(cors());

            //Connecting to mongoDB Atlas 

            const CONNECTION_URI =
            "mongodb+srv://admin:admin@cluster0.cv40z.mongodb.net/metaverse?retryWrites=true&w=majority";

            const PORT = process.env.PORT || 5000;

            mongoose.connect(CONNECTION_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }).then(()=> app.listen(PORT, () => console.log(`Server Running on http://localhost:${PORT}`) )).catch((err)=> console.log(err.message));

-- When its look the same then just start your server by using the command "npm run dev" in our terminal.
-- And if everything is working fine then you should see the server running on http://localhost:5000.
-- Lets create our first route of the application.
-- To do so Lets create a folder named "routes" in the server folder. In the routes folder create a file named posts.js which will include all the routes regarding the posts of our social media application.
-- In the posts.js file create a route and export the router, after that just import the router in the index.js file and use it by writing "app.use('/posts',postRoutes)".
-- And if everything goes fine then you must see a response in your browser when you hit the url you made the route for.
# Lets set up the folder structure in our server folder
-- Create a folder named "Controllers" for the functions that will run in the specific routes.
-- Inside of the controllers set up a basic controller for the route we are gonna use in our application.
-- After that just import the controller in routes folder in the posts.js file and use it in the specific route and test your route.
-- Create a folder named "Models" for the models that will be used in the application.
-- Inside the Models folder create the model using "mongoose" and its createSchema function.
-- After that just create the routes for the application. Like I made in the starting getPosts and createPosts functions for the routes for getting and creating posts.
-- And if everything goes fine then you must see a response in your browser when you hit the url you made the route for.
-- Then lets get the req.body from the frontend and send it to the backend.

# Come back to the client folder and set up a folder structure like so :- 
-- Create a folder named components in the src folder.
-- Inside of the components folder create two folders named "Forms" and "Posts". Inside of both the folders create a seperate component file and styles file respectively.
-- Inside of the Posts folder create another folder named "Post" and create a component file and styles file respectively.
-- Your Folder Structure of "src" folder should look like :- 
            .
            ├── App.js
            ├── components
            │   ├── Forms
            │   │   ├── Forms.jsx
            │   │   └── styles.js
            │   └── Posts
            │       ├── Post
            │       │   ├── Post.js
            │       │   └── styles.js
            │       ├── Posts.jsx
            │       └── styles.js
            └── index.js
# Lets start Coding stuff in the files that we created in the components folder.

# Just do everything synchronously like at first implement a logic in the backend and rather testing it in a third party software test it in the frontend.

# In linking both the client and server we need to make use of axios and Redux store.

# To do so create three folders named "api", "actions", "reducers" respectively.

# api folder:- It will hold all the axios requests send to the backend and yeah I forgot to tell so that you must add a proxy in your react app by adding a proxy detail in the package.json file like so :- "proxy": "http://localhost:5000"

# actions folder:- It will hold all the actions that will be used in the application for the CRUD operations.

# reducers folder:- It will hold all the reducers that will be used in the application for the CRUD operations.

# Add functionality to all the buttons and then use the axios request to hit the backend and fetch data from it.