import {useState} from 'react';

const Greeting = ()=>{
    const [textChange, setTextChnage] = useState(false);
    const onClickhandler =()=>{
        setTextChnage(true);
    }
    return (
        <div>
            <h1>Hello World</h1>
            <h1>learn react</h1>

            {!textChange && <h1>good to see you</h1>}
        {textChange && <p>Text chnaged</p>}
        <button onClick={onClickhandler}>Click</button>
        </div>
    );
};

export default Greeting;