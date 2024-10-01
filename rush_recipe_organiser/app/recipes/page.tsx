'use client'

import { useEffect, useState } from "react";

type Recipe = {
    id: number;
    title: string;
    ingredients: string[];
    instructions: string;
    category: Category;
}

type Category = 'ontbijt' | 'lunch' | 'diner' | 'snack';

export default function Page() {
    const [recipes, setRecipes] = useState<Recipe[]>([]);


    useEffect(() => {
        fetch('/data/recipes.json')
            .then((res) => res.json())
            .then((data) => setRecipes(data.recipes))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Recepten</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {recipes.map((recipe) => (
                <div key={recipe.id} className="bg-white shadow-md rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
                <p className="text-gray-700 mb-2">{recipe.ingredients.join(', ')}</p>
                <p className="text-gray-600 mb-2">{recipe.instructions}</p>
                <p className="text-gray-500">{recipe.category}</p>
                </div>
            ))}
            </div>
        </div>
    )
};