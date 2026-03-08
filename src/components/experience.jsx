import React from "react";

const EXPERIENCE_DATA = [
  {
    id: "ignaite",
    role: "Web Development Intern",
    company: "ignAite",
    type: "US-Based Startup",
    duration: "Internship",
    status: "COMPLETED",
    desc: "Worked as a Web Development Intern at ignAite, a US-based startup, contributing to the enhancement of the company website. My responsibilities included website analysis, UI improvement planning, and implementing frontend changes for sections like Blog and Home. I also learned backend fundamentals such as Node.js, Express, and MongoDB while following professional development workflows using GitHub.",
    skills: ["React.js", "Node.js", "Express", "MongoDB", "GitHub", "UI/UX", "Frontend Dev"],
  },
];

function Experience() {
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
        .exp-plane-anim {
          position: absolute; top: 10%; left: 0;
          animation: planeDash 12s linear 0s infinite backwards;
          filter: drop-shadow(0 6px 14px rgba(0,0,0,0.6));
          pointer-events: none; z-index: 6;
        }
        .exp-plane3-anim {
          position: absolute; top: 18%; left: 0;
          animation: plane3Dash 12s linear 6s infinite backwards;
          filter: drop-shadow(0 6px 14px rgba(0,0,0,0.5));
          pointer-events: none; z-index: 5;
        }

        .exp-scanlines {
          position: absolute; inset: 0;
          background: repeating-linear-gradient(to bottom, transparent, transparent 3px, rgba(0,0,0,0.07) 3px, rgba(0,0,0,0.07) 4px);
          pointer-events: none; z-index: 1;
        }
        .exp-hud-tl, .exp-hud-tr, .exp-hud-bl, .exp-hud-br {
          position: absolute; width: 38px; height: 38px;
          border-color: rgba(100,220,80,0.6); border-style: solid;
          pointer-events: none; z-index: 3;
        }
        .exp-hud-tl { top:16px; left:16px;  border-width:3px 0 0 3px; }
        .exp-hud-tr { top:16px; right:16px; border-width:3px 3px 0 0; }
        .exp-hud-bl { bottom:16px; left:16px;  border-width:0 0 3px 3px; }
        .exp-hud-br { bottom:16px; right:16px; border-width:0 3px 3px 0; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .exp-card-anim { animation: fadeUp 0.8s ease forwards; }

        @keyframes blink { 50% { opacity: 0; } }
        .exp-blink { animation: blink 1s step-end infinite; }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%      { opacity: 0.4; }
        }
        .exp-pulse { animation: pulse 2s ease-in-out infinite; }

        @keyframes timelinePulse {
          0%, 100% { box-shadow: 0 0 8px rgba(100,255,60,0.4); }
          50%      { box-shadow: 0 0 20px rgba(100,255,60,0.9); }
        }
        .exp-dot { animation: timelinePulse 2s ease-in-out infinite; }

        /* ── RESPONSIVE ── */
        @media (max-width: 860px) {
          .exp-plane-anim, .exp-plane3-anim { display: none !important; }
          .exp-timeline-item-r {
            flex-direction: column !important;
            gap: 10px !important;
          }
          .exp-timeline-left-r {
            flex-direction: row !important;
            min-width: auto !important;
            padding-top: 0 !important;
            align-items: center !important;
            gap: 10px !important;
          }
          .exp-line-r { display: none !important; }
          .exp-card-r {
            padding: 20px 16px !important;
          }
          .exp-card-header-r {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .exp-badges-r {
            flex-direction: row !important;
            align-items: center !important;
            flex-wrap: wrap !important;
          }
          .exp-heading-r {
            font-size: 1.7rem !important;
            letter-spacing: 4px !important;
          }
        }
      `}</style>

      <section style={styles.container}>
        <div className="exp-scanlines" />
        <div className="exp-hud-tl" /><div className="exp-hud-tr" />
        <div className="exp-hud-bl" /><div className="exp-hud-br" />

        <img src="/plane.png"  alt="F16"    className="exp-plane-anim"  style={{ width: "220px", maxWidth: "25vw" }} />
        <img src="/plane3.png" alt="Plane3" className="exp-plane3-anim" style={{ width: "170px", maxWidth: "20vw" }} />

        <div style={styles.wrapper}>
          <p style={styles.label}>
            <span className="exp-blink" style={{ color: "#6afc30" }}>▐</span>
            &nbsp;[ DEPLOYMENT HISTORY ]&nbsp;
            <span className="exp-blink" style={{ color: "#6afc30" }}>▌</span>
          </p>
          <h2 className="exp-heading-r" style={styles.heading}>EXPERIENCE</h2>
          <div style={styles.divider} />

          {/* Timeline */}
          <div style={styles.timeline}>
            {EXPERIENCE_DATA.map((exp, i) => (
              <div key={exp.id} className="exp-card-anim exp-timeline-item-r" style={styles.timelineItem}>
                {/* Left: dot + line */}
                <div className="exp-timeline-left-r" style={styles.timelineLeft}>
                  <div className="exp-dot" style={styles.dot} />
                  {i < EXPERIENCE_DATA.length - 1 && <div className="exp-line-r" style={styles.line} />}
                </div>

                {/* Right: card */}
                <div className="exp-card-r" style={styles.card}>
                  <div className="exp-card-header-r" style={styles.cardHeader}>
                    <div>
                      <h3 style={styles.role}>{exp.role}</h3>
                      <p style={styles.company}>
                        🏢 {exp.company}
                        <span style={styles.companyType}> — {exp.type}</span>
                      </p>
                    </div>
                    <div className="exp-badges-r" style={styles.badges}>
                      <span style={styles.statusBadge}>
                        <span className="exp-pulse" style={{ color: "#6afc30" }}>●</span>
                        &nbsp;{exp.status}
                      </span>
                      <span style={styles.durationBadge}>{exp.duration}</span>
                    </div>
                  </div>

                  <div style={styles.cardDivider} />

                  <p style={styles.desc}>{exp.desc}</p>

                  <div style={styles.skillRow}>
                    {exp.skills.map((s) => (
                      <span key={s} style={styles.skillChip}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Coming Soon slot */}
            <div style={styles.timelineItem}>
              <div style={styles.timelineLeft}>
                <div style={{ ...styles.dot, background: "rgba(100,220,80,0.2)", border: "2px dashed rgba(100,220,80,0.4)" }} />
              </div>
              <div style={{ ...styles.card, border: "1px dashed rgba(100,220,80,0.25)", background: "rgba(5,20,5,0.5)" }}>
                <p style={{ ...styles.role, color: "rgba(100,220,80,0.4)" }}>NEXT MISSION</p>
                <p style={{ ...styles.company, color: "rgba(100,220,80,0.3)" }}>🔒 CLASSIFIED — Intel Pending</p>
                <div style={styles.cardDivider} />
                <p style={{ ...styles.desc, color: "rgba(200,230,200,0.35)" }}>
                  Next deployment details are yet to be confirmed. Stand by for updates.
                </p>
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
    padding: "100px 40px 80px",
    boxSizing: "border-box",
  },
  wrapper: {
    position: "relative",
    zIndex: 2,
    width: "100%",
    maxWidth: "860px",
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
  timeline: {
    display: "flex",
    flexDirection: "column",
    gap: "0",
  },
  timelineItem: {
    display: "flex",
    flexDirection: "row",
    gap: "24px",
    alignItems: "flex-start",
    marginBottom: "32px",
  },
  timelineLeft: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "6px",
    minWidth: "24px",
  },
  dot: {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    background: "#6afc30",
    border: "3px solid rgba(100,255,60,0.4)",
    flexShrink: 0,
  },
  line: {
    width: "2px",
    flex: 1,
    minHeight: "40px",
    background: "linear-gradient(to bottom, rgba(100,220,80,0.5), rgba(100,220,80,0.1))",
    margin: "6px 0",
  },
  card: {
    flex: 1,
    background: "rgba(5, 20, 5, 0.88)",
    border: "1px solid rgba(100,220,80,0.35)",
    borderRadius: "8px",
    padding: "28px 32px",
    boxShadow: "0 0 30px rgba(0,0,0,0.6), inset 0 0 20px rgba(0,20,0,0.4)",
    backdropFilter: "blur(4px)",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexWrap: "wrap",
    gap: "12px",
    marginBottom: "4px",
  },
  role: {
    fontFamily: "'Orbitron', monospace",
    fontSize: "1.15rem",
    color: "#6afc30",
    letterSpacing: "3px",
    margin: "0 0 6px 0",
    fontWeight: "700",
  },
  company: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.88rem",
    color: "#c8e6c8",
    letterSpacing: "2px",
    margin: 0,
  },
  companyType: {
    color: "rgba(100,220,80,0.6)",
    fontSize: "0.78rem",
  },
  badges: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    alignItems: "flex-end",
  },
  statusBadge: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.68rem",
    color: "#6afc30",
    letterSpacing: "3px",
    background: "rgba(0,40,0,0.8)",
    border: "1px solid rgba(100,220,80,0.35)",
    borderRadius: "3px",
    padding: "4px 10px",
    whiteSpace: "nowrap",
  },
  durationBadge: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.65rem",
    color: "rgba(100,220,80,0.6)",
    letterSpacing: "2px",
    background: "rgba(0,30,0,0.6)",
    border: "1px solid rgba(100,220,80,0.2)",
    borderRadius: "3px",
    padding: "3px 10px",
    whiteSpace: "nowrap",
  },
  cardDivider: {
    width: "100%",
    height: "1px",
    background: "linear-gradient(90deg, rgba(100,220,80,0.4), transparent)",
    margin: "14px 0",
  },
  desc: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.88rem",
    color: "#c8e6c8",
    lineHeight: 1.85,
    margin: "0 0 18px 0",
    letterSpacing: "0.4px",
  },
  skillRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  },
  skillChip: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.65rem",
    color: "#6afc30",
    letterSpacing: "2px",
    background: "rgba(0,30,0,0.7)",
    border: "1px solid rgba(100,220,80,0.3)",
    borderRadius: "3px",
    padding: "4px 12px",
  },
};

export default Experience;
