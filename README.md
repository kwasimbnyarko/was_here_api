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
  "name": "asd fgh",
  "index_number":"1234567",
  "reference_number": "12345678"
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