import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#experience", label: "Experience" },
  { href: "#subjects", label: "Subjects" },
  { href: "#leadership", label: "Leadership" },
  { href: "#contact", label: "Contact" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="section-container">
        <nav className="flex items-center justify-between h-16 sm:h-20">
          <a href="#" className="font-serif text-xl sm:text-2xl font-semibold text-foreground">
            Mrs. Uzma
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-elevated">
            <ul className="flex flex-col py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleNavClick}
                    className="block px-6 py-3 text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};
