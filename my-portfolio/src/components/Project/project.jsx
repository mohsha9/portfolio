import projects from '../../../data/project/project.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

export default function Project() {

  const project = projects.map((project, i) => {

    return i % 2 === 0
      ?
      <div key={project.id} data-key={project.id} className="flex flex-col lg:flex-row w-full sm:h-[550px] h-[350px] sm:p-12 p-6 rounded-[100px] bg-blue-100 gap-6">
        <div className='flex relative w-full h-full rounded-[80px] bg-[url(/public/icon/amazon-image.png)] bg-center bg-cover bg-no-repeat overflow-hidden'>
          <div className='sm:hidden absolute h-full bottom-[-220px] hover:bottom-0  flex flex-col items-center justify-between px-6 py-4 text-center bg-zinc-900 rounded-[80px] transition-all duration-300'>
            <h1 className="text-[20px] text-textColor font-bold sm:mt-4 mt-2">{project.name}</h1>
            <p className='text-[14px] text-bodyColor text-justify'>{project.description}</p>
            <div className='flex gap-4 mb-2'>
              <a href={project.deployLink} target="_blank" rel="noreferrer" className='text-textColor hover:text-bodyColor p-1 transition'>
                Deploy <FontAwesomeIcon icon={faLink} />
              </a>
              <a href={project.githubLink} target="_blank" rel="noreferrer" className='text-textColor hover:text-bodyColor p-1 transition'>
                Github <FontAwesomeIcon icon={faLink} />
              </a>
            </div>
          </div>
        </div>
        <div className='sm:inline hidden bg-green-950 w-full md:p-12 p-9 rounded-full'>
          <div className='flex flex-col items-center justify-between h-full px-6 py-5 text-center bg-textColor rounded-full'>
            <h1 className="text-[20px] text-bodyColor font-bold">{project.name}</h1>
            <p className='text-[13px] lg:text-[16px] text-bodyColor my-6'>{project.description}</p>
            <div className='flex gap-4 mb-2'>
              <a href={project.deployLink} target="_blank" rel="noreferrer" className='text-footerColor hover:text-bodyColor p-1 transition'>
                Deploy <FontAwesomeIcon icon={faLink} />
              </a>
              <a href={project.githubLink} target="_blank" rel="noreferrer" className='text-footerColor hover:text-bodyColor p-1 transition'>
                Github <FontAwesomeIcon icon={faLink} />
              </a>
            </div>
          </div>
        </div>
      </div>
      :
      <div key={project.id} data-key={project.id} className="flex sm:flex-row flex-col w-full sm:h-[550px] h-[350px] p-6 rounded-[100px] bg-blue-100 gap-4">
        <div className='md:inline hidden bg-green-500 w-full p-6 rounded-full'>
          <h1 className="text-[16px] font-bold text-center">{project.name}</h1>
        </div>
        <div className=' bg-blue-400 w-full h-full rounded-[80px]'>
          <div className='flex items-center justify-center h-full'>
            hufkdafblksvblskjd
          </div>
        </div>
      </div>
  });

  return (
    <section id='project' className='flex items-center justify-center w-screen'>
      <div className="flex flex-col justify-evenly items-center w-[80%] min-w-[380px] mt-[50px] sm:h-full p-8 group">
        <div className="mb-[25px]">
          <h1 className='section-title whitespace-nowrap'>
            Projects
          </h1>
        </div>

        <div className="flex items-center justify-center w-full">
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-6 sm:p-4 w-full">
            {project}
          </div>
        </div>
      </div>

    </section>
  )
};
