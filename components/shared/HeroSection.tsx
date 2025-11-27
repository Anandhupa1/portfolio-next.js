import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/image1.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-background/70 to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4 animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Hi, I'm{" "}
                <span className="text-primary">Your Name</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                Creative Developer & Designer
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              I craft beautiful digital experiences with modern design
              principles and clean, efficient code.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <button className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden">
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-primary/20 scale-0 group-hover:scale-100 transition-transform duration-300" />
              </button>
              <button className="px-8 py-4 border-2 border-primary text-primary rounded-xl font-medium hover:bg-primary/10 transition-all duration-300 hover:scale-105 active:scale-95">
                Get In Touch
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start pt-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                GitHub
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Twitter
              </a>
            </div>
          </div>

          {/* Right Side - Featured Image */}
          <div className="hidden relative animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              {/* Decorative gradient border */}
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/50 via-primary/30 to-transparent rounded-3xl blur-xl opacity-50" />
              
              <div className="relative w-full h-full rounded-3xl overflow-hidden bg-primary/5">
                <Image
                  src="/images/hero/image2.jpg"
                  alt="Featured Work"
                  fill
                  className="object-cover rounded-3xl"
                  priority
                  quality={90}
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}

