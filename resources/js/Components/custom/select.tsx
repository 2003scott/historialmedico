import { cn } from "@/Libs/Utils";
import {
    Select as S,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "../ui/select";

interface SelectProps {
    options: any[];
    value?: any;
    onValueChange?: (e: any) => void;
    optionLabel?: string;
    optionValue?: string;
    placeholder?: string;
    label?: string;
}
export const Select = ({
    options,
    value,
    onValueChange,
    optionLabel = "label",
    optionValue = "value",
    placeholder = "Seleccionar",
    label,
}: SelectProps) => {
    return (
        <S value={value} onValueChange={onValueChange}>
            <SelectTrigger >
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {label && <SelectLabel>{label}</SelectLabel>}
                    {options.map((category, index) => (
                        <SelectItem
                            key={index}
                            value={`${category[optionValue]}`}
                        >
                            {category[optionLabel]}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </S>
    );
};