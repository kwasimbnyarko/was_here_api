# WasHere API 

This repo is for the backend code for the WasHere Project.<br/> 
Documentation on the usage of the API can be found below

## WasHere API Docs

### Create User
End Point: /api/v1/users<br/>
Method: POST <br/>
Resuest Body:
````json
{
  "name": "Kumi",
  "index_number":"1234567",
  "reference_number": "12345678"
}
````
Response : 201 Created Successfully

````json
{
    "name": "Kumi",
    "index_number": "1234567",
    "reference_number": "12345678",
    "_id": "63b6b164c9060349dd016eea",
    "__v": 0
}
````


### Create Event
End Point: /api/v1/events<br/>
Method: POST <br/>
Resuest Body:
````json
{
  "name": "Event 1",
  "organiser":"Org 1",
  "date": "yyyy-MM-dd",
  "startTime": "HHMM",
  "durationInHours": 5
}
````
**"name"** and **"organiser"** are the only required parameters<br/>
**"date"** defaults to Date.now()<br/>

Response : 201 Created Successfully

````json
{
    "success": true,
    "data": {
        "name": "Event 1",
        "organiser": "Org 1",
        "date": "2023-01-05T11:15:39.510Z",
        "startTime": "----",
        "_id": "63b6b199c9060349dd016eec",
        "createdAt": "2023-01-05T11:16:41.121Z",
        "updatedAt": "2023-01-05T11:16:41.121Z",
        "__v": 0
    }
}
````

### Mark Event Attendance
End Point: /api/v1/events/attendance<br/>
Method: PUT <br/>
Request Body:
````json
{
  "code":"4758a261-9708-4cde-9560-f54d2f067f41",
  "details":{
    "userId":"63b42a1be04cc61c366a0cfa"
  }
}
````

Response : 200 Ok
````json
{
    "success": true,
    "attendance": {
        "_id": "63b78efd5aa4a4381edcc0d8",
        "eventId": "123456",
        "attendees": [
            "63b6b11c17984d440d02a852",
            "63b42a1be04cc61c366a0cfa"
        ],
        "__v": 1
    }
}
````