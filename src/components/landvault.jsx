import React from "react";
import { useNavigate } from "react-router-dom";

function LandVault() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&display=swap');

        @keyframes planeDash {
          0%   { transform: translateX(-20vw) scaleX(-1); opacity: 0; }
          4%   { opacity: 1; }
          46%  { opacity: 1; transform: translateX(115vw) scaleX(-1); }
          50%  { opacity: 0; transform: translateX(115vw) scaleX(-1); }
          100% { opacity: 0; transform: translateX(115vw) scaleX(-1); }
        }

        .lv-plane-anim {
          position: absolute; top: 10%; left: 0;
          animation: planeDash 12s linear 0s infinite backwards;
          filter: drop-shadow(0 6px 14px rgba(0,0,0,0.6));
          pointer-events: none; z-index: 6;
        }

        .lv-scanlines {
          position: absolute; inset: 0;
          background: repeating-linear-gradient(to bottom, transparent, transparent 3px, rgba(0,0,0,0.07) 3px, rgba(0,0,0,0.07) 4px);
          pointer-events: none; z-index: 1;
        }

        .lv-hud-tl, .lv-hud-tr, .lv-hud-bl, .lv-hud-br {
          position: absolute; width: 38px; height: 38px;
          border-color: rgba(100,220,80,0.6); border-style: solid;
          pointer-events: none; z-index: 3;
        }
        .lv-hud-tl { top:16px; left:16px;  border-width:3px 0 0 3px; }
        .lv-hud-tr { top:16px; right:16px; border-width:3px 3px 0 0; }
        .lv-hud-bl { bottom:16px; left:16px;  border-width:0 0 3px 3px; }
        .lv-hud-br { bottom:16px; right:16px; border-width:0 3px 3px 0; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .lv-card-anim { animation: fadeUp 0.8s ease forwards; }

        @keyframes blink { 50% { opacity: 0; } }
        .lv-blink { animation: blink 1s step-end infinite; }

        .lv-link-btn {
          position: relative; overflow: hidden; transition: all 0.2s ease;
          text-decoration: none;
        }
        .lv-link-btn::before {
          content: ''; position: absolute; left: -100%; top: 0;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(100,255,80,0.2), transparent);
          transition: left 0.4s ease;
        }
        .lv-link-btn:hover::before { left: 100%; }
        .lv-link-btn:hover {
          border-color: rgba(100,255,80,0.9) !important;
          box-shadow: 0 0 22px rgba(80,255,60,0.5) !important;
          transform: scale(1.04);
        }

        .lv-back-btn {
          position: relative; overflow: hidden; transition: all 0.2s ease;
          cursor: pointer;
        }
        .lv-back-btn:hover {
          border-color: rgba(100,255,80,0.9) !important;
          box-shadow: 0 0 22px rgba(80,255,60,0.5) !important;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 860px) {
          .lv-plane-anim { display: none !important; }
          .lv-sect-r { padding: 100px 18px 40px !important; }
          .lv-card-anim { padding: 28px 22px !important; }
          .lv-heading-r { font-size: 1.8rem !important; letter-spacing: 4px !important; }
        }
      `}</style>

      <section className="lv-sect-r" style={styles.container}>
        <div className="lv-scanlines" />
        <div className="lv-hud-tl" /><div className="lv-hud-tr" />
        <div className="lv-hud-bl" /><div className="lv-hud-br" />

        <img src="/plane.png" alt="F16" className="lv-plane-anim" style={{ width: "220px", maxWidth: "25vw" }} />

        <div style={styles.wrapper}>
          <div className="lv-card-anim" style={styles.card}>

            <button className="lv-back-btn" style={styles.backBtn} onClick={() => navigate("/projects")}>
              ◄ BACK TO PROJECTS
            </button>

            <p style={styles.label}>
              <span className="lv-blink" style={{ color: "#6afc30" }}>▐</span>
              &nbsp;[ MISSION FILE #03 ]&nbsp;
              <span className="lv-blink" style={{ color: "#6afc30" }}>▌</span>
            </p>

            <h2 className="lv-heading-r" style={styles.heading}>LANDVAULT</h2>
            <p style={styles.subtitle}>AI-POWERED BLOCKCHAIN LAND REGISTRY SYSTEM</p>
            <div style={styles.divider} />

            <div style={styles.linkRow}>
              <a href="https://landvault-demo.vercel.app" target="_blank" rel="noopener noreferrer"
                className="lv-link-btn" style={styles.linkBtn}>
                🔗 LIVE DEMO
              </a>
              <a href="https://github.com/sanketchaudhari1264/landvaultmain" target="_blank" rel="noopener noreferrer"
                className="lv-link-btn" style={styles.linkBtn}>
                📂 GITHUB
              </a>
            </div>

            <div style={styles.divider} />

            <h3 style={styles.sectionTitle}>▸ OVERVIEW</h3>
            <p style={styles.text}>
              LandVault is a React-based Single Page Application (SPA) that simulates a modern,
              decentralized land registration system. The platform supports three role-based portals —
              Buyer, Seller, and Admin — each with a dedicated dashboard and end-to-end workflow.
            </p>
            <p style={styles.text}>
              Users register with KYC document verification, sellers list properties that undergo
              AI-powered fraud analysis (97.77% accuracy simulation), and verified properties are
              pushed to IPFS for decentralized document storage before being permanently recorded as
              an immutable Ethereum blockchain transaction.
            </p>

            <div style={styles.divider} />

            <h3 style={styles.sectionTitle}>▸ KEY FEATURES</h3>
            <div style={styles.featureGrid}>
              {[
                { icon: "🔐", title: "3-Role Authentication", desc: "Buyer, Seller, Admin portals with role-based route protection and dedicated dashboards." },
                { icon: "🪪", title: "KYC Verification", desc: "3-step registration with government ID document upload (Aadhaar, PAN, Passport)." },
                { icon: "🤖", title: "AI Fraud Detection", desc: "Simulated ML model analyzing property documents with confidence scoring (97.77% accuracy)." },
                { icon: "🌐", title: "IPFS Storage", desc: "Decentralized document storage — generates unique content-addressed hashes for each property." },
                { icon: "⛓️", title: "Blockchain Registration", desc: "Ethereum transaction hash generation as immutable, tamper-proof ownership proof." },
                { icon: "🏠", title: "7-Step Transaction Flow", desc: "Complete end-to-end property acquisition workflow from listing to blockchain confirmation." },
                { icon: "✨", title: "Glassmorphism UI", desc: "Animated particle canvas hero section, scroll-reveal animations, and glassmorphism design system." },
                { icon: "🗂", title: "Reusable Sidebar", desc: "Shared Sidebar component across all three role dashboards with nested routing architecture." },
              ].map((f) => (
                <div key={f.title} style={styles.featureItem}>
                  <span style={styles.featureIcon}>{f.icon}</span>
                  <div>
                    <span style={styles.featureTitle}>{f.title}</span>
                    <p style={styles.featureDesc}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={styles.divider} />

            <h3 style={styles.sectionTitle}>▸ HOW IT WORKS</h3>
            <ol style={styles.steps}>
              <li style={styles.stepItem}>Seller registers via 3-step KYC (government ID upload + verification).</li>
              <li style={styles.stepItem}>Seller lists a property with documents — Admin reviews and triggers AI fraud analysis.</li>
              <li style={styles.stepItem}>AI model scans documents for anomalies and returns a confidence score.</li>
              <li style={styles.stepItem}>Verified documents are uploaded to IPFS — a unique content hash is generated.</li>
              <li style={styles.stepItem}>Property is registered on Ethereum — an immutable transaction hash is issued.</li>
              <li style={styles.stepItem}>Buyer browses on-chain properties, sends a purchase request, and receives blockchain proof upon completion.</li>
            </ol>

            <div style={styles.divider} />

            <h3 style={styles.sectionTitle}>▸ TECH STACK</h3>
            <div style={styles.techGrid}>
              {[
                { label: "UI LIBRARY", value: "React 19.2.0" },
                { label: "BUILD TOOL", value: "Vite 7.3.1" },
                { label: "STYLING", value: "Tailwind CSS 4.2.1" },
                { label: "ROUTING", value: "React Router DOM 7.13.1" },
                { label: "ICONS", value: "Font Awesome 6 (CDN)" },
                { label: "FONTS", value: "Google Fonts – Poppins, Orbitron" },
                { label: "ANIMATIONS", value: "HTML5 Canvas API + IntersectionObserver" },
                { label: "LINTING", value: "ESLint 9.x + react-hooks plugin" },
                { label: "BLOCKCHAIN", value: "Ethereum (Conceptual/Simulated)" },
                { label: "STORAGE", value: "IPFS (Conceptual/Simulated)" },
                { label: "AI / ML", value: "Document Fraud Detection (Simulated)" },
                { label: "KYC", value: "Aadhaar / PAN / Passport Verification" },
              ].map(({ label, value }) => (
                <div key={label} style={styles.techChip}>
                  <span style={styles.techLabel}>{label}</span>
                  <span style={styles.techValue}>{value}</span>
                </div>
              ))}
            </div>

            <div style={styles.divider} />

            <h3 style={styles.sectionTitle}>▸ PROJECT GOAL</h3>
            <p style={styles.text}>
              LandVault demonstrates how decentralized technologies — blockchain, IPFS, and AI —
              can eliminate fraud and bring transparency to land registry systems. It showcases
              complex multi-role application architecture built entirely on the React ecosystem,
              combined with simulated cutting-edge tech for portfolio impact.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundImage: "url('/background.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    padding: "100px 40px 60px",
    boxSizing: "border-box",
  },
  wrapper: { position: "relative", zIndex: 2, width: "100%", maxWidth: "850px" },
  card: {
    background: "rgba(5, 20, 5, 0.82)",
    border: "1px solid rgba(100,220,80,0.35)",
    borderRadius: "8px",
    padding: "48px 52px",
    boxShadow: "0 0 60px rgba(0,0,0,0.8), inset 0 0 40px rgba(0,20,0,0.5)",
    backdropFilter: "blur(6px)",
  },
  backBtn: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.72rem",
    color: "rgba(100,220,80,0.7)",
    letterSpacing: "3px",
    padding: "8px 18px",
    borderRadius: "4px",
    border: "1px solid rgba(100,220,80,0.3)",
    backgroundColor: "transparent",
    marginBottom: "36px",
    display: "inline-block",
  },
  label: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.72rem",
    color: "rgba(100,220,80,0.7)",
    letterSpacing: "6px",
    textTransform: "uppercase",
    margin: "0 0 18px 0",
  },
  heading: {
    fontFamily: "'Orbitron', monospace",
    fontSize: "2.4rem",
    color: "transparent",
    WebkitTextStroke: "2px #6afc30",
    letterSpacing: "6px",
    margin: "0 0 8px 0",
    textShadow: "0 0 24px rgba(100,255,60,0.25)",
  },
  subtitle: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.85rem",
    color: "rgba(100,220,80,0.7)",
    letterSpacing: "4px",
    textTransform: "uppercase",
    margin: "0 0 4px 0",
  },
  divider: {
    width: "100%",
    height: "1px",
    background: "linear-gradient(90deg, transparent, rgba(100,220,80,0.5), transparent)",
    margin: "28px 0",
  },
  linkRow: { display: "flex", gap: "14px", flexWrap: "wrap" },
  linkBtn: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.75rem",
    color: "#ccffcc",
    letterSpacing: "2px",
    padding: "10px 24px",
    borderRadius: "4px",
    border: "1px solid rgba(100,220,80,0.5)",
    backgroundColor: "rgba(5, 30, 5, 0.85)",
    cursor: "pointer",
    boxShadow: "0 0 12px rgba(0,0,0,0.5)",
    textDecoration: "none",
    display: "inline-block",
  },
  sectionTitle: {
    fontFamily: "'Orbitron', monospace",
    fontSize: "0.9rem",
    color: "#6afc30",
    letterSpacing: "4px",
    margin: "0 0 18px 0",
  },
  text: {
    fontFamily: "'Share Tech Mono', 'Courier New', monospace",
    fontSize: "0.9rem",
    color: "#c8e6c8",
    lineHeight: 1.8,
    margin: "0 0 14px 0",
    letterSpacing: "0.3px",
  },
  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
    gap: "16px",
    marginBottom: "8px",
  },
  featureItem: {
    display: "flex",
    gap: "14px",
    alignItems: "flex-start",
    background: "rgba(0,30,0,0.4)",
    border: "1px solid rgba(100,220,80,0.15)",
    borderRadius: "6px",
    padding: "14px 16px",
  },
  featureIcon: { fontSize: "1.4rem", flexShrink: 0, marginTop: "2px" },
  featureTitle: {
    fontFamily: "'Orbitron', monospace",
    fontSize: "0.72rem",
    color: "#6afc30",
    letterSpacing: "2px",
    display: "block",
    marginBottom: "4px",
  },
  featureDesc: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.78rem",
    color: "rgba(200,230,200,0.75)",
    lineHeight: 1.6,
    margin: 0,
  },
  steps: { paddingLeft: "22px", margin: "0 0 8px 0" },
  stepItem: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.88rem",
    color: "#c8e6c8",
    lineHeight: 1.8,
    marginBottom: "8px",
    letterSpacing: "0.3px",
  },
  techGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "10px",
    marginBottom: "8px",
  },
  techChip: {
    display: "flex",
    flexDirection: "column",
    background: "rgba(0,30,0,0.7)",
    border: "1px solid rgba(100,220,80,0.2)",
    borderRadius: "4px",
    padding: "10px 14px",
  },
  techLabel: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.6rem",
    color: "rgba(100,220,80,0.6)",
    letterSpacing: "3px",
    marginBottom: "4px",
  },
  techValue: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.78rem",
    color: "#c8e6c8",
    letterSpacing: "1px",
  },
};

export default LandVault;
