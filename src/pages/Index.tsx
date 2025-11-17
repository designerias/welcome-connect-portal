import { LoginCarousel } from "@/components/LoginCarousel";
import { LoginForm } from "@/components/LoginForm";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Main Content */}
      <main className="flex-1 grid lg:grid-cols-2">
        {/* Left Side - Carousel */}
        <div className="relative bg-white overflow-hidden hidden lg:block">
          <div className="relative h-full">
            <LoginCarousel />
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex items-center justify-center p-6 md:p-12 bg-white">
          <LoginForm />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-border py-6 px-6">
        <div className="max-w-7xl mx-auto space-y-4">
          <p className="text-xs text-center text-muted-foreground">
            This system contains PHI information and therefore for HIPAA compliance and security purposes, 
            the system should only be accessed by authorized users
          </p>
          
          <div className="flex items-center justify-center gap-2 text-xs text-secondary">
            <span className="inline-block w-5 h-5 bg-secondary/10 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
              </svg>
            </span>
            <span className="font-semibold">On-Demand Training Webinars - Medical Billing Software</span>
            <a href="#" className="underline hover:no-underline">Watch Now.</a>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy (CA)</a>
            <span>|</span>
            <a href="#" className="hover:text-foreground transition-colors">Disclaimer</a>
            <span>|</span>
            <a href="#" className="hover:text-foreground transition-colors">Terms & Conditions</a>
            <span>|</span>
            <a href="#" className="hover:text-foreground transition-colors">HIPAA & HITECH</a>
            <span>|</span>
            <a href="#" className="hover:text-foreground transition-colors">SLA</a>
            <span>|</span>
            <a href="#" className="hover:text-foreground transition-colors">Patents & Trademarks</a>
          </div>
          
          <p className="text-xs text-center text-muted-foreground">
            © 2025 All rights reserved.{" "}
            <a href="https://www.practicesuite.com" className="text-secondary hover:underline">
              www.practicesuite.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
