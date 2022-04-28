# api-learning

It's time to learn about APIs and proxies. This is my repo.

## What I&rsquo;ve learned along the way

- Initially I was using [node-fetch](https://github.com/node-fetch/node-fetch) for async data calls. I moved to [Axios](https://github.com/axios/axios) once I started mocking API calls in test. I&rsquo;m sure there is a way to resolve the [Jest - TypeError: response.json is not a function](https://stackoverflow.com/questions/58599735/jest-typeerror-response-json-is-not-a-function) error, but in the interest of time, I pivoted. Switching to Axios allows me to mock API calls quickly, and reason about my data.

## Resources
Articles that have helped fill in knowledge gaps.

### Startup scripts
- [Express.js Beginner Tutorial](https://vegibit.com/express-js-beginner-tutorial/)

### Fetching and testing
- [How to Use Fetch with async/await](https://dmitripavlutin.com/javascript-fetch-async-await/)
- [Get Query Strings and Parameters in Express.js](https://stackabuse.com/get-query-strings-and-parameters-in-express-js/)
- [The only 3 steps you need to mock an API call in Jest](https://dev.to/zaklaughton/the-only-3-steps-you-need-to-mock-an-api-call-in-jest-39mb)

### Security

- [How to avoid exposing your API key in your public front-end apps](https://www.freecodecamp.org/news/private-api-keys/)
- [Using dotenv package to create environment variables](https://medium.com/@thejasonfile/using-dotenv-package-to-create-environment-variables-33da4ac4ea8f)
- [How to Prevent Cross-Site Scripting in Node.js](https://www.section.io/engineering-education/how-to-prevent-cross-site-scripting-in-node-js/)
- [express-validator](https://github.com/express-validator/express-validator)
- [CHEATSHEET: 10 best practices to containerize Node.js web applications with Docker](https://snyk.io/wp-content/uploads/10-best-practices-to-containerize-Node.js-web-applications-with-Docker.pdf)
- [10 best practices to containerize Node.js web applications with Docker](https://snyk.io/blog/10-best-practices-to-containerize-nodejs-web-applications-with-docker/)
- [10 Docker Security Best Practices](https://snyk.io/blog/10-docker-image-security-best-practices/)
- [How to Build a Secure Server with Node.js and Express and Upload Images with Cloudinary](https://www.freecodecamp.org/news/build-a-secure-server-with-node-and-express/)

## Troubleshooting
Because sometimes, things just go wrong.
- [SO: ES6 import happening before .env import](https://stackoverflow.com/a/42817956)
- [SO: how to run multiple npm scripts in docker CMD command](https://stackoverflow.com/a/62628394)
