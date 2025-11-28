import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

interface MFASetupV2Props {
  onAssign?: () => void;
  onCancel?: () => void;
}

export const MFASetupV2 = ({ onAssign, onCancel }: MFASetupV2Props) => {
  const [code, setCode] = useState("");
  const [showSecretKey, setShowSecretKey] = useState(false);
  
  // Example secret key - in production, this would come from the backend
  const secretKey = "P56GFWNP26U7EYOVS444QYXWKZOEKJ6R";
  const qrCodeValue = `otpauth://totp/PracticeSuite:user@example.com?secret=${secretKey}&issuer=PracticeSuite`;

  return (
    <div className="w-full max-w-4xl mx-auto loginpage-v2-mfa-setup" style={{ marginLeft: '55px' }}>
      {/* Header with Shield Icon - matching Two-Factor Authentication style */}
      <div className="flex items-center gap-3 mb-3 loginpage-v2-mfa-header">
        <Shield className="w-8 h-8" style={{ color: 'hsl(0deg 0.61% 32.35%)' }} />
        <h2 className="text-2xl font-bold" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
          Setup virtual MFA device
        </h2>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-4 loginpage-v2-mfa-content">
        {/* Left Section - Instructions and Input */}
        <div className="space-y-2.5 loginpage-v2-mfa-instructions">
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
                Use your virtual 2FA app and your device's camera to scan the QR code
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
              <div className="ml-7 p-2.5 bg-gray-50 rounded border border-gray-200">
                <p className="text-sm font-mono font-semibold uppercase" style={{ color: '#9AC449' }}>{secretKey}</p>
              </div>
            )}

            <div className="flex items-start gap-2">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#69C1E2] text-white text-xs font-semibold flex items-center justify-center mt-0.5">4</span>
              <div className="flex-1 space-y-1.5">
                <p className="text-sm leading-snug" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
                  Type your 2FA code below{" "}
                  <Label htmlFor="mfa-code" className="text-sm font-medium inline" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
                    Code :
                  </Label>
                </p>
                <Input
                  id="mfa-code"
                  type="text"
                  placeholder="Enter 2FA code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="h-11 border-2 border-[#69C1E2] focus:border-[#4fa8d0] focus-visible:ring-0"
                  maxLength={6}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - QR Code */}
        <div className="flex items-start justify-center loginpage-v2-mfa-qr">
          <div className="p-2.5 bg-white border-2 border-gray-200 rounded-lg">
            <QRCodeSVG
              value={qrCodeValue}
              size={180}
              level="H"
              includeMargin={true}
            />
          </div>
        </div>
      </div>

      {/* Action Buttons Footer */}
      <div className="mt-3 flex justify-end gap-3 loginpage-v2-mfa-actions">
        <Button
          onClick={onAssign}
          className="px-6 py-2 text-white font-semibold rounded-lg"
          style={{
            backgroundColor: '#9AC449',
            border: '0.5px solid #7aa338',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#7aa338';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#9AC449';
          }}
        >
          Assign MFA
        </Button>
        <Button
          onClick={onCancel}
          variant="outline"
          className="px-6 py-2 font-semibold rounded-lg bg-gray-200 hover:bg-gray-300"
          style={{
            color: 'hsl(0deg 0.61% 32.35%)',
            border: '1px solid #ccc',
          }}
        >
          Cancel
        </Button>
      </div>

      {/* System Footer */}
      <div className="mt-6 space-y-2 text-center loginpage-v2-mfa-footer">
        <p className="text-[10px] leading-tight" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
          This system contains PHI information and therefore for HIPAA compliance and security purposes, 
          the system should only be accessed by authorized users
        </p>
        <p className="text-xs" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
          © 2025 All rights reserved. www.practicesuite.com
        </p>
      </div>
    </div>
  );
};

