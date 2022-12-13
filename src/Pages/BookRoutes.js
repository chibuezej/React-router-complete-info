import { Route, Routes } from "react-router-dom"
import BookLayOut from "./BookLayout"
import BookList from "./BookLIst"
import Books from "./Books"
import NewBook from "./NewBook"

const BookRoutes = () => {
    return(
        <>
        <Routes>
            <Route element={<BookLayOut />}>
            <Route index element={<BookList />} />
         <Route path=":id" element={<Books />} />
       <Route path="new" element={<NewBook />} />
       </Route>
        </Routes>
        </>
  
    )
}

export default BookRoutes;