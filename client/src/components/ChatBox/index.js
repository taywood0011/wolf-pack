import React, { useEffect, useRef } from 'react'

const ChatBox = ({ messages }) => {

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [messages]);

  return (
    <div className="messages" >
      {messages.map(message => <Message key={message.id} {...message} />)}
      <div ref={this.messagesEndRef} />
    </div>
  )
}

export default ChatBox;