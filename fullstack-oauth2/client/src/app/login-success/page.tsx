import { getUserInfo } from "@/functions/user";
import { redirect } from "next/navigation";

export default async function Page() {
    const userInfo = await getUserInfo();

    if (!userInfo) {
        redirect("/");
    }

    return (
        <div className="h-screen w-screen font-bold flex justify-center items-center bg-zinc-900 text-white">
            LOGIN SUCCESS
        </div>
    );
}
