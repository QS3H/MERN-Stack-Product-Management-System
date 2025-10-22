import { create } from "zustand";

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
    fetchProducts: async () => {
        try {
            const response = await fetch("/api/products");
            const data = await response.json();

            if (response.ok) {
                set({ products: data.data });
                return { success: true, message: "Products fetched successfully" };
            } else {
                return { success: false, message: data.message };
            }
        } catch (error) {
            console.error("Error fetching products:", error);
            return { success: false, message: "Failed to fetch products" };
        }
    },
    createProduct: async (newProduct) => {
        if(!newProduct.name || !newProduct.price || !newProduct.image) {
            return {success: false, message: "All fields are required"}
        }

        const response = await fetch("/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct),
        })

        const data = await response.json()

        if(response.ok) {
            set((state) => ({ products: [...state.products, data.data] }))
            return {success: true, message: "Product created successfully"}
        } else {
            return {success: false, message: data.message}
        }
    },
    deleteProduct: async (pid) => {
        const response = await fetch(`/api/products/${pid}`, {
            method: "DELETE",
        });

        const data = await response.json();

        if (response.ok) {
            set((state) => ({ products: state.products.filter((product) => product._id !== pid) }));
            return { success: true, message: data.message };
        } else {
            return { success: false, message: data.message };
        }
    },
    updateProduct: async (pid, updatedProduct) => {
        const response = await fetch(`/api/products/${pid}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedProduct),
        });

        const data = await response.json();

        if (response.ok) {
            set((state) => ({
                products: state.products.map((product) =>
                    product._id === pid ? data.data : product
                ),
            }));
            return { success: true, message: "Product updated successfully" };
        } else {
            return { success: false, message: data.message };
        }
    },
}))


