import { Form } from "@/Components/custom/form";

import { Select } from "@/Components/custom/select";
import { Button } from "@/Components/ui/button";
import { Textarea } from "@/Components/ui/textarea";

import DashboardLayout from "@/Layouts/DashboardLayout";
import { useForm } from "@inertiajs/react";

const genders = [
    {
        label: "Masculino",
        value: "Masculino",
    },
    {
        label: "Femenino",
        value: "Femenino",
    },
];
export default function Create() {
    const { data, setData, errors, processing, post } = useForm({
        name: "",
        email: "",
        date_of_birth: "",
        phone: "",
        address: "",
        gender: "",
        details: "",
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route("patients.store"));
    };
    return (
        <DashboardLayout headTitle="Pacientes">
            <Form onSubmit={handleSubmit}>
                <Form.Input
                    title="Nombre"
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                    error={errors.name}
                />
                <Form.Input
                    title="Correo"
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                    error={errors.email}
                />
                <Form.Input
                    title="Nacimiento"
                    type="date"
                    value={data.date_of_birth}
                    onChange={(e) => setData("date_of_birth", e.target.value)}
                    error={errors.date_of_birth}
                />
                <Form.Input
                    title="Celular"
                    value={data.phone}
                    onChange={(e) => setData("phone", e.target.value)}
                    error={errors.phone}
                />
                <Form.Input
                    title="Dirección"
                    value={data.address}
                    onChange={(e) => setData("address", e.target.value)}
                    error={errors.address}
                />
                <Form.Input title="Genero" error={errors.gender}>
                    <Select
                        options={genders}
                        label="Genero"
                        placeholder="Seleccionar Genero"
                        onValueChange={(value) => setData("gender", value)}
                    />
                </Form.Input>
                <Form.Input
                    title="Detalles"
                    error={errors.details}
                    containerClassName="col-span-full"
                >
                    <Textarea
                        onChange={(e) => setData("details", e.target.value)}
                    />
                </Form.Input>

                <section>
                    <Button disabled={processing}>
                        {processing ? "Guardando..." : "Guardar"}
                    </Button>
                </section>
            </Form>
        </DashboardLayout>
    );
}
