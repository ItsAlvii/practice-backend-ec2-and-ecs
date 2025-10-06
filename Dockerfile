# Step 1 — Use Node.js base image
FROM node:20-alpine

# Step 2 — Set working directory
WORKDIR /app

# Step 3 — Copy package files and install dependencies
COPY package*.json ./
RUN npm install --production

# Step 4 — Copy the rest of the app
COPY . .

# Step 5 — Expose port
EXPOSE 3000

# Step 6 — Start the app
CMD ["node", "server.js"]

