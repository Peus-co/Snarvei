import CardNav from './CardNav';
import logo from '/logo.svg';

export default function Header() {
  const items = [
    {
      label: 'Discover',
      bgColor: '#2b2b2c00',
      textColor: '#fff',
      links: [
        { label: 'Browse Talent', href: '#categories', ariaLabel: 'Browse freelancers' },
        { label: 'Categories', href: '#categories', ariaLabel: 'Explore skill categories' },
      ],
    },
    {
      label: 'For Freelancers',
      bgColor: '#1b172205',
      textColor: '#fff',
      links: [
        { label: 'Join Snarvei', href: '#join', ariaLabel: 'Join as a freelancer' },
        { label: 'How It Works', href: '#how-it-works', ariaLabel: 'How Snarvei works' },
      ],
    },
    {
      label: 'About',
      bgColor: '#2f293a00',
      textColor: '#fff',
      links: [
        { label: 'Our Mission', href: '#about', ariaLabel: 'About Snarvei' },
        { label: 'Contact', href: '#footer', ariaLabel: 'Contact Snarvei' },
      ],
    },
  ];

  return (
    <CardNav
      logo={
        <span className="inline-flex items-center p-3 font-bold tracking-tight">
          <img
            src={logo}
            alt=""
            className="h-8 w-8 p-5 object-contain"
          />
          <span className="-ml-0.5 text-2xl flex  text-white">
            SNARVEI
          </span>
        </span>
      }
      logoAlt="Snarvei"
      items={items}
      baseColor="#15151F"
      menuColor="#F5F3FF"
      buttonBgColor="#9df510"
      buttonTextColor="#FFFFFF"
      ease="power3.out"
      theme="dark"
    />
  );
}