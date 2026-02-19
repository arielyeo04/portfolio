    
export default function HomePage() {
    return (
        <div className="min-h-screen min-w-screen flex flex-col items-center justify-center" style={{ backgroundColor: '#3f352c', color: '#f6e7cc' }}>
            <h1 className="text-5xl font-extrabold mb-8 text-center">ARIEL YEO</h1>
            <p className="text-xl mb-12 text-center">I’m a Marketing & Brand Strategist, turning <b><u>insight</u></b> into <b><u>results</u></b> and <b><u>strategy</u></b> into measurable <b><u>growth</u></b>.</p>
            <div className="flex flex-row gap-6 w-full max-w-xs justify-center">
                <button className="py-3 px-6 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition">Real Estate</button>
                <button className="py-3 px-6 bg-green-600 text-white rounded-lg text-lg font-semibold hover:bg-green-700 transition">Fintech</button>
            </div>
        </div>
    );
}
