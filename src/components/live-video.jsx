function LiveVideo() {
  return (
    <section>
      <div className="p-8 text-center pb-24">
        <h2 className="font-fantasy text-secondary text-3xl font-bold">Live Wedding</h2>
        <p className="text-lg text-slate-700 font-medium">Nailal & Via</p>
      </div>
      <div className="pb-16 bg-cover-invitation bg-no-repeat bg-cover bg-center relative isolate after:content-[''] after:block after:absolute after:inset-0 after:w-full after:h-full after:bg-black/30 after:z-[-1] before:conten-[''] before:block before:absolute before:top-0 before:left-0 before:w-full before:h-12 before:bg-[url('/assets/images/wave-pattern-2.svg')] before:bg-cover">
        <div className="max-w-xl mx-auto px-8 -translate-y-14 -mb-10">
          <iframe
            title="Live wedding of Nailal &amp; Via"
            src="https://www.youtube.com/embed/AhGpYiRxqlw"
            allowFullScreen
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="w-full aspect-video rounded-2xl border-[8px] border-secondary"
          ></iframe>
        </div>
        <p className="py-4 px-8 text-center text-white text-sm">
          <span>
            Live wedding can also be watched
            <br />
            via the Youtube platform:
          </span>
          <br />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://youtu.be/AhGpYiRxqlw"
            className="bg-orange-500 inline-flex items-center justify-center h-8 px-3 p-2 rounded-md font-semibold mt-2 animate-zoom"
          >
            Open via Youtube
          </a>
        </p>
      </div>
    </section>
  );
}

export default LiveVideo;
