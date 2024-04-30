import { Form } from "@/Components/custom/form";
import { Button } from "@/Components/ui/button";
import { useForm } from "@inertiajs/react";

export default function Login() {
    const { data, setData, errors, processing, post } = useForm({
        email: "",
        password: "",
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post("/login");
    };

    return (
        <div className="bg-logincel lg:bg-none bg-altenati bg-right-top bg-no-repeat bg-cover h-screen">
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-14 h-full place-items-center place-content-center items-end">
                <section className="w-[338px] space-y-4 p-2">
                    <h2 className="font-extrabold text-[1.2rem] lg:text-[1.5rem]">
                        HISTORIAL MEDICO
                    </h2>
                    <article className="text-[#3E4558]">
                        <p className="font-thin text-[1rem]">
                            Ingresa tus datos para{" "}
                            <span className="font-bold">Iniciar Sesión</span>
                        </p>
                    </article>
                    <form
                        onSubmit={handleSubmit}
                        className="grid grid-cols-1 gap-5"
                    >
                        <Form.Input
                            title="Correo Electrónico"
                            type="email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            error={errors.email}
                        />

                        <Form.Input
                            title="Contraseña"
                            type="password"
                            value={data.password}
                            onChange={(e) => setData("password", e.target.value)}
                            error={errors.password}
                        />
                        <Button disabled={processing} type="submit">Iniciar Sesión</Button>
                    </form>
                </section>
                <section className="hidden lg:block">
                    <img
                        src="/img/reniec.svg"
                        alt="reniec"
                        draggable="false"
                    />
                </section>
            </div>
        </div>
    );
}
