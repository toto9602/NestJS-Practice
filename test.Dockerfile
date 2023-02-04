FROM busybox
WORKDIR /build-context
COPY . . 
CMD find .

# Test .dockerignore
# docker container run --rm build-context