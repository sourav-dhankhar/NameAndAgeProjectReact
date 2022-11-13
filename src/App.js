import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);
  const addInUsersList = (props) => {
    setUsersList( (previousState) => {
      return ([...previousState, props]);
    })
  }
  return (
    <div>
      <AddUser onAddUser={addInUsersList}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
