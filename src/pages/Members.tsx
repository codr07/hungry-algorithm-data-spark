import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import sharanyaImg from "@/assets/members/sharanya.jpg";
import sreyaImg from "@/assets/members/sreya.jpg";
import reshmaImg from "@/assets/members/reshma.jpg";
import sidharthImg from "@/assets/members/sidharth.jpg";
import janetImg from "@/assets/members/janet.jpg";
import vishwasImg from "@/assets/members/vishwas.jpg";
import abhishekImg from "@/assets/members/abhishek.jpg";

interface Member {
  name: string;
  role: string;
  image: string;
  year: string;
}

const members: Member[] = [
  {
    name: "Ms. Sharanya M",
    role: "President",
    image: sharanyaImg,
    year: "II M.Sc Data Science",
  },
  {
    name: "Ms. Sreya Virdikar",
    role: "Vice President",
    image: sreyaImg,
    year: "II M.Sc Data Science",
  },
  {
    name: "Ms. Reshma K",
    role: "Secretary",
    image: reshmaImg,
    year: "II M.Sc Data Science",
  },
  {
    name: "Mr. Sidharth V",
    role: "Technical Lead-I",
    image: sidharthImg,
    year: "II M.Sc Data Science",
  },
  {
    name: "Ms. Janet Johnson",
    role: "Technical Lead-II",
    image: janetImg,
    year: "II M.Sc Data Science",
  },
  {
    name: "Mr. Vishwas K",
    role: "Networking Lead",
    image: vishwasImg,
    year: "II M.Sc Data Science",
  },
  {
    name: "Mr. Abhishek Augustine",
    role: "Promotion & Marketing Lead",
    image: abhishekImg,
    year: "II M.Sc Data Science",
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
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-secondary group-hover:ring-2 group-hover:ring-primary transition-all">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Info */}
                  <div className="text-center space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-sm text-primary font-medium">
                      {member.role}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {member.year}
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
