import React from 'react'
import './NewMessageForm.css'
import ICONS from '../../Constants/Icons'


const NewMessageForm = (props) => {
    
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const message_value = form.mensaje.value

        props.onCreateNewMessage(message_value)
        form.reset() // limpiar el textarea después de enviar
    }

    return (
        <div className="new-message-form-container">
        <button type="submit" className="plus-button"><ICONS.Plus/></button>
        <button type="submit" className="emoji-button"><ICONS.Emojis/></button>
    <form className="new-message-form" onSubmit={handleSubmit}>
        <textarea 
            className="message-input" 
            name="mensaje" 
            placeholder="Escribe un mensaje..." 
            rows="1"
        />
        <button type="submit" className="send-button"><ICONS.Send/></button>
    </form>
</div>
    )
}

export default NewMessageForm
