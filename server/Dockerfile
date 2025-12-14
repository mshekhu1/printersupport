FROM node:18-alpine
WORKDIR /app

# Install only production dependencies
COPY package.json package-lock.json* ./
RUN npm ci --only=production || npm install --production

# Copy server files
COPY server ./server

EXPOSE 4000

CMD ["node", "server/signaling.js"]
