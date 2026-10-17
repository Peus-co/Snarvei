import ShinyText from './ShinyText';
import RippleDistortion from './RippleDistortion';
import Header from './Header';
import FolderFloat from './FolderFloat';

function HeroText({
  text,
  color = '#F5F5F5',
  shineColor = '#8dff23',
  speed = 3,
  delay = 0,
  shineWidth = 35,
  softness = 0.8,
}) {
  return (
    <ShinyText
      text={text}
      color={color}
      shineColor={shineColor}
      speed={speed}
      shineWidth={shineWidth}
      softness={softness}
      trigger="loop"
      delay={delay}
      angle={120}
      bands={1}
      glow={0}
      direction="left"
      easing="smooth"
      yoyo={false}
      followPointer={false}
      pauseOnHover={false}
      disabled={false}
    />
  );
}

const goJoin = type => e => {
  e.preventDefault();
  window.dispatchEvent(new CustomEvent('snarvei:audience', { detail: type }));
  document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' });
};

export default function Hero() {
  const folderItems = [
  'Only 1,000 exclusive freelancer spots',
  'Curated talent, not an open marketplace',
  'Tech, AI, design & creative professionals',
  'A better way for businesses to find top talent'
]
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-[#000]"
    >
      <style>{`
        .glass-button {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 52px;
          padding: 14px 28px;
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 14px;
          color: white;
          text-decoration: none;
          overflow: hidden;
          isolation: isolate;
          transition:
            transform 0.3s ease,
            background 0.3s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .glass-button::before {
          content: '';
          position: absolute;
          z-index: -1;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.9),
            transparent
          );
          pointer-events: none;
        }

        .glass-business {
          background: rgba(185, 245, 102, 0.12);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-color: rgba(185, 245, 102, 0.45);
          box-shadow:
            0 8px 32px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .glass-freelancer {
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .glass-business:hover {
          transform: translateY(-3px);
          background: rgba(185, 245, 102, 0.2);
          border-color: rgba(185, 245, 102, 0.8);
          box-shadow: 0 12px 36px rgba(185, 245, 102, 0.1);
        }

        .glass-freelancer:hover {
          transform: translateY(-3px);
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.45);
        }

        .glass-button:focus-visible {
          outline: 2px solid #B9F566;
          outline-offset: 4px;
        }

        @media (prefers-reduced-motion: reduce) {
          .glass-button {
            transition: none;
          }

          .glass-button:hover {
            transform: none;
          }
        }
      `}</style>

      {/* Interactive background */}
      <div className="absolute inset-2 z-0 overflow-hidden rounded-md sm:inset-6 md:inset-10">
        <RippleDistortion
          src="/hero.jpg"
          brushSize={150}
          strength={0.2}
          swirl={1}
          rings={4}
          grayscale
          spread={5}
          fade={3}
          spacing={15}
          dispersion={0}
          glint={0}
          tint="#B9F566"
          tintAmount={0.1}
          highlightColor="#ffffff"
          trigger="hover"
          clickStrength={2}
          quality="low"
          enabled
        />
      </div>

      {/* Dark overlay */}
      <div className="pointer-events-none absolute inset-2 z-[1] overflow-hidden rounded-md border border-white/30 bg-black/45 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(255,255,255,0.1)] sm:inset-6 md:inset-10">
        <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
        <span className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-white/80 via-transparent to-white/30" />
      </div>

      {/* Navbar */}
      <div className="fixed inset-x-0 top-0 z-50">
        <Header />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-5 pb-36 pt-32 text-center sm:px-6 sm:pb-32">
        <div className="mx-auto max-w-5xl">
          {/* Eyebrow */}
          <div className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] sm:text-sm">
            <HeroText
              text="A BETTER WAY TO FIND TALENT"
              color="#B9F566"
              shineColor="#FFFFFF"
            />
          </div>

          {/* Main headline */}
          <h1 className="text-4xl font-semibold leading-[1.15] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="block">
              <HeroText
                text="Exceptional talent."
                color="#F5F5F5"
              />
            </span>

            <span className="mt-3 block">
              <HeroText
                text="Without the endless search."
                color="#B9F566"
                delay={0.5}
              />
            </span>
          </h1>

          {/* Description */}
          <div className="mx-auto mt-7 max-w-2xl text-base leading-7 sm:text-lg ">
            <HeroText
              text="Discover independent professionals in software development, AI, data, design, writing, and video. Find the right people for your next big idea."
              color="#D4D4D8"
              shineColor="#FFFFFF"
              speed={4}
              delay={1}
              shineWidth={25}
              softness={0.9}
            />
          </div>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#join"
              onClick={goJoin('business')}
              className="glass-button glass-business font-semibold"
            >
              <HeroText
                text="Find Your Talent ↗"
                color="#FFFFFF"
                shineColor="#B9F566"
                shineWidth={30}
              />
            </a>

            <a
              href="#join"
              onClick={goJoin('freelancer')}
              className="glass-button glass-freelancer font-semibold"
            >
              <HeroText
                text="Join as a Freelancer"
                color="#F5F5F5"
                shineWidth={30}
                delay={0.5}
              />
            </a>
          </div>

          {/* Categories */}
          <div className="mt-12 text-[10px] font-medium tracking-[0.15em] sm:text-xs sm:tracking-[0.18em]">
            <HeroText
              text="SOFTWARE DEVELOPMENT · AI · DATA · DESIGN · WRITING · VIDEO"
              color="#D4D4D8"
              shineColor="#B9F566"
              speed={3}
              shineWidth={25}
              softness={0.9}
            />
          </div>
        </div>
   



      </div>

      {/* Floating folder */}
      <div className="absolute bottom-6 right-6 z-20 origin-bottom-right scale-90 sm:bottom-12 sm:right-12 sm:scale-100 md:bottom-16 md:right-16">
        <FolderFloat
          items={folderItems}
          label="Press To see"
          sublabel="4 notes for you"
          trigger="hover"
          closeOnSelect
          physics
          drift={0.5}
          onSelect={(value, index) => {
            console.log('Folder item selected:', value, index);
          }}
          folderColor="#a5ff69"
          frontColor="#121213"
          paperColor="#0e0d0d"
          itemColor="#131111"
          itemTextColor="#c9cfca"
          labelColor="#e7d8d8"
          width={140}
          height={100}
          radius={14}
          spread={180}
          lift={26}
          tilt={8}
          flapAngle={34}
          restAngle={16}
          openDuration={520}
          stagger={45}
          bounce={0.3}
        />
      </div>
    </section>
  );
}