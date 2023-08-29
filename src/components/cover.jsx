import { Mail, Heart } from "lucide-react";

function Cover({ isOpen, onOpen }) {
  return (
    <>
      <div className="w-[calc(100%-500px)] hidden lg:block">
        <div className="hidden lg:block fixed top-0 left-0 w-[calc(100%-500px)] h-full bg-cover-invitation bg-no-repeat bg-cover bg-center border-r-[8px] border-r-black/25 p-10 text-primary isolate after:content-[''] after:block after:absolute after:inset-0 after:w-full after:h-full after:bg-secondary/30">
          <p className="tracking-widest text-lg">THE WEDDING OF</p>
          <h2 className="font-heading tracking-wider text-7xl py-8">Nailal & Via</h2>
          <blockquote className="block max-w-[500px] italic font-light">
            <p>And I knew exactly how old Walt Disney’s Cinderella felt when she found her prince.</p>
            <cite>— Elizabeth Young</cite>
          </blockquote>
        </div>
      </div>

      {!isOpen && (
        <div className="flex-shrink-0 w-full max-w-[500px] lg:w-[500px] min-h-screen supports-[min-height:100dvh]:min-h-[100dvh] shadow-2xl lg:shadow-none">
          <div className="min-h-[90vh] supports-[min-height:90dvh]:min-h-[90dvh] bg-cover-invitation bg-no-repeat bg-cover bg-center relative isolate after:content-[''] after:block after:absolute after:inset-0 after:w-full after:h-full after:bg-indigo-200/30 z-[-1px]">
            <div className="container pt-[10%] text-white flex flex-col items-center gap-y-3 relative z-10">
              <img src="/assets/images/logo.svg" alt="Wedding logo" />
              <p className="uppercase">The Wedding of</p>
              <h2 className="font-heading text-4xl font-bold">Nailal and Via</h2>
            </div>
            <div className="absolute bottom-20 left-0 w-full z-10 px4">
              <button
                onClick={onOpen}
                className="flex items-center gap-2 h-9 px-4 py-2 rounded-full bg-indigo-300/70 text-white font-medium capitalize hover:bg-slate-900/70 transition duration-150 animate-zoom mx-auto"
              >
                <Mail className="w-5 h-5" />
                Open Invitation
              </button>
            </div>
          </div>
          <div className="bg-secondary text-white p-4 pb-5 relative after:content-[''] after:block after:absolute after:bottom-full after:left-0 after:w-full after:min-h-[48px] after:bg-wave-pattern">
            <div className="flex items-center justify-center gap-2 font-medium">
              <p>Created with</p>
              <Heart className="w-4 h-4 fill-current" />
              <a href="">by Invitato</a>
            </div>
            <p className="text-sm text-center font-medium">&copy; 2023 Nailal & Via. All Rights Reserved</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Cover;
