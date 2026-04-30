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
            <div className="wn-footer-h">Services</div>
            <a href="#services">AI Agents</a>
            <a href="#services">Fintech</a>
            <a href="#services">SaaS Web & Mobile</a>
            <a href="#services">Bots & Automation</a>
          </div>
          <div>
            <div className="wn-footer-h">Studio</div>
            <a href="#work">Work</a>
            <a href="#about">About</a>
          </div>
          <div>
            <div className="wn-footer-h">Contact</div>
            <a href="mailto:contact@wonalab.com">contact@wonalab.com</a>
          </div>
        </div>
      </div>
      <div className="wn-footer-bottom">
        <div className="wn-container wn-footer-bottom-inner">
          <span className="wn-caption">© 2026 Wonalab Pvt. Ltd.</span>
          <span className="wn-caption">Digital, crafted.</span>
        </div>
      </div>
    </footer>
  );
}
