const A = '/assets/';

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'wedding', label: 'Wedding' },
  { id: 'pre-wedding', label: 'Pre-Wedding' },
  { id: 'engagement', label: 'Engagement' },
  { id: 'baby-shower', label: 'Baby Shower' },
  { id: 'haldi', label: 'Haldi' },
  { id: 'reception', label: 'Reception' },
  { id: 'wedding-films', label: 'Wedding Films' },
];

export const featuredStory = {
  couple: 'Aahana & Ved',
  location: 'Udaipur',
  summary:
    'A palace celebration where tradition met cinematic romance — golden light, royal architecture, and moments that felt like a dream.',
  image: `${A}heritage-stair-portrait.webp`,
  alt: 'Aahana and Ved at their Udaipur palace wedding',
};

export const weddingGallery = [
  { src: `${A}wedding-1.png`, alt: 'Wedding moment 1', size: 'tall', tag: 'Bridal Portrait' },
  { src: `${A}wedding-2.png`, alt: 'Wedding moment 2', size: 'wide', tag: 'Couple Portrait' },
  { src: `${A}wedding-3.png`, alt: 'Wedding moment 3', size: 'square', tag: 'Ceremony' },
  { src: `${A}wedding-4.png`, alt: 'Wedding moment 4', size: 'tall', tag: 'Bridal Portrait' },
  { src: `${A}wedding-5.png`, alt: 'Wedding moment 5', size: 'square', tag: 'Details' },
  { src: `${A}wedding-6.png`, alt: 'Wedding moment 6', size: 'wide', tag: 'Family Moment' },
  { src: `${A}wedding-7.png`, alt: 'Wedding moment 7', size: 'tall', tag: 'Ceremony' },
  { src: `${A}wedding-8.png`, alt: 'Wedding moment 8', size: 'square', tag: 'Details' },
];

export const preWeddingGallery = {
  hero: { src: `${A}pre-wedding-1.png`, alt: 'Pre-wedding couple' },
  side: [
    { src: `${A}pre-wedding-2.png`, alt: 'Romantic pre-wedding moment' },
    { src: `${A}pre-wedding-3.png`, alt: 'Pre-wedding portrait' },
  ],
};

export const engagementGallery = [
  { src: `${A}engagement-1.png`, alt: 'Engagement couple portrait', span: 'large' },
  { src: `${A}engagement-2.png`, alt: 'Engagement ceremony moment', span: 'medium' },
];

export const babyShowerGallery = {
  hero: { src: `${A}baby-shower-1.png`, alt: 'Warm baby shower celebration' },
  images: [
    { src: `${A}baby-shower-2.png`, alt: 'Joyful family portrait' },
    { src: `${A}baby-shower-3.png`, alt: 'Baby shower setup details' },
  ],
};

export const haldiGallery = [
  { src: `${A}haldi-1.png`, alt: 'Joyful haldi laughter', size: 'hero' },
  { src: `${A}haldi-2.webp`, alt: 'Haldi ritual colors', size: 'medium' },
];

export const receptionGallery = [
  { src: `${A}reception-1.png`, alt: 'Couple reception entry', tag: 'Grand Entry' },
  { src: `${A}reception-2.png`, alt: 'Romantic reception portrait', tag: 'Romance' },
  { src: `${A}reception-3.png`, alt: 'Reception decor atmosphere', tag: 'Decor' },
  { src: `${A}reception-4.png`, alt: 'Dance floor celebration', tag: 'Celebration' },
  { src: `${A}reception-5.png`, alt: 'Reception entry visual', tag: 'Grand Entry' },
  { src: `${A}reception-6.png`, alt: 'Reception couple romance', tag: 'Romance' },
  { src: `${A}reception-7.png`, alt: 'Reception layout decor', tag: 'Decor' },
  { src: `${A}reception-8.webp`, alt: 'Reception visual celebration', tag: 'Celebration' },
];

export const destinations = [
  { name: 'Udaipur', country: 'Rajasthan', image: `${A}heritage-stair-portrait.webp` },
  { name: 'Jaipur', country: 'Rajasthan', image: `${A}royal-bride-window.png` },
  { name: 'Goa', country: 'India', image: `${A}pre-wedding-beach.png` },
  { name: 'Bali', country: 'Indonesia', image: `${A}heritage-couple-portrait.png` },
  { name: 'Lake Como', country: 'Italy', image: `${A}bridal-window-red.webp` },
  { name: 'Dubai', country: 'UAE', image: `${A}reception-walk.jpeg` },
];

export const weddingFilms = [
  {
    title: 'Nidhi & Karan',
    location: 'Lake Como, Italy',
    poster: `${A}wedding-2.png`,
    video: 'https://res.cloudinary.com/dtfbshx24/video/upload/v1780663837/VN20260605_094451_hl94vc.mp4',
  },
  {
    title: 'Ananya & Rohan',
    location: 'Udaipur, India',
    poster: `${A}pre-wedding-2.png`,
    video: 'https://res.cloudinary.com/dtfbshx24/video/upload/v1780664188/VN20260605_121051_mgygjp.mp4',
  },
  {
    title: 'Meera & Arjun',
    location: 'Goa, India',
    poster: `${A}reception-3.png`,
    video: 'https://res.cloudinary.com/dtfbshx24/video/upload/v1780664701/VN20260605_094842_1_ravyrm.mp4',
  },
];

export const testimonials = [
  {
    quote: 'Every frame felt like a page from a luxury magazine. Our wedding film still gives us goosebumps.',
    couple: 'Priya & Aditya',
    location: 'Udaipur',
    image: `${A}heritage-couple-portrait.png`,
  },
  {
    quote: 'They captured the haldi chaos and the reception glamour with equal artistry. Absolutely unforgettable.',
    couple: 'Sneha & Vikram',
    location: 'Hyderabad',
    image: `${A}haldi-laughter.webp`,
  },
  {
    quote: 'From pre-wedding to reception, the storytelling was cinematic, warm, and deeply personal.',
    couple: 'Isha & Kabir',
    location: 'Jaipur',
    image: `${A}reception-walk.jpeg`,
  },
];

export const sectionIds = {
  wedding: 'portfolio-wedding',
  'pre-wedding': 'portfolio-pre-wedding',
  engagement: 'portfolio-engagement',
  'baby-shower': 'portfolio-baby-shower',
  haldi: 'portfolio-haldi',
  reception: 'portfolio-reception',
  'wedding-films': 'portfolio-films',
};
