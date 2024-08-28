export enum CustomerType {
    REGULAR,
    GOLD,
    PREMIUM
}

export type Customer = {
    id: number;
    name: string;
    type: CustomerType;
}