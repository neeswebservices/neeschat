import React, { useState, useEffect, useRef } from 'react';
import Signout from './Signout';
import { db, auth } from '../firebase';
import Sendmessage from './Sendmessage';

export const Chat = () => {
	const [messages, setMessages] = useState([]);

	const messagesEndRef = useRef(null);

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
	};
	useEffect(() => {
		scrollToBottom();
		db.collection('messages')
			.orderBy('createdAt')
			.limit(50)
			.onSnapshot((snapshot) => {
				setMessages(snapshot.docs.map((doc) => doc.data()));
			});
	}, []);

	return (
		<div className='chatmain'>
			<h2>RONT - community Chat</h2>

			<div className='msgs'>
				{messages.map(({ uid, text, photoURL, createdAt }, index) => {
					return (
						<div className='msg'>
							<div
								id='single-msg'
								className={`msg ${
									uid == auth.currentUser.uid ? 'sent' : 'received'
								}  `}
								key={index}>
								<img src={photoURL} alt={uid} />
								<div key={uid} className='text'>
									{text}
								</div>
								{/* <div className='time'>
								{h}:{m}
							</div> */}
							</div>
							<div ref={messagesEndRef} />
						</div>
					);
				})}
			</div>
			<Sendmessage />

			<Signout />
		</div>
	);
};
