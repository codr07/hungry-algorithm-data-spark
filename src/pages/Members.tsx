import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { User } from "lucide-react";

interface Member {
  name: string;
  role: string;
  image?: string;
}

const members: Member[] = [
  {
    name: "President Name",
    role: "President",
  },
  {
    name: "Vice President Name",
    role: "Vice-President",
  },
  {
    name: "Secretary Name",
    role: "Secretary",
  },
  {
    name: "Tech Lead 1",
    role: "Tech Lead",
  },
  {
    name: "Tech Lead 2",
    role: "Tech Lead",
  },
  {
    name: "Marketing Manager Name",
    role: "Promotion and Marketing Manager",
  },
  {
    name: "Networking Lead Name",
    role: "Networking Lead",
  },
];

const Members = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-6xl mx-auto space-y-12 animate-fade-in">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Our Team
            </h1>
            <p className="text-xl text-muted-foreground">
              Meet the minds behind DataLogix Club
            </p>
          </div>

          {/* Members Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((member, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary transition-all group"
              >
                <div className="space-y-4">
                  {/* Avatar */}
                  <div className="w-24 h-24 mx-auto rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <User className="w-12 h-12 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  
                  {/* Info */}
                  <div className="text-center space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-sm text-primary font-medium">
                      {member.role}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <Card className="p-8 bg-card border-border text-center">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">Join Our Community</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                DataLogix Club is always looking for passionate individuals who want to explore 
                the world of data science and machine learning. Connect with us to learn about 
                upcoming events, workshops, and opportunities.
              </p>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Members;
