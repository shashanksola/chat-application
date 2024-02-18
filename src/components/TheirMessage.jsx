const TheirMessage = ({lastMessage, message}) => {
    const isFirsrtMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;

    return <div className="message-row">
        {isFirsrtMessageByUser && (
            <div className="message-avatar" style={{ backgroundImage: `url(${message?.sender?.avatar})` }} />
        )}
        {
            message?.attachments?.length > 0 ?
                (
                    <img src={message.attachments[0].file} alt="message-attachment" className="message-image" style={{ marginLeft: isFirsrtMessageByUser ? '4px' : '48px' }} />
                ) : (
                    <div className="message" style={{ float: 'left', marginLeft: isFirsrtMessageByUser ? '4px' : '48px', color: 'white', backgroundColor: 'darkgrey' }}>
                        {message.text}

                    </div>
                )

        }
    </div >
}

export default TheirMessage