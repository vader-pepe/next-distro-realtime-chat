import styles from './style.module.css'

const ColorPicker = ({key, onChange}) => {
    return (
        <li className={styles.colorPickerLI}>
          <div className={styles.editorButtonContainer}>
            <button
              onClick={() => setState({ colorPickerOpen: !state.colorPickerOpen })}
            >
              <div
                className={styles.colorPickerCircle}
                style={{
                  backgroundColor: state.value.hex,
                }}
              />
            </button>
          </div>
          <div className={styles.colorPickerContainer}>
            <div
              className={styles.colorPickerContainerOverlay}
              ref={(cPContainer) => {
                if (cPContainer) container = cPContainer.children[0];
              }}
            >
            {/* {state.colorPickerOpen ?
              <SketchPicker
                onChange={onChangeColor}
                color={state.value.rgb}
              /> :
              null} */}
            </div>
          </div>
        </li>
      );
}

export default ColorPicker