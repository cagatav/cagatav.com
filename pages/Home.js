import React from 'react';
import { useTheme } from '../components/ThemeContext';

export default function Home() {
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col justify-center items-center transition-all duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <main className="flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-6xl text-center">
          <span className="block my-5 px-2">Hi, I'm <span className="text-[#903b3b]">Çağatay</span></span>
          <span className="block px-2">A Computer Engineer</span>
        </h1>
        <p className="text-center mt-4 max-w-2xl px-6"> As a new graduate <span className="bold">Computer Engineer</span>, I have gained experience in web and mobile development. I am interested in <span className='bold'>artificial intelligence</span> and have had opportunities to work in this field. As an entry-level web developer, I aim to leverage my experience in <span className="bold"> manual testing</span> and  <span className='bold'>test automation</span> to develop my skills in <span className='bold'>QA engineer</span> further. I am also open to gaining experience in new areas. I am committed to using my problem-solving abilities, innovative mindset, and analytical thinking to work in a dynamic and technology-forward company.</p>
        <div className="flex mt-8 space-x-6 ">
          <a href="https://www.linkedin.com/in/cagatav" className={`icons ${darkMode ? ' fill-white' : 'fill-black'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"/></svg>
          </a>
          <a href="https://github.com/cagatav" className={`icons ${darkMode ? ' fill-white' : 'fill-black'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z"/></svg>
          </a>
          <a href="mailto:cgty.szn@gmail.com" className={`icons ${darkMode ? ' fill-white' : 'fill-black'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M12 2.02c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 12.55l-5.992-4.57h11.983l-5.991 4.57zm0 1.288l-6-4.629v6.771h12v-6.771l-6 4.629z"/></svg>
          </a>
        </div>
      </main>
    </div>
  );
}
