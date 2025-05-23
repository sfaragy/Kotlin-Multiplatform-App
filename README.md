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
7. Build shared Kotlin module: ``` make shared_build ```
8. Install backend dependencies: ``` make backend_build ```
9. Start backend: ```make backend_start```  
10. Run backend auth test suite: ```make backend_test_auth```


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

## Tech Stack

   - Frontend: Kotlin Multiplatform (Android, iOS, JS)
   - Backend: Node.js + Express.js   
   - Build: Docker, Docker Compose, Gradle, Makefile   
   - Auth: JWT-based with lowdb for persistence

Testing: Jest
## Deployment
Web:   
API: 


## Backend endpoints for:
### 1. Transactions:

   ```
   GET /api/transactions
   
   POST /api/transactions
   
   DELETE /api/transactions/:id
   ```
   
   ### 2. Budgets
   
   ```
   GET /api/budgets
   
   POST /api/budgets
   
   DELETE /api/budgets/:id
   
   ```

### 3. Auth (Initially Mocked later implement with JWT)

``` 
POST /api/login

POST /api/logout

GET /api/me
```

## Backend running on port 8088, i.e. User Profile
```
http://localhost:8088/api/me
```
