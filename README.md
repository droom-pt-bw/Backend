# Back-end

## How to use this API
To run locally: use `npm start` or `yarn start`
Server will run on port 5000

The deployed API can be found here: [Droom API](https://address...----) Not implemented yet.

### Endpoints


#### Register a new user
`POST` to `/register`
The request body requires a username, password, email, and isCompany (Boolean). : 
```
{
  "username": "bob", 
  "password": "pass123",
  "email": "bob_smith123@gmail.com",
  "isCompany": "False"
}
```

#### Get the full list users
`GET` to `/users`

#### Get the full list listings
`GET` to `/listings`
