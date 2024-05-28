import Link from 'next/link';

export default function CV() {
  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-4xl font-bold mb-10 text-center text-[#903b3b]">My CV</h1>
      <div className="mb-4 text-center">
        <Link href="/cv.pdf">
          <span className="bg-[#903b3b] text-white py-3 px-4 rounded hover:bg-[#6c2c2c]" target="_blank">Download CV (PDF)</span>
        </Link>
      </div>
      <div className="flex justify-center">
        <img src="CV.png" alt="CV Page 1" className="w-full h-auto" />
      </div>
    </div>
  );
}
