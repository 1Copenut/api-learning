# ----- Base ----- #
# Pull the Node.js Docker image
FROM node:14.18.2-alpine3.12 AS base
# Create the directory inside the container
WORKDIR /usr/src/app
# Switch to the low privilege user
USER node
# Change ownership of the working directory to low privilege user
COPY --chown=node:node . /usr/src/app
# Copy the package.json files from local to workdir in container
COPY package*.json ./

# ----- Dependencies ----- #
FROM base as dependencies
# Copy all files
COPY . .
# Install production node packages
RUN npm set progress=false && npm config set depth 0
RUN npm install --only=production 

# ----- Release ----- #
FROM dependencies as release
# Set the env to production
ENV NODE_ENV production
# Copy production node_modules
COPY --from=dependencies /usr/src/app/node_modules ./node_modules
# Run NPM install in our local machine
RUN npm run clean && npm run transpile
# Our app is running on port 3000, so we need to expose it in the container
EXPOSE 3000
# Start the app
CMD npm run server