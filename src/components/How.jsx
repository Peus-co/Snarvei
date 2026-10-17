import BorderGlow from './BorderGlow';
import {
  Login01Icon,
  RegisterIcon,
  Rocket01Icon,
  ServerStack01Icon,
  Settings02Icon,
  WorkIcon,
} from '@hugeicons/core-free-icons';

import BranchedMenu from './BranchedMenu';
import LaserFlow from './LaserFlow';

const businessSteps = [
  {
    value: 'register-business',
    label: 'Create your business account',
    icon: RegisterIcon,
  },
  {
    value: 'define-project',
    label: 'Describe your project and skills needed',
    icon: Settings02Icon,
  },
  {
    value: 'find-talent',
    label: 'Discover suitable professionals',
    icon: ServerStack01Icon,
  },
  {
    value: 'start-project',
    label: 'Connect and start working',
    icon: Rocket01Icon,
  },
];

const freelancerSteps = [
  {
    value: 'apply',
    label: 'Apply to join Snarvei',
    icon: Login01Icon,
  },
  {
    value: 'share-skills',
    label: 'Showcase your skills and expertise',
    icon: WorkIcon,
  },
  {
    value: 'get-selected',
    label: 'Complete the selection process',
    icon: Settings02Icon,
  },
  {
    value: 'find-work',
    label: 'Get matched with relevant opportunities',
    icon: Rocket01Icon,
  },
];

function ProcessCard({
  title,
  subtitle,
  steps,
  accentColor,
  defaultActive,
}) {
  return (
    <div className="relative min-w-0 overflow-hidden rounded-2xl border border-white/20 bg-white/[0.02] p-6 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.4)] transition-colors duration-300 hover:border-white/35 sm:p-8">
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
      <span className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-white/70 via-transparent to-white/20" />
      <div className="mb-6">
        <span
          className="mb-3 inline-block rounded-full border px-3 py-1 text-xs font-medium"
          style={{
            color: accentColor,
            borderColor: `${accentColor}50`,
            backgroundColor: `${accentColor}10`,
          }}
        >
          {title}
        </span>

        <h3 className="text-xl font-semibold text-white sm:text-2xl">
          {subtitle}
        </h3>
      </div>

      <BranchedMenu
        items={[
          {
            label: 'For You',
            children: steps,
          },
        ]}
        defaultOpen={[0]}
        defaultActive={defaultActive}
        onSelect={(value) => console.log(`${title}:`, value)}
        color="#E5E5E5"
        accentColor={accentColor}
        lineColor="#3F3F46"
        width="100%"
        rowHeight={48}
        indent={28}
        trunk={14}
        radius={10}
        lineWidth={1.5}
        fontSize={14}
        drawDuration={400}
        foldDuration={300}
      />

     
    </div>
  );
}

export default function How() {
  return (
    <section
      id="how-it-works"
      className="relative isolate w-full overflow-hidden px-4 py-16 text-white sm:px-6 sm:py-20 md:py-28 lg:py-32"
    >
        
      {/* Animated background (framed, same as Business) */}
      <div className="pointer-events-none absolute inset-2 -z-20 overflow-hidden rounded-md border sm:inset-6 md:inset-10">
        <div className="absolute inset-0 opacity-60">
          <LaserFlow
            color="#a9ff38"
            beamPosition={0.6}
            surfaceLevel={1}
            intensity={1.8}
            beamWidth={1.5}
            flare={1.5}
            spread={1.5}
            fog={0.2}
            dust={1.6}
            streaks={1.5}
            dots={1}
            pulse={1.5}
            speed={1.5}
            seed={3}
            mouseInteraction={false}
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative mx-auto max-w-6xl px-2 sm:px-4 md:px-0">
        {/* Section heading */}
       
        <div className="mb-12 text-center md:mb-16">
        
          <h2 className="text-3xl text-[#a9ff38] font-bold tracking-tight sm:text-5xl md:text-6xl">
            How Snarvei Works
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-neutral-400 sm:text-base">
            Two sides. One focused network. Whether you need exceptional
            talent or want to work on meaningful projects, here is how to get
            started.
          </p>
        </div>

        {/* Side-by-side journeys */}
         <BorderGlow
          edgeSensitivity={30}
          glowColor="185 245 102"
          backgroundColor="rgba(255,255,255,0.02)"
          className="backdrop-blur-xl"
          borderRadius={24}
          glowRadius={35}
          glowIntensity={0.7}
          coneSpread={25}
          animated={false}
          colors={['#6bb602', '#102c00', '#9938fa']}
        >
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 md:gap-8">
          <ProcessCard
            title="For Businesses"
            subtitle="Find the right talent."
            steps={businessSteps}
            accentColor="#B9F566"
            defaultActive="find-talent"
          />
 
          <ProcessCard
            title="For Freelancers"
            subtitle="Build your next opportunity."
            steps={freelancerSteps}
            accentColor="#C4B5FD"
            defaultActive="share-skills"
          />
        </div>
</BorderGlow>
        {/* Bottom note */}
        <p className="mt-8 text-center text-xs leading-6 text-neutral-500">
          A clearer path from finding talent to getting work done.
        </p>
      </div>
     
    </section>
  );
}