#!/bin/bash
docker build -t jinyoungsung/nginx:latest . || exit 1
docker push jinyoungsung/nginx:latest || exit 1