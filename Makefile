setup: build load
	docker-compose run api db create
	docker-compose run api db setup

run:
	docker-compose up -d

build:
	docker-compose build

load: node
	npm run load

node:
	npm i

clean:
	docker-compose rm -f -s -v
