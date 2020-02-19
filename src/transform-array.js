module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw Error;
    if (arr.length === 0) return [];

    function double(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === '--double-next') {
                doubleNext(arr, i);

                return double(arr);
            } else if (arr[i] === '--double-prev') {
                doublePrev(arr, i);

                return double(arr);
            } else {
                continue;
            }
        }

        return arr;
    }

    function discard(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === '--discard-next') {
                discardNext(arr, i);

                return discard(arr);
            } else if (arr[i] === '--discard-prev') {
                discardPrev(arr, i);

                return discard(arr);
            } else {
                continue;
            }
        }

        return arr;
    }

    function discardNext(arr, index) {
        if ((index + 1) < arr.length) {
            arr.splice(index, 2);
        } else {
            arr.splice(index, 1);
        }

        return arr;
    }

    function discardPrev(arr, index) {
        if (index > 0) {
            arr.splice(index - 1, 2);
        } else {
            arr.splice(index, 1);
        }

        return arr;
    }

    function doubleNext(arr, index) {
        if ((index + 1) < arr.length) {
            const nextElement = arr[index + 1];
            arr.splice(index, 1, nextElement);
        } else {
            arr.splice(index, 1);
        }

        return arr;
    }

    function doublePrev(arr, index) {
        if (index > 0) {
            const prevElement = arr[index - 1];
            arr.splice(index, 1, prevElement);
        } else {
            arr.splice(index, 1);
        }

        return arr;
    }

    double(arr);
    discard(arr);

    return arr;
};
