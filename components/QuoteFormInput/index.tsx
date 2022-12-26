import styles from './style.module.css'

function QuoteFormInput({ value, onChange, size }) {
  return (
    <div
      className={styles.sizeInputCard}
      style={{
        borderLeftWidth: value && Number(value) !== 0 ? '8px' : '0px',
      }}
    >
      <div className={styles.sizeInputCardContainer}>
        <span className={styles.sizeText}>{size}</span>
        <input
          type="number"
          min="0"
          value={value || 0}
          onChange={onChange}
          className={styles.orderQuantityInputField}
        />
      </div>
    </div>
  );
}

export default QuoteFormInput