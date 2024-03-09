import { Output } from "./Output";
import RangeSelector from "./RangeSelector";
import Checkbox from "@mui/material/Checkbox";

export default function PasswordGenerator() {
  return (
    <>
      <h1 className="text-4xl text-center text-white">Password Generator</h1>

      <div className="bg-slate-600 rounded-lg w-[80%] mx-auto my-8 overflow-auto md:w-[50%]">
        <div className="flex pt-5 justify-center">
          <Output />
        </div>
        <div className="md:flex md:justify-evenly mt-6 mb-5 ">
          <div className="mx-auto w-[60%] md:w-[40%] md:mx-0 pt-1.5 ">
            <RangeSelector />
          </div>

          <div className="flex justify-center">
            <Checkbox size="small" defaultChecked />
            <div className="flex items-center">
            <p className="font-medium font-roboto">Numbers</p>
            </div>
            <Checkbox size="small" defaultChecked />
            <div className="flex items-center">
            <p className="font-normal font-poppins ">Characters</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
