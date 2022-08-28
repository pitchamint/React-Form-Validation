import { useState } from 'react'
import './FormComponent.css'

const FormComponent = () => {
    //สร้าง state ขึ้นมาให้ครบกับจำนวน input เพื่อที่จะเก็บค่าที่จะเปลี่ยนแปลงใน inputได้ (ค่าที่เรากรอง)
    const[userName,setUserName] = useState('')
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[repassword,setRePassword] = useState('')

    //สร้าง state นี้ขึ้นมาเพื่อแจ้งเตือน error โดยจะแจ้งเตือนก็ต่อเมื่อมีการกดปุ่ม submit
    const [errorUserName,setErrorUserName] = useState('')
    const [errorEmail,setErrorEmail] = useState('')
    const [errorPasword,setErrorPassword] = useState('')
    const [errorRePassword,setErrorRePassword] = useState('')

    //สร้าง state ในการกำหนดสีของฟอร์มเมื่อกรอกข้อมูลผิด red/ถูก green
    const[userNameColor,setUserNameColor] = useState('')
    const[emailColor,setEmailColor] = useState('')
    const[passwordColor,setPasswordColor] = useState('')
    const[repasswordColor,setRepasswordColor] = useState('')

    //สร้าง eventให้กับ ฟอร์ม
    const validateForm = (e) => {
        e.preventDefault()

        //เช็คความยาวตัวอักษรที่อยู่ใน stateUserName
        if(userName.length>8){
            setErrorUserName('')
            setUserNameColor('green')
        }else{
            setErrorUserName('กรุณาป้อนชื่อผู้ใช้จำนวนมากกว่า 8 ตัวอักษร')
            setUserNameColor('red')
        }

        //เช็คความถูกต้องของอีเมล
        if(email.includes("@")){
            setErrorEmail('')
            setEmailColor('green')
        }else{
            setErrorEmail('รูปแบบอีเมลไม่ถูกต้อง')
            setEmailColor('red')
        }

        //เช็ครหัสผ่านว่าต้องมี 8 ขึ้นไป
        if(password.length>8){
            setErrorPassword('')
            setPasswordColor('green')
        }else{
            setErrorPassword('รหัสผ่านต้องมีจำนวนมากกว่า 8 ตัวอักษร')
            setPasswordColor('red')
        }

        //เช็ค password กับ repassword ว่าตรงกันมั้ย
        if(repassword != "" && repassword === password){
            setErrorRePassword('')
            setRepasswordColor('green')
        }else{
            setErrorRePassword('รหัสผ่านไม่ตรงกัน')
            setRepasswordColor('red')
        }
    }

    return(
        <div className="container">
            <form className="form" onSubmit={validateForm}>
                <h2>Sign up</h2>
                <div className="form-control">
                    <label>User Name</label>
                    <input type="text" value={userName} 
                    onChange={(e) => setUserName(e.target.value)} 
                    style={{borderColor:userNameColor}} //เปลี่ยนสีตามที่กำหนดใน validateForm
                    />
                    {/* ความหมายคือให้ค่าที่เปลี่ยนแปลงเก็บไว้ใน state ด้วย */}
                    <small style={{color:userNameColor}}>{errorUserName}</small>
                </div>

                <div className="form-control">
                    <label>Email</label>
                    <input type="text" value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    style={{borderColor:emailColor}}
                    />
                    <small style={{color:emailColor}}>{errorEmail}</small>
                </div>

                <div className="form-control">
                    <label>Password</label>
                    <input type="password" value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    style={{borderColor:passwordColor}}
                    />
                    <small style={{color:passwordColor}}>{errorPasword}</small>
                </div>

                <div className="form-control">
                    <label>Confirm Password</label>
                    <input type="password" value={repassword} 
                    onChange={(e) => setRePassword(e.target.value)}
                    style={{borderColor:repasswordColor}}
                    />
                    <small style={{color:repasswordColor}}>{errorRePassword}</small>
                </div>
                <button type="submit">Sign up</button>
            </form> 
        </div>
    )

}

export default FormComponent