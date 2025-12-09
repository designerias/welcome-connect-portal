import { useState } from "react";
import { LoginCarouselV2 } from "@/components/LoginCarouselV2";
import { LoginFormV2 } from "@/components/LoginFormV2";
import { UnableToLoginV2 } from "@/components/UnableToLoginV2";
import { TwoFactorAuthV2 } from "@/components/TwoFactorAuthV2";
import { TwoFactorVerifyV2 } from "@/components/TwoFactorVerifyV2";
import { MFASetupV2 } from "@/components/MFASetupV2";
import { Shield, Phone, Mail } from "lucide-react";
import icon from "@/assets/icon.svg";
import logo from "@/assets/practicesuite.svg";

const IndexV1 = () => {
  const [showUnableToLogin, setShowUnableToLogin] = useState(false);
  const [showTwoFactorAuth, setShowTwoFactorAuth] = useState(false);
  const [show2FAVerify, setShow2FAVerify] = useState(false);
  const [showMFASetup, setShowMFASetup] = useState(false);
  const [isDeferring, setIsDeferring] = useState(false);

  const handleDefer = () => {
    // First, ensure 2FA screen is fully visible
    setIsDeferring(true);
    // Wait for the screen to render at 100%, then transition back to login
    setTimeout(() => {
      setShowTwoFactorAuth(false);
      setShow2FAVerify(false);
      setShowMFASetup(false);
      setIsDeferring(false);
    }, 500);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Reset all states to show login form
    setShowUnableToLogin(false);
    setShowTwoFactorAuth(false);
    setShow2FAVerify(false);
    setShowMFASetup(false);
    setIsDeferring(false);
    
    // Scroll to username field after a brief delay to ensure form is rendered
    setTimeout(() => {
      const usernameField = document.getElementById('username-v1');
      if (usernameField) {
        usernameField.scrollIntoView({ behavior: 'smooth', block: 'center' });
        usernameField.focus();
      }
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background loginpage-v2-container">
      {/* Global Top Header */}
      <header className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-4 flex items-center justify-between bg-white border-b border-gray-200 relative z-10 shadow-md">
        {/* Logo on the left */}
        <div className="flex items-center">
          <a href="#username-v1" onClick={handleLogoClick} className="inline-block cursor-pointer">
            <img src={logo} alt="PracticeSuite" className="h-9 sm:h-11 md:h-12" style={{ maxWidth: '200px' }} />
          </a>
        </div>
        
        {/* Contact links on the right */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Phone Number */}
          <a
            href="tel:8136072800"
            className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white border-2 transition-colors text-base font-semibold"
            style={{ 
              fontSize: '1rem',
              borderColor: '#7fbfde',
              color: '#403f40'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(127, 191, 222, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
            }}
          >
            <Phone className="w-4 h-4" style={{ color: '#3375b1' }} />
            <span className="hidden sm:inline">813-607-2800</span>
          </a>
          
          {/* Contact Support */}
          <a
            href="mailto:support@practicesuite.com"
            className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white border-2 transition-colors text-base font-semibold"
            style={{ 
              fontSize: '1rem',
              borderColor: '#7fbfde',
              color: '#403f40'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(127, 191, 222, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
            }}
          >
            <Mail className="w-4 h-4" style={{ color: '#3375b1' }} />
            <span className="hidden sm:inline">Contact Support</span>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 grid lg:grid-cols-2 loginpage-v2-main relative" style={{ backgroundColor: '#f9fcfd' }}>
        {/* Left Side - Login Form, Unable to Login, or 2FA */}
        <div className="flex items-start justify-center p-4 sm:p-6 md:p-12 loginpage-v2-form-wrapper" style={{ backgroundColor: '#f9fcfd' }}>
          <div className="w-full space-y-4 loginpage-v2-content-wrapper max-w-md" style={{ marginTop: '15px' }}>
            {/* Static Logo and Welcome Section - Hidden on Unable to login page */}
            {!showUnableToLogin && (
              <div className="space-y-2 loginpage-v2-static-header">
                <h1 className="text-2xl sm:text-3xl font-bold loginpage-v2-title" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>Welcome Back!</h1>
                <p className="text-sm sm:text-base loginpage-v2-subtitle" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>Login to your account.</p>
                <div className="h-0.5 bg-gray-400 w-24 mb-4 loginpage-v2-divider"></div>
              </div>
            )}

            {/* Static 2FA Header - Always visible when 2FA, 2FA Verify, or MFA setup is showing, aligns with content */}
            {(showTwoFactorAuth || show2FAVerify) && !showMFASetup && (
              <div className="flex items-center gap-2 sm:gap-3 loginpage-v2-2fa-header pt-2">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: 'hsl(0deg 0.61% 32.35%)' }} />
                <h1 className="text-xl sm:text-2xl font-bold leading-tight" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
                  Two-Factor Authentication
                </h1>
              </div>
            )}

            {/* Content Container */}
            <div className="relative" style={{ minHeight: '300px' }}>
              {/* Login Form or Unable to Login */}
              {!showTwoFactorAuth && !showMFASetup && !show2FAVerify && (
                <div className="w-full">
                  {showUnableToLogin ? (
                    <UnableToLoginV2 
                      onBackToLogin={() => setShowUnableToLogin(false)}
                      onLogoClick={handleLogoClick}
                    />
                  ) : (
                    <LoginFormV2 
                      onUnableToLogin={() => setShowUnableToLogin(true)}
                      onLoginSuccess={() => setShow2FAVerify(true)}
                      usernameFieldId="username-v1"
                      hideFooterContactLinks={true}
                    />
                  )}
                </div>
              )}

              {/* 2FA Verify Section - Shows after login */}
              {show2FAVerify && !showMFASetup && (
                <div className="w-full">
                  <TwoFactorVerifyV2
                    onVerify={(code, trustDevice) => {
                      console.log("2FA verification:", { code, trustDevice });
                      setShow2FAVerify(false);
                      setShowTwoFactorAuth(true);
                    }}
                    onCancel={() => setShow2FAVerify(false)}
                    onEnroll={() => {
                      setShow2FAVerify(false);
                      setShowTwoFactorAuth(true);
                    }}
                  />
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
                      hideFooterContactLinks={true}
                    />
                  ) : (
                    <TwoFactorAuthV2 
                      onEnroll={() => setShowMFASetup(true)}
                      onDefer={handleDefer}
                      hideHeader={true}
                      hideFooterContactLinks={true}
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
          className="relative overflow-hidden hidden lg:flex flex-col h-full loginpage-v2-carousel-wrapper"
          style={{
            background: 'linear-gradient(210deg in oklab, rgb(255, 255, 255) 10%, rgb(180, 224, 241) 115%, rgb(105, 193, 226) 225%)',
            padding: '0',
            margin: '0'
          }}
        >
          {/* Carousel Content */}
          <div 
            className="relative flex-1 overflow-hidden"
          >
            {/* Icon inside right box - bottom right corner */}
            <div className="absolute bottom-10 right-10 z-10 loginpage-v2-right-box-icon">
              <img src={icon} alt="Logo" className="w-24 h-24 md:w-[120px] md:h-[120px]" />
            </div>
            <div className="relative h-full">
              <LoginCarouselV2 />
            </div>
          </div>
        </div>
      </main>

    </div>
  );
};

export default IndexV1;

