export namespace Props {
    export interface PricingCard {
        type: string;
        description: string;
        benefits: string[];
        price: string;
        disabled: boolean;
        animationDelay: number;
        moveMainPage: (
            e?: React.MouseEvent<HTMLButtonElement, MouseEvent>
        ) => void;
    }
}
