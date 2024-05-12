# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:20 AS builder
WORKDIR /app
COPY . .
RUN npm install --global gulp-cli
RUN npm install
RUN gulp dev -f gulpfile.prod

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15
COPY --from=builder /app/dist/ /usr/share/nginx/html
# Copy the default nginx.conf
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf