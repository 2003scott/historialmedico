import React from "react";
import { IoIosMenu } from "react-icons/io";
import { BsClipboard2Data } from "react-icons/bs";
import { FaHouseMedical, FaUserInjured } from "react-icons/fa6";
import { HiOutlineHome, HiOutlineUserGroup } from "react-icons/hi";
import { Link } from "@inertiajs/react";

interface ItemMenuProps {
    name: string;
    icon: any;
    path: string;
}

export const ItemMenu: ItemMenuProps[] = [
    {
        name: "Home",
        icon: HiOutlineHome,
        path: "/dashboard/home",
    },
    {
        name: "Pacientes",
        icon: FaUserInjured,
        path: "/dashboard/patients",
    },
    {
        name: "Doctores",
        icon: HiOutlineUserGroup,
        path: "/dashboard/doctors",
    },
    {
        name: "Centros Medicos",
        icon: FaHouseMedical,
        path: "/sedes",
    },
    {
        name: "Historiales",
        icon: BsClipboard2Data,
        path: "/historiales",
    },
];

export const Sidebar = ({
    active,
    handleActive,
}: {
    active: boolean;
    handleActive: () => void;
}) => {
    return (
        <>
            <div
                className={`inset-0 lg:hidden h-full bg-primary opacity-50 w-full z-10 ${
                    active ? "absolute" : "hidden"
                }`}
                onClick={handleActive}
            ></div>
            <section
                className={`${
                    active ? "translate-x-0 z-50" : "-translate-x-full"
                }  overflow-y-auto overflow-x-hidden transition-all duration-200 bg-primary w-[288px] lg:w-[88px] absolute lg:relative h-full -translate-x-full lg:translate-x-0`}
            >
                <div className="flex flex-col cursor-pointer">
                    <ul>
                        <li>
                            <button className="hidden lg:flex bg-primary w-[88px] h-[72px] items-center justify-center">
                                <IoIosMenu className=" text-white text-[30px]" />
                            </button>
                        </li>
                        {ItemMenu.map((item, index) => (
                            <li
                                key={index}
                                className={`transition-all py-4 duration-300 w-full flex lg:items-center ${
                                    window.location.pathname.includes(item.path)
                                        ? "bg-white text-primary"
                                        : "bg-primary text-white"
                                }`}
                            >
                                <Link
                                    href={item.path}
                                    className="flex items-center w-full"
                                >
                                    <div
                                        className={`w-1 h-16 ${
                                            window.location.pathname.includes(
                                                item.path
                                            )
                                                ? "bg-red-600"
                                                : "bg-primary"
                                        }`}
                                    ></div>
                                    <div className="text-[0.8rem] flex lg:flex-col items-center gap-2 pr-2 text-center w-full">
                                        {React.createElement(item.icon, {
                                            className: "text-[28px]",
                                        })}
                                        <p>{item.name}</p>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
};
