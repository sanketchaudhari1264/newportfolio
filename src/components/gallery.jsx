import React from "react";

const DESIGN_PLACEHOLDERS = [
  { id: 1, title: "BRAND IDENTITY", tag: "Branding / Logo Design" },
  { id: 2, title: "MOBILE APP UI", tag: "iOS / Android Screens" },
  { id: 3, title: "DASHBOARD UX", tag: "Admin Panel Design" },
  { id: 4, title: "LANDING PAGE", tag: "Marketing / SaaS" },
  { id: 5, title: "DESIGN SYSTEM", tag: "Components / Tokens" },
  { id: 6, title: "MOTION DESIGN", tag: "Micro-Animations" },
];

function Gallery() {
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
        .gal-plane-anim {
          position: absolute; top: 10%; left: 0;
          animation: planeDash 12s linear 0s infinite backwards;
          filter: drop-shadow(0 6px 14px rgba(0,0,0,0.6));
          pointer-events: none; z-index: 6;
        }

        .gal-scanlines {
          position: absolute; inset: 0;
          background: repeating-linear-gradient(to bottom, transparent, transparent 3px, rgba(0,0,0,0.07) 3px, rgba(0,0,0,0.07) 4px);
          pointer-events: none; z-index: 1;
        }
        .gal-hud-tl, .gal-hud-tr, .gal-hud-bl, .gal-hud-br {
          position: absolute; width: 38px; height: 38px;
          border-color: rgba(100,220,80,0.6); border-style: solid;
          pointer-events: none; z-index: 3;
        }
        .gal-hud-tl { top:16px; left:16px;  border-width:3px 0 0 3px; }
        .gal-hud-tr { top:16px; right:16px; border-width:3px 3px 0 0; }
        .gal-hud-bl { bottom:16px; left:16px;  border-width:0 0 3px 3px; }
        .gal-hud-br { bottom:16px; right:16px; border-width:0 3px 3px 0; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .gal-anim { animation: fadeUp 0.8s ease forwards; }

        @keyframes blink { 50% { opacity: 0; } }
        .gal-blink { animation: blink 1s step-end infinite; }

        @keyframes pulse-border {
          0%, 100% { border-color: rgba(100,220,80,0.15); box-shadow: none; }
          50%      { border-color: rgba(100,220,80,0.4); box-shadow: 0 0 18px rgba(100,255,60,0.1); }
        }
        .gal-design-card {
          animation: pulse-border 3s ease-in-out infinite, fadeUp 0.8s ease forwards;
          opacity: 0;
        }

        @keyframes scanSweep {
          0%   { top: 0%; opacity: 0.6; }
          100% { top: 100%; opacity: 0; }
        }
        .gal-scan-line {
          position: absolute; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, rgba(100,255,60,0.5), transparent);
          animation: scanSweep 2.5s linear infinite;
          pointer-events: none;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 860px) {
          .gal-plane-anim { display: none !important; }
          .gal-grid-r {
            grid-template-columns: 1fr 1fr !important;
          }
          .gal-cs-title-r {
            font-size: 2rem !important;
            letter-spacing: 6px !important;
          }
          .gal-heading-r {
            font-size: 1.7rem !important;
            letter-spacing: 4px !important;
          }
          .gal-banner-r {
            padding: 28px 22px !important;
          }
        }
        @media (max-width: 480px) {
          .gal-grid-r { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <section style={styles.container}>
        <div className="gal-scanlines" />
        <div className="gal-hud-tl" /><div className="gal-hud-tr" />
        <div className="gal-hud-bl" /><div className="gal-hud-br" />

        <img src="/plane.png" alt="F16" className="gal-plane-anim" style={{ width: "220px", maxWidth: "25vw" }} />

        <div style={styles.wrapper}>
          {/* Header */}
          <div className="gal-anim">
            <p style={styles.label}>
              <span className="gal-blink" style={{ color: "#6afc30" }}>▐</span>
              &nbsp;[ VISUAL INTELLIGENCE UNIT ]&nbsp;
              <span className="gal-blink" style={{ color: "#6afc30" }}>▌</span>
            </p>
            <h2 className="gal-heading-r" style={styles.heading}>UI/UX GALLERY</h2>
            <div style={styles.divider} />
          </div>

          {/* Coming Soon banner */}
          <div className="gal-anim gal-banner-r" style={styles.comingSoonBanner}>
            <div className="gal-scan-line" />
            <p style={styles.csLabel}>◌ CLASSIFIED — INCOMING TRANSMISSION</p>
            <h3 className="gal-cs-title-r" style={styles.csTitle}>COMING SOON</h3>
            <p style={styles.csDesc}>
              Design assets, UI/UX case studies, and interactive prototypes are being
              prepared for deployment. Report back to base for further updates.
            </p>
          </div>

          {/* Design placeholder cards */}
          <div className="gal-grid-r" style={styles.grid}>
            {DESIGN_PLACEHOLDERS.map((item, i) => (
              <div
                key={item.id}
                className="gal-design-card"
                style={{ ...styles.designCard, animationDelay: `${0.1 * i}s` }}
              >
                {/* Preview area with scan effect */}
                <div style={styles.previewArea}>
                  <div className="gal-scan-line" />
                  <p style={styles.previewIcon}>🔒</p>
                  <p style={styles.previewText}>CLASSIFIED</p>
                </div>
                <div style={styles.cardInfo}>
                  <p style={styles.cardTitle}>{item.title}</p>
                  <p style={styles.cardTag}>{item.tag}</p>
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
    alignItems: "flex-start",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    padding: "100px 40px 80px",
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
  comingSoonBanner: {
    position: "relative",
    overflow: "hidden",
    background: "rgba(5, 20, 5, 0.82)",
    border: "1px solid rgba(100,220,80,0.4)",
    borderRadius: "8px",
    padding: "40px 48px",
    textAlign: "center",
    marginBottom: "40px",
    boxShadow: "0 0 40px rgba(0,0,0,0.7), inset 0 0 30px rgba(0,20,0,0.4), 0 0 0 1px rgba(100,220,80,0.1)",
    backdropFilter: "blur(4px)",
  },
  csLabel: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.7rem",
    color: "rgba(100,220,80,0.6)",
    letterSpacing: "5px",
    margin: "0 0 12px 0",
  },
  csTitle: {
    fontFamily: "'Orbitron', monospace",
    fontSize: "3rem",
    color: "transparent",
    WebkitTextStroke: "2px rgba(100,220,80,0.5)",
    letterSpacing: "10px",
    margin: "0 0 20px 0",
    textShadow: "0 0 30px rgba(100,255,60,0.2)",
  },
  csDesc: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.88rem",
    color: "rgba(200,230,200,0.7)",
    lineHeight: 1.9,
    maxWidth: "520px",
    margin: "0 auto",
    letterSpacing: "0.4px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "20px",
  },
  designCard: {
    background: "rgba(5, 20, 5, 0.65)",
    border: "1px dashed rgba(100,220,80,0.2)",
    borderRadius: "6px",
    overflow: "hidden",
    backdropFilter: "blur(4px)",
    transition: "border-color 0.3s",
  },
  previewArea: {
    position: "relative",
    height: "150px",
    background: "rgba(0, 15, 0, 0.6)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderBottom: "1px dashed rgba(100,220,80,0.15)",
  },
  previewIcon: {
    fontSize: "2rem",
    margin: "0 0 6px 0",
    opacity: 0.5,
  },
  previewText: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.65rem",
    color: "rgba(100,220,80,0.35)",
    letterSpacing: "6px",
    margin: 0,
  },
  cardInfo: {
    padding: "14px 18px",
  },
  cardTitle: {
    fontFamily: "'Orbitron', monospace",
    fontSize: "0.75rem",
    color: "rgba(100,220,80,0.7)",
    letterSpacing: "3px",
    margin: "0 0 4px 0",
  },
  cardTag: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.68rem",
    color: "rgba(200,230,200,0.45)",
    letterSpacing: "2px",
    margin: 0,
  },
};

export default Gallery;
