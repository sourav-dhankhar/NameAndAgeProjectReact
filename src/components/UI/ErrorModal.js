import React from "react";
import ReactDOM from 'react-dom';
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

const BackDrop = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.closeErrorModal} />
    )
}

const OverLay = (props) => {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.closeErrorModal}>Okay</Button>
            </footer>
        </Card>
    )
}

const ErrorModal = (props) => {
    const closeErrorModal = () => {
        props.closeModal();
    }
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<BackDrop closeErrorModal={closeErrorModal}/>, document.getElementById('backDrop'))}
            {ReactDOM.createPortal(<OverLay title={props.title} message={props.message} closeErrorModal={closeErrorModal}/>, document.getElementById('overlay'))}
        </React.Fragment>
    );
}

export default ErrorModal;