FROM node:22.12.0 AS development
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "npm", "run", "dev" ]

FROM node:22.12.0 as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:22.12.0  AS production
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/.next/ ./.next
COPY --from=build /app/public/ ./public
CMD ["npm", "run", "start"]
