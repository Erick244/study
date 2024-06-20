import { cookies } from "next/headers";

export async function getUserInfo() {
    const JSESSIONID = cookies().get("JSESSIONID");

    try {
        const res = await fetch("http://localhost:8080/api/auth/me", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Cookie: `JSESSIONID=${JSESSIONID?.value}`,
            },
            credentials: "include",
        });

        if (!res.ok) {
            return null;
        }

        return await res.json();
    } catch (err) {
        console.log(err);
        return null;
    }
}
