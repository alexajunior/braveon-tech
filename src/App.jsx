import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const products = [
  {
    id: "carbonsight",
    index: "01",
    name: "CarbonSight.",
    url: "https://carbonsight.xyz",
    subline: "Planetary-scale verification.",
    description:
      "Foundational AI alignment applied to high-fidelity climate data. Mathematically verified, ecologically aligned.",
  },
  {
    id: "refractor",
    index: "02",
    name: "Baseline Refractor Assistant.",
    url: "https://github.com/alexajunior/baseline-refactor-assistant",
    subline: "Legacy code, crystallized.",
    description:
      "Stop drowning in technical debt. Localized AI untangles monolithic architectures and refracts complex logic into optimized, maintainable components.",
  },
  {
    id: "nurseflow",
    index: "03",
    name: "Nurseflow.",
    url: "https://github.com/alexajunior/NurseFlow",
    subline: "Care, unburdened.",
    description:
      "Silent, predictive intelligence for clinical workflows. Nurseflow absorbs the administrative friction so nurses can focus entirely on human care.",
  },
  {
    id: "aerohealth",
    index: "04",
    name: "AeroHealth App.",
    url: "https://github.com/alexajunior/AeroHealth-Mobile-App",
    subline: "The air you breathe, quantified.",
    description:
      "Real-time analysis of your environment, detecting invisible impurities and delivering immediate, actionable safety insights wherever you go.",
  },
];

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function ClimateVisual() {
  return (
    <div className="climate-visual visual-shell" aria-label="CarbonSight climate data visualization">
      <div className="visual-toolbar">
        <span className="live-dot" /> LIVE VERIFICATION
        <span className="toolbar-meta">CO₂ / 2026.10.01</span>
      </div>
      <div className="climate-map">
        <div className="map-grid" />
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="map-core"><span>1.42</span><small>gigatons verified</small></div>
        <i className="map-point point-one" /><i className="map-point point-two" /><i className="map-point point-three" />
      </div>
      <div className="visual-footer"><span>Global carbon index</span><strong>−12.8%</strong><span className="trend">↘ 4.2% this month</span></div>
    </div>
  );
}

function CodeVisual() {
  return (
    <div className="code-visual visual-shell" aria-label="Baseline Refractor Assistant code transformation">
      <div className="code-window-top"><i /><i /><i /><span>refractor / src</span></div>
      <div className="code-columns">
        <div className="code-pane"><small>BEFORE</small><code><em>class</em> Monolith &#123;<br />  <b>async</b> process(data) &#123;<br />    <span>if</span> (data.valid) &#123;<br />      <span>return</span> this.db<br />        .query(data)<br />        .then(this.normalize)<br />        .then(this.notify)<br />    &#125;<br />  &#125;<br />&#125;</code></div>
        <div className="prism"><span>✦</span></div>
        <div className="code-pane after"><small>AFTER</small><code><em>export</em> <b>const</b> processData =<br />  pipe(validate,<br />    queryDatabase,<br />    normalize,<br />    notifyTeam);<br /><br /><span>// composable by design</span></code></div>
      </div>
    </div>
  );
}

function NurseVisual() {
  return (
    <div className="nurse-visual" aria-label="Nurseflow clinical shift dashboard">
      <div className="tablet-glow" />
      <div className="tablet">
        <div className="tablet-bar"><span>NURSEFLOW</span><b>08:42</b></div>
        <div className="care-greeting">Good morning, <strong>Amara</strong><small>Tuesday, October 01</small></div>
        <div className="vitals"><div><small>ON SHIFT</small><strong>12 <i>patients</i></strong></div><div><small>ALERTS</small><strong className="alert">02 <i>priority</i></strong></div></div>
        <div className="patient-list"><small>LIVE PATIENT TELEMETRY</small><div><span className="avatar lavender">JM</span><strong>Jordan Mills <i>Room 204</i></strong><b>98<span>%</span></b></div><div><span className="avatar peach">AK</span><strong>Amara K. <i>Room 118</i></strong><b className="warning">91<span>%</span></b></div><div><span className="avatar mint">RS</span><strong>Ruth Saunders <i>Room 306</i></strong><b>97<span>%</span></b></div></div>
      </div>
    </div>
  );
}

function AeroVisual() {
  return (
    <div className="aero-visual">
      <div className="aero-orb" />
      <div className="phone">
        <div className="phone-notch" />
        <div className="phone-content"><div className="phone-header"><span>9:41</span><b>⌁</b></div><p>Current air quality</p><strong>92 <small>excellent</small></strong><div className="radar"><div className="radar-sweep" /><div className="radar-ring ring-a" /><div className="radar-ring ring-b" /><div className="radar-ring ring-c" /><i /><i /><i /></div><div className="air-card"><span>PM2.5</span><b>3 <small>μg/m³</small></b><em>Safe to breathe</em></div></div>
      </div>
    </div>
  );
}

