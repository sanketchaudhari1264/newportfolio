import React, { useState, useEffect } from "react";

function Commander() {
  const [messages, setMessages] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const COMMANDER_PASS = import.meta.env.VITE_CMD_PASS;

  useEffect(() => {
    if (loggedIn) {
      const stored = JSON.parse(localStorage.getItem("sc_messages") || "[]");
      setMessages(stored.reverse());
    }
  }, [loggedIn]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === COMMANDER_PASS) {
      setLoggedIn(true);
      setError("");
    } else {
      setError("ACCESS DENIED — INVALID CREDENTIALS");
    }
  };

  const handleDelete = (id) => {
    const stored = JSON.parse(localStorage.getItem("sc_messages") || "[]");
    const updated = stored.filter((m) => m.id !== id);
    localStorage.setItem("sc_messages", JSON.stringify(updated));
    setMessages(updated.reverse());
  };

  const handleClearAll = () => {
    localStorage.setItem("sc_messages", JSON.stringify([]));
    setMessages([]);
  };

  if (!loggedIn) {
    return (
      <>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&display=swap');
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(30px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          .cmd-login-anim { animation: fadeUp 0.8s ease forwards; }
          @keyframes blink { 50% { opacity: 0; } }
          .cmd-blink { animation: blink 1s step-end infinite; }
          .cmd-input {
            width: 100%; padding: 14px 18px; border-radius: 4px;
            border: 1px solid rgba(100,220,80,0.35);
            background: rgba(0,20,10,0.7); color: #c8e6c8;
            font-family: 'Share Tech Mono', monospace; font-size: 1rem;
            letter-spacing: 2px; outline: none; box-sizing: border-box;
            transition: border-color 0.2s, box-shadow 0.2s;
          }
          .cmd-input::placeholder { color: rgba(100,220,80,0.3); letter-spacing: 3px; }
          .cmd-input:focus {
            border-color: #6afc30;
            box-shadow: 0 0 14px rgba(100,255,60,0.2), inset 0 0 10px rgba(0,30,0,0.4);
          }
          .cmd-login-btn {
            position: relative; overflow: hidden; transition: all 0.2s ease; cursor: pointer;
          }
          .cmd-login-btn:hover {
            border-color: rgba(100,255,80,0.9) !important;
            box-shadow: 0 0 22px rgba(80,255,60,0.5) !important;
            transform: scale(1.03);
          }
        `}</style>
        <section style={loginStyles.container}>
          <div className="cmd-login-anim" style={loginStyles.card}>
            <p style={loginStyles.label}>
              <span className="cmd-blink" style={{ color: "#6afc30" }}>▐</span>
              &nbsp;[ RESTRICTED ACCESS ]&nbsp;
              <span className="cmd-blink" style={{ color: "#6afc30" }}>▌</span>
            </p>
            <h2 style={loginStyles.heading}>COMMANDER LOGIN</h2>
            <div style={loginStyles.divider} />
            <form onSubmit={handleLogin} style={loginStyles.form}>
              <label style={loginStyles.fieldLabel}>AUTHENTICATION CODE</label>
              <input
                className="cmd-input"
                type="password"
                placeholder="Enter access code..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {error && <p style={loginStyles.error}>{error}</p>}
              <button className="cmd-login-btn" style={loginStyles.btn} type="submit">
                🔓 AUTHORIZE
              </button>
            </form>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&display=swap');
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .cmd-anim { animation: fadeUp 0.8s ease forwards; }
        @keyframes blink { 50% { opacity: 0; } }
        .cmd-blink { animation: blink 1s step-end infinite; }
        .cmd-del-btn {
          transition: all 0.2s ease; cursor: pointer;
        }
        .cmd-del-btn:hover {
          border-color: #ff4444 !important;
          box-shadow: 0 0 14px rgba(255,60,60,0.4) !important;
          color: #ff6666 !important;
        }
        .cmd-clear-btn {
          transition: all 0.2s ease; cursor: pointer;
        }
        .cmd-clear-btn:hover {
          border-color: #ff4444 !important;
          box-shadow: 0 0 14px rgba(255,60,60,0.4) !important;
        }
        .cmd-logout-btn {
          transition: all 0.2s ease; cursor: pointer;
        }
        .cmd-logout-btn:hover {
          border-color: rgba(100,255,80,0.9) !important;
          box-shadow: 0 0 16px rgba(80,255,60,0.4) !important;
        }
      `}</style>

      <section style={styles.container}>
        <div style={styles.wrapper}>
          {/* Top bar */}
          <div style={styles.topBar}>
            <button className="cmd-logout-btn" style={styles.logoutBtn} onClick={() => setLoggedIn(false)}>
              ◄ LOGOUT
            </button>
            {messages.length > 0 && (
              <button className="cmd-clear-btn" style={styles.clearBtn} onClick={handleClearAll}>
                🗑 CLEAR ALL
              </button>
            )}
          </div>

          <p style={styles.label}>
            <span className="cmd-blink" style={{ color: "#6afc30" }}>▐</span>
            &nbsp;[ COMMANDER PANEL ]&nbsp;
            <span className="cmd-blink" style={{ color: "#6afc30" }}>▌</span>
          </p>
          <h2 style={styles.heading}>INCOMING TRANSMISSIONS</h2>
          <p style={styles.count}>{messages.length} MESSAGE{messages.length !== 1 ? "S" : ""} RECEIVED</p>
          <div style={styles.divider} />

          {messages.length === 0 ? (
            <div className="cmd-anim" style={styles.emptyBox}>
              <p style={styles.emptyIcon}>📡</p>
              <p style={styles.emptyText}>NO TRANSMISSIONS RECEIVED</p>
              <p style={styles.emptySub}>Waiting for incoming communications...</p>
            </div>
          ) : (
            <div style={styles.msgList}>
              {messages.map((msg, i) => (
                <div key={msg.id} className="cmd-anim" style={{ ...styles.msgCard, animationDelay: `${i * 0.1}s` }}>
                  <div style={styles.msgHeader}>
                    <div>
                      <span style={styles.msgName}>{msg.name}</span>
                      <span style={styles.msgEmail}>{msg.email}</span>
                    </div>
                    <div style={styles.msgRight}>
                      <span style={styles.msgDate}>{msg.date}</span>
                      <button className="cmd-del-btn" style={styles.delBtn} onClick={() => handleDelete(msg.id)}>
                        ✕
                      </button>
                    </div>
                  </div>
                  <div style={styles.msgDivider} />
                  <p style={styles.msgBody}>{msg.message}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

const loginStyles = {
  container: {
    minHeight: "100vh",
    width: "100%",
    backgroundImage: "url('/background.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "80px 24px",
    boxSizing: "border-box",
  },
  card: {
    background: "rgba(5, 20, 5, 0.88)",
    border: "1px solid rgba(100,220,80,0.35)",
    borderRadius: "8px",
    padding: "48px 52px",
    boxShadow: "0 0 40px rgba(0,0,0,0.7), inset 0 0 30px rgba(0,20,0,0.4)",
    backdropFilter: "blur(6px)",
    width: "100%",
    maxWidth: "440px",
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
    fontSize: "1.6rem",
    color: "transparent",
    WebkitTextStroke: "2px #6afc30",
    letterSpacing: "4px",
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
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  fieldLabel: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.68rem",
    color: "rgba(100,220,80,0.6)",
    letterSpacing: "4px",
  },
  btn: {
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
    marginTop: "8px",
  },
  error: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.78rem",
    color: "#ff5555",
    letterSpacing: "2px",
    textAlign: "center",
    margin: 0,
  },
};

const styles = {
  container: {
    minHeight: "100vh",
    width: "100%",
    backgroundImage: "url('/background.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: "90px 24px 60px",
    boxSizing: "border-box",
  },
  wrapper: {
    width: "100%",
    maxWidth: "800px",
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "24px",
    flexWrap: "wrap",
    gap: "10px",
  },
  logoutBtn: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.72rem",
    color: "#6afc30",
    letterSpacing: "3px",
    background: "rgba(5,20,5,0.7)",
    border: "1px solid rgba(100,220,80,0.4)",
    borderRadius: "3px",
    padding: "6px 16px",
    cursor: "pointer",
  },
  clearBtn: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.72rem",
    color: "#ff8888",
    letterSpacing: "3px",
    background: "rgba(30,5,5,0.7)",
    border: "1px solid rgba(255,80,80,0.4)",
    borderRadius: "3px",
    padding: "6px 16px",
    cursor: "pointer",
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
    fontSize: "2rem",
    color: "transparent",
    WebkitTextStroke: "2px #6afc30",
    letterSpacing: "5px",
    textAlign: "center",
    margin: "0 0 8px 0",
    textShadow: "0 0 24px rgba(100,255,60,0.25)",
  },
  count: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.78rem",
    color: "rgba(100,220,80,0.6)",
    letterSpacing: "4px",
    textAlign: "center",
    margin: "0 0 8px 0",
  },
  divider: {
    width: "100%",
    height: "1px",
    background: "linear-gradient(90deg, transparent, rgba(100,220,80,0.5), transparent)",
    margin: "20px 0 30px 0",
  },
  emptyBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    padding: "60px 0",
    background: "rgba(5, 20, 5, 0.7)",
    border: "1px dashed rgba(100,220,80,0.25)",
    borderRadius: "8px",
  },
  emptyIcon: { fontSize: "2.5rem", margin: 0 },
  emptyText: {
    fontFamily: "'Orbitron', monospace",
    fontSize: "0.9rem",
    color: "rgba(100,220,80,0.5)",
    letterSpacing: "4px",
    margin: 0,
  },
  emptySub: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.78rem",
    color: "rgba(100,220,80,0.35)",
    letterSpacing: "1px",
    margin: 0,
  },
  msgList: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  msgCard: {
    background: "rgba(5, 20, 5, 0.85)",
    border: "1px solid rgba(100,220,80,0.3)",
    borderRadius: "6px",
    padding: "20px 24px",
    boxShadow: "0 0 20px rgba(0,0,0,0.5), inset 0 0 16px rgba(0,20,0,0.3)",
  },
  msgHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexWrap: "wrap",
    gap: "8px",
  },
  msgName: {
    fontFamily: "'Orbitron', monospace",
    fontSize: "0.85rem",
    color: "#6afc30",
    letterSpacing: "2px",
    fontWeight: "700",
    display: "block",
    marginBottom: "2px",
  },
  msgEmail: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.75rem",
    color: "rgba(100,220,80,0.55)",
    letterSpacing: "1px",
  },
  msgRight: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  msgDate: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.68rem",
    color: "rgba(100,220,80,0.4)",
    letterSpacing: "1px",
  },
  delBtn: {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: "0.85rem",
    color: "#ff8888",
    background: "transparent",
    border: "1px solid rgba(255,80,80,0.3)",
    borderRadius: "3px",
    padding: "2px 8px",
    cursor: "pointer",
    lineHeight: 1,
  },
  msgDivider: {
    width: "100%",
    height: "1px",
    background: "linear-gradient(90deg, rgba(100,220,80,0.3), transparent)",
    margin: "12px 0",
  },
  msgBody: {
    fontFamily: "'Share Tech Mono', 'Courier New', monospace",
    fontSize: "0.9rem",
    color: "#c8e6c8",
    lineHeight: 1.8,
    margin: 0,
    letterSpacing: "0.4px",
    whiteSpace: "pre-wrap",
  },
};

export default Commander;
