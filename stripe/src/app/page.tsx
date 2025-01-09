import { CheckoutButton } from "@/components/CheckoutButton";

export default async function Home() {
    return (
        <div className="bg-stone-700 h-screen w-screen flex flex-col gap-10 justify-center items-center text-white">
            <h1 className="text-2xl">Payment</h1>
            <CheckoutButton />
        </div>
    );
}
