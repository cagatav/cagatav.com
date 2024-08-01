import Head from 'next/head';
import { useTheme } from '../components/ThemeContext';

export default function CV() {
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen container mx-auto p-4 transition-all duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <Head>
        <title>Enes Çağatay Sözen - CV</title>
        <meta name="description" content="Enes Çağatay Sözen's CV" />
        <link rel="icon" href="/icon-white.svg" />
      </Head>
      <h1 className="text-3xl font-bold mb-7 text-center text-[#903b3b]">My CV</h1>
      <div className="mb-4 text-center">
        <a download href="/EnesCagataySOZEN-CV.pdf" className="bg-[#903b3b] text-white py-3 px-10 rounded hover:bg-[#6c2c2c] text-sm">Download CV (PDF)</a>
      </div>
      <div className="flex flex-col items-center lg:flex-row lg:items-start lg:justify-between mt-10">
        <div className="flex flex-col items-center lg:w-1/3">
          <img src="/pp.png" alt="Enes Çağatay Sözen" className="w-32 h-32 rounded-full" />
          <h2 className="text-2xl font-bold mt-4">Enes Çağatay SÖZEN</h2>
          <h3 className="text-xl font-semibold">Computer Engineer</h3>
          <div className="mt-4 text-center lg:text-left">
            <p>📞 0 552 479 00 09</p>
            <p>📧 cgty.szn@gmail.com</p>
            <p>📍 Ankara, Turkey</p>
            <p>🌐 cagatav.com</p>
            <div className="mt-4">
              <h4 className="text-xl font-bold mb-2 text-[#903b3b]">Skills</h4>
              <ul className="list-disc list-inside">
                <li>Programming Languages: Python, NextJS, ReactJS, Java, NodeJS</li>
                <li>Databases: MySQL, MSSQL</li>
                <li>Tools and Technologies: Git, Figma, Firebase, Android Studio, Cypress, Shortcut</li>
              </ul>
              <h4 className="text-xl font-bold mb-2 mt-4 text-[#903b3b]">Education</h4>
              <p className='font-semibold'>Turkish Aeronautical Association University</p>
              <p>Bachelor of Computer Engineering</p>
              <p>2019 - 2024</p>
              <p>GPA: 2.84</p>
              <h4 className="text-xl font-bold mb-2 mt-4 text-[#903b3b]">Languages</h4>
              <p>English - B2</p>
              <p>Turkish - Native</p>
              <h4 className="text-xl font-bold mb-2 mt-4 text-[#903b3b]">Certifications</h4>
              <p className='font-semibold'>TÜBİTAK BİLGEM YTE Bootcamp 2023</p>
              <ul className="list-disc list-inside">
                <li>Java Training</li>
                <li>User Experience and Usability Training</li>
                <li>Microservice Architectures Training</li>
                <li>Mock-Up Figma Training</li>
                <li>Spring Training</li>
              </ul>
              <h4 className="text-xl font-bold mb-2 mt-4 text-[#903b3b]">References</h4>
              <p className='font-semibold'>Alaattin Emre Elbeyoğlu</p>
              <p>CEO & Co-founder at PopupSmart & LiveChatAI</p>
              <p>emre@elbeyoglu.com</p>
            </div>
          </div>
        </div>
        <div className="hidden lg:block border-l-2 border-gray-400 mx-10 h-auto"></div>
        <div className="mt-10 w-full lg:w-2/3 lg:mt-0 px-4">
          <h3 className="text-xl font-bold mb-2 text-[#903b3b]">About Me</h3>
          <p>
            As a Computer Engineering graduate, I have gained experience in web and mobile development. I have a strong interest in artificial intelligence and have had opportunities to work in this field. As an entry-level web developer, I aim to leverage my experience in manual testing and test automation to further develop my skills in QA engineering. Additionally, I am open to gaining experience in new areas, particularly in DevOps and artificial intelligence. I am passionate about continuous learning and improving my technical skills.
          </p>
          <div className="mt-10">
            <h3 className="text-xl font-bold mb-4 text-[#903b3b]">Experience</h3>
            <div className="mb-6">
              <h4 className="text-lg font-bold">Software Developer Intern, PopupSmart</h4>
              <p>September 2023 - Present</p>
              <ul className="list-disc list-inside mt-2">
                <li>Working on the LiveChatAI product.</li>
                <li>Engaged in web and artificial intelligence projects.</li>
                <li>Gained experience with TailwindCSS, ReactJS, and NextJS.</li>
                <li>Developed skills in testing and bug detection.</li>
                <li>I have tested three different products with manual and automated tests.</li>
                <li>Improved my formal email writing skills and customer relations in English while providing technical support.</li>
                <li>Acquired experience in product management.</li>
              </ul>
            </div>
            <div className="mb-6">
              <h4 className="text-lg font-bold">Mobile Application Developer Intern, Betyape Bilişim</h4>
              <p>April 2023 - August 2023 (5 Months)</p>
              <ul className="list-disc list-inside mt-2">
                <li>Worked as a long-term intern.</li>
                <li>Redeveloped an existing hotel management application using Java in Android Studio.</li>
              </ul>
            </div>
            <div className="mb-6">
              <h4 className="text-lg font-bold">Intern, Uluman Technology</h4>
              <p>August 2022 - September 2022 (1 Month)</p>
              <ul className="list-disc list-inside mt-2">
                <li>Developed my first mobile application using Java in Android Studio.</li>
                <li>Learned to establish internal company interactions and teamwork.</li>
                <li>The developed application is available on GitHub.</li>
              </ul>
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-xl font-bold mb-4 text-[#903b3b]">Projects</h3>
            <div className="mb-6">
              <h4 className="text-lg font-bold">MySourceAI (AI Web Project)</h4>
              <ul className="list-disc list-inside mt-2">
                <li>Developed an AI model using OpenAI API.</li>
                <li>Trained the AI with uploaded texts and PDF files.</li>
                <li>Designed a user-friendly interface using NextJS and TailwindCSS.</li>
                <li>Project website: mysourceai.vercel.app</li>
              </ul>
            </div>
            <div className="mb-6">
              <h4 className="text-lg font-bold">Shopping Time (E-commerce Web Project)</h4>
              <ul className="list-disc list-inside mt-2">
                <li>Developed an e-commerce site using HTML, CSS, and PHP.</li>
                <li>Managed product and order history using MySQL.</li>
                <li>Included an AI assistant for product information.</li>
                <li>Project details are available on my GitHub page.</li>
              </ul>
            </div>
            <p className='font-medium'>Find more project information at github.com/cagatav.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
