import { TypeAnimation } from 'react-type-animation';
 
const Animator = () => {
  return (
    <div className='text-center pt-3'>
    <TypeAnimation className='text-white/60 font-poppins font-thin text-xs'
      sequence={[
        'Crafting Ultra-Strong Passwords', // Types the whole given msg
        3000, // Waits 3s
        'Fortify Your Digital Fortress with Advanced Passwords', // Deletes previous msg and re-writes this one
        3000, // Waits 3s
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
    />
    </div>
  );
};
export default Animator;