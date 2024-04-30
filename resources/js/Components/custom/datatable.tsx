import React, { ReactElement, ReactNode, useMemo } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import { Link } from "@inertiajs/react";
import { Button, buttonVariants } from "../ui/button";
import { FaEye, FaPencil, FaTrash } from "react-icons/fa6";
import { Alert } from ".";
import { FaTrashRestore } from "react-icons/fa";

interface ColumnProps<T> {
    field?: keyof T;
    header: string | ReactNode;
    body?: (value: any) => ReactNode;
}

interface DataTableProps<T> {
    value?: T[];
    children: ReactElement<ColumnProps<T>>[];
    cellClassName?: string;
}

const getNestedValue = (obj: any, path: string) =>
    path.split(".").reduce((o, p) => (o ? o[p] : null), obj);

export const DataTable = <T extends Record<string, any>>({
    value,
    children,
    cellClassName
}: DataTableProps<T>) => {
    const rows = useMemo(
        () =>
            value?.map((item, index) => (
                <TableRow key={index}>
                    {React.Children.map(children, (child, index) => {
                        const { field, body } = child.props;
                        return (
                            <TableCell className={cellClassName} key={index}>
                                {body
                                    ? body(item)
                                    : field
                                    ? getNestedValue(item, field as string)
                                    : null}
                            </TableCell>
                        );
                    })}
                </TableRow>
            )),
        [value, children]
    );

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    {React.Children.map(children, (child) => child)}
                </TableRow>
            </TableHeader>
            <TableBody>{rows}</TableBody>
        </Table>
    );
};

DataTable.Column = <T extends Record<string, any>>({
    header,
}: ColumnProps<T>) => {
    return <TableHead>{header}</TableHead>;
};

DataTable.Actions = (props: {
    id: number;
    show?: boolean;
    edit?: boolean;
    delete?: boolean;
}) => {
    const trash = new URLSearchParams(window.location.search).get("trash");

    if (trash === "true") {
        return (
            <Alert
                title="Restaurar"
                action={
                    <Link
                        method="post"
                        preserveState={false}
                        className={buttonVariants({
                            size: "xs",
                        })}
                        href={`${window.location.pathname}/${props.id}/restore`}
                    >
                        Restaurar
                    </Link>
                }
                trigger={
                    <Button size={"xs"}>
                        <FaTrashRestore />
                        <span className="ml-2">Restaurar</span>
                    </Button>
                }
            />
        );
    }
    const Delete = () => (
        <Alert
            title="Eliminar"
            action={
                <Link
                    method="delete"
                    preserveState={false}
                    className={buttonVariants({
                        size: "xs",
                    })}
                    href={`${window.location.pathname}/${props.id}`}
                >
                    Eliminar
                </Link>
            }
            trigger={
                <Button size={"xs"}>
                    <FaTrash />
                </Button>
            }
        />
    );
    return (
        <div className="inline-flex gap-4">
            {!props.show && !props.edit && !props.delete && (
                <>
                    <Link
                        method="get"
                        className={buttonVariants({
                            size: "xs",
                        })}
                        href={`${window.location.pathname}/${props.id}/edit`}
                    >
                        <FaPencil />
                    </Link>
                    <Delete />
                </>
            )}

            {props.show && (
                <Link
                    method="get"
                    className={buttonVariants({
                        size: "xs",
                    })}
                    href={`${window.location.pathname}/${props.id}`}
                >
                    <FaEye />
                </Link>
            )}
            {props.edit && (
                <Link
                    method="get"
                    className={buttonVariants({
                        size: "xs",
                    })}
                    href={`${window.location.pathname}/${props.id}/edit`}
                >
                    <FaPencil />
                </Link>
            )}
            {props.delete && <Delete />}
        </div>
    );
};