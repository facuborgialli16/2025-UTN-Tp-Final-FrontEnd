import React from 'react'
import Message from '../Message/Message'
import './MessagesList.css'

const MessagesList = (props) => {
    
    const messages_list_jsx = props.messages.map((message) => {
        return (
        <Message
            key={message.id}
            author={message.author}
            message={message.message} 
            timestamp={message.timestamp}
            sent={message.sent}
        />

        )
    })

    return (
        <div className="messages-list">
        {messages_list_jsx}
        </div>
    )
}

export default MessagesList