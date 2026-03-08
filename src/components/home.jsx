import React from "react";

function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&display=swap');

        /*  F16 aircraft sweeping left→right  */
        @keyframes planeDash {
          0%   { transform: translateX(-20vw) scaleX(-1); opacity: 0; }
          3%   { opacity: 1; }
          46%  { opacity: 1; transform: translateX(115vw) scaleX(-1); }
          50%  { opacity: 0; transform: translateX(115vw) scaleX(-1); }
          100% { opacity: 0; transform: translateX(115vw) scaleX(-1); }
        }
        .plane-anim {
          position: absolute;
          top: 10%;
          left: 0;
          animation: planeDash 12s linear 0s infinite backwards;
          filter: drop-shadow(0 6px 14px rgba(0,0,0,0.6));
          pointer-events: none;
          z-index: 6;
        }

        /*  Tank rolling across bottom  */
        @keyframes tankForward {
          0%   { transform: translateX(-220px); }
          100% { transform: translateX(105vw); }
        }
        .tank-anim {
          position: absolute;
          bottom: 10%;
          left: 0;
          animation: tankForward 8s linear infinite;
          filter: drop-shadow(4px 6px 12px rgba(0,0,0,0.8));
          pointer-events: none;
          z-index: 4;
        }

        /*  scanline overlay for military HUD feel  */
        .scanlines {
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            to bottom,
            transparent,
            transparent 3px,
            rgba(0,0,0,0.07) 3px,
            rgba(0,0,0,0.07) 4px
          );
          pointer-events: none;
          z-index: 1;
        }

        /*  corner HUD brackets  */
        .hud-tl, .hud-tr, .hud-bl, .hud-br {
          position: absolute;
          width: 38px; height: 38px;
          border-color: rgba(100,220,80,0.6);
          border-style: solid;
          pointer-events: none;
          z-index: 3;
        }
        .hud-tl { top:16px; left:16px;  border-width:3px 0 0 3px; }
        .hud-tr { top:16px; right:16px; border-width:3px 3px 0 0; }
        .hud-bl { bottom:16px; left:16px;  border-width:0 0 3px 3px; }
        .hud-br { bottom:16px; right:16px; border-width:0 3px 3px 0; }

        /*  Text glitch blink on name  */
        @keyframes glitch {
          0%,95%,100% { text-shadow: 2px 0 #0f0, -2px 0 #f00; }
          96% { text-shadow: -3px 0 #0f0, 3px 0 #f00; clip-path: inset(10% 0 80% 0); }
          98% { text-shadow: 3px 0 #0f0, -3px 0 #f00; clip-path: inset(60% 0 10% 0); }
        }
        .name-glitch {
          animation: glitch 6s step-end infinite;
        }

        /*  Typewriter cursor blink  */
        @keyframes blink { 50% { opacity: 0; } }
        .cursor { animation: blink 0.8s step-end infinite; }

        /*  Buttons  */
        .home-btn {
          position: relative;
          overflow: hidden;
          transition: all 0.2s ease;
        }
        .home-btn::before {
          content: '';
          position: absolute;
          left: -100%; top: 0;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(100,255,80,0.2), transparent);
          transition: left 0.4s ease;
        }
        .home-btn:hover::before { left: 100%; }
        .home-btn:hover {
          border-color: rgba(100,255,80,0.9) !important;
          box-shadow: 0 0 22px rgba(80,255,60,0.5) !important;
          transform: scale(1.04);
        }
        .nav-li:hover { color: #aaffaa !important; }

        @keyframes pulse-gal {
          0%, 100% { border-color: rgba(100,220,80,0.3); box-shadow: 0 0 10px rgba(100,255,60,0.1); }
          50%      { border-color: rgba(100,220,80,0.6); box-shadow: 0 0 24px rgba(100,255,60,0.25); }
        }
        .gal-entry-btn {
          animation: pulse-gal 3s ease-in-out infinite;
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        .gal-entry-btn:hover {
          transform: scale(1.03);
          border-color: rgba(100,255,80,0.9) !important;
          box-shadow: 0 0 28px rgba(80,255,60,0.5) !important;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 860px) {
          .home-section-r {
            flex-direction: column !important;
            align-items: flex-start !important;
            justify-content: flex-start !important;
            padding: 90px 22px 50px !important;
            height: auto !important;
            min-height: 100vh !important;
          }
          .home-content-r {
            max-width: 100% !important;
            padding-top: 12px !important;
          }
          .home-name-r {
            font-size: 2.2rem !important;
            letter-spacing: 2px !important;
            -webkit-text-stroke: 1.5px #6afc30 !important;
          }
          .home-hello-r { font-size: 1rem !important; letter-spacing: 5px !important; }
          .home-role-r  { font-size: 0.85rem !important; letter-spacing: 2px !important; }
          .home-btn     { width: 130px !important; height: 44px !important; }
          .home-btn span { font-size: 0.75rem !important; letter-spacing: 3px !important; }
          .plane-anim, .tank-anim { display: none !important; }
          .gal-entry-btn {
            position: static !important;
            transform: none !important;
            width: 100% !important;
            flex-direction: row !important;
            justify-content: space-between !important;
            padding: 16px 20px !important;
            margin-top: 24px !important;
            align-items: center !important;
          }
        }

      `}</style>

      <section className="home-section-r" style={styles.container}>
        {/* scanlines HUD overlay */}
        <div className="scanlines" />
        <div className="hud-tl" /><div className="hud-tr" />
        <div className="hud-bl" /><div className="hud-br" />

        {/* Plane */}
        <img src="/plane.png" alt="F16" className="plane-anim" style={styles.planeImg} />

        {/* Tank rolling forward along bottom */}
        <img src="/tank.png" alt="Tank" className="tank-anim" style={styles.tankImg} />


        {/* Left Content */}
        <div className="home-content-r" style={styles.content}>
          <p style={styles.callsign}>[ OPERATOR ONLINE ]</p>
          <p className="home-hello-r" style={styles.hello}>HELLO , I&apos;M</p>
          <h1 style={styles.name} className="name-glitch home-name-r">SANKET CHAUDHARI</h1>

          <div style={styles.roleRow}>
            <span style={styles.roleTag}>&#9656;</span>
            <span className="home-role-r" style={styles.role}>FULLSTACK DEVELOPER</span>
          </div>
          <div style={styles.roleRow}>
            <span style={styles.roleTag}>&#9656;</span>
            <span className="home-role-r" style={styles.role}>UI / UX DESIGNER</span>
          </div>

          <div style={styles.divider} />

          <div style={styles.buttons}>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="home-btn"
              style={styles.btn}
            >
              <span style={styles.btnLabel}>&#128196; RESUME</span>
            </a>
            <a
              href="https://www.linkedin.com/in/sanket-c-2280b0342/"
              target="_blank"
              rel="noopener noreferrer"
              className="home-btn"
              style={styles.btn}
            >
              <span style={styles.btnLabel}>&#128279; LINKEDIN</span>
            </a>
            <a
              href="https://github.com/sanketchaudhari1264"
              target="_blank"
              rel="noopener noreferrer"
              className="home-btn"
              style={styles.btn}
            >
              <span style={styles.btnLabel}>&#128025; GITHUB</span>
            </a>
          </div>
        </div>

        {/* UI/UX Gallery entry section */}
        <div
          className="gal-entry-btn"
          style={styles.galleryCard}
          onClick={() => window.location.href = '/gallery'}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && (window.location.href = '/gallery')}
        >
          <p style={styles.galleryLabel}>[ VISUAL INTELLIGENCE ]</p>
          <h3 style={styles.galleryTitle}>UI / UX<br />GALLERY</h3>
          <p style={styles.galleryTag}>◌ COMING SOON</p>
          <p style={styles.galleryArrow}>► ENTER</p>
        </div>

      </section>
    </>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundImage: "url('/background.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "0 60px",
    boxSizing: "border-box",
    position: "relative",
    overflow: "hidden",
  },

  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingTop: "60px",
    maxWidth: "50%",
    zIndex: 2,
  },

  callsign: {
    fontSize: "0.75rem",
    color: "#6afc30",
    margin: "0 0 6px 2px",
    fontFamily: "'Share Tech Mono', 'Courier New', monospace",
    letterSpacing: "4px",
    opacity: 0.8,
  },

  hello: {
    fontSize: "1.5rem",
    color: "#aaccaa",
    margin: "0 0 4px 0",
    fontFamily: "'Share Tech Mono', 'Courier New', monospace",
    letterSpacing: "10px",
    fontWeight: "400",
    textTransform: "uppercase",
  },

  name: {
    fontSize: "3.8rem",
    margin: "0 0 20px 0",
    color: "transparent",
    WebkitTextStroke: "2px #6afc30",
    fontFamily: "'Orbitron', 'Courier New', monospace",
    letterSpacing: "3px",
    lineHeight: 1.1,
    textTransform: "uppercase",
    textShadow: "0 0 30px rgba(100,255,60,0.3)",
  },

  roleRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    margin: "4px 0",
  },

  roleTag: {
    color: "#6afc30",
    fontSize: "1.1rem",
  },

  role: {
    fontSize: "1.3rem",
    color: "#c8e6c8",
    fontFamily: "'Share Tech Mono', 'Courier New', monospace",
    letterSpacing: "4px",
    fontWeight: "400",
    textTransform: "uppercase",
  },

  divider: {
    width: "220px",
    height: "2px",
    background: "linear-gradient(90deg, #6afc30, transparent)",
    margin: "20px 0",
    opacity: 0.6,
  },

  buttons: {
    display: "flex",
    flexDirection: "row",
    gap: "16px",
    flexWrap: "wrap",
  },

  btn: {
    padding: "0",
    borderRadius: "4px",
    border: "2px solid rgba(100,220,80,0.5)",
    backgroundColor: "rgba(5, 30, 5, 0.85)",
    color: "#ccffcc",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 0 12px rgba(0,0,0,0.5), inset 0 0 8px rgba(0,30,0,0.5)",
    textDecoration: "none",
    width: "160px",
    height: "52px",
    flexShrink: 0,
  },

  btnLabel: {
    fontSize: "0.95rem",
    fontWeight: "700",
    letterSpacing: "5px",
    fontFamily: "'Orbitron', 'Courier New', monospace",
    color: "#6afc30",
  },

  mansImg: {
    width: "80px",
    marginTop: "6px",
    objectFit: "contain",
  },

  planeImg:  { width: "230px", maxWidth: "26vw" },
  tankImg:   { width: "200px", maxWidth: "22vw" },

  galleryCard: {
    position: "absolute",
    right: "60px",
    top: "50%",
    transform: "translateY(-50%)",
    background: "rgba(5, 20, 5, 0.82)",
    border: "1px solid rgba(100,220,80,0.3)",
    borderRadius: "8px",
    padding: "28px 32px",
    width: "180px",
    boxShadow: "0 0 30px rgba(0,0,0,0.7), inset 0 0 20px rgba(0,20,0,0.4)",
    backdropFilter: "blur(4px)",
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  galleryLabel: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.52rem",
    color: "rgba(100,220,80,0.6)",
    letterSpacing: "3px",
    margin: "0 0 10px 0",
  },
  galleryTitle: {
    fontFamily: "'Orbitron', monospace",
    fontSize: "1.1rem",
    color: "transparent",
    WebkitTextStroke: "1.5px #6afc30",
    letterSpacing: "4px",
    margin: "0 0 12px 0",
    lineHeight: 1.3,
    textShadow: "0 0 16px rgba(100,255,60,0.2)",
  },
  galleryTag: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.6rem",
    color: "rgba(100,220,80,0.5)",
    letterSpacing: "3px",
    margin: "0 0 16px 0",
  },
  galleryArrow: {
    fontFamily: "'Orbitron', monospace",
    fontSize: "0.7rem",
    color: "#6afc30",
    letterSpacing: "4px",
    margin: 0,
  },

};

export default Home;
