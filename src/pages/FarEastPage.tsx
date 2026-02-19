import "../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import fareastBanner from "../assets/fareast/fareast_banner.jpg";
import fareastLogo from "../assets/fareast/fareast_logo.png";
import physical0 from "../assets/fareast/physical/physical_0.png";
import physical1 from "../assets/fareast/physical/physical_1.png";
import edm0 from "../assets/fareast/edm/edm_0.jpg";
import edm1 from "../assets/fareast/edm/edm_1.jpg";
import edm2 from "../assets/fareast/edm/edm_2.jpg";
import edm3 from "../assets/fareast/edm/edm_3.jpg";
import edm4 from "../assets/fareast/edm/edm_4.jpg";
import edm5 from "../assets/fareast/edm/edm_5.jpg";
import cw0 from "../assets/fareast/copywriting/cw_0.jpg";
import cw1 from "../assets/fareast/copywriting/cw_1.jpg";
import cw2 from "../assets/fareast/copywriting/cw_2.jpg";
import cw3 from "../assets/fareast/copywriting/cw_3.jpg";
import cw4 from "../assets/fareast/copywriting/cw_4.jpg";
import cw5 from "../assets/fareast/copywriting/cw_5.jpg";

export default function FarEastPage() {
    const [modalImg, setModalImg] = useState(null as null | string);
    return (
        <div
            style={{
                color: '#f6e7cc',
                background: '#3f352c',
                minHeight: '100vh',
                width: '100vw',
                fontFamily: 'DM Sans, Arial, sans-serif',
                overflowX: 'hidden',
                fontSize: 'clamp(16px, 4vw, 22px)',
            }}
        >
            {/* Header Bar */}
            <div style={{ width: '100%', background: '#2d241c', padding: '16px 0', position: 'sticky', top: 0, zIndex: 100 }}>
                <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', paddingLeft: 16 }}>
                    <Link to="/" style={{ color: '#f6e7cc', textDecoration: 'none', fontWeight: 700, fontSize: 18, letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 8 }}>
                        ← Home
                    </Link>
                </div>
            </div>
            {/* Banner */}
            <div style={{ position: 'relative', width: '100%', height: '38vw', minHeight: 180, maxHeight: 440, overflow: 'hidden' }}>
                <img
                    src={fareastBanner}
                    alt="Far East Organization Banner"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                />
                <img
                    src={fareastLogo}
                    alt="Far East Organization Logo"
                    style={{ position: 'absolute', bottom: 16, right: 16, width: '28vw', maxWidth: 240, minWidth: 80, background: 'rgba(0,0,0,0.0)' }}
                />
            </div>

            {/* Section: Physical Media */}
            <section style={{ background: '#3f352c', padding: '32px 0 0 0', textAlign: 'center' }}>
                <h2 style={{ color: '#f6e7cc', fontWeight: 700, fontSize: 'clamp(22px, 6vw, 32px)', marginBottom: 16 }}>PHYSICAL MEDIA (FOR EVENTS):</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', marginBottom: 12 }}>
                    <img src={physical0} alt="Physical Media 1" style={{ width: '44vw', maxWidth: 260, minWidth: 120, borderRadius: 12, boxShadow: '0 2px 16px #0003', cursor: 'pointer' }} onClick={() => setModalImg(physical0)} />
                    <img src={physical1} alt="Physical Media 2" style={{ width: '44vw', maxWidth: 260, minWidth: 120, borderRadius: 12, boxShadow: '0 2px 16px #0003', cursor: 'pointer' }} onClick={() => setModalImg(physical1)} />
                </div>
                <div style={{ color: '#f6e7cc', fontSize: 'clamp(14px, 3vw, 18px)', marginBottom: 32 }}>
                    Designed physical marketing materials to support on-site event engagement.
                </div>
            </section>

            {/* Section: EDM Examples */}
                        <section style={{ background: '#3f352c', padding: '0 0 0 0', textAlign: 'center' }}>
                                <h2 style={{ color: '#f6e7cc', fontWeight: 700, fontSize: 28, marginBottom: 18 }}>EDM EXAMPLES:</h2>
                                <div
                                    style={{
                                        display: 'grid',
                                        gridTemplateColumns: '1fr',
                                        gap: 16,
                                        margin: '0 auto 12px auto',
                                        maxWidth: 1000,
                                        justifyItems: 'center',
                                    }}
                                    className="far-east-edm-grid"
                                >
                                    {[0, 1, 2].map(col => (
                                        <div key={col} style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
                                            <img
                                                src={[edm0, edm1, edm2, edm3, edm4, edm5][col]}
                                                alt={`EDM Example ${col * 2 + 1}`}
                                                style={{ width: '44vw', maxWidth: 320, minWidth: 100, borderRadius: 12, boxShadow: '0 2px 16px #0003', objectFit: 'cover', cursor: 'pointer' }}
                                                onClick={() => setModalImg([edm0, edm1, edm2, edm3, edm4, edm5][col])}
                                            />
                                            <img
                                                src={[edm0, edm1, edm2, edm3, edm4, edm5][col + 3]}
                                                alt={`EDM Example ${col * 2 + 2}`}
                                                style={{ width: '44vw', maxWidth: 320, minWidth: 100, borderRadius: 12, boxShadow: '0 2px 16px #0003', objectFit: 'cover', cursor: 'pointer' }}
                                                onClick={() => setModalImg([edm0, edm1, edm2, edm3, edm4, edm5][col + 3])}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div style={{ color: '#f6e7cc', fontSize: 'clamp(13px, 3vw, 18px)', margin: '0 auto 32px auto', maxWidth: 1000 }}>
                                        Crafted detailed, brand-aligned briefs to ensure visually compelling and performance-driven EDM campaigns for property showcases.
                                </div>
                        </section>

            {/* Section: Copywriting Examples */}
                        <section style={{ background: '#3f352c', padding: '0 0 48px 0', textAlign: 'center' }}>
                                <h2 style={{ color: '#f6e7cc', fontWeight: 700, fontSize: 28, marginBottom: 18 }}>COPYWRITING EXAMPLES:</h2>
                                <div
                                    style={{
                                        display: 'grid',
                                        gridTemplateColumns: '1fr',
                                        gap: 16,
                                        margin: '0 auto 12px auto',
                                        maxWidth: 1000,
                                        justifyItems: 'center',
                                    }}
                                    className="far-east-copy-grid"
                                >
                                    // Add responsive CSS for grids
                                    {[0, 1, 2].map(col => (
                                        <div key={col} style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
                                            <img
                                                src={[cw0, cw1, cw2, cw3, cw4, cw5][col]}
                                                alt={`Copywriting Example ${col * 2 + 1}`}
                                                style={{ width: '44vw', maxWidth: 320, minWidth: 100, borderRadius: 12, boxShadow: '0 2px 16px #0003', objectFit: 'cover', cursor: 'pointer' }}
                                                onClick={() => setModalImg([cw0, cw1, cw2, cw3, cw4, cw5][col])}
                                            />
                                            <img
                                                src={[cw0, cw1, cw2, cw3, cw4, cw5][col + 3]}
                                                alt={`Copywriting Example ${col * 2 + 2}`}
                                                style={{ width: '44vw', maxWidth: 320, minWidth: 100, borderRadius: 12, boxShadow: '0 2px 16px #0003', objectFit: 'cover', cursor: 'pointer' }}
                                                onClick={() => setModalImg([cw0, cw1, cw2, cw3, cw4, cw5][col + 3])}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div style={{ color: '#f6e7cc', fontSize: 'clamp(13px, 3vw, 18px)', margin: '16px auto 0 auto', maxWidth: 1000 }}>
                                        Executed high-impact, sales-oriented social media copywriting to drive enquiries and convert audience interest into leads.
                                </div>
                        </section>
                        {/* Modal for enlarged image */}
                        {modalImg && (
                            <div
                                onClick={() => setModalImg(null)}
                                style={{
                                    position: 'fixed',
                                    top: 0,
                                    left: 0,
                                    width: '100vw',
                                    height: '100vh',
                                    background: 'rgba(0,0,0,0.85)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    zIndex: 1000,
                                    cursor: 'zoom-out',
                                }}
                            >
                                <img
                                    src={modalImg}
                                    alt="Enlarged preview"
                                    style={{
                                        maxWidth: '90vw',
                                        maxHeight: '90vh',
                                        borderRadius: 16,
                                        boxShadow: '0 4px 32px #000a',
                                        background: '#fff',
                                    }}
                                />
                            </div>
                        )}
        </div>
    );
}