function App() {
  const heroRef = useRef(null);
  const exploreRef = useRef(null);
  const [exploreOpen, setExploreOpen] = useState(false);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const closeExplore = (event) => {
      if (exploreRef.current && !exploreRef.current.contains(event.target)) {
        setExploreOpen(false);
      }
    };
    document.addEventListener("pointerdown", closeExplore);
    return () => document.removeEventListener("pointerdown", closeExplore);
  }, []);

  return (
    <div className="app">
      <header className="glass-nav">
        <a className="wordmark" href="#top" aria-label="Braveon AI home"><img src="/braveon-mark-cropped.png" alt="" /><span>Braveon <b>AI</b></span></a>
        <nav>{products.map((product) => <a key={product.id} href={`#${product.id}`}>{product.name.replace(".", "")}</a>)}<a href="#labs">Braveon Tech Labs</a></nav>
        <div className="explore-menu" ref={exploreRef}>
          <button className="nav-cta" type="button" aria-expanded={exploreOpen} aria-controls="explore-links" onClick={() => setExploreOpen((open) => !open)}>Explore <Arrow /></button>
          {exploreOpen && <div className="explore-links" id="explore-links" role="menu">
            {products.map((product) => <a key={product.id} href={`#${product.id}`} role="menuitem" onClick={() => setExploreOpen(false)}><span>{product.index}</span>{product.name.replace(".", "")}<Arrow /></a>)}
            <a href="#labs" role="menuitem" onClick={() => setExploreOpen(false)}><span>05</span>Braveon Tech Labs<Arrow /></a>
          </div>}
        </div>
      </header>

      <main id="top">
        <section className="hero" ref={heroRef}>
          <motion.div className="hero-content" style={{ scale: heroScale, opacity: heroOpacity }}>
            <div className="eyebrow"><span className="pulse" /> BRAVEON AI / 2026</div>
            <h1>Intelligence,<br /><span>aligned.</span></h1>
            <p>Building the resilient infrastructure, developer tools, and operational AI of tomorrow.</p>
            <a className="button button-light" href="#carbonsight">Explore the ecosystem <Arrow /></a>
          </motion.div>
          <div className="hero-mesh" aria-hidden="true"><div className="mesh-glow" /><div className="mesh-ring ring-large" /><div className="mesh-ring ring-small" /><div className="mesh-star star-one" /><div className="mesh-star star-two" /><div className="mesh-star star-three" /></div>
          <div className="hero-footer"><span>Scroll to explore</span><span>Global</span><span>↓</span></div>
        </section>

        <div className="ticker" aria-hidden="true"><div>Infrastructure <b>✦</b> Intelligence <b>✦</b> Alignment <b>✦</b> Infrastructure <b>✦</b> Intelligence <b>✦</b> Alignment <b>✦</b></div></div>

        <section className="product-section product-carbon" id="carbonsight">
          <div className="section-inner">
            <Reveal><div className="product-label"><span>{products[0].index}</span><span>CLIMATE INTELLIGENCE</span></div><h2>{products[0].name}</h2><p className="product-subline">{products[0].subline}</p><p className="product-description">{products[0].description}</p><a className="text-link" href={products[0].url} target="_blank" rel="noreferrer">Visit CarbonSight <Arrow /></a></Reveal>
            <Reveal delay={0.15}><ClimateVisual /></Reveal>
          </div>
        </section>

        <section className="product-section split-product" id="refractor">
          <div className="section-inner split-layout"><Reveal><div className="product-copy"><div className="product-label"><span>{products[1].index}</span><span>DEVELOPER INTELLIGENCE</span></div><h2>{products[1].name}</h2><p className="product-subline">{products[1].subline}</p><p className="product-description">{products[1].description}</p><a className="text-link" href={products[1].url} target="_blank" rel="noreferrer">Open the assistant <Arrow /></a></div></Reveal><Reveal delay={0.15}><CodeVisual /></Reveal></div>
        </section>

        <section className="product-section split-product" id="nurseflow">
          <div className="section-inner split-layout reversed"><Reveal><NurseVisual /></Reveal><Reveal delay={0.15}><div className="product-copy"><div className="product-label"><span>{products[2].index}</span><span>OPERATIONAL AI</span></div><h2>{products[2].name}</h2><p className="product-subline">{products[2].subline}</p><p className="product-description">{products[2].description}</p><a className="text-link" href={products[2].url} target="_blank" rel="noreferrer">Open Nurseflow <Arrow /></a></div></Reveal></div>
        </section>

        <section className="product-section aero-section" id="aerohealth">
          <div className="section-inner aero-inner"><Reveal><div className="aero-copy"><div className="product-label"><span>{products[3].index}</span><span>PERSONAL INTELLIGENCE</span></div><h2>{products[3].name}</h2><p className="product-subline">{products[3].subline}</p><p className="product-description">{products[3].description}</p><a className="text-link" href={products[3].url} target="_blank" rel="noreferrer">Open AeroHealth <Arrow /></a></div></Reveal><Reveal delay={0.2}><AeroVisual /></Reveal></div>
        </section>

        <section className="labs-section" id="labs">
          <div className="section-inner"><Reveal><div className="product-label"><span>05</span><span>THE EXPERIMENTAL WING</span></div><h2>Where the next<br /><span>signal begins.</span></h2></Reveal><div className="bento-grid"><Reveal delay={0.05}><article className="bento-card bento-large"><span>BRAVEON TECH LABS / 01</span><h3>Low-level thinking.<br />High-impact systems.</h3><p>C programming, algorithm optimization, and exoskeleton hardware research.</p><i>↗</i><div className="bento-graphic"><span /><span /><span /></div></article></Reveal><Reveal delay={0.1}><article className="bento-card bento-offline"><span>BUILD WITHOUT WIFI / 02</span><h3>Building beyond<br />the signal.</h3><p>The offline-first engineering newsletter.</p><i>↗</i></article></Reveal><Reveal delay={0.15}><article className="bento-card bento-audio"><span>BRAVEON AUDIO / 03</span><h3>Sound for<br />the future.</h3><p>Creative audio engineering and sonic branding.</p><i>↗</i><div className="waveform"><b /><b /><b /><b /><b /><b /><b /><b /><b /></div></article></Reveal></div></div>
        </section>
      </main>
      <footer><div className="footer-mark"><img src="/braveon-mark-cropped.png" alt="" /></div><p>Braveon AI — Intelligence, aligned.</p><a href="mailto:hello@braveon.ai">Start a conversation <Arrow /></a><small>© 2026 Braveon AI. Built for what&apos;s next.</small></footer>
    </div>
  );
}

export default App;
