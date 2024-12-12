import {useState} from 'react'


//propse로도 받을 수 있다.
const Son = ({data,handleData2}) =>{

        const [phone,setPhone] = useState('')
        const [add,setAdd] = useState('')

        const handleClick = () => {
            handleData2({phone:phone,add:add})
        }
    return (
        <div>

            <h2>이 '자식이 받은 데이터Data' </h2>
            {data.name}<br/>
            {data.age}<br/>
            <hr />
            <input type="text" name="phone" onChange={e=>setPhone(e.target.value)} /><br />
            <input type="text" name="add" onChange={e=>setAdd(e.target.value)} /><br />
            <button onClick={handleClick}>부모에게 전송</button>

        </div>
    );
}

export default Son