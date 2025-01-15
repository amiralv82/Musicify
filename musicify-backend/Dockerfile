# Use Node.js image
FROM node:16

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the backend code to the container
COPY . .

# Expose the port your backend uses
EXPOSE 4000

# Start the backend server
CMD ["node", "server.js"]