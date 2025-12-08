import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Shield, CheckCircle2 } from "lucide-react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

interface TwoFactorVerifyV2Props {
  onVerify: (code: string, trustDevice: boolean) => void;
  onCancel: () => void;
  onEnroll: () => void;
}

export const TwoFactorVerifyV2 = ({
  onVerify,
  onCancel,
  onEnroll,
}: TwoFactorVerifyV2Props) => {
  const [code, setCode] = useState("");
  const [trustDevice, setTrustDevice] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    if (code.length === 6 && !isVerified) {
      // Auto-verify when code is complete
      const verifyTimer = setTimeout(() => {
        setIsVerified(true);
      }, 300);
      
      const closeTimer = setTimeout(() => {
        if (code.length === 6) {
          onVerify(code, trustDevice);
          setCode("");
          setTrustDevice(false);
          setIsVerified(false);
        }
      }, 1800);
      
      return () => {
        clearTimeout(verifyTimer);
        clearTimeout(closeTimer);
      };
    }
  }, [code, trustDevice, isVerified, onVerify]);

  return (
    <div className="w-full space-y-4 loginpage-v2-2fa-verify">
      <div className="space-y-4 pt-2">
        {isVerified ? (
          <div className="flex flex-col items-center justify-center py-8 space-y-3">
            <CheckCircle2 className="w-16 h-16 text-green-500" />
            <p className="text-lg font-semibold" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
              Verification Successful!
            </p>
          </div>
        ) : (
          <>
            <p className="text-sm leading-normal" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
              Please type in the code displayed on your authenticator app from your device
            </p>

            <div className="space-y-3">
              <div className="flex items-center">
                <InputOTP
                  maxLength={6}
                  value={code}
                  onChange={setCode}
                  disabled={isVerified}
                >
                  <InputOTPGroup className="gap-2">
                    <div className="otp-wrapper relative rounded-lg border border-transparent p-[2px] transition-colors">
                      <InputOTPSlot index={0} className="h-12 w-12 !border-2 !border-[#69C1E2] !border-l-2 !border-r-2 !border-t-2 !border-b-2 !rounded-lg bg-white hover:!border-[#4fa8d0] transition-colors text-xl font-bold" />
                    </div>
                    <div className="otp-wrapper relative rounded-lg border border-transparent p-[2px] transition-colors">
                      <InputOTPSlot index={1} className="h-12 w-12 !border-2 !border-[#69C1E2] !border-l-2 !border-r-2 !border-t-2 !border-b-2 !rounded-lg bg-white hover:!border-[#4fa8d0] transition-colors text-xl font-bold" />
                    </div>
                    <div className="otp-wrapper relative rounded-lg border border-transparent p-[2px] transition-colors">
                      <InputOTPSlot index={2} className="h-12 w-12 !border-2 !border-[#69C1E2] !border-l-2 !border-r-2 !border-t-2 !border-b-2 !rounded-lg bg-white hover:!border-[#4fa8d0] transition-colors text-xl font-bold" />
                    </div>
                    <div className="otp-wrapper relative rounded-lg border border-transparent p-[2px] transition-colors">
                      <InputOTPSlot index={3} className="h-12 w-12 !border-2 !border-[#69C1E2] !border-l-2 !border-r-2 !border-t-2 !border-b-2 !rounded-lg bg-white hover:!border-[#4fa8d0] transition-colors text-xl font-bold" />
                    </div>
                    <div className="otp-wrapper relative rounded-lg border border-transparent p-[2px] transition-colors">
                      <InputOTPSlot index={4} className="h-12 w-12 !border-2 !border-[#69C1E2] !border-l-2 !border-r-2 !border-t-2 !border-b-2 !rounded-lg bg-white hover:!border-[#4fa8d0] transition-colors text-xl font-bold" />
                    </div>
                    <div className="otp-wrapper relative rounded-lg border border-transparent p-[2px] transition-colors">
                      <InputOTPSlot index={5} className="h-12 w-12 !border-2 !border-[#69C1E2] !border-l-2 !border-r-2 !border-t-2 !border-b-2 !rounded-lg bg-white hover:!border-[#4fa8d0] transition-colors text-xl font-bold" />
                    </div>
                  </InputOTPGroup>
                </InputOTP>
              </div>

              <div className="flex items-center gap-2">
                <Checkbox
                  id="trust-device"
                  checked={trustDevice}
                  onCheckedChange={(checked) => setTrustDevice(checked === true)}
                />
                <Label
                  htmlFor="trust-device"
                  className="text-sm font-normal cursor-pointer"
                  style={{ color: 'hsl(0deg 0.61% 32.35%)' }}
                >
                  Trust this device
                </Label>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <Button
                  type="button"
                  onClick={onCancel}
                  variant="outline"
                  className="w-1/2 h-10 font-semibold border-2 border-[#69C1E2] text-[#69C1E2] hover:bg-[#69C1E2] hover:text-white transition-colors"
                >
                  Cancel
                </Button>
                <button
                  type="button"
                  onClick={onEnroll}
                  className="text-xs text-[#69C1E2] hover:underline transition-colors"
                >
                  Enroll 2FA
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

