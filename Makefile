.PHONY: help lint test build

help:
	@echo "install:         Install all the parts needed for local dev"
	@echo "clean:           Completely clean everything up"
	@echo "clean-src:       Clean node_modules for src tree"
	@echo "clean-dist:      Clean distribution folder"
	@echo "dev:             Run the development environment"
	@echo "serve:           Serve web application"
	@echo "test:            Run tests."
	@echo "build:           Build web application"
	@echo "deploy-app:      Deploy the front end application"

clean-src:
	@echo 'Cleans the src files'
	cd ./src && rm -rf node_modules

clean-dist:
	@echo 'Cleans all of the distribution files up'
	cd ./dist && rm -rf ./*
	@echo 'Files cleaned up'

clean: clean-src clean-dist

install:
	@echo 'Installs the dependencies'
	cd ./src && npm install
	@echo 'Dependencies installed'

dev:
	cd ./src && npm run start

serve:
	cd ./dist && npx serve

scss:
	cd ./src && npm run scss

test:
	cd ./site && npm run test

build: clean-dist scss
	@echo "build: Build files for deploy"
	cd ./src && npm run build

deploy:
	@echo "Deploying the application"
	cd ./dist && aws s3 sync . s3://aj-web-ajfjfdfdj --delete

