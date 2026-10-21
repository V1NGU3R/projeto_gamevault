import axios from "axios";

const api = axios.create({
  baseURL: "https://api.upcitemdb.com/prod/trial",
});

export async function searchProductByBarcode(barcode) {
  if (!barcode) {
    return null;
  }

  try {
    const response = await api.get("/lookup", {
      params: {
        upc: barcode,
      },
    });

    const items = response.data?.items || [];

    if (items.length === 0) {
      return null;
    }

    const product = items[0];

    return {
      barcode,
      title: product.title || "",
      description: product.description || "",
      brand: product.brand || "",
      category: product.category || "",
      image: product.images?.[0] || "",
    };
  } catch (error) {
    console.log(
      "ERRO NA API DE BARCODE:",
      error.response?.data || error.message,
    );

    throw error;
  }
}
