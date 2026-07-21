import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BadgeCheck,
  CalendarCheck,
  ChevronRight,
  CircleDollarSign,
  Clock,
  Headphones,
  HeartHandshake,
  Minus,
  PackageCheck,
  Plus,
  Save,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Users,
  WalletCards,
} from 'lucide-react';
import Navbar from './Navbar.jsx';
import './BuildYourCrew.css';

const A = '/assets/';

const heroStats = [
  ['10+', 'Years of Experience'],
  ['500+', 'Weddings Captured'],
  ['50+', 'Awards Won'],
  ['100%', 'Client Satisfaction'],
];


const processSteps = [
  ['1', 'Choose Services', 'Select what you need'],
  ['2', 'Add To Package', 'Review your selections'],
  ['3', 'Get Estimate', 'Instant budget estimate'],
  ['4', 'Book & Relax', 'We take care of the rest'],
];

const photographyServices = [
  {
    id: 'traditional-photography',
    title: 'Traditional Photography',
    price: 6000,
    image: `${A}bridal-details-collage.png`,
    description: 'Timeless and classic photography with a traditional approach.',
    features: ['High resolution images', 'All major ceremony coverage', 'Rituals & family groups', 'Online gallery'],
  },
  {
    id: 'candid-photography',
    title: 'Candid Photography',
    price: 12000,
    image: `${A}239A6337.webp`,
    description: 'Natural moments, real emotions beautifully captured.',
    features: ['Candid storytelling', 'All event coverage', 'Edited high resolution images', 'Online gallery'],
  },
  {
    id: 'traditional-videography',
    title: 'Traditional Videography',
    price: 8000,
    image: `${A}yjhsqa.webp`,
    description: 'Professional video coverage of all your wedding rituals.',
    features: ['Multi-camera setup', 'Full ceremony coverage', 'HD video output', 'Highlight teaser'],
  },
  {
    id: 'cinematography',
    title: 'Cinematography (Wedding Film)',
    price: 25000,
    image: `${A}239A3256_copy.webp`,
    description: 'Cinematic wedding films that tell your story like a beautiful movie.',
    features: ['Cinematic highlights', 'Full length film', 'Drone shots included', 'Premium editing and grading'],
  },
  {
    id: 'drone-coverage',
    title: 'Drone Coverage',
    price: 6000,
    image: `${A}VSU00014.webp`,
    description: 'Stunning aerial shots to capture the grand scale of your celebration.',
    features: ['Aerial photo and video', '4K drone footage', 'All event coverage', 'Licensed pilot'],
  },
  {
    id: 'portrait-photographer',
    title: 'Portrait Photographer',
    price: 6000,
    image: `${A}VSR03896.webp`,
    description: 'Dedicated portrait sessions for couples, family and pre-wedding.',
    features: ['Creative portraits', 'Indoor and outdoor', 'Edited high resolution images', 'Online gallery'],
  },
  {
    id: 'guest-videography',
    title: 'Guest Videography',
    price: 5000,
    image: `${A}239A6375.webp`,
    description: 'Raw, fun and authentic moments captured by our guest cam.',
    features: ['Unfiltered guest moments', 'Handheld coverage', 'Raw video delivery', 'Extra memory capture'],
  },
];

const addOnServices = [
  {
    id: 'led-walls',
    title: 'LED Walls',
    price: 15000,
    image: `${A}239A6337.webp`,
    description: 'High-resolution LED walls for a grand visual experience.',
  },
  {
    id: 'live-streaming',
    title: 'Live Streaming',
    price: 8000,
    image: `${A}VSR03896.webp`,
    description: 'Share your special day live with family and friends anywhere.',
  },
  {
    id: 'spinny',
    title: '360° Spinny',
    price: 7000,
    image: `${A}infocus-brideeed2.webp`,
    description: 'Fun and interactive 360° videos for you and your guests.',
  },
  {
    id: 'photo-booth',
    title: 'Photo Booth',
    price: 6000,
    image: `${A}VSR02674.webp`,
    description: 'Instant prints, fun props and memories your guests will love.',
  },
  {
    id: 'welcome-board',
    title: 'Welcome Board',
    price: 3000,
    image: `${A}bridal-details-collage.png`,
    description: 'Beautiful welcome boards to add a personal touch.',
  },
];

