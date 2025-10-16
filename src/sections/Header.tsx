import LogoIcon from '@/assets/logo.svg'
import MenuIcon from '@/assets/icon-menu.svg'
import { Button } from '@/components/Button';

export const Header = () => {
   {/* py-4 is a vertical padding  and to add a line*/}
  return <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10"> 
  
 
<div className="container">
<div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto backdrop-blur">
  
    <div>
     <LogoIcon className="h-8 w-8" />
    </div>
{/* Hidden for all and starting from the md is VISIBLE*/}
    <div className='hidden md:block'>
      <nav className='flex gap-8 text small' >
        <a href=''className='text-white/70 hover:text-white transition'> Features</a>
        <a href=''className='text-white/70 hover:text-white transition'> Devs</a>
        <a href=''className='text-white/70 hover:text-white transition'> Price</a>
        <a href=''className='text-white/70 hover:text-white transition'> ChangeLog</a>
      </nav>
    </div>


    <div className='flex gap-4 items-center'>
   <Button>
    Get Started
   </Button>
      <MenuIcon className='md:hidden'/>
    </div>
  </div>

</div>
  
</header>;
  
};
