import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RefreshCcw, Volume2, Mail, User, Search, MessageCircle, Phone, FileText } from "lucide-react";
import logo from "@/assets/practicesuite.svg";

interface UnableToLoginV2Props {
  onBackToLogin?: () => void;
}

type ProblemType = "forgot-password" | "forgot-account-number" | "other" | null;

export const UnableToLoginV2 = ({ onBackToLogin }: UnableToLoginV2Props) => {
  const [selectedProblem, setSelectedProblem] = useState<ProblemType>(null);
  const [userNameOrEmail, setUserNameOrEmail] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [captchaText, setCaptchaText] = useState("rphh6");

  const handleContinue = () => {
    console.log("Continue clicked v2", { selectedProblem, userNameOrEmail, accountNumber, captcha });
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

  const handleAudioCaptcha = () => {
    // Handle audio captcha playback
    console.log("Audio captcha requested");
  };

  return (
    <div className="w-full max-w-md space-y-4 animate-in fade-in duration-500 loginpage-v2-unable-login">
      <img src={logo} alt="PracticeSuite" className="h-10 sm:h-12 loginpage-v2-logo" />
      
      <div className="space-y-2 loginpage-v2-title-section">
        <h1 className="text-2xl sm:text-3xl font-bold loginpage-v2-title" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>Unable to login?</h1>
        <p className="text-sm sm:text-base loginpage-v2-subtitle" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>Having trouble signing in?</p>
        <div className="h-0.5 bg-gray-400 w-24 mb-4 loginpage-v2-divider"></div>
      </div>

      <div className="space-y-4 pt-4">
        {/* Problem Selection - Radio Buttons */}
        <div className="space-y-3">
          <div className="space-y-3">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="problem"
                value="forgot-password"
                checked={selectedProblem === "forgot-password"}
                onChange={() => setSelectedProblem("forgot-password")}
                className="w-5 h-5 text-[#69C1E2] border-2 border-[#69C1E2] focus:ring-2 focus:ring-[#69C1E2] focus:ring-offset-2"
                style={{ accentColor: '#69C1E2' }}
              />
              <span className="text-sm" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>I don't know my password</span>
            </label>

            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="problem"
                value="forgot-account-number"
                checked={selectedProblem === "forgot-account-number"}
                onChange={() => setSelectedProblem("forgot-account-number")}
                className="w-5 h-5 text-[#69C1E2] border-2 border-[#69C1E2] focus:ring-2 focus:ring-[#69C1E2] focus:ring-offset-2"
                style={{ accentColor: '#69C1E2' }}
              />
              <span className="text-sm" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>I don't know my account number</span>
            </label>

            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="problem"
                value="other"
                checked={selectedProblem === "other"}
                onChange={() => setSelectedProblem("other")}
                className="w-5 h-5 text-[#69C1E2] border-2 border-[#69C1E2] focus:ring-2 focus:ring-[#69C1E2] focus:ring-offset-2"
                style={{ accentColor: '#69C1E2' }}
              />
              <span className="text-sm" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>I am having other problems signing in</span>
            </label>
          </div>
        </div>

        {/* Cancel Button - Always visible */}
        {!selectedProblem && (
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              onClick={handleCancel}
              variant="outline"
              className="flex-1 h-12 font-semibold border-2 border-[#69C1E2] text-[#69C1E2] hover:bg-[#69C1E2] hover:text-white transition-colors"
            >
              Cancel
            </Button>
          </div>
        )}

        {/* Instructions */}
        {selectedProblem === "forgot-password" && (
          <p className="text-sm" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
            To reset your password, please enter the email address or username you use to sign in.
          </p>
        )}

        {/* Support Information for "Other" option */}
        {selectedProblem === "other" && (
          <div className="space-y-4 pt-2">
            <p className="text-sm" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
              Our Support Team will connect to your system and quickly resolve any issue you may have.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-base mb-3" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
                  PracticeSuite Technical Support
                </h3>
                <div className="space-y-2 text-sm" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#69C1E2]" />
                    <span>Call: <a href="tel:1-510-284-2424" className="text-[#69C1E2] hover:underline">1-510-284-2424</a></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#69C1E2]" />
                    <span>Fax: 1-510-284-2428</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#69C1E2]" />
                    <span>Email: <a href="mailto:support@practicesuite.com" className="text-[#69C1E2] hover:underline">support@practicesuite.com</a></span>
                  </div>
                  <div className="pt-2">
                    <Button
                      type="button"
                      variant="outline"
                      className="border-2 border-[#69C1E2] text-[#69C1E2] hover:bg-[#69C1E2] hover:text-white transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Chat with us
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-base mb-2" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
                  Support Hours:
                </h3>
                <p className="text-sm" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
                  8 AM EST to 8 PM EST - Monday through Friday.
                </p>
                <p className="text-sm mt-1" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
                  Escalated support is available 24/7 for Priority 1, Impact Level 1 issues.
                </p>
              </div>
            </div>

            {/* Action Buttons for "Other" option */}
            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                onClick={handleCancel}
                variant="outline"
                className="flex-1 h-12 font-semibold border-2 border-[#69C1E2] text-[#69C1E2] hover:bg-[#69C1E2] hover:text-white transition-colors"
              >
                Cancel
              </Button>
              <Button
                type="button"
                onClick={handleContinue}
                className="flex-1 h-12 text-white font-semibold"
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
                Continue
              </Button>
            </div>
          </div>
        )}

        {/* Form Fields - Only show for password and account number options */}
        {selectedProblem && selectedProblem !== "other" && (
        <div className="space-y-4 pt-2">
          <div className="space-y-1.5">
            <Label htmlFor="userNameOrEmail-v2" className="text-sm font-medium" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
              User Name or Email Address: <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
                {userNameOrEmail.includes("@") ? (
                  <Mail className="text-[#69C1E2] w-5 h-5" />
                ) : (
                  <User className="text-[#69C1E2] w-5 h-5" />
                )}
              </div>
              <div className="relative rounded-lg border border-transparent p-[2px] focus-within:border-dashed focus-within:border-[#9AC449] transition-colors">
                <Input
                  id="userNameOrEmail-v2"
                  type="text"
                  placeholder="User Name or Email Address"
                  value={userNameOrEmail}
                  onChange={(e) => setUserNameOrEmail(e.target.value)}
                  className="pl-10 h-12 rounded-lg border-2 border-[#69C1E2] bg-white hover:border-[#4fa8d0] focus:border-[#4fa8d0] focus-visible:ring-0 transition-colors"
                  required
                />
              </div>
            </div>
          </div>

          {selectedProblem !== "forgot-account-number" && (
            <div className="space-y-1.5">
              <Label htmlFor="accountNumber-recovery-v2" className="text-sm font-medium" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
                Account Number: <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#69C1E2] w-5 h-5 z-10" />
                <div className="relative rounded-lg border border-transparent p-[2px] focus-within:border-dashed focus-within:border-[#9AC449] transition-colors">
                  <Input
                    id="accountNumber-recovery-v2"
                    type="text"
                    placeholder="Account Number"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                    className="pl-10 h-12 rounded-lg border-2 border-[#69C1E2] bg-white hover:border-[#4fa8d0] focus:border-[#4fa8d0] focus-visible:ring-0 transition-colors"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {/* Captcha Section */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex-1 px-4 py-3 bg-gray-100 border-2 border-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-lg font-mono font-bold tracking-wider select-none" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
                  {captchaText}
                </span>
              </div>
              <button
                type="button"
                onClick={refreshCaptcha}
                className="p-2 text-[#69C1E2] hover:text-[#4fa8d0] hover:bg-gray-50 rounded-lg transition-colors"
                aria-label="Refresh captcha"
              >
                <RefreshCcw className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleAudioCaptcha}
                className="p-2 text-[#69C1E2] hover:text-[#4fa8d0] hover:bg-gray-50 rounded-lg transition-colors"
                aria-label="Audio captcha"
              >
                <Volume2 className="w-5 h-5" />
              </button>
            </div>
            <Label htmlFor="captcha-v2" className="text-sm font-medium" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
              Type the Above Text Here: <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <div className="relative rounded-lg border border-transparent p-[2px] focus-within:border-dashed focus-within:border-[#9AC449] transition-colors">
                <Input
                  id="captcha-v2"
                  type="text"
                  placeholder="Type the Above Text Here"
                  value={captcha}
                  onChange={(e) => setCaptcha(e.target.value)}
                  className="h-12 rounded-lg border-2 border-[#69C1E2] bg-white hover:border-[#4fa8d0] focus:border-[#4fa8d0] focus-visible:ring-0 transition-colors"
                  maxLength={5}
                  required
                />
              </div>
            </div>
          </div>

          {/* Action Buttons for Form Fields */}
          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              onClick={handleCancel}
              variant="outline"
              className="flex-1 h-12 font-semibold border-2 border-[#69C1E2] text-[#69C1E2] hover:bg-[#69C1E2] hover:text-white transition-colors"
            >
              Cancel
            </Button>
            <Button
              type="button"
              onClick={handleContinue}
              className="flex-1 h-12 text-white font-semibold"
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
              Continue
            </Button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};
