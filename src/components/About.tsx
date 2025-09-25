import { Users, Award, Clock, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, value: "50+", label: "Expert Developers" },
    { icon: Award, value: "500+", label: "Apps Delivered" },
    { icon: Clock, value: "5+", label: "Years Experience" },
    { icon: TrendingUp, value: "98%", label: "Success Rate" }
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="text-foreground">About</span> <span className="text-neon">Reametol</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Founded on the principle of pushing technological boundaries, Reametol is a cutting-edge 
                mobile app development company that transforms visionary ideas into reality.
              </p>
              
              <p>
                Our team of expert developers, designers, and strategists work collaboratively to deliver 
                exceptional mobile experiences that not only meet but exceed client expectations.
              </p>
              
              <p>
                We specialize in creating innovative, scalable, and secure mobile applications using the 
                latest technologies and industry best practices. From startups to enterprise solutions, 
                we've got you covered.
              </p>
            </div>

            <div className="mt-8">
              <button className="btn-neon">Learn More About Us</button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="card-glow p-8 text-center group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary p-4 mx-auto mb-4 group-hover:animate-glow-pulse">
                  <stat.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-32 text-center">
          <div className="card-glow p-12 max-w-4xl mx-auto animate-fade-in">
            <h3 className="text-3xl font-bold text-foreground mb-6">Our Mission</h3>
            <p className="text-xl text-muted-foreground leading-relaxed">
              "To empower businesses and individuals with innovative mobile solutions that not only meet 
              today's needs but anticipate tomorrow's possibilities. We believe in creating technology 
              that enhances human experiences and drives meaningful progress."
            </p>
            <div className="mt-6">
              <span className="text-neon font-semibold">- The Reametol Team</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;