import { CheckCircle2 } from "lucide-react";

function Gift() {
  return (
    <section className="p-4 bg-secondary text-center text-white space-y-3 relative after:content-[''] after:block after:absolute after:left-0 after:top-0 after:w-full after:h-12 after:bg-wave-pattern after:bg-cover after:-mt-12">
      <h2 className="font-fantasy font-bold text-white text-4xl">Wedding Gift</h2>
      <p className="text-sm mt-3">For beloved ones who may want to show your sincere love by sending a gift, please kindly tap the button below:</p>
      <div className="flex flex-col items-center gap-3">
        <button className="bg-black/50 h-8 px-3 inline-flex items-center justify-center rounded-md text-sm font-medium hover:bg-black/60 transition duration-200">
          Bank Transfer
        </button>
        <button className="bg-black/50 h-8 px-3 inline-flex items-center justify-center rounded-md text-sm font-medium  hover:bg-black/60 transition duration-200">
          Send Gift
        </button>
        <button className="bg-black/50 h-8 px-3 inline-flex items-center justify-center rounded-md text-sm font-medium hover:bg-black/60 transition duration-200 animate-zoom">
          <CheckCircle2 className="w-5 h-5 mr-1 fill-white text-slate-500 stroke-2" />
          <span>Confirmation</span>
        </button>
      </div>
    </section>
  );
}

export default Gift;
