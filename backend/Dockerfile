# Use an official Node.js runtime as a parent image
FROM node:22.9.0

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install any needed packages
RUN npm install

# Copy the rest of the application code
COPY . .

# Install Prisma globally
RUN npm install -g prisma

# Make port 8000 available to the world outside this container
EXPOSE 8000

# Run the app
CMD ["sh", "-c", "prisma generate && npm run dev"]
