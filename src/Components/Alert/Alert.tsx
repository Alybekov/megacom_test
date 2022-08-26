import React, {FC} from 'react';

interface AlertProps {
    message: string;
    onClose: () => void
}

const Alert: FC<AlertProps> = ({message, onClose}) => {

    return (
        <div className="modal is-active">
            <div className="modal-background" onClick={onClose}></div>
            <div className="modal-card">
                <header>
                    <p>{message}</p>
                </header>
                <footer style={{justifyContent: "center"}}>
                    <button onClick={onClose}>Close</button>
                </footer>
            </div>
        </div>
    );
};

export default Alert;