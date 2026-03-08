import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = {
      ...form,
      id: Date.now(),
      date: new Date().toLocaleString(),
    };
    const existing = JSON.parse(localStorage.getItem("sc_messages") || "[]");
    existing.push(msg);
    localStorage.setItem("sc_messages", JSON.stringify(existing));
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&display=swap');

        /* ── Sea wave at bottom ── */
        @keyframes seaFloat {
          0%   { transform: translateX(0); }
          50%  { transform: translateX(-8px); }
          100% { transform: translateX(0); }
        }
        @keyframes seaRise {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-6px); }
        }
        .ct-sea {
          position: absolute;
          bottom: 0; left: -5%; width: 110%;
          z-index: 2; pointer-events: none;
          animation: seaFloat 6s ease-in-out infinite, seaRise 4s ease-in-out infinite;
          filter: drop-shadow(0 -4px 16px rgba(0,60,120,0.5));
        }

        /* ── Ship sailing ── */
        @keyframes shipSail {
          0%   { transform: translateX(-350px) scaleX(-1); opacity: 0; }
          3%   { opacity: 1; }
          97%  { opacity: 1; }
          100% { opacity: 0; transform: translateX(110vw) scaleX(-1); }
        }
        @keyframes shipBob {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25%      { transform: translateY(-4px) rotate(0.5deg); }
          75%      { transform: translateY(3px) rotate(-0.5deg); }
        }
        .ct-ship {
          position: absolute; bottom: 50px; left: 0;
          animation: shipSail 40s linear infinite;
          filter: drop-shadow(0 6px 14px rgba(0,0,0,0.7));
          pointer-events: none; z-index: 3;
        }
        .ct-ship-bob { animation: shipBob 3s ease-in-out infinite; }
        /* ── Ship3 sailing (very slow, left → right) ── */
        @keyframes ship3Sail {
          0%   { transform: translateX(-350px) scaleX(-1); opacity: 0; }
          3%   { opacity: 1; }
          97%  { opacity: 1; }
          100% { opacity: 0; transform: translateX(110vw) scaleX(-1); }
        }
        @keyframes ship3Bob {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          30%      { transform: translateY(-5px) rotate(0.6deg); }
          65%      { transform: translateY(4px) rotate(-0.6deg); }
        }
        .ct-ship3 {
          position: absolute; bottom: 52px; left: 0;
          animation: ship3Sail 75s linear 30s infinite;
          filter: drop-shadow(0 6px 14px rgba(0,0,0,0.7));
          pointer-events: none; z-index: 3;
        }
        .ct-ship3-bob { animation: ship3Bob 5s ease-in-out infinite; }

        /* ── Plane4 fast flyby (left → right, same as home) ── */
        @keyframes plane4Fly {
          0%   { transform: translateX(-20vw) scaleX(-1); opacity: 0; }
          4%   { opacity: 1; }
          90%  { opacity: 1; transform: translateX(115vw) scaleX(-1); }
          100% { opacity: 0; transform: translateX(115vw) scaleX(-1); }
        }
        .ct-plane4 {
          position: absolute; top: 12%; left: 0;
          animation: plane4Fly 4s linear infinite;
          filter: drop-shadow(0 6px 14px rgba(0,0,0,0.6));
          pointer-events: none; z-index: 6;
        }

        /* ── HUD ── */
        .ct-scanlines {
          position: absolute; inset: 0;
          background: repeating-linear-gradient(to bottom, transparent, transparent 3px, rgba(0,0,0,0.06) 3px, rgba(0,0,0,0.06) 4px);
          pointer-events: none; z-index: 1;
        }
        .ct-hud-tl, .ct-hud-tr, .ct-hud-bl, .ct-hud-br {
          position: absolute; width: 38px; height: 38px;
          border-color: rgba(100,220,80,0.6); border-style: solid;
          pointer-events: none; z-index: 6;
        }
        .ct-hud-tl { top:16px; left:16px;  border-width:3px 0 0 3px; }
        .ct-hud-tr { top:16px; right:16px; border-width:3px 3px 0 0; }
        .ct-hud-bl { bottom:16px; left:16px;  border-width:0 0 3px 3px; }
        .ct-hud-br { bottom:16px; right:16px; border-width:0 3px 3px 0; }

        /* ── Animations ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ct-card-anim { animation: fadeUp 0.8s ease forwards; }
        .ct-info-anim { animation: fadeUp 0.8s ease 0.3s forwards; opacity: 0; }

        @keyframes blink { 50% { opacity: 0; } }
        .ct-blink { animation: blink 1s step-end infinite; }

        .ct-water-overlay {
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 140px;
          background: linear-gradient(to top, rgba(0,30,70,0.5), transparent);
          pointer-events: none; z-index: 1;
        }

        /* ── Form elements ── */
        .ct-input {
          width: 100%; padding: 12px 16px; border-radius: 4px;
          border: 1px solid rgba(100,220,80,0.35);
          background: rgba(0,20,10,0.7); color: #c8e6c8;
          font-family: 'Share Tech Mono', monospace; font-size: 0.9rem;
          letter-spacing: 1px; outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          box-sizing: border-box;
        }
        .ct-input::placeholder { color: rgba(100,220,80,0.35); letter-spacing: 2px; }
        .ct-input:focus {
          border-color: #6afc30;
          box-shadow: 0 0 14px rgba(100,255,60,0.2), inset 0 0 10px rgba(0,30,0,0.4);
        }
        .ct-submit-btn {
          position: relative; overflow: hidden; transition: all 0.2s ease; cursor: pointer;
        }
        .ct-submit-btn::before {
          content: ''; position: absolute; left: -100%; top: 0;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(100,255,80,0.2), transparent);
          transition: left 0.4s ease;
        }
        .ct-submit-btn:hover::before { left: 100%; }
        .ct-submit-btn:hover {
          border-color: rgba(100,255,80,0.9) !important;
          box-shadow: 0 0 22px rgba(80,255,60,0.5) !important;
          transform: scale(1.03);
        }
        .nav-li:hover { color: #aaffaa !important; }

        /* ── RESPONSIVE ── */
        @media (max-width: 860px) {
          .ct-plane4, .ct-ship, .ct-ship3 { display: none !important; }
          .ct-card-anim {
            padding: 28px 18px !important;
          }
          .ct-heading-r {
            font-size: 1.7rem !important;
            letter-spacing: 4px !important;
          }
          .ct-info-grid-r {
            grid-template-columns: 1fr 1fr !important;
          }
          .ct-info-box-r {
            padding: 22px 18px !important;
          }
        }
      `}</style>

      <section style={styles.container}>
        <div className="ct-scanlines" />
        <div className="ct-hud-tl" /><div className="ct-hud-tr" />
        <div className="ct-hud-bl" /><div className="ct-hud-br" />

        {/* Water */}
        <div className="ct-water-overlay" />
        <img src="/sea.png" alt="Sea" className="ct-sea" />

        {/* Ship */}
        <div className="ct-ship">
          <img src="/ship.png" alt="Ship" className="ct-ship-bob" style={styles.shipImg} />
        </div>

{/* Ship3 — very slow left to right */}
        <div className="ct-ship3">
          <img src="/ship3.png" alt="Ship3" className="ct-ship3-bob" style={styles.ship3Img} />
        </div>

        {/* Plane4 — fast flyby right to left (heading home) */}
        <img src="/plane4.png" alt="Plane4" className="ct-plane4" style={{ width: "200px", maxWidth: "24vw" }} />



        {/* ═══ MAIN CONTENT ═══ */}
        <div style={styles.wrapper}>

          {/* ── Contact Form Card ── */}
          <div className="ct-card-anim" style={styles.card}>
            <p style={styles.label}>
              <span className="ct-blink" style={{ color: "#6afc30" }}>▐</span>
              &nbsp;[ NAVAL COMMS ]&nbsp;
              <span className="ct-blink" style={{ color: "#6afc30" }}>▌</span>
            </p>

            <h2 className="ct-heading-r" style={styles.heading}>CONTACT</h2>
            <p style={styles.subtitle}>ESTABLISH COMMUNICATION</p>
            <div style={styles.divider} />

            {sent ? (
              <div style={styles.successBox}>
                <p style={styles.successIcon}>✔</p>
                <p style={styles.successText}>MESSAGE TRANSMITTED SUCCESSFULLY</p>
                <p style={styles.successSub}>Response will be sent to your coordinates. Stand by.</p>
                <button
                  className="ct-submit-btn"
                  style={styles.submitBtn}
                  onClick={() => setSent(false)}
                >
                  ◄ SEND ANOTHER
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.fieldGroup}>
                  <label style={styles.fieldLabel}>CALLSIGN / NAME</label>
                  <input
                    className="ct-input"
                    type="text"
                    name="name"
                    placeholder="Enter your name..."
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div style={styles.fieldGroup}>
                  <label style={styles.fieldLabel}>COMM FREQUENCY / EMAIL</label>
                  <input
                    className="ct-input"
                    type="email"
                    name="email"
                    placeholder="Enter your email..."
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div style={styles.fieldGroup}>
                  <label style={styles.fieldLabel}>TRANSMISSION / MESSAGE</label>
                  <textarea
                    className="ct-input"
                    name="message"
                    placeholder="Type your message..."
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                    required
                    style={{ resize: "vertical" }}
                  />
                </div>

                <button className="ct-submit-btn" style={styles.submitBtn} type="submit">
                  📡 TRANSMIT MESSAGE
                </button>
              </form>
            )}
          </div>

          {/* ── Contact Info Box (bottom) ── */}
          <div className="ct-info-anim ct-info-box-r" style={styles.infoBox}>
            <p style={styles.infoHeading}>⚡ COMMUNICATION CHANNELS</p>
            <div className="ct-info-grid-r" style={styles.infoGrid}>
              <div style={styles.infoCard}>
                <span style={styles.infoIcon}>📧</span>
                <span style={styles.infoLabel}>EMAIL</span>
                <span style={styles.infoValue}>sanketchaudhari1264@gmail.com</span>
              </div>
              <div style={styles.infoCard}>
                <span style={styles.infoIcon}>📍</span>
                <span style={styles.infoLabel}>LOCATION</span>
                <span style={styles.infoValue}>INDIA</span>
              </div>
              <div style={styles.infoCard}>
                <span style={styles.infoIcon}>🟢</span>
                <span style={styles.infoLabel}>STATUS</span>
                <span style={styles.infoValue}>OPEN TO WORK</span>
              </div>
              <div style={styles.infoCard}>
                <span style={styles.infoIcon}>💼</span>
                <span style={styles.infoLabel}>ROLE</span>
                <span style={styles.infoValue}>FULLSTACK DEV</span>
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
    width: "100%",
    backgroundImage: "url('/background.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    padding: "90px 24px 200px",
    boxSizing: "border-box",
  },
  wrapper: {
    position: "relative",
    zIndex: 5,
    width: "100%",
    maxWidth: "600px",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
  card: {
    background: "rgba(5, 20, 5, 0.92)",
    border: "1px solid rgba(100,220,80,0.35)",
    borderRadius: "8px",
    padding: "32px 36px",
    boxShadow: "0 0 40px rgba(0,0,0,0.7), inset 0 0 30px rgba(0,20,0,0.4), 0 0 0 1px rgba(100,220,80,0.1)",
    backdropFilter: "blur(6px)",
  },
  label: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.72rem",
    color: "rgba(100,220,80,0.7)",
    letterSpacing: "6px",
    textTransform: "uppercase",
    margin: "0 0 12px 0",
    textAlign: "center",
  },
  heading: {
    fontFamily: "'Orbitron', monospace",
    fontSize: "2.2rem",
    color: "transparent",
    WebkitTextStroke: "2px #6afc30",
    letterSpacing: "6px",
    textAlign: "center",
    margin: "0 0 6px 0",
    textShadow: "0 0 24px rgba(100,255,60,0.25)",
  },
  subtitle: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.78rem",
    color: "rgba(100,220,80,0.6)",
    letterSpacing: "5px",
    textAlign: "center",
    margin: "0 0 10px 0",
  },
  divider: {
    width: "100%",
    height: "1px",
    background: "linear-gradient(90deg, transparent, rgba(100,220,80,0.5), transparent)",
    margin: "16px 0",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  fieldGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  fieldLabel: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.68rem",
    color: "rgba(100,220,80,0.6)",
    letterSpacing: "4px",
  },
  submitBtn: {
    fontFamily: "'Orbitron', monospace",
    fontSize: "0.85rem",
    color: "#ccffcc",
    letterSpacing: "3px",
    fontWeight: "700",
    padding: "14px 32px",
    borderRadius: "4px",
    border: "2px solid rgba(100,220,80,0.5)",
    backgroundColor: "rgba(5, 30, 5, 0.85)",
    cursor: "pointer",
    boxShadow: "0 0 16px rgba(0,0,0,0.5), inset 0 0 10px rgba(0,30,0,0.5)",
    alignSelf: "center",
    marginTop: "4px",
  },
  successBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "12px",
    padding: "24px 0",
  },
  successIcon: {
    fontSize: "2.5rem",
    color: "#6afc30",
    margin: 0,
    textShadow: "0 0 20px rgba(100,255,60,0.4)",
  },
  successText: {
    fontFamily: "'Orbitron', monospace",
    fontSize: "1rem",
    color: "#6afc30",
    letterSpacing: "3px",
    margin: 0,
    textAlign: "center",
  },
  successSub: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.82rem",
    color: "#c8e6c8",
    letterSpacing: "1px",
    margin: 0,
    textAlign: "center",
  },

  /* ── Info box at bottom ── */
  infoBox: {
    background: "rgba(5, 20, 5, 0.92)",
    border: "1px solid rgba(100,220,80,0.3)",
    borderRadius: "8px",
    padding: "24px 28px",
    boxShadow: "0 0 30px rgba(0,0,0,0.6), inset 0 0 20px rgba(0,20,0,0.3)",
    backdropFilter: "blur(6px)",
  },
  infoHeading: {
    fontFamily: "'Orbitron', monospace",
    fontSize: "0.75rem",
    color: "#6afc30",
    letterSpacing: "4px",
    textAlign: "center",
    margin: "0 0 18px 0",
  },
  infoGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
  },
  infoCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "rgba(0,30,0,0.6)",
    border: "1px solid rgba(100,220,80,0.25)",
    borderRadius: "6px",
    padding: "14px 10px",
    gap: "3px",
  },
  infoIcon: {
    fontSize: "1.2rem",
    marginBottom: "2px",
  },
  infoLabel: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.56rem",
    color: "rgba(100,220,80,0.5)",
    letterSpacing: "4px",
  },
  infoValue: {
    fontFamily: "'Orbitron', monospace",
    fontSize: "0.62rem",
    color: "#6afc30",
    letterSpacing: "1.5px",
    fontWeight: "700",
    textAlign: "center",
    wordBreak: "break-all",
  },

  /* ── Images ── */
  shipImg: { width: "520px", maxWidth: "55vw" },
ship3Img: { width: "520px", maxWidth: "55vw" },

};

export default Contact;
