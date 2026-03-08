import React from "react";
import { useNavigate } from "react-router-dom";

const PROJECT_DATA = [
  {
    id: "smartkrishi",
    title: "SMARTKRISHI",
    subtitle: "Farmer's AI Doctor",
    desc: "A web-based farming assistant that helps farmers identify crop diseases and get practical farming advice using AI-powered image analysis.",
    tech: ["React.js", "Node.js", "Express.js", "OpenAI API", "Tailwind CSS"],
    liveUrl: "https://smartkrishi-ten.vercel.app",
    githubUrl: "https://github.com/sanketchaudhari1264/SMARTKRISHI-Farmers-AI-Doctor",
    route: "/projects/smartkrishi",
  },
  {
    id: "tyrex",
    title: "TYREX",
    subtitle: "Tyre Store Platform",
    desc: "A full-stack web application for a tyre store to showcase products and manage customer enquiries with a secure admin dashboard.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://tyer-x-sf51.vercel.app",
    githubUrl: "https://github.com/sanketchaudhari1264/tyer.x",
    route: "/projects/tyrex",
  },
  {
    id: "landvault",
    title: "LANDVAULT",
    subtitle: "AI-Powered Blockchain Land Registry",
    desc: "A full-stack frontend prototype of a decentralized land registry platform combining AI fraud detection, Ethereum blockchain, and IPFS for tamper-proof property ownership.",
    tech: ["React.js", "Vite", "Tailwind CSS", "React Router DOM", "Blockchain (Sim)", "IPFS (Sim)", "AI/ML (Sim)"],
    liveUrl: "https://landvault-demo.vercel.app",
    githubUrl: "https://github.com/sanketchaudhari1264/LandvaultDemo",
    route: "/projects/landvault",
  },
  {
    id: "ignaite",
    title: "IGNAITE",
    subtitle: "US-Based Startup Website",
    desc: "Contributed to the official ignAite company website as a Web Development Intern — delivering UI improvements, new sections, and production-grade frontend enhancements.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "GitHub", "UI/UX"],
    liveUrl: "https://ignaite.com/",
    githubUrl: "https://github.com/sanketchaudhari1264",
    route: "/projects/ignaite",
  },
  {
    id: "sc-portfolio",
    title: "SC PORTFOLIO",
    subtitle: "Military-Themed Dev Portfolio",
    desc: "This very portfolio — a military-ops themed React SPA with animated aircraft, HUD overlays, terminal-style UI, AI Commander panel, and full project showcase.",
    tech: ["React.js", "Vite", "React Router DOM", "CSS-in-JS", "Vercel"],
    liveUrl: "#",
    githubUrl: "https://github.com/sanketchaudhari1264",
    route: "/projects/sc-portfolio",
  },
];

const COMING_SOON = [
  {
    id: "coming1",
    title: "PROJECT ALPHA",
    subtitle: "Details Classified",
    desc: "A new mission is being planned. Stay tuned for deployment updates.",
  },
  {
    id: "coming2",
    title: "PROJECT BRAVO",
    subtitle: "Details Classified",
    desc: "Another operation is in the pipeline. Intel will be shared soon.",
  },
  {
    id: "coming3",
    title: "PROJECT CHARLIE",
    subtitle: "Details Classified",
    desc: "A classified operation is under development. Clearance level required.",
  },
  {
    id: "coming4",
    title: "PROJECT DELTA",
    subtitle: "Details Classified",
    desc: "Advanced recon mission in progress. Full intel release pending.",
  },
];

