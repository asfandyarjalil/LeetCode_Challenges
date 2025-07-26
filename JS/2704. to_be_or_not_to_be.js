function expect(val) {
    return {
        toBe: (otherVal) => {
            if (val === otherVal) {
                return true;
            }
            throw new Error('Not Equal');
        },
        notToBe: (otherVal) => {
            if (val !== otherVal) {
                return true;
            }
            throw new Error('Equal');
        },
    };
}
