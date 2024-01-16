function NavBar(props) {
    let { functionMore, functionLess } = props
    return (
        <div>
            <button onClick={functionLess} > Previous </button>
            <button onClick={functionMore}> Next </button>
        </div>
    );
}

export default NavBar