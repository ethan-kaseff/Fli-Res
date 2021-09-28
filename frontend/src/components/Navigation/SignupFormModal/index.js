import React, { useState } from 'react';
import { Modal } from '../../../context/modal.js';
import SignupForm from './SignupForm';

function SignupFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}>Sign Up</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SignupForm />
                </Modal>
            )}
        </>
    );
}

export default SignupFormModal;