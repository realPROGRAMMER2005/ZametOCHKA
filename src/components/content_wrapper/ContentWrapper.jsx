import React from 'react'

const ContentWrapper = ({children}) => {
  return (
    <div className='px-[20px] w-full mx-auto'>
        {children}
    </div>
  )
}

export default ContentWrapper