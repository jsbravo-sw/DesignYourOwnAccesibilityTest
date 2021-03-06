# DesignYourOwnAccesibilityTest

## GIF

![](https://raw.githubusercontent.com/dfriveros11/DesignYourOwnAccesibilityTest/master/giphy2.gif)

## Description
It is a web page that let you consttruct your own accesibility test. 

## Authors

- [Diego Riveros](https://dfriveros11.github.io/DiegoRiverosWebPage/) :man:
- [Laura Pardo](https://laupardo.github.io/index.html) :girl:

## Check the page :sunglasses:

[Link](https://designyourownaccesbilitytest.herokuapp.com/)

## Prerequisites

In order to deploy the page locally, you should have the following technologies install if you don't have installed just click on the name and you will be redirected to the dowloand page:

- [Nodejs](https://nodejs.org/es/download/)
- [Mongodb](https://www.mongodb.com/download-center/community) or [Docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/)

## Deployment
Enter in the root folder of the proyect and run the following commands: 

```
 # Install dependencies for server
 yarn install
  
 #Enter the folder front and run yarn
 yarn install 
```
Finally, create a -env file in the root folder to set the variables that are needed to run the project. For example, 
```
clientID="HERE GOES YOUR CLIENT ID" 
clientSecret="HERE GOES YOUR CLIENT SECRET" 
dbURI="HERE GOES YOUR URL TO CONNECT TO THE DATABASE OF USERS"
cookieKey="HERE GOES YOUR COOKIE KEY"
GOOGLEKEY="HERE GOES YOUR GOOGLE MAPS API KEY"
MONGODB_URI="HERE GOES YOUR URL TO CONNECT TO THE OTHER DATABASE"
```

### Linux
In the root folder, run the following command: 
```
yarn start
```
Then, go to the front foler and run the following command:  
```
yarn start
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
