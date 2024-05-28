import Timeline from '@/pages/timeline';
import Head from 'next/head'

const experiences = [
    {
      title: "Software Developer Intern, PopupSmart",
      date: "September 2023 - Present",
      description: [
        "Working on the LiveChatAI product.",
        "Engaged in web and artificial intelligence projects.",
        "Gained experience with TailwindCSS, ReactJS, and NextJS.",
        "Developed skills in testing and bug detection.",
        "Improved my formal email writing skills and customer relations in English while providing technical support.",
        "Acquired experience in product management."
      ]
    },
    {
        title: "Mobile Application Developer Intern, Beytepe Bilisim",
        date: "April 2023 - August 2023 (5 Month)",
        description: [
          "Worked as a long-term intern.",
          "Redeveloped an existing hotel management application using Java in Android Studio."
        ]
    },
    {
        title: "Intern, Uluman Technology",
        date: "August 2022 - September 2022 (1 Month)",
        description: [
          "Developed my first mobile application using Java in Android Studio.",
          "Learned to establish internal company interactions and teamwork.",
          "The developed application is available on GitHub."
        ]
    },
  ];

export default function Experience() {
  return (
    <div className="container mx-auto p-4">
    <Head>
        <title>C A G A T A V - Experience</title>
        <meta name="description" content="CAGATAV" />
        <link rel="icon" href="/icon-white.svg" />
    </Head>
      <h1 className="text-3xl font-semibold text-center mb-8">My Experiences</h1>
      <Timeline experiences={experiences} />
    </div>
  );
}
