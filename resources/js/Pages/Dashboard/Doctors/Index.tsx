import { Toolbar } from "@/Components/core/toolbar";
import { DataTable, Pagination } from "@/Components/custom";
import DashboardLayout from "@/Layouts/DashboardLayout";

export default function Index({ data : doctors } : any) {

    console.log(doctors)

    return (
        <DashboardLayout headTitle="Doctores">
            <Toolbar/>
            <DataTable value={doctors}>
                <DataTable.Column header="ID" field="id"/>
                <DataTable.Column header="Nombre" field="names"/>
                <DataTable.Column header="Correo" field="email"/>
                <DataTable.Column header="Especialidad" field="specialization"/>
                <DataTable.Column
                    header="Acciones"
                    body={DataTable.Actions}
                />
            </DataTable>
            <Pagination/>
        </DashboardLayout>
    )
}
