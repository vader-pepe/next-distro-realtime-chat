const CanvasEditor = (props:any) => {

    return (
        <div>
            <canvas
                id="c"
                height={props.canvasHeight}
                width={props.canvasWidth}
            />
        </div>
    )
}

export default CanvasEditor