function Projects() {
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
        @keyframes plane3Dash {
          0%   { transform: translateX(-20vw); opacity: 0; }
          4%   { opacity: 1; }
          46%  { opacity: 1; transform: translateX(115vw); }
          50%  { opacity: 0; transform: translateX(115vw); }
          100% { opacity: 0; transform: translateX(115vw); }
        }

        .proj-plane-anim {
          position: absolute; top: 10%; left: 0;
          animation: planeDash 12s linear 0s infinite backwards;
          filter: drop-shadow(0 6px 14px rgba(0,0,0,0.6));
          pointer-events: none; z-index: 6;
        }
        .proj-plane3-anim {
          position: absolute; top: 18%; left: 0;
          animation: plane3Dash 12s linear 6s infinite backwards;
          filter: drop-shadow(0 6px 14px rgba(0,0,0,0.5));
          pointer-events: none; z-index: 5;
        }

        .proj-scanlines {
          position: absolute; inset: 0;
          background: repeating-linear-gradient(to bottom, transparent, transparent 3px, rgba(0,0,0,0.07) 3px, rgba(0,0,0,0.07) 4px);
          pointer-events: none; z-index: 1;
        }

        .proj-hud-tl, .proj-hud-tr, .proj-hud-bl, .proj-hud-br {
          position: absolute; width: 38px; height: 38px;
          border-color: rgba(100,220,80,0.6); border-style: solid;
          pointer-events: none; z-index: 3;
        }
        .proj-hud-tl { top:16px; left:16px;  border-width:3px 0 0 3px; }
        .proj-hud-tr { top:16px; right:16px; border-width:3px 3px 0 0; }
        .proj-hud-bl { bottom:16px; left:16px;  border-width:0 0 3px 3px; }
        .proj-hud-br { bottom:16px; right:16px; border-width:0 3px 3px 0; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .proj-card-anim { animation: fadeUp 0.8s ease forwards; }
        .proj-card-anim-delay { animation: fadeUp 0.8s ease 0.2s forwards; opacity: 0; }

        @keyframes blink { 50% { opacity: 0; } }
        .proj-blink { animation: blink 1s step-end infinite; }

        .proj-link-btn {
          position: relative; overflow: hidden; transition: all 0.2s ease;
          text-decoration: none;
        }
        .proj-link-btn::before {
          content: ''; position: absolute; left: -100%; top: 0;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(100,255,80,0.2), transparent);
          transition: left 0.4s ease;
        }
        .proj-link-btn:hover::before { left: 100%; }
        .proj-link-btn:hover {
          border-color: rgba(100,255,80,0.9) !important;
          box-shadow: 0 0 22px rgba(80,255,60,0.5) !important;
          transform: scale(1.04);
        }

        .proj-view-btn {
          position: relative; overflow: hidden; transition: all 0.2s ease;
          cursor: pointer;
        }
        .proj-view-btn::before {
          content: ''; position: absolute; left: -100%; top: 0;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(100,255,80,0.2), transparent);
          transition: left 0.4s ease;
        }
        .proj-view-btn:hover::before { left: 100%; }
        .proj-view-btn:hover {
          border-color: rgba(100,255,80,0.9) !important;
          box-shadow: 0 0 22px rgba(80,255,60,0.5) !important;
          transform: scale(1.04);
        }

        @keyframes pulse-border {
          0%, 100% { border-color: rgba(100,220,80,0.2); }
          50%      { border-color: rgba(100,220,80,0.5); }
        }
        .proj-coming-soon {
          animation: pulse-border 3s ease-in-out infinite, fadeUp 0.8s ease 0.4s forwards;
          opacity: 0;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 860px) {
          .proj-plane-anim, .proj-plane3-anim { display: none !important; }
          .proj-grid-r {
            grid-template-columns: 1fr !important;
          }
          .proj-card-anim, .proj-card-anim-delay, .proj-coming-soon {
            padding: 24px 18px !important;
          }
          .proj-heading-r {
            font-size: 1.7rem !important;
            letter-spacing: 4px !important;
          }
        `}</style>

      <section style={styles.container}>
        <div className="proj-scanlines" />
        <div className="proj-hud-tl" /><div className="proj-hud-tr" />
        <div className="proj-hud-bl" /><div className="proj-hud-br" />

        <img src="/plane.png"  alt="F16"    className="proj-plane-anim"  style={{ width: "220px", maxWidth: "25vw" }} />
        <img src="/plane3.png" alt="Plane3" className="proj-plane3-anim" style={{ width: "170px", maxWidth: "20vw" }} />


        <div style={styles.wrapper}>
          <p style={styles.label}>
            <span className="proj-blink" style={{ color: "#6afc30" }}>▐</span>
            &nbsp;[ FIELD OPERATIONS ]&nbsp;
            <span className="proj-blink" style={{ color: "#6afc30" }}>▌</span>
          </p>
          <h2 className="proj-heading-r" style={styles.heading}>PROJECTS</h2>
          <div style={styles.divider} />

          <div className="proj-grid-r" style={styles.grid}>
            {PROJECT_DATA.map((project, i) => (
              <div
                key={project.id}
                className={i === 0 ? "proj-card-anim" : "proj-card-anim-delay"}
                style={styles.card}
              >
                <div style={styles.cardTop}>
                  <span style={styles.cardIndex}>{String(i + 1).padStart(2, "0")}</span>
                  <span style={styles.cardStatus}>● DEPLOYED</span>
                </div>

                <h3 style={styles.cardTitle}>{project.title}</h3>
                <p style={styles.cardSubtitle}>{project.subtitle}</p>

                <div style={styles.cardDivider} />

                <p style={styles.cardDesc}>{project.desc}</p>

                <div style={styles.techRow}>
                  {project.tech.map((t) => (
                    <span key={t} style={styles.techChip}>{t}</span>
                  ))}
                </div>

                <div style={styles.cardActions}>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-link-btn"
                    style={styles.actionBtn}
                  >
                    🔗 LIVE DEMO
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-link-btn"
                    style={styles.actionBtn}
                  >
                    📂 GITHUB
                  </a>
                  <button
                    className="proj-view-btn"
                    style={styles.actionBtn}
                    onClick={() => navigate(project.route)}
                  >
                    📋 DETAILS
                  </button>
                </div>
              </div>
            ))}

            {/* Coming Soon cards */}
            {COMING_SOON.map((project) => (
              <div
                key={project.id}
                className="proj-coming-soon"
                style={styles.comingSoonCard}
              >
                <div style={styles.cardTop}>
                  <span style={styles.cardIndex}>??</span>
                  <span style={styles.comingSoonBadge}>◌ COMING SOON</span>
                </div>

                <h3 style={styles.cardTitle}>{project.title}</h3>
                <p style={styles.cardSubtitle}>{project.subtitle}</p>

                <div style={styles.cardDivider} />

                <p style={styles.cardDesc}>{project.desc}</p>

                <div style={{ ...styles.comingSoonLabel }}>
                  🔒 MISSION LOCKED
                </div>
              </div>
            ))}
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
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    padding: "100px 40px 60px",
    boxSizing: "border-box",
  },
  wrapper: {
    position: "relative",
    zIndex: 2,
    width: "100%",
    maxWidth: "1000px",
  },
  label: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.72rem",
    color: "rgba(100,220,80,0.7)",
    letterSpacing: "6px",
    textTransform: "uppercase",
    margin: "0 0 18px 0",
    textAlign: "center",
  },
  heading: {
    fontFamily: "'Orbitron', monospace",
    fontSize: "2.4rem",
    color: "transparent",
    WebkitTextStroke: "2px #6afc30",
    letterSpacing: "6px",
    textAlign: "center",
    margin: "0 0 16px 0",
    textShadow: "0 0 24px rgba(100,255,60,0.25)",
  },
  divider: {
    width: "100%",
    height: "1px",
    background: "linear-gradient(90deg, transparent, rgba(100,220,80,0.5), transparent)",
    margin: "20px 0 40px 0",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
    gap: "30px",
  },
  card: {
    background: "rgba(5, 20, 5, 0.82)",
    border: "1px solid rgba(100,220,80,0.35)",
    borderRadius: "8px",
    padding: "32px 36px",
    boxShadow: "0 0 40px rgba(0,0,0,0.7), inset 0 0 30px rgba(0,20,0,0.4), 0 0 0 1px rgba(100,220,80,0.1)",
    backdropFilter: "blur(4px)",
    display: "flex",
    flexDirection: "column",
  },
  cardTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "12px",
  },
  cardIndex: {
    fontFamily: "'Orbitron', monospace",
    fontSize: "0.7rem",
    color: "rgba(100,220,80,0.5)",
    letterSpacing: "4px",
  },
  cardStatus: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.65rem",
    color: "#6afc30",
    letterSpacing: "3px",
  },
  cardTitle: {
    fontFamily: "'Orbitron', monospace",
    fontSize: "1.5rem",
    color: "transparent",
    WebkitTextStroke: "1.5px #6afc30",
    letterSpacing: "4px",
    margin: "0 0 4px 0",
    textShadow: "0 0 16px rgba(100,255,60,0.2)",
  },
  cardSubtitle: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.8rem",
    color: "rgba(100,220,80,0.7)",
    letterSpacing: "3px",
    margin: "0 0 12px 0",
    textTransform: "uppercase",
  },
  cardDivider: {
    width: "100%",
    height: "1px",
    background: "linear-gradient(90deg, rgba(100,220,80,0.4), transparent)",
    margin: "8px 0 16px 0",
  },
  cardDesc: {
    fontFamily: "'Share Tech Mono', 'Courier New', monospace",
    fontSize: "0.9rem",
    color: "#c8e6c8",
    lineHeight: 1.75,
    margin: "0 0 20px 0",
    letterSpacing: "0.4px",
  },
  techRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginBottom: "24px",
  },
  techChip: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.65rem",
    color: "#6afc30",
    letterSpacing: "2px",
    background: "rgba(0,30,0,0.7)",
    border: "1px solid rgba(100,220,80,0.3)",
    borderRadius: "3px",
    padding: "4px 12px",
  },
  cardActions: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    marginTop: "auto",
  },
  actionBtn: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.75rem",
    color: "#ccffcc",
    letterSpacing: "2px",
    padding: "8px 20px",
    borderRadius: "4px",
    border: "1px solid rgba(100,220,80,0.5)",
    backgroundColor: "rgba(5, 30, 5, 0.85)",
    cursor: "pointer",
    boxShadow: "0 0 12px rgba(0,0,0,0.5), inset 0 0 8px rgba(0,30,0,0.5)",
    textDecoration: "none",
    display: "inline-block",
  },
  comingSoonCard: {
    background: "rgba(5, 20, 5, 0.65)",
    border: "1px dashed rgba(100,220,80,0.25)",
    borderRadius: "8px",
    padding: "32px 36px",
    boxShadow: "0 0 30px rgba(0,0,0,0.5), inset 0 0 20px rgba(0,20,0,0.3)",
    backdropFilter: "blur(4px)",
    display: "flex",
    flexDirection: "column",
  },
  comingSoonBadge: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.65rem",
    color: "rgba(100,220,80,0.5)",
    letterSpacing: "3px",
  },
  comingSoonLabel: {
    fontFamily: "'Orbitron', monospace",
    fontSize: "0.85rem",
    color: "rgba(100,220,80,0.4)",
    letterSpacing: "4px",
    textAlign: "center",
    marginTop: "auto",
    padding: "14px 0 4px 0",
  },
};

export default Projects;
