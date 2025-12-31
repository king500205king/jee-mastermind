import { Link } from "react-router-dom";

const footerLinks = {
  practice: [
    { label: "Physics PYQs", to: "/practice/physics" },
    { label: "Chemistry PYQs", to: "/practice/chemistry" },
    { label: "Mathematics PYQs", to: "/practice/mathematics" },
    { label: "Mock Tests", to: "/mock-test" },
  ],
  resources: [
    { label: "Formula Sheets", to: "/formulas" },
    { label: "Study Notes", to: "/notes" },
    { label: "Daily Challenge", to: "/daily" },
    { label: "Leaderboard", to: "/leaderboard" },
  ],
  company: [
    { label: "About Us", to: "/about" },
    { label: "Contact", to: "/contact" },
    { label: "Privacy Policy", to: "/privacy" },
    { label: "Terms of Service", to: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-primary">
                <span className="font-display text-lg font-bold text-primary-foreground">J</span>
              </div>
              <span className="font-display text-xl font-bold text-foreground">JEE Prep</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your complete preparation platform for JEE Main & Advanced.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Practice</h3>
            <ul className="space-y-3">
              {footerLinks.practice.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} JEE Prep. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Made with ❤️ for JEE Aspirants
          </p>
        </div>
      </div>
    </footer>
  );
}
