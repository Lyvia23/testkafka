FROM node:22-alpine


WORKDIR /app

COPY package*.json ./

# USER node
RUN ls
RUN npm install

COPY --chown=node:node . .

EXPOSE 3000

# Commande pour démarrer l'application
CMD ["node", "product_consumer.js"]