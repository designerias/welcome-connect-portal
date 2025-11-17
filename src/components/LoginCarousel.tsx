import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  title: string;
  description: string;
  buttonText: string;
}

const slides: Slide[] = [
  {
    title: "Free Training Webinars!",
    description: "Become proficient in all aspects of your medical billing software.",
    buttonText: "Register Now",
  },
  {
    title: "Video Consults Software - Now Available",
    description: "• Provide Continuity of Care\n• Connect with more patients\n• Maintain revenue streams",
    buttonText: "Sign Up Now",
  },
  {
    title: "Now Available - Payment Processing Where it Belongs",
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-full flex flex-col items-center justify-center p-8 md:p-12">
      <div className="max-w-2xl w-full space-y-8 animate-in fade-in duration-500" key={currentSlide}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
          {slides[currentSlide].title}
        </h2>
        <p className="text-lg md:text-xl whitespace-pre-line leading-relaxed text-muted-foreground">
          {slides[currentSlide].description}
        </p>
        <Button 
          variant="default" 
          size="lg"
          className="font-semibold"
        >
          {slides[currentSlide].buttonText}
        </Button>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-secondary/20 hover:bg-secondary/30 transition-colors text-foreground"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "w-8 bg-primary" : "w-2 bg-muted"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-secondary/20 hover:bg-secondary/30 transition-colors text-foreground"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
