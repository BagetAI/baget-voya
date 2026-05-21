import { useState } from 'react';
import { Space_Mono, Work_Sans } from 'next/font/google';

const spaceMono = Space_Mono({ subsets: ['latin'], weight: ['400', '700'] });
const workSans = Work_Sans({ subsets: ['latin'], weight: ['300', '400', '600', '700'] });

export default function Home() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [preference, setPreference] = useState('Thai Green Curry');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://app.baget.ai/api/public/databases/db_waitlist_voya/rows', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data: {
            name,
            email,
            recipe_preference: preference,
          }
        }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setName('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <main className={`min-h-screen bg-[#FFFCE1] text-black ${workSans.className}`}>
      {/* Header */}
      <header className="border-b-4 border-black p-6 flex justify-between items-center sticky top-0 bg-[#FFFCE1] z-50">
        <div className={`text-4xl font-bold tracking-tighter ${spaceMono.className}`}>VOYA</div>
        <a href="#waitlist" className="bg-[#4361EE] text-white brutal-border brutal-shadow px-6 py-2 font-bold uppercase tracking-widest hover:bg-[#3249B5] transition-colors">
          Join Waitlist
        </a>
      </header>

      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 border-b-4 border-black">
        <div className="p-8 lg:p-16 flex flex-col justify-center border-r-0 lg:border-r-4 border-black">
          <div className={`inline-block bg-[#FF006E] text-white px-4 py-1 mb-6 brutal-border text-sm font-bold uppercase tracking-widest ${spaceMono.className}`}>
            Launching Summer 2026
          </div>
          <h1 className={`text-5xl lg:text-7xl font-black mb-8 leading-none ${spaceMono.className}`}>
            GLOBAL FLAVOR.<br />ZERO WASTE.
          </h1>
          <p className="text-xl lg:text-2xl mb-10 max-w-lg font-medium leading-relaxed">
            Stop buying $12 spice jars for a single dinner. Get pre-portioned, chef-grade kits for the world's most iconic recipes.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#waitlist" className="bg-black text-white brutal-border brutal-shadow px-8 py-4 text-xl font-bold uppercase tracking-widest hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
              Claim Early Access
            </a>
          </div>
        </div>
        <div className="bg-white overflow-hidden flex items-center justify-center p-0">
          <img 
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=2070" 
            alt="Voya Spice Kits" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Value Props */}
      <section className="grid grid-cols-1 md:grid-cols-3 border-b-4 border-black">
        <div className="p-10 border-b-4 md:border-b-0 md:border-r-4 border-black hover:bg-[#4361EE] hover:text-white transition-colors group">
          <div className={`text-4xl font-bold mb-4 ${spaceMono.className}`}>01</div>
          <h3 className={`text-2xl font-bold mb-4 ${spaceMono.className}`}>PRE-PORTIONED</h3>
          <p className="text-lg">Exactly what you need for one recipe. No half-empty jars cluttering your pantry or going stale.</p>
        </div>
        <div className="p-10 border-b-4 md:border-b-0 md:border-r-4 border-black hover:bg-[#FF006E] hover:text-white transition-colors group">
          <div className={`text-4xl font-bold mb-4 ${spaceMono.className}`}>02</div>
          <h3 className={`text-2xl font-bold mb-4 ${spaceMono.className}`}>CHEF GRADE</h3>
          <p className="text-lg">Single-origin, freshly ground spices sourced directly from farmers. Potency you can smell the moment you open the sachet.</p>
        </div>
        <div className="p-10 hover:bg-[#2A4D50] hover:text-white transition-colors group">
          <div className={`text-4xl font-bold mb-4 ${spaceMono.className}`}>03</div>
          <h3 className={`text-2xl font-bold mb-4 ${spaceMono.className}`}>COMPOSTABLE</h3>
          <p className="text-lg">Our TIPA high-barrier films are 100% home-compostable. Authentic flavor shouldn't cost the earth.</p>
        </div>
      </section>

      {/* Waitlist Form */}
      <section id="waitlist" className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] border-b-4 border-black">
        <div className="bg-[#4361EE] p-12 lg:p-24 flex flex-col justify-center border-r-0 lg:border-r-4 border-black text-white">
          <h2 className={`text-5xl lg:text-7xl font-black mb-8 ${spaceMono.className}`}>JOIN THE VOYAGE.</h2>
          <p className="text-2xl mb-8 opacity-90">
            Be the first to get Voya in your kitchen. Early members get 20% off their first "Global Three" kit.
          </p>
          <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest">
            <span className="brutal-border px-3 py-1 bg-black">Limited Spots</span>
            <span className="brutal-border px-3 py-1 bg-black">Free Shipping</span>
          </div>
        </div>
        <div className="p-12 lg:p-24 bg-[#FFFCE1] flex flex-col justify-center">
          {status === 'success' ? (
            <div className="brutal-border p-10 bg-white text-center">
              <h3 className={`text-4xl font-bold mb-4 ${spaceMono.className}`}>YOU'RE IN!</h3>
              <p className="text-xl">Check your email for the Early Access confirmation. We'll be in touch when the first batch is ready.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className={`block mb-2 font-bold uppercase ${spaceMono.className}`}>Your Name</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-4 brutal-border brutal-shadow focus:outline-none focus:bg-white text-lg"
                  placeholder="Cook McChef"
                  required
                />
              </div>
              <div>
                <label className={`block mb-2 font-bold uppercase ${spaceMono.className}`}>Email Address</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-4 brutal-border brutal-shadow focus:outline-none focus:bg-white text-lg"
                  placeholder="cook@home.com"
                  required
                />
              </div>
              <div>
                <label className={`block mb-2 font-bold uppercase ${spaceMono.className}`}>Most Wanted Kit</label>
                <select 
                  value={preference}
                  onChange={(e) => setPreference(e.target.value)}
                  className="w-full p-4 brutal-border brutal-shadow focus:outline-none focus:bg-white text-lg bg-white appearance-none"
                >
                  <option>Thai Green Curry</option>
                  <option>Moroccan Tagine</option>
                  <option>Szechuan Mapo Tofu</option>
                  <option>Something else!</option>
                </select>
              </div>
              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full bg-[#FF006E] text-white brutal-border brutal-shadow-lg p-6 text-2xl font-black uppercase tracking-widest hover:translate-x-1 hover:translate-y-1 hover:shadow-brutal transition-all active:shadow-none"
              >
                {status === 'loading' ? 'JOINING...' : 'GET EARLY ACCESS'}
              </button>
              {status === 'error' && <p className="text-red-600 font-bold">Something went wrong. Please try again.</p>}
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="p-12 bg-black text-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <div className={`text-4xl font-bold tracking-tighter mb-4 ${spaceMono.className}`}>VOYA</div>
            <p className="opacity-60">© 2026 VOYA SPICE CO. ALL RIGHTS RESERVED.</p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:underline font-bold uppercase">Instagram</a>
            <a href="#" className="hover:underline font-bold uppercase">TikTok</a>
            <a href="#" className="hover:underline font-bold uppercase">Sustainability</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
