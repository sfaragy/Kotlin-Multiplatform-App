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
``` 
.PHONY: build stop start restart, shared_build, android_build, web_build, ios_build


build: stop
	docker-compose -f docker-compose.yml build

stop:
	docker-compose -f docker-compose.yml down

start: stop init_server

init_server:
	docker-compose -f docker-compose.yml up --remove-orphans -d

restart: stop start

shared_build:
	docker exec -it kmp-dev ./gradlew :shared:build

android_build:
	docker exec -it kmp-dev ./gradlew :androidApp:assembleDebug

web_build:
	docker exec -it kmp-dev ./gradlew :web:jsBrowserProductionWebpack

ios_build:
	docker exec -it kmp-dev ./gradlew :shared:iosX64Test

```

## Basic commands to use the environment


1. Build Docker image: ```docker-compose build```
2. Run container: start / stop: ```docker-compose up -d ``` / ```docker-compose down ``` Other way ```make start``` / ```make stop```
3. Build shared code: ```make shared_build```
4. Build Android: ```make android_build```
5. Build Web: ```make web_build```
6. Build iOS: ```make ios_build```
7. Or Notes to Build Inside container: (if Make commands are not functional)
    ```
    gradle :shared:build
    gradle :androidApp:assembleDebug
    gradle :web:jsBrowserProductionWebpack
    gradle :shared:iosX64Test
    ```


# Personal Finance Tracker (Kotlin Multiplatform): May 17, 2025

A cross-platform personal finance tracker built with **Kotlin Multiplatform**, **Docker**, and **Node.js**. Supports Android, iOS, and Web.

## Features as per planning
- Track income & expenses
- Cross-platform shared business logic
- Offline support with local storage
- Sync via backend API
- Budget and category tracking
- Dockerized builds for all environments

## Project Structure
 - src/
   - shared/ → Kotlin Multiplatform shared logic
   - androidApp/ → Android App (Jetpack Compose)
   - iosApp/ → iOS App (Swift + KMP)
   - web/ → Web Frontend (Kotlin/JS)
   - backend/ → Node.js + Express REST API

## Test Strategy
- Red-Green-Refactor using `kotlin.test` and `mockk`
- Unit test for shared logic
- Backend routes test with Postman

## Milestones
| Phase | Task | Status |
|-------|------|------|
| Setup | Shared models, Docker | In Progress |
| Core  | CRUD Logic | Next |
| Frontend | Android/Web UI | Next |
| Backend | Node API, JWT | Next |
| CI/CD | Vercel + GitHub Actions | Later |

## Deployment
Web:   
API: 

