export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
}

export interface CartItem {
    productId: number;
    quantity: number;
}

export interface Cart {
    items: CartItem[];
    totalAmount: number;
}