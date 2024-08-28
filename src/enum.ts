export enum CustomerType {
    REGULAR = "REGULAR",
    GOLD = "GOLD",
    PREMIUM = "PREMIUM"
}

export type Customer = {
    id: number;
    name: string;
    type: CustomerType;
}