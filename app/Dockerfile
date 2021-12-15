# Pull the Node.js Docker image
FROM node:14.18.2-alpine3.12 AS builder
# Create the app directory
RUN mkdir -p /home/node/app
# Set the working directory
WORKDIR /home/node/app

# ----- Dependencies ----- #
# Copy the app source files
COPY . .
 
# ----- Release ----- #
# Install deps and compile sources to `dist`, then remove dev deps
RUN npm set progress=false && \
   npm config set depth 0 && \
   npm ci && \
   npm run transpile && \
   npm prune

#-------------------------------------------------------------------------------

FROM node:14.18.2-alpine3.12

RUN apk add tini

ENV NODE_ENV production

# Our app is running on port 3000, so we need to expose it in the container
EXPOSE 3000

COPY --from=builder /home/node/app /home/node/app

WORKDIR /home/node/app

# Switch to the low privilege user.
# It is unable to modify app files or dependencies.
USER node

# Let tini handle all signals
ENTRYPOINT ["/sbin/tini", "--"]

# Start the app
CMD ["node", "dist/bin/www"]
