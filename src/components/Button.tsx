import { ReactNode } from 'react'
import styles from '../styles/components/Button.module.css';


interface ButtonProps {
    onClick?: () => void;
    className: string;
    children: ReactNode;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
}

export function Button(props: ButtonProps) {
    return (
        <div className={styles.mainContainer}>
            <button
                {...props}
            >
                {props.children}
            </button>
        </div>
    )
}