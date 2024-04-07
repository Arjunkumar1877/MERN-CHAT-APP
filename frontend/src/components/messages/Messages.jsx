import React from 'react'
import Message from './Message'
import useGetMessage from '../../hooks/useGetMessage'

const Messages = () => {
  const { messages, loading } = useGetMessage();
  console.log(messages)
  return (
    <div className='flex-1 px-4 overflow-auto'>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  )
}

export default Messages
