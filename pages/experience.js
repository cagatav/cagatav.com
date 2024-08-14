import Timeline from '@/pages/timeline';
import Head from 'next/head';
import { useTheme } from '../components/ThemeContext';


const experiences = [
  {
    title: "Software QA Intern, Popupsmart",
    date: "Ankara, September 2023 - Present",
    description: [
      "Helped test tasks before they went live to find and fix problems.",
      "Worked with product manager to ensure a smooth launch and keep customers happy.",
      "Kept track of support requests from users to make sure they were resolved quickly.",
      "Created test cases for new features and checked them before release to ensure quality.",
      "Communicated user requests to the development team for planning and implementation.",
      "Analyzed the usage of features to understand their effectiveness and improve user experience."
    ]
  },
    {
      title: "Mobile Application Developer Intern, Beytepe Bilisim",
      date: "Remote April 2023 - August 2023 (5 Month)",
      description: [
        "Developed a hotel application using Android Studio and Java programming language.",
        "Implemented features that allowed users to retrieve information about hotels from a database and view details effectively.",
        "Conducted testing to ensure the application was user-friendly and functional before release."
      ]
    },
    {
      title: "Intern, Uluman Technology",
      date: "Remote, August 2022 - September 2022 (1 Month)",
      description: [
        "Completed a one-month mandatory internship where I discovered my affinity for Android Studio and Java programming.",
        "Designed user interfaces based on an example project, creating my own mobile application.",
        "Learned how to implement user login and list users from a database using Firebase.",
        "Gained knowledge in using GitHub for version control and maintaining code organization.",
        "Worked with the MVVM architectural pattern to enhance my understanding of app development."
      ]
    }
  ];

export default function Experience() {
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen min-w-fit container mx-auto p-4 transition-all duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <Head>
        <title>C A G A T A V - Experience</title>
        <meta name="description" content="CAGATAV" />
        <link rel="icon" href="/icon-white.svg" />
      </Head>
      <h1 className="text-3xl bold text-center mb-8 text-[#903b3b]">My Experiences</h1>
      <Timeline experiences={experiences} />
    </div>
  );
}
