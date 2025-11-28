import { useState } from "react";
import { LoginCarouselV2 } from "@/components/LoginCarouselV2";
import { LoginFormV2 } from "@/components/LoginFormV2";
import { UnableToLoginV2 } from "@/components/UnableToLoginV2";
import { TwoFactorAuthV2 } from "@/components/TwoFactorAuthV2";
import { MFASetupV2 } from "@/components/MFASetupV2";
import icon from "@/assets/icon.svg";
import logo from "@/assets/practicesuite.svg";

const IndexV2_1 = () => {
  const [showUnableToLogin, setShowUnableToLogin] = useState(false);
  const [showTwoFactorAuth, setShowTwoFactorAuth] = useState(false);
  const [showMFASetup, setShowMFASetup] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background loginpage-v2-container">
      {/* Main Content */}
      <main className="flex-1 grid loginpage-v2-main relative overflow-hidden" style={{ gridTemplateColumns: '60% 40%' }}>
        {/* Left Side - Login Form, Unable to Login, or 2FA */}
        <div className="flex flex-col items-start justify-start pt-12 pb-6 px-6 md:pt-16 md:pb-12 md:px-12 loginpage-v2-form-wrapper relative overflow-hidden" style={{ backgroundColor: '#f9fcfd' }}>
          {/* Static Header - Logo and Welcome Section */}
          <div className="mb-3 loginpage-v2-static-header" style={{ marginTop: '15px' }}>
            <img src={logo} alt="PracticeSuite" className="h-12 loginpage-v2-logo" />
            
            <div className="space-y-2 loginpage-v2-title-section mt-3">
              <h1 className="text-3xl font-bold loginpage-v2-title" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>Welcome Back!</h1>
              <p className="loginpage-v2-subtitle" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>Login to your account.</p>
              <div className="h-0.5 bg-gray-400 w-24 mb-1 loginpage-v2-divider"></div>
            </div>
          </div>

          {/* Sliding Content Container */}
          <div className="w-full max-w-md relative" style={{ minHeight: '400px' }}>
            {/* Login Form - slides left when 2FA appears */}
            <div 
              className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                showTwoFactorAuth || showMFASetup ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'
              }`}
            >
              {showUnableToLogin ? (
                <UnableToLoginV2 onBackToLogin={() => setShowUnableToLogin(false)} />
              ) : (
                <LoginFormV2 
                  onUnableToLogin={() => setShowUnableToLogin(true)}
                  onLoginSuccess={() => setShowTwoFactorAuth(true)}
                />
              )}
            </div>

            {/* 2FA Component - slides in from right, slides out when MFA setup appears */}
            <div 
              className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                showMFASetup ? '-translate-x-full opacity-0' : showTwoFactorAuth ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
              }`}
            >
              <TwoFactorAuthV2
                onEnroll={() => {
                  setShowMFASetup(true);
                }}
                onDefer={() => {
                  setShowTwoFactorAuth(false);
                }}
              />
            </div>

            {/* MFA Setup Component - slides in from right */}
            <div 
              className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                showMFASetup ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
              }`}
            >
              <MFASetupV2
                onAssign={() => {
                  console.log("Assign MFA clicked");
                  // Handle MFA assignment logic here
                }}
                onCancel={() => {
                  setShowMFASetup(false);
                }}
              />
            </div>
          </div>
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
          {/* Icon inside right box - 1.5x size */}
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

export default IndexV2_1;

