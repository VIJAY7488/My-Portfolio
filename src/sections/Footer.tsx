import ArrowUprightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vijaypatel01/',
  },
  {
    title: 'Twitter',
    href: 'https://x.com/Mrpatel7488',
  },
  {
    title: 'Github',
    href: 'https://github.com/VIJAY7488',
  },
  {
    title: 'Instagram',
    href: '#',
  }
]

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip mt-6">
      <div 
        className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10">
      </div>
      <div className="container">
        <div 
          className="border-t border-white/15 py-16 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">
            &copy; 2024. All rights reserved.
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map(link => (
              <a href={link.href} key={link.title}
                 className="inline-flex items-center gap-1.5 font-semibold cursor-pointer"
              >
                {link.title}
                <ArrowUprightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
