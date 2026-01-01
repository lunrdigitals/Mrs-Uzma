import { Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Mrs. Uzma.</span>
            <span className="hidden sm:inline">All rights reserved.</span>
          </div>
          
          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            Crafted with 
            <Heart size={14} className="text-accent fill-accent" />
            for academic excellence
          </p>
        </div>
      </div>
    </footer>
  );
};
