

export const Header = () => {

  const handlescrooll = (id: string) => {
    const section = document.getElementById(id);

    if(section){
      section.scrollIntoView({behavior: 'smooth'})
    }
  };


  return (
   <div className="flex justify-center items-center fixed w-full z-10 top-3">
        <nav 
        className='flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur'>
        <button onClick={() => handlescrooll('home')} 
        className='nav-item'>Home</button>
        <button onClick={() => handlescrooll('projects')} className='nav-item'>Projects</button>
        <button onClick={() => handlescrooll('about')} className='nav-item'>About</button>
        <button onClick={() => handlescrooll('contact')} 
        className='nav-item bg-white text-gray-900'>Contact</button>
      </nav>
   </div>
  )
};
