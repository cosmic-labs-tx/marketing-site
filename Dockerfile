FROM node:lts AS build
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build

FROM pierrezemb/gostatic
COPY --from=build /app/dist /srv/http/