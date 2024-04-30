import useQuery from "@/Hooks/useQuery";
import { Input } from "@/Components/ui/input";
import { Link } from "@inertiajs/react";
import { buttonVariants } from "@/Components/ui/button";

export const Toolbar = ({
    search = true,
    create = true,
}: {
    search?: boolean;
    create?: boolean;
}) => {
    const [s, setS] = useQuery("search");
    return (
        <section className="flex justify-between items-center pb-4">
            {search && (
                <Input
                    placeholder="Buscar..."
                    className="w-64"
                    value={s || ""}
                    onChange={(e) => setS(e.target.value)}
                />
            )}

            {create && (
                <Link
                    href={window.location.pathname + "/create"}
                    className={buttonVariants()}
                >
                    Crear Nuevo
                </Link>
            )}
        </section>
    );
};