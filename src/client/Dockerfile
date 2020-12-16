# Downoad node latest
FROM node

RUN npm install -g react react-scripts

# Create directories
RUN mkdir -p /usr/src/app/client

# Set working directory
WORKDIR /usr/src/app/client

# Copy package.json into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Make port --- available from outside the container
EXPOSE 3000

# Run the app when the container launches
CMD ["npm", "start"]


