import PatternWaves from './PatternWaves';
import GlassIcons from './GlassIcons';

// TODO: put your real names and links here
const FOUNDER = 'Piyush Shukla';
const DEVELOPER = 'Piyush & Kendall Norv(co-CEO)';

const svg = { width: 24, height: 24, viewBox: '0 0 24 24', 'aria-hidden': true };
const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };

const Github = (
  <svg {...svg} fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" /></svg>
);
const Instagram = (
  <svg {...svg} {...stroke}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
);
const Facebook = (
  <svg {...svg} fill="currentColor"><path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.8c0-.9.3-1.5 1.6-1.5h1.7V3.4c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2v2.3H7.5V13h2.8v8h3.2Z" /></svg>
);
const Mail = (
  <svg {...svg} {...stroke}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
);
const Youtube = (
  <svg {...svg} {...stroke}><rect x="2.5" y="5" width="19" height="14" rx="4" /><path d="M10 9.5v5l4.5-2.5-4.5-2.5Z" fill="currentColor" /></svg>
);

const socials = [
  
  { icon: Instagram, color: 'purple', label: 'Instagram', href: 'https://instagram.com/' },
  { icon: Facebook, color: 'blue', label: 'Facebook', href: 'https://facebook.com/' },
  { icon: Mail, color: 'green', label: 'Mail', href: 'mailto:hello@snarvei.com' },
  { icon: Youtube, color: 'red', label: 'YouTube',  href: 'https://youtube.com/' },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative isolate w-full overflow-hidden px-4 py-16 text-white sm:px-6 sm:py-20 md:py-24"
    >
      {/* Animated background (framed, same as Business) */}
      <div className="pointer-events-none absolute inset-2 -z-20 overflow-hidden rounded-md border sm:inset-6 md:inset-10">
        <div className="absolute inset-0 opacity-60">
          <PatternWaves
            color="#81f101"
            backgroundColor="#202020"
            pattern="dot"
            wave="silk"
            characters=".:-=+*#%@"
            spacing={9}
            markSize={0.95}
            depth={0.95}
            light={0}
            shine={0.8}
            contrast={1.2}
            speed={0.35}
            scale={1}
            direction={20}
            fade="edges"
            fadeSize={0.5}
            opacity={1}
            interactive
            cursorSize={50}
            cursorStrength={0.6}
            intro
            paused={false}
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative mx-auto max-w-5xl px-2 sm:px-4 md:px-0">
        {/* Brand */}
        <div className="text-center">
          <a href="/" className="inline-flex items-center gap-1 text-3xl font-bold tracking-tight text-white">
            <img src="/logo.svg" alt="" width="36" height="37" />
            <span>SNARVEI</span>
          </a>
          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-neutral-400">
            A curated network connecting businesses with exceptional independent professionals.
          </p>
        </div>

        {/* Social icons */}
        <div style={{ height: '190px', position: 'relative' }} className="mt-6">
          <GlassIcons
            items={socials}
            size={60}
            gap={18}
            columns={5}
            roundness={0.6}
            refraction={0.8}
            bevel={0.6}
            dispersion={0}
            frost={0.2}
            shine={0.85}
            tint="#dfdfdf"
            tintOpacity={0.2}
            iconColor="#ffffff"
            plate="tilt"
            tilt={30}
            spread={0.5}
            hover="press"
            parallax={1}
            labels="hover"
            intro
            theme="dark"
          />
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-white/15 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-center text-xs text-neutral-400 md:flex-row md:text-left">
            <p>
              Founder: <span className="font-medium text-lime-300">{FOUNDER}</span>
              <span className="mx-2 text-neutral-600">•</span>
              Developer: <span className="font-medium text-lime-300">{DEVELOPER}</span>
            </p>

            <div className="flex items-center gap-4">
              <a href="#privacy" className="transition-colors hover:text-lime-300">
                Privacy Policy↗
              </a>
              <a href="#terms" className="transition-colors hover:text-lime-300">
                Terms &amp; Conditions↗
              </a>
              <a href="#terms" className="transition-colors hover:text-lime-300">
                Support Snarvei↗
              </a>
            </div>
          </div>

          <p className="mt-4 text-center text-xs text-neutral-500">
            © {new Date().getFullYear()} Snarvei. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}