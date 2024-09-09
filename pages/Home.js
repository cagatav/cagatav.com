import React, { useEffect } from 'react';
import { useTheme } from '../components/ThemeContext';
import Image from 'next/image';

export default function Home() {
  const { darkMode } = useTheme();

  useEffect(() => {
    // Embed Chatbot configuration
    window.embeddedChatbotConfig = {
      chatbotId: "zusvLu8KuP0vvD9-553sH",
      domain: "www.chatbase.co"
    };

    const script1 = document.createElement('script');
    script1.src = "https://www.chatbase.co/embed.min.js";
    script1.setAttribute("chatbotId", "zusvLu8KuP0vvD9-553sH");
    script1.setAttribute("domain", "www.chatbase.co");
    script1.defer = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = "https://app-dev.livechatai.com/embed.js";
    script2.setAttribute("data-id", "cm0uwc5lz00037uda93abfkyx");
    script2.async = true;
    script2.defer = true;
    document.body.appendChild(script2);

    // Cleanup function to remove the scripts when the component unmounts
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div className={`min-h-screen flex flex-col justify-center items-center transition-all duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <main className="flex flex-col justify-center items-center">
        <div className="w-66 h-66 rounded-full flex items-center justify-center overflow-hidden">
          <Image
            src="/pp.png"
            alt="Profile-Photo"
            className="object-cover"
            width={250}
            height={250}
          />
        </div>
        <h1 className="text-4xl md:text-6xl text-center">
          <span className="block my-5 px-2">Hi, I'm <span className="text-[#903b3b]">Çağatay</span>!</span>
          <span className="block px-2">A Computer Engineer</span>
        </h1>
        <p className="text-center mt-4 max-w-2xl px-6">
          {/* Diğer metin içeriklerinizi buraya ekleyin */}
        </p>
        <div className="flex mt-8 space-x-6 ">
          {/* Sosyal medya bağlantılarını buraya ekleyin */}
        </div>
      </main>
    </div>
  );
}