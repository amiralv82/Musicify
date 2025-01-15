# Use Node.js image
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json, then install dependencies
COPY package.json package-lock.json ./
RUN rm -rf node_modules package-lock.json && npm install

# Copy the rest of the admin panel code to the container
COPY . ./

RUN chmod -R 777 /app

# Build the admin React app
RUN npm run build

# Use nginx to serve the admin app
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the default nginx port (80)
EXPOSE 80