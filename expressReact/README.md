
###1. Create the Express App
#### First install the express-generator
- $ npm install -g express-generator

#### create the express app
- $ express --view=ejs express-react
    
#### install the all dependencies
- $ cd express-react && npm install
    
#### edit the express-react/routes/users.js
    
```
    router.get('/', function(req, res, next) {
        res.json([{
            id: 1,
       	    username: "samsepi0l"
        },{
       	    id: 2,
       	    username: "D0loresH4ze"
        }]);
    });
```
     
#### Change the port 
> Express app will default to port 3000, and Create React App will also default to port 3000.
> To avoid the conflict, start Express on 3005. 
> OR Edit the 'express-react/bin/www' and change port frorm 3000 to 3005.
    
###2. Create the React App    
#### install the create-react-app
- $ npm install -g create-react-app
   
#### inside the express-react folder , run
- $ create-react-app client
   
#### configure the express-react/client/package.json  
- add this line after/before "scripts" block, 
  -  "proxy": "http://localhost:3005"
   
###3. Now Run the express server and react server
#### install the concurrently, in express-react folder not in express-react/client folder
- $ npm i -D concurrently

#### edit the express-react/package.json, In "script" change "start" to 
- "start": "concurrently \"node ./bin/www\"   \"cd client &amp;&amp; npm start\""
- At this point 2 server are running,
  - $ express server by "node ./bin/www"
  - $ react server by "cd client &amp;&amp; npm start"
        
###4. Fetch the Data of express from React
#### edit the express-react/client/src/App.js 
     
```
      class App extends Component {
        state = {users: []}
     
        componentDidMount() {
          fetch('/users')
            .then(res => res.json())
            .then(users => this.setState({ users }));
        }
      
        render() {
          return (
            <div className="App">
              <h1>Users</h1>
              {this.state.users.map(user =>
                <div key={user.id}>{user.username}</div>
              )}
            </div>
          );
        }
      }
```


      