          {/* ——— SLIDE 10 — SCENE 11 — Pre-Work Weekend ——— */}
          <div id="slide-10" className="relative h-full w-screen shrink-0 overflow-hidden bg-[#ece8df]">
            <SharpPanelBg
              src={bgScene06}
              overlayClassName="bg-[#0f172a]/85"
              imageClassName="object-cover object-[center_center]"
            />
            <div className="absolute bottom-0 left-0 z-[32] flex flex-col justify-end pl-3 pb-0 sm:pl-5">
              <StickyCallout
                noteVariant="sticky"
                noteClassName="[&_p]:!font-comic [&_p]:!font-semibold [&_p]:!text-[21px] [&_p]:!leading-snug sm:[&_p]:!text-[17px] md:[&_p]:!text-[21px]"
                className="w-[min(13.5rem,calc(100vw-2rem))] sm:w-[min(100%,19rem)] md:w-[min(100%,20rem)]"
                narratorSrc={soubhWriting}
                narratorImgClassName="origin-bottom scale-x-[-1] translate-y-0.5 sm:translate-y-1"
                narratorHeightClass="h-[clamp(10rem,22vw,14rem)] sm:h-[clamp(11rem,20vw,15rem)] md:h-[clamp(12rem,18vw,16rem)]"
                lines={[
                  "While Josh catches up on listings, we audit his competitors, his social, and his presentations.",
                  "By Sunday night, both sides know what they're walking into Monday morning."
                ]}
              />
            </div>
            {/* Fake Dual Monitors UI */}
            <div className="pointer-events-none absolute bottom-[-40px] right-0 z-[50] flex items-end justify-end pb-0 pr-0">
              <div className="relative isolate flex gap-4 translate-x-12 sm:translate-x-16">
                <div className="flex h-[35vh] w-[25vw] flex-col overflow-hidden rounded-md border-4 border-black bg-white shadow-2xl sm:h-[45vh] sm:w-[20vw]">
                  <div className="h-4 border-b-2 border-black bg-gray-200"></div>
                  <div className="p-2">
                    <div className="mb-2 h-2 w-1/2 rounded bg-gray-300"></div>
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="mb-1 flex items-center gap-1">
                        <div className="h-1.5 w-1/4 rounded bg-gray-200"></div>
                        <div className="h-1.5 w-full rounded bg-gray-100"></div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex h-[35vh] w-[25vw] flex-col overflow-hidden rounded-md border-4 border-black bg-white shadow-2xl sm:h-[45vh] sm:w-[20vw]">
                  <div className="h-4 border-b-2 border-black bg-gray-200"></div>
                  <div className="p-2">
                    <div className="mb-2 h-2 w-3/4 rounded bg-terracotta/80"></div>
                    <div className="grid grid-cols-3 gap-1">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className="h-4 rounded bg-gray-100"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ——— SLIDE 11 — SCENE 12 — Workshop 1: Three Doors ——— */}
          <div id="slide-11" className="relative h-full w-screen shrink-0 overflow-hidden bg-[#1a1f24]">
            <SharpPanelBg
              src={bgScene07}
              overlayClassName="bg-[#0f172a]/85"
              imageClassName="object-cover object-[center_center]"
            />
            {/* Split Screen Container */}
            <div className="absolute inset-x-4 top-16 z-[15] mx-auto flex h-[min(45vh,350px)] max-w-4xl overflow-hidden rounded-xl border-[3px] border-[#0D0D0D] bg-black shadow-2xl sm:inset-x-8 sm:top-24 sm:h-[min(55vh,450px)]">
              {/* Left Pane - Josh */}
              <div className="relative flex w-1/2 items-end justify-center overflow-hidden border-r-[3px] border-[#0D0D0D] bg-slate-800">
                <img src={joshThinking} alt="Josh" className="h-[80%] w-auto object-contain object-bottom translate-y-[10%]" />
              </div>
              {/* Right Pane - Soubh */}
              <div className="relative flex w-1/2 items-end justify-center overflow-hidden bg-slate-900">
                <img src={soubhSmile} alt="Soubh" className="h-[75%] w-auto object-contain object-bottom" />
              </div>
            </div>

            {/* Three Cards UI */}
            <div className="absolute bottom-[20%] left-1/2 z-[30] flex w-full max-w-3xl -translate-x-1/2 items-end justify-center gap-2 px-4 sm:gap-6">
              <div className="flex w-1/3 flex-col rounded-xl border-[3px] border-black bg-[#FFFCF5] p-3 shadow-[4px_4px_0_rgba(0,0,0,1)] sm:p-5">
                <p className="font-comic text-xs font-bold sm:text-lg">SAFE</p>
                <p className="mt-1 text-[8px] leading-tight text-gray-600 sm:text-xs">Reliable. Defensible. Slow growth.</p>
              </div>
              <div className="flex w-1/3 -translate-y-4 flex-col rounded-xl border-[4px] border-terracotta bg-[#FFFCF5] p-3 shadow-[4px_4px_0_rgba(184,92,56,1)] sm:p-5">
                <p className="font-comic text-xs font-bold text-terracotta sm:text-lg">STRETCH</p>
                <p className="mt-1 text-[8px] leading-tight text-gray-600 sm:text-xs">Specific. Polarising. Faster growth.</p>
              </div>
              <div className="flex w-1/3 flex-col rounded-xl border-[3px] border-black bg-[#FFFCF5] p-3 shadow-[4px_4px_0_rgba(0,0,0,1)] sm:p-5">
                <p className="font-comic text-xs font-bold sm:text-lg">BOLD</p>
                <p className="mt-1 text-[8px] leading-tight text-gray-600 sm:text-xs">Risky for 6 months. Famous within 12.</p>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 z-[40] flex flex-col justify-end pl-3 pb-0 sm:pl-4 sm:pb-1">
              <StickyCallout
                noteVariant="speech"
                speechCaption="Soubh"
                speechTail="bottom-left"
                className="w-[min(15rem,calc(100vw-2rem))] sm:w-[min(100%,22rem)] md:w-[min(100%,24rem)]"
                narratorSrc={soubhSmile}
                narratorImgClassName="origin-bottom scale-x-[-1] translate-y-0.5 sm:translate-y-1"
                narratorHeightClass="h-[clamp(10rem,22vw,14rem)] sm:h-[clamp(11rem,20vw,15rem)] md:h-[clamp(12rem,18vw,16rem)]"
                lines={[
                  "Most consultants present one 'right' answer.",
                  "We present three, ranked by risk, so the choice is the director's. The ownership is what makes it stick."
                ]}
              />
            </div>
          </div>

          {/* ——— SLIDE 12 — SCENE 13 — Tuesday Internal Team Meeting ——— */}
          <div id="slide-12" className="relative h-full w-screen shrink-0 overflow-hidden bg-[#1a1f24]">
            <SharpPanelBg
              src={bgScene03}
              overlayClassName="bg-[#0f172a]/85"
              imageClassName="object-cover object-[center_center]"
            />
            <div className="absolute bottom-[20%] left-0 right-0 z-[10] flex items-end justify-between px-2 sm:px-10">
              {/* Anna & Tom Left */}
              <div className="flex w-1/3 justify-start -space-x-8">
                <img src={annaBaseV1} alt="Anna" className="h-[40vh] object-contain object-bottom sm:h-[50vh]" />
                <img src={tomGesture} alt="Tom" className="h-[42vh] object-contain object-bottom sm:h-[52vh]" />
              </div>
              {/* Josh Center */}
              <div className="flex w-1/3 justify-center">
                <img src={joshNormal} alt="Josh" className="h-[50vh] object-contain object-bottom sm:h-[60vh]" />
              </div>
              {/* Priya & David Right */}
              <div className="flex w-1/3 justify-end -space-x-8">
                <img src={priyaThoughtful} alt="Priya" className="h-[40vh] object-contain object-bottom sm:h-[50vh]" />
                <img src={davidSitting} alt="David" className="h-[38vh] object-contain object-bottom sm:h-[48vh]" />
              </div>
            </div>

            <div className="absolute top-[10%] left-4 z-[40] w-[80%] sm:left-1/2 sm:-translate-x-1/2 sm:w-[60%]">
              <ComicPanelBubble tail="bottom-left" caption="The Team" className="rounded-2xl border-[3px] border-[#0D0D0D] bg-[#FFFCF5] p-3 shadow-[5px_5px_0_rgba(0,0,0,1)]">
                <p className="font-comic text-[1.1rem] font-bold sm:text-[1.3rem]">"I'm telling you — Bold."</p>
                <p className="font-comic text-[1.1rem] font-bold text-terracotta sm:text-[1.3rem]">"Stretch. Bold would lose us the impulse-buyers."</p>
                <p className="font-comic text-[1.1rem] font-bold sm:text-[1.3rem]">"I'm in. Stretch."</p>
              </ComicPanelBubble>
            </div>

            <div className="absolute bottom-0 right-0 z-[40] flex flex-col justify-end pr-3 pb-0 sm:pr-4 sm:pb-1">
              <StickyCallout
                noteVariant="sticky"
                className="w-[min(13.5rem,calc(100vw-2rem))] sm:w-[min(100%,19rem)] md:w-[min(100%,20rem)]"
                narratorSrc={soubhPointing}
                narratorImgClassName="origin-bottom translate-y-0.5 sm:translate-y-1"
                narratorHeightClass="h-[clamp(10rem,22vw,14rem)] sm:h-[clamp(11rem,20vw,15rem)] md:h-[clamp(12rem,18vw,16rem)]"
                lines={[
                  "Notice: I'm not in this room.",
                  "The hardest part of positioning isn't picking the right option. It's getting the team to commit."
                ]}
              />
            </div>
          </div>

          {/* ——— SLIDE 13 — SCENE 14 — Workshop 2: Pressure-Testing Stretch ——— */}
          <div id="slide-13" className="relative h-full w-screen shrink-0 overflow-hidden bg-[#1a1f24]">
            <SharpPanelBg
              src={bgScene07}
              overlayClassName="bg-[#0f172a]/85"
              imageClassName="object-cover object-[center_center]"
            />
            {/* UI Document */}
            <div className="absolute right-[5%] top-[10%] z-[20] w-[80%] max-w-sm rotate-2 rounded border-2 border-black bg-[#FFFCF5] p-4 shadow-[8px_8px_0_rgba(0,0,0,0.5)] sm:right-[10%] sm:top-[20%]">
              <p className="mb-2 border-b-2 border-black pb-1 font-comic text-sm font-bold uppercase sm:text-base">Positioning Statement</p>
              <p className="text-xs line-through opacity-50 sm:text-sm">V1: The passionate local experts</p>
              <p className="mt-1 text-xs line-through opacity-50 sm:text-sm">V2: Trusted property advisors</p>
              <p className="mt-2 bg-terracotta/20 p-1 font-comic text-[1.2rem] font-bold text-black sm:text-[1.4rem]">V3: Property backed by research, not hype.</p>
            </div>

            <div className="pointer-events-none absolute bottom-[-40px] left-0 z-[10] flex w-full flex-col items-start justify-end pb-0 sm:w-1/2">
              <div className="pointer-events-auto relative z-[20] mb-2 ml-4 w-[min(13.5rem,calc(100vw-2rem))] sm:mb-4 sm:ml-8 sm:w-[22rem]">
                <ComicPanelBubble tail="bottom-left" caption="Josh" className="rounded-xl border-[3px] border-black bg-[#FFFCF5] p-3 shadow-[4px_4px_0_rgba(0,0,0,1)]">
                  <p className="font-comic text-[1.3rem] font-bold">"...wait. That's exactly what Tom said in the team meeting."</p>
                </ComicPanelBubble>
              </div>
              <img src={joshNormal} alt="Josh" className="h-[min(65vh,550px)] object-contain object-bottom translate-x-8" />
            </div>

            <div className="absolute bottom-0 right-0 z-[40] flex flex-col justify-end pr-3 pb-0 sm:pr-4 sm:pb-1">
              <StickyCallout
                noteVariant="sticky"
                className="w-[min(13.5rem,calc(100vw-2rem))] sm:w-[min(100%,19rem)] md:w-[min(100%,20rem)]"
                narratorSrc={soubhSmile}
                narratorImgClassName="origin-bottom translate-y-0.5 sm:translate-y-1"
                narratorHeightClass="h-[clamp(10rem,22vw,14rem)] sm:h-[clamp(11rem,20vw,15rem)] md:h-[clamp(12rem,18vw,16rem)]"
                lines={[
                  "Workshop 2 is where the positioning gets BUILT.",
                  "By the end, the team's natural language matches the strategy."
                ]}
              />
            </div>
          </div>

          {/* ——— SLIDE 14 — SCENE 15 — Workshop 3: The 6-Slide Deck ——— */}
          <div id="slide-14" className="relative h-full w-screen shrink-0 overflow-hidden bg-[#1a1f24]">
            <SharpPanelBg
              src={bgScene07}
              overlayClassName="bg-[#0f172a]/85"
              imageClassName="object-cover object-[center_center]"
            />
            {/* 6-Slide Deck UI */}
            <div className="absolute inset-x-0 top-[10%] z-[20] mx-auto grid w-[90%] max-w-2xl grid-cols-3 gap-2 rounded-xl bg-black/40 p-4 backdrop-blur sm:top-[20%] sm:gap-4">
              {[1,2,3,4,5,6].map(num => (
                <div key={num} className="aspect-video w-full rounded border-2 border-black bg-[#FFFCF5] p-2 shadow-sm">
                  <div className="h-1/2 w-full border-b border-black/20 bg-gray-100"></div>
                  <div className="mt-1 h-1 w-3/4 bg-gray-300"></div>
                  <div className="mt-1 h-1 w-1/2 bg-gray-200"></div>
                </div>
              ))}
            </div>

            <div className="absolute bottom-0 left-0 z-[40] flex flex-col justify-end pl-3 pb-0 sm:pl-4 sm:pb-1">
              <StickyCallout
                noteVariant="speech"
                speechCaption="Soubh"
                speechTail="bottom-left"
                className="w-[min(15rem,calc(100vw-2rem))] sm:w-[min(100%,22rem)] md:w-[min(100%,24rem)]"
                narratorSrc={soubhPointing}
                narratorImgClassName="origin-bottom scale-x-[-1] translate-y-0.5 sm:translate-y-1"
                narratorHeightClass="h-[clamp(10rem,22vw,14rem)] sm:h-[clamp(11rem,20vw,15rem)] md:h-[clamp(12rem,18vw,16rem)]"
                lines={[
                  "This is what Josh and his team will walk into every appraisal with from now on.",
                  "One deck. Used in every conversation."
                ]}
              />
            </div>
          </div>

          {/* ——— SLIDE 15 — SCENE 16 — Content Engine ——— */}
          <div id="slide-15" className="relative h-full w-screen shrink-0 overflow-hidden bg-[#ece8df]">
            <SharpPanelBg
              src={bgScene01Office}
              overlayClassName="bg-[#0f172a]/85"
              imageClassName="object-cover object-[center_center]"
            />
            {/* Content Calendar UI */}
            <div className="absolute inset-x-0 top-[10%] z-[20] mx-auto w-[90%] max-w-3xl overflow-hidden rounded-xl border-4 border-black bg-white shadow-2xl sm:top-[15%]">
              <div className="border-b-2 border-black bg-gray-100 px-4 py-2 font-comic font-bold uppercase">Content Engine: 4 Weeks</div>
              <div className="grid grid-cols-5 divide-x-2 divide-black border-b-2 border-black bg-white font-mono text-xs font-bold sm:text-sm">
                <div className="p-2 text-center text-gray-500">Mon</div>
                <div className="p-2 text-center text-gray-500">Tue</div>
                <div className="p-2 text-center text-gray-500">Wed</div>
                <div className="p-2 text-center text-gray-500">Thu</div>
                <div className="p-2 text-center text-gray-500">Fri</div>
              </div>
              <div className="grid h-48 grid-cols-5 divide-x divide-y divide-gray-200 sm:h-64">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className={`p-1 sm:p-2 ${i === 19 ? 'bg-terracotta/20 font-bold text-terracotta' : 'bg-gray-50'}`}>
                    {i % 2 === 0 && <div className={`h-2 w-full rounded ${i === 19 ? 'bg-terracotta' : 'bg-blue-400'}`}></div>}
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-0 right-0 z-[40] flex flex-col justify-end pr-3 pb-0 sm:pr-4 sm:pb-1">
              <StickyCallout
                noteVariant="sticky"
                className="w-[min(13.5rem,calc(100vw-2rem))] sm:w-[min(100%,19rem)] md:w-[min(100%,20rem)]"
                narratorSrc={soubhSmile}
                narratorImgClassName="origin-bottom translate-y-0.5 sm:translate-y-1"
                narratorHeightClass="h-[clamp(10rem,22vw,14rem)] sm:h-[clamp(11rem,20vw,15rem)] md:h-[clamp(12rem,18vw,16rem)]"
                lines={[
                  "Week 2 is when the words become content.",
                  "36 pieces. All built on Stretch positioning. All in Josh's voice."
                ]}
              />
            </div>
          </div>

          {/* ——— SLIDE 16 — SCENE 17 — Day 14: Team Meeting ——— */}
          <div id="slide-16" className="relative h-full w-screen shrink-0 overflow-hidden bg-[#1a1f24]">
            <SharpPanelBg
              src={bgScene03}
              overlayClassName="bg-[#0f172a]/85"
              imageClassName="object-cover object-[center_center]"
            />
            {/* Same layout as Slide 12, but unified */}
            <div className="absolute bottom-[20%] left-0 right-0 z-[10] flex items-end justify-between px-2 sm:px-10">
              <div className="flex w-1/3 justify-start -space-x-8">
                <img src={annaBaseV1} alt="Anna" className="h-[40vh] object-contain object-bottom sm:h-[50vh]" />
                <img src={tomGesture} alt="Tom" className="h-[42vh] object-contain object-bottom sm:h-[52vh]" />
              </div>
              <div className="flex w-1/3 justify-center">
                <img src={joshNormal} alt="Josh" className="h-[50vh] object-contain object-bottom sm:h-[60vh]" />
              </div>
              <div className="flex w-1/3 justify-end -space-x-8">
                <img src={priyaThoughtful} alt="Priya" className="h-[40vh] object-contain object-bottom sm:h-[50vh]" />
                <img src={davidSitting} alt="David" className="h-[38vh] object-contain object-bottom sm:h-[48vh]" />
              </div>
            </div>

            <div className="absolute top-[10%] left-1/2 z-[40] w-[90%] -translate-x-1/2 sm:w-[70%]">
              <ComicPanelBubble tail="bottom-right" caption="All Four Agents At Once" className="rounded-2xl border-[4px] border-terracotta bg-[#FFFCF5] p-4 shadow-[8px_8px_0_rgba(184,92,56,1)]">
                <p className="font-comic text-[1.4rem] font-bold text-black sm:text-[1.8rem] text-center">"We back property decisions with research. Not hype."</p>
              </ComicPanelBubble>
            </div>

            <div className="absolute bottom-0 right-0 z-[40] flex flex-col justify-end pr-3 pb-0 sm:pr-4 sm:pb-1">
              <StickyCallout
                noteVariant="sticky"
                className="w-[min(13.5rem,calc(100vw-2rem))] sm:w-[min(100%,19rem)] md:w-[min(100%,20rem)]"
                narratorSrc={soubhPointing}
                narratorImgClassName="origin-bottom translate-y-0.5 sm:translate-y-1"
                narratorHeightClass="h-[clamp(10rem,22vw,14rem)] sm:h-[clamp(11rem,20vw,15rem)] md:h-[clamp(12rem,18vw,16rem)]"
                lines={[
                  "Internal alignment is the fastest outcome.",
                  "Most agencies feel it inside two weeks. Vendors feel it by month three."
                ]}
              />
            </div>
          </div>

          {/* ——— SLIDE 17 — SCENE 18 — Day 90: The Numbers ——— */}
          <div id="slide-17" className="relative h-full w-screen shrink-0 overflow-hidden bg-[#2c2b29]">
            <SharpPanelBg
              src={bgScene10}
              overlayClassName="bg-[#0f172a]/85"
              imageClassName="object-cover object-[center_center]"
            />
            {/* Whiteboard UI */}
            <div className="absolute left-[5%] top-[10%] z-[20] w-[90%] max-w-lg rounded border-4 border-gray-300 bg-white p-4 shadow-lg sm:left-[10%] sm:p-6">
              <h2 className="mb-4 font-comic text-xl font-bold uppercase underline decoration-terracotta decoration-4 underline-offset-4">90-Day Report</h2>
              <ul className="space-y-2 font-comic text-sm font-semibold sm:text-base">
                <li className="flex items-center gap-2"><span className="text-terracotta">✓</span> 36 pieces of content published</li>
                <li className="flex items-center gap-2"><span className="text-terracotta">✓</span> Engagement up significantly</li>
                <li className="flex items-center gap-2"><span className="text-terracotta">✓</span> 4x more inbound vendor enquiries</li>
                <li className="flex items-center gap-2"><span className="text-terracotta">✓</span> Commission discount reduced by ~60%</li>
                <li className="flex items-center gap-2"><span className="text-terracotta">✓</span> Team retention up</li>
              </ul>
            </div>

            <div className="pointer-events-none absolute bottom-[-40px] right-0 z-[50] flex flex-col items-center pb-0 pr-0 translate-x-12 sm:translate-x-16">
              <div className="pointer-events-auto relative z-[20] mb-2 w-[min(13.5rem,calc(100vw-2rem))] sm:mb-4 sm:w-[22rem] md:w-[24rem]">
                <ComicPanelBubble tail="bottom-right" caption="Josh" className="rounded-xl border-[3px] border-black bg-[#FFFCF5] p-3 shadow-[4px_4px_0_rgba(0,0,0,1)]">
                  <p className="font-comic text-[1.3rem] font-bold sm:text-[1.5rem]">"Soubh & Co. didn't give us new marketing. They gave us permission to be honest about how we work."</p>
                </ComicPanelBubble>
              </div>
              <div className="flex items-end">
                <img src={annaBaseV1} alt="Anna" className="relative z-[1] h-[min(65vh,550px)] w-auto origin-bottom object-contain object-bottom scale-x-[-1] sm:h-[min(70vh,600px)]" />
                <img src={joshNormal} alt="Josh" className="relative z-[2] -ml-8 h-[min(70vh,600px)] w-auto origin-bottom object-contain object-bottom scale-x-[-1] sm:h-[min(80vh,700px)]" />
              </div>
            </div>
          </div>

          {/* ——— SLIDE 18 — CLOSING SLIDE ——— */}
          <div id="slide-18" className="relative flex h-full w-screen shrink-0 flex-col items-center justify-center overflow-hidden bg-[#FAF8F3]">
            <div className="relative z-[30] mt-10 flex max-w-2xl flex-col items-center text-center px-4">
              <h1 className="font-serif text-3xl font-bold tracking-tight text-black sm:text-5xl md:text-6xl">Want this for your agency?</h1>
              <p className="mt-4 font-body text-lg font-semibold text-gray-700 sm:text-xl">Two-week sprint. Three deliverables. $5,000 founding rate. Three spots left.</p>
              
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <button className="rounded-full bg-terracotta px-8 py-4 font-comic text-lg font-bold text-white shadow-[4px_4px_0_rgba(0,0,0,1)] transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0_rgba(0,0,0,1)]">
                  Book your call →
                </button>
                <button className="rounded-full border-4 border-black px-8 py-4 font-comic text-lg font-bold text-black shadow-[4px_4px_0_rgba(0,0,0,1)] transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0_rgba(0,0,0,1)]">
                  Or skip the call: fill the intake form →
                </button>
              </div>
            </div>
            
            <img src={soubhSmile} alt="Soubh" className="absolute bottom-0 h-[40vh] object-contain object-bottom sm:h-[50vh] md:h-[60vh] z-[10]" />
          </div>
