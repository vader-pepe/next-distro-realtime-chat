import CheckBoxGroup from '../CheckBoxGroup';
import QuoteFormInput from '../QuoteFormInput';
import QuoteFormTable from '../QuoteFormTable';
import RoundedButton from '../RoundedButton';
import styles from './style.module.css'

const QuoteForm = ({
  productData,
  sizeData,
  onChangeAmount,
  onClickAddToCart,
  ...props
}) => {
  return (
    <div className={styles.quoteForm}>
      <div className={styles.quoteFormHeader}>
        <span className={styles.productNameHeader} style={{ margin: 0 }}>{quoteFormData.orderDetailsHeader}</span>
        <span className={styles.productName}>{productData.name}</span>
      </div>
      <div className={styles.quoteFormScroll}>
        <div className={styles.quoteFormContainer}>
          <span className={styles.productNameHeader}>{quoteFormData.orderSizes}</span>
          <span className={styles.personalizationPrice}>{quoteFormData.pickSize}</span>
          <div className={styles.quoteFormSizes}>
            {productData.sizes.map((each) =>
              <QuoteFormInput
                value={sizeData.get(each)}
                onChange={(e) => onChangeValues(Number(e.target.value), each)}
                size={each}
                key={each}
              />
            )}
          </div>
          <div className={styles.personalizationOptions}>
            <span className={styles.productNameHeader}>{quoteFormData.personalizationOptions}</span>
            <div
              style={{
                flex: 1,
                flexDirection: 'row',
                display: 'flex',
              }}
            >
              <CheckBoxGroup
                active={sizeData.get('addNames')}
                onChange={() => onChangeValues(!sizeData.get('addNames'), 'addNames')}
              >
                <span>Add Names <span className={styles.personalizationPrice}>$4.50 per item</span></span>
              </CheckBoxGroup>
              <CheckBoxGroup
                active={sizeData.get('addNumbers')}
                onChange={() => onChangeValues(!sizeData.get('addNumbers'), 'addNumbers')}
              >
                <span>Add Numbers <span className={styles.personalizationPrice}>$2.50 per item</span></span>
              </CheckBoxGroup>
            </div>
          </div>
          {sizeData.get('addNames') || sizeData.get('addNumbers') ?
            <div className={styles.personalizationOptions}>
              <span className={styles.productNameHeader}>Personalization Details</span>
              <span className={styles.personalizationPrice}>Enter your full list of names and numbers for accurate pricing</span>
              <QuoteFormTable
                data={sizeData}
              />
              <span className={styles.productNameHeader}>Personalization Note</span>
              <textarea
                className={styles.textAreaNotes}
                placeholder="Include details about names, numbers and design details"
                value={sizeData.get('personalizationNotes')}
                onChange={(e) => onChangeValues(e.target.value, 'personalizationNotes')}
              />
            </div> : null}
          <div className={styles.personalizationOptions}>
            <span className={styles.productNameHeader}>Additional Notes</span>
            <textarea
              className={styles.textAreaNotes}
              placeholder="Enter notes to our production team"
              value={sizeData.get('additionalNotes')}
              onChange={(e) => onChangeValues(e.target.value, 'additionalNotes')}
            />
          </div>
        </div>
      </div>
      <div className={styles.quoteFormDetails}>
        <div className={styles.quoteFormDetailsContainer}>
          <div
            style={{
              flex: 1,
            }}
          >
            <span className={styles.productNameHeader}>Subtotal</span>
            <span className={styles.totalCostText}>${totalEntryCost(sizeData, productData.price)}</span>
          </div>
          <div
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            <RoundedButton
              text="Add to Cart"
              icon="shoppingCart"
              onClick={() => props.onClickAddToCart(getTableData(), totalEntryCost(sizeData, productData.price))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuoteForm