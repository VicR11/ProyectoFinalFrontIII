import {describe, test, expect, afterEach} from "vitest";
import {cleanup, render, screen, waitFor } from "@testing-library/react";
import ContactForm from "../../../components/form/ContactForm";
import userEvent from "@testing-library/user-event";


afterEach(() => {
  cleanup();
});

describe("Test Contact", () => {
 

    
    test("Debe permitir escribir en los campos", async () => {
      // Arrange
      render(<ContactForm />);
    
      // Selección de inputs por su etiqueta asociada (label)
      const inputName = screen.getByLabelText(/nombre:/i);
      const inputEmail = screen.getByLabelText(/email:/i);
      const inputPhone = screen.getByLabelText(/telefono:/i);
      const inputMessage = screen.getByLabelText(/mensaje:/i);
      const buttonSubmit = screen.getByRole("button", { name: /enviar/i });
    
       // Act
      await userEvent.type(inputName, "Ana");
      await userEvent.type(inputEmail, "ana@example.com");
      await userEvent.type(inputPhone, "123456789");
      await userEvent.type(inputMessage, "Hola, este es un mensaje de prueba.");
      userEvent.click(buttonSubmit)
    
      // Assert
      expect(inputName.value).toBe("Ana");
      expect(inputEmail.value).toBe("ana@example.com");
      expect(inputPhone.value).toBe("123456789");
      expect(inputMessage.value).toBe("Hola, este es un mensaje de prueba.");
    
    });

});

