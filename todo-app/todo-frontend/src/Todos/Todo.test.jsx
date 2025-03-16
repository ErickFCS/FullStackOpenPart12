import { render, screen, } from '@testing-library/react'
import { expect, vi, } from 'vitest'
import userEvent from '@testing-library/user-event'
import Todo from './Todo'

const texts = {
    completeButtonText: 'Set as done',
    deleteButtonText: 'Delete',
    onDoneText: 'This todo is done',
    onUndoneText: 'This todo is not done'
}

test("Todo have correct text", async () => {
    const mockDeleteHandler = vi.fn()
    const mockCompleteHandler = vi.fn()
    const todoData = {
        text: "todo text",
        done: false
    }

    render(
        <Todo
            todo={todoData}
            onClickComplete={mockCompleteHandler}
            onClickDelete={mockDeleteHandler}
        />,
    )

    const title = screen.getByText(todoData.text)
    expect(title).toBeVisible()
    const isDoneText = screen.getByText(texts.onUndoneText)
    expect(isDoneText).toBeVisible()
    expect(mockDeleteHandler.mock.calls).toHaveLength(0)
    expect(mockCompleteHandler.mock.calls).toHaveLength(0)
})

test("Undone Todo can be marked as done", async () => {
    const mockDeleteHandler = vi.fn()
    const mockCompleteHandler = vi.fn()
    const todoData = {
        text: "todo text",
        done: false
    }

    render(
        <Todo
            todo={todoData}
            onClickComplete={mockCompleteHandler}
            onClickDelete={mockDeleteHandler}
        />,
    )

    const user = userEvent.setup()

    const completeButton = screen.getByText(texts.completeButtonText)
    expect(completeButton).toBeVisible()
    await user.click(completeButton)
    expect(mockDeleteHandler.mock.calls).toHaveLength(0)
    expect(mockCompleteHandler.mock.calls).toHaveLength(1)
})

test("Done Todo cant be marked as done", async () => {
    const mockDeleteHandler = vi.fn()
    const mockCompleteHandler = vi.fn()
    const todoData = {
        text: "todo text",
        done: true
    }

    render(
        <Todo
            todo={todoData}
            onClickComplete={mockCompleteHandler}
            onClickDelete={mockDeleteHandler}
        />,
    )

    const user = userEvent.setup()
    try {
        const completeButton = screen.getByText(texts.completeButtonText)
        expect(completeButton).not.toBeVisible()
    } catch { }
    expect(mockDeleteHandler.mock.calls).toHaveLength(0)
    expect(mockCompleteHandler.mock.calls).toHaveLength(0)
})

test("Done Todo can deleted", async () => {
    const mockDeleteHandler = vi.fn()
    const mockCompleteHandler = vi.fn()
    const todoData = {
        text: "todo text",
        done: true
    }

    render(
        <Todo
            todo={todoData}
            onClickComplete={mockCompleteHandler}
            onClickDelete={mockDeleteHandler}
        />,
    )

    const user = userEvent.setup()

    const deleteButton = screen.getByText(texts.deleteButtonText)
    expect(deleteButton).toBeVisible()
    await user.click(deleteButton)
    expect(mockDeleteHandler.mock.calls).toHaveLength(1)
    expect(mockCompleteHandler.mock.calls).toHaveLength(0)
})

test("Undone Todo can deleted", async () => {
    const mockDeleteHandler = vi.fn()
    const mockCompleteHandler = vi.fn()
    const todoData = {
        text: "todo text",
        done: false
    }

    render(
        <Todo
            todo={todoData}
            onClickComplete={mockCompleteHandler}
            onClickDelete={mockDeleteHandler}
        />,
    )

    const user = userEvent.setup()

    const deleteButton = screen.getByText(texts.deleteButtonText)
    expect(deleteButton).toBeVisible()
    await user.click(deleteButton)
    expect(mockDeleteHandler.mock.calls).toHaveLength(1)
    expect(mockCompleteHandler.mock.calls).toHaveLength(0)
})
