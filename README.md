# 2021 August - Map my dog walk

Run npm install in the git repo to install the necessary modules.

To start node, run nodemon index.js.

Create a MongoDB called canineCompass and a collection called dogWalks.
Now import db/dogWalks.json into MongoDB Compass

**Add New Walk**
----
Adds a single new walk into the dogWalks collection

* URL: `/walks`

* **Method:**

   `POST` 

* **Data Params**

  **Required:**

```javascript
{
    "name": [string],
    "length": [integer],
    "startInstructions": [string],
    "difficulty": [integer],
    "markersArray": [
        {
            "lat": [number],
            "lng": [number]
        }
    ]
};
  ```

* **Success Response:**

    * **Code:** 201 <br />
      **Content:** `{
      "success": true,
      "message": "New walk added!"
      }`

* **Error Response:**

    * **Code:** 400 BAD REQUEST <br />
      **Content:** `{
      "success": false,
      "message": "Validation failed :( Check your input!"
      }`

  OR

    * **Code:** 400 BAD REQUEST <br />
      **Content:** `{
      "success": false,
      "message": "Something went wrong!"
      }`

* **Sample Call:**

```javascript
fetch('http://localhost:3000/walks', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        name: "Nova's Walk",
        length: 40,
        difficulty: 3,
        startInstructions: "Go left over the stile",
        markersArray: [{
            lat: 8.12132522887685, 
            lng: -14.5299704759841
        }]
    })
})
  ```

**Get All Markers**
----
Returns an array of all markers currently in the database.

* URL: `/markers`

* **Method:**

  `GET`

* **Success Response:**

    * **Code:** 201 <br />
      **Content:**
    *  `{
       success: true,
       message: 'Successfully found markers',
       data: [{
       walkName: 'Novas Walk',
       markersObject: { lat: 8.1213, lng: -14.529 },
       id: new ObjectId("XXX")
       }`
    
* **Error Response:**

    * **Code:** 400 BAD REQUEST <br />
      **Content:** `{
      success: false,
      message: 'No markers returned :(',
      data: []
      }`


* **Sample Call:**

```javascript
fetch('http://localhost:3000/markers', {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
})
  ```



