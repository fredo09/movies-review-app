
export class Formatter {
    public static currencyMoney(value: number): string {
        return new Intl.NumberFormat('en-US', {
            style: 'currency', 
            currency: 'USD'
        }).format(value);
    } 
}