const benefits = [
  [BadgeCheck, 'Premium Equipment', 'Latest gear for perfect results'],
  [Users, 'Experienced Team', 'Passionate and skilled professionals'],
  [PackageCheck, 'Customized Packages', 'Pay only for what you need'],
  [Clock, 'On-time Delivery', 'We deliver on our promises'],
  [Headphones, '24/7 Support', "We're here whenever you need"],
];

const allServices = [...photographyServices, ...addOnServices];

function formatCurrency(value) {
  return new Intl.NumberFormat('en-IN', {
    currency: 'INR',
    maximumFractionDigits: 0,
    style: 'currency',
  }).format(value);
}

import { getCloudinaryUrl } from './utils/cloudinary.js';

function Media({ src, title }) {
  if (src.endsWith('.mp4')) {
    return <video src={src} poster={getCloudinaryUrl('reception-walk', 600)} autoPlay muted loop playsInline aria-label={title} />;
  }

  return <img src={getCloudinaryUrl(src, 600)} alt={title} loading="lazy" decoding="async" />;
}

function SectionTitle({ title, subtitle }) {
  return (
    <div className="byc-section-title">
      <span />
      <h2>{title}</h2>
      <span />
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

function ServiceCard({ service, quantity, onAdd, onDecrease, onIncrease, compact = false }) {
  return (
    <article className={`byc-service-card ${compact ? 'byc-service-card-compact' : ''}`}>
      <div className="byc-card-media">
        <Media src={service.image} title={service.title} />
      </div>
      <div className="byc-card-body">
        <div className="byc-card-content">
          <h3>{service.title}</h3>
          <strong>{formatCurrency(service.price)}</strong>
          <p>{service.description}</p>
          {service.features && (
            <ul>
              {service.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="byc-card-footer">
          {!compact && (
            <div className="byc-quantity" aria-label={`${service.title} quantity`}>
              <button type="button" onClick={onDecrease} aria-label={`Decrease ${service.title}`}>
                <Minus size={13} />
              </button>
              <span>{quantity}</span>
              <button type="button" onClick={onIncrease} aria-label={`Increase ${service.title}`}>
                <Plus size={14} />
              </button>
            </div>
          )}
          <button className="btn btn-lux-secondary compact w-full mt-4" type="button" onClick={onAdd}>
            <ShoppingBag size={14} />
            Add To Package
          </button>
        </div>
      </div>
    </article>
  );
}

export default function BuildYourCrew() {
  const [quantities, setQuantities] = useState({});
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

  const selectedItems = useMemo(
    () => allServices
      .map((service) => ({ ...service, quantity: quantities[service.id] || 0 }))
      .filter((service) => service.quantity > 0),
    [quantities],
  );

  const subtotal = selectedItems.reduce((total, service) => total + service.price * service.quantity, 0);
  const taxes = Math.round(subtotal * 0.18);
  const grandTotal = subtotal + taxes;
  const itemCount = selectedItems.reduce((total, service) => total + service.quantity, 0);

  const changeQuantity = (id, amount) => {
    setQuantities((current) => ({
      ...current,
      [id]: Math.max((current[id] || 0) + amount, 0),
    }));
  };

  const clearPackage = () => setQuantities({});

  const handleDownloadPdf = () => {
    const dateStr = new Date().toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const printContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Infocus Weddings - Package Estimation Sheet</title>
        <style>
          body { font-family: 'Helvetica Neue', Arial, sans-serif; padding: 40px; color: #111; background: #fff; }
          .header { text-align: center; border-bottom: 2px solid #D4AF37; padding-bottom: 20px; margin-bottom: 30px; }
          .header h1 { font-size: 28px; margin: 0; color: #000; letter-spacing: 2px; }
          .header p { font-size: 14px; color: #666; margin-top: 5px; }
          .details { margin-bottom: 30px; display: flex; justify-content: space-between; }
          .table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
          .table th { background: #f8f6f0; text-align: left; padding: 12px; border-bottom: 2px solid #ddd; font-size: 13px; text-transform: uppercase; }
          .table td { padding: 12px; border-bottom: 1px solid #eee; font-size: 14px; }
          .total-box { margin-left: auto; width: 300px; text-align: right; }
          .total-row { display: flex; justify-content: space-between; padding: 8px 0; font-size: 14px; }
          .grand-total { font-size: 18px; font-weight: bold; border-top: 2px solid #D4AF37; padding-top: 10px; color: #000; }
          .footer { margin-top: 50px; text-align: center; font-size: 12px; color: #888; border-top: 1px solid #eee; padding-top: 20px; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>INFOCUS WEDDINGS</h1>
          <p>Luxury Wedding Photography & Cinematography Estimation Sheet</p>
        </div>
        <div class="details">
          <div>
            <strong>Client Name:</strong> ${customerName || 'Valued Client'}<br>
            <strong>Phone:</strong> ${customerPhone || 'N/A'}
          </div>
          <div style="text-align: right;">
            <strong>Date Generated:</strong> ${dateStr}<br>
            <strong>Status:</strong> Estimated Proposal
          </div>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th>Service Title</th>
              <th>Qty</th>
              <th>Unit Price</th>
              <th style="text-align: right;">Total Price</th>
            </tr>
          </thead>
          <tbody>
            ${selectedItems.length === 0 ? '<tr><td colspan="4">No services selected</td></tr>' : selectedItems.map(item => `
              <tr>
                <td>${item.title}</td>
                <td>${item.quantity}</td>
                <td>${formatCurrency(item.price)}</td>
                <td style="text-align: right;">${formatCurrency(item.price * item.quantity)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
        <div class="total-box">
          <div class="total-row"><span>Subtotal:</span> <span>${formatCurrency(subtotal)}</span></div>
          <div class="total-row"><span>Taxes & Charges (18%):</span> <span>${formatCurrency(taxes)}</span></div>
          <div class="total-row grand-total"><span>Estimated Total:</span> <span>${formatCurrency(grandTotal)}</span></div>
        </div>
        <div class="footer">
          <p>Thank you for choosing Infocus Weddings. For bookings, contact +91 83330 00094 or visit www.infocusweddings.in</p>
        </div>
        <script>
          window.onload = function() { window.print(); }
        </script>
      </body>
      </html>
    `;

    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(printContent);
      printWindow.document.close();
    }
  };

  const handleWhatsAppEnquiry = () => {
    const nameText = customerName.trim() ? `Name: ${customerName.trim()}\n` : '';
    const phoneText = customerPhone.trim() ? `Phone: ${customerPhone.trim()}\n` : '';
    
    let itemsText = selectedItems.map(item => `- ${item.quantity} x ${item.title} (${formatCurrency(item.price * item.quantity)})`).join('\n');
    if (!itemsText) itemsText = 'No services selected';

    const message = `*Infocus Weddings - Custom Crew Package Enquiry*\n\n${nameText}${phoneText}\n*Selected Services:*\n${itemsText}\n\n*Subtotal:* ${formatCurrency(subtotal)}\n*Taxes (18%):* ${formatCurrency(taxes)}\n*Estimated Total:* ${formatCurrency(grandTotal)}\n\nPlease assist me with checking team availability for these dates!`;

    const encodedMsg = encodeURIComponent(message);
    window.open(`https://wa.me/918333000094?text=${encodedMsg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="build-your-crew-page">
      <Navbar />
      <main className="pt-[clamp(80px,10vw,120px)]">
        <section className="build-your-crew" id="build-your-crew">
          <div className="byc-shell" id="build-your-crew-steps">
            <div className="byc-process-bar">
              <div className="byc-process-steps">
                <p className="byc-process-eyebrow">How It Works</p>
                {processSteps.map(([number, title, text], index) => (
                  <div className="byc-process-step" key={title}>
                    <span>{number}</span>
                    <div>
                      <strong>{title}</strong>
                      <small>{text}</small>
                    </div>
                    {index < processSteps.length - 1 && <ChevronRight size={21} />}
                  </div>
                ))}
              </div>
              <aside className="byc-total-box" aria-label="Package total">
                <span>Estimated Total</span>
                <strong>{formatCurrency(grandTotal)}</strong>
                <small>{itemCount} Items Selected</small>
                <WalletCards size={30} />
              </aside>
            </div>

            <SectionTitle title="Photography & Videography Services" subtitle="Professional. Passionate. Personalized." />
            <div className="byc-service-grid byc-photo-grid">
              {photographyServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  quantity={quantities[service.id] || 0}
                  onAdd={() => changeQuantity(service.id, 1)}
                  onDecrease={() => changeQuantity(service.id, -1)}
                  onIncrease={() => changeQuantity(service.id, 1)}
                />
              ))}
            </div>

            <SectionTitle title="Add-on Services" />
            <div className="byc-service-grid byc-third-party-grid">
              {addOnServices.map((service) => (
                <ServiceCard
                  compact
                  key={service.id}
                  service={service}
                  quantity={quantities[service.id] || 0}
                  onAdd={() => changeQuantity(service.id, 1)}
                />
              ))}
            </div>

            <SectionTitle title="Why Couples Choose Us" />
            <div className="byc-benefits-strip">
              {benefits.map(([Icon, title, text]) => (
                <article key={title}>
                  <Icon size={25} />
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="byc-summary-panel">
              <div className="byc-summary-image">
                <img src={getCloudinaryUrl('/assets/heritage-couple-portrait.png', 600)} alt="Wedding couple" loading="lazy" decoding="async" />
              </div>
              <div className="byc-summary-details">
                <p className="byc-summary-label">Your Package Summary</p>
                
                {/* Contact Inputs */}
                <div className="my-4 space-y-3">
                  <input
                    type="text"
                    placeholder="Your Name (Optional)"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full bg-[#141412] border border-[rgba(201,155,86,0.3)] rounded-md px-3 py-2 text-sm text-[#f7f1e7] focus:outline-none focus:border-[var(--lux-gold-warm)]"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number (For Enquiry & Estimate)"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full bg-[#141412] border border-[rgba(201,155,86,0.3)] rounded-md px-3 py-2 text-sm text-[#f7f1e7] focus:outline-none focus:border-[var(--lux-gold-warm)]"
                  />
                </div>

                <div className="byc-selected-list">
                  {selectedItems.length === 0 ? (
                    <span>0 item selected</span>
                  ) : (
                    selectedItems.map((item) => (
                      <span key={item.id}>
                        {item.quantity} x {item.title}
                        <strong>{formatCurrency(item.price * item.quantity)}</strong>
                      </span>
                    ))
                  )}
                </div>
                <dl>
                  <div>
                    <dt>Subtotal</dt>
                    <dd>{formatCurrency(subtotal)}</dd>
                  </div>
                  <div>
                    <dt>Taxes & Charges (18%)</dt>
                    <dd>{formatCurrency(taxes)}</dd>
                  </div>
                  <div>
                    <dt className="text-[var(--lux-gold-warm)] font-bold">Estimated Total</dt>
                    <dd className="text-[var(--lux-gold-warm)] font-bold">{formatCurrency(grandTotal)}</dd>
                  </div>
                </dl>
                <button className="btn btn-lux-secondary byc-clear-all-btn" type="button" onClick={clearPackage}>
                  <Save size={14} />
                  Clear All
                </button>
              </div>
              <div className="byc-help-panel">
                <HeartHandshake size={42} />
                <h3>Need Help Choosing?</h3>
                <p>Our experts are here to help you create the perfect package for your big day.</p>
                <button type="button" onClick={handleWhatsAppEnquiry}>Talk To Our Expert</button>
              </div>
              <div className="byc-summary-actions">
                <button className="btn btn-lux-primary" type="button" onClick={handleWhatsAppEnquiry}>
                  Send WhatsApp Enquiry
                </button>
                <button className="byc-save-action" type="button" onClick={handleDownloadPdf}>
                  <CalendarCheck size={15} />
                  Download Estimation Sheet
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export { benefits, photographyServices, addOnServices as thirdPartyServices };
