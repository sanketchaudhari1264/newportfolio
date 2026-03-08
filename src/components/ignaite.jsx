import React from "react";
import { useNavigate } from "react-router-dom";

function Ignaite() {
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

        .ig-plane-anim {
          position: absolute; top: 10%; left: 0;
          animation: planeDash 12s linear 0s infinite backwards;
          filter: drop-shadow(0 6px 14px rgba(0,0,0,0.6));
          pointer-events: none; z-index: 6;
        }

        .ig-scanlines {
          position: absolute; inset: 0;
          background: repeating-linear-gradient(to bottom, transparent, transparent 3px, rgba(0,0,0,0.07) 3px, rgba(0,0,0,0.07) 4px);
          pointer-events: none; z-index: 1;
        }

        .ig-hud-tl, .ig-hud-tr, .ig-hud-bl, .ig-hud-br {
          position: absolute; width: 38px; height: 38px;
          border-color: rgba(100,220,80,0.6); border-style: solid;
          pointer-events: none; z-index: 3;
        }
        .ig-hud-tl { top:16px; left:16px;  border-width:3px 0 0 3px; }
        .ig-hud-tr { top:16px; right:16px; border-width:3px 3px 0 0; }
        .ig-hud-bl { bottom:16px; left:16px;  border-width:0 0 3px 3px; }
        .ig-hud-br { bottom:16px; right:16px; border-width:0 3px 3px 0; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ig-card-anim { animation: fadeUp 0.8s ease forwards; }

        @keyframes blink { 50% { opacity: 0; } }
        .ig-blink { animation: blink 1s step-end infinite; }

        .ig-link-btn {
          position: relative; overflow: hidden; transition: all 0.2s ease;
          text-decoration: none;
        }
        .ig-link-btn::before {
          content: ''; position: absolute; left: -100%; top: 0;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(100,255,80,0.2), transparent);
          transition: left 0.4s ease;
        }
        .ig-link-btn:hover::before { left: 100%; }
        .ig-link-btn:hover {
          border-color: rgba(100,255,80,0.9) !important;
          box-shadow: 0 0 22px rgba(80,255,60,0.5) !important;
          transform: scale(1.04);
        }

        .ig-back-btn {
          position: relative; overflow: hidden; transition: all 0.2s ease;
          cursor: pointer;
        }
        .ig-back-btn:hover {
          border-color: rgba(100,255,80,0.9) !important;
          box-shadow: 0 0 22px rgba(80,255,60,0.5) !important;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 860px) {
          .ig-plane-anim { display: none !important; }
          .ig-sect-r { padding: 100px 18px 40px !important; }
          .ig-card-anim { padding: 28px 22px !important; }
          .ig-heading-r { font-size: 1.8rem !important; letter-spacing: 4px !important; }
        }
      `}</style>

      <section className="ig-sect-r" style={styles.container}>
        <div className="ig-scanlines" />
        <div className="ig-hud-tl" /><div className="ig-hud-tr" />
        <div className="ig-hud-bl" /><div className="ig-hud-br" />

        <img src="/plane.png" alt="F16" className="ig-plane-anim" style={{ width: "220px", maxWidth: "25vw" }} />

        <div style={styles.wrapper}>
          <div className="ig-card-anim" style={styles.card}>

            <button className="ig-back-btn" style={styles.backBtn} onClick={() => navigate("/projects")}>
              ◄ BACK TO PROJECTS
            </button>

            <p style={styles.label}>
              <span className="ig-blink" style={{ color: "#6afc30" }}>▐</span>
              &nbsp;[ MISSION FILE #04 ]&nbsp;
              <span className="ig-blink" style={{ color: "#6afc30" }}>▌</span>
            </p>

            <h2 className="ig-heading-r" style={styles.heading}>IGNAITE</h2>
            <p style={styles.subtitle}>US-BASED STARTUP WEBSITE — INTERNSHIP PROJECT</p>
            <div style={styles.divider} />

            <div style={styles.linkRow}>
              <a href="https://ignaite.com/" target="_blank" rel="noopener noreferrer"
                className="ig-link-btn" style={styles.linkBtn}>
                🔗 LIVE SITE
              </a>
            </div>

            <div style={styles.divider} />

            <h3 style={styles.sectionTitle}>▸ OVERVIEW</h3>
            <p style={styles.text}>
              ignAite is a US-based technology startup focused on building intelligent solutions.
              As a Web Development Intern, I was embedded in their dev team and contributed directly
              to the production company website — analyzing the existing codebase, planning UI
              improvements, and shipping frontend changes across multiple sections.
            </p>
            <p style={styles.text}>
              The experience involved working in a professional, collaborative environment with
              proper GitHub-based workflows, code reviews, and production deployments. I also
              expanded my backend knowledge by learning Node.js, Express, and MongoDB fundamentals
              alongside the frontend work.
            </p>

            <div style={styles.divider} />

            <h3 style={styles.sectionTitle}>▸ KEY CONTRIBUTIONS</h3>
            <div style={styles.featureGrid}>
              {[
                { icon: "🔍", title: "Website Audit", desc: "Performed a thorough analysis of the existing site — identifying UI inconsistencies, performance gaps, and accessibility improvements." },
                { icon: "🎨", title: "UI/UX Improvements", desc: "Redesigned and enhanced key sections including Home and Blog to improve visual hierarchy, readability, and user engagement." },
                { icon: "⚛️", title: "React Frontend Dev", desc: "Built and updated reusable React components, maintained clean component architecture, and integrated dynamic content." },
                { icon: "🗄️", title: "Backend Learning", desc: "Gained hands-on experience with Node.js, Express.js, and MongoDB — understanding full-stack architecture in a real product context." },
                { icon: "🔀", title: "GitHub Workflows", desc: "Followed professional branching strategies, pull requests, and code review workflows throughout the internship." },
                { icon: "🚀", title: "Production Deployment", desc: "Contributed to live production deployments, ensuring changes were tested, reviewed, and safely shipped." },
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

            <h3 style={styles.sectionTitle}>▸ TECH STACK</h3>
            <div style={styles.techGrid}>
              {[
                { label: "FRONTEND", value: "React.js" },
                { label: "BACKEND", value: "Node.js / Express.js" },
                { label: "DATABASE", value: "MongoDB" },
                { label: "VERSION CONTROL", value: "GitHub" },
                { label: "WORKFLOW", value: "PRs, Branching, Code Reviews" },
                { label: "DESIGN", value: "UI/UX Analysis & Improvement" },
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
              To contribute meaningfully to a live, US-based startup product — gaining real-world
              experience in professional web development, collaborative workflows, and full-stack
              thinking. This internship reinforced best practices in frontend engineering and gave
              exposure to the end-to-end product development lifecycle.
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

export default Ignaite;
