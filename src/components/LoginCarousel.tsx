import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import greenBgCircle from "@/assets/green-bg-circle.svg";
import practicesuiteLogo from "@/assets/practicesuite.svg";
import webinarsIcon from "@/assets/webinars.svg";
import videoIcon from "@/assets/video.svg";
import paymentIcon from "@/assets/payment.svg";

interface Slide {
  title: string;
  description: string;
  buttonText: string;
  subtitle?: string;
  icon: string;
}

const slides: Slide[] = [
  {
    title: "Free Training Webinars!",
    description: "Become proficient in all aspects of your medical billing software.",
    buttonText: "Register Now",
    icon: webinarsIcon,
  },
  {
    subtitle: "Now Available",
    title: "Video Consults Software",
    description: "• Provide Continuity of Care\n• Connect with more patients\n• Maintain revenue streams",
    buttonText: "Sign Up Now",
    icon: videoIcon,
  },
  {
    subtitle: "Now Available",
    title: "Payment Processing\nWhere it Belongs",
    description: "Say goodbye to manual reconciliation and third-party vendors.",
    buttonText: "Activate Now",
    icon: paymentIcon,
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
    <div className="relative h-full flex flex-col overflow-hidden">
      {/* Background SVG with subtle overlay effect */}
      <img 
        src={greenBgCircle} 
        alt="" 
        className="absolute bottom-0 right-0 h-full w-auto opacity-20 pointer-events-none"
      />
      
      {/* Header with Logo */}
      <div className="relative z-10 pt-4 pb-8">
        <img 
          src={practicesuiteLogo} 
          alt="PracticeSuite" 
          className="h-12 md:h-14"
        />
      </div>

      {/* Carousel Content */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="w-full max-w-2xl animate-in fade-in duration-500" key={currentSlide}>
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-lg">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              {/* Icon */}
              <div className="flex-shrink-0">
                <img 
                  src={slides[currentSlide].icon} 
                  alt="" 
                  className="w-16 h-16 md:w-20 md:h-20"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1 space-y-3">
                {slides[currentSlide].subtitle && (
                  <p className="text-sm md:text-base font-light tracking-wide text-gray-500 uppercase">
                    {slides[currentSlide].subtitle}
                  </p>
                )}
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight text-gray-800 whitespace-pre-line">
                  {slides[currentSlide].title}
                </h2>
                <p className="text-sm md:text-base whitespace-pre-line leading-snug text-gray-600">
                  {slides[currentSlide].description}
                </p>
                <Button 
                  variant="default" 
                  size="lg"
                  className="font-semibold mt-2"
                >
                  {slides[currentSlide].buttonText}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="relative z-10 pb-6 flex justify-center gap-2">
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
