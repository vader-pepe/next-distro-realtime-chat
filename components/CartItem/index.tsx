import styles from '../../pages/carts/styles.module.css';
/*
This is the worst function I've ever
written probably if you see this please
tell Paul Xu at paulxuca@gmail.com to
shoot himself in the foot.
*/

function CartItem({ data }: { data: any }) {
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemDetails}>
        <div className={styles.cartItemContainer}>
          <span className={styles.cartItemName}>{data.product.name}</span>
          <div className={styles.cartDetailsTable}>
            <table className={styles.tableCart}>
              <tbody>
                <tr>
                  <td
                    style={{
                      textTransform: 'uppercase',
                    }}
                  >
                    Test
                    <hr
                      style={{
                        width: 30,
                        left: 0,
                        height: 2,
                        backgroundColor: 'black',
                        border: 'none',
                        margin: '5px 0px',
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      fontSize: 14,
                      fontWeight: 500,
                    }}
                  >
                    Test
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={styles.costContainer}>
            <span className={styles.costContainerPrice}>${data.orderPrice}</span>
          </div>
        </div>
      </div>
      <div
        className={styles.cartItemPicture}
        style={{
          backgroundImage: `url(${data.product.image})`,
        }}
      />
    </div>
  );
}

export default CartItem
