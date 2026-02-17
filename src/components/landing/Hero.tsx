import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, ShieldCheck, PlayCircle } from "lucide-react";
import { AfricaMap } from "./AfricaMap";
import { Link } from "react-router-dom";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
            {/* Background Gradients */}
            <div className="absolute top-0 left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-[-10%] w-[40%] h-[40%] bg-teal-600/10 rounded-full blur-[120px]" />

            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Next-Gen Construction Intelligence
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                        Build Smarter with <br />
                        <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                            Autonomous Insights
                        </span>
                    </h1>

                    <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
                        The first AI-driven platform for African infrastructure.
                        Monitor active sites, predict delays, and optimize costs with real-time telemetry from every corner of the continent.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button asChild size="lg" className="h-14 px-8 text-base bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 shadow-xl shadow-blue-900/20 rounded-full transition-all hover:scale-105">
                            <Link to="/dashboard">
                                Start Free Pilot <ChevronRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 px-8 text-base border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white rounded-full">
                            <PlayCircle className="mr-2 h-5 w-5" /> Watch Demo
                        </Button>
                    </div>

                    <div className="pt-8 border-t border-slate-800/50 flex items-center gap-8 text-slate-500">
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="text-teal-500 h-5 w-5" />
                            <span className="text-sm font-medium">Enterprise Security</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 bg-green-500 rounded-full" />
                            <span className="text-sm font-medium">99.9% Uptime</span>
                        </div>
                    </div>
                </motion.div>

                {/* Visual Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative h-[600px] w-full flex items-center justify-center p-8"
                >
                    {/* Glass Container for Map */}
                    <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm rounded-[3rem] border border-slate-800/50 shadow-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-grid-slate-800/[0.2] bg-[length:32px_32px]" />
                        <AfricaMap />
                    </div>
                </motion.div>

            </div>
        </section>
    );
};
