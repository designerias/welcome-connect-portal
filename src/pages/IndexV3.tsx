import { LoginCarousel } from "@/components/LoginCarousel";
import { LoginForm } from "@/components/LoginForm";
import icon from "@/assets/practicesuite.svg";

const IndexV3 = () => {
  // Placeholder component - update with V3 specific components when available
  return (
    <div 
      className="min-h-screen flex flex-col loginpage-v3-container relative"
      style={{
        background: 'linear-gradient(110deg in oklab, rgb(105, 193, 226) -125%, rgb(180, 224, 241) -15%, rgb(255, 255, 255) 90%)'
      }}
    >
      {/* Hero Icon in top right corner */}
      <img 
        src={icon} 
        alt="PracticeSuite" 
        className="absolute top-0 right-0 h-[70%] w-auto opacity-30 pointer-events-none z-0 loginpage-v3-logo-bg object-contain"
      />
      
      {/* Main Content */}
      <main className="flex-1 grid lg:grid-cols-2 loginpage-v3-main relative">
        {/* Left Side - Login Form */}
        <div className="flex items-center justify-center p-6 md:p-12 loginpage-v3-form-wrapper">
          <LoginForm />
        </div>

        {/* Icon in the middle */}
        <div className="absolute left-[calc(50%+5px)] top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:block loginpage-v3-center-icon">
          <img src={icon} alt="Logo" className="w-16 h-16 md:w-20 md:h-20" />
        </div>

        {/* Right Side - Carousel */}
        <div 
          className="relative overflow-hidden hidden lg:block rounded-[20px] m-2.5 loginpage-v3-carousel-wrapper"
        >
          {/* Icon inside right box - 1.5x size */}
          <div className="absolute bottom-10 right-10 z-10 loginpage-v3-right-box-icon">
            <img src={icon} alt="Logo" className="w-24 h-24 md:w-[120px] md:h-[120px]" />
          </div>
          <div className="relative h-full">
            <LoginCarousel />
          </div>
        </div>
      </main>
    </div>
  );
};

export default IndexV3;

