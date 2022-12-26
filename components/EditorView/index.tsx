import CanvasEditor from "../CanvasEditor";
import EditorButtonGroup from "../EditorButtonGroup";
import styles from "./style.module.css";

const EditorView = (props:any) => {
    return (
        <div className={styles.editorViewElement}>
          <div className={styles.customContainer__editorControls}>
            <EditorButtonGroup
              buttons={[{
                type: 'arrowUp',
                tooltip: 'Move Layer forwards',
                onClick: () => canvasContainer.sendObjectForward(),
              }, {
                type: 'arrowDown',
                tooltip: 'Move Layer backwards',
                onClick: () => canvasContainer.sendObjectBackward(),
              }, {
                type: 'trashBin',
                tooltip: 'Delete selected element',
                onClick: () => canvasContainer.deleteActiveObject(),
              }]}
            />
            <EditorButtonGroup
              buttons={[{
                type: 'plus',
                tooltip: 'Add Text',
                onClick: () => canvasContainer.addTextElement(),
              }, {
                type: 'upload',
                tooltip: 'Upload image',
                onClick: () => onClickFileUpload(),
              },
              ]}
            />
            <EditorButtonGroup
              buttons={[
                {
                  type: 'font',
                  onChange: (newFontFamily) => canvasContainer.onChangeFontFamily(newFontFamily),
                }, {
                  type: 'color',
                  onChange: (color) => canvasContainer.onChangeTextColor(color),
                },
              ]}
            />
            <input
              type="file"
              className={styles.hiddenFileUpload}
              id="hiddenFileUpload"
              accept="image/*"
            />
          </div>
          <div className={styles.previewContainer}>
            <div className={styles.editorViewClothing}>
              <div className={styles.editorViewClothingContainer}>
                <div
                  className={styles.clothingCanvas}
                  style={{
                    backgroundImage: `url(${props.data.image})`,
                  }}
                >
                  <div
                    id="canvasContainer"
                    className={styles.canvasContainer}
                  >
                    <CanvasEditor
                      ref={(canvas) => {
                        canvasContainer = canvas;
                      }}
                      canvasHeight={400}
                      canvasWidth={400}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.editorViewControls}>
              <div className={styles.editorViewControlsContainer}>
                  {props.data.variants.map((each) =>
                    <button
                      onClick={() => selectNewcolor(each.name)}
                      key={each.name}
                    >
                      <div
                        className={styles.eachColorDot}
                        style={{
                          backgroundColor: each.name,
                        }}
                      />
                    </button>
                  )}
              </div>
            </div>
          </div>
        </div>
      );
}

export default EditorView;