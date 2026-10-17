// Loads SideRays only if the file exists, so a missing file can't blank the whole site.
const rays = import.meta.glob('./SideRays.jsx', { eager: true });
const SideRays = rays['./SideRays.jsx']?.default;

const categories = [
  {
    title: 'Web Development',
    text: 'Frontend, backend and full-stack builders who ship fast, clean and scalable websites and web apps.',
    tags: ['React', 'Node.js', 'Full-stack'],
    span: 'lg:col-span-2',
  },
  {
    title: 'AI Development',
    text: 'Engineers building models, agents and AI-powered products.',
    tags: ['LLMs', 'Automation'],
  },
  {
    title: 'Ethical Security',
    text: 'Ethical hackers and security experts who find weak spots before attackers do.',
    tags: ['Pen testing', 'Audits'],
  },
  {
    title: 'Animation',
    text: 'Motion designers who bring brands and products to life.',
    tags: ['2D', '3D', 'Motion'],
  },
  {
    title: 'Graphic Design',
    text: 'Designers crafting logos, brands, interfaces and visuals.',
    tags: ['Branding', 'UI'],
  },
  {
    title: 'Video Editing',
    text: 'Editors who turn raw footage into sharp, engaging stories for any platform.',
    tags: ['Reels', 'YouTube', 'Ads'],
    span: 'lg:col-span-2',
  },
  {
    title: 'Software Development',
    text: 'Specialists in desktop, mobile and systems software, from first prototype to production-ready product.',
    tags: ['Desktop', 'Mobile', 'Systems', 'APIs'],
    span: 'sm:col-span-2 lg:col-span-4',
  },
];

function CategoryCard({ index, title, text, tags, span = '' }) {
  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      onMouseMove={handleMove}
      className={`group relative flex min-h-[200px] flex-col justify-between overflow-hidden rounded-2xl border border-white/20 bg-white/[0.03] p-6 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.4)] transition-colors duration-300 hover:border-lime-300/50 sm:p-7 ${span}`}
    >
      {/* Glass shine */}
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
      <span className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-white/70 via-transparent to-white/20" />

      {/* Cursor spotlight */}
      <span
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(260px circle at var(--x, 50%) var(--y, 50%), rgba(185,245,102,0.18), transparent 70%)',
        }}
      />

      <div className="relative">
        <span className="text-xs font-semibold tracking-[0.25em] text-lime-300">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className="mt-3 text-xl font-semibold text-white sm:text-2xl">{title}</h3>
        <p className="mt-2 max-w-md text-sm leading-6 text-neutral-300">{text}</p>
      </div>

      <div className="relative mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-lime-300/25 bg-lime-300/5 px-3 py-1 text-xs font-medium text-lime-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Categories() {
  return (
    <section
      id="categories"
      className="relative isolate w-full overflow-hidden px-4 py-16 text-white sm:px-6 sm:py-20 md:py-28 lg:py-32"
    >
      {/* Animated background (framed, same as the other sections) */}
      <div className="pointer-events-none absolute inset-2 -z-20 overflow-hidden rounded-md border sm:inset-6 md:inset-10">
        <div className="absolute inset-0 opacity-60">
          {SideRays && (
            <SideRays
              rayColor1="#B9F566"
              rayColor2="#B9F566"
              origin="top-right"
              speed={2.5}
              intensity={2}
              spread={2}
              tilt={0}
              saturation={1.5}
              blend={0.75}
              falloff={1.6}
              opacity={1}
            />
          )}
        </div>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative mx-auto max-w-6xl px-2 sm:px-4 md:px-0">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-lime-300 sm:text-sm">
            Categories
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Find talent by <span className="text-lime-300">skill.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-neutral-400 sm:text-base">
            Snarvei focuses on a handful of fields, so every freelancer you meet is a real specialist.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <CategoryCard key={c.title} index={i} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
