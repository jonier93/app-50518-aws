
function Navegation () {
    function home_view () {
        window.location = "/"            
    }
    function register_view () {
        window.location = "/register_view"
    }
    function consult_view() {
        window.location = "/consult_view"
    }
    return(        
        <div id="block-nav">
            <li id="items-barra"> 
                <button id="btn-barra" onClick={home_view}> Home </button>
            </li>
            <li id="items-barra"> 
                <button id="btn-barra" onClick={register_view}> Register </button>
            </li>
            <li id="items-barra"> 
                <button id="btn-barra" onClick={consult_view}> Consult </button>
            </li>
        </div>
    )
}

export default Navegation