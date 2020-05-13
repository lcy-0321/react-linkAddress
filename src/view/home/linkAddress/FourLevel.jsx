import React,{Fragment} from 'react'
import { Input ,Form} from "antd";
import { connect } from "react-redux";
//样式
import { CityPickerCss }  from "./css/LinkAddressCss.js";
//js引入
require('./js/LinkAddressData.js');
require('./js/LinkAddress.js');
function mapStateToProps(state) {
    return { ...state }
}
//将修改state数据的方法，映射到props,默认会传入store里的dispach方法
function mapDispatchToProps(dispatch) {
    return {
        modifyLoginState: () => { dispatch({ type: "modifyLoginState", loginState: 1 }); }
    }
}
class FourLevelCom extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[],
            value:undefined,
        };
    }
    render(){
        return(
            <Fragment>
              <CityPickerCss>
                  <Form>
                    <Input 
                    class="form-control"
                    type="text"
                    data-toggle="city-picker"
                    placeholder="区域"/>
                  </Form>
              </CityPickerCss>
            </Fragment>
        );
    };
}

//将上面的这2个方法，将数据仓库的state和修改state的方法映射到组件上，形成新的组件。
const FourLevel = connect(mapStateToProps, mapDispatchToProps)(FourLevelCom);

export default FourLevel;