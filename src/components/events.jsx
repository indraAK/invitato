function Events() {
  return (
    <section>
      <div className="px-4 py-8 bg-[url('/assets/images/pattern.jpeg')]">
        <div className="bg-secondary py-9 px-8 rounded-2xl shadow-2xl">
          <h2 className="font-heading text-white text-3xl font-bold text-center">Wedding Celebration</h2>
          <p className="text-white font-medium text-center">will be held in:</p>
          <div className="flex items-center justify-center gap-6 my-3">
            <div className="text-center text-white">
              <p className="font-fantasy font-bold text-3xl">0</p>
              <p className="font-medium">days</p>
            </div>
            <div className="text-center text-white">
              <p className="font-fantasy font-bold text-3xl">0</p>
              <p className="font-medium">hours</p>
            </div>
            <div className="text-center text-white">
              <p className="font-fantasy font-bold text-3xl">0</p>
              <p className="font-medium">mins</p>
            </div>
            <div className="text-center text-white">
              <p className="font-fantasy font-bold text-3xl">0</p>
              <p className="font-medium">secs</p>
            </div>
          </div>
          <div className="p-4 rounded-2xl mt-6 space-y-6 bg-cover-invitation bg-no-repeat bg-cover bg-center relative isolate overflow-hidden after:content-[''] after:block after:absolute after:inset-0 after:w-full after:h-full after:bg-[rgba(124_,150_,173_,0.59)] after:z-[-1]">
            <div className="text-white flex flex-col items-center">
              <img src="/assets/images/icon-ring.svg" alt="Icon Ring" className="w-12 h-12" />
              <p className="font-fantasy font-bold text-xl">Holy Matrimony</p>
              <p className="text-sm font-medium text-center pt-2">
                <span>09.00 WIB</span>
                <br />
                <span>Friday, 22 October 2021</span>
                <br />
                <span>Gereja Hati Kudus Yesus Tanah Mas</span>
                <br />
                <span>Jl. Kokrosono Kav 40-42 Panggung Lor, Kota Semarang</span>
              </p>
            </div>
            <div className="text-white flex flex-col items-center">
              <img src="/assets/images/icon-glass.svg" alt="Icon Glass" className="w-12 h-12" />
              <p className="font-fantasy font-bold text-xl">Wedding Reception</p>
              <p className="text-sm font-medium text-center pt-2">
                <span>18.00 WIB</span>
                <br />
                <span>Friday, 22 October 2021</span>
                <br />
                <span>S2 Ballroom</span>
                <br />
                <span>Jl. Sisingamangaraja No. 19C Semarang</span>
              </p>
            </div>
            <div className="flex justify-center gap-4 pb-5">
              <button className="inline-block h-6 px-2 rounded-md bg-orange-500 text-white text-xs font-semibold animate-zoom">Remind Me</button>
              <button className="inline-block h-6 px-2 rounded-md bg-orange-500 text-white text-xs font-semibold animate-zoom">See Location</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;
