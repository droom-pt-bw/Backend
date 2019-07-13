# Back-end

## How to use this API
To run locally: use `npm start` or `yarn start`
Server will run on port 5000

The deployed API can be found here: [Droom API](https://address...----) Not implemented yet.

### Endpoints

#### Login 
`POST` to `/login`

#### Description

This endpoint is responsible for logging a user. Upon successful authentication (_with valid username and password_), the endpoint will respond with a token. It will also return a boolean (_true or false_) which indicates if the user is a company or not.

The receieved token will be used to access protected routes. Refer to the individual protected route for information on using the token.

#### Operation and Schemas

- POST

**Body Schema**:

```js
{
    "username": string,
    "password": string
}
```
**Output Schema**:

- 200 Success

```js
{
    "message": "Welcome!",
    "token": string,
    "isCompany": boolean
}
```

- 400 Bad Request

Request is missing either or both username and password.

- 401 Unauthorized

Credentials invalid.

---

#### Register a new user
`POST` to `/register`
The request body requires a username, password, email, and isCompany (Boolean). : 
```
{
  "username": "bob", 
  "password": "pass123",
  "email": "bob_smith123@gmail.com",
  "isCompany": false
}
```

#### Get the full list users
`GET` to `/users`

#### Get the full list listings
`GET` to `/listings`
