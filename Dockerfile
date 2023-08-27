# Use the official Node.js image as the base image
FROM node:18

# Install FFmpeg
RUN apt-get update && \
    apt-get install -y ffmpeg

# Set the working directory inside the container
WORKDIR /app

# Copy all files from the current directory to the container
COPY . .

# Install express and child_process packages
RUN npm install express child_process

# Command to run the index.js file
CMD ["node", "index.js"]
