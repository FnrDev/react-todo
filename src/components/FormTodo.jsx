import { useState } from "react";
import { Button, Form } from 'react-bootstrap';

export default function FormTodo({ addTodo }) {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label><b>Add Todo</b></Form.Label>
                <Form.Control
                    type="text"
                    className="input"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    placeholder="Add new todo"
                ></Form.Control>
            </Form.Group>
            <Button variant="primary mb-3" className="btn-submit" type="submit">Submit</Button>
        </Form>
    )
}