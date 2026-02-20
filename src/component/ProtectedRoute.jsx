import { Navigate } from "react-router-dom";
import useAuth from "../context/useAuth"

export default function ProtectedRoute({ children }) {
    const { token } = useAuth(); //token coming from AuthContext provider
    if (!token) {
        return <Navigate to={'/'} />
    }
    return children
}