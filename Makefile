# Test if the dependencies we need to run this Makefile are installed
DOCKER := $(shell command -v docker)
DOCKER_COMPOSE := $(shell command -v docker-compose)

init: install-dependencies deps

.PHONY: init
install-dependencies:
	npm install 
	npm run prepare

deps:
ifndef DOCKER
	@echo "Docker is not available. Please install docker"
	@exit 1
endif
ifndef DOCKER_COMPOSE
	@echo "docker-compose is not available. Please install docker-compose"
	@exit 1
endif

.PHONY: build-development
build-development: 
	docker compose -f docker-compose.yml build app

.PHONY: start-development
start-development:
	docker compose -f docker-compose.yml up -d app

.PHONY: stop-development
stop-development:
	docker compose -f docker-compose.yml down app


.PHONY: build-tests
build-tests: 
	docker compose -f docker-compose.yml build app-test

.PHONY: start-tests
start-tests: 
	docker compose -f docker-compose.yml up app-test

.PHONY: stop-tests
stop-tests:
	docker compose -f docker-compose.yml down app-test
