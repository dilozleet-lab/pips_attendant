import { TickerBanner } from './components/TickerBanner';
import { HeroSection } from './components/HeroSection';
import { LinkCard } from './components/LinkCard';
import { FloatingContact } from './components/FloatingContact';
import { CTASection } from './components/CTASection';
import { links } from './config/links';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-dark-navy text-white relative pb-20 font-inter selection:bg-neon-purple/30 overflow-x-hidden">
      {/* Background ambient effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-neon-purple/10 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-neon-blue/10 blur-[120px]"></div>
      </div>

      <TickerBanner />
      
      <main className="relative z-10 max-w-2xl mx-auto px-4 pt-16 sm:px-6 lg:px-8 flex flex-col items-center">
        <HeroSection />
        
        <div className="w-full flex flex-col gap-4 mt-2">
          {links.map((link, index) => (
            <LinkCard key={link.id} link={link} delay={0.5 + (index * 0.1)} />
          ))}
        </div>

        <CTASection />
      </main>

      <FloatingContact />
      
      {/* Footer */}
      <footer className="mt-16 pb-8 text-center text-sm text-gray-500 relative z-10">
        <p>© {new Date().getFullYear()} Pips_Attendant. All rights reserved.</p>
        <p className="mt-1 max-w-xs mx-auto text-xs opacity-60">Trading foreign exchange carries a high level of risk and may not be suitable for all investors.</p>
      </footer>
    </div>
  )
}

export default App;
