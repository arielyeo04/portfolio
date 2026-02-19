import "../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import kdaBanner from "../assets/kda/kda_banner.png";
import kdaLogo from "../assets/kda/kda_logo.jpg";
import wd1 from "../assets/kda/web_design/wd_1.jpg";
import wd2 from "../assets/kda/web_design/wd_2.jpg";
import wd3 from "../assets/kda/web_design/wd_3.jpg";
import wd4 from "../assets/kda/web_design/wd_4.jpg";
import cw0 from "../assets/kda/copywriting/cw_0.jpg";
import cw1 from "../assets/kda/copywriting/cw_1.jpg";
import cw2 from "../assets/kda/copywriting/cw_2.jpg";
import cw3 from "../assets/kda/copywriting/cw_3.jpg";
import bl0 from "../assets/kda/book_launch/bl_0.jpg";
import bl1 from "../assets/kda/book_launch/bl_1.jpg";
import bl2 from "../assets/kda/book_launch/bl_2.jpg";

export default function KdaPage() {
    const [modalImg, setModalImg] = useState(null as null | string);
    return (
        <div>
            {/* Header Bar - fixed to top */}
            <div style={{ width: '100vw', background: '#2d241c', padding: '16px 0', position: 'fixed', top: 0, left: 0, zIndex: 100, boxShadow: '0 2px 8px #0003' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', paddingLeft: 16 }}>
                    <Link to="/" style={{ color: '#f6e7cc', textDecoration: 'none', fontWeight: 700, fontSize: 18, letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 8 }}>
                        ← Home
                    </Link>
                </div>
            </div>
            {/* Main Content */}
            <div
                style={{
                    color: '#f6e7cc',
                    background: '#3f352c',
                    minHeight: '100vh',
                    width: '100vw',
                    fontFamily: 'DM Sans, Arial, sans-serif',
                    overflowX: 'hidden',
                    fontSize: 'clamp(16px, 4vw, 22px)',
                    paddingTop: 64,
                }}
            >
            {/* Banner */}
            <div style={{ position: 'relative', width: '100%', height: '38vw', minHeight: 180, maxHeight: 440, overflow: 'hidden' }}>
                <img
                    src={kdaBanner}
                    alt="KDA Capabilities Banner"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                />
                <img
                    src={kdaLogo}
                    alt="KDA Capabilities Logo"
                    style={{ position: 'absolute', bottom: 16, right: 16, width: '40vw', maxWidth: 320, minWidth: 120, background: 'rgba(0,0,0,0.0)' }}
                />
            </div>

            {/* Section: Web Design */}
            <section style={{ background: '#3f352c', padding: '32px 0 0 0', textAlign: 'center' }}>
                <h2 style={{ color: '#f6e7cc', fontWeight: 700, fontSize: 'clamp(22px, 6vw, 32px)', marginBottom: 16 }}>WEB DESIGN:</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', marginBottom: 12 }}>
                    <img src={wd1} alt="Web Design 1" style={{ width: '38vw', maxWidth: 180, minWidth: 120, borderRadius: 12, boxShadow: '0 2px 16px #0003', cursor: 'pointer' }} onClick={() => setModalImg(wd1)} />
                    <img src={wd2} alt="Web Design 2" style={{ width: '38vw', maxWidth: 180, minWidth: 120, borderRadius: 12, boxShadow: '0 2px 16px #0003', cursor: 'pointer' }} onClick={() => setModalImg(wd2)} />
                    <img src={wd3} alt="Web Design 3" style={{ width: '38vw', maxWidth: 180, minWidth: 120, borderRadius: 12, boxShadow: '0 2px 16px #0003', cursor: 'pointer' }} onClick={() => setModalImg(wd3)} />
                    <img src={wd4} alt="Web Design 4" style={{ width: '38vw', maxWidth: 180, minWidth: 120, borderRadius: 12, boxShadow: '0 2px 16px #0003', cursor: 'pointer' }} onClick={() => setModalImg(wd4)} />
                </div>
                <div style={{ color: '#f6e7cc', fontSize: 'clamp(14px, 3vw, 18px)', marginBottom: 32, maxWidth: 900, marginLeft: 'auto', marginRight: 'auto' }}>
                    Conceptualised and launched a fully functional website from scratch, leveraging Wix and AI tools to deliver a streamlined and easily navigable user experience. link to website: <a href="https://kdacapabilities.com" target="_blank" rel="noopener noreferrer" style={{ color: '#b6a16b', textDecoration: 'underline' }}>https://kdacapabilities.com</a>
                </div>
            </section>

            {/* Section: Copywriting Example */}
            <section style={{ background: '#3f352c', padding: '0 0 0 0', textAlign: 'center' }}>
                <h2 style={{ color: '#f6e7cc', fontWeight: 700, fontSize: 'clamp(18px, 5vw, 28px)', marginBottom: 14 }}>COPYWRITING EXAMPLE:</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', marginBottom: 12 }}>
                    <img src={cw0} alt="Copywriting 1" style={{ width: '44vw', maxWidth: 220, minWidth: 120, borderRadius: 12, boxShadow: '0 2px 16px #0003', cursor: 'pointer' }} onClick={() => setModalImg(cw0)} />
                    <img src={cw1} alt="Copywriting 2" style={{ width: '44vw', maxWidth: 220, minWidth: 120, borderRadius: 12, boxShadow: '0 2px 16px #0003', cursor: 'pointer' }} onClick={() => setModalImg(cw1)} />
                    <img src={cw2} alt="Copywriting 3" style={{ width: '44vw', maxWidth: 220, minWidth: 120, borderRadius: 12, boxShadow: '0 2px 16px #0003', cursor: 'pointer' }} onClick={() => setModalImg(cw2)} />
                    <img src={cw3} alt="Copywriting 4" style={{ width: '44vw', maxWidth: 220, minWidth: 120, borderRadius: 12, boxShadow: '0 2px 16px #0003', cursor: 'pointer' }} onClick={() => setModalImg(cw3)} />
                </div>
                <div style={{ color: '#f6e7cc', fontSize: 'clamp(13px, 3vw, 18px)', margin: '0 auto 32px auto', maxWidth: 900 }}>
                    Tasked with translating Lumai.ai’s technical capabilities into a clear, accessible explanation tailored for a non-technical LinkedIn audience.
                </div>
            </section>

            {/* Section: Book Launch */}
            <section style={{ background: '#3f352c', padding: '0 0 32px 0', textAlign: 'center' }}>
                <h2 style={{ color: '#f6e7cc', fontWeight: 700, fontSize: 'clamp(18px, 5vw, 28px)', marginBottom: 14 }}>BOOK LAUNCH:</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', marginBottom: 12 }}>
                    <img src={bl0} alt="Book Launch 1" style={{ width: '44vw', maxWidth: 220, minWidth: 120, borderRadius: 12, boxShadow: '0 2px 16px #0003', cursor: 'pointer' }} onClick={() => setModalImg(bl0)} />
                    <img src={bl1} alt="Book Launch 2" style={{ width: '44vw', maxWidth: 220, minWidth: 120, borderRadius: 12, boxShadow: '0 2px 16px #0003', cursor: 'pointer' }} onClick={() => setModalImg(bl1)} />
                    <img src={bl2} alt="Book Launch 3" style={{ width: '44vw', maxWidth: 220, minWidth: 120, borderRadius: 12, boxShadow: '0 2px 16px #0003', cursor: 'pointer' }} onClick={() => setModalImg(bl2)} />
                </div>
                <div style={{ color: '#f6e7cc', fontSize: 'clamp(13px, 3vw, 18px)', margin: '0 auto 0 auto', maxWidth: 900 }}>
                    Co-developed the book’s cover and marketing materials, and refined selected chapters to structure Keith’s ideas into cohesive, publication-ready content.<br />
                    make like a clickable link to website to get book: <a href="https://www.knowdecideact.com" target="_blank" rel="noopener noreferrer" style={{ color: '#b6a16b', textDecoration: 'underline' }}>https://www.knowdecideact.com</a>
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
        </div>
    );
}
