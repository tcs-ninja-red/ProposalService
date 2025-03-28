FROM node:13.12.0-alpine as build

# Environment variables
ENV API_PORT=44202 NODE_ENV=PROD

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN yarn
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

#EXPOSE 44302

CMD [ "node", "src/app.js" ]


