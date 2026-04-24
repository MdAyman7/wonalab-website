export function Footer() {
  return (
    <footer className="wn-footer">
      <div className="wn-container wn-footer-inner">
        <div className="wn-footer-brand">
          <div className="wn-logo-big">
            <span className="wn-diamond" />
            <span>wonalab</span>
          </div>
          <p className="wn-footer-tag">Digital, crafted.</p>
        </div>
        <div className="wn-footer-cols">
          <div>
            <div className="wn-footer-h">Practices</div>
            <a>Fintech</a>
            <a>Web3</a>
            <a>AI Agents</a>
            <a>Applications</a>
          </div>
          <div>
            <div className="wn-footer-h">Studio</div>
            <a>Work</a>
            <a>About</a>
            <a>Journal</a>
            <a>Careers</a>
          </div>
          <div>
            <div className="wn-footer-h">Offices</div>
            <a>Bengaluru, IN</a>
            <a>Dubai, UAE</a>
            <a>Riyadh, KSA</a>
          </div>
        </div>
      </div>
      <div className="wn-footer-bottom">
        <div className="wn-container wn-footer-bottom-inner">
          <span className="wn-caption">© 2026 Wonalab Pvt. Ltd.</span>
          <span className="wn-caption">Built in Bengaluru · Dubai · Riyadh</span>
        </div>
      </div>
    </footer>
  );
}
