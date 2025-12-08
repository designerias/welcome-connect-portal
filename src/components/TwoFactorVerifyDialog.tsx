import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Shield, CheckCircle2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

interface TwoFactorVerifyDialogProps {
  open: boolean;
  onClose: () => void;
  onVerify: (code: string, trustDevice: boolean) => void;
  onEnroll: () => void;
}

export const TwoFactorVerifyDialog = ({
  open,
  onClose,
  onVerify,
  onEnroll,
}: TwoFactorVerifyDialogProps) => {
  const [code, setCode] = useState("");
  const [trustDevice, setTrustDevice] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const handleClose = () => {
    setCode("");
    setTrustDevice(false);
    setIsVerified(false);
    onClose();
  };

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
          onClose();
        }
      }, 1800);
      
      return () => {
        clearTimeout(verifyTimer);
        clearTimeout(closeTimer);
      };
    }
  }, [code, trustDevice, isVerified, onVerify, onClose]);

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <Shield className="w-6 h-6" style={{ color: 'hsl(0deg 0.61% 32.35%)' }} />
            <span style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>Two-Factor Authentication</span>
          </DialogTitle>
        </DialogHeader>

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
                <div className="flex items-center gap-3">
                  <Label htmlFor="code" className="text-sm font-medium whitespace-nowrap" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
                    Code :
                  </Label>
                  <InputOTP
                    maxLength={6}
                    value={code}
                    onChange={setCode}
                    disabled={isVerified}
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} className="h-12 w-12 border-2 border-[#69C1E2] rounded-lg" />
                      <InputOTPSlot index={1} className="h-12 w-12 border-2 border-[#69C1E2] rounded-lg" />
                      <InputOTPSlot index={2} className="h-12 w-12 border-2 border-[#69C1E2] rounded-lg" />
                      <InputOTPSlot index={3} className="h-12 w-12 border-2 border-[#69C1E2] rounded-lg" />
                      <InputOTPSlot index={4} className="h-12 w-12 border-2 border-[#69C1E2] rounded-lg" />
                      <InputOTPSlot index={5} className="h-12 w-12 border-2 border-[#69C1E2] rounded-lg" />
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
                    onClick={handleClose}
                    variant="outline"
                    className="flex-1 h-10 font-semibold border-2 border-[#69C1E2] text-[#69C1E2] hover:bg-[#69C1E2] hover:text-white transition-colors"
                  >
                    Cancel
                  </Button>
                </div>

                <div className="flex items-center justify-center pt-2">
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
      </DialogContent>
    </Dialog>
  );
};

