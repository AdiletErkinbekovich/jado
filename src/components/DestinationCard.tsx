import Image from 'next/image';
export default function DestinationCard() {
  return (
    <div className="destinationCard overflow-hidden rounded-4xl w-[315px] h-[457px] shadow-sm  hover:shadow-lg   transition-all duration-500 hover:-translate-y-3   flex flex-col justify-between ">
      <div className="cardTop h-[327px] w-full rounded-t-4xl overflow-hidden">
        <Image
          className="w-full h-full object-cover"
          src="/img/destinanion-img2.jpeg"
          alt="London"
          width={315}
          height={457}
        />
      </div>
      <div className="">
        <div className="cardBottom w-[315px] h-[130px]">
          <span className="title text-gray-800">London,Uk</span>
          <span className="price text-gray-600  ">$5,42k</span>
        </div>
        <div>
          {/* <Image /> */}
          <span className="text-gray-800">12 Days Trip</span>
        </div>
      </div>
    </div>
  );
}
