build-dev:
	cd frontend && $(MAKE) build-dev
	cd backend && $(MAKE) build

run-dev:
	docker-compose -f docker-compose.dev.yml up

###

build-local:
	cd frontend && $(MAKE) build-local
	cd backend && $(MAKE) build

run-local:
	docker-compose -f docker-compose.local.yml up

###

build-production:
	cd client && $(MAKE) build-production
	cd server %% $(MAKE) build

run-production:
	docker-compose -f docker-compose.yml up