import {useState} from 'react';

import './App.css'

function App() {

  const [data, setData] = useState('hello');
  const [size, setSize] = useState('200');
  const [foreGroundColor, setForeGroundColor] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');
  const [margin, setMargin] = useState('1');


  return (
      <div className='flex justify-center items-center bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 w-full h-screen'>
          <div className='border border-gray-200 px-5 py-5 shadow-xl bg-white rounded-md w-1/2'>
            <h1 className='text-center font-semibold text-2xl font-serif text-gray-800 decoration-2 decoration-wavy underline underline-offset-8 decoration-orange-500'>QR Code Generator</h1>
            <input type=""  
            placeholder='Enter data'
            className='w-full border-b-2  focus:outline-none h-26 mt-10'
            value={data}
            onChange={(e)=>{setData(e.target.value)}}
            
            />
            <div className='flex justify-between items-center mt-4 flex-wrap'>
              <div className='p-2 mb-2 flex justify-start items-start flex-col'>
                <label htmlFor="" className='mr-2'>Size</label>
                <input 
                type="number" 
                className='focus:outline-none border border-gray-500 w-25 rounded-lg p-1 mr-2 w-20' 
                value={size}
                onChange={(e)=>{setSize(e.target.value)}}
                />
                <span className='text-xs font-thin'>[200px X 200px]</span>
              </div>
              <div className='flex justify-start items-start flex-col'>
                <label htmlFor="">Foreground Color</label>
                <input 
                type="color" 
                className='hover:cursor-pointer rounded-lg' 
                value={'#'+foreGroundColor}
                onChange={(e)=>{setForeGroundColor(e.target.value.replace('#',''))}}
                />
              </div>
              <div className=' flex justify-start items-start flex-col'>
                <label htmlFor="">Background Color</label>
                <input 
                type="color"  
                className='hover:cursor-pointer' 
                value={'#'+backgroundColor}
                onChange={(e)=>{setBackgroundColor(e.target.value.replace('#',''))}}
                />
              </div>
              <div className='p-2 mb-2 flex justify-center items-center flex-col'>
                <label htmlFor="" className='mr-2'>Margin</label>
                <input 
                type="number" 
                className='focus:outline-none border border-gray-500 w-25 rounded-lg p-1 mr-2 w-20' 
                maxLength={50} 
                minLength={5} 
                value={margin}
                onChange={(e)=>{setMargin(e.target.value)}}
                />
              </div>
            </div>
            <div className='flex justify-center items-center'>
              <img 
              src={`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(data)}&size=${size}x${size}&color=${foreGroundColor}&bgcolor=${backgroundColor}&margin=${margin}`} 
              alt="qrcode" 
              />
            </div>
          </div>
      </div>
  )
}

export default App
