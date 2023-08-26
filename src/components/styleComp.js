import "./styleComp.css" 
function StyleComp(){
    const stylesVar={
        backgroundColor: "#61dafb",
        margin:0,
        padding:20,
        textAlign: "center",

    };
    return(
        <>
        <div style={stylesVar}> 
            <h1>
                check the div
            </h1>
            <p className="para">lorem test</p>
        </div>
        </>
    );
};
export default StyleComp;