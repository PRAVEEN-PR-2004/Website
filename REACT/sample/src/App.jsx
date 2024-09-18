import React, { useRef } from 'react';


const App = () => {
  const name = useRef(null);
  const pass = useRef(null);
  const mail = useRef(null);
  const handleLogin = (e) =>
  {
    e.preventDefault();
    console.log(name.current.value, pass.current.value,mail.current.value);
  }
  return (
    <>
  
          <div className='flex items-center justify-center w-screen h-screen bg-body'>
        <div className='flex justify-center w-1/5 border rounded-md shadow-lg shadow-indigo-500/40 h-1/2 bg-slate-100'>
          <form className='flex flex-col justify-center gap-4' onSubmit={handleLogin}>
        <h1 className='mb-4 text-2xl text-center bold bb-color'>LOGIN FORM</h1>
       
          
        
            <input
              type='text'
              placeholder='Name'
              className='h-[10%]  outline-none focus:border-b-2 rounded focus:border-purple-300 p-2'
              ref={name}
            />
            <input
              type='password'
              placeholder='Password'
              className='h-[10%]  outline-none focus:border-b-2 rounded focus:border-purple-300 p-2'
              ref={pass}
            />
            <input
              type='email'
              placeholder='Email'
              className='h-[10%]  outline-none focus:border-b-2 rounded focus:border-purple-300 p-2'
              ref={mail}
            />
            <button class="bg-purple-300 hover:bg-purple-400 active:bg-purple-500 focus:outline-none focus:ring focus:ring-violet-300 rounded mt-3 h-[10%]">
            
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default App;
