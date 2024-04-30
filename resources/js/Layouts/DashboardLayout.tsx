import { Header } from "@/Components/core/header";
import { Sidebar } from "@/Components/core/sidebar";
import { PageProps } from "@/types";
import { Head, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { Toaster } from "@/Components/ui/sonner";
import { toast } from "sonner";

export default function DashboardLayout({
    children,
    headTitle,
}: {
    children: React.ReactNode;
    headTitle: string;
}) {
    const [active, setActive] = useState<boolean>(false);
    const {
        flash: { success, error },
        query: { trash },
    } = usePage<PageProps & { query: { trash?: string } }>().props;

    const handleActive = () => {
        setActive(!active);
    };

    useEffect(() => {
        if (success || error) {
            toast[success ? "success" : "error"](success || error);
        }
    }, []);

    return (
        <>
            <Head title={headTitle} />
            <div className="h-screen">
                <div className="flex flex-1 col-span-full h-full">
                    <Sidebar active={active} handleActive={handleActive} />
                    <section className="flex flex-col w-full overflow-y-auto col-span-full">
                        <Header handleActive={handleActive} />
                        <main className="flex-1  col-span-full bg-altenati">
                            <div className="flex flex-col px-2 lg:px-10 py-10 lg:py-5">
                                {children}
                            </div>
                        </main>
                    </section>
                </div>
            </div>
            <Toaster />
        </>
    );
}
