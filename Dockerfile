FROM node:lts AS build
ARG PUBLIC_TURNSTILE_SITEKEY=0x4AAAAAAAJN3VjuceAYMzev
ARG PUBLIC_UMAMI_WEBSITE_ID=9e145e29-b825-4715-bd63-c4a68fca0828
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build

FROM pierrezemb/gostatic
COPY --from=build /app/dist /srv/http/