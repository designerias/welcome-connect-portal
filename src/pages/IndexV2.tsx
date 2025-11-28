import { useState } from "react";
import { LoginCarouselV2 } from "@/components/LoginCarouselV2";
import { LoginFormV2 } from "@/components/LoginFormV2";
import { UnableToLoginV2 } from "@/components/UnableToLoginV2";
import icon from "@/assets/icon.svg";

const IndexV2 = () => {
  const [showUnableToLogin, setShowUnableToLogin] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background loginpage-v2-container">
      {/* Main Content */}
      <main className="flex-1 grid lg:grid-cols-2 loginpage-v2-main relative">
        {/* Left Side - Login Form or Unable to Login */}
        <div className="flex items-center justify-center p-6 md:p-12 loginpage-v2-form-wrapper" style={{ backgroundColor: '#f9fcfd' }}>
          {showUnableToLogin ? (
            <UnableToLoginV2 onBackToLogin={() => setShowUnableToLogin(false)} />
          ) : (
            <LoginFormV2 onUnableToLogin={() => setShowUnableToLogin(true)} />
          )}
        </div>

        {/* Icon in the middle */}
        <div className="absolute left-[70%] top-1/2 transform -translate-y-1/2 z-20 hidden lg:block loginpage-v2-center-icon">
          <img src={icon} alt="Logo" className="w-16 h-16 md:w-20 md:h-20" />
        </div>

        {/* Right Side - Carousel */}
        <div 
          className="relative overflow-hidden hidden lg:block rounded-[20px] m-2.5 loginpage-v2-carousel-wrapper border-[0.25px] border-gray-300"
          style={{
            background: 'linear-gradient(110deg in oklab, rgb(105, 193, 226) -125%, rgb(180, 224, 241) -15%, rgb(255, 255, 255) 90%)'
          }}
        >
          {/* Icon inside right box - bottom right corner */}
          <div className="absolute bottom-10 right-10 z-10 loginpage-v2-right-box-icon">
            <img src={icon} alt="Logo" className="w-24 h-24 md:w-[120px] md:h-[120px]" />
          </div>
          <div className="relative h-full">
            <LoginCarouselV2 />
          </div>
        </div>
      </main>

    </div>
  );
};

export default IndexV2;

