import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import socialLists from '../../../data/socialMedia/socialMedia.js';

export default function ProfileInfo() {

  const resumeUrl = 'https://docs.google.com/document/d/1_q5WsDwQGlswkW-Qyvf22SYVf_V0xLHfLrRG83nzuBU/edit?usp=sharing';

  const homeStyle = 'home-social-link';

  return (
    <section id="profile" className='flex items-center justify-center w-screen'>
      <div className="flex w-screen items-center justify-center h-screen gap-8 sm:gap-0">

        <div className='absolute w-full h-full bg-[url(public/icon/Ellipse.svg)] bg-no-repeat bg-fit bg-center'></div>

        <div className='flex flex-col justify-center items-center p-6 z-[5]'>

          <div className='flex items-center justify-center'>
            <h6 className='text-textColor sm:leading-tight leading-9 sm:text-[45px] text-[30px] whitespace-nowrap text-center'>
              Hello! <br />
              I&apos;m
              <span className='font-bold'> Mo</span>hit
              <span className='font-bold'> Sh</span>arma
              <span className='text-claret'>.</span>
            </h6>
            <p className='text-textColor text-center text-[15px] sm:text-[20px
            leading-6 sm:leading-8 mt-4 sm:mt-6'>I&apos
            m a full-stack developer with a passion for creating beautiful and functional websites and applications. I have
            experience working with a variety of technologies and frameworks, and I am always looking for new challenges and
            opportunities to learn and grow.</p>
          </div>

          <div className='flex items-center justify-center mt-6 mb-6'>
            <a href={resumeUrl} target='blank' className='py-1 px-2 text-footerColor  sm:hover:text-textColor border-footerColor border hover:border-footerColor border-transparent transition-all cursor-pointer'>
              Resume
              <FontAwesomeIcon className='ml-1 text-sm text-footerColor' icon={faChevronDown} />
            </a>
          </div>

          <div className='flex w-full items-center sm:justify-start justify-center mt-1 sm:absolute sm:bottom-2.5 sm:left-2.5'>
            <ul className='flex flex-row sm:flex-col list-none sm:gap-0 gap-2'>
              {socialLink(homeStyle)}
            </ul>
          </div>

          <a href='#contact' className='absolute right-[0px] hover:right-0 top-[100px] px-3 py-1 border-[5px] border-[#7DCDFF] hover:border-current hover:animate-colorAnima bg-sky-500 border-r-0 rounded-e-none rounded-full cursor-pointer hover:border-[5px] hover:border-r-0'>
            <div className='text-white text-sm font-bold'>
              Hire me!
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export function socialLink(style) {

  return (
    <>
      {socialLists.map(socialList => {
        return (
          <li key={socialList.id}>
            <a className={`social-link ${style}`} href={socialList.link} target='blank' rel='noreferrer'>
              <FontAwesomeIcon icon={socialList.icon} />
            </a>
          </li>
        )
      })}
    </>
  );
};
