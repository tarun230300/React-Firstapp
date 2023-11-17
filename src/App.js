import React,{useState, useEffect} from "react";
// import axios from 'axios';
// import Test from "./Test";
// import './App.css';

// function components

// const App = () => {
//   let name = "Don";
//   return (
//     <div>
//     <center>
//     <h2> Welcome {name}</h2>
//     <p>From function component</p>
//     </center>
//     </div>
      
//   )
// }

// Class component

// class App extends React.Component {
//   render(){
//     return(
//       <div>
//         <center>
//         <h3 style={{backgroundColor: 'orange', padding: '10px', border: '3px solid black'}}> Welcome Happy learning!</h3>
//         <p>From Class component</p>
//         </center>
//       </div>
//     )
//   }
// }

//---------- State and Prop ---------

// const App = () => {
//   const [data, setData] = useState({
//     name: 'Tarun',
//   });
//   const {name} = data;
//     return(
//       // <div>
//       //   <center>
//       //     <h3 style={{backgroundColor: 'orange', padding: '10px', border: '3px solid black'}}> Welcome Happy learning!</h3>
//       //     <p>Hi from {name} </p>
//       //   </center>
//       // </div>
//       <Test name={name}/>
//     )
// }

// ---------- Even Handlers ---------
// onClick()

// const App = () => {
//   return(
//     <div>
//       <center>
//         <button onClick={() => alert('Event Handler')} style={{backgroundColor:"yellow", border: '2px solid black', padding: '10px', marginTop: '50px'}}> Click here.</button>

//       </center>
//     </div>
//   )
// }

// onChange

// const App = () => {
//   const [name, setName] = useState('');
//   return(
//     <div>
//       <center>
//         <input type="text" name="name" onChange={(e) => setName(e.target.value) }></input>
//         <br></br>
//         Name : {name}
//       </center>
//     </div>
//   )
// }
// onSubmit

// const App = () => {
//   const [data, setData] = useState({email:'', password:''});
//   const changeHandler = e =>{
//     setData({...data,[e.target.name]: e.target.value})
//   }
//   const submitHandler = e => {
//     e.preventDefault();
//     if (data.password.length < 5){
//       alert('password length should be greater than 5');
//     }
//     else{
//       console.log(data);
//     }  
//   }
//   return(
//     <div>
//       <center>
//         <form onSubmit={submitHandler}>
//           <label> E-Mail/User Name</label><br></br>
//           <input type="email" name="email" onChange={changeHandler} /> <br></br>
//           <label> Password</label><br></br>
//           <input type="password" name="password" onChange={changeHandler}  /> <br></br>
//           <input type="submit" value="Login"></input>

//         </form>
//       </center>
//     </div>
//   )
// }



// ----------- useContext() ------------
// export const UserContext = React.createContext();

// const App = () => {
//   return(
//     <div>
//       <UserContext.Provider value={"The Central Intelligence Agency (CIA) and the Pentagon began experimenting with unmanned reconnaissance aircraft (drones) in the early 1980s. The CIA preferred small, lightweight, unobtrusive drones, in contrast to the United States Air Force (USAF)."}>
//       <p>The General Atomics MQ-1 Predator (often referred to as the Predator drone) is an American remotely piloted aircraft (RPA) built by General Atomics that was used primarily by the United States Air Force (USAF) and Central Intelligence Agency (CIA).</p>
//       <Test />
//       </UserContext.Provider>
//     </div>


//   );
// }


//---------------------- Fetch() API ---------------------

// const App = () => {
//   // state variable (data) is used to store user data from API
//   const [data, setData] = useState([]); 
//     // useEfect is used to fetch data
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users').then(
//       res => res.json() 
//     ).then(json => setData(json))
//   },[])

//   return(
//     <div>
//       <center><h1>Fetching API...</h1></center>
//       {data.map(item => <li key={item.id}>{item.name}<ul>{item.phone}</ul></li>)}
//     </div>
//   )
// }

// ---------------- Axios-------

// const App = () => {
//   // state variable (data) is used to store user data from API
//   const [data, setData] = useState([]); 
//     // useEfect is used to fetch data
//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/todos').then(
//       res => res.json() 
//     ).then(json => setData(json))
//   },[])
  
//   return(
//     <div>
//       {data.map(item => <li key={item.id}>{item.title}</li> )}
//     </div>
//   )
// }


// -----------  Unit Testing  ----------
const App =() => {
  return(
    <div>
      <h1>
        Unit Testing
      </h1>
    </div>
  )
}












export default App