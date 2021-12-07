# Pull the Node.js Docker image
FROM node:alpine

# Create the directory inside the container
WORKDIR /usr/src/app

# Copy the package.json files from local to workdir in container
COPY package*.json ./

# Run NPM install in our local machine
RUN npm install

# Copy the generated modules and other files to the container
COPY . .

# Our app is running on port 3000, so we need to expose that in the container
EXPOSE 3000

# Start the app
CMD ["node", "server.js"]