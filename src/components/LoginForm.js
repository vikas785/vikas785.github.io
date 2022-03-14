import React,{useState} from 'react'

import { Row, Col,Form, Input, Button, Checkbox } from 'antd';
import './LoginForm.css';
import { verifyLogin } from '../Service/Api';



const initialValue = {
    email: '',
    password: ''
}


const LoginForm = () => {

    
    const [user, setUser] = useState(initialValue)
    const { email, password } = user 

    const onEmailInput = (e) => { 
        
        setUser({...user, email : e.target.value })
        
    }

    const onPasswordInput = (e) => { 
        setUser({...user, password : e.target.value })
    }

    const onFinish = async(e) => {
        e.preventDefault()

        let verifyUserResponse = await verifyLogin(user)
        alert(JSON.stringify(verifyUserResponse.data))
        console.log(verifyUserResponse.data)
     
      };

   

  return (
    <div id="LoginPage">
        <Row >
            <Col  xl={{ span: 10 }} lg={{ span: 12 }}  sm={{offset:0,span:24}} xs={{offset: 2,span:20}} >
            
                <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}

                wrapperCol={{
                    offset: 4,
                    span: 16,
                  }}

                >
                    <h1 className="login-form-header">Welcome Back</h1>
                    <h4 className="login-form-subheader">Sub-title text goes here</h4>
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input  placeholder="Email Address *" onChange={(e) => onEmailInput(e)} />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input
                        
                        type="password"
                        placeholder="Password *"
                        onChange={(e) => onPasswordInput(e)}

                        />
                    </Form.Item>
                    
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" onClick={(e)=>onFinish(e)}>
                        Login
                        </Button>
                        
                    </Form.Item>

                    <Form.Item>
                        <Row>
                            <Col xs={{span: 12}}>
                                <Form.Item name="remember" className="checkbox" valuePropName="checked" noStyle>
                                    <Checkbox className="checkbox-label">Remember Password</Checkbox>
                                </Form.Item>
                            </Col>

                            <Col xs={{span: 12}} style={{position:'relative'}}>
                                <a className="login-form-forgot" href="" style={{position:'absolute',right:'0px'}}>
                                Forgot password?
                                </a>
                            </Col>

                        </Row>
                        

                        
                            
                        
                        
                    </Form.Item>
 
                </Form>
              
                
            </Col>
            <Col   xl={{ span: 14 }} lg={{ span: 12 }} md={{span: 24}} className="img-container">
            <img src="./Assets/img1.PNG" alt="discussion img" width="100%"></img>
            </Col>
        </Row>

    </div>
    
  )
}

export default LoginForm