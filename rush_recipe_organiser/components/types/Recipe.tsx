export type Recipe = {
    id: number;
    title: string;
    ingredients: string[];
    instructions: string;
    category: Category;
}

export type Category = 'ontbijt' | 'lunch' | 'diner' | 'snack';