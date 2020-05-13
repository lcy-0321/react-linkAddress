import React from "react";
import { connect } from "react-redux";
//antd
import { Breadcrumb ,Card} from "antd";
//样式
import { ContentStyled } from "./style";
//四级联动地址选择器
import FourLevel from "./linkAddress/FourLevel";
//将state映射到props函数
function mapStateToProps(state) {
  return { ...state };
}

//将修改state数据的方法，映射到props,默认会传入store里的dispach方法
function mapDispatchToProps(dispatch) {
  return {
  };
}
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <React.Fragment>
        <ContentStyled>
          <Breadcrumb style={{ margin: "12px 0" }}>
            <Breadcrumb.Item></Breadcrumb.Item>
          </Breadcrumb>
          <div className="main">
            <div className="select-box mb50">
              <Card title="四级联动地址选择器" bordered={false} >
                  <FourLevel />
              </Card>
            </div>
          </div>
        </ContentStyled>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
