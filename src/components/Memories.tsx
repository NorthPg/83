import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const memories = [
  {
    id: 1,
    image: "/image/z7612217595117_74c06da5aa97fcb80d48fd9b3f10e15c.jpg",
    title: "Lần đầu gặp gỡ",
    description: "Một buổi đi xem phim khá nhẹ nhàng",
  },
  {
    id: 2,
    image: "/image/z7612217597476_506849938d54cf716f4a5c1fe0f7c469.jpg",
    title: "Chuyến đi đầu tiên",
    description: "Cùng nhau khám phá những vùng đất mới, tay trong tay.",
  },
  {
    id: 3,
    image: "/image/z7612217598545_76c303dd2b98179115d37caea675a999.jpg",
    title: "Sinh nhật đáng nhớ",
    description: "Mong chờ được đón sinh nhật cùng em",
  },
  {
    id: 4,
    image: "/image/z7612217618988_3f6ce5d05dce854f665f4b9b460b70a7.jpg",
    title: "Những ngày bình yên",
    description: "Chỉ cần ngồi cạnh nhau, không nói gì cũng thấy đủ đầy.",
  },
  {
    id: 5,
    image: "/image/z7612217620513_4b779e83ebc0c0ffb139ea76f7baaa3b.jpg",
    title: "Tương lai phía trước",
    description: "Sẽ còn rất nhiều trang sách mới chờ chúng ta viết tiếp.",
  },
];

export function Memories() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section id="memories" ref={targetRef} className="relative h-[300vh] bg-slate-950">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-12 px-12 md:px-32">
          {memories.map((memory) => (
            <MemoryCard key={memory.id} memory={memory} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function MemoryCard({ memory }: { memory: any; key?: string | number }) {
  return (
    <div className="group relative w-[80vw] md:w-[40vw] lg:w-[30vw] h-[60vh] md:h-[70vh] flex-shrink-0 overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl">
      <img
        src={memory.image}
        alt={memory.title}
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
      
      <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <h3 className="font-serif text-3xl text-pink-100 mb-3 drop-shadow-md">
          {memory.title}
        </h3>
        <p className="text-slate-300 text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          {memory.description}
        </p>
      </div>
    </div>
  );
}
