import React from "react";

function About() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&display=swap');

        /*  planes fly straight left→right, one by one (same as home)  */
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

        .about-plane-anim {
          position: absolute;
          top: 10%;
          left: 0;
          animation: planeDash 12s linear 0s infinite backwards;
          filter: drop-shadow(0 6px 14px rgba(0,0,0,0.6));
          pointer-events: none;
          z-index: 6;
        }
        .about-plane3-anim {
          position: absolute;
          top: 18%;
          left: 0;
          animation: plane3Dash 12s linear 6s infinite backwards;
          filter: drop-shadow(0 6px 14px rgba(0,0,0,0.5));
          pointer-events: none;
          z-index: 5;
        }

        /*  scanlines  */
        .about-scanlines {
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

        /*  HUD corners  */
        .about-hud-tl, .about-hud-tr, .about-hud-bl, .about-hud-br {
          position: absolute;
          width: 38px; height: 38px;
          border-color: rgba(100,220,80,0.6);
          border-style: solid;
          pointer-events: none;
          z-index: 3;
        }
        .about-hud-tl { top:16px; left:16px;  border-width:3px 0 0 3px; }
        .about-hud-tr { top:16px; right:16px; border-width:3px 3px 0 0; }
        .about-hud-bl { bottom:16px; left:16px;  border-width:0 0 3px 3px; }
        .about-hud-br { bottom:16px; right:16px; border-width:0 3px 3px 0; }

        /*  scroll fade-in  */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .about-card {
          animation: fadeUp 1s ease forwards;
        }

        /*  blinking label  */
        @keyframes blink { 50% { opacity: 0; } }
        .about-blink { animation: blink 1s step-end infinite; }

        /* ── RESPONSIVE ── */
        @media (max-width: 860px) {
          .about-plane-anim, .about-plane3-anim { display: none !important; }
          .about-card {
            padding: 28px 20px !important;
          }
          .about-heading-r {
            font-size: 1.6rem !important;
            letter-spacing: 4px !important;
          }
          .about-bio-r {
            font-size: 0.82rem !important;
          }
          .about-stats {
            gap: 10px !important;
          }
          .about-stat-chip {
            min-width: 100px !important;
            padding: 8px 12px !important;
          }
          .about-score-row {
            flex-wrap: wrap !important;
            gap: 10px !important;
          }
        }

      `}</style>

      <section style={styles.container}>
        <div className="about-scanlines" />
        <div className="about-hud-tl" /><div className="about-hud-tr" />
        <div className="about-hud-bl" /><div className="about-hud-br" />

        {/* Landing planes */}
        <img src="/plane.png"  alt="F16"    className="about-plane-anim"  style={styles.planeImg} />
        <img src="/plane3.png" alt="Plane3" className="about-plane3-anim" style={styles.plane3Img} />


        {/* Content card */}
        <div style={styles.wrapper}>
          <div className="about-card" style={styles.card}>
            {/* Top label */}
            <p style={styles.label}>
              <span className="about-blink" style={{ color: "#6afc30" }}>▐</span>
              &nbsp;[ MISSION BRIEFING ]&nbsp;
              <span className="about-blink" style={{ color: "#6afc30" }}>▌</span>
            </p>

            <h2 style={styles.heading}>ABOUT ME</h2>
            <div style={styles.divider} />

            <p style={styles.bio}>
              Hi, I&apos;m <span style={styles.highlight}>Sanket Chaudhari</span>, a Full-Stack Web
              Developer and UI/UX enthusiast who strongly believes in learning by building. I enjoy
              creating modern, user-friendly web applications by combining clean UI/UX design with
              practical development skills.
            </p>
            <p style={styles.bio}>
              My approach is simple: understand the problem, design a great user experience, and bring
              the idea to life through code. While I am continuously improving my coding skills, I
              believe that <span style={styles.highlight}>consistency, determination, and curiosity</span> are
              the keys to growth.
            </p>
            <p style={styles.bio}>
              I am currently focused on strengthening my expertise in web development, UI/UX design,
              and AI-based solutions, while building projects that solve real-world problems and create
              meaningful digital experiences for people.
            </p>

            <div style={styles.divider} />

            {/* Stat chips */}
            <div style={styles.stats}>
              {[
                { label: "ROLE",     value: "FULLSTACK DEV" },
                { label: "DESIGN",   value: "UI / UX" },
                { label: "FOCUS",    value: "AI SOLUTIONS" },
                { label: "STATUS",   value: "ACTIVE ●" },
              ].map(({ label, value }) => (
                <div key={label} style={styles.statChip}>
                  <span style={styles.statLabel}>{label}</span>
                  <span style={styles.statValue}>{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Education Card ── */}
          <div className="about-card" style={{ ...styles.card, marginTop: "28px" }}>
            <p style={styles.label}>
              <span className="about-blink" style={{ color: "#6afc30" }}>▐</span>
              &nbsp;[ ACADEMY FILE ]&nbsp;
              <span className="about-blink" style={{ color: "#6afc30" }}>▌</span>
            </p>
            <h2 style={styles.heading}>EDUCATION</h2>
            <div style={styles.divider} />

            <div style={styles.eduRow}>
              <div style={styles.eduIcon}>🎓</div>
              <div style={styles.eduInfo}>
                <p style={styles.eduDegree}>Bachelor of Technology (B.Tech)</p>
                <p style={styles.eduSpec}>Information Technology</p>
                <p style={styles.eduMeta}>🏛 K K Wagh College of Engineering, Nashik</p>
                <p style={styles.eduMeta}>📅 Final Year Student</p>
              </div>
            </div>

            <div style={styles.divider} />

            <div style={styles.scoreRow}>
              <div style={styles.scoreChip}>
                <span style={styles.scoreLabel}>CGPA</span>
                <span style={styles.scoreValue}>7.20</span>
              </div>
              <div style={styles.scoreChip}>
                <span style={styles.scoreLabel}>HSC</span>
                <span style={styles.scoreValue}>69.33%</span>
              </div>
              <div style={styles.scoreChip}>
                <span style={styles.scoreLabel}>SSC</span>
                <span style={styles.scoreValue}>66.8%</span>
              </div>
            </div>
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
    padding: "80px 40px 60px",
    boxSizing: "border-box",
  },

  wrapper: {
    position: "relative",
    zIndex: 2,
    width: "100%",
    maxWidth: "800px",
  },

  card: {
    background: "rgba(5, 20, 5, 0.82)",
    border: "1px solid rgba(100,220,80,0.35)",
    borderRadius: "8px",
    padding: "48px 52px",
    boxShadow: "0 0 40px rgba(0,0,0,0.7), inset 0 0 30px rgba(0,20,0,0.4), 0 0 0 1px rgba(100,220,80,0.1)",
    backdropFilter: "blur(4px)",
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
    margin: "20px 0",
  },

  bio: {
    fontFamily: "'Share Tech Mono', 'Courier New', monospace",
    fontSize: "1rem",
    color: "#c8e6c8",
    lineHeight: 1.85,
    margin: "0 0 16px 0",
    letterSpacing: "0.5px",
  },

  highlight: {
    color: "#6afc30",
    fontWeight: "700",
  },

  stats: {
    display: "flex",
    flexWrap: "wrap",
    gap: "14px",
    marginTop: "8px",
  },

  statChip: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "rgba(0,30,0,0.7)",
    border: "1px solid rgba(100,220,80,0.3)",
    borderRadius: "4px",
    padding: "10px 22px",
    minWidth: "120px",
    flex: "1",
  },

  statLabel: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.62rem",
    color: "rgba(100,220,80,0.6)",
    letterSpacing: "4px",
    marginBottom: "4px",
  },

  statValue: {
    fontFamily: "'Orbitron', monospace",
    fontSize: "0.8rem",
    color: "#6afc30",
    letterSpacing: "2px",
    fontWeight: "700",
  },

  planeImg:  { width: "220px", maxWidth: "25vw" },
  plane3Img: { width: "170px", maxWidth: "20vw" },

  eduRow: {
    display: "flex",
    alignItems: "flex-start",
    gap: "24px",
    marginBottom: "8px",
  },
  eduIcon: {
    fontSize: "3rem",
    lineHeight: 1,
    filter: "drop-shadow(0 0 10px rgba(100,255,60,0.3))",
  },
  eduInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  eduDegree: {
    fontFamily: "'Orbitron', monospace",
    fontSize: "1.1rem",
    color: "#6afc30",
    letterSpacing: "2px",
    margin: 0,
    fontWeight: "700",
  },
  eduSpec: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.85rem",
    color: "rgba(100,220,80,0.8)",
    letterSpacing: "3px",
    margin: 0,
  },
  eduMeta: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.82rem",
    color: "#c8e6c8",
    letterSpacing: "1px",
    margin: 0,
  },
  scoreRow: {
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
    marginTop: "4px",
  },
  scoreChip: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "rgba(0,30,0,0.7)",
    border: "1px solid rgba(100,220,80,0.3)",
    borderRadius: "4px",
    padding: "12px 28px",
    minWidth: "100px",
    flex: "1",
  },
  scoreLabel: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.62rem",
    color: "rgba(100,220,80,0.6)",
    letterSpacing: "4px",
    marginBottom: "6px",
  },
  scoreValue: {
    fontFamily: "'Orbitron', monospace",
    fontSize: "1.2rem",
    color: "#6afc30",
    letterSpacing: "2px",
    fontWeight: "700",
  },
};

export default About;
