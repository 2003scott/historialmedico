import { PageProps } from "@/types";
import { usePage } from "@inertiajs/react";
import { IoIosMenu } from "react-icons/io";

export const Header = ({ handleActive }: { handleActive: () => void }) => {
    const { auth } = usePage<PageProps>().props;
    return (
        <header className="flex gap-5 w-full bg-white h-[72px] border-b-2">
            <button
                onClick={handleActive}
                className="flex lg:hidden bg-primary w-[88px] py-4 items-center justify-center"
            >
                <IoIosMenu className=" text-white text-[35px]" />
            </button>
            <div className=" w-full flex items-center justify-between px-2 lg:px-10">
                <h2 className="font-extrabold text-[1.2rem] lg:text-[1.5rem]">
                    HISTORIAL MEDICO
                </h2>
                <div className="bg-white flex items-center">
                    <div className="hidden lg:block">
                        <p className="text-[14px] ">
                            Hola,{" "}
                            <span className="font-bold">{auth.user.name}</span>
                        </p>
                        <p className="text-[12px] text-end">Doctor</p>
                    </div>
                    xxx
                </div>
            </div>
        </header>
    );
};
