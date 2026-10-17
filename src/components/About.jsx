import ShinyText from './ShinyText';
import SpotlightCard from './SpotlightCard';
import BorderGlow from './BorderGlow';
import AcidSquares from './AcidSquares';

function About() {
  return (
    <section
      id="about"
      className="relative isolate w-full overflow-hidden px-4 py-16 sm:px-6 sm:py-20 md:py-28 lg:py-32"
    >
      {/* Animated background (framed, smaller inset on phones) */}
      <div className="pointer-events-none absolute inset-2 -z-20 overflow-hidden rounded-md border sm:inset-6 md:inset-10">
        <AcidSquares
          color="#000"
          accentColor="#9c9c9a"
          shape="square"
          pulse={1}
          pulseSpeed={0.45}
          pulseSpacing={1}
          pulseWidth={1}
          sparkle={0.04}
          speed={0.7}
          breathe={1}
          zoom={1.3}
          depth={10}
          edges={0.45}
          twist={0}
          roll={0}
          brightness={1}
          mouseStrength={1}
          mouseRadius={0.35}
          detail="medium"
          grain={0.03}
          fade={0}
          opacity={0.35}
          mouseInteraction={false}
        />
      </div>

      {/* Dark overlay for readability */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#080808]/65" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-2 sm:gap-12 sm:px-4 md:grid-cols-2 md:gap-16 md:px-0">

        {/* Left: About Snarvei */}
        <div className="min-w-0 text-center md:text-left">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-lime-300 sm:mb-4 sm:text-sm">
            About Snarvei
          </p>

          <h2 className="mx-auto max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:mx-0 lg:text-6xl">
            Not more freelancers.{' '}
            <span className="text-lime-300">
              Better connections.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-neutral-400 sm:mt-6 md:mx-0 md:text-lg md:leading-8">
            Snarvei is building a selective network connecting
            businesses with skilled independent professionals
            across AI, software development, design, writing,
            and video editing. Less searching. Better connections.
            More meaningful work.
          </p>
        </div>

        {/* Right: Highlight Card */}
        <div className="mx-auto w-full min-w-0 max-w-md md:max-w-none">
          <BorderGlow
            edgeSensitivity={30}
            glowColor="185 245 102"
            backgroundColor="#252424"
            borderRadius={24}
            glowRadius={35}
            glowIntensity={0.7}
            coneSpread={25}
            animated={false}
            colors={['#6bb602', '#102c00', '#9938fa']}
          >
            <SpotlightCard
              className="p-6 sm:p-8 md:p-10"
              theme="dark"
              spotlightColor="#754677"
              intensity={0.2}
              spotlightSize={280}
              softness={0.7}
              shape="circle"
              borderGlow={5}
              proximity={100}
              smoothing={0.6}
              grain={0}
              ambient={false}
              flare
            >
              <span className="mb-4 inline-block rounded-full border border-lime-300/25 px-3 py-1 text-xs font-medium text-lime-300 sm:mb-5">
                A more focused network
              </span>

              <h3 className="mb-3 text-xl font-semibold text-white sm:mb-4 sm:text-2xl md:text-3xl">
                <ShinyText
                  text="Quality over quantity."
                  color="#F5F5F5"
                  shineColor="#FFFFFF"
                  speed={3}
                  shineWidth={35}
                  softness={0.8}
                  trigger="loop"
                  delay={0}
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
              </h3>

              <p className="mb-6 text-sm leading-6 text-neutral-300 sm:mb-8 sm:text-base sm:leading-7">
                A curated approach to finding relevant skills,
                building stronger connections, and creating
                opportunities for both businesses and independent
                professionals.
              </p>

              <a
                href="#categories"
                className="inline-flex w-full items-center justify-center rounded-xl bg-lime-300 px-5 py-3 font-semibold text-black transition-colors hover:bg-lime-200 sm:w-auto"
              >
                Explore the Categories
                <span className="ml-2" aria-hidden="true">
                  ↗
                </span>
              </a>
            </SpotlightCard>
          </BorderGlow>
        </div>

      </div>
    </section>
  );
}

export default About;