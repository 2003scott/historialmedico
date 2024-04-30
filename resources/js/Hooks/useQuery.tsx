import { useState, useRef } from "react";
import { router, usePage } from "@inertiajs/react";
import { useUpdateEffect } from "react-use";

export type Query = {
    [key: string]: string | number | boolean;
};

type PageProps = {
    query: Query;
};

export default function useQuery(
    queryKey: string,
    debounce = 600
): [string, (value: string) => void, boolean] {
    const { query } = usePage<PageProps>().props;
    const { page, ...restQuery } = query;

    const [show, setShow] = useState(false);
    const [inputValue, setInputValue] = useState(
        query[queryKey]?.toString() || ""
    );

    const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);

    useUpdateEffect(() => {
        setShow(false);

        if (timeoutIdRef.current) {
            clearTimeout(timeoutIdRef.current);
        }

        timeoutIdRef.current = setTimeout(() => {
            router.get(
                window.location.pathname,
                { ...restQuery, [queryKey]: inputValue || undefined },
                {
                    preserveScroll: true,
                    preserveState: true,
                    onSuccess: () => setShow(true),
                }
            );
        }, debounce);
    }, [inputValue]);

    return [inputValue, setInputValue, show];
}