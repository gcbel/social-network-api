# Social Network API

## Description

This project is the back-end for a social netwroking platform, which allows ways of creating, updating, and deleting users and thoughts, as well as allowing users to interact with eachother as friends and react to other's posts. This project is created using Express.js, Mongoose, and MongoDB.

[Here](https://drive.google.com/file/d/1VFsQVC1SFJZe-Etio1S9o1tbtuN6nNCS/view?usp=drive_link) is a video demonstrating the functionality of the application.

## Installation

This application can be run locally. Once the repository has been cloned, ensure you have MongoDB installed by running `mongod --version`. If it is not installed, you can download MongoDB from the official website [here](https://www.mongodb.com/docs/manual/administration/install-community/).

Once in the cloned repository, run `npm install` to download the package dependencies ([express](https://expressjs.com/) and [mongoose](https://sequelize.org/)).

## Usage

The server can be started with `npm run start` or `node server`.

The API supports the following endpoints:

### Users

- `GET /api/users`: Get all users
- `GET /api/users/:userId`: Get a user by ID
- `POST /api/users`: Create a new user
- `PUT /api/users/:userId`: Update a user by ID
- `DELETE /api/users/:userId`: Delete a user by ID

### Friends

- `POST /api/users/:userId/friends/:friendId`: Add a friend (friendId) to a user's (userId's) friends list
- `DELETE /api/users/:userId/friends/:friendId`: Remove a friend (friendId) from a user's (userId's) friends list

### Thoughts

- `GET /api/thoughts`: Get all thoughts
- `GET /api/thoughts/:id`: Get a thought by ID
- `POST /api/thoughts`: Create a new thought
- `PUT /api/thoughts/:id`: Update a thought by ID
- `DELETE /api/thoughts/:id`: Delete a thought by ID

### Reactions

- `POST /api/thoughts/:thoughtId/reactions`: Add a reaction to a thought (thoughtId)
- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId`: Remove a reaction (reactionId) from a thought (thoughtId)

## Credits

## License

[MIT License](https://opensource.org/license/mit)
