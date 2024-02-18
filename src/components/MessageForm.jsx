import { useState } from 'react'
import { sendMessage, isTyping } from 'react-chat-engine'

const MessageForm = (props) => {
    const [value, setValue] = useState('')
    const { chatId, creds } = props;

    const handleSubmit = (event) => {
        event.preventDefault();

        const text = value.trim();
        if (text.lenght > 0) sendMessage(creds, chatId, { text });
    }

    const handleChange = (event) => {
        setValue(event.target.value);
        isTyping(props, chatId);
    }

    return (
        <form className="message-form" onSubmit={handleSubmit}>
            <input className="message-input" placeholder="Send a message..." value={value} onChange={(event) => handleChange(event)} onSubmit={(event) => handleSubmit(event)} />
        </form>
    )
}

export default MessageForm