import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { User, Lock, Search, HelpCircle } from "lucide-react";
import logo from "@/assets/practicesuite.svg";

interface LoginFormV2Props {
  onUnableToLogin?: () => void;
}

export const LoginFormV2 = ({ onUnableToLogin }: LoginFormV2Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt v2:", { username, password, accountNumber });
  };

  return (
    <div className="w-full max-w-md space-y-4 animate-in fade-in duration-500 loginpage-v2-form">
      <img src={logo} alt="PracticeSuite" className="h-12 loginpage-v2-logo" />
      
      <div className="space-y-2 loginpage-v2-title-section">
        <h1 className="text-3xl font-bold loginpage-v2-title" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>Welcome Back!</h1>
        <p className="loginpage-v2-subtitle" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>Login to your account.</p>
        <div className="h-0.5 bg-gray-400 w-24 mb-4 loginpage-v2-divider"></div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 pt-4 loginpage-v2-form-element">
        <div className="space-y-1.5">
          <Label htmlFor="username-v2" className="text-sm font-medium" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
            Username
          </Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#69C1E2] w-5 h-5 z-10" />
            <div className="relative rounded-lg border border-transparent p-[2px] focus-within:border-dashed focus-within:border-[#9AC449] transition-colors">
              <Input
                id="username-v2"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="pl-10 pr-10 h-12 rounded-lg border-2 border-[#69C1E2] bg-white hover:border-[#4fa8d0] focus:border-[#4fa8d0] focus-visible:ring-0 transition-colors"
                required
              />
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    type="button"
                    onClick={onUnableToLogin}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-gray-400 transition-colors"
                  >
                    <HelpCircle className="w-5 h-5" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Forgot Username</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="password-v2" className="text-sm font-medium" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
            Password
          </Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#69C1E2] w-5 h-5 z-10" />
            <div className="relative rounded-lg border border-transparent p-[2px] focus-within:border-dashed focus-within:border-[#9AC449] transition-colors">
              <Input
                id="password-v2"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 pr-10 h-12 rounded-lg border-2 border-[#69C1E2] bg-white hover:border-[#4fa8d0] focus:border-[#4fa8d0] focus-visible:ring-0 transition-colors"
                required
              />
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    type="button"
                    onClick={onUnableToLogin}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-gray-400 transition-colors"
                  >
                    <HelpCircle className="w-5 h-5" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Forgot Password</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="accountNumber-v2" className="text-sm font-medium" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
            Account #
          </Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#69C1E2] w-5 h-5 z-10" />
            <div className="relative rounded-lg border border-transparent p-[2px] focus-within:border-dashed focus-within:border-[#9AC449] transition-colors">
              <Input
                id="accountNumber-v2"
                type="text"
                placeholder="Account #"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                className="pl-10 h-12 rounded-lg border-2 border-[#69C1E2] bg-white hover:border-[#4fa8d0] focus:border-[#4fa8d0] focus-visible:ring-0 transition-colors"
              />
            </div>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full h-12 text-white font-semibold loginpage-v2-submit-btn"
          style={{
            background: 'linear-gradient(135deg, #69C1E2 0%, #4fa8d0 100%)',
            border: '0.5px solid #4fa8d0',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'linear-gradient(135deg, #4fa8d0 0%, #69C1E2 100%)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'linear-gradient(135deg, #69C1E2 0%, #4fa8d0 100%)';
          }}
        >
          <Lock className="w-4 h-4 mr-2" />
          Secure Log In
        </Button>

        <button
          type="button"
          onClick={onUnableToLogin}
          className="w-full text-sm text-secondary hover:text-[hsl(193deg,72.86%,39.07%)] transition-colors flex items-center justify-center gap-1 loginpage-v2-help-btn"
        >
          Unable to Login. I need help <HelpCircle className="w-3 h-3 text-gray-300" />
        </button>
      </form>

      {/* Footer Content */}
      <div className="space-y-3 pt-4 border-t border-border loginpage-v2-footer">
        <p className="text-[10px] leading-tight text-center" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
          This system contains PHI information and therefore for HIPAA compliance and security purposes, 
          the system should only be accessed by authorized users
        </p>
        
        <div className="flex items-center justify-center gap-2 text-xs">
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 hover:bg-secondary/20 rounded-full transition-colors">
            <span className="inline-block w-5 h-5 bg-secondary/20 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
              </svg>
            </span>
            <span className="font-semibold text-secondary">On-Demand Training Webinars - Medical Billing Software</span>
          </button>
        </div>
        
        <div className="space-y-1.5">
          <div className="flex items-center justify-center gap-3 text-xs" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
            <a href="#" className="transition-colors" style={{ color: 'hsl(0deg 0.61% 32.35%)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(0deg 0.61% 32.35% / 0.8)'} onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(0deg 0.61% 32.35%)'}>Privacy Policy</a>
            <span>|</span>
            <a href="#" className="transition-colors" style={{ color: 'hsl(0deg 0.61% 32.35%)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(0deg 0.61% 32.35% / 0.8)'} onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(0deg 0.61% 32.35%)'}>Privacy Policy (CA)</a>
            <span>|</span>
            <a href="#" className="transition-colors" style={{ color: 'hsl(0deg 0.61% 32.35%)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(0deg 0.61% 32.35% / 0.8)'} onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(0deg 0.61% 32.35%)'}>Disclaimer</a>
            <span>|</span>
            <a href="#" className="transition-colors" style={{ color: 'hsl(0deg 0.61% 32.35%)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(0deg 0.61% 32.35% / 0.8)'} onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(0deg 0.61% 32.35%)'}>SLA</a>
          </div>
          <div className="flex items-center justify-center gap-3 text-xs" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
            <a href="#" className="transition-colors" style={{ color: 'hsl(0deg 0.61% 32.35%)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(0deg 0.61% 32.35% / 0.8)'} onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(0deg 0.61% 32.35%)'}>Terms & Conditions</a>
            <span>|</span>
            <a href="#" className="transition-colors" style={{ color: 'hsl(0deg 0.61% 32.35%)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(0deg 0.61% 32.35% / 0.8)'} onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(0deg 0.61% 32.35%)'}>HIPAA & HITECH</a>
          </div>
        </div>
        
        <p className="text-xs text-center" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
          © 2025 PracticeSuite Inc.
        </p>
      </div>
    </div>
  );
};

