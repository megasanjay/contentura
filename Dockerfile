# Build stage
FROM node:20-alpine AS builder

# Use alpine-based image and install only necessary dependencies
RUN apk add --no-cache openssl

WORKDIR /app

# Copy only necessary files for dependency installation
COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile \
  && yarn cache clean

# Copy source files and build
COPY . .
RUN yarn run build

# Production stage
FROM node:20-alpine

LABEL maintainer="FAIR Data Innovations Hub <contact@fairdataihub.org>" \
  description="Contentura is a new way to publish documentation via Nuxt."

RUN apk add --no-cache openssl

WORKDIR /app

# Copy only the necessary files from builder stage
# COPY --from=builder /app/package.json ./
COPY --from=builder /app/.output ./

# Create startup script that runs migrations before starting the app
RUN echo '#!/bin/sh' > /app/start.sh && \
  echo 'exec node /app/server/index.mjs' >> /app/start.sh && \
  chmod +x /app/start.sh

EXPOSE 3000

CMD ["/bin/sh", "/app/start.sh"]