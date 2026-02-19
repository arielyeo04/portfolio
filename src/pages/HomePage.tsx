import realEstateCard from '../assets/real_estate_card.jpg';
import fintechCard from '../assets/fintech_card.jpg';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
    const navigate = useNavigate();
    return (
        <div
            className="min-h-screen h-screen w-screen flex flex-col items-center justify-center bg-[#3f352c] text-[#f6e7cc] px-2 sm:px-0"
            style={{ overflowX: 'hidden' }}
        >
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 sm:mb-8 text-center">ARIEL YEO</h1>
            <p className="text-lg sm:text-xl mb-8 sm:mb-12 text-center">
                I’m a Marketing & Brand Strategist, turning <b><u>insight</u></b> into <b><u>results</u></b> and <b><u>strategy</u></b> into measurable <b><u>growth</u></b>.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 w-full max-w-4xl justify-center" style={{ overflowX: 'auto' }}>
                {/* Real Estate Card */}
                <div
                    className="bg-[#f6e7cc] text-[#3f352c] rounded-3xl overflow-hidden shadow-lg flex-1 max-w-md flex flex-col cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-2xl min-w-0"
                    onClick={() => navigate('/fareast')}
                    tabIndex={0}
                    role="button"
                    onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') navigate('/fareast'); }}
                    aria-label="Go to Far East Organization page"
                    style={{ marginBottom: '1rem' }}
                >
                    <img src={realEstateCard} alt="Real Estate" className="w-full h-60 sm:h-60 object-cover" />
                    <div className="p-4 sm:p-6 flex flex-col flex-1 justify-between">
                        <div>
                            <div className="text-lg mb-1">Far East Organization</div>
                            <div className="text-2xl font-extrabold mb-2">PROPERTY LAUNCH STRATEGY</div>
                            <div className="mb-4 text-base">Aligned creative direction, channel strategy, and event activations to drive buyer acquisition and strengthen launch performance.</div>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2 sm:mt-4">
                            <span className="border border-[#3f352c] rounded-full px-3 py-1 text-sm">Event Management</span>
                            <span className="border border-[#3f352c] rounded-full px-3 py-1 text-sm">Stakeholder Coordination</span>
                            <span className="border border-[#3f352c] rounded-full px-3 py-1 text-sm">Lead Generation</span>
                        </div>
                    </div>
                </div>
                {/* Fintech Card */}
                <div
                    className="bg-[#f6e7cc] text-[#3f352c] rounded-3xl overflow-hidden shadow-lg flex-1 max-w-md flex flex-col cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-2xl min-w-0"
                    onClick={() => navigate('/kda')}
                    tabIndex={0}
                    role="button"
                    onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') navigate('/kda'); }}
                    aria-label="Go to KDA Capabilities page"
                    style={{ marginBottom: '1rem' }}
                >
                    <img src={fintechCard} alt="Fintech" className="w-full h-60 sm:h-60 object-cover" />
                    <div className="p-4 sm:p-6 flex flex-col flex-1 justify-between">
                        <div>
                            <div className="text-lg mb-1">KDA Capabilities</div>
                            <div className="text-2xl font-extrabold mb-2">FINTECH COLLABORATIONS</div>
                            <div className="mb-4 text-base">Managed cross-border partnership coordination and measurable digital performance improvements across web and social channels.</div>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2 sm:mt-4">
                            <span className="border border-[#3f352c] rounded-full px-3 py-1 text-sm">Copy Writing</span>
                            <span className="border border-[#3f352c] rounded-full px-3 py-1 text-sm">Social Media Management</span>
                            <span className="border border-[#3f352c] rounded-full px-3 py-1 text-sm">Web Design</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
