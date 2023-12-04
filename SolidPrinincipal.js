SRP: Single Responsibility Principle
// Good example - Separating data fetching and rendering into separate components

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = ({ users }) => (
 <div>
   <h2>Users</h2>
   {users.map(user => (
     <div key={user.id}>
       <p>{user.name}</p>
       <p>{user.email}</p>
     </div>
   ))}
 </div>
);

const Users = () => {
 const [users, setUsers] = useState([]);

 useEffect(() => {
   axios.get('https://jsonplaceholder.typicode.com/users')
     .then(res => setUsers(res.data))
     .catch(err => console.log(err));
 }, []);

 return (
   <UserList users={users} />
 );
};
**************************************************
//OCP : Open-Closed Principle
//The OCP states that a class or component should be open for extension but closed for modification. 
// Example of a reusable Button component that can be customized with props without modifying its source code

import React from 'react';

const Button = ({ text, color, onClick }) => (
 <button style={{ backgroundColor: color }} onClick={onClick}>
   {text}
 </button>
);

export default Button;


**************************************************

LSP: Liskov Substitution Principle 

// MyComponent, The LinkButton component was able to replace the Button component without affecting the behavior of the program.

// Button component
import React from 'react';

const Button = ({ text, onClick }) => (
 <button onClick={onClick}>
   {text}
 </button>
);

export default Button;

// LinkButton component that extends Button
import React from 'react';
import Button from './Button';

const LinkButton = ({ text, url, onClick }) => (
 <Button onClick={onClick}>
   <a href={url}>{text}</a>
 </Button>
);

export default LinkButton;


// Example of using Button and LinkButton components
import React from 'react';
import Button from './Button';
import LinkButton from './LinkButton';

const MyComponent = () => (
 <div>
   <Button text="Click me!" onClick={() => console.log('Button clicked')} />
   <LinkButton text="Google" url="https://www.google.com" onClick={() => console.log('LinkButton clicked')} />
 </div>
);

**********************************************
ISP: Interface Segregation Principle
//In React, this means that components should only receive the props they need and not have to rely on unnecessary props.
//, it’s important to define the exact props a component needs and only pass those props to the component. This ensures that the component only depends on what it needs and not on anything else.
**********************************************
DIP:  Dependency Inversion Principle 
//The DIP states that high-level modules should not depend on low-level modules, but both should depend on abstractions.
// to use abstractions such as React Context or Redux to manage the application state


//fore example: UserList component that depends on the dataService module , the high-level module (DataList) depends on a low-level module (dataService).

import React, { useState, useEffect } from 'react';
import { dataService } from '../services/dataService';

const DataList = () => {
 const [data, setData] = useState([]);

 useEffect(() => {
   dataService.getDatas().then((data) => {
     setData(data);
   });
 }, []);

 return (
   <div>
     <h1>Data </h1>
     <ul>
       {data.map((item) => (
         <li key={item.id}>{item.name}</li>
       ))}
     </ul>
   </div>
 );
};

export default DataList;
//To fix this, we use an abstraction (interface) between the DataList component and the dataService module. 
// dataApi interface that defines a getData method
export const dataApi = {
 getData: () => {},
};

// dataService module that implements the dataApi interface
import { dataApi } from "./dataApi";

export const dataService = {
 getData: () => {
   return fetch("/api/data").then((response) => response.json());
 },
};

Object.assign(dataService, dataApi);
//then
// DataList component that depends on the dataApi interface
import React, { useState, useEffect } from "react";
import { dataApi } from "../services/dataApi";

const DataList = () => {
 const [data, setData] = useState([]);

 useEffect(() => {
   dataApi.getData().then((data) => {
     setData(data);
   });
 }, []);

 return (
   <div>
     <h1>data List</h1>
     <ul>
       {data.map((item) => (
         <li key={item.id}>{item.name}</li>
       ))}
     </ul>
   </div>
 );
};

export default DataList;

