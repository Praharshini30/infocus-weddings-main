import React, { useState } from 'react';

export default function NewsletterCard() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 1000);
  };

  return (
    <div className="border border-line bg-[rgba(201,155,86,0.03)] p-[2.5rem] rounded-[4px]">
      <h4 className="font-serif text-[#f7f1e7] text-[1.4rem] tracking-[0.05em] mb-[1.2rem] uppercase flex items-center justify-center gap-[1rem] text-center">
        <span className="h-[1px] w-[24px] bg-gold flex-none"></span>
        Stay Inspired
        <span className="h-[1px] w-[24px] bg-gold flex-none"></span>
      </h4>
      
      <p className="text-muted text-[0.92rem] leading-[1.7] text-center mb-[2rem]">
        Join our newsletter and get the latest stories, tips and exclusive updates delivered to your inbox.
      </p>

      {status === 'success' ? (
        <div className="text-center text-gold bg-gold/10 border border-gold/30 p-[1.5rem] rounded-[4px] animate-pf-fade-in">
          <p className="font-serif text-[1.2rem] mb-[0.25rem]">Thank You!</p>
          <p className="text-[0.8rem]">You've been successfully subscribed.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-[1rem]">
          <input 
            type="email" 
            required 
            placeholder="Your email address" 
            className="w-full bg-transparent border border-line-soft text-text px-[1.2rem] py-[0.95rem] text-[0.85rem] outline-none focus:border-gold transition-colors placeholder:text-muted/60 rounded-[4px]"
            disabled={status === 'submitting'}
          />
          <button 
            type="submit" 
            disabled={status === 'submitting'}
            className="w-full bg-gold text-[#050504] uppercase tracking-[0.14em] font-[650] text-[0.68rem] py-[1rem] rounded-[4px] transition-transform hover:-translate-y-[2px] disabled:opacity-70 disabled:hover:translate-y-0"
          >
            {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      )}
    </div>
  );
}
