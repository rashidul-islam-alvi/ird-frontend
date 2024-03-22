export default async function getAllCategories() {
  const res = await fetch("http://localhost:5000/categories");

  if (!res.ok) throw new Error("failed to fetch data categories");

  return res.json();
}
