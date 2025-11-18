import { LoginCarousel } from "@/components/LoginCarousel";
import { LoginForm } from "@/components/LoginForm";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Main Content */}
      <main className="flex-1 grid lg:grid-cols-2">
        {/* Left Side - Carousel */}
        <div className="relative bg-gradient-to-br from-[#3C8C3E] to-[#9AC449] overflow-hidden hidden lg:block rounded-3xl m-6">
          <div className="relative h-full p-8">
            <LoginCarousel />
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex items-center justify-center p-6 md:p-12 bg-white">
          <LoginForm />
        </div>
      </main>

    </div>
  );
};

export default Index;
