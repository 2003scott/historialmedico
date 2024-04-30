import { Form } from "@/Components/custom/form";

import { Select } from "@/Components/custom/select";
import { Button } from "@/Components/ui/button";
import { Textarea } from "@/Components/ui/textarea";

import DashboardLayout from "@/Layouts/DashboardLayout";
import { useForm } from "@inertiajs/react";

export default function Create() {
    const { data, setData, errors, processing, post } = useForm({
        names: "",
        surnames: "",
        email: "",
        phone: "",
        address: "",
        specialization: "",
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route("doctors.store"));
    };
    return (
        <DashboardLayout headTitle="Doctores">
            <Form onSubmit={handleSubmit}>
                <Form.Input
                    title="Nombres"
                    value={data.names}
                    onChange={(e) => setData("names", e.target.value)}
                    error={errors.names}
                />
                <Form.Input
                    title="Apellidos"
                    value={data.surnames}
                    onChange={(e) => setData("surnames", e.target.value)}
                    error={errors.surnames}
                />
                <Form.Input
                    title="Correo Electrónico"
                    type="email"
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                    error={errors.email}
                />
                <Form.Input
                    title="Telefono"
                    type="number"
                    value={data.phone}
                    onChange={(e) => setData("phone", e.target.value)}
                    error={errors.phone}
                />
                <Form.Input
                    title="Especialidad"
                    value={data.specialization}
                    onChange={(e) => setData("specialization", e.target.value)}
                    error={errors.specialization}
                />
                <section className="col-span-full">
                    <Button disabled={processing} className="w-full">
                        {processing ? "Guardando..." : "Guardar"}
                    </Button>
                </section>
            </Form>
        </DashboardLayout>
    );
}
