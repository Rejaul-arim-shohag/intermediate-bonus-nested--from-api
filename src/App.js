import logo from './logo.svg';
import './App.css';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { useEffect, useState } from 'react';

function App() {
  const [likeColor, setLikeColor] = useState('');
  const handleClick = () =>{
    const color = likeColor ? "" : "primary"
    setLikeColor(color)
  }

  const [alarmColor, setAlarmColor] = useState("");
  const handlealarmClick = () =>{
    const color = alarmColor? "" : "primary";
    setAlarmColor(color)
  }

  const [users, setUsers] = useState([]);
  const [singleUsers, setSingleUsers] = useState({});
  const [randomUser, setRandomUser] = useState({})
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => setUsers(data))

    //single users data loading system
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .then(data => setSingleUsers(data))
    
    //random user data load
     fetch ('https://randomuser.me/api/')
     .then(res => res.json())
     .then(data => setRandomUser(data.results[0]))
  },[])
  return (
    <div className="App">
       <AccessAlarmIcon onClick={handlealarmClick} color={alarmColor}></AccessAlarmIcon>
       <ThumbUpAltIcon onClick={handleClick} color={likeColor}></ThumbUpAltIcon>
       <h1>{singleUsers.name}</h1>
       {
         users.map(user => <li>{user.name}</li>)
       }
        <h1>Random Gender : {randomUser.gender}</h1>
        <h2>Random User Name nested propertyb read: {randomUser.name && randomUser.name.first}</h2>
        <h3>Another way : {randomUser.name?.last}</h3>
    </div>
  );
}

export default App;
