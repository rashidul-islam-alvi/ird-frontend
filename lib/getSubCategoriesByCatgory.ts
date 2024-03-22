export default async function getSubCategoriesByCategory(catId: number) {
  const res = await fetch(
    `http://localhost:5000/sub-categories?catId=${catId}`
  );

  if (!res.ok) throw new Error("failed to fetch data duas by subcategory");

  return res.json();
}
