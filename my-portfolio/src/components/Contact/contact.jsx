export default function Contact() {

  return (
    <section id='contact' className="flex justify-center items-center sm:h-screen w-screen">
      <div className='flex flex-col flex-grow-1 items-center justify-center px-8 py-12 w-[85%] h-full group'>
        <h1 className='section-title whitespace-nowrap'>
          Contact me
        </h1>
        <div className="flex flex-col w-[50%] min-w-[200px] mt-6">
          <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col w-full gap-4 z-[5]">
            <input type="hidden" name="access_key" value="7f056786-28a1-413b-973e-0af52d6f4849" />
            <input className="input-box" type="text" name="name" placeholder="Enter your name" required />
            <input className="input-box" type="text" name="email" placeholder="Enter your Email" required />
            <textarea className="input-box min-h-[100px] max-h-[150px]" name="message" placeholder="Enter your message" required />
            <input type="submit" value='Submit' className="bg-claret text-light1Khaki self-center font-semibold hover:text-claret px-7 h-11 rounded-full hover:bg-transparent border-4 border-claret active:bg-claret active:bg-opacity-10 duration-[0.05s] cursor-pointer" />
          </form>
        </div>
      </div>
    </section>
  );
}