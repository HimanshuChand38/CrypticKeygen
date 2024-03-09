import { Output } from "./Output";
import RangeSelector from "./RangeSelector";
import Checkbox from "@mui/material/Checkbox";
import { Footer } from "./Footer";
import Flash from "./Flash";
import { useEffect, useState } from "react";



export default function PasswordGenerator() {
  
  const[length,setlength] = useState(8);
  const[isNumber,setIsNumber] = useState(true);
  const[isChar,setIsChar] = useState(false);
  const[password,setPassword] = useState("Random Password");
  const[copied,setCopied] = useState(false);

  useEffect(()=>{
 generator();
  },[length,isNumber,isChar])
  
  function generator(){
    let pass="";
    let string="qwertyuiopasdfghjklzxcvbnQWERTYUIOPASDFGHJKLZXCVBNM";
    
    if(isNumber)string+="0123456789";
    if(isChar)string+="{}[]_-+=!@~#$%^&*()<>?/";
    let size= string.length;
    while(pass.length!=length){
        let index= Math.floor(size*Math.random());
        pass+=string[index];
    }
    setPassword(pass);
  }
  
    return (
    <>
      <h1 className=" mt-20 text-4xl font-roboto text-center text-white">Password Generator</h1>

      <div className="bg-slate-800 rounded-3xl w-[80%] mx-auto my-20 overflow-auto md:w-[50%]">
        <div className="flex pt-5 justify-center">

            {/*=========== TOP OUTPUT PART STARTS==================*/}
          <Output password={password} setCopied={setCopied} />
          {copied? <Flash/>:''}
            {/*=========== TOP OUTPUT PART ENDS==================*/}
        
        
        </div>
        <div className="md:flex md:justify-evenly mt-6 mb-5 ">
          <div className="mx-auto w-[60%] md:w-[40%] md:mx-0 pt-1.5 ">
            {/*=========== RANGE SELECTOR PART STARTS==================*/}
            <RangeSelector length={length} setlength={setlength} passGen={generator} />
            {/*=========== RANGE SELECTOR PART ENDS==================*/}
          </div>

          <div className="flex justify-center">

            {/*=========== FIRST CHECKBOX PART STARTS==================*/}
            <Checkbox id="isNumber" size="small" defaultChecked onClick={()=>{
                setIsNumber((old)=>!old);
                generator();
            }}/>
            {/*=========== FIRST CHECKBOX PART ENDS==================*/}
            <div className="flex items-center">
                <label htmlFor="isNumber">
            <p className="font-medium text-white font-poppins">Numbers</p>
            </label>
            </div>
            {/*=========== SECOND CHECKBOX PART STARTS==================*/}
            <Checkbox id="isChar" size="small" onClick={(e)=>{
                setIsChar((old)=>!old);
                generator();
            }} />
            {/*=========== SECOND CHECKBOX PART ENDS==================*/}
            <div className="flex items-center">
                <label htmlFor="isChar">
            <p className="font-normal text-white font-poppins ">Characters</p></label>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
