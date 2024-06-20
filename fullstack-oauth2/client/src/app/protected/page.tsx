import { getUserInfo } from "@/functions/user";
import { redirect } from "next/navigation";

export default async function Page() {
    const userInfo = await getUserInfo();

    console.log(userInfo);

    if (!userInfo) {
        redirect("/");
    }

    return (
        <div className="h-screen flex flex-col w-full items-center justify-center">
            PROTECTED PAGE
            <div className="flex flex-col gap-y-1">
                {userInfo &&
                    Object.keys(userInfo).map((key) => (
                        <div key={key}>
                            <span className="font-bold">{key}</span>:{" "}
                            <span>{userInfo[key]}</span>
                        </div>
                    ))}
            </div>
        </div>
    );
}
