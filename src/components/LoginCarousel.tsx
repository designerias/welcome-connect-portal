import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import greenBgCircle from "@/assets/green-bg-circle.svg";

interface Slide {
  title: string;
  description: string;
  buttonText: string;
  subtitle?: string;
}

const slides: Slide[] = [
  {
    title: "Free Training Webinars!",
    description: "Become proficient in all aspects of your medical billing software.",
    buttonText: "Register Now",
  },
  {
    subtitle: "Now Available",
    title: "Video Consults Software",
    description: "• Provide Continuity of Care\n• Connect with more patients\n• Maintain revenue streams",
    buttonText: "Sign Up Now",
  },
  {
    subtitle: "Now Available",
    title: "Payment Processing Where it Belongs",
    description: "Say goodbye to manual reconciliation and third-party vendors.",
    buttonText: "Activate Now",
  },
];

export const LoginCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-full flex flex-col items-center justify-center p-6 md:p-10 overflow-hidden">
      {/* Background SVG with subtle overlay effect */}
      <img 
        src={greenBgCircle} 
        alt="" 
        className="absolute bottom-0 right-0 h-full w-auto opacity-20 pointer-events-none"
      />
      
      <div className="max-w-2xl w-full space-y-3 animate-in fade-in duration-500 relative z-10" key={currentSlide}>
        {slides[currentSlide].subtitle && (
          <p className="text-base md:text-lg font-light tracking-wide text-white/80 uppercase mb-1">
            {slides[currentSlide].subtitle}
          </p>
        )}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight text-white">
          {slides[currentSlide].title}
        </h2>
        <p className="text-base md:text-lg whitespace-pre-line leading-snug text-white/90">
          {slides[currentSlide].description}
        </p>
        <Button 
          variant="outline" 
          size="lg"
          className="font-semibold bg-white/10 text-white border-white hover:bg-white/20"
        >
          {slides[currentSlide].buttonText}
        </Button>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
