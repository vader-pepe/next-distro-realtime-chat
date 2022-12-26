import Icon from '../Icon';
import styles from './styles.module.css'

const Navigation = () => {
    return (
        <div className={styles.appNavigation}>
            <div className={styles.appNavigationContainer}>
                <div
                    className={styles.brandLogo}
                    style={{
                        height: '40px',
                        width: '40px',
                        color: 'black'
                    }}
                />
                <div className={styles.appNavigationItems}>
                    <div className={styles.appNavigationLinks}>

                    </div>
                    <div className={styles.appNavigationProfileSection}>
                        <div
                            className={styles.shoppingCartToggle}
                            role="button"
                            // onClick={props.openCart}
                        >
                            <Icon type="bag" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation
