"use client";

import { getStripe } from "@/utils/stripe";

export function CheckoutButton() {
    async function handlePayment() {
        const resp = await fetch("/api/stripe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });

        const session = await resp.json();

        const stripe = await getStripe();

        const result = await stripe!.redirectToCheckout({
            sessionId: session.id,
        });

        if (result.error) {
            console.error(result.error.message);
        }

        console.log(result);
    }

    return (
        <button
            onClick={handlePayment}
            className="bg-purple-600 p-5 rounded-lg shadow-lg"
        >
            Comprar Agora
        </button>
    );
}
