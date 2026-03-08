import React from "react";
import { useNavigate } from "react-router-dom";

function SmartKrishi() {
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

        .sk-plane-anim {
          position: absolute; top: 10%; left: 0;
          animation: planeDash 12s linear 0s infinite backwards;
          filter: drop-shadow(0 6px 14px rgba(0,0,0,0.6));
          pointer-events: none; z-index: 6;
        }
        .sk-plane3-anim {
          position: absolute; top: 18%; left: 0;
          animation: plane3Dash 12s linear 6s infinite backwards;
          filter: drop-shadow(0 6px 14px rgba(0,0,0,0.5));
          pointer-events: none; z-index: 5;
        }

        .sk-scanlines {
          position: absolute; inset: 0;
          background: repeating-linear-gradient(to bottom, transparent, transparent 3px, rgba(0,0,0,0.07) 3px, rgba(0,0,0,0.07) 4px);
          pointer-events: none; z-index: 1;
        }

        .sk-hud-tl, .sk-hud-tr, .sk-hud-bl, .sk-hud-br {
          position: absolute; width: 38px; height: 38px;
          border-color: rgba(100,220,80,0.6); border-style: solid;
          pointer-events: none; z-index: 3;
        }
        .sk-hud-tl { top:16px; left:16px;  border-width:3px 0 0 3px; }
        .sk-hud-tr { top:16px; right:16px; border-width:3px 3px 0 0; }
        .sk-hud-bl { bottom:16px; left:16px;  border-width:0 0 3px 3px; }
        .sk-hud-br { bottom:16px; right:16px; border-width:0 3px 3px 0; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .sk-card-anim { animation: fadeUp 0.8s ease forwards; }

        @keyframes blink { 50% { opacity: 0; } }
        .sk-blink { animation: blink 1s step-end infinite; }

        .sk-link-btn {
          position: relative; overflow: hidden; transition: all 0.2s ease;
          text-decoration: none;
        }
        .sk-link-btn::before {
          content: ''; position: absolute; left: -100%; top: 0;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(100,255,80,0.2), transparent);
          transition: left 0.4s ease;
        }
        .sk-link-btn:hover::before { left: 100%; }
        .sk-link-btn:hover {
          border-color: rgba(100,255,80,0.9) !important;
          box-shadow: 0 0 22px rgba(80,255,60,0.5) !important;
          transform: scale(1.04);
        }

        .sk-back-btn {
          position: relative; overflow: hidden; transition: all 0.2s ease;
          cursor: pointer;
        }
        .sk-back-btn:hover {
          border-color: rgba(100,255,80,0.9) !important;
          box-shadow: 0 0 22px rgba(80,255,60,0.5) !important;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 860px) {
          .sk-plane-anim { display: none !important; }
          .sk-sect-r { padding: 100px 18px 40px !important; }
          .sk-card-anim { padding: 28px 22px !important; }
          .sk-heading-r { font-size: 1.8rem !important; letter-spacing: 4px !important; }
        }
      `}</style>

      <section className="sk-sect-r" style={styles.container}>
        <div className="sk-scanlines" />
        <div className="sk-hud-tl" /><div className="sk-hud-tr" />
        <div className="sk-hud-bl" /><div className="sk-hud-br" />

        <img src="/plane.png"  alt="F16"    className="sk-plane-anim"  style={{ width: "220px", maxWidth: "25vw" }} />
        <img src="/plane3.png" alt="Plane3" className="sk-plane3-anim" style={{ width: "170px", maxWidth: "20vw" }} />

        <div style={styles.wrapper}>
          <div className="sk-card-anim" style={styles.card}>
            {/* Back button */}
            <button
              className="sk-back-btn"
              style={styles.backBtn}
              onClick={() => navigate("/projects")}
            >
              ◄ BACK TO PROJECTS
            </button>

            <p style={styles.label}>
              <span className="sk-blink" style={{ color: "#6afc30" }}>▐</span>
              &nbsp;[ MISSION FILE #01 ]&nbsp;
              <span className="sk-blink" style={{ color: "#6afc30" }}>▌</span>
            </p>

            <h2 className="sk-heading-r" style={styles.heading}>SMARTKRISHI</h2>
            <p style={styles.subtitle}>FARMER&apos;S AI DOCTOR</p>
            <div style={styles.divider} />

            {/* Links */}
            <div style={styles.linkRow}>
              <a
                href="https://smartkrishi-ten.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="sk-link-btn"
                style={styles.linkBtn}
              >
                🔗 LIVE DEMO
              </a>
              <a
                href="https://github.com/sanketchaudhari1264/SMARTKRISHI-Farmers-AI-Doctor"
                target="_blank"
                rel="noopener noreferrer"
                className="sk-link-btn"
                style={styles.linkBtn}
              >
                📂 GITHUB
              </a>
            </div>

            <div style={styles.divider} />

            {/* Overview */}
            <h3 style={styles.sectionTitle}>▸ OVERVIEW</h3>
            <p style={styles.text}>
              SmartKrishi is a web-based farming assistant designed to help farmers quickly identify
              crop diseases and get practical farming advice. Farmers can upload an image of their
              crop or describe the problem, and the system analyzes the issue using AI to provide
              useful guidance.
            </p>
            <p style={styles.text}>
              The platform aims to make agricultural knowledge easily accessible, especially for
              farmers who may not have immediate access to agricultural experts.
            </p>

            <div style={styles.divider} />

            {/* Key Features */}
            <h3 style={styles.sectionTitle}>▸ KEY FEATURES</h3>
            <div style={styles.featureGrid}>
              {[
                { icon: "🌿", title: "Crop Disease Identification", desc: "Upload crop or leaf images to detect possible diseases or crop problems." },
                { icon: "🛠", title: "Actionable Recommendations", desc: "Suggests what farmers should do next to protect their crops." },
                { icon: "🧪", title: "Fertilizer & Treatment Suggestions", desc: "Recommends suitable fertilizers and treatments to improve crop health." },
                { icon: "🌍", title: "Local Language Support", desc: "Farmers can receive advice in their local language for better understanding." },
                { icon: "💚", title: "Motivational Guidance", desc: "Provides encouraging messages to support farmers and promote confidence." },
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

            {/* How It Works */}
            <h3 style={styles.sectionTitle}>▸ HOW IT WORKS</h3>
            <ol style={styles.steps}>
              <li style={styles.stepItem}>The farmer uploads a crop image or describes the problem.</li>
              <li style={styles.stepItem}>The frontend sends the request to the backend API.</li>
              <li style={styles.stepItem}>The backend securely sends the information to the OpenAI API.</li>
              <li style={styles.stepItem}>The AI analyzes the crop problem and generates a structured response.</li>
              <li style={styles.stepItem}>SmartKrishi displays the disease details, treatment steps, fertilizer suggestions, and prevention tips.</li>
            </ol>

            <div style={styles.divider} />

            {/* Tech Stack */}
            <h3 style={styles.sectionTitle}>▸ TECH STACK</h3>
            <div style={styles.techGrid}>
              {[
                { label: "FRONTEND", value: "React.js" },
                { label: "BACKEND", value: "Node.js / Express.js" },
                { label: "AI", value: "OpenAI API" },
                { label: "STYLING", value: "CSS / Tailwind CSS" },
                { label: "API", value: "REST APIs" },
              ].map(({ label, value }) => (
                <div key={label} style={styles.techChip}>
                  <span style={styles.techLabel}>{label}</span>
                  <span style={styles.techValue}>{value}</span>
                </div>
              ))}
            </div>

            <div style={styles.divider} />

            {/* Goal */}
            <h3 style={styles.sectionTitle}>▸ PROJECT GOAL</h3>
            <p style={styles.text}>
              The goal of SmartKrishi is to bridge the gap between farmers and agricultural
              knowledge by providing an easy-to-use digital tool that supports better crop
              management and decision-making.
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
  wrapper: {
    position: "relative",
    zIndex: 2,
    width: "100%",
    maxWidth: "850px",
  },
  card: {
    background: "rgba(5, 20, 5, 0.82)",
    border: "1px solid rgba(100,220,80,0.35)",
    borderRadius: "8px",
    padding: "48px 52px",
    boxShadow: "0 0 40px rgba(0,0,0,0.7), inset 0 0 30px rgba(0,20,0,0.4), 0 0 0 1px rgba(100,220,80,0.1)",
    backdropFilter: "blur(4px)",
  },
  backBtn: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.72rem",
    color: "#6afc30",
    letterSpacing: "3px",
    background: "transparent",
    border: "1px solid rgba(100,220,80,0.4)",
    borderRadius: "3px",
    padding: "6px 16px",
    cursor: "pointer",
    marginBottom: "24px",
    display: "inline-block",
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
    margin: "0 0 8px 0",
    textShadow: "0 0 24px rgba(100,255,60,0.25)",
  },
  subtitle: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.85rem",
    color: "rgba(100,220,80,0.7)",
    letterSpacing: "5px",
    textAlign: "center",
    margin: "0 0 16px 0",
  },
  divider: {
    width: "100%",
    height: "1px",
    background: "linear-gradient(90deg, transparent, rgba(100,220,80,0.5), transparent)",
    margin: "24px 0",
  },
  linkRow: {
    display: "flex",
    gap: "14px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  linkBtn: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.8rem",
    color: "#ccffcc",
    letterSpacing: "2px",
    padding: "10px 28px",
    borderRadius: "4px",
    border: "1px solid rgba(100,220,80,0.5)",
    backgroundColor: "rgba(5, 30, 5, 0.85)",
    cursor: "pointer",
    boxShadow: "0 0 12px rgba(0,0,0,0.5), inset 0 0 8px rgba(0,30,0,0.5)",
    textDecoration: "none",
    display: "inline-block",
  },
  sectionTitle: {
    fontFamily: "'Orbitron', monospace",
    fontSize: "1rem",
    color: "#6afc30",
    letterSpacing: "4px",
    margin: "0 0 16px 0",
  },
  text: {
    fontFamily: "'Share Tech Mono', 'Courier New', monospace",
    fontSize: "0.95rem",
    color: "#c8e6c8",
    lineHeight: 1.85,
    margin: "0 0 14px 0",
    letterSpacing: "0.4px",
  },
  featureGrid: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
  featureItem: {
    display: "flex",
    gap: "14px",
    alignItems: "flex-start",
    background: "rgba(0,30,0,0.5)",
    border: "1px solid rgba(100,220,80,0.2)",
    borderRadius: "4px",
    padding: "14px 18px",
  },
  featureIcon: {
    fontSize: "1.4rem",
    flexShrink: 0,
    marginTop: "2px",
  },
  featureTitle: {
    fontFamily: "'Orbitron', monospace",
    fontSize: "0.78rem",
    color: "#6afc30",
    letterSpacing: "2px",
    display: "block",
    marginBottom: "4px",
  },
  featureDesc: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.85rem",
    color: "#c8e6c8",
    lineHeight: 1.7,
    margin: 0,
  },
  steps: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.9rem",
    color: "#c8e6c8",
    lineHeight: 1.85,
    paddingLeft: "20px",
    margin: 0,
  },
  stepItem: {
    marginBottom: "8px",
    letterSpacing: "0.4px",
  },
  techGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
  },
  techChip: {
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
  techLabel: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.6rem",
    color: "rgba(100,220,80,0.6)",
    letterSpacing: "4px",
    marginBottom: "4px",
  },
  techValue: {
    fontFamily: "'Orbitron', monospace",
    fontSize: "0.75rem",
    color: "#6afc30",
    letterSpacing: "2px",
    fontWeight: "700",
  },
};

export default SmartKrishi;
