import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { User, Lock, Search, HelpCircle } from "lucide-react";
import logo from "@/assets/practicesuite.svg";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", { username, password, accountNumber });
  };

  return (
    <div className="w-full max-w-md space-y-4 animate-in fade-in duration-500">
      <img src={logo} alt="PracticeSuite" className="h-12" />
      
      <div className="space-y-1">
        <h1 className="text-3xl font-bold text-foreground">Welcome Back!</h1>
        <p className="text-muted-foreground">Login to your account.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1.5">
          <Label htmlFor="username" className="text-sm font-medium">
            Username
          </Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="pl-10 pr-10 h-12"
              required
            />
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground/50 hover:text-muted-foreground transition-colors"
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
          <Label htmlFor="password" className="text-sm font-medium">
            Password
          </Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10 pr-10 h-12"
              required
            />
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground/50 hover:text-muted-foreground transition-colors"
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
          <Label htmlFor="accountNumber" className="text-sm font-medium">
            Account #
          </Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              id="accountNumber"
              type="text"
              placeholder="Account #"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              className="pl-10 h-12"
            />
          </div>
        </div>

        <Button
          type="submit"
          className="w-full h-12 bg-success hover:bg-success/90 text-white font-semibold"
        >
          <Lock className="w-4 h-4 mr-2" />
          Secure Log In
        </Button>

        <button
          type="button"
          className="w-full text-sm text-secondary hover:underline flex items-center justify-center gap-1"
        >
          Unable to Login. I need help <HelpCircle className="w-3 h-3" />
        </button>
      </form>

      {/* Footer Content */}
      <div className="space-y-3 pt-4 border-t border-border">
        <p className="text-[10px] leading-tight text-center text-muted-foreground">
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
          <div className="flex items-center justify-center gap-3 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy (CA)</a>
            <span>|</span>
            <a href="#" className="hover:text-foreground transition-colors">Disclaimer</a>
            <span>|</span>
            <a href="#" className="hover:text-foreground transition-colors">SLA</a>
            <span>|</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Terms & Conditions</a>
            <span>|</span>
            <a href="#" className="hover:text-foreground transition-colors">HIPAA & HITECH</a>
            <span>|</span>
            <a href="#" className="hover:text-foreground transition-colors">Patents & Trademarks</a>
          </div>
        </div>
        
        <p className="text-xs text-center text-muted-foreground">
          © 2025 All rights reserved.{" "}
          <a href="https://www.practicesuite.com" className="text-secondary hover:underline">
            www.practicesuite.com
          </a>
        </p>
      </div>
    </div>
  );
};
