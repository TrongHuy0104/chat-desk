import Navbar from "@/components/ui/landing/nav";
import Hero from "@/components/ui/landing/hero";
import SocialProof from "@/components/ui/landing/social";
import Features from "@/components/ui/landing/features";
import Integration from "@/components/ui/landing/integration";
import Pricing from "@/components/ui/landing/pricing";
import Footer from "@/components/ui/landing/footer";

export default function Page() {
  return (
    <main className="w-full flex flex-col relative z-10">
      <Navbar />
      <Hero />  
      <SocialProof />
      <Features />
      <Integration />
      <Pricing />
      <Footer />
    </main>
  );
}