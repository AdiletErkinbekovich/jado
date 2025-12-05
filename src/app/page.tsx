import Navbar from '../components/Navbar';

import AboutContent from '../components/AboutContent';

import CategoryContent from '../components/CategoryContent';

export default function Home() {
  return (
    <>
      <div className="container mx-auto ">
        <Navbar />
      </div>
      <main>
        <AboutContent />

        <div className="container mx-auto">
          <CategoryContent />
        </div>
      </main>

      <footer></footer>
    </>
  );
}
