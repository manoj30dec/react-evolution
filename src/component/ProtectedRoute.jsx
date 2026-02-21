import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../context/useAuth"

export default function ProtectedRoute({ children }) {
    const { token } = useAuth(); //token coming from AuthContext provider
    const location = useLocation()
    if (!token) {
        // return <Navigate to={'/'} />
        return <Navigate to={'/'} state={{ from: location }} replace />
    }
    return children
}