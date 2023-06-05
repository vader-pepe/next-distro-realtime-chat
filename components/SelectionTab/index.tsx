import styles from './style.module.css'

interface SelectionTabIF {
  tabType: string
  isSelected: boolean
  onClick: (type: string) => void
  children: string
  type: string
}

function SelectionTab({ tabType, isSelected, onClick, children, type }: SelectionTabIF) {
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