import React from 'react';
import './Modal.scss';
import Form from '../Form/Form';
const Modal = ({close}) => (

<div className="modal__wrapper">
    <Form close={close} />
</div>
)


export default Modal;