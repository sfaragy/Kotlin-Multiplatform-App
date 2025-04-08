## Kotlin Multiplatform App Project – Dockerized Build - 2025
This repository showcases a Kotlin Multiplatform project structured into:
shared/ – common business logic for all platforms
androidApp/ – native Android application
iosApp/ – native iOS application
web/ – Kotlin/JS frontend

The entire build process is containerized using Docker, allowing the project to be built consistently across environments without requiring Kotlin SDKs, Android Studio, or Xcode installed on the host machine.

## A simple demonstration for:
- Work across multiple platforms using a single Kotlin codebase
- Automate and isolate builds for portability and reliability
- Use Docker to streamline developer onboarding and CI/CD workflows
- Writing testable and maintainable code with modern software engineering principles
- Planning, Development & Administration of Modern Applications

## Makefile to enhance productivity:
.PHONY: build stop start restart

build: stop
docker-compose -f docker-compose.yml build

stop:
docker-compose -f docker-compose.yml down

start: stop init_server

init_server:
docker-compose -f docker-compose.yml up --remove-orphans -d


restart: stop start