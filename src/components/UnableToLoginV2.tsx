import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { RefreshCw, Volume2, MessageCircle } from "lucide-react";
import logo from "@/assets/practicesuite.svg";

type ProblemType = "password" | "account" | "other" | null;

interface UnableToLoginV2Props {
  onBackToLogin?: () => void;
}

export const UnableToLoginV2 = ({ onBackToLogin }: UnableToLoginV2Props) => {
  const [selectedProblem, setSelectedProblem] = useState<ProblemType>(null);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [captchaText, setCaptchaText] = useState("rphh6");

  const handleContinue = () => {
    console.log("Continue clicked v2", { selectedProblem, email, username, accountNumber, captcha });
  };

  const handleCancel = () => {
    if (onBackToLogin) {
      onBackToLogin();
    } else {
      window.location.href = "/loginpage_v2";
    }
  };

  const refreshCaptcha = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const newCaptcha = Array.from({ length: 5 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
    setCaptchaText(newCaptcha);
    setCaptcha("");
  };

  return (
    <div className="w-full max-w-md space-y-4 animate-in fade-in duration-500 loginpage-v2-unable-login">
      <img src={logo} alt="PracticeSuite" className="h-12 loginpage-v2-unable-logo" />
      
      <div className="space-y-2 loginpage-v2-unable-title-section">
        <h1 className="text-3xl font-bold loginpage-v2-unable-title" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>Unable to login?</h1>
        <p className="loginpage-v2-unable-subtitle" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>Having trouble signing in?</p>
        <div className="h-0.5 bg-gray-400 w-24 mb-4 loginpage-v2-unable-divider"></div>
      </div>

      <RadioGroup value={selectedProblem || ""} onValueChange={(value) => setSelectedProblem(value as ProblemType)} className="space-y-4 pt-4 loginpage-v2-unable-radio-group">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="password" id="password-v2" />
          <Label htmlFor="password-v2" className="text-sm font-normal cursor-pointer" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
            I don't know my password
          </Label>
        </div>

        <div className="flex items-center space-x-2">
          <RadioGroupItem value="account" id="account-v2" />
          <Label htmlFor="account-v2" className="text-sm font-normal cursor-pointer" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
            I don't know my account number
          </Label>
        </div>

        <div className="flex items-center space-x-2">
          <RadioGroupItem value="other" id="other-v2" />
          <Label htmlFor="other-v2" className="text-sm font-normal cursor-pointer" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
            I am having other problems signing in
          </Label>
        </div>
      </RadioGroup>

      {/* Password Reset Form */}
      {selectedProblem === "password" && (
        <div className="space-y-4 pt-2 loginpage-v2-password-form">
          <p className="text-sm" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
            To reset your password, please enter the email address or username you use to sign in.
          </p>
          
          <div className="space-y-1.5">
            <Label htmlFor="username-email-v2" className="text-sm font-medium" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
              User Name or Email Address: <span className="text-red-500">*</span>
            </Label>
            <div className="relative rounded-lg border border-transparent p-[2px] focus-within:border-dashed focus-within:border-[#9AC449] transition-colors">
              <Input
                id="username-email-v2"
                type="text"
                placeholder="User Name or Email Address"
                value={username || email}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setEmail(e.target.value);
                }}
                className="h-12 rounded-lg border-2 border-[#69C1E2] bg-white hover:border-[#4fa8d0] focus:border-[#4fa8d0] focus-visible:ring-0 transition-colors"
                required
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="account-password-v2" className="text-sm font-medium" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
              Account Number: <span className="text-red-500">*</span>
            </Label>
            <div className="relative rounded-lg border border-transparent p-[2px] focus-within:border-dashed focus-within:border-[#9AC449] transition-colors">
              <Input
                id="account-password-v2"
                type="text"
                placeholder="Account Number"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                className="h-12 rounded-lg border-2 border-[#69C1E2] bg-white hover:border-[#4fa8d0] focus:border-[#4fa8d0] focus-visible:ring-0 transition-colors"
                required
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <div className="bg-gray-100 p-4 rounded border border-gray-300 flex items-center justify-center h-20">
                  <span className="text-3xl font-bold text-gray-800 tracking-widest" style={{ 
                    fontFamily: 'monospace',
                    letterSpacing: '0.2em',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
                  }}>{captchaText}</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  onClick={refreshCaptcha}
                  className="p-2 transition-colors"
                  style={{ color: 'hsl(0deg 0.61% 32.35%)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(0deg 0.61% 32.35% / 0.8)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(0deg 0.61% 32.35%)'}
                  aria-label="Refresh CAPTCHA"
                >
                  <RefreshCw className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  className="p-2 transition-colors"
                  style={{ color: 'hsl(0deg 0.61% 32.35%)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(0deg 0.61% 32.35% / 0.8)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(0deg 0.61% 32.35%)'}
                  aria-label="Audio CAPTCHA"
                >
                  <Volume2 className="w-5 h-5" />
                </button>
              </div>
            </div>
            <Label htmlFor="captcha-password-v2" className="text-sm font-medium" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
              Type the Above Text Here: <span className="text-red-500">*</span>
            </Label>
            <div className="relative rounded-lg border border-transparent p-[2px] focus-within:border-dashed focus-within:border-[#9AC449] transition-colors">
              <Input
                id="captcha-password-v2"
                type="text"
                placeholder="Type the Above Text Here"
                value={captcha}
                onChange={(e) => setCaptcha(e.target.value)}
                className="h-12 rounded-lg border-2 border-[#69C1E2] bg-white hover:border-[#4fa8d0] focus:border-[#4fa8d0] focus-visible:ring-0 transition-colors"
                required
              />
            </div>
          </div>
        </div>
      )}

      {/* Account Number Recovery Form */}
      {selectedProblem === "account" && (
        <div className="space-y-4 pt-2 loginpage-v2-account-form">
          <p className="text-sm" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
            Please enter the email address you use to sign in.
          </p>
          
          <div className="space-y-1.5">
            <Label htmlFor="email-account-v2" className="text-sm font-medium" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
              Email Address: <span className="text-red-500">*</span>
            </Label>
            <div className="relative rounded-lg border border-transparent p-[2px] focus-within:border-dashed focus-within:border-[#9AC449] transition-colors">
              <Input
                id="email-account-v2"
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 rounded-lg border-2 border-[#69C1E2] bg-white hover:border-[#4fa8d0] focus:border-[#4fa8d0] focus-visible:ring-0 transition-colors"
                required
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <div className="bg-gray-100 p-4 rounded border border-gray-300 flex items-center justify-center h-20">
                  <span className="text-3xl font-bold text-gray-800 tracking-widest" style={{ 
                    fontFamily: 'monospace',
                    letterSpacing: '0.2em',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
                  }}>{captchaText}</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  onClick={refreshCaptcha}
                  className="p-2 transition-colors"
                  style={{ color: 'hsl(0deg 0.61% 32.35%)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(0deg 0.61% 32.35% / 0.8)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(0deg 0.61% 32.35%)'}
                  aria-label="Refresh CAPTCHA"
                >
                  <RefreshCw className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  className="p-2 transition-colors"
                  style={{ color: 'hsl(0deg 0.61% 32.35%)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(0deg 0.61% 32.35% / 0.8)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(0deg 0.61% 32.35%)'}
                  aria-label="Audio CAPTCHA"
                >
                  <Volume2 className="w-5 h-5" />
                </button>
              </div>
            </div>
            <Label htmlFor="captcha-account-v2" className="text-sm font-medium" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
              Type the Above Text Here: <span className="text-red-500">*</span>
            </Label>
            <div className="relative rounded-lg border border-transparent p-[2px] focus-within:border-dashed focus-within:border-[#9AC449] transition-colors">
              <Input
                id="captcha-account-v2"
                type="text"
                placeholder="Type the Above Text Here"
                value={captcha}
                onChange={(e) => setCaptcha(e.target.value)}
                className="h-12 rounded-lg border-2 border-[#69C1E2] bg-white hover:border-[#4fa8d0] focus:border-[#4fa8d0] focus-visible:ring-0 transition-colors"
                required
              />
            </div>
          </div>
        </div>
      )}

      {/* Other Problems - Support Information */}
      {selectedProblem === "other" && (
        <div className="space-y-4 pt-2 loginpage-v2-other-form">
          <p className="text-sm" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
            Our Support Team will connect to your system and quickly resolve any issue you may have.
          </p>
          
          <div className="space-y-3 p-4 bg-gray-50 rounded-lg">
            <div className="font-semibold" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>PracticeSuite Technical Support</div>
            
            <div className="space-y-2 text-sm" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
              <div>
                <span className="font-medium">Call: </span>
                <a href="tel:1-510-284-2424" className="text-secondary hover:underline">
                  1-510-284-2424
                </a>
              </div>
              <div>
                <span className="font-medium">Fax: </span>
                <span>1-510-284-2428</span>
              </div>
              <div>
                <span className="font-medium">Email: </span>
                <a href="mailto:support@practicesuite.com" className="text-secondary hover:underline">
                  support@practicesuite.com
                </a>
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              className="w-full border-secondary text-secondary hover:bg-secondary/10"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat with us
            </Button>

            <div className="text-xs pt-2 border-t border-border" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
              <div className="font-medium mb-1">Support Hours:</div>
              <div>8 AM EST to 8 PM EST - Monday through Friday.</div>
              <div>Escalated support is available 24/7 for Priority 1, Impact Level 1 issues</div>
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex justify-start gap-3 pt-4 loginpage-v2-unable-buttons">
        <Button
          type="button"
          onClick={handleCancel}
          className="bg-secondary text-white hover:bg-secondary/90"
        >
          Cancel
        </Button>
        <Button
          type="button"
          onClick={handleContinue}
          className="bg-secondary text-white hover:bg-secondary/90"
          disabled={!selectedProblem}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

