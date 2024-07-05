# About

This is a backend project for Deskbird's assignment.
The stack is Node Js, Express Js, TypeScript, Sequelize (ORM) & Postgres
</br>

The development was done in:

- Ubuntu 22.04.4 LTS.
- Node v18.17.1
- Npm v9.6.7
- PostgreSQL 16.3 (Ubuntu 16.3-1.pgdg22.04+1)

### Project Setup

Note: Before proceeding, make sure you already have installed node and postgres for the OS that you are using.

- git clone https://github.com/GeorgeKrs/deskbird.git
- Rename the .env.sample file into .env and change your env variables

### Server

- Open a terminal in project's directory and run: <b>npm start</b>

### General Notes

- The app is hosted on a personal temp domain http://gkrs.gr/api/bookings and it is connected with a development Google Cloud Postgres
- In the root directory you will find a <b>utils</b> directory that contains a SQL file that you can import locally to create an instance of a database with data.
- You will also find a json file with the Postman APIs collection used both for development and in production.
- Last but not least, the tokens in the users table are not encrypted so that the testing can be done easily (User with token: token1 is the only user that has admin rights).

</br>

If you have any questions, do not hesitate to reach out! (:
