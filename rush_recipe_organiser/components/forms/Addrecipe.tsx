'use client'

import { useState } from "react";

type AddRecipeProps = {
    recipes: Recipe;
    setRecipes: (recipe: Recipe) => void;
}

type Recipe = {
    id: number;
    title: string;
    ingredients: string[];
    instructions: string;
    category: Category;
}

type Category = 'ontbijt' | 'lunch' | 'diner' | 'snack';

export default function AddRecipe({recipes, setRecipes}: AddRecipeProps) {
    const [title, setTitle] = useState<string>('');
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [instructions, setInstructions] = useState<string>('');
    const [category, setCategory] = useState<Category>('lunch');

    const onClick = (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault();

        const newRecipe: Recipe = {
            id: 5,
            title: title,
            ingredients: ingredients,
            instructions: instructions,
            category: category
        }

        setRecipes([...recipes, newRecipe]);

    }

    return (
        <form className="pt-8">
            <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Titel</label>
                <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-4">
                <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">Ingrediënten</label>
                <input type="text" id="ingredients" name="ingredients" value={ingredients}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIngredients(e.target.value.split(','))}
          className="mt-1 p-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-4">
                <label htmlFor="instructions" className="block text-sm font-medium text-gray-700">Bereidingswijze</label>
                <textarea id="instructions" name="instructions" value={instructions}
          onChange={(e) => setInstructions(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded"></textarea>
            </div>
            <div className="mb-4">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">Categorie</label>
                <select id="category" name="category" value={category}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value as Category)}
          className="mt-1 p-2 border border-gray-300 rounded">
                    <option value="ontbijt">Ontbijt</option>
                    <option value="lunch">Lunch</option>
                    <option value="diner">Diner</option>
                    <option value="snack">Snack</option>
                </select>
            </div>
            <button onClick={onClick} type="submit" className="bg-blue-500 text-white p-2 rounded">Opslaan</button>
        </form>
    )
}