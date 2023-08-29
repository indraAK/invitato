function Hero() {
  return (
    <section className="min-h-screen supports-[min-height:100dvh]:min-h-[100dvh] bg-secondary">
      <div className="min-h-[75vh] supports-[min-height:75dvh]:min-h-[75dvh] bg-secondary bg-[url('/assets/images/hero.jpeg')] bg-no-repeat bg-cover bg-top relative isolate after:content-[''] after:block after:absolute after:inset-0 after:w-full after:h-full after:bg-indigo-200/30 z-[-1px]">
        <span className="sr-only">Bride and Groom</span>
      </div>

      <div className="bg-secondary text-white p-4 relative space-y-2 text-center after:content-[''] after:block after:absolute after:bottom-full after:left-0 after:w-full after:min-h-[48px] after:bg-wave-pattern">
        <h2 className="font-heading font-bold text-xl">Dear Mr/Mrs/Ms,</h2>
        <p className="font-heading font-bold text-xl">Family & Friends</p>
        <p className="text-sm font-medium">
          We are pleased to announce and invite you to our wedding. We sincerely hope that you will be able to attend and pray directly on our wedding
          day. Your presence will mean a lot to us.
        </p>
      </div>
    </section>
  );
}

export default Hero;
