FROM node:latest

WORKDIR /app

# Install bun
RUN npm install -g bun

COPY bun.lockb package.json /app/

# Install Poduction dependencies / Temporarily disables -P 'ONLY' production dependencies 
RUN bun install 

COPY . .

ENTRYPOINT [ "bun","dev" ]