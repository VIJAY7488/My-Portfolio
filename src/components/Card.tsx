import grainImage from "@/assets/images/grain.jpg";
import { twMerge } from "tailwind-merge";
import { PropsWithChildren } from "react";

export const Card = ({ className, children }: PropsWithChildren<{ className?: string }>) => {
  return (
    <div  
      className={twMerge(
        "relative bg-gray-800 rounded-3xl overflow-hidden", 
        "after:content-[''] after:absolute after:inset-0 outline-2 after:outline-offset-2 after:rounded-3xl outline-white/20 after:pointer-events-none mt-8 lg:mt-1 md:mt-1", 
        className
      )}
    >
      <div 
        className="absolute inset-0 -z-10 opacity-5" 
        style={{ backgroundImage: `url(${grainImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} 
      />
      {children}
    </div>
  );
};
