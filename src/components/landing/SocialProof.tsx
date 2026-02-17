export const SocialProof = () => {
    const companies = [
        "Astra Construction", "Global Build", "Safari Infrastructure", "Kenya Roads", "Nairobi Tech"
    ];

    return (
        <section className="py-12 bg-slate-950 border-y border-slate-900">
            <div className="container mx-auto px-4">
                <p className="text-center text-slate-500 text-sm font-medium mb-8">
                    TRUSTED BY INDUSTRY LEADERS
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Placeholders for logos - simplified as text for now but styled to look like logos */}
                    {companies.map((company, i) => (
                        <div key={i} className="text-xl md:text-2xl font-bold text-slate-300 font-serif flex items-center gap-2">
                            {/* Decorative icon logic could go here */}
                            {company}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
