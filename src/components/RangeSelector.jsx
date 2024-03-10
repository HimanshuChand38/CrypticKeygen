import Slider from "@mui/material/Slider";
export default function RangeSelector({ length, setlength }) {
  return (
    <>
      <Slider
        defaultValue={10}
        min={5}
        max={15}
        aria-label="Default"
        valueLabelDisplay="auto"
        value={length}
        onChange={(e) => {
          setlength(e.target.value);
        }}
      />
    </>
  );
}
