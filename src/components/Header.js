import React from 'react'

import './Header.css'

import 'antd/dist/antd.css'; 
import { Layout,Menu,Button,Row,Col } from 'antd';
const MenuItemGroup = Menu.ItemGroup;

const Header = () => {
    const { Header } = Layout;
  return (
    <div id="headerPage" style={{borderColor:'1px solid grey!important'}}>

        <Row style={{width:'100%',margin:'15px 0px'}}> 
             <Col md={{offset:1,span:11}} >
               <span style={{fontWeight:"900",fontSize: '18px',paddingLeft:'20px'}}>
                 <span style={{color: 'rgb(36, 36, 66)'}}>ATools</span>
                 <span style={{color: '#FF7F50'}}>.</span>
               </span>
             </Col>

             <Col md={{span:11}} style={{position:'relative'}} className="nav-btn-container">
               <span  style={{position:'absolute',right:'0px'}}>
                 <Button  type="primary" htmlType="submit" className="login-form-button trail-button">
                   Start Free Trail
                 </Button>
                 <Button  type="primary" htmlType="submit" className="login-form-button login-button">
                   Login
                 </Button>
               </span>
             </Col>

        </Row>
      
      
        {/* <Header  style={{ backgroundColor: 'white' }} >
        
       
            <Menu  mode="horizontal" >
            
             <Row style={{width:'100%',margin:'0px'}}>
             
               
                <Col md={{offset:1,span:11}} >
                  <Menu.Item key='nav1' style={{fontWeight:"900",fontSize: '18px',paddingLeft:'20px'}}>
                    <span style={{color: 'rgb(36, 36, 66)'}}>ATools</span>
                    <span style={{color: '#FF7F50'}}>.</span>
                  </Menu.Item>
                </Col>

                <Col md={{span:11}} style={{position:'relative'}} className="nav-btn-container">
                  <Menu.Item key='nav2'  style={{position:'absolute',right:'0px'}}>
                    <Button  type="primary" htmlType="submit" className="login-form-button trail-button">
                      Start Free Trail
                    </Button>
                    <Button  type="primary" htmlType="submit" className="login-form-button login-button">
                      Login
                    </Button>
                  </Menu.Item>
                </Col>

              </Row>
            
              
                  
             
           
            
                
             
                  
                  
             
                
                
            
            </Menu>
         
         </Header> */}
    </div>
  )
}

export default Header