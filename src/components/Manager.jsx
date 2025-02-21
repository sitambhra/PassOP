import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
  const ref=useRef()
  const passwordRef=useRef()
  const [form, setform] = useState({site:"", username:"", password:""})
  const [passwordArray, setPasswordArray]= useState([])
  
  useEffect(()=>{
  
let passwords= localStorage.getItem("passwords");
if(passwords){
  setPasswordArray(JSON.parse(passwords))
}
  }, [])

  const handleChange=(e)=>{
    console.log(form)
    setform({...form, [e.target.name]:e.target.value})
    console.log(passwordArray)

  }
  const savePassword = ()=> {
    if(form.site.length >= 1 && form.username.length >= 1 && form.password.length >=1){
    setPasswordArray([...passwordArray,{...form, id:uuidv4()}])
    localStorage.setItem("passwords", JSON.stringify([...passwordArray,{...form,id:uuidv4()}]))
     setform({site:"", username:"", password:""})
    toast.success('Password saved')
  }else{
    toast.warning('Password not saved. Type to save!',{autoClose:1200})
  }}
  const deletePassword=(id)=>{
    let c=confirm("Delete password forever? No recovery!")
    if (c){

    setPasswordArray(passwordArray.filter(item=>item.id !== id))
    localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item=>item.id !== id)))
 toast.error('Password Deleted',{autoClose: 800})
  }
}
  const editPassword=(id)=>{
    setform(passwordArray.filter(i=>i.id === id)[0])
    setPasswordArray(passwordArray.filter(item=>item.id !== id))
    

  }

  const showPassword = () => {
      passwordRef.current.type="text"

     if(ref.current.src.includes("icons/eyecross.png")){
      passwordRef.current.type="password"

      ref.current.src="icons/eye.png"
    }else{
      passwordRef.current.type="text"

      ref.current.src="icons/eyecross.png"
    }
  }
  const copyText = (text)=>{
    toast.success('Copied to clipboard!');
         
    navigator.clipboard.writeText(text)
  }
  return (
  <>
 <ToastContainer autoClose={800}  />

  <div className='container mx-auto max-w-3xl py-11  bg-gray-100'>
    <div className=" text-center ">
   <div className="mb-3.5">
   <div className='font-bold text-2xl'>
    <span className='text-green-900'>&lt;</span>
    <span>Pass</span>
    <span className='text-green-900'>OP/&gt;</span>
  </div>
  <p className='text-gray-600'>Your own Passwor d Manager</p>
   </div>

  <div className=" flex flex-col p-4 gap-4 items-center ">
    <input value={form.site} onChange={handleChange} name='site' id='site' placeholder='Enter website URL' className='rounded-full mb-3 px-3 py-1 border w-full border-gray-700' type="text" />
    <div className="flex w-full justify-center gap-2.5">
      <input value={form.username} onChange={handleChange}  name='username' placeholder='Enter Username' className='rounded-full px-3 py-1 border w-full border-gray-700' type="text"  id='username'/>
     <div className="relative">
     <input ref={passwordRef} value={form.password} onChange={handleChange}  name='password' placeholder='Enter Password'  className='rounded-full px-3 py-1 border w-full border-gray-700' id='password' type="password" />
<span  onClick={showPassword} className='absolute right-[3px] top-[4px] cursor-pointer'>
  <img ref={ref}  className='p-1' width={24} src="icons/eye.png" alt="eye" />
  </span>
     </div>
    </div>
    <button onClick={savePassword} className='border border-y-green-800 text-sm gap-4 mt-2 flex items-center cursor-pointer hover:bg-green-600 bg-green-500 rounded-full px-6 py-1'>
    <lord-icon
    src="https://cdn.lordicon.com/jgnvfzqg.json"
    trigger="hover">
</lord-icon>Save Password</button>
  </div>
  
    </div>
    <div className="passwords">
    <h2 className='text-left my-3 mx-1 text-xl font-bold'>Your Passwords</h2>
  {passwordArray.length ===0 && <div>No Passwords to show</div>}
  {passwordArray.length !=0 && 
  <table className="table-auto w-full rounded-md overflow-hidden">
  <thead className='bg-green-800 text-white'>
    <tr>
      <th className='py-1.5'>Site</th>
      <th className='py-1.5'>Useranme</th>
      <th className='py-1.5'>Password</th>
      <th className='py-1.5'>Actions</th>
    </tr>
  </thead>
  <tbody className='bg-green-100'>
    {passwordArray.map((item,index)=>{
   return <tr key={index}>
  <td className='py-1.5 px-2 border-white border text-center w-28'>
   <div className='flex items-center justify-between'>
   <a href={item.site} target='_blank'> {item.site} </a>
<div onClick={ ()=>{copyText(item.site)} }  className="copyicon cursor-pointer">
  <span  className="material-symbols-outlined  ">
content_copy
</span>
 </div>
   </div>
     </td>
  <td className='py-1.5 px-2 border-white border text-center w-28'>
    <div className="flex items-center justify-between">
      <span> {item.username}</span>
      <div onClick={ ()=>{copyText(item.username)} }  className="copyicon cursor-pointer">
  <span  className="material-symbols-outlined  ">
content_copy
</span>
 </div>
    </div>
  
    </td>
  <td className='py-1.5 px-2 border-white border text-center w-28'>
  <div className="flex items-center justify-between">
      <span> {item.password}</span>
      <div onClick={ ()=>{copyText(item.password)} } className="copyicon cursor-pointer">
      <span  className="material-symbols-outlined  ">
content_copy
</span>
 </div>
    </div>
    </td>
    <td className='py-1.5 px-2 border-white border text-center w-28'>
<span className='cursor-pointer mx-1' onClick={()=>{editPassword(item.id)}}> 
<lord-icon
    src="https://cdn.lordicon.com/wkvacbiw.json"
    trigger="hover"
     style={{"width":"24px","height":"24px"}}
    >
</lord-icon>
</span>
<span className='cursor-pointer mx-1' onClick={()=>{deletePassword(item.id)}}>
<lord-icon
    src="https://cdn.lordicon.com/skkahier.json"
    trigger="hover"   style={{"width":"24px","height":"24px"}}

    >
</lord-icon>
</span>
    </td>
  </tr>
    })}
    
  </tbody>

</table>

}
</div> 
</div>
   
   </>     

);

};

export default Manager;

