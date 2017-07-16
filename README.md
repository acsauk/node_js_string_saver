# node_js_string_saver

A simple node.js app that allows a user to store a string of their choice using a unique identifier and retrieve this back by navigating to a URL that corresponds to the note ID.

## User stories - MVP

As a user with something to say,
so I can access a copy of my notes from anywhere,
I would like to be able to save a string online

As a user with a bad memory,
so I can look at my notes whenever I need them,
I would like to be able to retrieve my saved strings

## Nouns / Potential Models

- User
- Note
- String
- Identifier

## Verbs / Potential methods

- Say
- Access
- Save
- Retrieve
- Look
- Use

## Installation
- git clone the repo to your local machine and `cd` to directory
- `cd notes-saver`
- `npm install`

## Saving a note
- Navigate to `notes-saver` on command line
- `npm start`
- In a new terminal pane enter `curl http://localhost:3000/notes -d 'hello, I am a message'`
- Take a note of the ID in the response message

## Retrieving a note
- If not already started, navigate to `notes-saver` on command line and start the node server `npm start`
- In a new terminal pane enter `curl http://localhost:3000/notes/<ID SAVED FROM PREVIOUS STEP>`
- The saved note should be returned as a string

## Tests
- Navigate to `notes-saver` on command line
- Install dependencies if not already done so with `npm install`
- Run `npm test`

## Todo

Fix failing test that verifies blank strings and refused when sent to /notes POST. This functionality is working but the test relies on a response using `chaiHttp` that isn't received.
