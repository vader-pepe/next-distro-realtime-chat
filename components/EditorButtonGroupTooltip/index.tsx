import styles from './style.module.css'

function EditorButtonGroupTooltip({ text }) {
    return (
      <span className={styles.buttonToolTip}>
        {text}
      </span>
    );
  }

  export default EditorButtonGroupTooltip