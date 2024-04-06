import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img src={"https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"} alt="" />
            </div>
        </div>
        <div className={`chat-bubble text-white bg-blue-500`}>
      Hi ! What is upp?
        </div>
        <div className="chatfooter opacity-50 text-xs flex gap-1 items-center">12:42</div>
    </div>
  )
}

export default Message
