import styles from './style.module.css'

function CheckBoxGroup({ onChange, active, children }) {
    return (
      <div className={styles.checkboxGroup}>
        <span
          className={styles.checkbox}
          onClick={onChange}
          role="button"
        >
          {active ? <span className={styles.checkmark} /> : null}
        </span>
        {children}
      </div>
    );
  }

  export default CheckBoxGroup