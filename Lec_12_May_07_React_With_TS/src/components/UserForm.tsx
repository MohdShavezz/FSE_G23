import React, { useState } from 'react'
import './formstyle.css'

type FORM_TYPE={name:string,email:string}

const UserForm:React.FC = () => {
    // const [name,setName]=useState<string>('')
    // const [email,setEmail]=useState<string>('')
    
    const [formdata,setFormdata]=useState<FORM_TYPE>({name:'',email:''})

    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target
        setFormdata(formdata=>({
            ...formdata,
            [name]:value
        }))
    }

// console.log(name,email )
// function handleSubmit(e:React.FormEvent<HTMLFormElement>){
//     e.preventDefault()
//     //validation
//     const {name,email}=formdata
//     if(name==''||email===''){
//         alert('fields are required.')
//     }
//     setFormdata({name:'',email:''})
//     console.log(`name: ${name}, email: ${email}`)
// }


function handleSubmitWithFormData(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    const data = new FormData(e.target);
// const name = data.get('name'); 
  const values = Object.fromEntries(data.entries());
  console.log(values);
}
  return (
    <div >
      <form onSubmit={handleSubmitWithFormData} className='container'   >
        <h2 style={{textAlign:'center'}}>User Form</h2>
        <input type="text" name='name' placeholder='enter name' 
        // value={formdata.name}
        // onChange={(e)=>setName(e.target.value)} 
        // onChange={handleChange} 
        />
        <input type="text" name='email' placeholder='enter email' 
        // value={formdata.email}
        // onChange={(e)=>setEmail(e.target.value)} 
        // onChange={handleChange} 
        />
        <button type='submit' className='my-btn'>Submit</button>
      </form>
    </div>
  )
}

export default UserForm
