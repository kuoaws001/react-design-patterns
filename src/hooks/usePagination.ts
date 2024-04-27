import { useMemo } from 'react'

const DOTS = '...';

const range = (start: number, end: number) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, index) => start + index);
}

const usePagination = ({
    totalCount,
    pageSize,
    siblingCount = 1,
    currentPage
}) => {
    const paginationRange = useMemo(() => {

        const totalPageCount = Math.ceil(totalCount / pageSize);
        // const totalPageNumbers = siblingCount + 5; // siblingCount + first + last + current + dots * 2
        const totalPageNumbers = 5; // first + last + current + dots * 2

        // case1
        if (totalPageNumbers >= totalPageCount) {
            return range(1, totalPageCount);
        }

        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);
        
        // case2
        const showLeftDots = leftSiblingIndex - 2 > 0;
        const showRightDots = rightSiblingIndex + 2 < totalPageCount;

        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;

        if (!showLeftDots && showRightDots) {
            const itemCount = 3 + 2 * siblingCount;
            return [...range(1, itemCount), DOTS, lastPageIndex]
        }

        if (showLeftDots && !showRightDots) {
            const itemCount = 3 + 2 * siblingCount;
            return [firstPageIndex, DOTS,  range(lastPageIndex - itemCount, lastPageIndex)]
        }

        if (showLeftDots && showRightDots) {
            return [firstPageIndex, DOTS, ...range(leftSiblingIndex, rightSiblingIndex), DOTS, lastPageIndex]
        }

    }, [totalCount, pageSize, currentPage])

    return paginationRange;
}

export default usePagination