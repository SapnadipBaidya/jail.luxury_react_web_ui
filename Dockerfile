# Base image for build
FROM node:alpine3.21 AS build

# Set working directory
WORKDIR /app

# Copy only package.json and package-lock.json to install dependencies first
COPY package.json .

# Install dependencies
RUN npm install 

# Copy the rest of the application source code
COPY . .

# Build the project
RUN npm run build

FROM nginx:1.9.15-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=build /app/build .
EXPOSE 80
ENTRYPOINT [ "ngnix","-g","daemon off;" ]