import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { ThemeContext } from '../contexts/ThemeContext';
import styles from '../styles/components/LevelUpModal.module.css';

interface LevelUpModalProps {
    onClose: () => void;
}

export function LevelUpModal({ onClose }: LevelUpModalProps) {
    const { level } = useContext(ChallengesContext);
    const { theme } = useContext(ThemeContext);

    return (
        <div className={theme === 'dark' ? `${styles.overlay} ${styles.overlayDark}` : styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>

                <strong>Parabéns</strong>
                <p>Você alcançou um novo level</p>

                <div className={styles.twitterShare}>
                    <a className={styles.twitterShareButton}
                        href="https://twitter.com/intent/tweet" >
                        <span>
                            Compartilhar no Twitter
                        <img src="icons/twitter.png" alt=""></img>
                        </span>
                    </a>
                </div>



                <button type="button" onClick={onClose}>
                    <img src="icons/close.svg" />
                </button>
            </div>
        </div >
    );
}