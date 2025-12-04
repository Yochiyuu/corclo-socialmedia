"use client";

import { Zap, ChevronRight } from "lucide-react"; 
import Link from "next/link";
import { Container, Row, Col, Card, Image, Badge } from "react-bootstrap";
import AffinityPingForm from "./AffinityPingForm";

// --- KONFIGURASI ECHO ---
const VISUALIZER_CONFIG = {
    CARD_HEIGHT: '175px', // Tinggi container visualizer
    CONTENT_TOP_OFFSET: -10, // Offset Vertikal Akhir (di luar 50%) dalam piksel (menarik ke atas 15px)
    BORDER_RADIUS: '20px', // Custom border radius untuk card visualizer
    AVATAR_SIZE: 90,
};


type CurrentUser = { username: string; avatar: string | null; name: string };
type AffinitySuggestion = {
    id: number;
    username: string;
    name: string;
    avatar: string | null;
    affinityScore: number;
    mutualGroups: number;
    mutualFollowers: number;
};

export default function AffinityEchoView({
    currentUser,
    affinitySuggestions
}: {
    currentUser: CurrentUser;
    affinitySuggestions: AffinitySuggestion[];
}) {
    
    const getGlowColor = (score: number) => {
        if (score >= 0.7) return 'rgba(124, 58, 237, 0.6)'; 
        if (score >= 0.6) return 'rgba(16, 185, 129, 0.5)';
        return 'rgba(255, 255, 255, 0.1)'; 
    };

    return (
        <Container className="py-4">
            <Row className="g-4 justify-content-center">
                
                <Col lg={10} md={12}>
                    {/* --- HEADLINE & BACK LINK --- */}
                    <div className="mb-3"> 
                        <Link href="/home" className="text-secondary small d-inline-flex align-items-center text-decoration-none hover-text-primary">
                            <ChevronRight size={16} style={{ transform: 'rotate(180deg)' }} /> Kembali ke Home
                        </Link>
                    </div>

                    <div className="mb-5 border-bottom border-secondary border-opacity-25 pb-3">
                        <h2 className="fw-bold d-flex align-items-center gap-3">
                            <Zap size={32} className="text-warning" /> 
                            <span className="text-white">Affinity Echo</span>
                        </h2>
                        <p className="text-secondary lead mb-0" style={{ fontSize: '1.05rem' }}>
                            Temukan koneksi otentik berdasarkan interaksi dan minat bersama, bebas dari algoritma dangkal.
                        </p>
                    </div>

                    <Row className="g-4">
                        {affinitySuggestions.map((user) => {
                            const glowColor = getGlowColor(user.affinityScore);

                            return (
                            <Col md={6} lg={4} key={user.id}>
                                <Card 
                                    className="h-100 shadow-lg bg-dark text-center border-secondary border-opacity-25"
                                    style={{
                                        transition: 'all 0.3s ease',
                                        boxShadow: `0 0 15px ${glowColor}, 0 0 5px rgba(0,0,0,0.5)`,
                                        borderRadius: VISUALIZER_CONFIG.BORDER_RADIUS,
                                    }}
                                >
                                    
                                    {/* Affinity Visualizer */}
                                    <div 
                                        className="bg-dark position-relative overflow-hidden" 
                                        style={{ 
                                            borderBottom: "1px solid rgba(255,255,255,0.05)",
                                            height: VISUALIZER_CONFIG.CARD_HEIGHT,
                                            borderTopLeftRadius: VISUALIZER_CONFIG.BORDER_RADIUS,
                                            borderTopRightRadius: VISUALIZER_CONFIG.BORDER_RADIUS,
                                        }}
                                    >
                                        
                                        {/* Gema Ungu */}
                                        <div 
                                            className="rounded-circle position-absolute top-50 start-50 translate-middle bg-primary bg-opacity-25 animate-pulse-slow" 
                                            style={{ 
                                                width: `${VISUALIZER_CONFIG.AVATAR_SIZE + user.mutualFollowers * 20}px`, 
                                                height: `${VISUALIZER_CONFIG.AVATAR_SIZE + user.mutualFollowers * 20}px`, 
                                                zIndex: 1,
                                                pointerEvents: 'none',
                                                top: '50%',
                                                left: '50%'
                                            }}
                                        />

                                        {/* Avatar dan Nama*/}
                                        <div 
                                            className="position-absolute text-center z-3"
                                            style={{
                                                top: '65%', 
                                                left: '50%',
                                                transform: `translate(-50%, -50%)`, 
                                                marginTop: `${VISUALIZER_CONFIG.CONTENT_TOP_OFFSET}px`, 
                                                width: '100%', 
                                            }}
                                        >
                                            <Image
                                                src={user.avatar || "/images/default-avatar.png"}
                                                roundedCircle
                                                width={VISUALIZER_CONFIG.AVATAR_SIZE}
                                                height={VISUALIZER_CONFIG.AVATAR_SIZE}
                                                className="bg-dark mb-1"
                                                style={{ objectFit: "cover", border: "4px solid #7c3aed" }}
                                            />
                                            
                                            <Link href={`/profile/${user.username}`} className="text-decoration-none d-block">
                                                <h5 className="fw-bold text-white mb-0 hover-underline">{user.name}</h5>
                                            </Link>
                                            <small className="text-secondary d-block">@{user.username}</small>
                                        </div>
                                    </div>

                                    <Card.Body className="pt-3">
                                        
                                        <div className="mb-3 p-3 rounded-3 border border-primary border-opacity-50" style={{ background: 'rgba(124, 58, 237, 0.05)' }}> 
                                            <small className="d-block fw-bold text-center mb-2 text-warning">Affinity Score</small>
                                            <h3 className="fw-bolder text-center mb-3 text-primary" style={{
                                                textShadow: '0 0 8px #7c3aed' 
                                            }}> 
                                                {(user.affinityScore * 100).toFixed(0)}%
                                            </h3>
                                            
                                            <div className="d-flex justify-content-around small">
                                                <Badge pill bg="primary" className="me-2 px-3 py-2 fw-normal">👥 {user.mutualFollowers} Mutuals</Badge>
                                                <Badge pill bg="success" className="px-3 py-2 fw-normal">🌐 {user.mutualGroups} Circles</Badge>
                                            </div>
                                        </div>
                                        
                                        <AffinityPingForm targetUserId={user.id} />

                                    </Card.Body>
                                </Card>
                            </Col>
                        );})}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}