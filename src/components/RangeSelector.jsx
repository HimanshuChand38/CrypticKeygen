
import Slider from '@mui/material/Slider';
export default function RangeSelector({length,setlength,passGen}){

    return (<>
     <Slider defaultValue={50} max={20} aria-label="Default" valueLabelDisplay="auto" value={length} onChange={(e)=>{
        setlength(e.target.value);
     }}/>
    </>)
}