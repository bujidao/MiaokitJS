﻿import * as React from "react";
import DataService from "dataService";
import { Link } from 'react-router-dom';
import { DatePicker, List } from 'antd-mobile';

interface IProps {
  location: any,
  history: any
}

interface IState {
  square: number,
  price: number,
  contact: string,
  phone: string,
  inspectionTime: string,
  require: string,
  lift: number,
  isElevator: boolean,
  pic: Array<any>,
  video: Array<any>,
  headimageurl: string,
  title: string,
  freeRent: string,
  stationAmount: string,
  enableRentTime: string,
  decorateName: string,
  decoration: Array<any>,
  decorateId: string,
  sellPrice: string,
  floor: string,
  floorSum: string
}

export default class RoomBase extends React.Component<{ history: any }>{
  public readonly props: Readonly<IProps> = {
    location: this.props.location,
    history: this.props.history
  }

  public readonly state: Readonly<IState> = {
    square: JSON.parse(sessionStorage.getItem("roomInfo"))[0].square, // 建筑面积
    price: JSON.parse(sessionStorage.getItem("roomInfo"))[0].price, // 租金
    contact: JSON.parse(sessionStorage.getItem("roomInfo"))[0].contact, // 联系人
    phone: JSON.parse(sessionStorage.getItem("roomInfo"))[0].phone, // 联系电话
    inspectionTime: JSON.parse(sessionStorage.getItem("roomInfo"))[0].inspection_time, // 看房时间
    require: JSON.parse(sessionStorage.getItem("roomInfo"))[0].require, // 租房要求
    pic: JSON.parse(sessionStorage.getItem("roomInfo"))[0].pic ? JSON.parse(sessionStorage.getItem("roomInfo"))[0].pic : [], // 图库
    video: JSON.parse(sessionStorage.getItem("roomInfo"))[0].video.length > 0 ? JSON.parse(sessionStorage.getItem("roomInfo"))[0].video : [{id: "", name: "", url: ""}], // 视频
    lift: JSON.parse(sessionStorage.getItem("roomInfo"))[0].lift, // 电梯
    headimageurl: JSON.parse(sessionStorage.getItem("roomInfo"))[0].headimageurl,
    isElevator: false,
    title: JSON.parse(sessionStorage.getItem("roomInfo"))[0].title ? JSON.parse(sessionStorage.getItem("roomInfo"))[0].title : "15个字是传达买点的最佳长度",
    freeRent: JSON.parse(sessionStorage.getItem("roomInfo"))[0].free_rent, // 免租情况
    stationAmount: JSON.parse(sessionStorage.getItem("roomInfo"))[0].station_amount, // 容纳工位
    enableRentTime: JSON.parse(sessionStorage.getItem("roomInfo"))[0].enable_rent_time, // 最早可租时间
    decorateName: JSON.parse(sessionStorage.getItem("roomInfo"))[0].decorate_name, // 装修名字
    decoration: [], // 装修数组
    decorateId: JSON.parse(sessionStorage.getItem("roomInfo"))[0].decorate_id, // 装修id
    sellPrice: JSON.parse(sessionStorage.getItem("roomInfo"))[0].sell_price, // 售价
    floor: JSON.parse(sessionStorage.getItem("roomInfo"))[0].floor, // 所在楼层
    floorSum: JSON.parse(sessionStorage.getItem("roomInfo"))[0].floor_sum // 总共楼层
  }

  public dataService: DataService = new DataService()

  componentDidMount() {
    $('#a-img').click(() => {
      $('#a-input').click()
    })
    $('#b-img').click(() => {
      $('#b-input').click()
    })
    $('#h-img').click(() => {
      $('#h-input').click()
    })
    $('#startDate').click(() => {
      $('#startDatePicker').click()
    })
    if (this.props.location.state) {
      sessionStorage.setItem("roomInfo", JSON.stringify(this.props.location.state.roomInfo))
    }
    this.dataService.getRoomDecorateType(this.callBackGetRoomDecorateType.bind(this))
  }

