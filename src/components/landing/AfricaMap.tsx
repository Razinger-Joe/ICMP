import { ComposableMap, Geographies, Geography, Marker, Line } from "react-simple-maps";
import { motion } from "framer-motion";
import { ShieldCheck, Activity } from "lucide-react";

// GeoJSON for Africa (simplified)
const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries-sans-antarctica.json";

export const AfricaMap = () => {
    // Enhanced Markers for a dense network feel
    const markers = [
        { name: "Nairobi HQ", coordinates: [36.8219, -1.2921] },
        { name: "Mombasa", coordinates: [39.6682, -4.0435] },
        { name: "Kisumu", coordinates: [34.7675, -0.0917] },
        { name: "Nakuru", coordinates: [36.0800, -0.3031] },
        { name: "Eldoret", coordinates: [35.2698, 0.5143] },
        { name: "Kampala", coordinates: [32.5825, 0.3476] },
        { name: "Dar es Salaam", coordinates: [39.2083, -6.7924] },
        { name: "Addis Ababa", coordinates: [38.7469, 9.1450] },
        { name: "Kigali", coordinates: [30.0619, -1.9441] },
        { name: "Lagos", coordinates: [3.3792, 6.5244] },
        { name: "Cairo", coordinates: [31.2357, 30.0444] },
        { name: "Johannesburg", coordinates: [28.0473, -26.2041] },
    ];

    // Complex web of connections
    const lines = [
        // Kenya internal
        { from: [36.8219, -1.2921], to: [39.6682, -4.0435] }, // Nairobi -> Mombasa
        { from: [36.8219, -1.2921], to: [34.7675, -0.0917] }, // Nairobi -> Kisumu
        { from: [36.8219, -1.2921], to: [36.0800, -0.3031] }, // Nairobi -> Nakuru
        { from: [36.8219, -1.2921], to: [35.2698, 0.5143] }, // Nairobi -> Eldoret

        // Regional
        { from: [36.8219, -1.2921], to: [32.5825, 0.3476] }, // Nairobi -> Kampala
        { from: [36.8219, -1.2921], to: [39.2083, -6.7924] }, // Nairobi -> Dar
        { from: [36.8219, -1.2921], to: [38.7469, 9.1450] }, // Nairobi -> Addis
        { from: [32.5825, 0.3476], to: [30.0619, -1.9441] }, // Kampala -> Kigali

        // Continental
        { from: [36.8219, -1.2921], to: [3.3792, 6.5244] }, // Nairobi -> Lagos
        { from: [36.8219, -1.2921], to: [31.2357, 30.0444] }, // Nairobi -> Cairo
        { from: [36.8219, -1.2921], to: [28.0473, -26.2041] }, // Nairobi -> Joburg
        { from: [3.3792, 6.5244], to: [31.2357, 30.0444] }, // Lagos -> Cairo (backbone)
    ];

    return (
        <div className="relative w-full h-full min-h-[600px] flex items-center justify-center bg-slate-950 overflow-hidden rounded-[2rem]">
            {/* Green Glowing Backdrop */}
            <div className="absolute inset-0 bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-green-500/10 blur-[150px] rounded-full pointer-events-none" />

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            <div className="absolute inset-0 bg-grid-emerald-900/[0.2] bg-[length:40px_40px]" />

            <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                    scale: 450,
                    center: [20, 0] // Centered on Africa
                }}
                className="w-full h-full max-w-[800px] mx-auto drop-shadow-[0_0_50px_rgba(16,185,129,0.4)] relative z-10"
            >
                <Geographies geography={geoUrl}>
                    {({ geographies }: { geographies: any[] }) =>
                        geographies
                            .filter((_geo: any) => true)
                            .map((geo: any) => {
                                const isKenya = geo.properties.name === "Kenya";
                                const isKeyMarket = ["Nigeria", "Egypt", "South Africa", "Ethiopia", "Tanzania", "Uganda"].includes(geo.properties.name);

                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill={isKenya ? "rgba(16, 185, 129, 0.3)" : isKeyMarket ? "rgba(6, 78, 59, 0.8)" : "rgba(2, 44, 34, 0.4)"}
                                        stroke={isKenya ? "rgba(52, 211, 153, 1)" : "rgba(16, 185, 129, 0.2)"}
                                        strokeWidth={isKenya ? 2 : 0.5}
                                        style={{
                                            default: { outline: "none" },
                                            hover: { fill: "rgba(16, 185, 129, 0.5)", outline: "none", transition: "all 300ms", stroke: "rgba(52, 211, 153, 0.8)", strokeWidth: 1 },
                                            pressed: { outline: "none" },
                                        }}
                                    />
                                );
                            })
                    }
                </Geographies>

                {/* Network Connections */}
                {lines.map((line, i) => (
                    <Line
                        key={i}
                        from={line.from as [number, number]}
                        to={line.to as [number, number]}
                        stroke="rgba(52, 211, 153, 0.4)"
                        strokeWidth={1.5}
                        strokeLinecap="round"
                        className="animate-pulse"
                        style={{
                            pointerEvents: "none",
                            filter: "drop-shadow(0 0 2px rgba(52, 211, 153, 0.5))"
                        }}
                    />
                ))}

                {/* Glowing Markers */}
                {markers.map(({ name, coordinates }) => (
                    <Marker key={name} coordinates={coordinates as [number, number]}>
                        <motion.g
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, delay: Math.random() * 1.5 }}
                        >
                            {/* Outer Glow */}
                            <circle r={8} fill="rgba(52, 211, 153, 0.2)" className="animate-ping" />
                            {/* Inner Glow */}
                            <circle r={4} fill="rgba(16, 185, 129, 0.6)" />
                            {/* Core */}
                            <circle r={2} fill="#ffffff" />
                        </motion.g>
                    </Marker>
                ))}
            </ComposableMap>

            {/* Floating HUD Elements */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute top-10 left-10 bg-slate-950/80 backdrop-blur-md p-4 rounded-xl border border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.1)] z-20 max-w-[200px]"
            >
                <div className="flex items-center gap-3 mb-2">
                    <div className="bg-emerald-500/20 p-2 rounded-lg text-emerald-400">
                        <Activity className="w-5 h-5 animate-pulse" />
                    </div>
                    <div>
                        <div className="text-xs text-emerald-400 font-mono tracking-wider">NETWORK ACTIVITY</div>
                        <div className="text-lg font-bold text-white">98.4%</div>
                    </div>
                </div>
                <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-[98%]" />
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-10 right-10 bg-slate-950/80 backdrop-blur-md p-4 rounded-xl border border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.1)] z-20"
            >
                <div className="flex items-center gap-3">
                    <div className="bg-emerald-500/20 p-2 rounded-lg text-emerald-400">
                        <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                        <div className="text-xs text-emerald-400 font-mono tracking-wider">SECURITY STATUS</div>
                        <div className="text-sm font-bold text-white">SECURE • ENCRYPTED</div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
