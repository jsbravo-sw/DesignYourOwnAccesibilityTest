# DesignYourOwnAccesibilityTest

## GIF
![](https://raw.githubusercontent.com/dfriveros11/NeighborAssist/master/gifWeb.gif)

## Description



## Authors 

- [Diego Riveros](https://dfriveros11.github.io/DiegoRiverosWebPage/)  :man:
- [Laura Pardo](https://laupardo.github.io/index.html)   :girl:

## Check the page  :sunglasses:
[Link](https://neighborassist.herokuapp.com/)

## Prerequisites
In order to deploy the page locally, you should have the following technologies install if you don't have installed just click on the name and you will be redirected to the dowloand page:
- [Nodejs](https://nodejs.org/es/download/)
- [Mongodb](https://www.mongodb.com/download-center/community) or [Docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/)


## Deployment
Enter in the root folder of the proyect and run the following commands: 

```
 # Install dependencies for server
 yarn install
 
 # Add mongodb to yarn
 yarn add mongodb
 
 #Enter the folder front and run yarn
 yarn
```
Also in the root folder create a file .env to set the variables need to run the project. For example, 
```
clientID="HERE GOES YOUR CLIENT ID" 
clientSecret="HERE GOES YOUR CLIENT SECRET" 
dbURI="HERE GOES YOUR URL TO CONNECT TO THE DATABASE OF USERS"
cookieKey="HERE GOES YOUR COOKIE KEY"
GOOGLEKEY="HERE GOES YOUR GOOGLE MAPS API KEY"
MONGODB_URI="HERE GOES YOUR URL TO CONNECT TO THE OTHER DATABASE"
```

Almost there!!!.

### Windows
Open a new cmd and set your environment variables (this is optional because sometimes windows have problems with reading the file .env) 

```
clientID="HERE GOES YOUR CLIENT ID" 
clientSecret="HERE GOES YOUR CLIENT SECRET" 
dbURI="HERE GOES YOUR URL TO CONNECT TO THE DATABASE OF USERS"
cookieKey="HERE GOES YOUR COOKIE KEY"
GOOGLEKEY="HERE GOES YOUR GOOGLE MAPS API KEY"
MONGODB_URI="HERE GOES YOUR URL TO CONNECT TO THE OTHER DATABASE"
```
Then type
```
yarn start
```
Then open another tabor window for cmd and go to where the front folder is 
```
yarn start
```
(OPTIONAL) If you are runnning the other database locally. Before run yarn start do the next: 

Go to where you intsalled mongo (eg.)
```
C:\Program Files\MongoDB\Server\3.2\bin>
```
Enter command
```
mongod
```
and then, enter command
```
mongo
```
## Used technologies

- HTML
- CSS
- Bootsrap 
- Javascript
- MongoDB
- Express
- React

# MIT License 
This project is licensed by the MIT [License](https://github.com/dfriveros11/NeighborAssist/blob/master/LICENSE).
