import React from 'react'

const Footer = () => {

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className='mt-auto text-center text-zinc-400 py-5 px-7 border-t-2'>
        <small>&copy;{currentYear} | Made with 🍌</small>
    </footer>
  )
}

export default Footer