  callBackGetRoomDecorateType(data) {
    this.setState({ decoration: data.response })
  }

  // 输入
  changea(event) {
    this.setState({ price: event.target.value })
  }

  // 输入
  changeb(event) {
    this.setState({ freeRent: event.target.value })
  }

  // 输入
  changec(event) {
    this.setState({ stationAmount: event.target.value })
  }

  // 输入
  changed(event) {
    this.setState({ inspectionTime: event.target.value })
  }

  // 输入
  changef(event) {
    this.setState({ phone: event.target.value })
  }

  changeg(event) {
    this.setState({ sellPrice: event.target.value })
  }

  changeh(event) {
    this.setState({ require: event.target.value })
  }

  changep(event) {
    this.setState({ contact: event.target.value })
  }

  // 组件获取开始时间
  setStartDate(date) {
    let dateStr = JSON.stringify(date);
    let dateN = dateStr.slice(1, 11);
    this.setState({ enableRentTime: dateN })
  }

  // 返回
  goBack() {
    this.props.history.goBack()
  }

  submit() {
    let obj = {
      square: this.state.square,
      lift: this.state.lift,
      title: this.state.title === "15个字是传达买点的最佳长度" ? "" : this.state.title,
      price: this.state.price,
      freeRent: this.state.freeRent,
      decorateName: this.state.decorateName,
      decorateId: this.state.decorateId,
      stationAmount: this.state.stationAmount,
      inspectionTime: this.state.inspectionTime,
      enableRentTime: this.state.enableRentTime,
      headimageurl: this.state.headimageurl,
      pic: this.state.pic,
      video: this.state.video,
      contact: this.state.contact,
      phone: this.state.phone,
      sellPrice: this.state.sellPrice,
      require: this.state.require
    }
    for (var key in obj) {
      if (obj[key] === "" && (key !== "video" && key !== "require" && key !== "inspectionTime" && key !== "enableRentTime" && key !== "contact" && key !== "phone")) {
        return alert("请把资料填完整！")
      }
    }
    this.dataService.saveRoomBaseInfo(this.callBackSaveRoomBaseInfo.bind(this), obj)
  }

  callBackSaveRoomBaseInfo(data) {
    if (data.return_code == 100) {
      this.props.history.goBack()
    }
  }

  changeElevator() {
    this.setState({ isElevator: !this.state.isElevator })
  }

  closeElevator(index) {
    this.setState({ isElevator: false, decorateName: this.state.decoration[index].name, decorateId: this.state.decoration[index].id })
  }

  onBlur() {
    if (this.state.title === "") {
      this.setState({ title: "15个字是传达买点的最佳长度" })
    }
  }

  onFocus() {
    if (this.state.title === "15个字是传达买点的最佳长度") {
      this.setState({ title: "" })
    }
  }

  onChange(event) {
    this.setState({ title: event.target.value })
  }

  // 清除图片
  closePic(index) {
    let pic = this.state.pic
    pic.splice(index, 1)
    this.setState({ pic: pic })
  }

  // 清除视频
  closeVideo() {
    this.setState({ video: [{ id: "", name: "", url: "" }] }, () => {
      $('#b-img').click(() => {
        $('#b-input').click()
      })
    })
  }

  // 清空缩略图
  closeHeadimageurl() {
    this.setState({ headimageurl: "" }, () => {
      $('#h-img').click(() => {
        $('#h-input').click()
      })
    })
  }

  uploadPic(file) {
    this.dataService.upload(this.callBackUploadPic.bind(this), file)
  }

  callBackUploadPic(data) {
    if (data.return_code == 100) {
      let pic = this.state.pic
      pic.push({ url: data.response, name: "" })
      this.setState({ pic: pic })
    } else {
      alert("上传失败")
    }
  }

  updatePic(event) {
    let formData = new FormData();
    formData.append("file", event.target.files[0]);
    this.uploadPic(formData)
  }

