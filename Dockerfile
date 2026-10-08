FROM node:20-alpine
WORKDIR /app
COPY package.json server.js railway.json ./
COPY public ./public
COPY snapshots ./snapshots
ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", "server.js"]
