import Icon from "../Icon";
import styles from './style.module.css'

function RoundedButton({ onClick, icon, text }) {
    return (
        <span className={styles.buttonWrapper}>
            <button
                onClick={onClick}
            >
                <Icon type={icon} style={{ marginBottom: 3, marginRight: 10 }} />
                {text}
            </button>
        </span>

    );
}

export default RoundedButton