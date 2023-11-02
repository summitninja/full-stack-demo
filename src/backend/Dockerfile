FROM oven/bun:latest

WORKDIR /app


COPY bun.lockb package.json /app/

# Install Poduction dependencies
RUN bun install -p

COPY . .

ENTRYPOINT [ "bun","dev" ]