interface BlogCardProps {
  title: string;
  readingTime: string;
  publishDate: string;
  category: string;
}

export default function BlogCard({ title, readingTime, publishDate, category }: BlogCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-300/50 hover:shadow-[0_0_30px_rgba(167,139,250,0.2)]">
      <p className="mb-4 text-xs uppercase tracking-[0.2em] text-violet-200">{category}</p>
      <h3 className="mb-5 text-lg font-semibold text-slate-100">{title}</h3>
      <div className="flex items-center justify-between text-xs text-slate-400">
        <span>{readingTime}</span>
        <span>{publishDate}</span>
      </div>
    </article>
  );
}
