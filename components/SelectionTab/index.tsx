import styles from './style.module.css'

function SelectionTab({ tabType, isSelected, onClick, children, type }) {
    return (
      <div
        className={styles[`${tabType}${isSelected && tabType === 'topLevel' ? 'Selected' : ''}`]}
        onClick={() => onClick(type)}
      >
        <p
          className={tabType === 'lowLevel' && isSelected ? styles.lowLevelSelected : ''}
        >{children}</p>
      </div>
    );
  }

  export default SelectionTab