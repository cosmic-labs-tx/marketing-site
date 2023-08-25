FROM node:lts AS build

# Build args
ARG PUBLIC_TURNSTILE_SITEKEY
ARG PUBLIC_UMAMI_WEBSITE_ID

WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

FROM pierrezemb/gostatic
COPY --from=build /app/dist /srv/http/