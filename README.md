# Kamma Webpage Form

## Prerequisites

The following prerequisites are needed to run this project

- NPM/Yarn
- Docker

## Configure project

If you haven't already, you will need to create an `.env` file at the root of the project. To do this first copy the example env file
`cp .env.example .env`

To configure SMTP, fill in any relevant deatils such as the SMTP email and password in the newly created `.env`

## View production build

To view a production build, just run `yarn start` which will build and run the docker containers.

## Tests

To run the test suite for this project, do the following:

1. Install the NPM dependencies by running `yarn`
2. Run `yarn test`

## Start Development

To start development, do the following:

1. Install the NPM dependencies by running `yarn`
2. Open up the `.env` file and change the `NODE_ENV` variable from production to development.
3. Run `yarn start`

You can view the newly created site here http://localhost:8000/

**Note**
Going to the address (http://127.0.0.1:8000/) will not work as there are some CORS issues when sending a request to the API.
