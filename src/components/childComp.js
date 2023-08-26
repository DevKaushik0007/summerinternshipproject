function ChildComp(props){
    return(
        <>
        <div class="card">
            <div class ="container">
                <div>
                    {props.image}
                </div>
        {/* <img className="img" src={props.image} alt="Avatar" /> */}
                <h1>
                    {props.name}
                </h1>
                <p>
                    {props.message}
                </p>

            </div>

        </div>
        </>
    );
}
export default ChildComp;