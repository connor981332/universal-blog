PROJECT_NAME := universal-blog
IMAGE_REPO := registry.corp.ridetracker.io
IMAGE_TAG ?= latest
CONTAINER_PORT := 3000
HOST_PORT := 3000

build:
	docker build . --target=prod -t $(IMAGE_REPO)/$(PROJECT_NAME):$(IMAGE_TAG)

push:
	docker push $(IMAGE_REPO)/$(PROJECT_NAME):$(IMAGE_TAG)

start:
	docker run -d -p $(HOST_PORT):$(CONTAINER_PORT) --name $(PROJECT_NAME) $(IMAGE_REPO)/$(PROJECT_NAME):$(IMAGE_TAG)