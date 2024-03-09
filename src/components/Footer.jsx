import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export function Footer() {
  return (
    <section className="fixed overflow-hidden bg-black pt-5 bottom-0 w-[100vw] mb-5">
      
      <div className='md:flex justify-center'>
          <p className='font-roboto text-center text-white md:pt-1'>Fashioned with flair by Himanshu Chand <span className=''>©</span>2024</p>
          <div className='flex justify-center my-3 md:my-0'>
          <div className=' block text-center md:ml-10'>
            <a href="https://www.instagram.com/himanshu._.chand/">
                <InstagramIcon sx={{
          color: 'white',
          '&.Mui-checked': {
            color: 'white',
          },
          fontSize: '25px',
        }}/></a>
      
        </div>
          <div className=' text-center md:ml-5'>
            <a href="https://in.linkedin.com/in/himanshu-chand-147566192/">
                <LinkedInIcon sx={{
          color: 'white',
          '&.Mui-checked': {
            color: 'white',
          },
          fontSize: '25px',
        }}/></a>
      
        </div>
        </div>
      </div>
    </section>
  )
}
