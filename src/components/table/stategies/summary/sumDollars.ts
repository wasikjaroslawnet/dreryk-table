const regexp = new RegExp(/^\$?[0-9]+(\.[0-9][0-9])?$/);

export function sumDollars(data: any[] | undefined): string {
    if(!data) {
        return '$0';
    }

    const result = data
        .filter(value => regexp.test(value))
        .reduce((result, value) => {
            const amount = value.slice(1);
            const nextValue = Number(amount);
            return result + nextValue;
        }, 0);

    return `\$${result}`;
}
