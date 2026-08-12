# Build stage
FROM node:22-bullseye AS builder

WORKDIR /app

# Install dependencies and build the Angular SSR app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build -- --configuration production

# Runtime stage
FROM node:22-bullseye-slim AS runner

WORKDIR /app

# Install only production dependencies
COPY package*.json ./
RUN npm ci --omit=dev

COPY --from=builder /app/dist ./dist

EXPOSE 4000
ENV PORT=4000
ENV NODE_ENV=production

CMD ["node", "dist/madura-front/server/server.mjs"]
