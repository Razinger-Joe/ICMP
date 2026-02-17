import { LandingNavbar } from "@/components/landing/LandingNavbar";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { SocialProof } from "@/components/landing/SocialProof";
import { LandingFooter } from "@/components/landing/LandingFooter";

const LandingPage = () => {
    return (
        <div className="bg-slate-950 min-h-screen text-slate-100 selection:bg-blue-500/30">
            <LandingNavbar />
            <main>
                <Hero />
                <SocialProof />
                <Features />
                {/* Additional sections like CTA or Testimonials could go here */}
            </main>
            <LandingFooter />
        </div>
    );
};

export default LandingPage;
