import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("STRIPE_SECRET_KEY is not defined");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req: Request) {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card", "boleto"],
            line_items: [
                {
                    price_data: {
                        currency: "brl",
                        product_data: {
                            name: "WhatsApp Bot",
                        },
                        unit_amount: 29.99 * 100,
                    },
                    quantity: 1,
                },
            ],
            mode: "payment",
            success_url: `${req.headers.get("origin")}`,
            cancel_url: `${req.headers.get("origin")}`,
        });

        console.log(session);

        return new Response(JSON.stringify({ id: session.id }), {
            status: 200,
        });
    } catch (error) {
        console.error(error);

        const errorMessage = (error as Error).message;

        return new Response(errorMessage, { status: 500 });
    }
}
