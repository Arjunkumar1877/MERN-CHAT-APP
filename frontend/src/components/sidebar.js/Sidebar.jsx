import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
  return (
    <div>
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      <LogoutButton />
      
    </div>
  )
}

export default Sidebar
