import Link from "next/link";

export default function Home() {
    return (
        <div className="h-screen flex w-full items-center justify-center">
            <div className="max-w-screen-sm w-full flex flex-col gap-y-2 rounded-lg p-4 bg-stone-900">
                <h2 className="text-2xl font-bold mb-4 text-white">
                    Login with oauth2
                </h2>

                <Link href="http://localhost:8080/oauth2/authorization/google">
                    <button className="w-full bg-white rounded p-2">
                        Login with Google
                    </button>
                </Link>
                <Link href="http://localhost:8080/oauth2/authorization/github">
                    <button className="w-full bg-white rounded p-2">
                        Login with GitHub
                    </button>
                </Link>
            </div>
        </div>
    );
}