  updateVideo(event) {
    let formData = new FormData();
    formData.append("file", event.target.files[0]);
    this.uploadVideo(formData)
  }

  updateHeadimage(event) {
    let formData = new FormData();
    formData.append("file", event.target.files[0]);
    this.uploadHeadimage(formData)
  }

  uploadVideo(file) {
    this.dataService.upload(this.callBackUploadVideo.bind(this), file)
  }

  uploadHeadimage(file) {
    this.dataService.upload(this.callBackUploadHeadimage.bind(this), file)
  }

  callBackUploadVideo(data) {
    if (data.return_code == 100) {
      let video = [{id: "", name: "", url: ""}]
      video[0].url = data.response
      this.setState({ video: video })
    } else {
      alert("上传失败")
    }
  }

  callBackUploadHeadimage(data) {
    if (data.return_code == 100) {
      this.setState({ headimageurl: data.response })
    } else {
      alert("上传失败")
    }
  }


  render() {
    return (
      <div className="rent-room" style={{ backgroundColor: "#ffffff" }}>
        <div className="rent-room-back">
          <div style={{ float: "left", width: "100%" }} onClick={this.goBack.bind(this)}>
            <img src="./park_m/image/back.png" style={{ margin: "-10px 10px 0 0" }} />
            <span>房间基本信息编辑-</span><span>{sessionStorage.getItem("roomName")}</span>
          </div>
        </div>
        <div style={{ width: "100%", height: "15px", backgroundColor: "#F2F2F2" }}></div>
        <div style={{ fontSize: "40px", color: "#333333", fontWeight: "600", height: "50px", lineHeight: "50px", overflow: "hidden", margin: "30px 0 0 50px" }}>
          <div style={{ width: "10px", height: "100%", backgroundColor: "#0B8BF0", float: "left", marginRight: "30px" }} ></div>
          <div style={{ float: "left", fontSize: "40px" }}>基本信息</div>
          <Link to={{ pathname: "/roomBaseUpdate", state: { state: this.state } }}><div style={{ color: "#0B8BF0", float: "right", marginRight: "50px" }}>修改</div></Link>
        </div>

        <div style={{ fontSize: "40px", margin: "50px 0 50px 85px" }}>
          <div style={{ overflow: "hidden" }}>
            <div style={{ float: "left", color: "#6C6C6C", width: "25%" }}>建筑面积</div><div style={{ float: "left", width: "20%", color: "#333333", fontWeight: "600" }}>{this.state.square}平米</div><div style={{ float: "left", color: "#6C6C6C", width: "25%", marginLeft: "35px" }}>总共楼层</div><div style={{ float: "left", width: "20%", color: "#333333", fontWeight: "600" }}>{this.state.floorSum}层</div>
          </div>
          <div style={{ overflow: "hidden" }}>
            <div style={{ float: "left", color: "#6C6C6C", width: "25%" }}>所在楼层</div><div style={{ float: "left", width: "20%", color: "#333333", fontWeight: "600" }}>{this.state.floor}</div><div style={{ float: "left", color: "#6C6C6C", width: "25%", marginLeft: "35px" }}>电梯</div><div style={{ float: "left", width: "20%", color: "#333333", fontWeight: "600" }}>{this.state.lift ? "有" : "没有"}</div>
          </div>
        </div>

        <div style={{ fontSize: "40px", color: "#333333", fontWeight: "600", height: "50px", lineHeight: "50px", overflow: "hidden", margin: "30px 0 0 50px" }}>
          <div style={{ width: "10px", height: "100%", backgroundColor: "#0B8BF0", float: "left", marginRight: "30px" }} ></div>
          <div style={{ float: "left", fontSize: "40px" }}>出租信息</div>
        </div>

        <div style={{ fontSize: "40px", color: "#949494", margin: "35px 0 0 45px", float: "left" }}>房源标题</div>
        <div style={{ float: "left", backgroundColor: "#F53636", borderRadius: "50px", width: "40px", height: "40px", margin: "46px 0 0 15px", color: "#ffffff", fontSize: "30px", lineHeight: "40px", textAlign: "center" }}>?</div>

        <input style={{ margin: "30px 0 0 50px", backgroundColor: "#F2F2F2", width: "90%", height: "120px", border: "none", outline: "none", fontSize: "40px", color: "#6C6C6C", paddingLeft: "50px" }} value={this.state.title}
          onBlur={this.onBlur.bind(this)} onFocus={this.onFocus.bind(this)} onChange={this.onChange.bind(this)} />

        <div className="service-tel" style={{ fontSize: "40px", color: "#333333", borderBottom: "2px solid #F2F2F2", overflow: "hidden" }}>
          <div className="enterprise-information-star"></div>
          <div style={{ color: "#949494", height: "80px", float: "left", width: "30%" }}>售价</div>
          <input onChange={this.changeg.bind(this)} value={this.state.sellPrice}
            style={{ float: "left", width: "65%", height: "120px", border: "none", outline: "none", marginTop: "-1px", paddingLeft: "30px", color: "#6C6C6C" }}
          />
        </div>

        <div className="service-tel" style={{ fontSize: "40px", color: "#333333", borderBottom: "2px solid #F2F2F2", overflow: "hidden" }}>
          <div className="enterprise-information-star"></div>
          <div style={{ color: "#949494", height: "80px", float: "left", width: "30%" }}>租金</div>
          <input onChange={this.changea.bind(this)} value={this.state.price}
            style={{ float: "left", width: "65%", height: "120px", border: "none", outline: "none", marginTop: "-1px", paddingLeft: "30px", color: "#6C6C6C" }}
          />
        </div>
        <div className="service-tel" style={{ fontSize: "40px", color: "#333333", borderBottom: "2px solid #F2F2F2" }}>
          <div className="enterprise-information-star"></div>
          <div style={{ color: "#949494", height: "80px", float: "left", width: "30%" }}>免租情况</div>
          <input onChange={this.changeb.bind(this)} value={this.state.freeRent}
            style={{ float: "left", width: "65%", height: "120px", border: "none", outline: "none", marginTop: "-1px", paddingLeft: "30px", color: "#6C6C6C" }}
          />
        </div>
        <div className="service-tel" style={{ fontSize: "40px", color: "#333333", borderBottom: "2px solid #F2F2F2", overflow: "hidden" }} onClick={this.changeElevator.bind(this)}>
          <div className="enterprise-information-star"></div>
          <div style={{ color: "#949494", height: "80px", float: "left", width: "30%", marginRight: "30px" }}>装修情况</div>
          <div style={{ color: "#6C6C6C", float: "left" }}>{this.state.decorateName}</div>
          <div style={{ height: "100%", float: "right" }}>
            <img src="./park_m/image/right.png" style={{ margin: "-10px 40px 0 0", transform: this.state.isElevator ? "rotate(90deg)" : "" }} />
          </div>
        </div>
        {this.state.isElevator ?
          <div style={{ position: "relative", width: "99.9%", fontSize: "40px", backgroundColor: "#ffffff", border: "1px solid #797272", textAlign: "center" }}>
            {this.state.decoration.map((item, index) => {
              return <div key={index} style={{ width: "500px", height: "100px", margin: "auto", lineHeight: "100px" }} onClick={e => this.closeElevator(index)}>{item.name}</div>
            })
            }
          </div> : null
        }
        <div className="service-tel" style={{ fontSize: "40px", color: "#333333", borderBottom: "2px solid #F2F2F2" }}>
          <div className="enterprise-information-star"></div>
          <div style={{ color: "#949494", height: "80px", float: "left", width: "30%" }}>容纳工位</div>
          <input onChange={this.changec.bind(this)} value={this.state.stationAmount}
            style={{ float: "left", width: "65%", height: "120px", border: "none", outline: "none", marginTop: "-1px", paddingLeft: "30px", color: "#6C6C6C" }}
          />
        </div>
        <div className="service-tel" style={{ fontSize: "40px", color: "#333333", borderBottom: "2px solid #F2F2F2", paddingLeft: "60px" }}>
          <div style={{ color: "#949494", height: "80px", float: "left", width: "30%" }}>看房时间</div>
          <input onChange={this.changed.bind(this)} value={this.state.inspectionTime}
            style={{ float: "left", width: "65%", height: "120px", border: "none", outline: "none", marginTop: "-1px", paddingLeft: "30px", color: "#6C6C6C" }}
          />
        </div>
        <div className="service-tel" style={{ fontSize: "40px", color: "#333333", borderBottom: "2px solid #F2F2F2", paddingLeft: "60px" }}>
          <div style={{ color: "#949494", height: "80px", float: "left", width: "30%" }}>最早可租时间</div>
          <input id="startDate" value={this.state.enableRentTime}
            style={{ float: "left", width: "65%", height: "120px", border: "none", outline: "none", marginTop: "-1px", paddingLeft: "30px", color: "#6C6C6C" }}
          />
        </div>
        <DatePicker
          mode="date"
          extra=" "
          onChange={this.setStartDate.bind(this)}
        >
          <List.Item arrow="horizontal" style={{ position: "absolute", top: "-100px" }} id="startDatePicker"></List.Item>
        </DatePicker>
        <div className="service-tel" style={{ fontSize: "40px", color: "#333333", borderBottom: "2px solid #F2F2F2", paddingLeft: "60px" }}>
          <div style={{ color: "#949494", height: "80px", float: "left", width: "30%" }}>租房需求</div>
          <input onChange={this.changeh.bind(this)} value={this.state.require}
            style={{ float: "left", width: "65%", height: "120px", border: "none", outline: "none", marginTop: "-1px", paddingLeft: "30px", color: "#6C6C6C" }}
          />
        </div>

        <div className="service-tel" style={{ fontSize: "40px", color: "#333333", borderBottom: "2px solid #F2F2F2", height: 360 }}>
          <div className="enterprise-information-star"></div>
          <div style={{ color: "#949494", height: "80px", width: "20%" }}>缩略图</div>

          {this.state.headimageurl ?
            <div style={{ width: "220px", height: "220px", backgroundColor: "#F2F2F2", textAlign: "center", overflow: "hidden", margin: "30px 30px 0 0", float: "left" }}>
              <img src="./park_m/image/close.png" style={{ position: "absolute", left: "250px" }} onClick={e => this.closeHeadimageurl()} />
              <img src={this.state.headimageurl} style={{ height: "100%", width: "100%" }} />
            </div> :
            <div>
              <div style={{ width: "220px", height: "220px", backgroundColor: "#F2F2F2", textAlign: "center", overflow: "hidden", marginTop: "30px", float: "left" }} id="h-img">
                <img src="./park_m/image/addPicture.png" style={{ height: "60px", width: "60px" }} />
                <div style={{ color: "#949494", marginTop: "-30px" }}>添加</div>
              </div>
              <input type="file" onChange={this.updateHeadimage.bind(this)} id="h-input" style={{ display: "none" }} accept="image/*" />
            </div>
          }

        </div>

        <div className="service-tel" style={{ fontSize: "40px", color: "#333333", borderBottom: "2px solid #F2F2F2", height: 360 + Math.floor(this.state.pic.length / 3) * 250 }}>
          <div className="enterprise-information-star"></div>
          <div style={{ color: "#949494", height: "80px" }}>房间图片</div>
          {this.state.pic.map((item, index) => {
            return (
              <div style={{ width: "220px", height: "220px", backgroundColor: "#F2F2F2", textAlign: "center", overflow: "hidden", margin: (index > 2 && index % 3 === 0) ? "30px 30px 0 30px" : "30px 30px 0 0", float: "left" }} key={index}>
                <img src="./park_m/image/close.png" style={{ position: "absolute", left: (index % 3 + 1) * 250 }} onClick={e => this.closePic(index)} />
                <img src={item.url} style={{ height: "100%", width: "100%" }} />
              </div>
            )
          })
          }
          <input type="file" onChange={this.updatePic.bind(this)} id="a-input" style={{ display: "none" }} accept="image/*" />
          <div style={{ width: "220px", height: "220px", backgroundColor: "#F2F2F2", textAlign: "center", overflow: "hidden", marginTop: "30px", float: "left", marginLeft: this.state.pic.length % 3 === 0 && this.state.pic.length !== 0 ? "30px" : null }} id="a-img">
            <img src="./park_m/image/addPicture.png" style={{ height: "60px", width: "60px" }} />
            <div style={{ color: "#949494", marginTop: "-30px" }}>添加</div>
          </div>
        </div>
        <div className="service-tel" style={{ fontSize: "40px", color: "#333333", borderBottom: "2px solid #F2F2F2", height: 360 + Math.floor(this.state.video.length / 3) * 250, marginLeft: "30px" }}>
          <div style={{ color: "#949494", height: "80px", width: "20%" }}>房间视频</div>

          {this.state.video[0].url ?
            <div style={{ width: "220px", height: "220px", backgroundColor: "#F2F2F2", textAlign: "center", overflow: "hidden", margin: "30px 30px 0 0", float: "left" }}>
              <img src="./park_m/image/close.png" style={{ position: "absolute", left: "250px", zIndex: 100 }} onClick={e => this.closeVideo()} />
              <video src={this.state.video[0].url} controls="controls" style={{width: "100%", height: "100%"}} />
            </div> :
            <div>
              <div style={{ width: "220px", height: "220px", backgroundColor: "#F2F2F2", textAlign: "center", overflow: "hidden", marginTop: "30px", float: "left" }} id="b-img">
                <img src="./park_m/image/addPicture.png" style={{ height: "60px", width: "60px" }} />
                <div style={{ color: "#949494", marginTop: "-30px" }}>添加</div>
              </div>
            </div>
          }

          <input type="file" onChange={this.updateVideo.bind(this)} id="b-input" style={{ display: "none" }} accept="video/*" />
     
        </div>
        <div style={{ fontSize: "40px", color: "#333333", fontWeight: "600", height: "50px", lineHeight: "50px", overflow: "hidden", margin: "30px 0 0 50px" }}>
          <div style={{ width: "10px", height: "100%", backgroundColor: "#0B8BF0", float: "left", marginRight: "30px" }} ></div>
          <div style={{ float: "left", fontSize: "40px" }}>联系人信息</div>
        </div>
        <div className="service-tel" style={{ fontSize: "40px", color: "#333333", borderBottom: "2px solid #F2F2F2", marginLeft: "30px" }}>
          <div style={{ color: "#949494", height: "80px", float: "left", width: "20%" }}>联系人</div>
          <input onChange={this.changep.bind(this)} value={this.state.contact}
            style={{ float: "left", width: "65%", height: "120px", border: "none", outline: "none", marginTop: "-1px", paddingLeft: "30px", color: "#6C6C6C" }}
          />
        </div>
        <div className="service-tel" style={{ fontSize: "40px", color: "#333333", borderBottom: "2px solid #F2F2F2", marginLeft: "30px" }}>
          <div style={{ color: "#949494", height: "80px", float: "left", width: "20%" }}>联系电话</div>
          <input onChange={this.changef.bind(this)} value={this.state.phone}
            style={{ float: "left", width: "65%", height: "120px", border: "none", outline: "none", marginTop: "-1px", paddingLeft: "30px", color: "#6C6C6C" }}
          />
        </div>
        <div style={{ height: "300px" }}></div>
        <div onClick={this.submit.bind(this)}
          style={{ width: "100%", height: "150px", textAlign: "center", lineHeight: "150px", color: "#ffffff", backgroundColor: "#0B8BF0", position: "fixed", bottom: 0, fontSize: "50px" }}>提交</div>
      </div>
    )
  }
}