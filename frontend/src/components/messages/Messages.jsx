import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessage from '../../hooks/useGetMessage'
import MessageSkeleton from '../skeleton/MessageSkeleton';
import useListenMessages from '../../hooks/useListenMessages';

const Messages = () => {
  const { messages, loading } = useGetMessage();
  useListenMessages()
  const lastMessageRef = useRef();
  useEffect(()=> {
  setTimeout(() => {
    lastMessageRef.current?.scrollIntoView({ behaviour: "smooth"});
  }, 100);
  }, [messages])
  console.log(messages)
  return (
    <div className='flex-1 px-4 overflow-auto'>
      {
        !loading && messages.length > 0 && messages.map((message)=> (
         <div key={message._id} ref={lastMessageRef}>
           <Message key={message._id} message={message} />
          </div>
        ))
      }

       { loading && [...Array(3)].map((_,idx)=> <MessageSkeleton key={idx} />)}

       { !loading && messages.length === 0 && (
        <p className="text-center text-white">Send a message to start the conversation</p>
       )}

    </div>
  )
}

export default Messages
