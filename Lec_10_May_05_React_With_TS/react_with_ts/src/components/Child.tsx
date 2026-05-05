import React from 'react'

interface PropType{
    handleINC:()=>void,
    // count:number
}

const Child:React.FC<PropType> = ({handleINC}) => {
  return (
    <div>
      CHILD
      <button onClick={handleINC}>INC</button>
    </div>
  )
}

export default Child
