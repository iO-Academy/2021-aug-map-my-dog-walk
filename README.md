# 2021 August - Map my dog walk

Run npm install in the git repo to install the necessary modules.

To start node, run nodemon index.js.

Create a MongoDB called canineCompass and a collection called dogWalks.
Now import db/dogWalks.json into MongoDB Compass

**Add New Walk**
----
Adds a single new walk into the dogWalks collection

* **URL**

/walks

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
      **Content:** `{ id : 12 }`

* **Error Response:**

    * **Code:** 400 BAD REQUEST <br />
      **Content:** `{
      "success": false,
      "message": "Validation failed :( Check your input!"
      }`

  OR

    * **Code:** 422 UNPROCESSABLE ENTRY <br />
      **Content:** `{ error : "Email Invalid" }`

* **Sample Call:**

  <_Just a sample call to your endpoint in a runnable format ($.ajax call or a curl request) - this makes life easier and more predictable._>

* **Notes:**

  <_This is where all uncertainties, commentary, discussion etc. can go. I recommend timestamping and identifying oneself when leaving comments here._> 