import CategoryCard from './CategoryCard';
import Image from 'next/image';
export default function CategoryContent() {
  return (
    <div className="container mx-0 pt-10 ">
      <section className=" categorySection mt-[20%] mb-32 flex flex-col items-center">
        <h4 className="categorySubTitle font-poppins text-gray-500 uppercase">Category</h4>
        <Image
          width={153}
          height={166}
          className="absolute right-10"
          src="/img/stars-decoration.svg"
          alt="stars"
        />
        <h2 className="categoryTitle font-volkhov mt-4  text-blue-950 text-5xl font-bold">
          We Offer Best Services
        </h2>

        <div className="CategoriesContent grid grid-cols-4 gap-25 mt-30">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </section>
    </div>
  );
}
