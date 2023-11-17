import React from "react"
import { UserContext } from "./App"
// const Test = (props) => {
//     return (
//         <div>
//             <h2 style={{backgroundColor: 'Green', padding: '10px', border: '3px solid black', borderRadius: '15px'}}>Retrieving for Test Component.</h2>
//             <p style={{border: '2px solid green', padding: '10px',borderRadius: '15px' }}><b>Hello, {props.name} welcomes you...</b></p>

//         </div>

//     )
// }
const Test = () => {
    return(
        <div>
            <UserContext.Consumer>
                {value => <div>{value}</div>}
            </UserContext.Consumer>
        </div>
    )
}


export default Test