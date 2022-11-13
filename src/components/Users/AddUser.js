import React, { useRef, useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    const [error, setError] = useState(null);

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredUserAge = ageInputRef.current.value;
        const enteredUserName = nameInputRef.current.value;
        console.log(enteredUserName, enteredUserAge);
        if (enteredUserName.trim() === "" || enteredUserAge.trim() === "") {
            setError({
                title: 'Empty input',
                message: "Name and age can't be empty"
            })
            return;
        }
        if (+enteredUserAge < 0) {
            setError({
                title: 'Age error',
                message: "Age can't be negative"
            })
            return;
        }
        props.onAddUser({
            id: `s_${enteredUserAge}_${Math.random()}`,
            name: enteredUserName,
            age: enteredUserAge
        })
        nameInputRef.value = '';
        ageInputRef.value = '';
    }

    const handleCloseModal = (props) => {
        setError(null);
    }
    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} closeModal={handleCloseModal} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" ref={nameInputRef} />
                    <label htmlFor="userage">Age (Years)</label>
                    <input id="userage" type="number" ref={ageInputRef} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
}

export default AddUser;