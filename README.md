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
 Clicking on this button directs user to avaliable rooms list page.
 Here are two options:
 - User can join one of avaliable rooms which can vary number fo players and game language
 - User can create his own room. Number of players and lalnguage is set by default.  *As an option, user can set with his own settings (In progress)* 
 !!!!СЮДА ВИДОС ИЛИ ГИФКУ.
 
  
### Game in-progress
- After game slots are filled, server starts game and drops a random city
- All players try to send next city name based on last character of previous city
- Cities are compared with the list of cities in the database
- If there is no such city - answer is not accepted and the user gets no score, game timer is running
- Every city can be used only once during the game. In another case, answer is not accepted and the user gets no score, game timer is running
- If there is a city, the first user named the city gets score. Game timer rool back to 30 seconds.

### Game is finished
- The game ends when no one offers a new city within 30 seconds
*As an option, we can set endgame as one of users gets the exact score.*
- The winner is the user with high score.
- From this point, user can join random room again or he can switch to the rooms list.


## How it works



## ToDo:

- Multi-language support
- Advanced room customization
- Integrated game chat
- Game history
- Game stats
- Ranked Games


Very Fun! Game for everybody!

## How to run

Unfortunately, backend is still under NDA and has not been officially revealed to open-source yet, stay tune for updates, it will be deplyed here soon.

Frontend can be launched by `npm start`.

It runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

