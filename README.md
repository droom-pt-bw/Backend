# Back-end

## How to use this API
To run locally: use `npm start` or `yarn start`
Server will run on port 5000

The deployed API can be found here: [Droom API](https://droom-pt-bw.herokuapp.com/) Not implemented yet.

#### Description

This endpoint is responsible for logging a user. Upon successful authentication (_with valid username and password_), the endpoint will respond with a token. It will also return a boolean (_true or false_) which indicates if the user is a company or not.

The receieved token will be used to access protected routes. Refer to the individual protected route for information on using the token.

#### Operation and Schemas

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

#### Login user
`POST` to `/login`
The request body requires username, and password.
```
{
  "username": "bob",
  "password": "pass123"
}
```

**Output Schema**:

- 200 Success

```
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

#### Create job listing
`POST` to `/listing`
The request body requires a company, location, salary(string), jobtitle, and description. :
```
{
    "company": "Lambda School",
    "location": "San Francisco",
    "salary": "$530,000"
    "jobtitle": "Team Leader",
    "description": "Lead and help guide a group of students through the curriculum"
}
```

**Output Schema**:

- 201 Success

```
{
    "company": "Lambda School",
    "location": "San Francisco",
    "salary": "$530,000"
    "jobtitle": "Team Leader",
    "description": "Lead and help guide a group of students through the curriculum"
}
```

---

#### Update job listing
`PUT` to `/listing/:id`
The request body requires a company, location, salary(string), jobtitle, and description. :
```
{
    "company": "Lambda School",
    "location": "San Francisco",
    "salary": "$530,000"
    "jobtitle": "Team Leader",
    "description": "Lead and help guide a group of students through the curriculum"
}
```

**Output Schema**:

- 201 Success

```
{
    "company": "Lambda School",
    "location": "San Francisco",
    "salary": "$530,000"
    "jobtitle": "Team Leader",
    "description": "Lead and help guide a group of students through the curriculum"
}
```

#### Delete job listing
`DELETE` to `/listing/:id`
The request body requires just an id in the parameters. :
```https://droom-pt-bw.herokuapp.com/listing/3```

---

### Seeker

#### Description

This endpoint is responsible all CRUD operations related to non-company users AKA Seekers. A user must be logged in and isCompany should be false. 

#### Create Seeker

`POST` to `/seekers`
The request body requires a name, location, user_id, description, and skills. :
```
 {
       "name":"John Sam",
       "location":"Austin, TX",
       "skills": "React.js, HTML, CSS",
       "description":"something",
       "user_id": 1,
 }
```
**Output Schema**:

- 201 Success

```
{    
    "id: 1
    "name":"John Sam",
    "location":"Austin, TX",
    "skills": "React.js, HTML, CSS"
    "description":"something",
    "user_id": 1,
}
```

#### GET Seeker

`GET` to `/seekers/:user_id`

You can use user id to look for a seeker profile.

**Output Schema**:

```
{    
    "id: 1
    "name":"John Sam",
    "location":"Austin, TX",
    "skills": "React.js, HTML, CSS"
    "description":"something",
    "user_id": 1,
}
```

#### Update Seeker

`PUT` to `/seekers`
The request body requires a name, location, user_id, description, and skills. :
```
 {
       "name":"John Lex",
       "location":"Austin, TX",
       "skills": "React.js, HTML, CSS",
       "description":"something",
       "user_id": 1,
 }
```

**Output Schema**:

```
 {
       "name":"John Lex",
       "location":"Austin, TX",
       "skills": "React.js, HTML, CSS",
       "description":"something",
       "user_id": 1,
 }
```

#### Remove Seeker

`DELETE` to `/seekers/:user_id`

**Output Schema**:
 ```
 {
    "message": "Seeker has been nuked"
 }
 ```

 ### Company

#### Description

This endpoint is responsible all CRUD operations related to companies . A user must be logged in and isCompany should be true. 

#### Create Company

`POST` to `/companies`
The request body requires a name, location, user_id and description. :
```
 {
       "name":"Mind-Corp",
       "location":"Austin, TX",
       "description":"something",
       "user_id": 1,
 }
```
**Output Schema**:

- 201 Success

```
{
       "name":"Mind-Corp",
       "location":"Austin, TX",
       "description":"something",
       "user_id": 1,
 }
```

#### GET Company

`GET` to `/companies/:user_id`

You can use user id to look for a company profile.

**Output Schema**:

```
{    
    "id: 1
    "name":"Mind-Corp",
    "location":"Austin, TX",
    "description":"something",
    "user_id": 1,
}
```

#### Update Company

`PUT` to `/companies`
The request body requires a name, location, user_id and description. :
```
{    
    "name":"Mind Corp",
    "location":"Austin, TX",
    "description":"something",
    "user_id": 1,
}
```

**Output Schema**:

```
 {
    "name":"Mind Corp",
    "location":"Austin, TX",
    "description":"something",
    "user_id": 1,
 }
```
#### Matching 

<h2>Matching for seeker</h2>

URL: /match/seeker/:user_id/match/job/:listing_id

**Output Schema**:
```
{
    "message": "Seeker has sent a match request successfully.",
    "match": 1
}
```

<h2>Matching for jobs</h2>

URL: /match/job/:id/match/seeker/:seekerId

**Output Schema**:
```
{
    "message": "Job has sent a match request successfully.",
    "match": 1
}
```

<h2> Get Matches for jobs <h2>

URL: /matched/job/:id

id = listing id

**Output Schema**:
```
{
        "id": 1,
        "name": "John Everyboy",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "skills": "React.js, JavaScript, HTML, CSS, SQL ",
        "location": "Houston, TX",
        "user_id": 1
}
```

<h2> Get Matches for seekers <h2>
URL: /matched/seeker/:id

id = user id

**Output Schema**:
```
  {
        "id": 2,
        "company": "Mind-Corp",
        "location": "Houston, Texas",
        "salary": "50,000",
        "jobtitle": "Junior Front End Developer",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "createdAt": "2019-07-19 00:08:16",
        "user_id": 2,
        "appliers": null,
        "confirmed": null
    }
```

#### Remove Company

`DELETE` to `/companies/:user_id`

**Output Schema**:
 ```
 {
    "message": "Company has been nuked"
 }
 ```

#### Get the full list users
`GET` to `/users`

#### Get the full list listings
`GET` to `/listings`


#### Get the full list users
`GET` to `/users`

#### Get the full list listings
`GET` to `/listings`
