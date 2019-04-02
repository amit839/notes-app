# Notes App
This is a simple node.js app created using yargs library.
You can **add** a note, **fetch** a particular note, **list** all notes and **remove** a particular note using command line arguments.

---

### How to use

1. Download [node.js](https://nodejs.org/en/) and install.
1. Clone or download the repository to your desired location.
1. Open terminal and navigate to the folder where you cloned and type *npm install*.
1. Type *node app.js* to run the app.

---

### List of commands 
1. Add
     ```javascript
   node app.js add --title="Enter your title" --body="Your note goes here..."
    ```

2. List
    ```javascript
    node app.js list
    ```
3. Read
    ```javascript
    node app.js read --title="Enter your title"
    ```
4. Remove
    ```javascript
    node app.js remove --title="Enter your title"
    ```
5. Help
    ```javascript
    node app.js --help
    ```