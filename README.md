# MMO Game Cities
## What is that?
Responsive, cross-browser SPA.

- Frontend made with Javascript, React and gRPC-web
- [Backend](https://git.yandex-academy.ru/school/2022-09/projects/team19/mmo-towns) made with C++, Python, userver.


## About this game

Welcome to word chain geography multiplayer online quiz game.
User mission is to name as many cities as possible. Who's the fastest guesser?

!!!!СЮДА ВИДОС ИЛИ ГИФКУ

## Features:
- Large word database: over 5,000 cities
- Customize your gaming experience with unique nickname and avatar
- Multiplayer game with random parties or compete against your friends using join room link
- Easy to step-in, hard to win

 !!!!СЮДА ВИДОС ИЛИ ГИФКУ

## User journey map:

### Registration
  - User can register or login by email.
  - User can login without registration. 
    In this case, he gets random nickname and avatar

### Starting game
  There are two options two start playing:
  - Clicking **PLAY** button (**ИГРАТЬ**)
  - Clicking **ROOMS** button (**КОМНАТЫ**) to choose exact room to start the game
#### PLAY button
  In this case, user joins random room from list. Avaliable random room fits two criterias:
  - It has empty slot for our user.
  - The game is not started or finished yet.
  
  !!!!СЮДА ВИДОС ИЛИ ГИФКУ
  
 *As an option, we can set and allow our user to join in-progress games with avaliable slots.*
 
 #### ROOM button
 Clicking on this button directs user to avaliable rooms list
 
 !!!!СЮДА ВИДОС ИЛИ ГИФКУ
  



• N developers registrates on the server
• Server drops a random city
• All players try to send next city name based on last character of previous city
• Cities are compared with the list of cities in the database
• If there is no such city - answer is not accepted and the user gets no score, game timer is running
• Every city can be used only once during the game. In aonther case, answer is not accepted and the user gets no score, game timer is running
• If there is a city, then the one who first named the city gets score. Game timer sets to default 30 seconds.
• The game ends when no one offers a new city within 30 seconds
• The winner is the user with high score Who will throw more cities - wins.





## How it works



Very Fun! Game for everybody!


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
