# Download node latest
FROM node

# Create directories
RUN mkdir -p /usr/src/app/server

# Set working directory
WORKDIR /usr/src/app/server

# Copy the package.json into container
COPY package*.json ./

# Install dependencies
RUN npm install

# Make port available from outside of container
EXPOSE 8000

# Run the app when the container launches
CMD ["npm", "run", "dev"]
