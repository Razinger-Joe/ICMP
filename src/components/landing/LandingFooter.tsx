import { Hammer } from "lucide-react";

export const LandingFooter = () => {
    return (
        <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600/20 text-blue-400">
                                <Hammer className="h-4 w-4" />
                            </div>
                            <span className="text-xl font-bold text-white">ICMP</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Empowering African infrastructure with autonomous intelligence and real-time clarity.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Platform</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><a href="#" className="hover:text-blue-400">Features</a></li>
                            <li><a href="#" className="hover:text-blue-400">Integrations</a></li>
                            <li><a href="#" className="hover:text-blue-400">Security</a></li>
                            <li><a href="#" className="hover:text-blue-400">Enterprise</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><a href="#" className="hover:text-blue-400">About Us</a></li>
                            <li><a href="#" className="hover:text-blue-400">Careers</a></li>
                            <li><a href="#" className="hover:text-blue-400">Blog</a></li>
                            <li><a href="#" className="hover:text-blue-400">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-blue-400">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        &copy; {new Date().getFullYear()} ICMP. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        {/* Social icons would go here */}
                    </div>
                </div>
            </div>
        </footer>
    );
};
