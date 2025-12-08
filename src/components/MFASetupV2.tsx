import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

interface MFASetupV2Props {
  onAssign?: () => void;
  onCancel?: () => void;
  hideHeader?: boolean;
}

export const MFASetupV2 = ({ onAssign, onCancel, hideHeader = false }: MFASetupV2Props) => {
  const [code, setCode] = useState("");
  const [showSecretKey, setShowSecretKey] = useState(false);
  
  // Example secret key - in production, this would come from the backend
  const secretKey = "P56GFWNP26U7EYOVS444QYXWKZOEKJ6R";
  const qrCodeValue = `otpauth://totp/PracticeSuite:user@example.com?secret=${secretKey}&issuer=PracticeSuite`;

  return (
    <div className="w-full space-y-4 loginpage-v2-mfa-setup">
      {/* Header with Shield Icon - Only shown if not hidden */}
      {!hideHeader && (
        <div className="flex items-center gap-2 sm:gap-3 loginpage-v2-mfa-header pt-2">
          <Shield className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: 'hsl(0deg 0.61% 32.35%)' }} />
          <h2 className="text-xl sm:text-2xl font-bold" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
            Setup virtual MFA device
          </h2>
        </div>
      )}

      {/* Main Content */}
      <div className="grid md:grid-cols-[1.6fr_1fr] gap-4 md:gap-4 loginpage-v2-mfa-content">
        {/* Left Section - Instructions and Input */}
        <div className="space-y-2.5 loginpage-v2-mfa-instructions pl-0 md:pl-10">
          <div className="space-y-2.5">
            <div className="flex items-start gap-2">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#69C1E2] text-white text-xs font-semibold flex items-center justify-center mt-0.5">1</span>
              <p className="text-sm leading-snug" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
                Install a virtual 2FA compatible app on your mobile device
              </p>
            </div>

            <div className="flex items-start gap-2">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#69C1E2] text-white text-xs font-semibold flex items-center justify-center mt-0.5">2</span>
              <p className="text-sm leading-snug" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
                Use your virtual 2FA app and your device's camera<br />to scan the QR code
              </p>
            </div>

            <div className="flex items-start gap-2">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#69C1E2] text-white text-xs font-semibold flex items-center justify-center mt-0.5">3</span>
              <p className="text-sm leading-snug" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
                Alternatively, you can type the secret key.{" "}
                <button
                  type="button"
                  onClick={() => setShowSecretKey(!showSecretKey)}
                  className="text-[#69C1E2] hover:underline"
                >
                  {showSecretKey ? "Hide secret key" : "Show secret key"}
                </button>
              </p>
            </div>

            {showSecretKey && (
              <div className="ml-7 py-2.5 px-2.5 bg-white rounded border border-gray-300 w-full">
                <p className="text-sm font-mono font-semibold uppercase select-all whitespace-nowrap" style={{ color: '#9AC449' }}>{secretKey}</p>
              </div>
            )}

            <div className="flex items-start gap-2">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#69C1E2] text-white text-xs font-semibold flex items-center justify-center mt-0.5">4</span>
              <div className="flex-1 space-y-1.5">
                <Label htmlFor="mfa-code" className="text-sm font-medium" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
                  Type your 2FA code below
                </Label>
                <div className="relative">
                  <div className="relative rounded-lg border border-transparent p-[2px] focus-within:border-dashed focus-within:border-[#9AC449] transition-colors">
                    <Input
                      id="mfa-code"
                      type="text"
                      placeholder="Enter 2FA code"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      className="pl-4 pr-4 h-12 rounded-lg border-2 border-[#69C1E2] bg-white hover:border-[#4fa8d0] focus:border-[#4fa8d0] focus-visible:ring-0 transition-colors"
                      maxLength={6}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - QR Code */}
        <div className="flex items-start justify-center loginpage-v2-mfa-qr pl-0 md:pl-2 pr-0">
          <div className="p-0.5 bg-white border border-gray-300 rounded-lg">
            <div className="scale-[0.8] sm:scale-100 origin-center">
              <QRCodeSVG
                value={qrCodeValue}
                size={150}
                level="H"
                includeMargin={true}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons Footer - Aligned to left */}
      <div className="mt-4 flex justify-start gap-3 loginpage-v2-mfa-actions">
        <Button
          type="button"
          onClick={onCancel}
          variant="outline"
          className="h-10 px-6 font-semibold border-2 border-[#69C1E2] text-[#69C1E2] hover:bg-[#69C1E2] hover:text-white transition-colors rounded-lg"
        >
          Cancel
        </Button>
        <Button
          type="button"
          onClick={onAssign}
          className="h-10 px-6 text-white font-semibold rounded-lg"
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
          Assign MFA
        </Button>
      </div>

      {/* System Footer - Matches full content area width */}
      <div className="space-y-3 pt-4 border-t border-gray-300 loginpage-v2-mfa-footer w-full max-w-full md:max-w-[541px]">
        <p className="text-[10px] leading-tight text-center" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
          This system contains PHI information and therefore for HIPAA compliance and security purposes, 
          the system should only be accessed by authorized users
        </p>
        
        <p className="text-xs text-center" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
          © 2025 PracticeSuite Inc.
        </p>
      </div>
    </div>
  );
};

