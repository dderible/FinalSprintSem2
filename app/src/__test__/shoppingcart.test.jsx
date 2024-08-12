import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Shoppingcart } from "../components/shoppingcart";
import { useShoppingCart } from "../components/cartcontext";
import { getProductById } from "../api";
import { BrowserRouter as Router } from "react-router-dom";
import { MemoryRouter } from "react-router-dom";

jest.mock("../components/cartcontext", () => ({
  useShoppingCart: jest.fn(),
}));

jest.mock("../api", () => ({
  getProductById: jest.fn(),
}));

describe("Shoppingcart Component", () => {
  const mockRemoveFromCart = jest.fn();

  beforeEach(() => {
    useShoppingCart.mockReturnValue({
      cartItems: [1, 2],
      removeFromCart: mockRemoveFromCart,
    });

    getProductById.mockImplementation((id) => ({
      id,
      name: `Product ${id}`,
      price: `$${id * 10}`,
      image: `http://example.com/product${id}.jpg`,
    }));
  });

  test("renders empty cart message when no items are in the cart", () => {
    useShoppingCart.mockReturnValue({
      cartItems: [],
      removeFromCart: mockRemoveFromCart,
    });

    render(
      <MemoryRouter>
        <Shoppingcart />
      </MemoryRouter>
    );

    expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
  });

  test("renders cart items correctly when there are items in the cart", async () => {
    render(
      <MemoryRouter>
        <Shoppingcart />
      </MemoryRouter>
    );

    expect(await screen.findByText("Product 1")).toBeInTheDocument();
    expect(await screen.findByText("Product 2")).toBeInTheDocument();

    expect(screen.getAllByText("Remove")).toHaveLength(2);
  });

  test('removes item from the cart when "Remove" button is clicked', () => {
    render(
      <MemoryRouter>
        <Shoppingcart />
      </MemoryRouter>
    );

    fireEvent.click(screen.getAllByText("Remove")[0]);

    expect(mockRemoveFromCart).toHaveBeenCalledWith(1);
  });

  test("contains links for continue shopping and checkout", () => {
    render(
      <MemoryRouter>
        <Shoppingcart />
      </MemoryRouter>
    );

    expect(screen.getByText("Continue Shopping")).toBeInTheDocument();
    expect(screen.getByText("Checkout")).toBeInTheDocument();
  });
});
