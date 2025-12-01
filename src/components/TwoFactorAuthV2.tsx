import { Button } from "@/components/ui/button";
import { Shield, ShieldCheck } from "lucide-react";

interface TwoFactorAuthV2Props {
  onEnroll?: () => void;
  onDefer?: () => void;
  hideHeader?: boolean;
}

export const TwoFactorAuthV2 = ({ onEnroll, onDefer, hideHeader = false }: TwoFactorAuthV2Props) => {
  const enrollmentDeadline = "12/17/2025";

  return (
    <div className="w-full space-y-4 loginpage-v2-2fa">
      {/* Header with Shield Icon - Only shown if not hidden */}
      {!hideHeader && (
        <div className="flex items-center gap-3 loginpage-v2-2fa-header pt-2">
          <Shield className="w-8 h-8" style={{ color: 'hsl(0deg 0.61% 32.35%)' }} />
          <h1 className="text-2xl font-bold" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
            Two-Factor Authentication
          </h1>
        </div>
      )}

      {/* Instructions */}
      <div className="space-y-4 loginpage-v2-2fa-instructions pt-2">
        <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
          Your admin has enforce 2-Step Verification to ensure better account security. Please click <span style={{ color: '#9AC449' }}>"Enroll"</span> to setup 2-step verification.
        </p>
      </div>

      {/* Enroll Button - Full width */}
      <div className="pt-2 loginpage-v2-2fa-enroll-btn">
        <Button
          onClick={onEnroll}
          className="w-full h-10 text-white font-semibold rounded-lg loginpage-v2-enroll-btn"
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
          <ShieldCheck className="w-4 h-4 mr-2" />
          Enroll
        </Button>
      </div>

      {/* Defer Option */}
      <div className="text-center loginpage-v2-2fa-defer">
        <button
          type="button"
          onClick={onDefer}
          className="text-sm transition-colors hover:opacity-80"
          style={{ color: '#69C1E2' }}
        >
          Do this later
        </button>
      </div>

      {/* Enrollment Deadline */}
      <div className="text-left loginpage-v2-2fa-deadline">
        <p className="text-sm" style={{ color: 'hsl(0deg 0.61% 32.35%)' }}>
          Complete your 2FA enrollment by <span className="font-semibold" style={{ textDecoration: 'underline', textDecorationStyle: 'dashed' }}>{enrollmentDeadline}</span> to secure your account.
        </p>
      </div>

      {/* Footer */}
      <div className="space-y-3 pt-4 border-t border-gray-300 loginpage-v2-2fa-footer">
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

