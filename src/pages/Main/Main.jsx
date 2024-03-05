
import Header from "../../components/Header/Header"



function Main(props){
    return(
        <>
        <Header/>
        {props.children}
        </>

    )
}

export default Main