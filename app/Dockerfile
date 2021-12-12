# ----- Base ----- #
# Pull the Node.js Docker image
FROM node:14.18.2-alpine3.12 AS base
# Create the directory inside the container
WORKDIR /usr/src/app
# Create a low privilege user and make sure they own the app folder
# USER node
# COPY --chown=node:node . /usr/src/app
# Copy the package.json files from local to workdir in container
COPY package*.json ./

# ----- Test ----- #
FROM base as test
# Copy all files
COPY . .
# Run NPM install in our local machine
RUN npm install
# Run Jest unit tests
RUN npm run test

# ----- Dependencies ----- #
FROM test as dependencies
# Install production node packages
RUN npm set progress=false && npm config set depth 0
RUN npm install --only=production 
# Copy production node modules
RUN cp -R node_modules prod_node_modules
# Remove full node modules
RUN rm -rf node_modules

# ----- Release ----- #
FROM dependencies as release
# Copy production node_modules
COPY --from=dependencies /usr/src/app/prod_node_modules ./node_modules
# Set the env to production
ENV NODE_ENV production
# Run NPM install in our local machine
RUN npm run clean && npm run transpile
# Our app is running on port 3000, so we need to expose that in the container
EXPOSE 3000
# Start the app
CMD npm run server