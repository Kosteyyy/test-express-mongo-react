import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import "./styles.css";

const Contact = ({contact}) => {
	return (
		<div>
			<div>Name: {contact.name}</div>
			<div>Position: {contact.position}</div>
		</div>
	)
}
const Contacts = () => {
	const [contacts, setContacts] = useState([]);
	// async function getContacts() {
	// 	const response = await fetch("api/contacts");
	// 	const contactArr = await response.json();
	// 	console.log(contactArr);
	// 	setContacts(contactArr);
	// 	return contactArr;
		
	// }
	useEffect(() => {
		console.log("start");
		fetch("api/contacts")
			.then(data => data.json())
			.then(setContacts)
			.then(() => console.log("we've got data from database"))
			.catch(console.log)
		console.log("before while contacts are: ", contacts);
		var timestamp = Date.now() + 2000;
		while (Date.now() < timestamp);
		console.log("finish");
	}, []);



	return (
		<>
			{contacts.map((contact, index) => <Contact key={index} contact={contact} />)}
		</>
	)
	
}

const App = () => <Contacts />;

ReactDOM.render(<App />, document.getElementById('root'));