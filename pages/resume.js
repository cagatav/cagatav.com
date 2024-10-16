import Head from 'next/head';
import { useTheme } from '../components/ThemeContext';

export default function Resume() {
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen container mx-auto p-4 transition-all duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <Head>
        <title>Enes Çağatay Sözen - Resume</title>
        <meta name="description" content="Enes Çağatay Sözen's Resume" />
        <link rel="icon" href="/icon-white.svg" />
      </Head>
      <h1 className="text-3xl bold mb-7 text-center text-[#903b3b]">My Resume</h1>
      <div className="mb-4 text-center">
        <a download href="/EnesCagataySOZEN-CV.pdf" className="bg-[#903b3b] text-white py-3 px-10 rounded hover:bg-[#6c2c2c] text-sm">Download Resume (PDF)</a>
      </div>
      <div className="flex flex-col items-center lg:flex-row lg:items-start lg:justify-between mt-10">
        <div className="flex flex-col items-center lg:w-1/3">
          <img src="/pp.png" alt="Enes Çağatay Sözen" className="w-32 h-32 rounded-full" />
          <h2 className="text-2xl bold mt-4">Enes Çağatay SÖZEN</h2>
          <h3 className="text-xl bold">Computer Engineer</h3>
          <div className="mt-4 text-center lg:text-left">
            <p>📞 0 552 479 00 09</p>
            <a href='mailto:cgty.szn@gmail.com'>📧 cgty.szn@gmail.com</a>
            <p>📍 Ankara, Turkey</p>
            <p>🌐 cagatav.com</p>
            <div className="mt-4">
              <h4 className="text-xl bold mb-2 text-[#903b3b]">Skills</h4>
              <ul className="list-disc list-inside">
                <li>Programming Languages: Python, <span className='bold'>JavaScript</span>, Java</li>
                <li>Databases: MySQL, MSSQL</li>
                <li>Tools and Technologies: Git, Figma, Android Studio, Firebase, <span className='bold'>Cypress</span>, Shortcut</li>
              </ul>
              <h4 className="text-xl bold mb-2 mt-4 text-[#903b3b]">Education</h4>
              <p className='bold'>Turkish Aeronautical Association University</p>
              <p>Bachelor of Computer Engineering</p>
              <p className="timeline-date">2019 - 2024</p>
              <p className="timeline-date">GPA: 2.84</p>
              <h4 className="text-xl bold mb-2 mt-4 text-[#903b3b]">Languages</h4>
              <p>English - B2</p>
              <p>Turkish - Native</p>
              <h4 className="text-xl bold mb-2 mt-4 text-[#903b3b]">Certifications</h4>
              <p className='bold'>TÜBİTAK BİLGEM YTE Bootcamp 2023</p>
              <ul className="list-disc list-inside timeline-date">
                <li>Java Training</li>
                <li>User Experience and Usability Training</li>
                <li>Microservice Architectures Training</li>
                <li>Mock-Up Figma Training</li>
                <li>Spring Training</li>
              </ul>
              <h4 className="text-xl bold mb-2 mt-4 text-[#903b3b]">References</h4>
              <p className='bold'>Alaattin Emre Elbeyoğlu</p>
              <p>CEO & Co-founder at PopupSmart & LiveChatAI</p>
              <p>emre@elbeyoglu.com</p>
            </div>
          </div>
        </div>
        <div className="hidden lg:block border-l-2 border-gray-400 mx-10 h-auto"></div>
        <div className="mt-10 w-full lg:w-2/3 lg:mt-0 px-4">
          <h3 className="text-xl bold mb-2 text-[#903b3b]">About Me</h3>
          <p> As a new graduate <span className="bold">Computer Engineer</span>, I have gained experience in web and mobile development. I am interested in <span className='bold'>artificial intelligence</span> and have had opportunities to work in this field. As an entry-level web developer, I aim to leverage my experience in <span className="bold"> manual testing</span> and  <span className='bold'>test automation</span> to develop my skills in <span className='bold'>QA engineer</span> further. I am also open to gaining experience in new areas. I am committed to using my problem-solving abilities, innovative mindset, and analytical thinking to work in a dynamic and technology-forward company.</p>
          <div className="mt-10">
            <h3 className="text-xl bold mb-4 text-[#903b3b]">Experience</h3>
            <div className="mb-6">
              <h4 className="text-lg bold">Software QA Intern, PopupSmart</h4>
              <p className="timeline-date">Ankara, September 2023 - Present</p>
              <ul className="list-disc list-inside mt-2">
                <li>Helped test tasks before they went live to find and fix problems.</li>
                <li>Worked with product manager to ensure a smooth launch and keep customers happy.</li>
                <li>Kept track of support requests from users to make sure they were resolved quickly.</li>
                <li>Created test cases for new features and checked them before release to ensure quality.</li>
                <li>Communicated user requests to the development team for planning and implementation.</li>
                <li>Analyzed the usage of features to understand their effectiveness and improve user experience.</li>
              </ul>
            </div>
            <div className="mb-6">
              <h4 className="text-lg bold">Mobile Application Developer Intern, Beytepe Bilişim</h4>
              <p className="timeline-date">Remote, April 2023 - August 2023 (5 Months)</p>
              <ul className="list-disc list-inside mt-2">
                <li>Developed a hotel application using Android Studio and Java programming language.</li>
                <li>Implemented features that allowed users to retrieve information about hotels from a database and view details effectively.</li>
                <li>Conducted testing to ensure the application was user-friendly and functional before release.</li>
              </ul>
            </div>
            <div className="mb-6">
              <h4 className="text-lg bold">Intern, Uluman Technology</h4>
              <p className="timeline-date">Remote, August 2022 - September 2022 (1 Month)</p>
              <ul className="list-disc list-inside mt-2">
                <li>Completed a one-month mandatory internship where I discovered my affinity for Android Studio and Java programming.</li>
                <li>Designed user interfaces based on an example project, creating my own mobile application.</li>
                <li>Learned how to implement user login and list users from a database using Firebase.</li>
                <li>Gained knowledge in using GitHub for version control and maintaining code organization.</li>
                <li>Worked with the MVVM architectural pattern to enhance my understanding of app development.</li>                                
              </ul>
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-xl bold mb-4 text-[#903b3b]">Projects</h3>
            <div className="mb-6">
              <a href='/1' className="text-lg bold underline hover:text-blue-400 transition-colors">MySourceAI (AI Web Project)</a>
              <ul className="list-disc list-inside mt-2">
                <li>Developed an AI chat application that responds based on uploaded data sources using OpenAI technology.</li>
                <li>Enabled users to adjust settings such as base prompt and temperature to customize responses.</li>
                <li>Implemented functionality for training the AI with data sources in PDF and text formats.</li>
                <li>Built the application using Next.js and Node.js, creating an interactive and user-friendly website.</li>
                <li>Project website: mysourceai.vercel.app</li>

              </ul>
            </div>
            <div className="mb-6">
              <a href='/2' className="text-lg bold underline hover:text-blue-400 transition-colors">Shopping Time (E-commerce Web Project)</a>
              <ul className="list-disc list-inside mt-2">
                <li>Developed an e-commerce website using PHP and MySQL as the database.</li>
                <li>Implemented key features such as adding products to the cart, filtering products, and purchasing items.</li>
                <li>Designed user profile sections, enhancing my experience with user interface development.</li>
                <li>Gained practical knowledge of SQL as this was my first project involving database management.</li>
              </ul>
            </div>
            <p className='font-medium'>Find more project information at github.com/cagatav.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
