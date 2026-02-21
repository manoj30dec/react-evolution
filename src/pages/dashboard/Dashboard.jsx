import { useCallback, useState } from "react"
import Child from "./Child";

const Dashboard = () => {
    const [count, setCount] = useState(0);
    const [listenChild, setListenChild] = useState("")
    // const [childInfo, setChildInfo] = useState(0)
    const childInfo = count * 2; //If you can calculate something during render, don’t store it in state.Just compute it directly:
    const increase = () => {
        setCount(count + 1)
    }
    // const updateParent = (info) => {
    //     setListenChild(info)
    // }

    const updateParent = useCallback((info) => {
        setListenChild(info);
    }, []);
    // useEffect(() => {
    //     setChildInfo(count * 2)
    // }, [count])
    console.log("Parent")
    return (
        <>
            <h1>Dashboard</h1>
            <h2>Demo of useMemo & useCallback usage</h2>
            <h2>Count:={count}</h2>
            <button className="btn btn-primary" onClick={increase}>Increment</button><br />
            <h3>Updated by child:= {listenChild}</h3>
            <hr />
            {/* <Child /> */}
            <Child childInfo={childInfo} updateParent={updateParent} />

        </>
    )
}

export default Dashboard