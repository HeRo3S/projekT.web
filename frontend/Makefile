build-dev:
	docker build -t react-app -f Dockerfile.dev .

build-local:
	docker build -t react-app-production:local \
	--build-arg CADDYFILE=Caddyfile.local \
	--build-arg BASE_URL=http://localhost:3001/ \
	-f Dockerfile .

build-production:
	docker build -t react-app-production:production \
	--build-arg CADDYFILE=Caddyfile \
	--build-arg BASE_URL=http://103.190.121.89:3001 \
	-f Dockerfile .
