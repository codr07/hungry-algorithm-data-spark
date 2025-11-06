import { NavLink } from "./NavLink";
import { Code2 } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 text-xl font-semibold text-foreground hover:text-primary">
          <Code2 className="w-6 h-6" />
          <span>DataLogix Club</span>
        </NavLink>
        
        <div className="flex items-center gap-6">
          <NavLink 
            to="/" 
            className="text-muted-foreground hover:text-foreground"
            activeClassName="text-primary font-medium"
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className="text-muted-foreground hover:text-foreground"
            activeClassName="text-primary font-medium"
          >
            About
          </NavLink>
          <NavLink 
            to="/members" 
            className="text-muted-foreground hover:text-foreground"
            activeClassName="text-primary font-medium"
          >
            Members
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
