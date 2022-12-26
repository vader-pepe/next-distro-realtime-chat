import ClothingListItem from '../../components/ClothingListItem';
import EditorView from '../../components/EditorView';
import QuoteForm from '../../components/QuoteForm';
import SelectionTab from '../../components/SelectionTab';
import { apparelTypes, lowLevelTabs, topLevelTabs } from './mock';
import styles from './style.module.css';

const Custom = (props: any) => {

  const renderTopLevelTabs = () => {
    return topLevelTabs.map((each) =>
      <SelectionTab
        tabType="topLevel"
        key={each.id}
        type={each.id}
        isSelected={props.topLevelTab === each.id}
        onClick={props.changeTopLevelTab}
      >
        {each.name}
      </SelectionTab>);
  }

  const renderLowerLevelTabs = () => {
    return lowLevelTabs[props.topLevelTab].map((each) =>
      <SelectionTab
        tabType="lowLevel"
        key={each.id}
        type={each.id}
        isSelected={props.lowLevelTab === each.id}
        onClick={props.changeLowLevelTab}
      >
        {each.name}
      </SelectionTab>);
  }

  const renderClothingItems = () => {
    return apparelTypes[props.lowLevelTab] && apparelTypes[props.lowLevelTab].map((each) =>
      <ClothingListItem
        key={each.name}
        data={each}
        onClickProduct={(newProduct) => props.selectNewProduct(newProduct)}
      />
    );
  }

  const renderDetailView = () => {
    return (
      <QuoteForm
        productData={props.currentProduct}
        sizeData={props.orderQuantityData}
        onChangeAmount={props.changeOrderQuantity}
        onClickAddToCart={(tableData, priceData) => {
          const currentProductJSON = editor.onRequestJSON();
          props.clickAddToCart(tableData, priceData, currentProductJSON);
        }}
      />
    );
  }

  const renderContentContainer = () => {
    switch (props.topLevelTab) {
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