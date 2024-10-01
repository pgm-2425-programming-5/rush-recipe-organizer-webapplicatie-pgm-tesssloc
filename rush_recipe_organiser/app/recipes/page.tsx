export default function Page() {
    type Recipe = {
        id: number;
        title: string;
        ingredients: string[];
        instructions: string;
        category: Category;
    }

    type Category = 'ontbijt' | 'lunch' | 'diner' | 'snack';

    return (
        <div>
            <h2>Recepten</h2>
            <div>

            </div>
        </div>
    )
};