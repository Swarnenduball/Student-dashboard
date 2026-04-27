import React from 'react'
import SearchBar from './SearchBar'
import RightPortion from './RightPortion'

const TopNav = () => {
  return (
    <div className="sticky top-0 z-50 flex w-full border-b border-gray-200 justify-between px-5 pl-10 py-3 items-center bg-white">
      <SearchBar />
      <RightPortion />
    </div>
  )
}

export default TopNav