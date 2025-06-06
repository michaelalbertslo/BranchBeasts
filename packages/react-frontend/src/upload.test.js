import {
  fireEvent,
  render,
  screen,
  waitFor
} from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Upload from "./Upload.jsx";

// Mock fetch globally
global.fetch = jest.fn();

// Mock FileReader
global.FileReader = jest.fn(() => ({
  readAsArrayBuffer: jest.fn(),
  onload: null,
  onerror: null,
  result: null
}));

// Mock alert
global.alert = jest.fn();

describe("Upload Component", () => {
  beforeEach(() => {
    fetch.mockClear();
    FileReader.mockClear();
    alert.mockClear();
  });

  test("renders the upload form correctly with default values", () => {
    render(<Upload />);

    expect(
      screen.getByText("Upload Closet Item")
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("Item Name")
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("Description")
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Color")).toBeInTheDocument();
    expect(screen.getByLabelText("Type")).toBeInTheDocument();
    expect(screen.getByLabelText("Size")).toBeInTheDocument();
    expect(
      screen.getByLabelText("Favorite")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Upload Photo")
    ).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  test("renders form fields with correct default values", () => {
    render(<Upload />);

    expect(
      screen.getByDisplayValue("black")
    ).toBeInTheDocument(); // color
    expect(
      screen.getByDisplayValue("shirt")
    ).toBeInTheDocument(); // type
    expect(screen.getByDisplayValue("M")).toBeInTheDocument(); // size
    expect(screen.getByLabelText("Favorite")).not.toBeChecked();
  });

  test("updates item name when user types", () => {
    render(<Upload />);
    const itemNameInput = screen.getByLabelText("Item Name");

    fireEvent.change(itemNameInput, {
      target: { value: "Blue Jeans" }
    });
    expect(itemNameInput).toHaveValue("Blue Jeans");
  });

  test("updates description when user types", () => {
    render(<Upload />);
    const descriptionInput =
      screen.getByLabelText("Description");

    fireEvent.change(descriptionInput, {
      target: { value: "Comfortable denim jeans" }
    });
    expect(descriptionInput).toHaveValue(
      "Comfortable denim jeans"
    );
  });

  test("updates color when user selects different option", () => {
    render(<Upload />);
    const colorSelect = screen.getByLabelText("Color");

    fireEvent.change(colorSelect, {
      target: { value: "blue" }
    });
    expect(colorSelect).toHaveValue("blue");
  });

  test("updates type when user selects different option", () => {
    render(<Upload />);
    const typeSelect = screen.getByLabelText("Type");

    fireEvent.change(typeSelect, {
      target: { value: "pants" }
    });
    expect(typeSelect).toHaveValue("pants");
  });

  test("updates size when user selects different option", () => {
    render(<Upload />);
    const sizeSelect = screen.getByLabelText("Size");

    fireEvent.change(sizeSelect, { target: { value: "L" } });
    expect(sizeSelect).toHaveValue("L");
  });

  test("toggles favorite checkbox", () => {
    render(<Upload />);
    const favoriteCheckbox = screen.getByLabelText("Favorite");

    expect(favoriteCheckbox).not.toBeChecked();
    fireEvent.click(favoriteCheckbox);
    expect(favoriteCheckbox).toBeChecked();
    fireEvent.click(favoriteCheckbox);
    expect(favoriteCheckbox).not.toBeChecked();
  });

  test("renders all color options", () => {
    render(<Upload />);
    const colorSelect = screen.getByLabelText("Color");
    const colors = [
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "indigo",
      "violet",
      "black",
      "white",
      "grey"
    ];

    colors.forEach((color) => {
      expect(colorSelect).toContainHTML(
        `<option value="${color}">${color}</option>`
      );
    });
  });

  test("renders all type options", () => {
    render(<Upload />);
    const typeSelect = screen.getByLabelText("Type");
    const types = [
      "hat",
      "jacket",
      "shirt",
      "pants",
      "socks",
      "shoes"
    ];

    types.forEach((type) => {
      expect(typeSelect).toContainHTML(
        `<option value="${type}">${type}</option>`
      );
    });
  });

  test("renders all size options", () => {
    render(<Upload />);
    const sizeSelect = screen.getByLabelText("Size");
    const sizes = ["XS", "S", "M", "L", "XL"];

    sizes.forEach((size) => {
      expect(sizeSelect).toContainHTML(
        `<option value="${size}">${size}</option>`
      );
    });
  });

  test("submits form with correct data on successful submission", async () => {
    const mockResponse = { id: 1, itemName: "Test Item" };
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse
    });

    render(<Upload />);

    // Fill form
    fireEvent.change(screen.getByLabelText("Item Name"), {
      target: { value: "Test Item" }
    });
    fireEvent.change(screen.getByLabelText("Description"), {
      target: { value: "Test Description" }
    });
    fireEvent.change(screen.getByLabelText("Color"), {
      target: { value: "red" }
    });
    fireEvent.change(screen.getByLabelText("Type"), {
      target: { value: "jacket" }
    });
    fireEvent.change(screen.getByLabelText("Size"), {
      target: { value: "L" }
    });
    fireEvent.click(screen.getByLabelText("Favorite"));

    // Submit form
    fireEvent.click(screen.getByText("Submit"));

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(
        "http://localhost:8000/items",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            itemName: "Test Item",
            description: "Test Description",
            color: "red",
            type: "jacket",
            size: "L",
            isFavorite: true,
            photo: ""
          })
        }
      );
    });

    expect(alert).toHaveBeenCalledWith(
      "Item created successfully!"
    );
  });

  test("handles server error response", async () => {
    const errorResponse = { error: "Item already exists" };
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 400,
      json: async () => errorResponse
    });

    render(<Upload />);

    fireEvent.change(screen.getByLabelText("Item Name"), {
      target: { value: "Test Item" }
    });
    fireEvent.click(screen.getByText("Submit"));

    await waitFor(() => {
      expect(alert).toHaveBeenCalledWith(
        "Error: Item already exists"
      );
    });
  });

  test("handles network error", async () => {
    fetch.mockRejectedValueOnce(new Error("Network error"));

    render(<Upload />);

    fireEvent.change(screen.getByLabelText("Item Name"), {
      target: { value: "Test Item" }
    });
    fireEvent.click(screen.getByText("Submit"));

    await waitFor(() => {
      expect(alert).toHaveBeenCalledWith(
        "Network error - please try again"
      );
    });
  });

  test("handles successful image upload", async () => {
    const mockFile = new File(["test"], "test.jpg", {
      type: "image/jpeg"
    });
    const mockArrayBuffer = new ArrayBuffer(8);
    const mockImageResponse = {
      url: "http://localhost:8000/uploads/test.jpg"
    };

    // Mock FileReader
    const mockFileReader = {
      readAsArrayBuffer: jest.fn(),
      onload: null,
      onerror: null,
      result: mockArrayBuffer
    };
    FileReader.mockImplementation(() => mockFileReader);

    // Mock successful image upload
    fetch.mockResolvedValueOnce({
      status: 201,
      json: async () => mockImageResponse
    });

    render(<Upload />);

    const fileInput = screen.getByLabelText("Upload Photo");

    // Simulate file selection
    Object.defineProperty(fileInput, "files", {
      value: [mockFile],
      writable: false
    });

    fireEvent.change(fileInput);

    // Simulate FileReader onload
    mockFileReader.onload();

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(
        "http://localhost:8000/images?filename=test.jpg",
        {
          method: "POST",
          headers: {
            "Content-Type": "image/jpeg",
            "Content-Length": "4"
          },
          body: mockArrayBuffer
        }
      );
    });

    await waitFor(() => {
      expect(
        screen.getByText("Image uploaded")
      ).toBeInTheDocument();
    });
  });
  test("handles image upload failure", async () => {
    const mockFile = new File(["test"], "test.jpg", {
      type: "image/jpeg"
    });
    const mockArrayBuffer = new ArrayBuffer(8);

    // Mock FileReader
    const mockFileReader = {
      readAsArrayBuffer: jest.fn(),
      onload: null,
      onerror: null,
      result: mockArrayBuffer
    };
    FileReader.mockImplementation(() => mockFileReader);

    // Mock failed image upload
    fetch.mockResolvedValueOnce({
      status: 500
    });

    render(<Upload />);

    const fileInput = screen.getByLabelText("Upload Photo");

    // Simulate file selection
    Object.defineProperty(fileInput, "files", {
      value: [mockFile],
      writable: false
    });

    fireEvent.change(fileInput);

    // Simulate FileReader onload
    mockFileReader.onload();

    await waitFor(() => {
      expect(alert).toHaveBeenCalledWith("Image upload failed");
    });
  });

  test("does not upload image when no file is selected", () => {
    render(<Upload />);

    const fileInput = screen.getByLabelText("Upload Photo");

    // Simulate no file selection
    Object.defineProperty(fileInput, "files", {
      value: [],
      writable: false
    });

    fireEvent.change(fileInput);

    expect(FileReader).not.toHaveBeenCalled();
  });
});
