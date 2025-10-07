'use client';

import Marquee from '@/components/Marquee';
import CTA from '@/components/CTA';

export default function Home() {




  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative pt-16 lg:pt-20 pb-20 lg:pb-24 px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_560px] gap-16 lg:gap-20 items-start">
            {/* Left Column */}
            <div className="max-w-[820px]">
              <div className="space-y-6">
                <p className="text-sm tracking-[0.08em] text-[#3A3A3C] uppercase">
                  SERVING GREATER NEW ORLEANS AREA
                </p>
                <h1 className="text-[clamp(40px,6vw,72px)] font-bold tracking-[-0.02em] leading-[1.05] text-[#0F0F10]">
                Complete Mold Remediation That Lasts
              </h1>
                <p className="max-w-[600px] text-[18px] text-[#3A3A3C] leading-snug">
                Professional inspection, testing, removal, and moisture control—done right the first time.
              </p>
                <CTA href="/book-inspection" ariaLabel="Book an inspection">
                Book inspection
                </CTA>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="bg-white rounded-[20px] p-6 shadow-sm border border-[#E7E2DA]">
                <div className="aspect-[4/3] rounded-[16px] overflow-hidden relative">
                  <img 
                    src="/pics/image2.png" 
                    alt="Mold remediation work" 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay Stat Box */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-white/20 w-[180px]">
                    <div className="text-left h-full flex flex-col justify-center">
                      <p className="text-[16px] font-semibold tracking-[-0.01em] text-[#0F0F10] leading-tight mb-1">
                        Guaranteed<br />effective
                      </p>
                      <p className="text-[42px] font-bold text-[#0F0F10] leading-none mb-1">
                        99.9%
                      </p>
                      <p className="text-[12px] text-[#3A3A3C] leading-tight">
                        of mold destroyed<br />without harsh chemicals
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Marquee */}
      <Marquee items={["Inspect","Contain","Remediate","Prevent"]} speed="normal" direction="left" />

      {/* Mold Everywhere Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center">
            
            {/* Left Image */}
            <div className="relative">
              <div className="bg-white rounded-[20px] p-6 shadow-sm border border-[#E7E2DA]">
                <div className="rounded-[16px] overflow-hidden relative">
                  <img 
                    src="/pics/hvac.png" 
                    alt="Mold remediation professional working" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-6">
              <h2 className="text-[clamp(32px,4vw,48px)] font-bold text-[#0F0F10] leading-[1.1]">
                If you find mold anywhere, you have it everywhere
          </h2>
              
              <div className="space-y-6">
                <p className="text-[17px] leading-[1.5] text-[#0F0F10]">
                  Mold doesn&apos;t stay put. Instead it circulates throughout your home until it finds moisture to colonize.
                </p>
                
                <hr className="border-[#E7E2DA]" />
                
                <p className="text-[17px] leading-[1.5] text-[#0F0F10]">
                  Traditional mold remediation tends to focus on visible mold—failing to address the larger infestation.
                </p>
                
                <hr className="border-[#E7E2DA]" />
                
                <p className="text-[17px] leading-[1.5] text-[#0F0F10]">
                  Only Sinclair&apos;s technology—recommended by functional medicine doctors everywhere, and exclusive to Sinclair in Greater New Orleans—has been shown to fully destroy 99.9% of mold on all surfaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* Testimonials Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <h2 className="text-[clamp(32px,4vw,48px)] font-bold text-[#0F0F10] text-center mb-16">
            Life-changing stories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-[20px] p-6 shadow-sm border border-[#E7E2DA] relative">
              <div className="flex justify-between items-start mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-right">
                  <p className="font-semibold text-[#0F0F10] text-sm">Charles C.</p>
                  <p className="text-[#3A3A3C] text-xs">French Quarter, LA</p>
                </div>
              </div>
              <p className="text-[#0F0F10] leading-relaxed">
                &quot;Old French Quarter houses are tricky, and mine&apos;s no exception. After the summer storms, I noticed a smell I couldn&apos;t shake. Sinclair showed up on time, explained everything in plain English, and got it handled. Haven&apos;t had a problem since. Worth every penny.&quot;
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-[20px] p-6 shadow-sm border border-[#E7E2DA] relative">
              <div className="flex justify-between items-start mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-right">
                  <p className="font-semibold text-[#0F0F10] text-sm">John B.</p>
                  <p className="text-[#3A3A3C] text-xs">Garden District, LA</p>
                </div>
              </div>
              <p className="text-[#0F0F10] leading-relaxed">
                &quot;These guys actually answer the phone, which is rare. They came out the same week, checked the crawl space, and showed me where moisture was building. It&apos;s been two months and everything&apos;s dry. I&apos;d recommend them to anyone dealing with this Louisiana humidity.&quot;
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-[20px] p-6 shadow-sm border border-[#E7E2DA] relative">
              <div className="flex justify-between items-start mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-right">
                  <p className="font-semibold text-[#0F0F10] text-sm">Monique L.</p>
                  <p className="text-[#3A3A3C] text-xs">Uptown, LA</p>
                </div>
              </div>
              <p className="text-[#0F0F10] leading-relaxed">
                &quot;Sinclair Restoration saved me after my AC leak. I thought I&apos;d need new drywall, but they cleaned it up, tested, and said I caught it early. Super honest, no upsell. I keep their number saved now just in case.&quot;
              </p>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-white rounded-[20px] p-6 shadow-sm border border-[#E7E2DA] relative">
              <div className="flex justify-between items-start mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-right">
                  <p className="font-semibold text-[#0F0F10] text-sm">Marcus T.</p>
                  <p className="text-[#3A3A3C] text-xs">Lakeview, LA</p>
                </div>
              </div>
              <p className="text-[#0F0F10] leading-relaxed">
                &quot;Finally found a company that doesn&apos;t treat you like just another job. The tech actually took time to explain what he was seeing under the flooring. They worked around my schedule and left the place spotless. That&apos;s rare down here.&quot;
              </p>
            </div>

            {/* Testimonial 5 */}
            <div className="bg-white rounded-[20px] p-6 shadow-sm border border-[#E7E2DA] relative">
              <div className="flex justify-between items-start mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  ))}
                </div>
                <div className="text-right">
                  <p className="font-semibold text-[#0F0F10] text-sm">Andre J.</p>
                  <p className="text-[#3A3A3C] text-xs">Metairie, LA</p>
                  </div>
              </div>
              <p className="text-[#0F0F10] leading-relaxed">
                &quot;My wife and I were shocked at how fast they worked. The air test came back clean, and the smell that had been in our hallway for months is gone. I don&apos;t usually write reviews, but this one deserves it.&quot;
              </p>
            </div>

            {/* Testimonial 6 */}
            <div className="bg-white rounded-[20px] p-6 shadow-sm border border-[#E7E2DA] relative">
              <div className="flex justify-between items-start mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-right">
                  <p className="font-semibold text-[#0F0F10] text-sm">Jasmine W.</p>
                  <p className="text-[#3A3A3C] text-xs">Bywater, LA</p>
                </div>
              </div>
              <p className="text-[#0F0F10] leading-relaxed">
                &quot;After last year&apos;s storm, I had no idea where to start. They walked me through insurance photos, handled the cleanup, and even checked back a week later. You can tell they actually care about people&apos;s homes, not just closing jobs.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Section */}
      <section 
        className="py-12 lg:py-16"
        style={{ backgroundColor: "#F5F0E8" }}
      >
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-4">
              <p className="text-xs tracking-[0.08em] text-black/70 uppercase">SCHEDULE YOUR INSPECTION TODAY</p>
              <h2 className="text-[clamp(24px,3vw,32px)] font-bold tracking-[-0.01em] leading-[1.1] text-black">
                Start your complete<br />
                mold remediation
              </h2>
              <p className="text-[15px] leading-[1.4] text-[#4A4A4A]">
                From inspection to prevention, Sinclair guarantees lasting results.
              </p>
              <div className="pt-2">
                <CTA href="/book-inspection" ariaLabel="Book an inspection">
            Book inspection
                </CTA>
                </div>
                </div>

            {/* Right Image */}
            <div className="relative">
              <div className="bg-white rounded-[20px] p-6 shadow-sm border border-[#E7E2DA] max-w-[400px] mx-auto lg:mx-0">
                <div className="rounded-[16px] overflow-hidden relative">
                  <img 
                    src="/pics/image2.png" 
                    alt="Sinclair Restoration service van" 
                    className="w-full h-auto"
                  />
                </div>
            </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}