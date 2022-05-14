import React, { useState, useEffect, useRef } from 'react';
import firebase from 'firebase/compat';
import { db, auth } from '../firebase';

const Sendmessage = () => {
	const dummy = useRef();

	const [msg, setMsg] = useState('');

	async function submitForm(e) {
		e.preventDefault();
		setMsg('');

		const { uid, photoURL } = auth.currentUser;

		if (msg.length > 0) {
			await db.collection('messages').add({
				text: msg,
				photoURL,
				uid,
				createdAt: firebase.firestore.FieldValue.serverTimestamp(),
			});
		}

		dummy.current.scrollIntoView({ behaviour: 'smooth' });
	}

	return (
		<>
			<div ref={dummy}></div>
			<form onSubmit={submitForm}>
				<input
					value={msg}
					onChange={(e) => setMsg(e.target.value)}
					type='text'
					placeholder='Enter your message'
				/>
				<button className='send' type='submit'>
					<img
						src='https://cdn-icons-png.flaticon.com/512/2343/2343805.png'
						alt=''
					/>
				</button>
			</form>
		</>
	);
};

export default Sendmessage;
