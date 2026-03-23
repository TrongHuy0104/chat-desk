import { cookies } from "next/headers";

export const metadata = {
    title: "ChatDesk - Dashboard",
    description: "Instantly resolve customer issues with AI-powered support",
};

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
    const cookieStore = await cookies()
    const metadataCookie = cookieStore.get("metadata")
    return (
        <div className="min-h-screen bg-[#050509] font-sans
         antialiased text-zinc-100 selection:bg-zinc-800 flex">
            {metadataCookie?.value ? (
                <>
                    {/* <Sidebar /> */}
                    {children}
                </>
            ) : (
                children
            )}
        </div>
    );
}