FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json, then install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the admin panel code to the container
COPY . ./

# Build the admin React app
RUN npm run build

# Use nginx to serve the admin app
FROM nginx:alpine

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build files to nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the default nginx port (80)
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]