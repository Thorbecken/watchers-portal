# first ng build --prod
# secondly run docker build -t watchers-portal-version
# run with docker run -d -p 4200:80 watcchers-portal-version

FROM nginx:alpine
COPY /dist/watchers-portal /usr/share/nginx/html
EXPOSE 80