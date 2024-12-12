import Son01 from "./01Son"
import { useState } from "react";

    const ParentComponent = () =>{

        const data = {name: "hong",age:30};
        const [data2,setData2] = useState({})

        const handleData2 = (data)=>{
            //선처리 생략
            setData2(data)
        } 

        return (
            <div>

                <Son01 data = {data} hadleData2 = {handleData2}/>
                <hr />
                <h2>부모님 받은 데이터</h2>
                {data2.phone}
                {data2.add}
            </div>
        )
    }

    export default ParentComponent