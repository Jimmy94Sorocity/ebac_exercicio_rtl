import { fireEvent, render, screen } from "@testing-library/react";
import PostComment from "..";

describe("Teste para o componente PostComment", () => {
  test("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  test("Deve adicionar um comentário", () => {
    render(<PostComment />);
    const textarea = screen.getByTestId("textarea-comments");

    fireEvent.change(textarea, { target: { value: "Primeiro comentário" } });
    fireEvent.submit(screen.getByTestId("form-comments"));

    fireEvent.change(textarea, { target: { value: "Segundo comentário" } });
    fireEvent.submit(screen.getByTestId("form-comments"));

    const commentsList = screen.getByTestId("post-comments");
    expect(commentsList.children.length).toBe(2);
  });
});
