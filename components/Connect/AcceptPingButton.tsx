"use client";

import { useState } from "react";
import { acceptAffinityPing } from "@/app/actions";
import { Button } from "react-bootstrap";
import { Check } from "lucide-react";

export default function AcceptPingButton({ pingId }: { pingId: number }) {
    const [isLoading, setIsLoading] = useState(false);

    const handleAccept = async () => {
        setIsLoading(true);
        try {
            await acceptAffinityPing(pingId);
        } catch (error) {
            console.error("Failed to accept ping:", error);
            alert("Gagal menerima ping.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Button
            size="sm"
            variant="primary"
            className="rounded-pill px-3 fw-bold d-flex align-items-center gap-2"
            onClick={handleAccept}
            disabled={isLoading}
        >
            {isLoading ? "Processing..." : (
                <>
                    <Check size={16} /> Accept
                </>
            )}
        </Button>
    );
}
