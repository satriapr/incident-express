# Incident Management

This is a simple Incident Management REST API. Using Express, Typescript, and MongoDB.

## Technical overview

### I. Main dependency libraries
- [Mongoose](https://mongoosejs.com/): Mongo DB Object Modelling. Reasons for using this: 
    - Using NoSQL in general because the incident management dashboard would not contain many relations, similar with logger. If we want to build Marketplace, or something with many relations, I prefer using SQL database and GraphQL.
    - It will be more beneficial to use NoSQL because the write and read is very fast. 
    - Using this over CouchDB because I don't have experience in CouchDB, and the library seems very old and not updated for years(node-couchdb). Also because of limited time I'm not confident to use this DB.
    - Another thing is because in my research, couchDB is great if we want to develop mobile app that's support offline mode. In this Incident Management case, we don't need it. CouchDB also seems slower in read and write.
- [TypeScript](https://www.typescriptlang.org/): Typed language for Javascript. Reasons for using this:
    - Support OOP, e.g. classes, interfaces, inheritance. In my opinion this is good as project grows in size and complexity.
    - This gives code more structure and readable, hence speeds up debugging and refactoring.
- [Lodash](https://lodash.com/): functional library for general use.
- [Jest](https://jestjs.io/docs/en/getting-started) and [Enzyme](https://airbnb.io/enzyme/docs/api/): js testing framework.
- [ESLint](https://eslint.org/): Javascript linter for ES pattern.
- [Prettier](https://prettier.io/): Code formatter.
- Other supporting libraries, can be found in package.json.

### II. Source code architecture
- controllers folder: Controllers. Responsible for communication between client and service. Retrieve request, call service, and return response. Shouldn't contain business logic.
- constants folder: Constant.
- services: Responsible for serving what controllers need, contains query and business logic. Using Dependency Injection to be injected to controller.
- utils: Help
- models: Schema structure.
- .test file: Testing.
- Not usingTypescript because I think React is going more functional with hooks, hence I'm using PropTypes to check props.

### III. Run and Test

To run project (debug - http://localhost:5000):
```bash
npm i && npm run dev
```

To run project (docker - http://localhost:5000):
```bash
docker pull satriap/incident-express:latest
docker run -it -p 5000:5000 satriap/incident-express
```

To run test:
```bash
npm test
```

## What can be improved (this is not done because of time limit to do both BE and FE, also because of work load in current company)

### I. Feature
- Currently route is not protected. Should use login and auth, in different service.

### II. Code and library
- Unit Test result:
![](https://i.ibb.co/DYfRm8R/Screen-Shot-2021-12-16-at-6-12-48-PM.png)
- Test cases currently only Unit Test in Controller. In my opinion should add unit test in service too, and integration test. Integration test will be integrated with DB and check if data in DB really changed after API call.
- API Documentation Should be better and interactive. Also need to specify the request and parameter type. E.g. using swagger.

## API Documentation

### Get Incidents
Request:
```http
GET /incidents
```

```
curl -i -H 'Accept: application/json' http://localhost:5001/incidents
```

Response:
```javascript
{
  "message" : "OK",
  "statusCode" : 200,
  "data"    : [
    {
      "_id": "61bb415651cc794e3551062a",
      "title": "Unable to access web portal",
      "description": "Hi, please check. We're unable to access web portal. Thanks!",
      "status": "Open",
      "priorityIndex": 1,
      "priorityLabel": "High",
      "assignee": {
        "_id": "61b5b3f4643f28575d569ead",
        "fullName": "User 1",
        "role": "user"
      },
      "reportedBy": {
        "_id": "61b5b316643f28575d569eac",
        "fullName": "Admin 1",
        "role": "admin"
      },
      "active": 1,
      "createdAt": "2021-12-16T13:38:31.004Z",
      "updatedAt": "2021-12-16T13:38:31.004Z",
    }
  ]
}
```

### Store Incident
Request:
```http
POST /incident
```

```
curl -i -H 'Accept: application/json' -d 'title=Title&description=Description&priorityIndex=0&assignee=61b5b3f4643f28575d569ead&reportedBy=61b5b316643f28575d569eac' http://localhost:5001/incident
```

Response:
```javascript
{
  "message" : "OK",
  "statusCode" : 200,
  "data"    : {}
```

### Update Incident Status (partial update)
Request:
```http
PUT /incident-status
```

```
curl -i -H 'Accept: application/json' -X PUT -d '_id=61bb620db342fb130411bdd5&newStatus=Resolved' http://localhost:5001/incident-status
```

Response:
```javascript
{
  "message" : "OK",
  "statusCode" : 200,
  "data"    : {}
```

### Delete Incident
Request:
```http
DELETE /incident/:_id
```

```
curl -i -H 'Accept: application/json' -X DELETE http://localhost:5001/incident/61bb648eb342fb130411bdf8
```

Response:
```javascript
{
  "message" : "NO CONTENT",
  "statusCode" : 204,
  "data"    : {}
```

### Get Users
Request:
```http
GET /users
```

```
curl -i -H 'Accept: application/json' http://localhost:5001/users
```

Response:
```javascript
{
  "message" : "OK",
  "statusCode" : 200,
  "data"    : [
    {
      "_id": "61b5b316643f28575d569eac",
      "fullName": "Admin 1",
      "role": "admin",
      "email": "admin@example.com",
      "password": "",
      "active": 1,
      "createdAt": "2021-12-16T13:38:31.004Z",
      "updatedAt": "2021-12-16T13:38:31.004Z",
    },
  ]
}
```


## License
[MIT](https://choosealicense.com/licenses/mit/)