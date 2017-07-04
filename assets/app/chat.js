"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

export default class Chat extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			msgs: [],
			new_msg: ''
		};


		// (Docs) Send a socket request (virtual GET) to a Sails server using Socket.io.
		io.socket.get("/comment?limit=5&sort=id%20DESC", function(data){

			// Basically gets the last 5 records sorted by id ASC (not DESC)

			data.reverse();

			this.setState({ msgs: data });

		}.bind(this));


		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.addMsg = this.addMsg.bind(this);

		// Subscribe
		io.socket.get("/subscribecomments", function(res){
			console.log(res);
		});

		// Listen for events in the room
		io.socket.on('commentCreated', this.addMsg);
	}

	addMsg(msg){

		if(msg.hasOwnProperty("data")){
			msg = msg.data;
		}

		if(!msg.hasOwnProperty("id") || !msg.hasOwnProperty("text"))
			return;

		var new_array = this.state.msgs;
		this.setState({ msgs: new_array.concat(msg) });

	}

	handleChange(e){
		var value = e.target.value;
		this.setState({ new_msg: value });

	}

	handleSubmit(e){
		e.preventDefault();
		var text = this.state.new_msg.trim();
		if(text.length == 0){
			console.log("Empty text");
			return;
		}
		io.socket.post('/comment', { text }, this.addMsg);
		this.setState({ new_msg: '' });
	}


	scrollToBottom() {

		var chat = ReactDOM.findDOMNode(this.refs.messageList);

		const scrollHeight = chat.scrollHeight;
		const height = chat.clientHeight;
		// Multiplied by 2 so that it scrolls down even in cases where the
		// value is inaccurate (overkill number)
		const maxScrollTop = (scrollHeight - height) * 2;
		chat.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
	}

	componentDidUpdate(prevProps, prevState) {
		if(prevState.msgs.length != this.state.msgs.length){
			this.scrollToBottom();
		}
	}


	render() {

		return(
			<div>
				<p>
					Soy el componente <b>Chat</b>, y escribe algo:
				</p>
				<div>
					<form onSubmit={this.handleSubmit}>
						<input className="form-control" placeholder="mensaje..." type = "text"
						value = {this.state.new_msg} onChange = {this.handleChange} />
						<button className="btn btn-primary" type="submit">Enviar</button>
					</form>
				</div>
				<div  className="chat-msgs" ref="messageList">
				{this.state.msgs.map(function(m){
					return <div className="chat-msgs-individual" key={m.id}><small>{m.ip} | {new Date(m.createdAt).toString()}</small><p>{m.text}</p></div>
				})}
				</div>
			</div>
			);
	}

}
