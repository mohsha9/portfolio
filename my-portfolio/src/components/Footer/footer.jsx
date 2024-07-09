import upIcon from '/icon/up-icon.svg';
import { socialLink } from '../Home/home';

export default function Footer() {

  const currentYear = new Date().getFullYear();
  const footerStyle = 'footer-social-link';

  return (
    <footer className="">
      <div className='relative flex flex-col items-center sm:justify-center w-screen sm:h-[200px] h-[170px] bg-footerColor'>
        <div className="absolute top-[-50%] sm:translate-y-[70%] translate-y-[55%] w-[80px] h-[80px] bg-bodyColor rounded-full group">
          <a href='#profile' className='flex justify-center w-full h-full  rounded-full'>
            <img src={upIcon} className='w-6 sm:group-hover:animate-bounceSlow animate-bounceSlow sm:animate-none' alt='Up-Icon' />
          </a>
        </div>

        <div className='h-fit w-fit mt-10 sm:m-0'>
          <span className='text-xs text-richKhaki font-medium whitespace-nowrap'>Mohit Sharma &copy;{currentYear} - ms600680@gmail.com</span>
        </div>
        <div className="flex justify-center w-fit h-fit">
          <ul className='flex list-none'>
            {socialLink(footerStyle)}
          </ul>
        </div>
      </div>
    </footer>
  );
}