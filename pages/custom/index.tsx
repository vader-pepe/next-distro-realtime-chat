import { useDispatch } from 'react-redux';
import ClothingListItem from '../../components/ClothingListItem';
import EditorView from '../../components/EditorView';
import QuoteForm from '../../components/QuoteForm';
import SelectionTab from '../../components/SelectionTab';
import { changeLowLevelTab, changeOrderQuantity, changeTopLevelTab, selectNewProduct } from '../../store/app/reducer';
import { apparelTypes, lowLevelTabs, topLevelTabs } from './mock';
import styles from './style.module.css';

interface CustomPageIF {
  topLevelTab: 'apparel' | 'element' | 'detail'
  lowLevelTab: 'sweater' | 'shirt'
  currentProduct: boolean | object
  orderQuantityData: object
}

const Custom = ({
  topLevelTab,
  lowLevelTab,
  currentProduct,
  orderQuantityData,
  ...props
}: CustomPageIF) => {
  // TODO: when success adding to cart, clear canvas
  const dispatch = useDispatch()

  const renderTopLevelTabs = () => {
    return topLevelTabs.map((each) =>
      <SelectionTab
        tabType="topLevel"
        key={each.id}
        type={each.id}
        isSelected={topLevelTab === each.id}
        onClick={(param) => dispatch(changeTopLevelTab(param))}
      >
        {each.name}
      </SelectionTab>);
  }

  const renderLowerLevelTabs = () => {
    return lowLevelTabs[topLevelTab].map((each) =>
      <SelectionTab
        tabType="lowLevel"
        key={each.id}
        type={each.id}
        isSelected={lowLevelTab === each.id}
        onClick={(param) => dispatch(changeLowLevelTab(param))}
      >
        {each.name}
      </SelectionTab>);
  }

  const renderClothingItems = () => {
    return apparelTypes[lowLevelTab] && apparelTypes[lowLevelTab].map((each) =>
      <ClothingListItem
        key={each.name}
        data={each}
        onClickProduct={(param) => dispatch(selectNewProduct(param))}
      />
    );
  }

  const renderDetailView = () => {
    return (
      <QuoteForm
        productData={currentProduct}
        sizeData={orderQuantityData}
        onChangeAmount={(param) => dispatch(changeOrderQuantity(param))}
        onClickAddToCart={(tableData, priceData) => {
          const currentProductJSON = editor.onRequestJSON();
          props.clickAddToCart(tableData, priceData, currentProductJSON);
        }}
      />
    );
  }

  const renderContentContainer = () => {
    switch (topLevelTab) {
      case 'apparel':
        return renderClothingItems();
      case 'element':
        return null;
      case 'detail':
        return renderDetailView();
      default:
        return null;
    }
  }

  return (
    <div className={styles.customContainer}>
      {/* <Loading
                show={props.isFetching}
                color="red"
            /> */}
      <div className={styles.customContainerContent}>
        <div className={styles.customContainer__editor}>
          <div className={styles.customContainer__editorWindow}>
            <div className={styles.customContainer__editorWindowContainer}>
              <div className={styles.containerTabContainer}>
                {renderTopLevelTabs()}
              </div>
              {/* {lowLevelTabs[props.topLevelTab] ?
                                <div className={styles.containerSubContainer}>
                                {renderLowerLevelTabs()}
                                </div>
                            : null
                            } */}
              <div className={styles.containerSubContainer}>
                {renderLowerLevelTabs()}
              </div>
              <div
                className={styles.containerItemsContainer}
                style={{
                  //   padding: props.topLevelTab !== 'detail' ? 20 : 0,
                  padding: 20
                }}
              >
                {renderContentContainer()}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.customContainer__preview}>
          {props.currentProduct ?
            <EditorView
              data={props.currentProduct}
              selectNewColor={props.selectNewProductColor}
              onImageUpload={(fileName, imageData) => props.uploadImageInit(fileName, imageData)}
              newestImageUploadUrl={props.newestUploadedImage}
              ref={(editorView) => {
                editor = editorView;
              }}
            />
            :
            null}
        </div>
      </div>
    </div>
  );
}

export default Custom