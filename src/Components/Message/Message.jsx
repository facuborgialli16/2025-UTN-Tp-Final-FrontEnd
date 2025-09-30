import './Message.css'

function Message({ author, message, timestamp, sent }) {
    return (
        <div className={`message-container ${sent ? 'sent' : 'received'}`}>
            <h3>{author}</h3>
        <div className={`message ${sent ? 'sent' : 'received'}`}>
            <p className="message-text">{message}</p>
            <span className="timestamp">{timestamp}</span>
        </div>
    </div>
    )
}

export default Message
