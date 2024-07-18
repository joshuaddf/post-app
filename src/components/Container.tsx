import React from 'react'

type childrenTypes = {
    children: React.ReactNode
}

const Container = ({ children }: childrenTypes) => {
  return (
    <div className='max-w-[1100px] mx-auto bg-white min-h-screen flex flex-col border-x-2'>{children}</div>
  )
}

export default Container