﻿import * as React from "react";
import * as ReactDOM from "react-dom";
import "css!./styles/index.css"
import { Link } from 'react-router-dom';
import Router from 'router';
import ParkCompany from "parkCompany";
import FindLease from "findLease";
import ApplyPut from "applyPut";
import Photograph from "photograph";
import BookSite from "bookSite";
import Parking from "parking";
import Home from "home";
import RepairsOnline from "repairsOnline";
import DataService from "dataService";
import GlobalAction from "compat";


interface IProps {
  history: any
}

interface IState {
  inputValue: string,
  city: string,
  parkArr: Array<any>,
  tagArr: Array<any>
}


class Index extends React.Component {
  constructor(props) {
    super(props);

    Index.g_pIns = this;
  }
  public static g_pIns: Index = null;

  public readonly state: Readonly<IState> = {
    inputValue: "请输入园区名称", // 输入框默认值
    city: "", // 城市
    parkArr: [1, 2, 3, 4, 5, 6, 7, 8, 9], // 园区
    tagArr: ["电子信息", "高新技术", "电商服务"] // 标签
  }

  public readonly props: Readonly<IProps> = {
    history: this.props.history
  }

  componentWillMount() {
    this.dataService.login()
    let _this = this
    if (!sessionStorage.getItem("city")) {
      var geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(function (r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
          sessionStorage.setItem("city", r.address.city)
          _this.setState({ city: r.address.city })
        }
        else {
          if (this.getStatus() === 6) {
            console.log("没有权限")
          }
          if (this.getStatus() === 8) {
            console.log("连接超时")
          }
        }
      });
    }
  }

  public dataService: DataService = new DataService();
  public globalAction: GlobalAction = new GlobalAction();

  // 登录

  // 聚焦
  foucus() {
    if (this.state.inputValue === "请输入园区名称") {
      this.setState({ inputValue: "" })
    }
  }

  // 失焦
  blur() {
    if (this.state.inputValue === "") {
      this.setState({ inputValue: "请输入园区名称" })
    }
  }

  //  输入
  change(event) {
    this.setState({ inputValue: event.target.value })
  }

  // 加载园区地图
  public initPark(park_id) {
    this.globalAction.web_call_webgl_initPark(park_id);
    console.log(park_id);
    localStorage.setItem("park_id", park_id);

  }

  render() {
    return (
      <div className="index">
        <div className="index-input-div">
          <div className="index-child-left">
            <input className="index-input" value={this.state.inputValue} onFocus={this.foucus.bind(this)} onBlur={this.blur.bind(this)} onChange={this.change.bind(this)} />
            <img src="./park_m/image/search.png" className="index-search-img" />
          </div>
          <div className="index-child-right">
            <span >{sessionStorage.getItem("city")}</span>
            <img src="./park_m/image/bottom.png" width="50px" height="50px" style={{ marginTop: "-10px" }} />
          </div>
        </div>
        <div className="index-number">
          <img src="./park_m/image/tower.png" className="tower-img" />已有<span style={{ color: "#0B8BF0", margin: "0 15px 0 15px" }}>15</span>家园区上线
        </div>
        <div className="index-park">
          {this.state.parkArr.map((item, index) => {
            return <Link to="/home"><div className="index-child-park" key={index} onClick={this.initPark.bind(this, 1001)}>
              <div className="index-child-park-left"><img src="./park_m/image/a.jpg" className="park-img" /></div>
              <div className="index-child-park-right">
                <div className="index-park-name">桂林国家高新区信息产业园</div>
                <div className="index-park-position"><img src="./park_m/image/position.png" width="45px" height="40px" style={{ marginTop: "-18px" }} />
                  <span className="index-park-position-name">桂林高新区朝阳路D-12号</span>
                </div>
                <div className="index-tag">
                  {this.state.tagArr.map((item, index) => {
                    return <div key={index} className="index-tag-child">{item}</div>
                  })
                  }
                </div>
              </div>
              <div className="index-child-park-end">
                <div className="index-distance">10.5km</div>
              </div>
            </div></Link>
          })
          }
          <div style={{ width: "100%", height: "60px", textAlign: "center", fontSize: "40px", lineHeight: "60px", marginLeft: "-25px" }}>到底啦~</div>
        </div>
        <div className="index-bottom-logo">
          <img src="./park_m/image/bottomLogo.png" className="index-bottom-logo-img" />
        </div>
      </div>
    )
  }

  //供外部调用 -- 传入企业id，刷新树企业信息数据；
  public refreshCompanyinfo(id) {
    this.props.history.push('/parkCompany');
    ParkCompany.getCompanyinfo(id);
  }

  // 激活招租显示
  public refreshLeaseinfo(id) {
    this.props.history.push('/findLease');
    FindLease.getLeaseinfoByroomid(id);
  }

  // 添加摆点信息
  public addapplyPut(x, y) {
    this.props.history.push('/applyPut');
    ApplyPut.addapplyPut(x, y);
  }

  //添加违规点
  public addillegal(x, y) {
    this.props.history.push('/photograph');
    // ApplyPut.addapplyPut(x, y);
    Photograph.getXY(x, y);
  }

  //添加报修点
  public addReqairs(x, y, building_id, floor_id, room_id) {
    this.props.history.push('/repairsOnline');
    RepairsOnline.getReqairstpostion(x, y, building_id, floor_id, room_id);
  }

  //添加场地预约
  public refreshBooksite(id) {
    this.props.history.push('/bookSite');
    BookSite.getSiteinfo(id);
  }

  //添加地下车库
  public refreshParking(data) {
    this.props.history.push('/parking');
    Parking.inParkingList(data);
  }

}



export default Index;

ReactDOM.render(
  <Router />
  , document.getElementById('viewContainer'));

