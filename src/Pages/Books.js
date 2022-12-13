import { useOutletContext, useParams } from "react-router-dom";


const Books = () => {
   const {id} = useParams()
   const obj = useOutletContext()
    return <h1>hello{id} {obj.hello}
        
    </h1>
}

export default Books;