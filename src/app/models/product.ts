export interface Product {
    id?: number;
    productName: string;
    amount: number;
    category: string;
    outOfStock?: boolean;
}