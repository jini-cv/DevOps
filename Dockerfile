# Use Node.js LTS version
FROM node:18

# Set working directory inside container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all other project files
COPY . .

# Expose the port your app runs on
EXPOSE 4000

# Start the server
CMD ["node", "server.js"]
