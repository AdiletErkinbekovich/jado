export default function AboutContent() {
  return (
    <section className="mainContent">
      <img
        className="absolute top-0 right-0 z-[-20]"
        src="img/decore-woman-back.png"
        alt="backImage"
      />
      <img className="absolute top-30 right-30 z-[-10]" src="img/woman.png" alt="womanImage" />
      <img className="absolute top-0 left-0 z-[-20]" src="img/decore-shadow.png" alt="leafs" />

      <div className="container mx-auto">
        <section className="mt-32 ml-5">
          <h4 className="aboutOverTitle font-poppins uppercase  font-extrabold text-orange-400">
            Best Destinations around the world
          </h4>
          <h2 className=" whitespace-pre-line relative aboutTitle font-volkhov mt-4  text-blue-950 text-7xl font-bold">
            <img
              className="absolute top-15 left-55 -z-10"
              src="/img/lineDecore.svg"
              alt="lineDecore "
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
                <img src="/img/play.svg" alt="play" />
              </button>
              <span className="font-medium text-black relative">Play demo</span>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
