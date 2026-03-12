import { motion } from "framer-motion";

const timelineEvents = [
  {
    year: "2026",
    title: "Khởi đầu",
    description: "Ngày đầu tiên chúng ta nói chuyện, mọi thứ bắt đầu từ một tin nhắn nhỏ.",
  },
  {
    year: "2026",
    title: "Gắn kết",
    description: "Những chuyến đi, những lần giận hờn, rồi lại hiểu nhau hơn.",
  },
  {
    year: "Hiện tại",
    title: "Bên nhau",
    description: "Cùng nhau đón thêm một ngày 8/3 thật ý nghĩa.",
  },
  {
    year: "Tương lai",
    title: "Lời hứa",
    description: "Sẽ luôn nắm tay em đi qua mọi thăng trầm của cuộc sống.",
  },
];

export function Timeline() {
  return (
    <section className="relative py-32 bg-slate-950 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl text-center text-pink-200 mb-24"
        >
          Hành trình của chúng ta
        </motion.h2>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 md:-translate-x-1/2" />
          
          {timelineEvents.map((event, index) => (
            <TimelineItem key={index} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ event, index }: { event: any; index: number; key?: string | number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`mb-16 relative flex items-center justify-between w-full ${
        isEven ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      {/* Empty space for one side */}
      <div className="hidden md:block md:w-5/12" />

      {/* Dot */}
      <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-pink-500 rounded-full shadow-[0_0_10px_rgba(244,114,182,0.8)] -translate-x-[5px] md:-translate-x-1/2" />

      {/* Content Card */}
      <div
        className={`ml-12 md:ml-0 flex-1 md:flex-none md:w-5/12 p-6 rounded-2xl bg-slate-900/50 backdrop-blur-md border border-slate-800 hover:border-pink-500/30 transition-colors ${
          isEven ? "md:text-right" : "md:text-left"
        }`}
      >
        <span className="text-pink-400 font-mono text-sm tracking-widest mb-2 block">
          {event.year}
        </span>
        <h3 className="font-serif text-2xl text-slate-200 mb-3">{event.title}</h3>
        <p className="text-slate-400 font-light leading-relaxed">
          {event.description}
        </p>
      </div>
    </motion.div>
  );
}
