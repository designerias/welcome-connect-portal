import { useState } from "react";
import { LoginCarouselV2 } from "@/components/LoginCarouselV2";
import { LoginFormV2 } from "@/components/LoginFormV2";
import { UnableToLoginV2 } from "@/components/UnableToLoginV2";
import { TwoFactorAuthV2 } from "@/components/TwoFactorAuthV2";
import { MFASetupV2 } from "@/components/MFASetupV2";
import { Shield } from "lucide-react";
import icon from "@/assets/icon.svg";
import logo from "@/assets/practicesuite.svg";

const IndexV2 = () => {
  const [showUnableToLogin, setShowUnableToLogin] = useState(false);
  const [showTwoFactorAuth, setShowTwoFactorAuth] = useState(false);
  const [showMFASetup, setShowMFASetup] = useState(false);
  const [isDeferring, setIsDeferring] = useState(false);

  const handleDefer = () => {
    // First, ensure 2FA screen is fully visible
    setIsDeferring(true);
    // Wait for the screen to render at 100%, then transition back to login
    setTimeout(() => {
      setShowTwoFactorAuth(false);
      setShowMFASetup(false);
      setIsDeferring(false);
    }, 500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background loginpage-v2-container">
      {/* Main Content */}
      <main className="flex-1 grid lg:grid-cols-2 loginpage-v2-main relative">
        {/* Left Side - Login Form, Unable to Login, or 2FA */}
        <div className="flex items-start justify-center p-4 sm:p-6 md:p-12 loginpage-v2-form-wrapper" style={{ backgroundColor: '#f9fcfd' }}>
          <div className={`w-full space-y-4 loginpage-v2-content-wrapper ${showMFASetup ? 'max-w-4xl' : 'max-w-md'}`} style={{ marginTop: '15px' }}>
            {/* Static Logo and Welcome Section - Hidden on Unable to login page */}
            {!showUnableToLogin && (
              <div className={`space-y-2 loginpage-v2-static-header ${showMFASetup ? 'pl-0 md:pl-[150px]' : 'pl-0'}`}>
                <img src={logo} alt="PracticeSuite" className="h-10 sm:h-12 loginpage-v2-logo" />
                <h1 className="text-2xl sm:text-3xl font-bold loginpage-v2-title" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>Welcome Back!</h1>
                <p className="text-sm sm:text-base loginpage-v2-subtitle" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>Login to your account.</p>
                <div className="h-0.5 bg-gray-400 w-24 mb-4 loginpage-v2-divider"></div>
              </div>
            )}

            {/* Static 2FA Header - Always visible when 2FA or MFA setup is showing, aligns with content */}
            {showTwoFactorAuth && (
              <div className={`flex items-center gap-2 sm:gap-3 loginpage-v2-2fa-header pt-2 ${showMFASetup ? 'pl-0 md:pl-[150px]' : 'pl-0'}`}>
                <Shield className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: 'hsl(0deg 0.61% 32.35%)' }} />
                <h1 className="text-xl sm:text-2xl font-bold" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
                  Two-Factor Authentication
                </h1>
              </div>
            )}

            {/* Content Container */}
            <div className="relative" style={{ minHeight: '300px' }}>
              {/* Login Form or Unable to Login */}
              {!showTwoFactorAuth && !showMFASetup && (
                <div className="w-full">
                  {showUnableToLogin ? (
                    <UnableToLoginV2 onBackToLogin={() => setShowUnableToLogin(false)} />
                  ) : (
                    <LoginFormV2 
                      onUnableToLogin={() => setShowUnableToLogin(true)}
                      onLoginSuccess={() => setShowTwoFactorAuth(true)}
                    />
                  )}
                </div>
              )}

              {/* MFA Setup Section - Replaces 2FA section when Enroll is clicked */}
              {showTwoFactorAuth && !isDeferring && (
                <div className="w-full">
                  {showMFASetup ? (
                    <MFASetupV2 
                      onAssign={() => console.log("Assign MFA clicked")}
                      onCancel={() => setShowMFASetup(false)}
                      hideHeader={true}
                    />
                  ) : (
                    <TwoFactorAuthV2 
                      onEnroll={() => setShowMFASetup(true)}
                      onDefer={handleDefer}
                      hideHeader={true}
                    />
                  )}
                </div>
              )}
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

