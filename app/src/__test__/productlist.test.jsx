import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import ProductList from "../components/productlist";
import { useShoppingCart } from "../components/cartcontext";
import { getProducts } from "../api";

jest.mock("../components/cartcontext", () => ({
  useShoppingCart: jest.fn(),
}));

jest.mock("../api", () => ({
  getProducts: jest.fn(),
}));

describe("ProductList Component", () => {
  const mockAddToCart = jest.fn();
  const mockCartItemAmount = 2;

  beforeEach(() => {
    useShoppingCart.mockReturnValue({
      addToCart: mockAddToCart,
      cartItemAmount: mockCartItemAmount,
    });

    getProducts.mockReturnValue([
      { id: 1, name: "Product 1", price: "$10", image: "image1.jpg" },
      { id: 2, name: "Product 2", price: "$20", image: "image2.jpg" },
    ]);
  });

  test("renders products correctly", async () => {
    render(
      <MemoryRouter>
        <ProductList />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Product 1")).toBeInTheDocument();
      expect(screen.getByText("$10")).toBeInTheDocument();
      expect(screen.getByText("Product 2")).toBeInTheDocument();
      expect(screen.getByText("$20")).toBeInTheDocument();
    });
  });

  test("shows product details link for each product", async () => {
    render(
      <MemoryRouter>
        <ProductList />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getAllByText("Product Details")).toHaveLength(2);
    });
  });

  test('clicking "Add To Cart" button calls addToCart with correct id', async () => {
    render(
      <MemoryRouter>
        <ProductList />
      </MemoryRouter>
    );

    const addToCartButtons = screen.getAllByText("Add To Cart (2)");

    fireEvent.click(addToCartButtons[0]);
    expect(mockAddToCart).toHaveBeenCalledWith(1);

    fireEvent.click(addToCartButtons[1]);
    expect(mockAddToCart).toHaveBeenCalledWith(2);
  });
});
