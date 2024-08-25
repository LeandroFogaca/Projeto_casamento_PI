# Use a Node 16 base image
FROM node:18 as builder
# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY . .
# ==== BUILD =====
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm install
## Run the app
CMD [ "npm", "run", "dev" ] 