export async function fetchData<T>(url: string): Promise<{ data: T }> {
  const response = await fetch(url);
  return response.json();
}
