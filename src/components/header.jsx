import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NAV_ROUTES = {
  Home: "/",
  About: "/about",
  Experience: "/experience",
  Projects: "/projects",
  Gallery: "/gallery",
  Contact: "/contact",
  Commander: "/commander",
};

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const handleNav = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&display=swap');

        .hdr-root {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding: 22px 50px;
          background: transparent;
          color: white;
          position: absolute;
          top: 0; left: 0; right: 0;
          z-index: 100;
        }

        .hdr-nav-list {
          display: flex;
          list-style: none;
          gap: 36px;
          margin: 0;
          padding: 0;
        }

        .hdr-nav-item {
          font-size: 12px;
          letter-spacing: 4px;
          font-weight: bold;
          cursor: pointer;
          font-family: 'Courier New', monospace;
          transition: color 0.2s ease;
          white-space: nowrap;
        }
        .hdr-nav-item:hover { color: #aaffaa; }

        /* ── Hamburger button ── */
        .hdr-burger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          cursor: pointer;
          padding: 8px 10px;
          background: rgba(5,20,5,0.8);
          border: 1px solid rgba(100,220,80,0.4) !important;
          border-radius: 4px;
          z-index: 110;
        }
        .hdr-bar {
          display: block;
          width: 22px;
          height: 2px;
          background: #6afc30;
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        .hdr-bar-1-open { transform: translateY(7px) rotate(45deg); }
        .hdr-bar-2-open { opacity: 0; transform: scaleX(0); }
        .hdr-bar-3-open { transform: translateY(-7px) rotate(-45deg); }

        /* ── Mobile slide-down menu ── */
        .hdr-mobile-menu {
          display: none;
          position: fixed;
          top: 0; left: 0; right: 0;
          background: rgba(2, 8, 2, 0.97);
          border-bottom: 1px solid rgba(100,220,80,0.25);
          padding: 80px 28px 28px;
          z-index: 99;
          flex-direction: column;
          backdrop-filter: blur(12px);
          box-shadow: 0 4px 30px rgba(0,0,0,0.8);
        }
        .hdr-mobile-menu.hdr-open { display: flex; }

        .hdr-mob-item {
          font-family: 'Orbitron', monospace;
          font-size: 0.9rem;
          letter-spacing: 5px;
          color: rgba(200,230,200,0.85);
          cursor: pointer;
          padding: 15px 4px;
          border-bottom: 1px solid rgba(100,220,80,0.12);
          transition: color 0.2s, padding-left 0.2s;
        }
        .hdr-mob-item:hover { color: #6afc30; padding-left: 8px; }
        .hdr-mob-item.hdr-mob-active { color: #6afc30; }
        .hdr-mob-item:last-child { border-bottom: none; }

        /* ── Responsive breakpoint ── */
        @media (max-width: 860px) {
          .hdr-root { padding: 18px 22px; }
          .hdr-nav-list { display: none; }
          .hdr-burger { display: flex; }
        }
      `}</style>

      <header className="hdr-root">
        {/* Desktop nav */}
        <nav>
          <ul className="hdr-nav-list">
            {Object.entries(NAV_ROUTES).map(([label, path]) => {
              const active = location.pathname === path || location.pathname.startsWith(path + "/") && path !== "/";
              return (
                <li
                  key={label}
                  className="hdr-nav-item"
                  style={{ color: location.pathname === path ? "#6afc30" : "white" }}
                  onClick={() => handleNav(path)}
                >
                  {label.toUpperCase()}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Hamburger */}
        <button className="hdr-burger" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          <span className={`hdr-bar${open ? " hdr-bar-1-open" : ""}`} />
          <span className={`hdr-bar${open ? " hdr-bar-2-open" : ""}`} />
          <span className={`hdr-bar${open ? " hdr-bar-3-open" : ""}`} />
        </button>
      </header>

      {/* Mobile overlay menu */}
      <div className={`hdr-mobile-menu${open ? " hdr-open" : ""}`}>
        {Object.entries(NAV_ROUTES).map(([label, path]) => (
          <div
            key={label}
            className={`hdr-mob-item${location.pathname === path ? " hdr-mob-active" : ""}`}
            onClick={() => handleNav(path)}
          >
            ▸ &nbsp;{label.toUpperCase()}
          </div>
        ))}
      </div>
    </>
  );
}

export default Header;