export default function AddRecipe() {
    return (
        <form className="pt-8">
            <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Titel</label>
                <input type="text" id="title" name="title" className="mt-1 p-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-4">
                <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">Ingrediënten</label>
                <input type="text" id="ingredients" name="ingredients" className="mt-1 p-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-4">
                <label htmlFor="instructions" className="block text-sm font-medium text-gray-700">Bereidingswijze</label>
                <textarea id="instructions" name="instructions" className="mt-1 p-2 border border-gray-300 rounded"></textarea>
            </div>
            <div className="mb-4">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">Categorie</label>
                <select id="category" name="category" className="mt-1 p-2 border border-gray-300 rounded">
                    <option value="ontbijt">Ontbijt</option>
                    <option value="lunch">Lunch</option>
                    <option value="diner">Diner</option>
                    <option value="snack">Snack</option>
                </select>
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Opslaan</button>
        </form>
    )
}