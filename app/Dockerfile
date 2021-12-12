# Pull the Node.js Docker image
FROM node:14.18.2-alpine3.12

# Create the directory inside the container
WORKDIR /usr/src/app

# Create a low privilege user and make sure they own the app folder
# USER node
# COPY --chown=node:node . /usr/src/app

# Copy the package.json files from local to workdir in container
COPY package*.json ./

# Copy the generated modules and other files to the container
COPY . .

# Set the env to production
ENV NODE_ENV production

# Run NPM install in our local machine
RUN npm install --only=production \
  # Write to entrypoint
  && printf "npm run clean\nnpm run transpile\nnpm run server" > entrypoint.sh

# Our app is running on port 3000, so we need to expose that in the container
EXPOSE 3000

# Start the app
CMD ["/bin/sh", "entrypoint.sh"]