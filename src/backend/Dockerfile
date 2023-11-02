FROM node:latest

WORKDIR /app

# Install bun
RUN npm install -g bun

COPY bun.lockb package.json /app/

# Install Poduction dependencies
RUN bun install -p

COPY . .

ENTRYPOINT [ "bun","dev" ]