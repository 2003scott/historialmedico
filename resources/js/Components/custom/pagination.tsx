import {
    Pagination as SPagination,
    PaginationContent,
    PaginationItem,
} from "@/Components/ui/pagination";

import { Button } from "@/Components/ui/button";
import { router, usePage } from "@inertiajs/react";

export const Pagination = ({
    currentPage,
    lastPage,
    step = 2,
}: {
    currentPage?: number;
    lastPage?: number;
    step?: number;
}) => {
    const {
        query,
        last_page: lP,
        current_page: cP,
    } = usePage<{
        query: { page: string };
        last_page?: number;
        current_page?: number;
    }>().props;

    const _lastPage = lastPage || lP;
    const _currentPage = currentPage || cP;

    const active = _currentPage;
    const size = _lastPage;
    const showingNumbers: number = step * 2 + 1;
    let startNumber: number = 2;
    let startArrayNumber: number = step;

    let needStartDots: boolean = false;
    let needEndDots: boolean = false;

    if (active && active > step) {
        startArrayNumber = active - step;
        needStartDots = active > step + startNumber ? true : false;
    }

    if (active && size && size > showingNumbers) {
        needEndDots = size > active + step + 1 ? true : false;

        if (active && size < active + step + 1) {
            startArrayNumber = size - showingNumbers;
        }
    }

    let contentNumber: number;

    const onPaginate = (page: string) => {
        router.get(
            window.location.pathname,
            { ...query, page },
            {
                preserveState: true,
            }
        );
    };
    return (
        _lastPage &&
        _currentPage &&
        _lastPage > 1 && (
            <SPagination>
                <PaginationContent>
                    <PaginationItem>
                        <Button
                            type="button"
                            variant="secondary"
                            onClick={() =>
                                _currentPage > 1 &&
                                onPaginate(`${_currentPage - 1}`)
                            }
                            disabled={_currentPage === 1}
                        >
                            {"<"}
                        </Button>
                    </PaginationItem>
                    {size && size > showingNumbers + startNumber ? (
                        <>
                            <PaginationItem>
                                <Button
                                    type="button"
                                    variant={
                                        _currentPage === 1
                                            ? "default"
                                            : "secondary"
                                    }
                                    onClick={() => onPaginate("1")}
                                >
                                    1
                                </Button>
                            </PaginationItem>

                            {needStartDots && <span>...</span>}
                            {[...Array(showingNumbers)].map((_, i) => {
                                contentNumber = needStartDots
                                    ? startArrayNumber
                                    : startNumber;
                                startNumber++;
                                startArrayNumber++;
                                return (
                                    <PaginationItem key={i}>
                                        <Button
                                            type="button"
                                            variant={
                                                _currentPage === contentNumber
                                                    ? "default"
                                                    : "secondary"
                                            }
                                            onClick={(e) =>
                                                onPaginate(
                                                    `${
                                                        e.currentTarget
                                                            .textContent || "0"
                                                    }`
                                                )
                                            }
                                        >
                                            {contentNumber}
                                        </Button>
                                    </PaginationItem>
                                );
                            })}
                            {needEndDots && <span>...</span>}
                            {/* <li
                                className={`inline-flex h-10 w-10 cursor-pointer items-center justify-center border ${
                                    active === size
                                        ? "bg-primary text-primary-foreground"
                                        : ""
                                }`}
                                onClick={(e) =>
                                    setPage(e.currentTarget.textContent || "0")
                                }
                            >
                                {size}
                            </li> */}
                            <PaginationItem>
                                <Button
                                    type="button"
                                    variant={
                                        _currentPage === size
                                            ? "default"
                                            : "secondary"
                                    }
                                    onClick={(e) =>
                                        onPaginate(
                                            `${
                                                e.currentTarget.textContent ||
                                                "0"
                                            }`
                                        )
                                    }
                                >
                                    {size}
                                </Button>
                            </PaginationItem>
                        </>
                    ) : (
                        (() => {
                            startArrayNumber = 1;
                            return [...Array(size)].map((_, i) => (
                                <PaginationItem key={i}>
                                    <Button
                                        type="button"
                                        variant={
                                            _currentPage === startArrayNumber
                                                ? "default"
                                                : "secondary"
                                        }
                                        onClick={(e) =>
                                            onPaginate(
                                                `${
                                                    e.currentTarget
                                                        .textContent || "0"
                                                }`
                                            )
                                        }
                                    >
                                        {startArrayNumber++}
                                    </Button>
                                </PaginationItem>
                            ));
                        })()
                    )}

                    <PaginationItem>
                        <Button
                            type="button"
                            variant="secondary"
                            onClick={() =>
                                _currentPage < _lastPage &&
                                onPaginate(`${_currentPage + 1}`)
                            }
                            disabled={_currentPage === _lastPage}
                        >
                            {">"}
                        </Button>
                    </PaginationItem>
                </PaginationContent>
            </SPagination>
        )
    );
};