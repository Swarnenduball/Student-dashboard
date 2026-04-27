import { Funnel } from 'lucide-react'
import React from 'react'

const ItemFilter = () => {
  return (
    <div className='flex bg-white rounded-xl flex-1  px-5 py-2 items-center justify-center'>
      <Funnel />
      <h2>Filters</h2>
    </div>
  )
}

export default ItemFilter