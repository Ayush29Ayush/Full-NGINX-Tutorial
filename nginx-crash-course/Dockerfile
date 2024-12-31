# Use Node.js 14 as the base image
FROM node:14

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package.json . 
COPY package-lock.json .  

# Run npm install to install dependencies
RUN npm install

# Copy the rest of the files to the container
COPY server.js .
COPY index.html .
COPY images ./images
COPY styles.css .
COPY .env .

# Expose port 3000 for the application
EXPOSE 3000

# Set the default command to run the server.js script using Node
CMD ["node", "server.js"]