export class Invoice {
    // readonly client: string;
    // private details: string;
    // public amount: number;

    // constructor(client: string, details: string, amount: number) {
    constructor(
        // Automatic property assignment requires modifiers
        readonly client: string,
        private details: string,
        public amount: number
    ) {}

    format () {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}