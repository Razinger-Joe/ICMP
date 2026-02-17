import { motion } from "framer-motion";
import { Activity, Brain, Globe, Shield, Zap, TrendingUp } from "lucide-react";

const features = [
    {
        icon: <Globe className="w-8 h-8 text-blue-400" />,
        title: "Pan-African Telemetry",
        description: "Real-time monitoring from Nairobi to Lagos. Get unified visibility across all your distributed infrastructure sites."
    },
    {
        icon: <Brain className="w-8 h-8 text-teal-400" />,
        title: "AI-Driven Predictions",
        description: "Anticipate delays before they happen. Our models analyze weather, supply chains, and labor data to predict risks."
    },
    {
        icon: <TrendingUp className="w-8 h-8 text-emerald-400" />,
        title: "Cost Optimization",
        description: "Reduce material wastage and labor inefficiencies. Typical ROI within the first 3 months of deployment."
    },
    {
        icon: <Shield className="w-8 h-8 text-purple-400" />,
        title: "Enterprise Grade Security",
        description: "Bank-level encryption for your sensitive project data. ISO 27001 compliant infrastructure."
    },
    {
        icon: <Activity className="w-8 h-8 text-amber-400" />,
        title: "Live Operations Centre",
        description: "Command center view of your operations. Track equipment, personnel, and milestones in real-time."
    },
    {
        icon: <Zap className="w-8 h-8 text-cyan-400" />,
        title: "Instant Deployment",
        description: "Zero-touch provisioning for sensors and IoT devices. Get your sites online in minutes, not days."
    }
];

export const Features = () => {
    return (
        <section id="features" className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[100px]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Scale</span>
                    </h2>
                    <p className="text-slate-400 text-lg">
                        The only platform capable of handling the complexity of modern African infrastructure projects.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl hover:bg-slate-800/50 transition-all hover:border-slate-700 group"
                        >
                            <div className="bg-slate-950 border border-slate-800 p-3 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
