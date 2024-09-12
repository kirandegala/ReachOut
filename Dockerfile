# Use the official Node.js 14 image as the base
FROM node:14

# Set the working directory
WORKDIR /ReachOut

# Copy package.json and package-lock.json first to leverage Docker's caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Run the development server
CMD ["npm", "run", "dev"]
