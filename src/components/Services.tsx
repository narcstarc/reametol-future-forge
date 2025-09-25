import { Smartphone, Tablet, Globe, Zap, Shield, Rocket } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "iOS Development",
      description: "Native iOS apps built with Swift and cutting-edge Apple technologies for optimal performance.",
      features: ["SwiftUI", "Core Data", "Push Notifications", "App Store Optimization"]
    },
    {
      icon: Tablet,
      title: "Android Development",
      description: "Powerful Android applications using Kotlin and modern Android architecture components.",
      features: ["Kotlin", "Jetpack Compose", "Material Design", "Google Play Console"]
    },
    {
      icon: Globe,
      title: "Cross-Platform",
      description: "Efficient cross-platform solutions with React Native and Flutter for broader reach.",
      features: ["React Native", "Flutter", "Shared Codebase", "Native Performance"]
    },
    {
      icon: Zap,
      title: "UI/UX Design",
      description: "Stunning, user-centric designs that combine aesthetics with exceptional functionality.",
      features: ["User Research", "Prototyping", "Design Systems", "Usability Testing"]
    },
    {
      icon: Shield,
      title: "App Security",
      description: "Enterprise-grade security implementation to protect user data and app integrity.",
      features: ["Data Encryption", "Secure APIs", "Authentication", "Privacy Compliance"]
    },
    {
      icon: Rocket,
      title: "App Deployment",
      description: "Seamless deployment and maintenance services for App Store and Google Play success.",
      features: ["Store Optimization", "CI/CD Pipeline", "Performance Monitoring", "Updates Management"]
    }
  ];

  return (
    <section id="services" className="py-32 relative">
      <div className="absolute inset-0 grid-bg opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">Our</span> <span className="text-neon">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to deployment, we provide comprehensive mobile app development services 
            using the latest technologies and industry best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="card-glow p-8 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary p-4 mb-4 group-hover:animate-glow-pulse">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
              </div>
              
              <div className="space-y-2">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;