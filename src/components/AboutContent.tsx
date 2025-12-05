import Image from 'next/image';

export default function AboutContent() {
  return (
    <section className="aboutContent">
      <Image
        width={375}
        height={500}
        className="absolute top-0 right-0 z-[-18]"
        src="/img/back-decoration.png"
        alt="backImage"
      />

      <Image
        width={765}
        height={764}
        className="absolute top-30 right-30 z-[-9]"
        src="/img/woman-icon.png"
        alt="womanImage"
      />

      <Image
        width={10}
        height={5}
        className="absolute top-0 left-0 z-[-19]"
        src="/img/shadow-decoration.png"
        alt="leafs"
      />

      <div className="container mx-auto">
        <section className="mt-32 ml-5">
          <h4 className="aboutOverTitle font-poppins uppercase  font-extrabold text-orange-400">
            Best Destinations around the world
          </h4>
          <h2 className=" whitespace-pre-line relative aboutTitle font-volkhov mt-4  text-blue-950 text-7xl font-bold">
            <Image
              width={385}
              height={12}
              className="absolute top-15 left-55 -z-10"
              src="/img/line-decoration.svg"
              alt="line-decoration"
            />
            Travel, enjoy {'\n'}
            and live a new {'\n'}and full life
          </h2>
          <p className=" whitespace-pre-line aboutSubtitle font-poppins text-gray-600 mt-7  text-base">
            Built Wicket longer admire do barton vanity itself do in it.{'\n'}
            Preferred to sportsmen it engrossed listening. Park gate {'\n'}
            sell they west hard for the.
          </p>
          <div className="underSectionButtons flex items-center space-x-8 mt-10 ">
            <button className="Recomendations Button cursor-pointer font-googlesans w-[170px] h-[60px]  font-medium  px-6 py-3 bg-yellow-500 text-white rounded-[10px]    ">
              Find out more
            </button>
            <div className="flex items-center space-x-3 ">
              <button className="  findOutButton grid place-items-center cursor-pointer w-10 h-10 rounded-4xl bg-[#DF6951]  ">
                <Image width={10} height={10} src="/img/play-icon.svg" alt="play" />
              </button>
              <span className="font-medium text-black relative">Play demo</span>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
