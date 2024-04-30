import { Toolbar } from "@/Components/core/toolbar";
import { DataTable } from "@/Components/custom/datatable";
import { Pagination } from "@/Components/custom/pagination";

import DashboardLayout from "@/Layouts/DashboardLayout";

export default function Index({ data: patients }: { data: Patient[] }) {
    return (
        <DashboardLayout headTitle="Pacientes">
            <Toolbar />
            <DataTable value={patients}>
                <DataTable.Column header="ID" field="id" />
                <DataTable.Column header="Nombre" field="name" />
                <DataTable.Column header="Correo" field="email" />
                <DataTable.Column
                    header="Acciones"
                    body={(row) => <DataTable.Actions {...row} />}
                />
            </DataTable>
            <Pagination />
        </DashboardLayout>
    );
}
