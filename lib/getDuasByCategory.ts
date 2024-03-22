export default async function getDuasByCategory(catId: number) {
  const res = await fetch(`http://localhost:5000/duas?catId=${catId}`);

  if (!res.ok) throw new Error("failed to fetch data duas by category");

  return res.json();
}
