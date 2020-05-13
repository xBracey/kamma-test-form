# Kamma Webpage Form

## Prerequisites

The following prerequisites are needed to run this project

- NPM/Yarn
- Docker

## View production build

To view a production build, just run `yarn start` which will build and run the docker containers.

## Start Development

Before starting anything on this project, you will need to install the NPM dependencies by running `yarn`

You will need to also create an `.env` file at the root of the project. To do this:

1. Copy the example env file `cp .env.example .env`
2. Fill in any relevant deatils such as the SMTP email and password

**To start development, do the following:**

1. Open up the `.env` file and change the NODE_ENV variable from production to development.
2. Run `yarn start`
