
import { use } from "react";
import AuthContext from "./AuthContext"
const useAuth = () => {
    // const context = useContext(AuthContext);
    const context = use(AuthContext); //React 19 way
    if (!context) throw new Error("useAuth must be used inside AuthProivder");
    return context;
}
export default useAuth;