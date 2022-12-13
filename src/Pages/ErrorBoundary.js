import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ErrorBoundary = () => {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate("/", )
        },5000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <h1>THis will be the opps page</h1>
    )
   
}
export default ErrorBoundary;
