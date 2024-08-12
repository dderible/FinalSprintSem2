import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "../components/productdetails";
import { useShoppingCart } from "../components/cartcontext";
import { getProductById } from "../api";

jest.mock("../api", () => ({
  getProductById: jest.fn(),
}));

jest.mock("../components/cartcontext", () => ({
  useShoppingCart: jest.fn(),
}));

describe("ProductDetails", () => {
  const mockProduct = {
    id: 1,
    name: "Test Product",
    description: "This is a test product",
    price: "$100",
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders loading state initially", () => {
    getProductById.mockReturnValue(null);
    useShoppingCart.mockReturnValue({ addToCart: jest.fn() });

    render(
      <MemoryRouter initialEntries={["/product/1"]}>
        <Routes>
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("renders product details correctly", () => {
    getProductById.mockReturnValue(mockProduct);
    useShoppingCart.mockReturnValue({ addToCart: jest.fn() });

    render(
      <MemoryRouter initialEntries={["/product/1"]}>
        <Routes>
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.price)).toBeInTheDocument();
  });

  test("calls addToCart with correct product id", () => {
    const mockAddToCart = jest.fn();
    getProductById.mockReturnValue(mockProduct);
    useShoppingCart.mockReturnValue({ addToCart: mockAddToCart });

    render(
      <MemoryRouter initialEntries={["/product/1"]}>
        <Routes>
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("Add To Cart"));
    expect(mockAddToCart).toHaveBeenCalledWith(mockProduct.id);
  });
});
