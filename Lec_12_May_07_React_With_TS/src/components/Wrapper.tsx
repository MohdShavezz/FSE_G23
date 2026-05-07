import React from 'react'

type WrapperType={
    children:React.ReactNode
}

const Wrapper:React.FC<WrapperType> = ({children}) => {
  return (
    <div style={{background:'yellow'}}>
        {children}      
    </div>
  )
}

export default Wrapper
