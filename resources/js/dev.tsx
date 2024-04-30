import { useEffect, useRef } from "react";

const useShortcut = (key = "f") => {
    const inputRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.ctrlKey && e.key.toLowerCase() === key) {
                e.preventDefault();
                inputRef.current?.classList.toggle("hidden");
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [key]);

    return { inputRef };
};

const Dev = ({
    ziggy,
    auth,
    errors,
    routeName,
    query,
    flash,
    ...rest
}: any) => {
    const { inputRef } = useShortcut("q");
    const { inputRef: iR } = useShortcut("f");

    const handleLoad = (e: React.SyntheticEvent<HTMLIFrameElement, Event>) => {
        const { contentWindow } = e.currentTarget;
        contentWindow?.postMessage(JSON.stringify(rest), "*");
    };

    return (
        <>
            <div
                ref={inputRef}
                className="bg-gray-800 p-4 rounded-lg hidden fixed right-0 top-0 z-[1000]"
            >
                <iframe
                    onLoad={handleLoad}
                    src="https://react-tools-sand.vercel.app/"
                    className="w-full h-96"
                />
            </div>
            <div
                ref={iR}
                className="bg-gray-800 p-4 rounded-lg hidden fixed right-0 top-0 z-[1000] w-[512px] overflow-y-scroll h-screen"
            >
                {
                    <pre className="text-primary-foreground text-xs w-full">
                        {JSON.stringify(rest, null, 2)}
                    </pre>
                }
            </div>
        </>
    );
};

export default Dev;