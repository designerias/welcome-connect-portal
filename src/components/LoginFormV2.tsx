import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { User, Lock, Search, HelpCircle, Eye, EyeOff } from "lucide-react";
import logo from "@/assets/practicesuite.svg";

interface LoginFormV2Props {
  onUnableToLogin?: () => void;
  onLoginSuccess?: () => void;
}

export const LoginFormV2 = ({ onUnableToLogin, onLoginSuccess }: LoginFormV2Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt v2:", { username, password, accountNumber });
    
    // After successful login, trigger callback if provided
    if (onLoginSuccess) {
      onLoginSuccess();
    }
  };

  return (
    <div className="w-full space-y-4 loginpage-v2-form">
      <form onSubmit={handleSubmit} className="space-y-2.5 loginpage-v2-form-element pt-4 sm:pt-[15px]">
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
                className="pl-10 pr-10 h-12 rounded-lg border-2 border-[#69C1E2] bg-white hover:border-[#4fa8d0] focus:border-[#4fa8d0] focus-visible:ring-0 transition-colors font-semibold placeholder:font-normal placeholder:opacity-60"
                style={{ color: 'hsl(0deg 0.61% 20%)' }}
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
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`pl-10 ${password ? 'pr-20' : 'pr-10'} h-12 rounded-lg border-2 border-[#69C1E2] bg-white hover:border-[#4fa8d0] focus:border-[#4fa8d0] focus-visible:ring-0 transition-colors font-semibold text-lg tracking-wider placeholder:font-normal placeholder:opacity-60`}
                style={{ letterSpacing: showPassword ? '0' : '0.2em', color: 'hsl(0deg 0.61% 20%)' }}
                required
              />
            </div>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2 z-10">
              {password && (
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              )}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      type="button"
                      onClick={onUnableToLogin}
                      className="text-gray-300 hover:text-gray-400 transition-colors"
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
                className="pl-10 h-12 rounded-lg border-2 border-[#69C1E2] bg-white hover:border-[#4fa8d0] focus:border-[#4fa8d0] focus-visible:ring-0 transition-colors font-semibold placeholder:font-normal placeholder:opacity-60"
                style={{ color: 'hsl(0deg 0.61% 20%)' }}
              />
            </div>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full h-14 text-white font-semibold loginpage-v2-submit-btn text-lg rounded-lg transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, rgb(160, 240, 6) 0%, rgb(7, 169, 229) 100%)',
            border: '1px solid white',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'linear-gradient(135deg, rgb(140, 220, 0) 0%, rgb(5, 149, 209) 100%)';
            e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.25)';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'linear-gradient(135deg, rgb(160, 240, 6) 0%, rgb(7, 169, 229) 100%)';
            e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.15)';
            e.currentTarget.style.transform = 'translateY(0)';
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
      <div className="space-y-3 loginpage-v2-footer">
        {/* System Status Button - Centered on line */}
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <button className="relative inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-gray-300 bg-white hover:bg-gray-50 transition-colors">
            <span className="relative flex items-center justify-center">
              <span className="absolute w-2 h-2 bg-green-500 rounded-full animate-pulse-dot"></span>
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
            </span>
            <span className="text-[10px] font-medium" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>SYSTEM STATUS</span>
          </button>
        </div>
        
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

