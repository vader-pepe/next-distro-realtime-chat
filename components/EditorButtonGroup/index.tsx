import ColorPicker from '../ColorPicker';
import EditorButtonGroupTooltip from '../EditorButtonGroupTooltip';
import FontPicker from '../FontPicker';
import Icon from '../Icon';
import styles from './style.module.css'

function EditorButtonGroup({ buttons }) {
    return (
        <ul className={styles.editorButtonGroup}>
            {buttons.map((each) => {
                switch (each.type) {
                    case 'color':
                        return (
                            <ColorPicker
                                key={each.type}
                                onChange={each.onChange}
                            />
                        );
                    case 'font':
                        return (
                            <FontPicker
                                key={each.type}
                                onChange={each.onChange}
                            />
                        );
                    default:
                        return (
                            <li
                                key={each.type}
                            >
                                <div className={styles.editorButtonContainer}>
                                    <EditorButtonGroupTooltip
                                        text={each.tooltip}
                                    />
                                    <button
                                        onClick={each.onClick}
                                    >
                                        <Icon
                                            type={each.type}
                                        />
                                    </button>
                                </div>
                            </li>
                        );
                }
            })}
        </ul>
    );
}

export default EditorButtonGroup