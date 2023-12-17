FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY ./build /etc/nginx/html/build
CMD ["nginx", "-g", "daemon off;"]
EXPOSE 80