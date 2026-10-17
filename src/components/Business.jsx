import { useEffect, useState } from 'react';
import FloatingLines from './FloatingLines';
import JellyRadio from './JellyRadio';
import BellToggle from './BellToggle';

// Loads CometDial only if the file exists, so a missing file can't blank the site.
const dials = import.meta.glob('./CometDial.jsx', { eager: true });
const CometDial = dials['./CometDial.jsx']?.default;

const TOTAL_SPOTS = 1000;
const SPOTS_TAKEN = 341; // update this with your real freelancer sign-up count

const levelOptions = [
  { value: 'Low', label: 'Low' },
  { value: 'Medium', label: 'Medium' },
  { value: 'High', label: 'High' },
];

const LINE_COLORS = ['#77f545', '#36373a', '#bcdb94'];

function Business() {
  const [email, setEmail] = useState('');
  const [audience, setAudience] = useState('business');
  const [level, setLevel] = useState('Medium');
  const [isNotified, setIsNotified] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error | invalid

  // Lets the Hero buttons pick Business / Freelancer before scrolling here
  useEffect(() => {
    const onPick = e => setAudience(e.detail === 'freelancer' ? 'freelancer' : 'business');
    window.addEventListener('snarvei:audience', onPick);
    return () => window.removeEventListener('snarvei:audience', onPick);
  }, []);

  const handleNotify = async () => {
    if (isNotified || status === 'sending') return;

    if (!email.trim() || !email.includes('@')) {
      setStatus('invalid');
      return;
    }

    setStatus('sending');
    setIsNotified(true); // starts the bell animation immediately

    try {
      const res = await fetch('https://formsubmit.co/ajax/hello@snarvei.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Snarvei Early Access — ${audience === 'business' ? 'Business' : 'Freelancer'}`,
          _template: 'table',
          email,
          role: audience,
          ...(audience === 'business' && { talent_level: level }),
        }),
      });
      if (!res.ok) throw new Error('send failed');
      setStatus('sent');
    } catch {
      setIsNotified(false);
      setStatus('error');
    }
  };

  return (
    <section
      id="join"
      className="relative isolate w-full overflow-hidden px-4 py-16 sm:px-6 sm:py-20 md:py-28 lg:py-32"
    >
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-2 -z-20 overflow-hidden rounded-md border sm:inset-6 md:inset-10">
        <div className="absolute inset-0 opacity-40">
        <FloatingLines
          linesGradient={LINE_COLORS}
          animationSpeed={1}
          interactive={false}
          bendRadius={5}
          bendStrength={-0.5}
          mouseDamping={0.05}
          parallax
          parallaxStrength={0.2}
        />
      </div>

      {/* Dark overlay (inside the frame) */}
        <div className="absolute inset-0 bg-black/65" />
      </div>

      <div className="relative mx-auto max-w-5xl px-2 sm:px-4 md:px-0">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-lime-300">
            Early Access
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Be part of something
            <span className="text-lime-300"> more selective.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-neutral-400">
            Snarvei is building a curated network for exceptional
            independent professionals and the businesses looking
            for them. Join the list for launch updates.
          </p>
        </div>

        {/* Signup card */}
        <div className="relative mx-auto max-w-xl overflow-hidden rounded-3xl border border-white/30 bg-white/5 p-6 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(255,255,255,0.1)] sm:p-10">
          {/* Glass shine */}
          <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
          <span className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-white/80 via-transparent to-white/30" />
          {audience === 'freelancer' && CometDial && (
            <div className="mb-6 flex flex-col items-center text-center">
              <CometDial
                defaultValue={Math.round((SPOTS_TAKEN / TOTAL_SPOTS) * 100)}
                min={0}
                max={100}
                step={1}
                unit="percent"
                label="Spots filled"
                accent="#B9F566"
                ink="#fdfdfd"
                size={170}
                sweep={320}
                thickness={5}
                speed={25}
                tapBounce={0.2}
                flickBounce={0.1}
                momentum={1}
                cometReach={180}
                cometWidth={12}
                disabled
              />
              <p className="mt-2 text-sm text-neutral-300">
                <span className="font-semibold text-lime-300">{SPOTS_TAKEN}</span> of{' '}
                {TOTAL_SPOTS.toLocaleString()} freelancer spots taken
              </p>
            </div>
          )}

          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleNotify();
            }}
            className="flex flex-col gap-6"
          >
            <div>
              <label className="mb-3 block text-sm font-medium text-white">
                I'm joining as a...
              </label>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setAudience('business')}
                  className={`rounded-xl border px-4 py-4 text-sm font-semibold transition ${
                    audience === 'business'
                      ? 'border-lime-300 bg-lime-300/10 text-lime-300'
                      : 'border-white/20 bg-white/5 text-neutral-300 backdrop-blur-md hover:border-white/40'
                  }`}
                >
                  Business
                </button>

                <button
                  type="button"
                  onClick={() => setAudience('freelancer')}
                  className={`rounded-xl border px-4 py-4 text-sm font-semibold transition ${
                    audience === 'freelancer'
                      ? 'border-lime-300 bg-lime-300/10 text-lime-300'
                      : 'border-white/20 bg-white/5 text-neutral-300 backdrop-blur-md hover:border-white/40'
                  }`}
                >
                  Freelancer
                </button>
              </div>
            </div>

            <div>
              <label
                htmlFor="early-access-email"
                className="mb-2 block text-sm font-medium text-white"
              >
                Email address
              </label>

              <input
                id="early-access-email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setIsNotified(false);
                  setStatus('idle');
                }}
                className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-neutral-500 focus:border-lime-300 focus:ring-2 focus:ring-lime-300/20"
              />
            </div>

            {audience === 'business' && (
              <div>
                <label className="mb-3 block text-sm font-medium text-white">
                  What level of talent are you looking for?
                </label>

                <JellyRadio
                  items={levelOptions}
                  defaultValue="Medium"
                  onChange={(value) => setLevel(value)}
                  chipColor="#27272a"
                  activeColor="#B9F566"
                  textColor="#f5f5f5"
                  activeTextColor="#18181b"
                  size="md"
                  gap={8}
                  radius={18}
                  swell={0.2}
                  barge={6}
                  shrink={0.05}
                  jelly={1}
                  bounce={0.25}
                  stagger={22}
                  stiffness={580}
                />
              </div>
            )}

            <div
              className={`flex w-full items-center justify-center rounded-2xl bg-lime-300 px-6 py-6 text-lg font-semibold text-black transition-all duration-500 hover:bg-lime-200 ${
                isNotified
                  ? 'scale-[1.04] shadow-[0_0_45px_rgba(185,245,102,0.55)]'
                  : 'scale-100'
              }`}
            >
              <BellToggle
                offLabel="Join the Waitlist"
                onLabel="Sent! We'll be in touch"
                color="#18181b"
                background="#B9F566"
                onColor="#18181b"
                onBackground="#B9F566"
                size="lg"
                radius={22}
                ringAmplitude={18}
                ringPasses={5}
                ringDuration={820}
                count={0}
                badge={false}
                waves
                clapper
                pressed={isNotified}
                onChange={() => handleNotify()}
              />
            </div>

            <p
              role="status"
              className={`text-center text-xs leading-5 ${
                status === 'sent'
                  ? 'text-lime-300'
                  : status === 'error' || status === 'invalid'
                  ? 'text-red-400'
                  : 'text-neutral-500'
              }`}
            >
              {status === 'sent' && "You're on the list! We'll email you when early access opens."}
              {status === 'invalid' && 'Please enter a valid email address.'}
              {status === 'error' && 'Something went wrong. Please try again.'}
              {(status === 'idle' || status === 'sending') &&
                'Early access updates only. Snarvei is still being built.'}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Business;