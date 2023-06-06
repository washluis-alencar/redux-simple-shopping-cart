export const userApi = 'http://localhost:8000/products';

export const fetchAllProducts = async () => {
  const response = await fetch(userApi);
  return response.json();
}