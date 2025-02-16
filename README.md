Brendan's instructions for the new Express-React-Project

Make sure the following are installed

Check each and see if your terminal just returns a version number like it should:

node    (check by running "node -v")

npm     (check by running "npm -v")

git     (check by running "git --version")

python  (check by running "python --version" or "python3 --version")

and I assume you already have a code editor (VS Code recommended)


Run these, line by line, in a bash terminal in order to setup the project:

cd server

npm i express

npm i nodemon -D

npm install jsonwebtoken

npm install bcrypt


cd ..

cd client

npm install

npm install react-router-dom

npm start



The "React App" should now be running at http://localhost:3000/

If you change and save any file, the website will automatically update thanks to nodemon


Remember that the server must be running to use the backend, so run:

node server.js

whenever you boot this project up and start developing