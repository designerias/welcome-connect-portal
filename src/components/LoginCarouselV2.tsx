import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import practiceManagement from "@/assets/practice-management.svg";
import electronicHealthRecords from "@/assets/electronic-health-records.svg";
import patientCenteredEngagement from "@/assets/patient-centered-engagement.svg";
import icon2 from "@/assets/icon-2-1.svg";
import heroIcon from "@/assets/hero-icon.svg";

interface Slide {
  title: string;
  description: string;
  buttonText: string;
  subtitle?: string;
}

const slides: Slide[] = [
  {
    subtitle: "Now Available",
    title: "Free Training\nWebinars!",
    description: "Become proficient in all aspects of your medical billing software.",
    buttonText: "Register Now",
  },
  {
    subtitle: "Now Available",
    title: "Video Consults\nSoftware",
    description: "• Provide Continuity of Care\n• Connect with more patients\n• Maintain revenue streams",
    buttonText: "Sign Up Now",
  },
  {
    subtitle: "Now Available",
    title: "Payment Processing\nWhere it Belongs",
    description: "Say goodbye to manual reconciliation and third-party vendors.",
    buttonText: "Activate Now",
  },
];

export const LoginCarouselV2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-full flex flex-col p-6 md:p-10 overflow-hidden loginpage-v2-carousel">
      {/* Logo in top right */}
      <img 
        src={heroIcon} 
        alt="PracticeSuite" 
        className="absolute -top-10 md:-top-20 -right-10 md:-right-20 h-[70%] w-[70%] opacity-30 pointer-events-none z-0 loginpage-v2-logo-bg object-contain object-top-right"
      />
      
      {/* Main Title */}
      <div className="relative z-10 mb-6 max-w-2xl w-full p-4 md:p-6 loginpage-v2-main-title-wrapper">
        {/* Icons */}
        <div className="flex items-center justify-start gap-4 md:gap-6 mb-4 loginpage-v2-icons">
          <img src={practiceManagement} alt="Practice Management" className="w-8 h-8 md:w-10 md:h-10" />
          <img src={electronicHealthRecords} alt="Electronic Health Records" className="w-8 h-8 md:w-10 md:h-10" />
          <img src={patientCenteredEngagement} alt="Patient Centered Engagement" className="w-8 h-8 md:w-10 md:h-10" />
          <img src={icon2} alt="Medical Services" className="w-8 h-8 md:w-10 md:h-10" />
        </div>
        <h1 className="font-bold leading-tight loginpage-v2-main-title" style={{ fontSize: '2.5rem', color: 'hsl(0deg 0.61% 32.35%)' }}>
          One Medical Office<br />
          Solution for Your Entire Practice
        </h1>
      </div>

      {/* Content Box with padding */}
      <div className="relative z-10 flex-1 flex items-end loginpage-v2-content-wrapper">
        <div className="max-w-2xl w-full p-4 md:p-6 space-y-3 animate-in fade-in duration-500 mb-6 loginpage-v2-slide-content" key={currentSlide}>
          {slides[currentSlide].subtitle && (
            <p className="text-sm md:text-base font-light tracking-wide uppercase mb-1 loginpage-v2-slide-subtitle" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
              {slides[currentSlide].subtitle}
            </p>
          )}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight whitespace-pre-line loginpage-v2-slide-title" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
            {slides[currentSlide].title}
          </h2>
          <p className="text-base md:text-lg whitespace-pre-line leading-snug loginpage-v2-slide-description" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
            {slides[currentSlide].description}
          </p>
          <Button 
            variant="outline" 
            size="sm"
            className="font-semibold text-sm text-white rounded-full border-2 border-transparent hover:bg-transparent hover:text-[#0077B5] hover:border-[#0077B5] transition-all px-4 py-2 loginpage-v2-slide-button"
            style={{ backgroundColor: '#0077B5' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#0077B5';
            }}
          >
            {slides[currentSlide].buttonText}
          </Button>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute left-6 bottom-[8rem] md:bottom-[10rem] flex flex-col items-center justify-center gap-2 loginpage-v2-nav">
        {slides.map((_, index) => (
          <button
            key={`v2-nav-${index}`}
            onClick={() => setCurrentSlide(index)}
            className={`rounded-full transition-all duration-300 loginpage-v2-nav-dot ${
              index === currentSlide ? "w-1 h-8 bg-white" : "w-1 h-2 bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

