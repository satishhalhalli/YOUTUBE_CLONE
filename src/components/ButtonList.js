import React from 'react'
import Button from './Button'

const ButtonList = () => {

    const list=["All", "Cricket", "Socker" , "News", "React", "Music" , "Movies", "React", "Virat", "Test", "Javscript"]
  return (
    <div className='flex'>

       
        
        {list.map((name) => (
                <Button key={name} name={name} />
            ))}
    </div>
  )
}

export default ButtonList
