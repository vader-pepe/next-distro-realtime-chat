import styles from './style.module.css'

const FontPicker = ({key, onChange}) => {
    return (
        <div className={styles.fontPickerDropdown}>
          <ul
            className={styles.fontList}
            ref={(fontPicker) => {
              fontPicker = fontPicker;
            }}
          >
            {fonts.map((each) =>
              <li
                key={each}
                style={{
                  fontFamily: each,
                }}
              >
                <button onClick={() => props.onChange(each)}>
                {each}
                </button>
              </li>
            )}
          </ul>
        </div>
      );
}

export default FontPicker