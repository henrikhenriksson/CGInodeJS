# Rest API Word Counter

## About

Purpose: The purpose of this project is to solve an assignment. The task is to create a Restful API capable of handling post requests containing blocks of words. The API should manipulate the block of text and respond with the 10 most commonly used words, and their frequency in the text.

Created by: Henrik Henriksson

Contact: henrikhenriksson87@gmail.com

## Pre-Requisites

- Install Node 16.13.0

## Getting Started:

- Clone the repository:

        git clone git@github.com:henrikhenriksson/CGInodeJS.git

- Install Dependencies:

        - cd CGInodeJS

        - npm install

Make sure you are in the root folder of the project containing package.json before running the 'npm install' command.

- Build and Run:

        npm start

- Requests containing blocks of text can be sent to localhost:3000/count

        During the development of this project, the Postman API platform was utilized for testing the API.

## Project Structure

CGIWC Project Root folder
API Contains API specific folders
Components Components containing functions
Routes Contains API endpoint route

| Folder     |      Contents      |
| ---------- | :----------------: |
| CGIWC      |    Root Folder     |
| API        |    Source Code     |
| Components |     Functions      |
| Routes     | API Endpoint Route |

### Known issues

- Error handling is not fully tested
- Some error codes have not been implemented
- Cors has not been implemented as a dependency.
