import Image from 'next/image';
export default function CategoryCard() {
  return (
    <div className="categoryCard overflow-hidden rounded-4xl  max-w-[230px] max-h-[314px] p-[15px] shadow-sm  hover:shadow-lg   transition-all duration-500 hover:-translate-y-3   flex flex-col items-center">
      <Image
        width={156}
        height={130}
        className="cardImage max-w-[156px] max-h-[130px] w-full h-full object-cover "
        src="/img/card-image2.svg"
        alt="category2"
      />

      <div className="cardText flex flex-col items-center text-center pb-6 px-2">
        <h3 className="mb-2 font-semibold text-xl text-gray-600 ">Best Flights</h3>
        <p className="  text-gray-500">
          Engrossed listening. Park gate sell they west hard for the.
        </p>
      </div>
    </div>
  );
}
