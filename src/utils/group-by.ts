export const groupBy = <T>(
    list: Array<T>,
    predicate: (value: T, index: number, array: T[]) => string
): Array<{ type: string; data: Array<T> }> => {
    const groupedData = list.reduce((acc, value, index, array) => {
        (acc[predicate(value, index, array)] ||= []).push(value);
        return acc;
    }, {} as { [key: string]: Array<T> });

    return Object.keys(groupedData).map((key) => ({
        type: key,
        data: groupedData[key],
    }));
};