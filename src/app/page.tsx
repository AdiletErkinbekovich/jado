import Navbar from '../components/Navbar';

import AboutContent from '../components/AboutContent';
import Image from 'next/image';

import CategoryContent from '../components/CategoryContent';
import CategoryCard from '../components/CategoryCard';
import DestinationCard from '../components/DestinationCard';

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

          <section className=" destinationSection mt-[10%] mb-32 flex flex-col items-center">
            <h4 className="categorySubTitle font-poppins text-gray-500 uppercase">Top Selling</h4>
            <Image
              width={10}
              height={10}
              className="absolute right-10"
              src="/img/stars-decoration.svg"
              alt="stars"
            />
            <h2 className="categoryTitle font-volkhov mt-4  text-blue-950 text-5xl font-bold">
              Top Destinations
            </h2>

            <div className="CategoriesContent grid grid-cols-4 gap-25 mt-30">
              <DestinationCard />
              <DestinationCard />
              <DestinationCard />
              <DestinationCard />
            </div>
          </section>
        </div>
      </main>

      <footer></footer>
    </>
  );
}
