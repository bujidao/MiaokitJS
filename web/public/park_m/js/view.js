define("app", ["require", "exports", "react", "css!./styles/app.css"], function (require, exports, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class App extends React.Component {
        constructor() {
            super(...arguments);
            this.state = {};
        }
        componentDidMount() {
        }
        render() {
            return (React.createElement("div", { className: "app" }));
        }
    }
});
define("compat", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class GlobalAction {
        web_call_webgl_initPark(pInfo) {
            MiaokitJS.App.m_pProject.EnterPark({
                m_pView: {
                    m_nLng: 110.344301,
                    m_nLat: 25.272208,
                    m_mTarget: { x: 0.0, y: 0.0, z: 0.0 },
                    m_nDistance: 300.0,
                    m_nPitch: 20.0,
                    m_nYaw: 90.0
                }
            });
            console.log("web_call_webgl_initP58484848ark", pInfo);
        }
        web_call_webgl_switchCompany(pName) {
            if (2 == pName) {
                MiaokitJS.App.m_pProject.EnterCompany({
                    m_nName: pName,
                    m_pView: {
                        m_nLng: 110.344301,
                        m_nLat: 25.272208,
                        m_mTarget: { x: 230.0, y: 0.0, z: 15.0 },
                        m_nDistance: 36.0,
                        m_nPitch: 30.0,
                        m_nYaw: 95.0
                    }
                });
            }
            else if (3 == pName) {
                MiaokitJS.App.m_pProject.EnterCompany({
                    m_nName: pName,
                    m_pView: {
                        m_nLng: 110.344301,
                        m_nLat: 25.272208,
                        m_mTarget: { x: 197.0, y: 0.0, z: -40.0 },
                        m_nDistance: 77.0,
                        m_nPitch: 55.0,
                        m_nYaw: 4.5
                    }
                });
            }
            console.log("web_call_webglffdfdsfdsfds_switchCompany", pName);
        }
        web_call_webgl_switchRoom(pName) {
            console.log("web_call_webgl_switchRoom", pName);
            if (pName) {
                MiaokitJS.App.m_pProject.EnterRoom(pName);
            }
        }
        web_call_webgl_switchMark(pName, pInfo, pData) {
            MiaokitJS.App.m_pProject.ShowOutdoorPOI(pName, pInfo ? pData : null);
            console.log("web_call_webgl_switchMark(切换标识)", pName, pInfo, pData);
        }
        web_call_webgl_mapReturnpark() {
            MiaokitJS.App.m_pProject.ExitViewer();
            console.log("web_call_webgl_mapReturnpark");
        }
        web_call_webgl_pauseloadModuler() {
            console.log("web_call_webgl_pauseloadModuler");
        }
        web_call_webgl_continueloadModuler() {
            console.log("web_call_webgl_continueloadModuler");
        }
        web_call_webgl_showParkingList(data) {
            console.log("web_call_webgl_showParkingList", data);
        }
        web_call_webgl_onParking(data) {
            console.log("web_call_webgl_onParking", data);
        }
        web_call_webgl_cancelApplyPut(data) {
            console.log("web_call_webgl_cancelApplyPut", data);
        }
        web_call_webgl_parkRoomList(data) {
            MiaokitJS.App.m_pProject.m_aRooms = data;
            console.log("94# web_call_webgl_parkRoomList", data);
        }
    }
    exports.default = GlobalAction;
});
define("findLease", ["require", "exports", "react", "react-router-dom", "compat", "dataService"], function (require, exports, React, RouterDOM, compat_1, dataService_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class FindLease extends React.Component {
        constructor(props) {
            super(props);
            this.globalAction = new compat_1.default();
            this.state = {
                FindLeasecss: "findLease",
                showList: true,
                showInfo: false,
                companyInfotit: "companyInfotit",
            };
            FindLease.toggleView = this.toggleView.bind(this);
            FindLease.getLeaseinfoByroomid = this.getLeaseinfoByroomid.bind(this);
        }
        componentDidMount() {
            move3dBut("up");
        }
        static getLeaseinfoByroomid(id) { }
        getLeaseinfoByroomid(id) {
            console.log("getCompanyinfo", id);
            this.toggleView("Info", id);
            LeaseInfo.getLeaseInfo(id);
        }
        static toggleView(a, id) { }
        ;
        toggleView(a, id) {
            console.log("fl", a);
            console.log("fl", id);
            if (a == "Info") {
                this.setState({
                    showList: false,
                    showInfo: true,
                    companyInfotit: "hide"
                });
            }
            else {
                this.setState({
                    showList: true,
                    showInfo: false,
                    companyInfotit: "companyInfotit"
                });
            }
        }
        render() {
            return (React.createElement("div", { className: this.state.FindLeasecss },
                React.createElement("p", { className: this.state.companyInfotit },
                    React.createElement("span", null, "\u529E\u516C\u51FA\u79DF")),
                React.createElement("div", { className: this.state.showList == true ? "show" : "hide" },
                    React.createElement(LeaseList, null)),
                React.createElement("div", { className: this.state.showInfo == true ? "show" : "hide" },
                    React.createElement(LeaseInfo, null))));
        }
    }
    exports.default = FindLease;
    class LeaseList extends React.Component {
        constructor(props) {
            super(props);
            this.dataService = new dataService_1.default();
            this.globalAction = new compat_1.default();
            this.state = {
                roomNull: "hide",
                park_id: "1001",
                roomId: "",
                inputValue: "搜索",
                square: "全部",
                leaseListcss: "leaseList-part",
                foleBtn: "lease-foleBtn",
                indexOf: -1,
                leaseBtn: "leaseBtn-part",
                leaseul: "leaseul",
                roomData: [],
                areaType: [],
                typeIndexof: 100,
                iconfont: "iconfont iconfont-unturn",
                searchBoxIcon: "iconfont iconfont-unturn",
                src: "about:'blank'",
                imgurlNull: "./park_m/image/noImg.png",
            };
            this.showInfo = this.showInfo.bind(this);
            this.getRoomRentSquareType = this.getRoomRentSquareType.bind(this);
            this.setRoomRent = this.setRoomRent.bind(this);
            this.searchRoomRent = this.searchRoomRent.bind(this);
            this.change = this.change.bind(this);
        }
        componentDidMount() {
            this.dataService.getRoomRentSquareType(this.getRoomRentSquareType, this.state.park_id);
            this.dataService.findRoomRentByparkid(this.setRoomRent, this.state.park_id, "", 1, -1);
        }
        getRoomRentSquareType(data) {
            console.log("getRoomRentSquareType", data);
            this.setState({
                areaType: data.response,
            });
        }
        setRoomRent(data) {
            console.log("setRoomRent", data);
            if (data.response.length == 0) {
                this.setState({
                    roomData: data.response,
                    roomNull: "show",
                });
            }
            else {
                this.setState({
                    roomData: data.response,
                    roomNull: "hide",
                });
            }
        }
        showInfo(a, id, name, e) {
            FindLease.toggleView(a, id);
            LeaseInfo.getLeaseInfo(id);
            console.log("more", a, id, name, e);
        }
        toggleFold() {
            console.log("tftft");
            if (this.state.leaseListcss == "leaseList-all") {
                this.setState({
                    leaseListcss: "leaseList-part",
                    leaseul: "leaseul"
                });
                this.globalAction.web_call_webgl_continueloadModuler();
            }
            else {
                this.setState({
                    leaseListcss: "leaseList-all",
                    leaseul: "leaseul-all"
                });
                this.globalAction.web_call_webgl_pauseloadModuler();
            }
            if (this.state.iconfont == "iconfont iconfont-unturn") {
                this.setState({
                    iconfont: "iconfont iconfont-turn",
                });
            }
            else {
                this.setState({
                    iconfont: "iconfont iconfont-unturn",
                });
            }
        }
        foldBtn() {
            console.log("foldBtn");
            if (this.state.leaseBtn == "leaseBtn-part") {
                this.setState({
                    leaseBtn: "leaseBtn-all",
                    searchBoxIcon: "iconfont iconfont-turn",
                });
            }
            else {
                this.setState({
                    leaseBtn: "leaseBtn-part",
                    searchBoxIcon: "iconfont iconfont-unturn",
                });
            }
        }
        leaseActive(index, id, title, building, floor, room) {
            console.log("active", index, id);
            console.log("active2", building, floor, room);
            this.setState({
                indexOf: index,
                roomId: id
            });
            console.log("leaseActive", this.state);
            this.dataService.findRoomRentByroomid(this.callWebglSwitchRoom.bind(this), id);
        }
        callWebglSwitchRoom(data) {
            let roomData = {
                m_pTile: data.response.project_title,
                m_pBuilding: data.response.building_code,
                m_pLayer: data.response.floor_code,
                m_pRoom: data.response.room_code,
                m_pPart: data.response.part,
            };
            this.globalAction.web_call_webgl_switchRoom(roomData);
        }
        typeActive(indexof, name) {
            console.log("typeActive-1", indexof);
            console.log("typeActive-2", name);
            this.setState({
                typeIndexof: indexof,
                square: name,
                inputValue: name,
            }, () => {
                this.searchRoomRent();
            });
        }
        foucus() {
            if (this.state.inputValue == "搜索") {
                this.setState({ inputValue: "" });
            }
        }
        blur(event) {
            if (this.state.inputValue == "") {
                this.setState({ inputValue: "搜索" });
            }
        }
        change(event) {
            this.setState({
                inputValue: event.target.value,
                square: event.target.value,
            });
        }
        searchRoomRent() {
            if (this.state.square == "全部") {
                this.dataService.findRoomRentByparkid(this.setRoomRent, this.state.park_id, "", 1, -1);
            }
            else {
                this.dataService.findRoomRentByparkid(this.setRoomRent, this.state.park_id, this.state.square, 1, -1);
            }
            console.log("searchBtn", this.state.inputValue, this.state.square);
        }
        mapReturnpark() {
            this.globalAction.web_call_webgl_mapReturnpark();
            move3dBut("down");
        }
        onErrorHeadimageurl(index) {
            console.log('rrrrddrrr');
            var items = this.state.roomData;
            items[index].headimageurl = "./park_m/image/noImg.png";
            this.setState({
                roomData: items
            });
        }
        render() {
            return (React.createElement("div", { className: this.state.leaseListcss },
                React.createElement("div", { className: "foleBtn" },
                    React.createElement("p", { className: "companyGoHomeLeft", onClick: this.mapReturnpark.bind(this) },
                        React.createElement(RouterDOM.Link, { to: "/home", style: { color: "#949494" } },
                            React.createElement("i", { className: "iconfont companyInfoicon" }, "\uE83B"),
                            React.createElement("span", null, "\u8FD4\u56DE"))),
                    React.createElement("p", { className: "companyGoHomeRight" },
                        React.createElement("i", { className: this.state.iconfont, style: { "fontSize": "5rem", "color": "#C0C0C0" }, onClick: this.toggleFold.bind(this) }, "\uE849"))),
                React.createElement("ul", { className: this.state.leaseul },
                    React.createElement("p", { className: this.state.roomNull, style: { "text-align": "center", "font-size": "2.5rem" } }, "\u6CA1\u6709\u7B26\u5408\u641C\u7D22\u6761\u4EF6\u7684\u7ED3\u679C\u00B7\u00B7\u00B7"),
                    this.state.roomData.map((i, index) => {
                        return (React.createElement("li", { onClick: this.leaseActive.bind(this, index, i.id, i.project_title, i.building_code, i.floor_code, i.room_code), className: this.state.indexOf == index ? "leaseli-active" : "leaseli", style: { display: ("1" == i.state) ? "block" : "none" } },
                            React.createElement("div", { className: this.state.indexOf == index ? "leaseImgback-active" : "leaseImgback" },
                                React.createElement("img", { src: i.headimageurl == null ? this.state.imgurlNull : i.headimageurl, onError: this.onErrorHeadimageurl.bind(this, index) })),
                            React.createElement("div", { className: "leaseul-middle" },
                                React.createElement("p", { className: this.state.indexOf == index ? "leaseName-active" : "leaseName", style: { "font-size": "2.4rem", "font-weight": "bold" } },
                                    i.building_name,
                                    "-",
                                    i.floor_name,
                                    "-",
                                    i.room_name),
                                React.createElement("p", { style: { "font-size": "2.5rem" } },
                                    React.createElement("span", { className: "iconfont", style: { "fontSize": "2.5rem", "margin-right": "1rem" } }, "\uE82A"),
                                    i.floorage,
                                    "m\u00B2"),
                                React.createElement("p", { className: this.state.indexOf == index ? "leaseType-active" : "leaseType" },
                                    React.createElement("span", { className: this.state.indexOf == index ? "leasePrice-active" : "leasePrice" }, i.price),
                                    "\u5143/m\u00B2\u00B7\u6708")),
                            React.createElement("div", { className: "leaseul-right" },
                                React.createElement("p", { onClick: this.showInfo.bind(this, "Info", i.id, i.name), className: this.state.indexOf == index ? "show" : "hide" },
                                    "\u66F4\u591A",
                                    React.createElement("i", { className: "iconfont", style: { "fontSize": "2rem" } }, "\uE827")))));
                    })),
                React.createElement("form", { action: '', target: "rfFrame" },
                    React.createElement("div", { className: this.state.leaseBtn },
                        React.createElement("div", { className: "searchBox", onClick: this.foldBtn.bind(this) },
                            React.createElement("span", { className: "searchBox-text" },
                                React.createElement("span", { className: "iconfont", style: { "fontSize": "2.3rem" } }, "\uE810"),
                                React.createElement("span", { style: { "color": "#333333", "margin-left": "1rem" } }, this.state.square == "全部" ? "全部" : this.state.square + "m²")),
                            React.createElement("span", { className: "searchBox-type" },
                                React.createElement("i", { className: this.state.searchBoxIcon, style: { "fontSize": "3rem", position: "relative", top: "0.3rem" } }, "\uE828 "))),
                        React.createElement("ul", { className: "areaTypeul" },
                            React.createElement("li", { className: this.state.typeIndexof == 100 ? "areaTypeli-active" : "areaTypeli", onClick: this.typeActive.bind(this, 100, "全部", "id-全部") }, "\u5168\u90E8"),
                            this.state.areaType.map((i, index) => {
                                return (React.createElement("li", { onClick: this.typeActive.bind(this, index, i), className: this.state.typeIndexof == index ? "areaTypeli-active" : "areaTypeli" },
                                    i,
                                    "m\u00B2"));
                            })))),
                React.createElement("iframe", { id: "rfFrame", name: "rfFrame", src: this.state.src, style: { display: "none" } }, "   ")));
        }
    }
    class LeaseInfo extends React.Component {
        constructor(props) {
            super(props);
            this.dataService = new dataService_1.default();
            this.state = {
                leaseInfocss: "leaseInfo",
                roomName: "",
                building: "",
                floor: "",
                room: "",
                building_name: "",
                floor_name: "",
                room_name: "",
                infoli: 0,
                iconfont: "iconfont iconfont-turn",
            };
            this.showList = this.showList.bind(this);
            LeaseInfo.getLeaseInfo = this.getLeaseInfo.bind(this);
            this.setLeaseInfo = this.setLeaseInfo.bind(this);
        }
        static getLeaseInfo(id) { }
        getLeaseInfo(id) {
            this.dataService.findRoomRentByroomid(this.setLeaseInfo, id);
        }
        setLeaseInfo(data) {
            console.log("setLeaseInfo", data);
            this.setState({
                building_name: data.response.building_name,
                floor_name: data.response.floor_name,
                room_name: data.response.room_name,
            });
            LeaseInfos.setLeaseInfos(data);
            Picshow.setPicshow(data);
            Picshow.setVideoshow(data);
        }
        componentDidMount() {
        }
        showList(a, id) {
            FindLease.toggleView(a, id);
        }
        toggleFold() {
            if (this.state.leaseInfocss == "leaseInfo") {
                this.setState({
                    leaseInfocss: "leaseInfo-part",
                });
                LeaseInfos.botTelHide();
                Picshow.picCssHide();
            }
            else {
                this.setState({
                    leaseInfocss: "leaseInfo",
                });
                LeaseInfos.botTelShow();
                Picshow.picCssShow();
            }
            if (this.state.iconfont == "iconfont iconfont-unturn") {
                this.setState({
                    iconfont: "iconfont iconfont-turn",
                });
            }
            else {
                this.setState({
                    iconfont: "iconfont iconfont-unturn",
                });
            }
        }
        infoClick(indexof) {
            console.log("infoClick", indexof);
            this.setState({
                infoli: indexof,
            });
        }
        render() {
            return (React.createElement("div", null,
                React.createElement("p", { className: "companyInfotit" },
                    React.createElement("span", null,
                        this.state.building_name,
                        "-",
                        this.state.floor_name,
                        "-",
                        this.state.room_name)),
                React.createElement("div", { className: this.state.leaseInfocss },
                    React.createElement("div", { className: "foleBtn" },
                        React.createElement("p", { className: "companyGoHomeLeft", style: { color: "#949494" }, onClick: this.showList.bind(this, "List", "id-01") },
                            React.createElement("i", { className: "iconfont companyInfoicon" }, "\uE83B"),
                            React.createElement("span", null, "\u8FD4\u56DE")),
                        React.createElement("p", { className: "companyGoHomeRight" },
                            React.createElement("i", { className: this.state.iconfont, style: { "fontSize": "5rem", "color": "#C0C0C0" }, onClick: this.toggleFold.bind(this) }, "\uE849"))),
                    React.createElement("div", { className: "leaseInfoul_br" },
                        React.createElement("ul", { className: "leaseInfoul" },
                            React.createElement("li", { className: this.state.infoli == 0 ? "leaseInfoli-active" : "leaseInfoli", onClick: this.infoClick.bind(this, 0) }, "\u79DF\u623F\u4FE1\u606F"),
                            React.createElement("li", { className: this.state.infoli == 1 ? "leaseInfoli-active" : "leaseInfoli", onClick: this.infoClick.bind(this, 1) }, "\u623F\u95F4\u5C55\u793A"))),
                    React.createElement("div", { className: "leaseContain" },
                        React.createElement("div", { className: this.state.infoli == 0 ? "show" : "hide" },
                            React.createElement(LeaseInfos, null)),
                        React.createElement("div", { className: this.state.infoli == 1 ? "show" : "hide" },
                            React.createElement(Picshow, null)),
                        React.createElement("div", { className: this.state.infoli == 2 ? "show" : "hide" },
                            React.createElement(Videoshow, null))))));
        }
    }
    class LeaseInfos extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                floorage: "",
                inspection_time: "",
                floor_name: "",
                limit: "",
                elevator: "",
                price: 0,
                man: "",
                tel: "",
                sum: 0,
                sell_price: 0,
                sell_price_sum: 0,
                date: "",
                decorate_name: "",
                title: "",
                free_rent: "",
                station_amount: "",
                floor_sum: "",
                botTel: "botTel",
                sell_state: 0,
            };
            LeaseInfos.setLeaseInfos = this.setLeaseInfos.bind(this);
            LeaseInfos.botTelShow = this.botTelShow.bind(this);
            LeaseInfos.botTelHide = this.botTelHide.bind(this);
        }
        componentDidMount() { }
        static setLeaseInfos(data) { }
        setLeaseInfos(data) {
            console.log("setLeaseInfosIIII", data);
            let sum = data.response.floorage * data.response.price;
            let sum_z = sum.toFixed(0);
            let sell_price_sum = data.response.floorage * data.response.sell_price;
            let sell_price_sum_z = sell_price_sum.toFixed(0);
            let iselevator;
            if (data.response.lift == 1) {
                iselevator = "有";
            }
            else {
                iselevator = "无";
            }
            console.log("zzzzz", sum);
            this.setState({
                floorage: data.response.floorage,
                inspection_time: data.response.inspection_time,
                floor_name: data.response.floor_name,
                limit: data.response.require,
                elevator: iselevator,
                price: data.response.price,
                man: data.response.contact,
                tel: data.response.phone,
                sum: sum_z,
                sell_price: data.response.sell_price,
                sell_price_sum: sell_price_sum_z,
                date: data.response.date,
                decorate_name: data.response.decorate_name,
                free_rent: data.response.free_rent,
                station_amount: data.response.station_amount,
                floor_sum: data.response.floor_sum,
                sell_state: data.response.sell_state,
            });
            document.getElementById("telurl").href = 'tel:' + this.state.tel;
        }
        static botTelShow() { }
        botTelShow() {
            this.setState({
                botTel: "botTel"
            });
        }
        static botTelHide() { }
        botTelHide() {
            this.setState({
                botTel: "hide"
            });
        }
        render() {
            return (React.createElement("div", { className: "leaseInfos" },
                React.createElement("ul", { className: "leaseInfosul" },
                    React.createElement("div", { className: "leaseInfosliLeft" },
                        React.createElement("li", null,
                            React.createElement("span", { style: { "padding-right": "2rem" } }, "\u5EFA\u7B51\u9762\u79EF"),
                            React.createElement("span", { style: { "font-weight": "600" } },
                                this.state.floorage,
                                "\u5E73\u7C73")),
                        React.createElement("li", null,
                            React.createElement("span", { style: { "padding-right": "2rem" } }, "\u6240\u5728\u697C\u5C42"),
                            React.createElement("span", { style: { "font-weight": "600" } }, this.state.floor_name)),
                        React.createElement("li", { className: this.state.price == 0 ? "hide" : "jj" },
                            React.createElement("span", { style: { "padding-right": "7rem" } }, "\u79DF\u91D1"),
                            React.createElement("span", { style: { "color": "#F53636" } },
                                this.state.sum,
                                "\u5143/\u6708\uFF08",
                                this.state.price,
                                "\u5143/m\u00B2\u00B7\u6708\uFF09")),
                        React.createElement("li", { className: this.state.sell_state == 0 ? "jj" : "hide" },
                            React.createElement("span", { style: { "padding-right": "7rem" } }, "\u552E\u4EF7"),
                            React.createElement("span", { style: { "color": "#F53636" } },
                                this.state.sell_price_sum,
                                "\u5143\uFF08",
                                this.state.sell_price,
                                "\u5143/m\u00B2\uFF09")),
                        React.createElement("li", null,
                            React.createElement("span", { style: { "padding-right": "7rem" } }, "\u514D\u79DF"),
                            React.createElement("span", { style: { "font-weight": "600" } }, this.state.free_rent)),
                        React.createElement("li", null,
                            React.createElement("span", { style: { "padding-right": "2rem" } }, "\u5BB9\u7EB3\u5DE5\u4F4D"),
                            React.createElement("span", { style: { "font-weight": "600" } }, this.state.station_amount))),
                    React.createElement("div", { className: "leaseInfosliRight" },
                        React.createElement("li", null,
                            "\u603B\u5171\u697C\u5C42",
                            React.createElement("span", { style: { "font-weight": "600", "font-size": "2.3rem", "marginLeft": "2rem" } },
                                this.state.floor_sum,
                                "\u5C42")),
                        React.createElement("li", null,
                            "\u7535\u68AF",
                            React.createElement("span", { style: { "font-weight": "600", "font-size": "2.3rem", "marginLeft": "7rem" } }, this.state.elevator)),
                        React.createElement("li", { className: this.state.sell_price == 0 ? "kk" : "kk2" },
                            React.createElement("p", null)),
                        React.createElement("li", null,
                            "\u88C5\u4FEE",
                            React.createElement("span", { style: { "font-weight": "600", "font-size": "2.3rem", "marginLeft": "7rem" } }, this.state.decorate_name))),
                    React.createElement("li", { className: "room2" },
                        React.createElement("span", { style: { "padding-right": "2rem" } }, "\u770B\u623F\u65F6\u95F4"),
                        React.createElement("span", { style: { "font-weight": "600" } }, this.state.inspection_time)),
                    React.createElement("li", { className: "room2" },
                        React.createElement("span", { style: { "padding-right": "2rem" } }, "\u53D1\u5E03\u65F6\u95F4"),
                        React.createElement("span", { style: { "font-weight": "600" } }, this.state.date))),
                React.createElement("div", { className: this.state.botTel },
                    React.createElement("p", { className: "botTelMan" },
                        "\u8054\u7CFB\u4EBA ",
                        React.createElement("span", { style: { "font-weight": "600", "marginLeft": "2rem" } }, this.state.man)),
                    React.createElement("div", { className: "telBut" },
                        React.createElement("a", { href: "#", id: "telurl" }, "\u7535\u8BDD\u54A8\u8BE2")))));
        }
    }
    class Picshow extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                roomImg: [],
                urlNull: "hide",
                data: ['1', '2', '3', '4', '5', '6', '7'],
                imgHeight: 176,
                slideIndex: 0,
                picBtnIndex: 0,
                picurlNull: "hide",
                vidurlNull: "hide",
                roomVideo: [],
                bigimg: '',
                bigImgBox: "hide",
                picCss: 'picshow',
            };
            Picshow.setPicshow = this.setPicshow.bind(this);
            Picshow.setVideoshow = this.setVideoshow.bind(this);
            Picshow.picCssHide = this.picCssHide.bind(this);
            Picshow.picCssShow = this.picCssShow.bind(this);
        }
        componentDidMount() {
            setTimeout(() => {
                this.setState({
                    data: ['1', '2', '3', '4', '5', '6', '7'],
                });
            }, 100);
        }
        static setPicshow(data) { }
        setPicshow(data) {
            let picurl = [];
            console.log("setPicshowPPPPPP", data);
            $.each(data.response.pic, function (index, item) {
                picurl.push(item.url);
            });
            if (data.response.pic.length == 0) {
                this.setState({
                    roomImg: data.response.pic,
                    urlNull: "show",
                });
            }
            else {
                this.setState({
                    roomImg: data.response.pic,
                    urlNull: "hide",
                    data: picurl,
                });
            }
        }
        picBtn(a, b) {
            console.log(a);
            this.setState({
                picBtnIndex: a
            });
        }
        seeVideoState() {
            if (this.state.roomVideo.length == 0) {
                this.setState({
                    vidurlNull: "show",
                });
                console.log(this.state);
            }
            else {
                this.setState({
                    vidurlNull: "hide",
                });
            }
        }
        static setVideoshow(data) { }
        setVideoshow(data) {
            console.log("setVideoshow", data);
            if (data.response.video.length == 0) {
                console.log(898989898);
                this.setState({
                    roomVideo: [],
                    vidurlNull: "show",
                });
                console.log(this.state);
            }
            else if (!data.response.video[0].url) {
                this.setState({
                    roomVideo: [],
                    vidurlNull: "show",
                });
            }
            else {
                this.setState({
                    roomVideo: data.response.video,
                    vidurlNull: "hide",
                });
            }
            console.log("66666666666666", this.state);
            this.seeVideoState();
        }
        bigImg(i) {
            console.log('bigimg', i);
            this.setState({
                bigImgBox: "bigImgBox",
                bigimg: i
            });
        }
        closeBigImg() {
            this.setState({
                bigImgBox: "hide",
            });
        }
        static picCssHide() { }
        ;
        picCssHide() {
            this.setState({
                picCss: 'hide'
            });
        }
        static picCssShow() { }
        ;
        picCssShow() {
            this.setState({
                picCss: 'picshow'
            });
        }
        render() {
            return (React.createElement("div", { className: this.state.picCss },
                this.state.picBtnIndex == 0 ?
                    React.createElement("ul", null,
                        React.createElement("p", { className: this.state.picurlNull, style: { "margin": "1rem 0", "text-align": "center", "font-size": "3rem", "color": "#797979" } }, "\u6682\u65E0\u56FE\u7247\u00B7\u00B7\u00B7"),
                        this.state.data.map((i, index) => {
                            return (React.createElement("li", { onClick: this.bigImg.bind(this, i) },
                                React.createElement("img", { src: i })));
                        }))
                    :
                        React.createElement("ul", null,
                            React.createElement("p", { className: this.state.vidurlNull, style: { "margin": "1rem 0", "text-align": "center", "font-size": "3rem", "color": "#797979" } }, "\u6682\u65E0\u89C6\u9891\u00B7\u00B7\u00B7"),
                            this.state.roomVideo.map((i, index) => {
                                return (React.createElement("li", { style: { "width": "56rem", " height": "36rem" } },
                                    React.createElement("video", { src: i.url, style: { "width": "100%", "height": "100%" }, controls: true }, "\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301video\u64AD\u653E")));
                            })),
                React.createElement("div", { className: "picBtn" },
                    React.createElement("div", { className: this.state.picBtnIndex == 0 ? "picBtnS-active" : "picBtnS", onClick: this.picBtn.bind(this, 0) }, "\u56FE\u7247"),
                    React.createElement("div", { className: this.state.picBtnIndex == 1 ? "picBtnS-active" : "picBtnS", onClick: this.picBtn.bind(this, 1) }, "\u89C6\u9891")),
                React.createElement("div", { className: this.state.bigImgBox },
                    React.createElement("div", { className: "close_bigImg", onClick: this.closeBigImg.bind(this) },
                        React.createElement("i", { className: "iconfont close_bigImg_Icon" }, " \uE81C")),
                    React.createElement("img", { src: this.state.bigimg }))));
        }
    }
    class Videoshow extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                urlNull: "hide",
                roomVideo: [],
            };
            Videoshow.setVideoshow = this.setVideoshow.bind(this);
            this.seeVideoState = this.seeVideoState.bind(this);
        }
        componentDidMount() {
            this.seeVideoState();
        }
        seeVideoState() {
            if (this.state.roomVideo.length == 0) {
                this.setState({
                    urlNull: "show",
                });
                console.log(this.state);
            }
            else if (!this.state.roomVideo[0].url) {
                this.setState({
                    urlNull: "show",
                });
            }
            else {
                this.setState({
                    urlNull: "hide",
                });
            }
        }
        static setVideoshow(data) { }
        setVideoshow(data) {
            console.log("4545454", data.response.video.length);
            if (data.response.video.length == 0) {
                console.log(898989898);
                this.setState({
                    roomVideo: [],
                    urlNull: "show",
                });
                console.log(this.state);
            }
            else if (!data.response.video[0].url) {
                this.setState({
                    roomVideo: [],
                    urlNull: "show",
                });
            }
            else {
                this.setState({
                    roomVideo: data.response.video,
                    urlNull: "hide",
                });
            }
            console.log("66666666666666", this.state);
        }
        render() {
            return (React.createElement("div", { className: "picshow" },
                React.createElement("ul", null,
                    React.createElement("p", { className: this.state.urlNull, style: { "margin": "1rem 0", "text-align": "center", "font-size": "3rem", "color": "#797979" } }, "\u6682\u65E0\u89C6\u9891\u00B7\u00B7\u00B7"),
                    this.state.roomVideo.map((i, index) => {
                        return (React.createElement("li", { style: { "width": "56rem", " height": "36rem" } },
                            React.createElement("video", { src: i.url, style: { "width": "100%", "height": "100%" }, controls: true }, "\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301video\u64AD\u653E")));
                    }))));
        }
    }
});
define("dataService", ["require", "exports", "antd-mobile"], function (require, exports, antd_mobile_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class DataService {
        constructor() {
            this.state = {
                rooturl: "http://parkadmin.yongtoc.com",
                userInfoUrl: "http://minghuakejiyuan.3dparkcloud.com/me",
                rooturl2: "http://192.168.1.30:8002",
                rooturl3: "http://192.168.1.27:89",
                token: "",
            };
        }
        componentDidMount() {
        }
        callback(a, pBack) {
            console.log("callback1", a);
            pBack("callback");
        }
        upload(pBack, file) {
            console.log("fiffffffffffffffff", file);
            $.ajax({
                url: this.state.rooturl + '/api/upload?token=' + sessionStorage.getItem("token"),
                data: file,
                cache: false,
                dataType: "json",
                processData: false,
                contentType: false,
                type: "post",
                success: function (data) {
                    pBack(data);
                }
            });
        }
        uploadImgOss(pBack, file) {
            console.log("uploadImgOss", file);
            $.ajax({
                url: this.state.rooturl + '/api/uploadImgOss?token=' + sessionStorage.getItem("token"),
                type: "post",
                data: JSON.stringify(file),
                success: function (data) {
                    console.log(typeof data);
                    let dataJ = JSON.parse(data);
                    console.log("ajax", dataJ);
                    antd_mobile_1.Toast.info(dataJ.err_msg, 2);
                    if (dataJ.return_code == 100) {
                        pBack(dataJ.response);
                    }
                }
            });
        }
        login(username, password, pBack) {
            $.ajax({
                url: this.state.rooturl + '/api/login',
                data: {
                    "username": username,
                    "password": password,
                },
                type: "post",
                success: function (data) {
                    console.log(data);
                    let userInfo = {
                        userId: data.id, name: data.name, phone: data.phone, avatar: data.avatar, enterprise: data.enterprise, enterpriseId: data.enterprises.length > 0 ? data.enterprises[0].id : "",
                        roles: {
                            role_id: data.roles[0].role_id, role_name: data.roles[0].role_name
                        },
                        enterprises: data.enterprises,
                    };
                    sessionStorage.setItem("token", data.token);
                    sessionStorage.setItem("userInfos", JSON.stringify(userInfo));
                    pBack(data);
                }
            });
        }
        refreshToken(ytoken) {
            $.ajax({
                url: this.state.rooturl + '/api/refresh',
                data: {
                    "token": ytoken,
                },
                type: "post",
                success: function (data) {
                    console.log("login-getToken", data);
                }
            });
        }
        getParks(pBack) {
            let thetoken = sessionStorage.getItem("token");
            $.ajax({
                url: this.state.rooturl + '/api/getParks',
                type: "get",
                data: {
                    "token": thetoken,
                },
                success: function (data) {
                    if (data) {
                        pBack(data.response);
                    }
                    ;
                }
            });
        }
        getParkInfo(pBack, park_id) {
            let thetoken = sessionStorage.getItem("token");
            var data = {
                "return_code": "100",
                "response": [
                    {
                        "id": "1009",
                        "headimgurl": "http://xxx.jpg",
                        "province": "桂林",
                        "longitude": "10.55",
                        "latitude": "66.666",
                        "name": "桂林国家高新",
                        "address": "桂林七星朝阳路D-11",
                        "project": [
                            {
                                "id": "1009",
                                "name": "电子信息",
                                "type": 1,
                                "use_type": 0,
                                "project_url": "http://xxx.bin",
                                "longitude": "10.55",
                                "latitude": "66.666",
                                "offset": "10,20,10",
                                "rotate": "10",
                            }
                        ],
                        "audio": [
                            { name: "园区交通", url: "http://downsc.chinaz.net/Files/DownLoad/sound1/201906/11582.mp3" },
                            { name: "园区配套", url: "http://downsc.chinaz.net/files/download/sound1/201206/1638.mp3" },
                            { name: "园区建筑", url: "http://downsc.chinaz.net/Files/DownLoad/sound1/201906/11582.mp3" },
                        ]
                    }
                ],
                "err_msg": ""
            };
            pBack(data);
        }
        getCompanyType(pBack, park_id) {
            let thetoken = sessionStorage.getItem("token");
            $.ajax({
                url: this.state.rooturl + '/api/getCompanyType',
                data: {
                    "park_id": park_id,
                    "token": thetoken,
                },
                type: "get",
                success: function (data) {
                    console.log("5-企业类型列表", data);
                    pBack(data);
                }
            });
        }
        findCompany(pBack, company_type_id, companyName) {
            let url = this.state.rooturl + '/api/findCompany?park_id=' + sessionStorage.getItem("park_id") + "&name=" + companyName;
            if (company_type_id) {
                url = url + "&company_type_id=" + company_type_id;
            }
            $.ajax({
                url: url,
                data: {
                    "token": sessionStorage.getItem("token"),
                },
                type: "get",
                success: function (data) {
                    if (data.status == 113) {
                    }
                    else {
                        pBack(data);
                        console.log("fin企业列表", data);
                    }
                }
            });
        }
        getCompanyInfo(pBack, id) {
            let thetoken = sessionStorage.getItem("token");
            $.ajax({
                url: this.state.rooturl + '/api/getCompanyInfo',
                data: {
                    "id": id,
                    "token": thetoken,
                },
                type: "get",
                success: function (data) {
                    if (data.status == 113) {
                    }
                    else {
                        pBack(data);
                        console.log("77777777777", data);
                    }
                }
            });
        }
        getRoomRentSquareType(pBack, park_id) {
            console.log("init-AllareaType", pBack, park_id);
            let thetoken = sessionStorage.getItem("token");
            $.ajax({
                url: this.state.rooturl + '/api/getRoomRentSquareType',
                data: {
                    "park_id": 1,
                    "token": thetoken,
                },
                type: "get",
                success: function (data) {
                    if (data.status == 113) {
                    }
                    else {
                        pBack(data);
                    }
                }
            });
        }
        findRoomRentByparkid(pBack, park_id, square, state, sell_state) {
            console.log("findRoomRentByparkid", pBack, park_id, square);
            let thetoken = sessionStorage.getItem("token");
            $.ajax({
                url: this.state.rooturl + '/api/findRoomRent',
                data: {
                    "park_id": sessionStorage.getItem("park_id"),
                    "token": thetoken,
                    "square": square,
                    "state": state,
                    "sell_state": sell_state,
                },
                type: "get",
                success: function (data) {
                    console.log("getfindRoomRent", data);
                    if (data.status == 113) {
                    }
                    else {
                        pBack(data);
                        console.log("findRoomRentByparkid", data);
                    }
                }
            });
        }
        findRoomRentByroomid(pBack, id) {
            console.log("findRoomRentByroomid-jxxxxxxxxxxxx", id);
            let thetoken = sessionStorage.getItem("token");
            $.ajax({
                url: this.state.rooturl + '/api/getRoomRentInfo',
                data: {
                    "id": id,
                    "token": thetoken,
                },
                type: "get",
                success: function (data) {
                    if (data.status == 113) {
                    }
                    else {
                        pBack(data);
                        console.log("findRoomRentByroomid", data);
                    }
                }
            });
        }
        getTakingPhotosType(pBack, park_id) {
            console.log("getTakingPhotosType", pBack, park_id);
            var data = {
                "return_code": "100",
                "response": [
                    {
                        "id": "1009",
                        "name": "阻挡主要出入口",
                    },
                    {
                        "id": "1009",
                        "name": "非停车位侧停车",
                    }
                ],
                "err_msg": ""
            };
            pBack(data);
        }
        getTakingPhotos(pBack, park_id, name) {
            let data = {
                "return_code": "100",
                "response": [
                    {
                        "id": "1009",
                        "type": "非停车位侧停车",
                        "car_license": "桂C123456",
                        "time": "2020-02-28 14:38:15",
                        "position": "A座厦门旁",
                        "longitude": "10.55",
                        "latitude": "66.666",
                        "photo": "./park_m/image/i.png"
                    }, {
                        "id": "1009",
                        "type": "非停车位侧停车",
                        "car_license": "桂C120000",
                        "time": "2020-02-28 14:38:15",
                        "position": "A座厦门旁",
                        "longitude": "10.55",
                        "latitude": "66.666",
                        "photo": "./park_m/image/i.png"
                    }
                ],
                "err_msg": ""
            };
            pBack(data);
        }
        getTakingPhotoInfo(pBack, id) {
            console.log("随手拍list", id);
            let data = {
                "return_code": "100",
                "response": {
                    "id": "1009",
                    "type_name": "非停车位侧停车",
                    "car_license": "桂A5000",
                    "time": "2020-02-28 14:38:15",
                    "position": "A座厦门旁",
                    "longitude": "10.55",
                    "latitude": "66.666",
                    "descript": "横跨在斑马线上",
                    "photo": "./park_m/image/i.png",
                },
                "err_msg": ""
            };
            pBack(data);
        }
        postTakingPhotoInfo(pBack, data) {
            let theData = {
                "park_id": sessionStorage.getItem("park_id"),
                "type_id": data.type_id,
                "car_license": data.car_license,
                "time": data.time,
                "position": data.position,
                "longitude": data.longitude,
                "latitude": data.latitude,
                "descript": data.descript,
                "photo": data.files[0].url,
            };
            $.ajax({
                url: this.state.rooturl + '/api/postTakingPhotoInfo',
                data: theData,
                type: "post",
                dataType: "json",
                success: function (data) {
                    console.log("postTakingPhotoInfo", data);
                }
            });
        }
        postAdvertisementPoint(pBack, data) {
            let datas = {
                'park_id': sessionStorage.getItem("park_id"),
                'staff_id': data.staff_id,
                "staff_name": data.applicant,
                "phone": data.phone,
                "company_id": data.company_id,
                "company": data.company,
                "content": data.content,
                "positions": data.applyList
            };
            let thedata = JSON.stringify(datas);
            $.ajax({
                url: this.state.rooturl + '/api/postAdvertisementPoint?token=' + sessionStorage.getItem("token"),
                data: thedata,
                type: "post",
                dataType: "json",
                success: function (data) {
                    console.log("getRoomRentSquareType", data);
                    if (data.status == 113) {
                    }
                    else {
                    }
                    if (data.return_code == 100) {
                        pBack("摆点申请提交完成");
                    }
                }
            });
        }
        getRoomBook(pBack, park_id, name) {
            console.log("getRoomBook", pBack, park_id, name);
            let theurl;
            $.ajax({
                url: this.state.rooturl + '/api/getRoomBook',
                type: "get",
                data: {
                    park_id: park_id,
                    name: name,
                    token: sessionStorage.getItem("token")
                },
                success: function (data) {
                    if (data.status == 113) {
                    }
                    else {
                        let dataJ = JSON.parse(data);
                        pBack(dataJ);
                    }
                }
            });
        }
        getRoomBookInfo(pBack, id) {
            $.ajax({
                url: this.state.rooturl + '/api/getRoomBookInfo',
                type: "get",
                data: {
                    id: id,
                    token: sessionStorage.getItem("token"),
                },
                success: function (data) {
                    if (data.status == 113) {
                    }
                    else {
                        let dataJ = JSON.parse(data);
                        pBack(dataJ);
                    }
                }
            });
        }
        bookingRoom(pBack, data) {
            console.log("bookingRoom", data);
            let datas = {
                'park_id': sessionStorage.getItem("park_id"),
                'staff_id': data.staff_id,
                "staff_name": data.applicant,
                "phone": data.phone,
                "company_id": data.company_id,
                "company": data.company,
                "public_id": data.room_id,
                "public_name": data.room_name,
                "start_date": data.start_date,
                "end_date": data.end_date,
                "theme": data.theme,
                "content": data.content,
            };
            let thedata = JSON.stringify(datas);
            $.ajax({
                url: this.state.rooturl + '/api/BookingRoom?token=' + sessionStorage.getItem("token"),
                data: thedata,
                type: "post",
                dataType: "json",
                success: function (data) {
                    console.log("BookingRoom", data);
                    if (data.status == 113) {
                    }
                    else {
                    }
                    if (data.return_code == 100) {
                        pBack("场地预定申请完成");
                    }
                }
            });
        }
        getRepairType(pBack) {
            $.ajax({
                url: this.state.rooturl + '/api/getRepairType?token=' + sessionStorage.getItem("token"),
                type: "get",
                success: function (data) {
                    console.log("getRepairType", data);
                    let dataJ = JSON.parse(data);
                    console.log("getRepairType", dataJ);
                    if (dataJ.return_code == 100) {
                        pBack(dataJ);
                    }
                }
            });
        }
        saveRepairInfo(pBack, data) {
            let datas = {
                'park_id': sessionStorage.getItem("park_id"),
                "type_id": data.type_id,
                "position": "E座b区三楼",
                "longitude": "10.55",
                "latitude": "66.666",
                "building_id": "a座",
                "floor_id": "1F",
                "room_id": "1",
                "room": "201-2",
                "company_id": data.company_id,
                "company": data.company,
                'staff_id': data.staff_id,
                "staff_name": data.contact,
                "phone": data.phone,
                "descript": data.descript,
                "img_url": data.img_url,
            };
            console.log("saveRepairInfo", datas);
            let thedata = JSON.stringify(datas);
            $.ajax({
                url: this.state.rooturl + '/api/saveRepairInfo?token=' + sessionStorage.getItem("token"),
                data: thedata,
                type: "post",
                dataType: "json",
                success: function (data) {
                    console.log("saveRepairInfo", data);
                    if (data.status == 113) {
                    }
                    else {
                    }
                    if (data.err_msg == "请求成功") {
                        pBack("在线报修申请完成");
                    }
                }
            });
        }
        getParkingList(pBack, park_id) {
            let data = {
                "return_code": "100",
                "response": [
                    {
                        "id": "100001",
                        "name": "a座地下停车场",
                        "longitude": "10.55",
                        "latitude": "66.666",
                    },
                    {
                        "id": "100002",
                        "name": "b座地下停车场",
                        "longitude": "10.55",
                        "latitude": "66.666",
                    }
                ],
                "err_msg": ""
            };
            pBack(data);
        }
        getCarType(pBack, park_id) {
            console.log("显示车辆类型列表");
            let data = {
                "return_code": "100",
                "response": [
                    {
                        "id": "1009",
                        "name": "中小型车",
                    },
                    {
                        "id": "1009",
                        "name": "大型车",
                    }
                ],
                "err_msg": ""
            };
            pBack(data);
        }
        saveParkingApply(pBack, data) {
            let thedata = {
                'park_id': sessionStorage.getItem("park_id"),
                "car_license_color": data.car_license_color,
                "car_license": data.car_license,
                "applicant": data.applicant,
                "phone": data.phone,
                "company": data.company,
                "company_address": data.company_address,
                "car_owner": data.car_owner,
                "car_brand": data.car_brand,
                "car_model": data.car_model,
                "car_color": data.car_color,
                "car_type": data.car_type,
            };
            console.log("24提交车位申请信息", thedata);
        }
        saveParkingAppointment(pBack, data) {
            let thedata = {
                'park_id': sessionStorage.getItem("park_id"),
                "car_license_color": data.car_license_color,
                "car_license": data.car_license,
                "applicant": data.applicant,
                "phone": data.phone,
                "company": data.company,
                "company_address": data.company_address,
                "car_owner": data.car_owner,
                "car_brand": data.car_brand,
                "car_model": data.car_model,
                "car_color": data.car_color,
                "car_type": data.car_type,
                "underground_parking_id": data.underground_parking_id,
                "underground_parking_name": data.underground_parking_name,
            };
            console.log("25提交地库申请信息", thedata);
        }
        changeParkingCarInfo(pBack, data) {
            let thedata = {
                'park_id': sessionStorage.getItem("park_id"),
                "car_license_color": data.car_license_color,
                "car_license": data.car_license,
                "applicant": data.applicant,
                "phone": data.phone,
                "company": data.company,
                "company_address": data.company_address,
                "car_owner": data.car_owner,
                "car_brand": data.car_brand,
                "car_model": data.car_model,
                "car_color": data.car_color,
                "car_type": data.car_type,
                "orgin_car_license_color": data.orgin_car_license_color,
                "orgin_car_license": data.orgin_car_license,
                "orgin_car_owner": data.orgin_car_owner,
                "orgin_phone": data.orgin_phone,
            };
            console.log("26 提交车位变更", thedata);
            pBack("提交车位变更,成功！");
        }
        saveVisitorParkingAppointment(pBack, data) {
            let thedata = {
                'park_id': sessionStorage.getItem("park_id"),
                "car_license_color": data.car_license_color,
                "car_license": data.car_license,
                "applicant": data.applicant,
                "phone": data.phone,
                "company": data.company,
                "underground_parking_id": data.underground_parking_id,
                "underground_parking_name": data.underground_parking_name,
                "start_time": data.start_time,
                "end_time": data.end_time,
            };
            console.log("27 提交来访车辆预约", thedata);
            pBack("提交来访车辆预约,成功！");
        }
        getMicroCircleType(pBack) {
            $.ajax({
                url: this.state.rooturl + '/api/getMicroCircleType',
                data: {
                    token: sessionStorage.getItem("token")
                },
                type: "get",
                success: function (data) {
                    pBack(data);
                }
            });
        }
        getMicroCircleList(pBack, obj) {
            $.ajax({
                url: this.state.rooturl + '/api/getMicroCircleList',
                data: {
                    park_id: obj.park_id,
                    type_id: obj.type_id,
                    token: sessionStorage.getItem("token")
                },
                type: "get",
                success: function (data) {
                    pBack(data);
                }
            });
        }
        getMicroCircleInfo(pBack, id) {
            $.ajax({
                url: this.state.rooturl + '/api/getMicroCircleInfo',
                data: {
                    id: id,
                    token: sessionStorage.getItem("token")
                },
                type: "get",
                success: function (data) {
                    pBack(data);
                }
            });
        }
        saveMyMicroCircle(pBack, obj) {
            $.ajax({
                url: this.state.rooturl + '/api/saveMyMicroCircle',
                data: JSON.stringify({
                    park_id: obj.park_id,
                    user_id: obj.user_id,
                    type_id: obj.type_id,
                    name: obj.name,
                    content: obj.content,
                    token: sessionStorage.getItem("token")
                }),
                type: "post",
                success: function (data) {
                    pBack(data);
                }
            });
        }
        getHeadlines(pBack, park_id) {
            $.ajax({
                url: this.state.rooturl + '/api/getHeadlines',
                data: {
                    park_id: park_id,
                    token: sessionStorage.getItem("token")
                },
                type: "get",
                success: function (data) {
                    pBack(data);
                }
            });
        }
        getPreferentialPolicyType(pBack, park_id) {
            $.ajax({
                url: this.state.rooturl + '/api/getPreferentialPolicyType',
                data: {
                    park_id: park_id,
                    token: sessionStorage.getItem("token")
                },
                type: "get",
                success: function (data) {
                    pBack(data);
                }
            });
        }
        getPreferentialPolicies(pBack, obj) {
            $.ajax({
                url: this.state.rooturl + '/api/getPreferentialPolicies',
                data: {
                    park_id: obj.park_id,
                    type_id: obj.type_id,
                    token: sessionStorage.getItem("token")
                },
                type: "get",
                success: function (data) {
                    pBack(data);
                }
            });
        }
        getParkInformationType(pBack, park_id) {
            $.ajax({
                url: this.state.rooturl + '/api/getParkInformationType',
                data: {
                    park_id: park_id,
                    token: sessionStorage.getItem("token")
                },
                type: "get",
                success: function (data) {
                    pBack(data);
                }
            });
        }
        getParkInformationList(pBack, obj) {
            $.ajax({
                url: this.state.rooturl + '/api/getParkInformationList',
                data: {
                    park_id: obj.park_id,
                    type_id: obj.type_id,
                    token: sessionStorage.getItem("token")
                },
                type: "get",
                success: function (data) {
                    pBack(data);
                }
            });
        }
        getInformation(pBack, id) {
            $.ajax({
                url: this.state.rooturl + '/api/getInformation',
                data: {
                    id: id,
                    token: sessionStorage.getItem("token")
                },
                type: "get",
                success: function (data) {
                    pBack(data);
                }
            });
        }
        getActivityType(pBack, park_id) {
            $.ajax({
                url: this.state.rooturl + '/api/getActivityType',
                data: {
                    park_id: park_id,
                    token: sessionStorage.getItem("token")
                },
                type: "get",
                success: function (data) {
                    pBack(data);
                }
            });
        }
        getActivities(pBack, obj) {
            $.ajax({
                url: this.state.rooturl + '/api/getActivities',
                data: {
                    park_id: obj.park_id,
                    type_id: obj.type_id,
                    token: sessionStorage.getItem("token")
                },
                type: "get",
                success: function (data) {
                    pBack(data);
                }
            });
        }
        getActivitiyInfo(pBack, id) {
            $.ajax({
                url: this.state.rooturl + '/api/getActivitiyInfo',
                data: {
                    id: id,
                    user_id: JSON.parse(sessionStorage.getItem("userInfos")).userId,
                    token: sessionStorage.getItem("token")
                },
                type: "get",
                success: function (data) {
                    pBack(data);
                }
            });
        }
        postActivitySign(pBack, obj) {
            $.ajax({
                url: this.state.rooturl + '/api/postActivitySign',
                data: {
                    user_id: obj.user_id,
                    activity_id: obj.activity_id,
                    token: sessionStorage.getItem("token")
                },
                type: "post",
                success: function (data) {
                    pBack(data);
                }
            });
        }
        getThirdServiceType(pBack, park_id) {
            $.ajax({
                url: this.state.rooturl + '/api/getThirdServiceType',
                data: {
                    park_id: park_id,
                    token: sessionStorage.getItem("token")
                },
                type: "get",
                success: function (data) {
                    pBack(data);
                }
            });
        }
        getThirdServices(pBack, obj) {
            $.ajax({
                url: this.state.rooturl + '/api/getThirdServices',
                data: {
                    park_id: obj.park_id,
                    type_id: obj.type_id,
                    token: sessionStorage.getItem("token")
                },
                type: "get",
                success: function (data) {
                    pBack(data);
                }
            });
        }
        modifyUserInfo(pBack, username, phone, company_id) {
            $.ajax({
                url: this.state.rooturl + '/api/modifyUserInfo',
                data: {
                    id: JSON.parse(sessionStorage.getItem("userInfos")).userId,
                    username: username,
                    phone: phone,
                    company_id: company_id === "请先关联企业" ? "" : company_id,
                    token: sessionStorage.getItem("token")
                },
                type: "get",
                success: function (data) {
                    pBack(data);
                }
            });
        }
        getThirdServicesInfo(pBack, id) {
            $.ajax({
                url: this.state.rooturl + '/api/getThirdServicesInfo',
                data: {
                    id: id,
                    token: sessionStorage.getItem("token")
                },
                type: "get",
                success: function (data) {
                    pBack(data);
                }
            });
        }
        getRoleType(pBack) {
            $.ajax({
                url: this.state.rooturl + '/api/getRoleType',
                data: {
                    token: sessionStorage.getItem("token")
                },
                type: "get",
                success: function (data) {
                    pBack(data);
                }
            });
        }
        userAuthentication(pBack, obj) {
            console.log("用户身份认证提交 ", obj);
            $.ajax({
                url: this.state.rooturl + '/api/userAuthentication?token=' + sessionStorage.getItem("token"),
                data: JSON.stringify({
                    "id": obj.id,
                    "name": obj.name,
                    "company_name": obj.company,
                    "phone": obj.phone,
                    "park_id": sessionStorage.getItem("park_id"),
                    "role_id": 5,
                    "pic_amount": "1",
                    "pic": obj.pic,
                    "bind_company": [
                        {
                            "company_id": obj.bind_company[0].company_id,
                            "company_name": obj.bind_company[0].company_name,
                        }
                    ],
                    "add_company": [
                        {
                            "company_name": ""
                        }
                    ]
                }),
                type: "post",
                success: function (data) {
                    console.log(data.err_msg);
                    if (data.err_msg == "提交成功") {
                        pBack(data.err_msg);
                    }
                }
            });
        }
        getCompanyInfoByUser(pBack, id) {
            $.ajax({
                url: this.state.rooturl3 + '/api/getCompanyInfoByUser?user_id=' + id,
                type: "get",
                success: function (data) {
                    console.log(data);
                    pBack(data);
                }
            });
        }
        getWorkType(pBack) {
            $.ajax({
                url: this.state.rooturl + '/api/getWorkType',
                data: {
                    token: sessionStorage.getItem("token")
                },
                type: "get",
                success: function (data) {
                    pBack(data);
                }
            });
        }
        getMyAuthorityStateType(pBack, id) {
            $.ajax({
                url: this.state.rooturl + '/api/getMyAuthorityStateType',
                data: {
                    id: id,
                    token: sessionStorage.getItem("token")
                },
                type: "get",
                success: function (data) {
                    pBack(data);
                }
            });
        }
        getMyWork(pBack, obj) {
            let url = this.state.rooturl + "/api/getMyWork?";
            for (let key in obj) {
                url = url + key + "=" + obj[key] + "&";
            }
            url = url.substring(0, url.length - 1);
            $.ajax({
                url: url,
                data: {
                    token: sessionStorage.getItem("token")
                },
                type: "get",
                success: function (data) {
                    pBack(data);
                }
            });
        }
        getBookingRoomInfo(pBack, id) {
            $.ajax({
                url: this.state.rooturl + '/api/getBookingRoomInfo',
                data: {
                    id: id,
                    token: sessionStorage.getItem("token")
                },
                type: "get",
                success: function (data) {
                    pBack(data);
                }
            });
        }
        changeBookingRoomInfo(pBack, obj) {
            $.ajax({
                url: this.state.rooturl + '/api/changeBookingRoomInfo',
                data: {
                    uid: obj.uid,
                    id: obj.id,
                    state: obj.state,
                    reply: obj.reply,
                    token: sessionStorage.getItem("token")
                },
                type: "get",
                success: function (data) {
                    pBack(data);
                }
            });
        }
        getRefBookingRoomRole(pBack, workId) {
            $.ajax({
                url: this.state.rooturl + '/api/getRefBookingRoomRole',
                data: {
                    work_id: workId,
                    token: sessionStorage.getItem("token")
                },
                type: "get",
                success: function (data) {
                    pBack(data);
                }
            });
        }
        changeBookingRoomRole(pBack, obj) {
            $.ajax({
                url: this.state.rooturl + '/api/changeBookingRoomRole',
                data: {
                    work_id: obj.workId,
                    current_role_id: obj.currentRoleId,
                    current_role_name: obj.currentRoleName,
                    next_role_id: obj.nextRoleId,
                    next_role_name: obj.nextRoleName,
                    token: sessionStorage.getItem("token")
                },
                type: "get",
                success: function (data) {
                    pBack(data);
                }
            });
        }
        getRoleAuthenticationInfo(pBack, id) {
            $.ajax({
                url: this.state.rooturl + '/api/getRoleAuthenticationInfo',
                data: {
                    id: id,
                    token: sessionStorage.getItem("token")
                },
                type: "get",
                success: function (data) {
                    pBack(data);
                }
            });
        }
        changeRoleAuthenticationInfo(pBack, obj) {
            $.ajax({
                url: this.state.rooturl + '/api/changeRoleAuthenticationInfo',
                data: {
                    uid: obj.uid,
                    id: obj.id,
                    state: obj.state,
                    reply: obj.reply,
                    token: sessionStorage.getItem("token")
                },
                type: "get",
                success: function (data) {
                    pBack(data);
                }
            });
        }
        getRefRoleAuthenticationRole(pBack, workId) {
            $.ajax({
                url: this.state.rooturl + '/api/getRefRoleAuthenticationRole',
                data: {
                    work_id: workId,
                    token: sessionStorage.getItem("token")
                },
                type: "get",
                success: function (data) {
                    pBack(data);
                }
            });
        }
        changeRoleAuthenticationRole(pBack, obj) {
            $.ajax({
                url: this.state.rooturl + '/api/changeRoleAuthenticationRole',
                data: {
                    work_id: obj.workId,
                    current_role_id: obj.currentRoleId,
                    current_role_name: obj.currentRoleName,
                    next_role_id: obj.nextRoleId,
                    next_role_name: obj.nextRoleName,
                    token: sessionStorage.getItem("token")
                },
                type: "get",
                success: function (data) {
                    pBack(data);
                }
            });
        }
        getAdvertisementPointInfo(pBack, id) {
            $.ajax({
                url: this.state.rooturl + '/api/getAdvertisementPointInfo',
                data: {
                    id: id,
                    token: sessionStorage.getItem("token")
                },
                type: "get",
                success: function (data) {
                    pBack(data);
                }
            });
        }
        changeAdvertisementPointInfo(pBack, obj) {
            $.ajax({
                url: this.state.rooturl + '/api/changeAdvertisementPointInfo',
                data: {
                    uid: obj.uid,
                    id: obj.id,
                    state: obj.state,
                    reply: obj.reply,
                    token: sessionStorage.getItem("token")
                },
                type: "get",
                success: function (data) {
                    pBack(data);
                }
            });
        }
        getAdvertisementPointRole(pBack, workId) {
            $.ajax({
                url: this.state.rooturl + '/api/getAdvertisementPointRole',
                data: {
                    work_id: workId,
                    token: sessionStorage.getItem("token")
                },
                type: "get",
                success: function (data) {
                    pBack(data);
                }
            });
        }
        changeAdvertisementPointRole(pBack, obj) {
            $.ajax({
                url: this.state.rooturl + '/api/changeAdvertisementPointRole',
                data: {
                    work_id: obj.workId,
                    current_role_id: obj.currentRoleId,
                    current_role_name: obj.currentRoleName,
                    next_role_id: obj.nextRoleId,
                    next_role_name: obj.nextRoleName,
                    token: sessionStorage.getItem("token")
                },
                type: "get",
                success: function (data) {
                    pBack(data);
                }
            });
        }
        getRepairInfo(pBack, id) {
            $.ajax({
                url: this.state.rooturl + '/api/getRepairInfo',
                data: {
                    id: id,
                    token: sessionStorage.getItem("token")
                },
                type: "get",
                success: function (data) {
                    pBack(data);
                }
            });
        }
        changeRepairInfo(pBack, obj) {
            $.ajax({
                url: this.state.rooturl + '/api/changeRepairInfo',
                data: {
                    uid: obj.uid,
                    id: obj.id,
                    state: obj.state,
                    reply: obj.reply,
                    token: sessionStorage.getItem("token")
                },
                type: "get",
                success: function (data) {
                    pBack(data);
                }
            });
        }
        getRepairInfoRole(pBack, workId) {
            $.ajax({
                url: this.state.rooturl + '/api/getRepairInfoRole',
                data: {
                    work_id: workId,
                    token: sessionStorage.getItem("token")
                },
                type: "get",
                success: function (data) {
                    pBack(data);
                }
            });
        }
        changeRepairInfoRole(pBack, obj) {
            $.ajax({
                url: this.state.rooturl + '/api/changeRepairInfoRole',
                data: {
                    work_id: obj.workId,
                    current_role_id: obj.currentRoleId,
                    current_role_name: obj.currentRoleName,
                    next_role_id: obj.nextRoleId,
                    next_role_name: obj.nextRoleName,
                    token: sessionStorage.getItem("token")
                },
                type: "get",
                success: function (data) {
                    pBack(data);
                }
            });
        }
        getMyMsgType(pBack) {
            $.ajax({
                url: this.state.rooturl + '/api/getMyMsgType',
                data: {
                    park_id: 1001,
                    token: sessionStorage.getItem("token")
                },
                type: "get",
                success: function (data) {
                    pBack(data);
                }
            });
        }
        getMyMsgInfo(pBack, typeId) {
            $.ajax({
                url: this.state.rooturl + '/api/getMyMsgInfo',
                data: {
                    id: JSON.parse(sessionStorage.getItem("userInfos")).userId,
                    type_id: typeId,
                    token: sessionStorage.getItem("token")
                },
                type: "get",
                success: function (data) {
                    pBack(data);
                }
            });
        }
        getMyStatistic(pBack) {
            $.ajax({
                url: this.state.rooturl + '/api/getMyStatistic',
                data: {
                    id: sessionStorage.getItem("park_id"),
                    token: sessionStorage.getItem("token")
                },
                type: "get",
                success: function (data) {
                    pBack(data);
                }
            });
        }
        getParkBuildingInfo(pBack) {
            $.ajax({
                url: this.state.rooturl + '/api/getParkBuildingInfo',
                data: {
                    id: JSON.parse(sessionStorage.getItem("userInfos")).userId,
                    park_id: sessionStorage.getItem("park_id"),
                    token: sessionStorage.getItem("token")
                },
                type: "get",
                success: function (data) {
                    pBack(data);
                }
            });
        }
        getRoomInfo(pBack, roomId) {
            $.ajax({
                url: this.state.rooturl + '/api/getRoomInfo',
                data: {
                    id: JSON.parse(sessionStorage.getItem("userInfos")).userId,
                    park_id: sessionStorage.getItem("park_id"),
                    room_id: roomId,
                    token: sessionStorage.getItem("token")
                },
                type: "get",
                success: function (data) {
                    pBack(data);
                }
            });
        }
        getRoomDecorateType(pBack) {
            $.ajax({
                url: this.state.rooturl + '/api/getRoomDecorateType',
                data: {
                    id: JSON.parse(sessionStorage.getItem("userInfos")).userId,
                    park_id: sessionStorage.getItem("park_id"),
                    token: sessionStorage.getItem("token")
                },
                type: "get",
                success: function (data) {
                    pBack(data);
                }
            });
        }
        saveRoomBaseInfo(pBack, obj) {
            console.log(obj);
            $.ajax({
                url: this.state.rooturl + '/api/saveRoomBaseInfo?token=' + sessionStorage.getItem("token"),
                data: JSON.stringify({
                    id: JSON.parse(sessionStorage.getItem("userInfos")).userId,
                    room_id: sessionStorage.getItem("roomId"),
                    square: obj.square,
                    lift: obj.lift,
                    title: obj.title,
                    price: obj.price,
                    free_rent: obj.freeRent,
                    decorate_name: obj.decorateName,
                    decorate_id: obj.decorateId,
                    station_amount: obj.stationAmount,
                    inspection_time: obj.inspectionTime,
                    enable_rent_time: obj.enableRentTime,
                    headimageurl: obj.headimageurl,
                    pic: obj.pic,
                    video: obj.video,
                    contact: obj.contact,
                    phone: obj.phone,
                    require: obj.require,
                    sell_price: obj.sellPrice,
                    floor_id: obj.floorId
                }),
                type: "post",
                success: function (data) {
                    pBack(data);
                }
            });
        }
        saveRoomRentInfo(pBack, obj) {
            $.ajax({
                url: this.state.rooturl + '/api/saveRoomRentInfo?token=' + sessionStorage.getItem("token"),
                data: JSON.stringify({
                    id: JSON.parse(sessionStorage.getItem("userInfos")).userId,
                    room_id: sessionStorage.getItem("roomId"),
                    state: obj.state,
                    company_id: obj.companyId,
                    company_name: obj.companyName,
                    user: obj.user,
                    phone: obj.phone,
                    rent_date: obj.rentDate,
                    rent_end_date: obj.rentEndDate,
                    default_room: obj.defaultRoom,
                    sell_state: obj.sellState
                }),
                type: "post",
                success: function (data) {
                    pBack(data);
                }
            });
        }
        saveRoomPartBaseInfo(pBack, obj) {
            $.ajax({
                url: this.state.rooturl + '/api/saveRoomPartBaseInfo?token=' + sessionStorage.getItem("token"),
                data: JSON.stringify({
                    id: JSON.parse(sessionStorage.getItem("userInfos")).userId,
                    park_id: sessionStorage.getItem("park_id"),
                    room_id: sessionStorage.getItem("roomId"),
                    part: obj
                }),
                type: "post",
                success: function (data) {
                    pBack(data);
                }
            });
        }
        postParkPhone(pBack, phone) {
            $.ajax({
                url: this.state.rooturl + '/api/postParkPhone',
                data: {
                    id: JSON.parse(sessionStorage.getItem("userInfos")).userId,
                    park_id: sessionStorage.getItem("park_id"),
                    phone: phone,
                    token: sessionStorage.getItem("token")
                },
                type: "get",
                success: function (data) {
                    pBack(data);
                }
            });
        }
        saveCompanyInfo(pBack, obj) {
            console.log("tjjjj", obj);
            $.ajax({
                url: this.state.rooturl + '/api/saveCompanyInfo?token=' + sessionStorage.getItem("token"),
                dataType: "json",
                data: JSON.stringify(obj),
                type: "post",
                success: function (data) {
                    console.log(data);
                    pBack(data);
                }
            });
        }
        getUserInfo(pBack) {
            $.ajax({
                url: this.state.userInfoUrl,
                dataType: "json",
                data: "",
                type: "get",
                success: function (data) {
                    pBack(data);
                }
            });
        }
        getParkPointList(pBack, type, name) {
            $.ajax({
                url: this.state.rooturl + '/api/getParkPointList?token=' + sessionStorage.getItem("token"),
                dataType: "json",
                data: {
                    park_id: sessionStorage.getItem("park_id"),
                    point_type: type,
                },
                type: "get",
                success: function (data) {
                    pBack(data, name);
                }
            });
        }
        getParkShowInfo(pBack, park_id) {
            $.ajax({
                url: this.state.rooturl + '/api/getParkShowInfo?token=' + sessionStorage.getItem("token"),
                dataType: "json",
                data: {
                    park_id: sessionStorage.getItem("park_id"),
                },
                type: "get",
                success: function (data) {
                    pBack(data);
                }
            });
        }
        getParkBuildingAndFloorLevel(pBack) {
            $.ajax({
                url: this.state.rooturl + '/api/getParkBuildingAndFloorLevel?token=' + sessionStorage.getItem("token"),
                dataType: "json",
                data: {
                    id: JSON.parse(sessionStorage.getItem("userInfos")).userId,
                    park_id: sessionStorage.getItem("park_id")
                },
                type: "get",
                success: function (data) {
                    pBack(data);
                }
            });
        }
        getExpiredRoomInfo(pBack, obj) {
            console.log("obj", obj);
            $.ajax({
                url: this.state.rooturl + '/api/getExpiredRoomInfo?token=' + sessionStorage.getItem("token"),
                dataType: "json",
                data: {
                    id: obj.id,
                    park_id: obj.parkId,
                    room_name: obj.roomName,
                    date: obj.date,
                    building_id: obj.buildingId,
                    floor_id: obj.floorId
                },
                type: "get",
                success: function (data) {
                    pBack(data);
                }
            });
        }
    }
    exports.default = DataService;
});
define("applyPut", ["require", "exports", "react", "react-router-dom", "antd-mobile", "dataService", "compat", "css!./styles/antd-mobile.css", "css!./styles/resetAntdMobile.css"], function (require, exports, React, RouterDOM, antd_mobile_2, dataService_2, compat_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ApplyPut extends React.Component {
        constructor(props) {
            super(props);
            this.dataService = new dataService_2.default();
            this.globalAction = new compat_2.default();
            this.state = {
                applyPutStartTimeBox: "hide",
                applyPutEndTimeBox: "hide",
                timeIndex: "",
                companyBox: "hide",
                companyUL: [],
                companyIndexof: 0,
                company_id_in: "",
                company_name_in: "",
                startDate: "",
                endDate: "",
                inval: "",
                applicant: "",
                phone: "",
                company: "请选择申请企业",
                applyPutcss: "applyPut-part ",
                iconfont: "iconfont iconfont-unturn",
                applyPutul: "applyPutul-part applyPutul",
                applyList: [
                    {
                        id: "1",
                        code: "menko_1",
                        name: "门口1",
                        startTime: "开始日期",
                        endTime: "结束日期",
                        address: "门口1",
                        start_date: '',
                        end_date: '',
                        longitude: '',
                        latitude: '',
                        start_time: 0,
                        end_time: 0,
                    }, {
                        id: "2",
                        code: "menko_2",
                        name: "门口2",
                        startTime: "开始日期",
                        endTime: "结束日期",
                        address: "门口1",
                        start_date: '',
                        end_date: '',
                        longitude: '',
                        latitude: '',
                        start_time: '',
                        end_time: '',
                    },
                ],
                address: "",
                content: "请将具体内容描述出来。（200字内）",
                inputValue: "",
                value: '2017-01-25',
                staff_id: "",
                postData: false,
            };
            this.delApply = this.delApply.bind(this);
        }
        componentDidMount() {
            let data = sessionStorage.getItem("userInfos");
            let dataObj = JSON.parse(data);
            this.setState({
                applicant: dataObj.name,
                phone: dataObj.phone,
                staff_id: dataObj.userId,
            });
            if (dataObj.enterprises.length == 0) {
                this.setState({
                    companyUL: [],
                    company: "请先关联企业",
                    company_id: "请先关联企业",
                });
            }
            else {
                this.setState({
                    companyUL: [],
                    company: sessionStorage.getItem("enterprise"),
                    company_id: sessionStorage.getItem("enterpriseId"),
                });
            }
        }
        toggleFold() {
            console.log("tftft");
            if (this.state.applyPutcss == "applyPut-all") {
                this.setState({
                    applyPutcss: "applyPut-part",
                    applyPutul: " applyPutul-part applyPutul",
                });
                this.globalAction.web_call_webgl_continueloadModuler();
            }
            else {
                this.setState({
                    applyPutcss: "applyPut-all",
                    applyPutul: " applyPutul-all applyPutul",
                });
                this.globalAction.web_call_webgl_pauseloadModuler();
            }
            if (this.state.iconfont == "iconfont iconfont-unturn") {
                this.setState({
                    iconfont: "iconfont iconfont-turn",
                });
            }
            else {
                this.setState({
                    iconfont: "iconfont iconfont-unturn",
                });
            }
        }
        mapReturnpark() {
            this.globalAction.web_call_webgl_mapReturnpark();
        }
        foucus(event) {
            console.log("address聚焦2", event.target.value);
            let index = event.target.getAttribute("data-index");
            console.log("address输入index", index);
        }
        blur(event) {
        }
        changeContent(event) {
            event.target.value = event.target.value.replace(/[, ]/g, '');
            this.setState({
                content: event.target.value,
            });
        }
        foucusContent(event) {
            if (this.state.content === "请将具体内容描述出来。（200字内）") {
                this.setState({ content: "" });
            }
        }
        blurContent(event) {
            if (this.state.content == "") {
                this.setState({ content: "请将具体内容描述出来。（200字内）" });
            }
        }
        changeAddress(event) {
            let index = event.target.getAttribute("data-index");
            let applyList = this.state.applyList;
            applyList[index].address = event.target.value;
            this.setState({
                applyList: applyList,
            });
        }
        delApply(event) {
            let index = event.target.getAttribute("data-index");
            let applyList = this.state.applyList;
            applyList.splice(index, 1);
            this.setState({ applyList: applyList });
            console.log("删除条目2", this.state.applyList);
            let id = event.target.getAttribute("data-id");
            let data = {
                id: id
            };
            this.globalAction.web_call_webgl_cancelApplyPut(data);
        }
        changeStart(event) {
            let index = event.target.getAttribute("data-index");
            let applyList = this.state.applyList;
            console.log("start输入index1", this.state.startDate);
            applyList[index].start_date = this.state.startDate;
            this.setState({
                applyList: applyList,
            });
            console.log("start输入index2", this.state.applyList);
        }
        changeEnd(event) {
            let index = event.target.getAttribute("data-index");
            let applyList = this.state.applyList;
            console.log("end输入index1", this.state.endDate);
            applyList[index].end_date = this.state.endDate;
            this.setState({
                applyList: applyList,
            });
            console.log("end输入index2", this.state.applyList);
        }
        setStartDate(date) {
            const d = new Date(date);
            var now = new Date();
            console.log(d, now);
            if (now > d) {
                antd_mobile_2.Toast.info('开始时间，不能早于当前时间');
            }
            else {
                var dateStr = JSON.stringify(date);
                var dateN = dateStr.slice(1, 11);
                var index = this.state.timeIndex;
                let applyList = this.state.applyList;
                console.log("start输入index1", dateN);
                applyList[index].startTime = dateN;
                applyList[index].start_date = dateN;
                applyList[index].start_time = date;
                this.setState({
                    applyList: applyList,
                    applyPutStartTimeBox: "hide"
                });
            }
            console.log("start输入index2", this.state.applyList);
        }
        setEndDate(date) {
            const d = new Date(date);
            var now = new Date();
            console.log(d, now);
            if (now > d) {
                antd_mobile_2.Toast.info('结束时间，不能早于当前时间');
            }
            else {
                var dateStr = JSON.stringify(date);
                var dateN = dateStr.slice(1, 11);
                var index = this.state.timeIndex;
                let applyList = this.state.applyList;
                console.log("end输入index1", dateN);
                applyList[index].endTime = dateN;
                applyList[index].end_date = dateN;
                applyList[index].end_time = date;
                this.setState({
                    applyList: applyList,
                    applyPutEndTimeBox: "hide"
                });
            }
            console.log("end输入index2", this.state.applyList);
        }
        clickStart(event) {
            let index = event.target.getAttribute("data-index");
            console.log("clickStart输入index", index);
            this.setState({
                timeIndex: index,
                applyPutStartTimeBox: "show"
            });
        }
        clickEnd(event) {
            let index = event.target.getAttribute("data-index");
            console.log("clickEnd输入index", index);
            this.setState({
                timeIndex: index,
                applyPutEndTimeBox: "show"
            });
        }
        showCompanyBox() {
            this.setState({
                companyBox: "rollSelectCauseBox",
                company_id_in: this.state.companyUL[this.state.companyIndexof].id,
                company_name_in: this.state.companyUL[this.state.companyIndexof].name,
            });
        }
        inCompanyeList(i, id, name) {
            this.setState({
                companyIndexof: i,
                company_id_in: id,
                company_name_in: name,
            });
        }
        hideCompanyBox() {
            this.setState({
                companyBox: "hide",
            });
        }
        getCompanyBox() {
            this.setState({
                companyBox: "hide",
                company_id: this.state.company_id_in,
                company: this.state.company_name_in,
            });
        }
        sumbitApplyput() {
            let postData = 0;
            console.log("提交摆点申请", this.state);
            if (this.state.company == "请先关联企业") {
                antd_mobile_2.Toast.info('请先前往关联企业', 2);
            }
            if (this.state.phone == "") {
                antd_mobile_2.Toast.info('请先绑定联系电话', 2);
            }
            if (this.state.applyList.length == 0) {
                antd_mobile_2.Toast.info('请选择摆点位置', 2);
            }
            if (this.state.content == "请将具体内容描述出来。（200字内）") {
                antd_mobile_2.Toast.info('请描述具体内容', 2);
            }
            else {
                $.each(this.state.applyList, function (index, item) {
                    var dayChou_s = new Date(item.startTime).getTime();
                    var dayChou_e = new Date(item.endTime).getTime();
                    if (item.startTime == "开始日期") {
                        antd_mobile_2.Toast.info('请填写开始日期', 2);
                        postData = 0;
                    }
                    else if (item.endTime == "结束日期") {
                        antd_mobile_2.Toast.info('请填写结束日期', 2);
                        postData = 0;
                    }
                    else if (dayChou_s > dayChou_e) {
                        antd_mobile_2.Toast.info('结束日期不能早于开始日期');
                        postData = 0;
                    }
                    else {
                        postData = 1;
                    }
                    ;
                });
            }
            if (postData == 1) {
                this.dataService.postAdvertisementPoint(this.sumbitApplyputsucceed, this.state);
            }
        }
        sumbitApplyputsucceed(data) {
            antd_mobile_2.Toast.info(data, 2);
            window.history.back();
        }
        render() {
            return (React.createElement("div", null,
                React.createElement("p", { className: "companyInfotit" },
                    React.createElement("span", null, "\u6446\u70B9\u7533\u8BF7")),
                React.createElement("div", { className: this.state.applyPutcss },
                    React.createElement("div", { className: "foleBtn" },
                        React.createElement(RouterDOM.Link, { to: "/home" },
                            React.createElement("p", { className: "companyGoHomeLeft", style: { color: "#949494" }, onClick: this.mapReturnpark.bind(this) },
                                React.createElement("i", { className: "iconfont companyInfoicon" }, "\uE83B"),
                                React.createElement("span", null, "\u8FD4\u56DE"))),
                        React.createElement("p", { className: "companyGoHomeRight" },
                            React.createElement("i", { className: this.state.iconfont, style: { "fontSize": "5rem", "color": "#C0C0C0" }, onClick: this.toggleFold.bind(this) }, "\uE849"))),
                    React.createElement("form", null,
                        React.createElement("ul", { className: this.state.applyPutul },
                            React.createElement("li", null,
                                React.createElement("span", { className: "applySpanleft" },
                                    React.createElement("span", { className: "redStar" }, "*"),
                                    "\u7533\u8BF7\u4EBA"),
                                React.createElement("p", { className: "applyRight" }, this.state.applicant)),
                            React.createElement("li", null,
                                React.createElement("span", { className: "redStar" }, "*"),
                                "\u624B\u673A\u53F7\u7801",
                                React.createElement("p", { className: "applyRight" },
                                    React.createElement("input", { type: "text", value: this.state.phone, placeholder: "\u8BF7\u5148\u7ED1\u5B9A\u7535\u8BDD\u53F7\u7801 ", style: { "border": "0" }, readOnly: true }))),
                            React.createElement("li", null,
                                React.createElement("span", { className: "redStar" }, "*"),
                                "\u7533\u8BF7\u5355\u4F4D",
                                React.createElement("p", { className: "applyRight" }, this.state.company)),
                            React.createElement("li", null,
                                React.createElement("p", null,
                                    React.createElement("span", { className: "redStar" }, "*"),
                                    React.createElement("span", { style: { "font-size": "2.3rem" } }, "\u5177\u4F53\u5185\u5BB9\uFF1A")),
                                React.createElement("textarea", { className: "getapplyPuttextarea", value: this.state.content, placeholder: "", onChange: this.changeContent.bind(this), onFocus: this.foucusContent.bind(this), onBlur: this.blurContent.bind(this) })),
                            React.createElement("div", { className: this.state.applyPutStartTimeBox },
                                React.createElement(antd_mobile_2.DatePicker, { mode: "date", title: "\u8BF7\u9009\u62E9\u65E5\u671F", extra: "\u8BF7\u9009\u62E9", value: this.state.startDate, onChange: this.setStartDate.bind(this) },
                                    React.createElement(antd_mobile_2.List.Item, { arrow: "horizontal" }, "\u5F00\u59CB\u65E5\u671F"))),
                            React.createElement("div", { className: this.state.applyPutEndTimeBox },
                                React.createElement(antd_mobile_2.DatePicker, { mode: "date", title: "\u8BF7\u9009\u62E9\u65E5\u671F", extra: "\u8BF7\u9009\u62E9", value: this.state.endDate, onChange: this.setEndDate.bind(this) },
                                    React.createElement(antd_mobile_2.List.Item, { arrow: "horizontal" }, "\u7ED3\u675F\u65E5\u671F"))),
                            React.createElement("div", { className: "applyList" },
                                React.createElement("p", { className: "theapplyP" }, "\u8BF7\u5728\u6240\u9700\u6295\u653E\u5730\u70B9\u540E\u8BBE\u7F6E\u6295\u653E\u5F00\u59CB\u53CA\u7ED3\u675F\u65F6\u95F4"),
                                React.createElement("ul", { style: { "margin": "0" } },
                                    React.createElement("li", null,
                                        React.createElement("div", { className: "applyAddress" }, "\u5E7F\u544A\u653E\u7F6E\u5730\u70B9"),
                                        React.createElement("div", { className: "applytime" }, "\u5F00\u59CB\u65F6\u95F4"),
                                        React.createElement("div", { className: "applytime" }, "\u7ED3\u675F\u65F6\u95F4"),
                                        React.createElement("div", { className: "applyicom" },
                                            " ",
                                            React.createElement("i", { className: "iconfont", style: { "color": "#fff" } }, "\uE82D"))),
                                    this.state.applyList.map((i, index) => {
                                        return (React.createElement("li", { key: index },
                                            React.createElement("div", { className: "applyAddress" },
                                                React.createElement("span", { className: "applyIndexof" }, index + 1),
                                                React.createElement("input", { className: "", type: "text", placeholder: "", style: { " width": "18rem", "border": 0 }, value: i.name })),
                                            React.createElement("div", { className: "applytime", style: { "color": "#158CE8" }, onClick: this.clickStart.bind(this), "data-index": index },
                                                i.startTime,
                                                " "),
                                            React.createElement("div", { className: "applytime", style: { "color": "#158CE8" }, onClick: this.clickEnd.bind(this), "data-index": index }, i.endTime),
                                            React.createElement("div", { className: "applyicom" },
                                                " ",
                                                React.createElement("i", { className: "iconfont", onClick: this.delApply, "data-longitude": i.longitude, "data-latitude": i.latitude, "data-id": i.id, "data-index": index, style: { "color": "#158CE8" } }, "\uE81C"))));
                                    }))),
                            React.createElement("div", { className: "applyPutSumbit", onClick: this.sumbitApplyput.bind(this) }, "\u63D0\u4EA4"))),
                    React.createElement("div", { className: this.state.companyBox },
                        React.createElement("ul", { className: "rollSelectCauseULcss" }, this.state.companyUL.map((i, index) => {
                            return (React.createElement("li", { className: this.state.companyIndexof == index ? "rollSelectCauseli-active" : "rollSelectCauseli", onClick: this.inCompanyeList.bind(this, index, i.id, i.name) }, i.name));
                        })),
                        React.createElement("div", { className: "rollSelectCuasedBtn" },
                            React.createElement("span", { className: "rollSelectCancel", onClick: this.hideCompanyBox.bind(this) }, "\u53D6\u6D88"),
                            React.createElement("span", { className: "rollSelectConfirm", onClick: this.getCompanyBox.bind(this) }, "\u786E\u8BA4"))))));
        }
    }
    exports.default = ApplyPut;
});
define("attractInvestment", ["require", "exports", "react", "react-router-dom", "css!./styles/attractInvestment.css"], function (require, exports, React, react_router_dom_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class AttractInvestment extends React.Component {
        constructor() {
            super(...arguments);
            this.state = {
                tagArr: [
                    { name: "园区企业", imgUrl: "./park_m/image/business_administration.png", url: "/attractInvestmentList" },
                    { name: "园区人员", imgUrl: "./park_m/image/park_staff.png", url: "" },
                    { name: "意向用户", imgUrl: "./park_m/image/intended_users.png", url: "" }
                ]
            };
        }
        goBack() {
            this.props.history.goBack();
        }
        render() {
            return (React.createElement("div", { className: "rent-room" },
                React.createElement("div", { className: "rent-room-back" },
                    React.createElement("div", { style: { float: "left" }, onClick: this.goBack.bind(this) },
                        React.createElement("img", { src: "./park_m/image/back.png", style: { margin: "-10px 10px 0 0" } }),
                        React.createElement("span", null, "\u62DB\u5546\u7BA1\u7406"))),
                React.createElement("div", { style: { backgroundColor: "#ffffff", width: "100%", height: "100%", marginTop: "15px" } }, this.state.tagArr.map((item, index) => {
                    return (React.createElement(react_router_dom_1.Link, { to: item.url },
                        React.createElement("div", { key: index, style: { width: "33%", height: "300px", float: "left", textAlign: "center", marginTop: "150px" } },
                            React.createElement("img", { src: item.imgUrl, style: { width: "120px", height: "120px" } }),
                            React.createElement("div", { style: { fontSize: "40px", color: "#333333" } }, item.name))));
                }))));
        }
    }
    exports.default = AttractInvestment;
});
define("attractInvestmentList", ["require", "exports", "react", "css!./styles/attractInvestmentList.css"], function (require, exports, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class AttractInvestmentList extends React.Component {
        constructor() {
            super(...arguments);
            this.state = {
                inputValue: "搜索企业",
                listArr: [
                    { deleteState: false }, { deleteState: false }, { deleteState: false }, { deleteState: false }, { deleteState: false }, { deleteState: false }, { deleteState: false },
                    { deleteState: false }, { deleteState: false }, { deleteState: false }, { deleteState: false }, { deleteState: false }, { deleteState: false }, { deleteState: false }
                ],
                deleteState: true,
                deleteNumber: 0
            };
        }
        foucus() {
            if (this.state.inputValue === "搜索企业") {
                this.setState({ inputValue: "" });
            }
        }
        blur() {
            if (this.state.inputValue === "") {
                this.setState({ inputValue: "搜索企业" });
            }
        }
        change(event) {
            this.setState({ inputValue: event.target.value });
        }
        clickTag(index) {
            let listArr = this.state.listArr;
            let deleteNumber = 0;
            listArr[index].deleteState = !listArr[index].deleteState;
            listArr.forEach(item => {
                if (item.deleteState) {
                    deleteNumber++;
                }
            });
            this.setState({ listArr: listArr, deleteNumber: deleteNumber });
        }
        goBack() {
            this.props.history.goBack();
        }
        delete() {
            this.setState({ deleteState: !this.state.deleteState });
        }
        render() {
            return (React.createElement("div", { className: "infoarea" },
                React.createElement("div", { className: "infoarea-top" },
                    React.createElement("div", { className: "infoarea-child-top" },
                        React.createElement("img", { src: "./park_m/image/whiteBack.png", style: { margin: "0 10px 30px -15px", padding: "15px 15px 15px 15px" }, onClick: this.goBack.bind(this) }),
                        React.createElement("input", { className: "infoarea-input", value: this.state.inputValue, onFocus: this.foucus.bind(this), onBlur: this.blur.bind(this), onChange: this.change.bind(this), style: { width: "82%" } }),
                        React.createElement("img", { src: "./park_m/image/search.png", className: "infoarea-search-img", style: { left: "-78%" } }),
                        React.createElement("img", { src: "./park_m/image/bottom.png", style: { position: "relative", left: "-13%", bottom: "10px" } }),
                        React.createElement("span", { style: { position: "absolute", fontSize: "40px", left: "73%", top: "68px", fontWeight: "600" } }, "\u5168\u90E8"))),
                React.createElement("div", { className: "search-user-list" },
                    this.state.listArr.map((item, index) => {
                        return (React.createElement("div", { key: index, className: "attract-investment-list-child", onClick: e => this.clickTag(index) },
                            React.createElement("div", { style: { float: "left" } },
                                React.createElement("img", { src: item.deleteState ? "./park_m/image/delete_checked.png" : "./park_m/image/unchecked.png", width: "50px", height: "50px" })),
                            React.createElement("div", { style: { float: "left", width: "200px", height: "200px", marginLeft: "-40px" } },
                                React.createElement("img", { src: "./park_m/image/logo.png" })),
                            React.createElement("div", { style: { float: "left", height: "100%" } },
                                React.createElement("div", { style: { height: "25%", margin: "-30px 0 25px 0" } }, "\u6D59\u6C5F\u6C38\u62D3\u4FE1\u606F\u79D1\u6280\u6709\u9650\u516C\u53F8"),
                                React.createElement("img", { src: "./park_m/image/position.png", style: { width: "50px", height: "50px", marginBottom: "12px" } }),
                                React.createElement("span", { style: { color: "#949494", fontSize: "36px", marginLeft: "10px" } }, "E\u5EA7B\u533A-3F-301")),
                            React.createElement("div", { style: { float: "right", height: "100%", lineHeight: "100px" } },
                                React.createElement("div", null,
                                    React.createElement("img", { src: "./park_m/image/right.png", style: { margin: "30px 0 0 110px" } })),
                                React.createElement("div", { style: { fontSize: "32px", backgroundColor: "#F5F5F5", height: "50px", width: "150px", textAlign: "center", lineHeight: "50px", margin: "22px 10px 0 0" } }, "\u79D1\u6280\u670D\u52A1"))));
                    }),
                    this.state.listArr.length > 0 ?
                        React.createElement("div", { style: { width: "100%", height: "350px", textAlign: "center", fontSize: "40px", lineHeight: "100px" } }, "\u5230\u5E95\u5566~") :
                        React.createElement("div", { style: { width: "100%", height: "350px", textAlign: "center", fontSize: "40px", lineHeight: "100px" } }, "\u6682\u65E0\u5339\u914D\u6570\u636E")),
                !this.state.deleteState ?
                    React.createElement("div", { className: "rent-room-detail-bottom" },
                        React.createElement("div", { style: { float: "left", width: "50%", height: "100%", textAlign: "center", lineHeight: "130px", color: "#6C6C6C", backgroundColor: "#F2F2F2" }, onClick: this.delete.bind(this) }, "\u5220\u9664"),
                        React.createElement("div", { style: { float: "left", width: "50%", height: "100%", textAlign: "center", lineHeight: "130px", backgroundColor: "#0B8BF0", color: "#ffffff" } }, "\u65B0\u589E")) :
                    React.createElement("div", { className: "attract-investment-list-bottom" },
                        "\u5220\u9664(",
                        this.state.deleteNumber,
                        ")")));
        }
    }
    exports.default = AttractInvestmentList;
});
define("bookSite", ["require", "exports", "react", "react-router-dom", "antd-mobile", "dataService", "compat", "css!./styles/antd-mobile.css", "css!./styles/resetAntdMobile.css"], function (require, exports, React, RouterDOM, antd_mobile_3, dataService_3, compat_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class BookSite extends React.Component {
        constructor(props) {
            super(props);
            this.globalAction = new compat_3.default();
            this.state = {
                BookSitecss: "bookSite",
                showList: true,
                showInfo: false,
                showBook: false,
                companyInfotit: "companyInfotit",
            };
            BookSite.toggleView = this.toggleView.bind(this);
            BookSite.getSiteinfo = this.getSiteinfo.bind(this);
        }
        static getSiteinfo(id) { }
        getSiteinfo(id) {
            console.log("getCompanyinfo", id);
            this.toggleView("Info", id);
            BookInfo.getRoomdata(id);
        }
        static toggleView(a, id) { }
        ;
        toggleView(a, id) {
            console.log("fl", a);
            console.log("fl", id);
            if (a == "Info") {
                this.setState({
                    showList: false,
                    showInfo: true,
                    companyInfotit: "hide",
                });
            }
            else {
                this.setState({
                    showList: true,
                    showInfo: false,
                    companyInfotit: "companyInfotit",
                });
            }
        }
        mapReturnpark() {
            this.globalAction.web_call_webgl_mapReturnpark();
        }
        render() {
            return (React.createElement("div", { className: this.state.BookSitecss },
                React.createElement("p", { className: this.state.companyInfotit },
                    React.createElement("span", null, "\u573A\u5730\u9884\u7EA6")),
                React.createElement("div", { className: this.state.showList == true ? "show" : "hide" },
                    React.createElement(BookList, null)),
                React.createElement("div", { className: this.state.showInfo == true ? "show" : "hide" },
                    React.createElement(BookInfo, null))));
        }
    }
    exports.default = BookSite;
    class BookList extends React.Component {
        constructor(props) {
            super(props);
            this.dataService = new dataService_3.default();
            this.globalAction = new compat_3.default();
            this.state = {
                imgurlNull: "https://yongtoc-digitalcity.oss-cn-shenzhen.aliyuncs.com/images/9982b35c62bd7376bc29c5e1ef12ae6b.jpg",
                bookListcss: "bookList-part",
                iconfont: "iconfont iconfont-unturn",
                bookul: "bookul",
                indexOf: -1,
                park_id: 1,
                inputValue: "搜索",
                bookData: [],
                nullBookData: "hide",
                src: "about:'blank'",
                bookImgback: "bookImgback",
            };
            this.getRoomBook = this.getRoomBook.bind(this);
        }
        componentDidMount() {
            this.dataService.getRoomBook(this.getRoomBook, this.state.park_id, name);
        }
        getRoomBook(data) {
            console.log("returnRoomBook222", data);
            if (data.response) {
                this.setState({
                    nullBookData: "hide",
                    bookData: data.response,
                });
            }
            else {
                this.setState({
                    bookData: [],
                    nullBookData: "show"
                });
                console.log("没有符合条件的结果");
            }
        }
        toggleFold() {
            console.log("tftft");
            if (this.state.bookListcss == "bookList-all") {
                this.setState({
                    bookListcss: "bookList-part",
                    bookul: "bookul"
                });
                this.globalAction.web_call_webgl_continueloadModuler();
            }
            else {
                this.setState({
                    bookListcss: "bookList-all",
                    bookul: "bookul-all"
                });
                this.globalAction.web_call_webgl_pauseloadModuler();
            }
            if (this.state.iconfont == "iconfont iconfont-unturn") {
                this.setState({
                    iconfont: "iconfont iconfont-turn",
                });
            }
            else {
                this.setState({
                    iconfont: "iconfont iconfont-unturn",
                });
            }
        }
        showInfo(a, id, name, e) {
            BookSite.toggleView(a, id);
            console.log("more", a, id, name, e);
            BookInfo.getRoomdata(id);
        }
        bookActive(index, id, title, building, floor, room) {
            console.log("active", index, id);
            this.setState({
                indexOf: index,
                roomId: id
            });
            console.log("bookActive", this.state);
            let roomData = {
                m_pTile: title,
                m_pBuilding: building,
                m_pLayer: floor,
                m_pRoom: room,
            };
            this.globalAction.web_call_webgl_switchRoom(roomData);
        }
        foucus() {
            if (this.state.inputValue == "搜索") {
                this.setState({ inputValue: "" });
            }
        }
        blur(event) {
            if (this.state.inputValue == "") {
                this.setState({ inputValue: "搜索" });
            }
        }
        change(event) {
            this.setState({
                inputValue: event.target.value,
            });
        }
        queryKeyDownHandler(e) {
            switch (e.keyCode) {
                case 13:
                    this.searchRoomBook();
                    break;
            }
        }
        searchRoomBook() {
            console.log("搜索", this.state);
            this.dataService.getRoomBook(this.getRoomBook, this.state.park_id, this.state.inputValue);
        }
        onError() {
            this.setState({
                imageUrl: "https://yongtoc-digitalcity.oss-cn-shenzhen.aliyuncs.com/images/9982b35c62bd7376bc29c5e1ef12ae6b.jpg"
            });
        }
        mapReturnpark() {
            this.globalAction.web_call_webgl_mapReturnpark();
        }
        render() {
            return (React.createElement("div", { className: this.state.bookListcss },
                React.createElement("div", { className: "foleBtn" },
                    React.createElement("p", { className: "companyGoHomeLeft", onClick: this.mapReturnpark.bind(this) },
                        React.createElement(RouterDOM.Link, { to: "/home", style: { color: "#949494" } },
                            React.createElement("i", { className: "iconfont companyInfoicon" }, "\uE83B"),
                            React.createElement("span", null, "\u8FD4\u56DE"))),
                    React.createElement("p", { className: "companyGoHomeRight" },
                        React.createElement("i", { className: this.state.iconfont, style: { "fontSize": "5rem", "color": "#C0C0C0" }, onClick: this.toggleFold.bind(this) }, "\uE849"))),
                React.createElement("ul", { className: this.state.bookul },
                    React.createElement("li", { className: this.state.nullBookData },
                        React.createElement("p", null, "\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u7ED3\u679C")),
                    this.state.bookData.map((i, index) => {
                        return (React.createElement("li", { onClick: this.bookActive.bind(this, index, i.id, i.project_title, i.building_code, i.floor_code, i.room_code), className: this.state.indexOf == index ? "bookli-active" : "bookli" },
                            React.createElement("div", { className: this.state.indexOf == index ? "bookImgback-active" : "bookImgback" },
                                React.createElement("img", { src: i.headimgurl == null ? this.state.imgurlNull : i.headimgurl })),
                            React.createElement("div", { className: "bookul-middle" },
                                React.createElement("p", { style: { "font-size": "2.4rem", "font-weight": "bold" } }, i.name),
                                i.price.map((it, index) => {
                                    return (React.createElement("p", { style: { "font-size": "2.5rem" } },
                                        it.content,
                                        "\uFF1A",
                                        React.createElement("span", { className: "bookPrice" }, it.price),
                                        " ",
                                        React.createElement("span", { className: "priceYuan" }, "\u5143")));
                                })),
                            React.createElement("div", { className: "bookul-right" },
                                React.createElement("p", { onClick: this.showInfo.bind(this, "Info", i.id, "name"), className: this.state.indexOf == index ? "show" : "hide" },
                                    "\u66F4\u591A",
                                    React.createElement("i", { className: "iconfont", style: { "fontSize": "2rem" } }, "\uE827")))));
                    })),
                React.createElement("form", { action: '', target: "rfFrame" },
                    React.createElement("div", { className: "bookBtn" },
                        React.createElement("div", { className: "searchBox" },
                            React.createElement("span", { className: "searchBox-text" },
                                React.createElement("span", { className: "iconfont", style: { "fontSize": "2.3rem" } }, "\uE810"),
                                React.createElement("input", { className: "leaseSearch", type: "search", placeholder: "\u641C\u7D22", value: this.state.inputValue, onFocus: this.foucus.bind(this), onBlur: this.blur.bind(this), onChange: this.change.bind(this), onKeyDown: this.queryKeyDownHandler.bind(this) }))))),
                React.createElement("iframe", { id: "rfFrame", name: "rfFrame", src: this.state.src, style: { display: "none" } }, "   ")));
        }
    }
    class BookInfo extends React.Component {
        constructor(props) {
            super(props);
            this.dataService = new dataService_3.default();
            this.state = {
                bookInfocss: "bookInfos",
                iconfont: "iconfont iconfont-turn",
                building_name: "",
                floor_name: "",
                room_name: "",
                infoli: 0,
                bookInfoul: "bookInfoul",
                leaseInfoul: "leaseInfoul_br",
                name: "",
                bookSumbit: "bookSumbit",
            };
            BookInfo.showList = this.showList.bind(this);
            this.toggleFold = this.toggleFold.bind(this);
            BookInfo.getRoomdata = this.getRoomdata.bind(this);
            BookInfo.hideBookFa = this.hideBookFa.bind(this);
            this.setBookdata = this.setBookdata.bind(this);
        }
        static getRoomdata(id) { }
        getRoomdata(id) {
            this.dataService.getRoomBookInfo(this.setBookdata, id);
        }
        static setBookdata(data) { }
        setBookdata(data) {
            console.log("setBookdata,setBookdata", data);
            this.setState({
                name: data.response.name,
                id: data.response.id,
            });
            SiteInfos.getInfos(data);
            Notes.getNotes(data);
            BookRoom.getRoomdata(data);
        }
        static showList(a, id) { }
        ;
        showList(a, id) {
            console.log("showList", a);
            BookSite.toggleView(a, id);
            this.setState({
                infoli: 0,
                bookInfocss: "bookInfos",
            });
        }
        toggleFold() {
            console.log("tftft", this.state.infoli);
            if (this.state.infoli == 2) {
                if (this.state.bookInfocss == "bookInfos") {
                    this.setState({
                        bookInfocss: "bookInfos-all",
                        bookSumbit: "hide",
                    });
                }
                else {
                    this.setState({
                        bookInfocss: "bookInfos",
                        bookSumbit: "hide",
                    });
                }
            }
            else {
                if (this.state.bookInfocss == "bookInfos") {
                    this.setState({
                        bookInfocss: "bookInfos-part",
                        bookSumbit: "hide"
                    });
                }
                else {
                    this.setState({
                        bookInfocss: "bookInfos",
                        bookSumbit: "bookSumbit",
                    });
                }
            }
            if (this.state.iconfont == "iconfont iconfont-unturn") {
                this.setState({
                    iconfont: "iconfont iconfont-turn",
                });
            }
            else {
                this.setState({
                    iconfont: "iconfont iconfont-unturn",
                });
            }
        }
        infoClick(indexof) {
            console.log("infoClick", indexof);
            if (indexof == 2) {
                this.setState({
                    infoli: indexof,
                    bookSumbit: "hide",
                });
            }
            else {
                this.setState({
                    infoli: indexof,
                    bookSumbit: "bookSumbit",
                });
            }
        }
        static hideBookFa() { }
        hideBookFa() {
            this.setState({
                infoli: 0,
                bookSumbit: "bookSumbit",
            });
        }
        render() {
            return (React.createElement("div", { className: this.state.bookInfocss },
                React.createElement("p", { className: "companyInfotit" },
                    React.createElement("span", { className: this.state.infoli !== 2 ? "show" : "hide" }, this.state.name),
                    React.createElement("span", { className: this.state.infoli == 2 ? "show" : "hide" }, "\u9884\u5B9A\u7533\u8BF7")),
                React.createElement("div", { className: "foleBtn" },
                    React.createElement("p", { className: "companyGoHomeLeft", onClick: this.showList.bind(this, "List", "id-01") },
                        React.createElement("i", { className: "iconfont companyInfoicon" }, "\uE83B"),
                        React.createElement("span", null, "\u8FD4\u56DE")),
                    React.createElement("p", { className: "companyGoHomeRight" },
                        React.createElement("i", { className: this.state.iconfont, style: { "fontSize": "5rem", "color": "#C0C0C0" }, onClick: this.toggleFold.bind(this) }, "\uE849"))),
                React.createElement("div", { className: this.state.infoli !== 2 ? "leaseInfoul" : "hide" },
                    React.createElement("ul", { className: this.state.bookInfoul },
                        React.createElement("li", { className: this.state.infoli == 0 ? "bookInfoli-active" : "bookInfoli", onClick: this.infoClick.bind(this, 0) }, "\u573A\u5730\u4FE1\u606F"),
                        React.createElement("li", { className: this.state.infoli == 1 ? "bookInfoli-active" : "bookInfoli", onClick: this.infoClick.bind(this, 1) }, "\u4F7F\u7528\u987B\u77E5"))),
                React.createElement("div", { className: "infoContain" },
                    React.createElement("div", { className: this.state.infoli == 0 ? "show" : "hide" },
                        React.createElement(SiteInfos, null)),
                    React.createElement("div", { className: this.state.infoli == 1 ? "show" : "hide" },
                        React.createElement(Notes, null)),
                    React.createElement("div", { className: this.state.infoli == 2 ? "show" : "hide" },
                        React.createElement(BookRoom, null)),
                    React.createElement("div", { className: this.state.bookSumbit, onClick: this.infoClick.bind(this, 2) }, "\u9884\u5B9A"))));
        }
    }
    class BookRoom extends React.Component {
        constructor(props) {
            super(props);
            this.globalAction = new compat_3.default();
            this.dataService = new dataService_3.default();
            this.state = {
                startTime: "",
                endTime: "",
                iconfont: "iconfont iconfont-unturn",
                bookRoom: "bookRoom-part",
                bookformcss: "bookform-part",
                companyBox: "show",
                companyUL: [],
                companyIndexof: 0,
                company_id_in: "",
                company_name_in: "",
                id: "",
                applicant: "",
                phone: "",
                company: "",
                name: "",
                building_id: "",
                floor_id: "",
                room_id: "",
                building_name: "",
                floor_name: "",
                room_name: "",
                start_date: "",
                start_time: "",
                end_date: "",
                end_time: "",
                theme: "50字内",
                content: "请将具体需求描述出来。（200字内）",
                times_list: [],
            };
            BookRoom.getRoomdata = this.getRoomdata.bind(this);
        }
        componentDidMount() {
            let data = sessionStorage.getItem("userInfos");
            let dataObj = JSON.parse(data);
            this.setState({
                applicant: dataObj.name,
                phone: dataObj.phone,
                staff_id: dataObj.userId,
            });
            if (dataObj.enterprises.length == 0) {
                this.setState({
                    companyUL: [],
                    company: "请先关联企业",
                    company_id: "请先关联企业",
                });
            }
            else {
                this.setState({
                    companyUL: [],
                    company: sessionStorage.getItem("enterprise"),
                    company_id: sessionStorage.getItem("enterpriseId"),
                });
            }
        }
        static getRoomdata(data) { }
        ;
        getRoomdata(data) {
            console.log("getBook", data);
            this.setState({
                id: data.response.id,
                building_id: data.response.building_id,
                floor_id: data.response.floor_id,
                room_id: data.response.id,
                building_name: data.response.building_name,
                floor_name: data.response.floor_name,
                room_name: data.response.name,
                times_list: data.response.times,
            });
        }
        toggleFold() {
            if (this.state.iconfont == "iconfont iconfont-unturn") {
                this.setState({
                    iconfont: "iconfont iconfont-turn",
                });
            }
            else {
                this.setState({
                    iconfont: "iconfont iconfont-unturn",
                });
            }
            if (this.state.bookRoom == "bookRoom-part") {
                this.setState({
                    bookRoom: "bookRoom-all",
                    bookformcss: "bookform-all ",
                });
                this.globalAction.web_call_webgl_pauseloadModuler();
            }
            else {
                this.setState({
                    bookRoom: "bookRoom-part",
                    bookformcss: "bookform-part"
                });
                this.globalAction.web_call_webgl_continueloadModuler();
            }
        }
        focusBookContent() {
            if (this.state.content === "请将具体需求描述出来。（200字内）") {
                this.setState({ content: "" });
            }
        }
        blurBookContent() {
            if (this.state.content === "") {
                this.setState({ content: "请将具体需求描述出来。（200字内）" });
            }
        }
        changebookContent(event) {
            event.target.value = event.target.value.replace(/[, ]/g, '');
            this.setState({
                content: event.target.value,
            });
        }
        changebookTheme(event) {
            event.target.value = event.target.value.replace(/[, ]/g, '');
            this.setState({
                theme: event.target.value,
            });
        }
        foucusbookTheme() {
            if (this.state.theme === "50字内") {
                this.setState({ theme: "" });
            }
        }
        p(s) {
            return s < 10 ? '0' + s : s;
        }
        setStartTime(date) {
            console.log('开始时间', date);
            const d = new Date(date);
            var now = new Date();
            if (now > d) {
                antd_mobile_3.Toast.info('开始时间，不能早于当前时间');
            }
            else {
                const resDate = d.getFullYear() + '-' + this.p((d.getMonth() + 1)) + '-' + this.p(d.getDate());
                const resTime = this.p(d.getHours()) + ':' + this.p(d.getMinutes()) + ':' + this.p(d.getSeconds());
                const startDate = resDate + " " + resTime;
                console.log("start输入index656", startDate);
                this.setState({
                    startTime: date,
                    start_date: startDate,
                });
            }
        }
        setEndTime(date) {
            console.log('结束时间', date);
            const d = new Date(date);
            var now = new Date();
            if (now > d) {
                antd_mobile_3.Toast.info('结束时间，不能早于当前时间');
            }
            else {
                const resDate = d.getFullYear() + '-' + this.p((d.getMonth() + 1)) + '-' + this.p(d.getDate());
                const resTime = this.p(d.getHours()) + ':' + this.p(d.getMinutes()) + ':' + this.p(d.getSeconds());
                const endDate = resDate + " " + resTime;
                this.setState({
                    endTime: date,
                    end_date: endDate,
                });
            }
        }
        showCompanyBox() {
            this.setState({
                companyBox: "rollSelectCauseBox",
                company_id_in: this.state.companyUL[this.state.companyIndexof].id,
                company_name_in: this.state.companyUL[this.state.companyIndexof].name,
            });
        }
        inCompanyeList(i, id, name) {
            this.setState({
                companyIndexof: i,
                company_id_in: id,
                company_name_in: name,
            });
        }
        hideCompanyBox() {
            this.setState({
                companyBox: "hide",
            });
        }
        getCompanyBox() {
            this.setState({
                companyBox: "hide",
                company_id: this.state.company_id_in,
                company: this.state.company_name_in,
            });
        }
        bookSumbit() {
            console.log('endTime--', this.state.endTime);
            console.log('startTime--', this.state.startTime);
            var s = new Date(this.state.start_date).getTime();
            var d = new Date(this.state.end_date).getTime();
            if (s > d) {
                antd_mobile_3.Toast.info('开始时间，不能晚于结束时间');
            }
            else if (d - s < 3600000) {
                antd_mobile_3.Toast.info('最短使用时间：一小时');
            }
            else if (this.state.start_date == "") {
                antd_mobile_3.Toast.info('请选择开始时间', 2);
            }
            else if (this.state.end_date == "") {
                antd_mobile_3.Toast.info('请选择结束时间', 2);
            }
            else if (this.state.theme == "") {
                antd_mobile_3.Toast.info('请输入会议主题', 2);
            }
            else if (this.state.content == "") {
                antd_mobile_3.Toast.info('请输入会议具体需求', 2);
            }
            else if (this.state.company == "请先关联企业") {
                antd_mobile_3.Toast.info('请先前往关联企业', 2);
            }
            else if (this.state.phone == "") {
                antd_mobile_3.Toast.info('请先绑定手机号码', 2);
            }
            else {
                this.dataService.bookingRoom(this.bookSumbitOK, this.state);
            }
        }
        showInfos() {
            BookInfo.hideBookFa();
        }
        bookSumbitOK(data) {
            antd_mobile_3.Toast.info(data, 2);
            BookInfo.showList("List", "");
        }
        render() {
            return (React.createElement("div", { className: this.state.bookRoom },
                React.createElement("div", { className: "foleBtn" },
                    React.createElement("p", { className: "companyGoHomeLeft", onClick: this.showInfos.bind(this, "List", "id-01") },
                        React.createElement("i", { className: "iconfont companyInfoicon" }, "\uE83B"),
                        React.createElement("span", null, "\u8FD4\u56DE")),
                    React.createElement("p", { className: "companyGoHomeRight" },
                        React.createElement("i", { className: this.state.iconfont, style: { "fontSize": "5rem", "color": "#C0C0C0" }, onClick: this.toggleFold.bind(this) }, "\uE849"))),
                React.createElement("form", { className: this.state.bookformcss },
                    React.createElement("ul", { className: "bookfromul" },
                        React.createElement("li", null,
                            React.createElement("span", { className: "applySpanleft" },
                                React.createElement("span", { className: "redStar" }, "*"),
                                "\u7533\u8BF7\u4EBA"),
                            React.createElement("p", { className: "bookRight", style: { "padding-left": "1rem", "padding-top": "0.5rem" } }, this.state.applicant)),
                        React.createElement("li", null,
                            React.createElement("span", { className: "redStar" }, "*"),
                            "\u624B\u673A\u53F7\u7801",
                            React.createElement("input", { type: "text", value: this.state.phone, placeholder: "\u8BF7\u5148\u7ED1\u5B9A\u624B\u673A\u53F7\u7801  ", style: { "margin-left": "2rem", "border": "0" }, readOnly: true })),
                        React.createElement("li", null,
                            React.createElement("span", { className: "redStar" }, "*"),
                            "\u7533\u8BF7\u4F01\u4E1A",
                            React.createElement("p", { className: "bookfromliRight", style: { "line-height": " 4rem" } }, this.state.company)),
                        React.createElement("li", { className: "bookActive" },
                            React.createElement("span", { className: "bookformLeft" },
                                React.createElement("span", { style: { "color": "#F2F2F2", "margin-right": "1rem" } }, "*"),
                                "\u4F7F\u7528\u573A\u5730"),
                            React.createElement("p", { className: "bookfromliRight", style: { "line-height": "3.5rem" } }, this.state.room_name)),
                        React.createElement("li", null,
                            React.createElement("p", null,
                                React.createElement("span", { className: "redStar", style: { "float": "left", "margin-top": "0.8rem", "margin-right": "0rem" } }, "*"),
                                React.createElement("div", { style: { "fonSize": "2.5rem" }, className: "mDate" },
                                    React.createElement(antd_mobile_3.DatePicker, { style: { "fonSize": "2.5rem" }, value: this.state.startTime, onChange: this.setStartTime.bind(this) },
                                        React.createElement(antd_mobile_3.List.Item, { arrow: "horizontal" }, "\u5F00\u59CB\u65F6\u95F4"))))),
                        React.createElement("li", null,
                            React.createElement("p", null,
                                React.createElement("span", { className: "redStar", style: { "float": "left", "margin-top": "0.8rem", "margin-right": "0rem" } }, "*"),
                                React.createElement("div", { style: { "fonSize": "2.5rem" }, className: "mDate" },
                                    React.createElement(antd_mobile_3.DatePicker, { style: { "fonSize": "2.5rem" }, value: this.state.endTime, onChange: this.setEndTime.bind(this) },
                                        React.createElement(antd_mobile_3.List.Item, { arrow: "horizontal" }, "\u7ED3\u675F\u65F6\u95F4"))))),
                        React.createElement("li", { style: { "border": "0", "padding": "1rem 0 0 0" } },
                            React.createElement("p", null,
                                React.createElement("span", { className: "redStar" }, "*"),
                                React.createElement("span", { style: { "font-size": "2.3rem", "margin-top": "1rem" } }, "\u4F1A\u8BAE\u4E3B\u9898\uFF1A")),
                            React.createElement("textarea", { className: "bookTheme", value: this.state.theme, onChange: this.changebookTheme.bind(this), onFocus: this.foucusbookTheme.bind(this) })),
                        React.createElement("li", null,
                            React.createElement("p", null,
                                React.createElement("span", { className: "redStar" }, "*"),
                                React.createElement("span", { style: { "font-size": "2.3rem" } }, "\u5177\u4F53\u9700\u6C42\uFF1A")),
                            React.createElement("textarea", { className: "bookContent", value: this.state.content, style: { "margin-bottom": "0rem" }, onFocus: this.focusBookContent.bind(this), onBlur: this.blurBookContent.bind(this), onChange: this.changebookContent.bind(this) }))),
                    React.createElement("p", null, "\u5DF2\u88AB\u9884\u5B9A\u65F6\u6BB5"),
                    React.createElement("table", { className: "bookTable", style: { "margin-bottom": "15rem" } },
                        React.createElement("tr", null,
                            React.createElement("th", null, "\u5E8F\u53F7"),
                            React.createElement("th", null, "\u5F00\u59CB\u65F6\u95F4"),
                            React.createElement("th", null, "\u7ED3\u675F\u65F6\u95F4")),
                        this.state.times_list.map((i, index) => {
                            return (React.createElement("tr", null,
                                React.createElement("th", null, index + 1),
                                React.createElement("th", null, i.starttime.substring(0, 16)),
                                React.createElement("th", null, i.endtime)));
                        })),
                    React.createElement("div", { className: "bookSumbit", onClick: this.bookSumbit.bind(this) }, "\u63D0\u4EA4")),
                React.createElement("div", { className: this.state.companyBox },
                    React.createElement("ul", { className: "rollSelectCauseULcss" }, this.state.companyUL.map((i, index) => {
                        return (React.createElement("li", { className: this.state.companyIndexof == index ? "rollSelectCauseli-active" : "rollSelectCauseli", onClick: this.inCompanyeList.bind(this, index, i.id, i.name) }, i.name));
                    })),
                    React.createElement("div", { className: "rollSelectCuasedBtn" },
                        React.createElement("span", { className: "rollSelectCancel", onClick: this.hideCompanyBox.bind(this) }, "\u53D6\u6D88"),
                        React.createElement("span", { className: "rollSelectConfirm", onClick: this.getCompanyBox.bind(this) }, "\u786E\u8BA4")))));
        }
    }
    class SiteInfos extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                descript: [],
                descriptS: "",
            };
            SiteInfos.getInfos = this.getInfos.bind(this);
        }
        componentDidMount() {
            console.log("场地信息,场地信息");
        }
        static getInfos(data) { }
        ;
        getInfos(data) {
            console.log("getinfo", typeof data.response.descript);
            console.log("getinfo", data.response.descript);
            document.getElementById("siteInfosbox").innerHTML = data.response.descript;
        }
        render() {
            return (React.createElement("div", { className: "siteInfosbox", id: "siteInfosbox" }));
        }
    }
    class Notes extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                guide: "",
            };
            Notes.getNotes = this.getNotes.bind(this);
        }
        componentDidMount() {
            console.log("使用须知,使用须知");
        }
        static getNotes(data) { }
        ;
        getNotes(data) {
            console.log("NotesNotes", data);
            document.getElementById("notesBox").innerHTML = data.response.guide;
        }
        render() {
            return (React.createElement("div", { className: "notesBox", id: "notesBox" }));
        }
    }
});
define("bottomBtn", ["require", "exports", "react", "react-router-dom", "compat", "css!./styles/view.css"], function (require, exports, React, RouterDOM, compat_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class BottomBtn extends React.Component {
        constructor(props) {
            super(props);
            this.props = {
                history: this.props.history
            };
            this.globalAction = new compat_4.default();
            this.state = {
                index: 1,
                iconImg1In: "./park_m/image/bottomBtn/3d-in.png",
                iconImg1Un: "./park_m/image/bottomBtn/3d-un.png",
                iconImg3In: "./park_m/image/bottomBtn/zx-in.png",
                iconImg3Un: "./park_m/image/bottomBtn/zx-un.png",
                iconImg4In: "./park_m/image/bottomBtn/my-in.png",
                iconImg4Un: "./park_m/image/bottomBtn/my-un.png",
            };
            this.toggleIcon = this.toggleIcon.bind(this);
        }
        componentDidMount() {
            console.log(this.props.history.location.pathname);
            if (this.props.history.location.pathname === "/home" || this.props.history.location.pathname === "/") {
                this.setState({ index: 1 }, () => {
                    this.toggleIcon(this.state.index);
                });
            }
            else if (this.props.history.location.pathname === "/informationChild") {
                this.setState({ index: 3 }, () => {
                    this.toggleIcon(this.state.index);
                });
            }
            else {
                this.setState({ index: 4 }, () => {
                    this.toggleIcon(this.state.index);
                });
            }
        }
        toggleIcon(data) {
            this.setState({
                index: data
            });
            if (data == 1) {
                this.globalAction.web_call_webgl_continueloadModuler();
            }
            else {
                this.globalAction.web_call_webgl_pauseloadModuler();
            }
        }
        render() {
            return (React.createElement("div", { className: "bottomView" },
                React.createElement(RouterDOM.Link, { to: "/" },
                    React.createElement("div", { className: this.state.index == 1 ? "iconBox-bottomIn" : "iconBox-bottom", onClick: this.toggleIcon.bind(this, 1), style: { width: "50%", margin: 0 } },
                        React.createElement("img", { src: this.state.index == 1 ? this.state.iconImg1In : this.state.iconImg1Un }),
                        React.createElement("p", null, "\u9996\u9875"))),
                React.createElement(RouterDOM.Link, { to: "/personalCenter" },
                    React.createElement("div", { className: this.state.index == 4 ? "iconBox-bottomIn" : "iconBox-bottom", onClick: this.toggleIcon.bind(this, 4), style: { width: "50%", margin: 0 } },
                        React.createElement("img", { src: this.state.index == 4 ? this.state.iconImg4In : this.state.iconImg4Un }),
                        React.createElement("p", null, "\u6211\u7684")))));
        }
        ;
    }
    exports.default = BottomBtn;
});
define("companyInfo", ["require", "exports", "react"], function (require, exports, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class CompanyInfo extends React.Component {
        constructor(props) {
            super(props);
            this.state = {};
        }
        render() {
            return (React.createElement("div", null, "CompanyInfoCompanyInfoCompanyInfoCompanyInfoCompanyInfo"));
        }
    }
    exports.default = CompanyInfo;
});
define("compat_online", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class GlobalAction {
        web_call_webgl_initPark(pInfo) {
            MiaokitJS.App.m_pProject.EnterPark({
                m_pView: {
                    m_nLng: 110.344301,
                    m_nLat: 25.272208,
                    m_mTarget: { x: 0.0, y: 170.0, z: 0.0 },
                    m_nDistance: 300.0,
                    m_nPitch: 19.0,
                    m_nYaw: 90.0
                }
            });
            console.log("web_call_webgl_initPark", pInfo);
        }
        web_call_webgl_switchCompany(pName) {
            console.log("web_call_webgl_switchCompany", pName);
        }
        web_call_webgl_switchRoom(pName) {
            console.log("web_call_webgl_SwitchRoom", pName);
        }
        web_call_webgl_switchMark(pName, pInfo) {
            console.log("web_call_webgl_switchMark", pName, pInfo);
        }
        web_call_webgl_mapReturnpark() {
            console.log("web_call_webgl_mapReturnpark");
        }
        web_call_webgl_pauseloadModuler() {
            console.log("web_call_webgl_pauseloadModuler");
        }
        web_call_webgl_continueloadModuler() {
            console.log("web_call_webgl_continueloadModuler");
        }
        web_call_webgl_showParkingList(data) {
            console.log("web_call_webgl_showParkingList", data);
        }
        web_call_webgl_onParking(data) {
            console.log("web_call_webgl_onParking", data);
        }
        web_call_webgl_cancelApplyPut(data) {
            console.log("web_call_webgl_cancelApplyPut", data);
        }
    }
    exports.default = GlobalAction;
});
define("defaultRentRoom", ["require", "exports", "react", "css!./styles/defaultRentRoom.css"], function (require, exports, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class DetaultRentRoom extends React.Component {
        constructor() {
            super(...arguments);
            this.state = {
                workOrderArray: ["A座-1F-201室", "A座-1F-202室", "A座-1F-203室"],
                defaultIndex: 0
            };
        }
        goBack() {
            this.props.history.goBack();
        }
        changeDefaultIndex(index) {
            this.setState({ defaultIndex: index });
        }
        render() {
            return (React.createElement("div", { className: "rent-room-detail" },
                React.createElement("div", { className: "rent-room-back" },
                    React.createElement("div", { style: { float: "left" }, onClick: this.goBack.bind(this) },
                        React.createElement("img", { src: "./park_m/image/back.png", style: { margin: "-10px 10px 0 0" } }),
                        React.createElement("span", null, "\u79DF\u7528\u623F\u95F4\u7BA1\u7406"))),
                React.createElement("div", { className: "rent-room-list" }, this.state.workOrderArray.map((item, index) => {
                    return (React.createElement("div", { key: index, className: "rent-room-list-child", onClick: e => this.changeDefaultIndex(index) },
                        React.createElement("div", { style: { float: "left", height: "100%", width: "13%", lineHeight: "286px", textAlign: "center" } }, this.state.defaultIndex === index ?
                            React.createElement("img", { src: "./park_m/image/checked.png" }) :
                            React.createElement("img", { src: "./park_m/image/unchecked.png" })),
                        React.createElement("div", { style: { float: "left", height: "100%", width: "87%" } },
                            React.createElement("div", { style: { overflow: "hidden", margin: "30px 0 0 0" } },
                                React.createElement("div", { style: { float: "left", fontSize: "40px", color: "#333333", fontWeight: "600" } }, item),
                                React.createElement("img", { style: { float: "right", marginRight: "40px" }, src: "./park_m/image/right.png" })),
                            React.createElement("div", { style: { fontSize: "38px", color: "#949494", margin: "30px 0 0 0" } },
                                "\u4F7F\u7528\u72B6\u6001\uFF1A",
                                React.createElement("span", { style: { marginLeft: "30px", color: "#333333" } }, "\u79DF\u7528\u4E2D")),
                            React.createElement("div", { style: { fontSize: "38px", color: "#949494", margin: "10px 0 0 0", overflow: "hidden" } },
                                React.createElement("div", { style: { float: "left" } },
                                    "\u79DF\u7528\u65E5\u671F\uFF1A",
                                    React.createElement("span", { style: { color: "#F53636" } }, "2020-03-20 ~ 2021-03-20"))))));
                })),
                React.createElement("div", { className: "rent-room-detail-bottom" },
                    React.createElement("div", { style: { float: "left", width: "50%", height: "100%", textAlign: "center", lineHeight: "130px", color: "#6C6C6C" } }, "\u53D6\u6D88"),
                    React.createElement("div", { style: { float: "left", width: "50%", height: "100%", textAlign: "center", lineHeight: "130px", backgroundColor: "#0B8BF0", color: "#ffffff" } }, "\u63D0\u4EA4"))));
        }
    }
    exports.default = DetaultRentRoom;
});
define("distribute", ["require", "exports", "react", "react-router-dom", "css!./styles/distribute.css"], function (require, exports, React, react_router_dom_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Distribute extends React.Component {
        constructor() {
            super(...arguments);
            this.state = {
                distributeList: [
                    { title: "身份认证工单管理", userName: "小明" }, { title: "场地预定工单管理", userName: "小明" }, { title: "摆点申请工单管理", userName: "小明" },
                    { title: "在线报修工单管理", userName: "小明" }, { title: "停车业务工单管理", userName: "小明" }, { title: "投诉建议工单管理", userName: "小明" },
                    { title: "随手拍工单管理", userName: "小明" }, { title: "身份认证工单管理", userName: "小明" }, { title: "身份认证工单管理", userName: "小明" }
                ]
            };
        }
        goBack() {
            this.props.history.goBack();
        }
        render() {
            return (React.createElement("div", { className: "rent-room" },
                React.createElement("div", { className: "rent-room-back" },
                    React.createElement("div", { style: { float: "left" }, onClick: this.goBack.bind(this) },
                        React.createElement("img", { src: "./park_m/image/back.png", style: { margin: "-10px 10px 0 0" } }),
                        React.createElement("span", null, "\u5DE5\u5355\u6D3E\u53D1\u7BA1\u7406"))),
                React.createElement("div", { className: "distribute-list" },
                    this.state.distributeList.map((item, index) => {
                        return (React.createElement("div", { key: index, className: "distribute-list-child" },
                            React.createElement("div", { style: { padding: "30px 0 0 45px", fontWeight: "600" } }, item.title),
                            React.createElement("div", { style: { padding: "30px 0 0 45px", overflow: "hidden" } },
                                React.createElement("div", { style: { float: "left" } }, "\u5DE5\u5355\u8D1F\u8D23\u4EBA\uFF1A"),
                                React.createElement("div", { style: {
                                        float: "left", height: "70px", backgroundColor: "#E8F5FE", borderRadius: "5px", border: "3px solid #C3E3FA", overflow: "hidden", lineHright: "70px", textAlign: "center",
                                        minWidth: "150px"
                                    } },
                                    React.createElement("div", { style: { height: "100%", width: "60px", float: "left", lineHeight: "52px" } },
                                        React.createElement("img", { src: "./park_m/image/user.png", width: "40px", height: "40px" })),
                                    React.createElement("div", { style: { float: "left", lineHeight: "61px", height: "100%", minWidth: "90px", padding: "0 20px 0 15px" } }, "\u5C0F\u660E")),
                                React.createElement(react_router_dom_2.Link, { to: "/searchUser" },
                                    React.createElement("div", { style: { float: "right", color: "#0B8BF0", marginRight: "50px", textAlign: "center" } }, "\u4FEE\u6539")))));
                    }),
                    this.state.distributeList.length > 0 ?
                        React.createElement("div", { style: { width: "100%", height: "100px", textAlign: "center", fontSize: "40px", lineHeight: "100px" } }, "\u5230\u5E95\u5566~") :
                        React.createElement("div", { style: { width: "100%", height: "100px", textAlign: "center", fontSize: "40px", lineHeight: "100px" } }, "\u6682\u65E0\u5339\u914D\u6570\u636E"))));
        }
    }
    exports.default = Distribute;
});
define("enterpriseInformation", ["require", "exports", "react", "dataService", "antd-mobile", "css!./styles/enterpriseInformation.css", "css!./styles/resetAntdMobile.css"], function (require, exports, React, dataService_4, antd_mobile_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class EnterpriseInformation extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                imgList: ["./park_m/image/tx.jpg", "./park_m/image/tx.jpg", "./park_m/image/tx.jpg", "./park_m/image/tx.jpg", "./park_m/image/tx.jpg"],
                elegantImgList: ["./park_m/image/tx.jpg", "./park_m/image/tx.jpg", "./park_m/image/tx.jpg",],
                productImgList: ["./park_m/image/tx.jpg", "./park_m/image/tx.jpg", "./park_m/image/tx.jpg", "./park_m/image/tx.jpg"],
                panoramaImgList: ["./park_m/image/tx.jpg", "./park_m/image/tx.jpg", "./park_m/image/tx.jpg", "./park_m/image/tx.jpg", "./park_m/image/tx.jpg"],
                modifyState: false,
                inputEnterpriseIDValue: "",
                inputEnterpriseNameValue: "请输入企业名称",
                inputEnterprisePositionValue: "请输入详细地址",
                contactsValue: "请输入联系人姓名",
                phoneValue: "请输入联系电话",
                officialWebsiteValue: "请输入企业官方网址",
                descriptionValue: "400字内",
                inputCompanyType: "请选择企业分类",
                ID: "123456",
                name: "",
                headimageurl: "",
                address: "",
                contacts: "",
                phone: "",
                company_type: "",
                company_type_id: "",
                website: "",
                descriptArr: [],
                companyTypeBox: "hide",
                companyTypeUL: [],
                companyTypeIndexof: 0,
                companyType_id_in: "",
                companyType_name_in: "",
                company_id_in: "",
                multiple: false,
                files: [],
                filesLogo: [],
                update_headimgurl: "",
                filesElegant: [],
                filesProduct: [],
                filesPanorama: [],
                elegant: [],
                product: [],
                panorama: [],
                pic: [],
                picPro: [],
                picPan: [],
                user_id: "",
            };
            this.dataService = new dataService_4.default();
            this.onChangeLogo = (files, type, index) => {
                console.log(files, type, index);
                this.setState({
                    filesLogo: files,
                    files,
                });
                if (files.length == 0) {
                    this.setState({
                        headimageurl: "",
                    });
                }
                else {
                    let obj = [{
                            "imgname": "headimg",
                            "imgbase64": this.state.filesLogo[0].url,
                        }];
                    this.dataService.uploadImgOss(this.setLogoImg, obj);
                }
            };
            this.onChangeElegant = (files, type, index) => {
                this.setState({
                    filesElegant: files,
                    files,
                }, () => {
                    let elegantArr = [];
                    if (this.state.filesElegant.length > 0) {
                        $.each(this.state.filesElegant, function (index, item) {
                            if (item.url.indexOf) {
                                if (item.url.indexOf("base64") != -1) {
                                    elegantArr.push({ "imgname": "", "imgbase64": item.url });
                                }
                            }
                        });
                    }
                    this.dataService.uploadImgOss(this.setElegantImg, elegantArr);
                });
            };
            this.onChangeProduct = (files, type, index) => {
                console.log(files, type, index);
                this.setState({
                    filesProduct: files,
                    files,
                }, () => {
                    let productArr = [];
                    if (this.state.filesProduct.length > 0) {
                        $.each(this.state.filesProduct, function (index, item) {
                            if (item.url.indexOf) {
                                if (item.url.indexOf("base64") != -1) {
                                    productArr.push({ "imgname": "", "imgbase64": item.url });
                                }
                            }
                        });
                    }
                    this.dataService.uploadImgOss(this.setProductImg, productArr);
                });
            };
            this.onChangePanorama = (files, type, index) => {
                console.log(files, type, index);
                this.setState({
                    filesPanorama: files,
                    files,
                }, () => {
                    let panoramaArr = [];
                    if (this.state.filesPanorama.length > 0) {
                        $.each(this.state.filesPanorama, function (index, item) {
                            if (item.url.indexOf) {
                                if (item.url.indexOf("base64") != -1) {
                                    panoramaArr.push({ "imgname": "", "imgbase64": item.url });
                                }
                            }
                        });
                    }
                    this.dataService.uploadImgOss(this.setPanoramaImg, panoramaArr);
                });
            };
            this.setCompanyinfo = this.setCompanyinfo.bind(this);
            this.setCompanyType = this.setCompanyType.bind(this);
            this.setLogoImg = this.setLogoImg.bind(this);
            this.setElegantImg = this.setElegantImg.bind(this);
            this.setProductImg = this.setProductImg.bind(this);
            this.setPanoramaImg = this.setPanoramaImg.bind(this);
            this.closePic = this.closePic.bind(this);
        }
        componentDidMount() {
            let enterpriseId = sessionStorage.getItem("enterpriseId");
            this.dataService.getCompanyInfo(this.setCompanyinfo, enterpriseId);
            let park_id = sessionStorage.getItem("park_id");
            this.dataService.getCompanyType(this.setCompanyType, park_id);
            console.log(JSON.parse(sessionStorage.getItem("roomInfo")));
            console.log("pic", this.state.pic);
            let data = sessionStorage.getItem("userInfos");
            let dataObj = JSON.parse(data);
            this.setState({
                user_id: dataObj.userId,
            });
        }
        setCompanyinfo(data) {
            console.log("rrrrrrrrrrrrr", data);
            var filesLogos = [];
            filesLogos.push({ "id": "", "name": "logoimg", "url": data.response.headimageurl });
            var elegantImgs = [];
            $.each(data.response.elegant, function (index, item) {
                elegantImgs.push({ "id": item.id, "name": item.name, "url": item.pic_url });
            });
            var pic = [];
            $.each(data.response.elegant, function (index, item) {
                pic.push({ "id": item.id, "name": item.name, "url": item.pic_url });
            });
            var picPro = [];
            $.each(data.response.product, function (index, item) {
                picPro.push({ "id": item.id, "name": item.name, "url": item.pic_url });
            });
            var picPan = [];
            $.each(data.response.panorama, function (index, item) {
                picPan.push({ "id": item.id, "name": item.name, "url": item.pic_url });
            });
            this.setState({
                pic: pic,
                picPro: picPro,
                picPan: picPan,
            });
            let descriptArr;
            if (data.response.descript) {
                let descriptN = data.response.descript;
                descriptN.replace(/&#10;/, "<br />&nbsp;");
                descriptArr = descriptN.split("    ");
            }
            else {
                descriptArr = [];
            }
            this.setState({
                ID: data.response.id,
                inputEnterpriseIDValue: data.response.id,
                name: data.response.name,
                inputEnterpriseNameValue: data.response.name,
                headimageurl: data.response.headimageurl,
                filesLogo: filesLogos,
                address: data.response.address,
                inputEnterprisePositionValue: data.response.address,
                contacts: data.response.contact,
                contactsValue: data.response.contact,
                phone: data.response.phone,
                phoneValue: data.response.phone,
                company_type: data.response.company_type,
                company_type_id: data.response.company_type_id,
                inputCompanyType: data.response.company_type,
                officialWebsiteValue: data.response.website,
                website: data.response.website,
                descriptArr: descriptArr,
                descriptionValue: data.response.descript,
                elegantImgList: data.response.elegant,
                productImgList: data.response.product,
                panoramaImgList: data.response.panorama,
            });
            console.log("hhhhhhhhhhhhhhhhhhhh", this.state);
        }
        setCompanyType(data) {
            console.log("ttttttttttt", data);
            this.setState({
                companyTypeUL: data.response,
            });
        }
        showCompanyTypeBox() {
            this.setState({
                companyTypeBox: "show companyTypeEnter",
                companyBox: "rollSelectCauseBox",
                company_id_in: this.state.companyTypeUL[this.state.companyTypeIndexof].id,
                company_name_in: this.state.companyTypeUL[this.state.companyTypeIndexof].name,
            }, () => {
                console.log("show", this.state);
            });
        }
        inCompanyeTypeList(i, id, name) {
            console.log("选中企业类型", id, name);
            this.setState({
                companyTypeIndexof: i,
                companyType_id_in: id,
                companyType_name_in: name,
            }, () => {
                console.log(this.state.companyType_id_in, this.state.companyType_name_in, this.state.companyTypeIndexof);
            });
        }
        hideCompanyTypeBox() {
            console.log(this.state);
            this.setState({
                companyTypeBox: "hide",
                company_type: this.state.company_type,
                companyType_id_in: this.state.company_type_id,
            });
        }
        getCompanyTypeBox() {
            if (this.state.companyType_name_in == "") {
                this.setState({
                    companyTypeBox: "hide",
                    company_type: this.state.company_type_id,
                    inputCompanyType: this.state.company_type,
                });
            }
            else {
                this.setState({
                    companyTypeBox: "hide",
                    company_type: this.state.company_id_in,
                    inputCompanyType: this.state.companyType_name_in,
                });
            }
        }
        onErrorHeadimageurl() {
            this.setState({
                headimageurl: "./park_m/image/tx.jpg"
            });
        }
        onErrorElegant() {
            this.setState({
                elegantImgList: [{ pic_url: "./park_m/image/tx.jpg" }]
            });
        }
        onErrorProduct() {
            this.setState({
                productImgList: [{ pic_url: "./park_m/image/tx.jpg" }]
            });
        }
        onErrorPanorama() {
            this.setState({
                panoramaImgList: [{ pic_url: "./park_m/image/tx.jpg" }]
            });
        }
        goBack() {
            this.props.history.goBack();
        }
        modify() {
            this.setState({ modifyState: !this.state.modifyState });
        }
        submit() {
            console.log("objobjobj", this.state);
            var reg01 = /^1[3456789]\d{9}$/;
            var reg02 = /^(0[0-9]{2,3}\-)([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/;
            if (reg01.test(this.state.phoneValue) || reg02.test(this.state.phoneValue) || this.state.phoneValue == "") {
                console.log("手机号或座机号填写正确");
            }
            else if (this.state.phoneValue == "请输入联系人电话") {
                antd_mobile_4.Toast.info('请输入联系人电话', 2);
                return;
            }
            else {
                antd_mobile_4.Toast.info('手机号码不正确，固话请添加区号', 2);
                return;
            }
            let park_id = sessionStorage.getItem("park_id");
            let enterpriseId = sessionStorage.getItem("enterpriseId");
            let sum = 1;
            console.log("bobo", this.state);
            let obj = {
                "user_id": this.state.user_id,
                "park_id": park_id,
                "id": enterpriseId,
                "name": this.state.inputEnterpriseNameValue,
                "address": this.state.inputEnterprisePositionValue,
                "contact": this.state.contactsValue,
                "phone": this.state.phoneValue,
                "website": this.state.officialWebsiteValue == "请输入企业官方网址" ? "" : this.state.officialWebsiteValue,
                "descript": this.state.descriptionValue == "400字内" ? "" : this.state.descriptionValue,
                "company_type": this.state.companyType_id_in == "" ? this.state.company_type_id : this.state.companyType_id_in,
                "elegant": this.state.pic,
                "product": this.state.picPro,
                "panorama": this.state.picPan,
                "headimageurl": this.state.headimageurl,
            };
            if (this.state.inputEnterpriseNameValue == "请输入企业名称" || this.state.inputEnterpriseNameValue == "") {
                antd_mobile_4.Toast.info('请输入企业名称', 2);
                sum = 0;
            }
            if (this.state.contactsValue == "请输入联系人姓名" || this.state.contactsValue == '') {
                antd_mobile_4.Toast.info('请添加联系人姓名', 2);
                sum = 0;
            }
            if (this.state.inputEnterprisePositionValue == "请输入详细地址" || this.state.inputEnterprisePositionValue == '') {
                antd_mobile_4.Toast.info('请添加企业详细地址', 2);
                sum = 0;
            }
            if (this.state.picPro.length == 0) {
                obj.product = this.state.filesProduct;
            }
            if (!this.state.headimageurl) {
                antd_mobile_4.Toast.info('请为企业添加logo', 2);
                sum = 0;
            }
            if (this.state.pic.length == 1) {
                antd_mobile_4.Toast.info('请为企业风采，至少添加两张图片', 2);
                sum = 0;
            }
            if (obj.product.length == 1) {
                antd_mobile_4.Toast.info('请为公司产品，至少添加两张图片', 2);
                sum = 0;
            }
            ;
            var reg = /^((ht|f)tps?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-.,@?^=%&:\/~+#]*[\w\-@?^=%&\/~+#])?$/;
            console.log("objobjobj2222222", obj);
            if (sum == 1) {
                this.dataService.saveCompanyInfo(this.callBackSaveCompanyInfo.bind(this), obj);
            }
        }
        callBackSaveCompanyInfo(data) {
            console.log(data);
            if (data.err_msg == "更新成功") {
                antd_mobile_4.Toast.info('提交成功', 2);
                this.props.history.goBack();
            }
        }
        focusEnterpriseID() {
            if (this.state.inputEnterpriseIDValue === "123456") {
                this.setState({ inputEnterpriseIDValue: "" });
            }
        }
        blurEnterpriseID() {
            if (this.state.inputEnterpriseIDValue === "") {
                this.setState({ inputEnterpriseIDValue: "123456" });
            }
        }
        changeEnterpriseID(event) {
            this.setState({ inputEnterpriseIDValue: event.target.value });
        }
        focusEnterpriseName() {
            if (this.state.inputEnterpriseNameValue === "请输入企业名称") {
                this.setState({ inputEnterpriseNameValue: "" });
            }
        }
        blurEnterpriseName() {
            if (this.state.inputEnterpriseNameValue === "") {
                this.setState({ inputEnterpriseNameValue: "请输入企业名称" });
            }
        }
        changeEnterpriseName(event) {
            this.setState({ inputEnterpriseNameValue: event.target.value });
        }
        focusEnterprisePosition() {
            if (this.state.inputEnterprisePositionValue === "请输入详细地址") {
                this.setState({ inputEnterprisePositionValue: "" });
            }
        }
        blurEnterprisePosition() {
            if (this.state.inputEnterprisePositionValue === "") {
                this.setState({ inputEnterprisePositionValue: "请输入详细地址" });
            }
        }
        changeEnterprisePosition(event) {
            event.target.value = event.target.value.replace(/[, ]/g, '');
            this.setState({
                inputEnterprisePositionValue: event.target.value,
                address: event.target.value,
            });
        }
        focusContacts() {
            if (this.state.contactsValue === "请输入联系人姓名") {
                this.setState({ contactsValue: "" });
            }
        }
        blurContacts() {
            if (this.state.contactsValue === "") {
                this.setState({ contactsValue: "请输入联系人姓名" });
            }
        }
        changeContacts(event) {
            event.target.value = event.target.value.replace(/[, ]/g, '');
            this.setState({ contactsValue: event.target.value });
        }
        focusPhone() {
            if (this.state.phoneValue === "请输入联系人电话") {
                this.setState({ phoneValue: "" });
            }
        }
        blurPhone() {
            if (this.state.phoneValue === "") {
                this.setState({ phoneValue: "请输入联系人电话" });
            }
        }
        changePhone(event) {
            this.setState({ phoneValue: event.target.value });
        }
        focusOfficialWebsite() {
            if (this.state.officialWebsiteValue === "请输入企业官方网址") {
                this.setState({ officialWebsiteValue: "" });
            }
        }
        blurOfficialWebsite() {
            if (this.state.officialWebsiteValue === "") {
                this.setState({ officialWebsiteValue: "请输入企业官方网址" });
            }
        }
        changeOfficialWebsite(event) {
            this.setState({ officialWebsiteValue: event.target.value });
        }
        focusDescription() {
            if (this.state.descriptionValue === "400字内") {
                this.setState({ descriptionValue: "" });
            }
        }
        blurDescription() {
            if (this.state.descriptionValue === "") {
                this.setState({ descriptionValue: "400字内" });
            }
        }
        changeDescription(event) {
            event.target.value = event.target.value.replace(/[, ]/g, '');
            this.setState({ descriptionValue: event.target.value });
        }
        setLogoImg(data) {
            console.log("AAAA", data);
            console.log("BBB", data[0]);
            this.setState({
                headimageurl: data[0],
            });
            console.log("headimg", this.state);
        }
        setElegantImg(data) {
            let filesElegants = this.state.filesElegant;
            let filesElegantsN = filesElegants.filter((item) => { return item.orientation != "1"; });
            $.each(data, function (index, item) {
                filesElegantsN.push({ "url": item, "id": "", "name": "XXimg" });
            });
            this.setState({
                elegant: filesElegantsN
            });
            console.log("setElegantImg55555", this.state.elegant);
        }
        setProductImg(data) {
            let filesProducts = this.state.filesProduct;
            let filesProductsN = filesProducts.filter((item) => { return item.orientation != "1"; });
            $.each(data, function (index, item) {
                filesProductsN.push({ "url": item, "id": "", "name": "XXimg" });
            });
            this.setState({
                product: filesProductsN
            });
        }
        setPanoramaImg(data) {
            console.log("panorama", this.state.panorama);
            let filesPanoramas = this.state.filesPanorama;
            let filesPanoramasN = filesPanoramas.filter((item) => { return item.orientation != "1"; });
            $.each(data, function (index, item) {
                filesPanoramasN.push({ "url": item, "id": "", "name": "XXimg" });
            });
            this.setState({
                panorama: filesPanoramasN
            });
            console.log("panorama", this.state.panorama);
        }
        clupPic() {
            $('#a-input').click();
        }
        updatePic(event) {
            console.log(99999);
            let formData = new FormData();
            formData.append("file", event.target.files[0]);
            this.uploadPic(formData);
        }
        uploadPic(file) {
            this.dataService.upload(this.callBackUploadPic.bind(this), file);
        }
        callBackUploadPic(data) {
            console.log("callBackUpload", data);
            if (data.return_code == 100) {
                let pic = this.state.pic;
                let elegant = this.state.elegant;
                pic.push({ url: data.response, name: "" });
                this.setState({
                    pic: pic,
                });
            }
            else {
                antd_mobile_4.Toast.info('上传失败', 2);
            }
            console.log("rrrrrrrrrrrrrP", this.state);
        }
        closePic(index) {
            let pic = this.state.pic;
            pic.splice(index, 1);
            this.setState({
                pic: pic,
            });
        }
        clupPicPro() {
            console.log(7777);
            $('#b-input').click();
        }
        updatePicPro(event) {
            let formData = new FormData();
            formData.append("file", event.target.files[0]);
            this.uploadPicPro(formData);
        }
        uploadPicPro(file) {
            this.dataService.upload(this.callBackUploadPicPro.bind(this), file);
        }
        callBackUploadPicPro(data) {
            console.log("callBackUpload", data);
            if (data.return_code == 100) {
                let picPro = this.state.picPro;
                picPro.push({ url: data.response, name: "" });
                this.setState({
                    picPro: picPro,
                });
            }
            else {
                antd_mobile_4.Toast.info('上传失败', 2);
            }
            console.log("rrrrrrrrrrrrrP", this.state);
        }
        closePicPro(index) {
            let picPro = this.state.picPro;
            picPro.splice(index, 1);
            this.setState({
                picPro: picPro,
            });
            console.log("MMMMMMMM", this.state);
        }
        clupPicPan() {
            console.log(7777);
            $('#h-input').click();
        }
        updatePicPan(event) {
            let formData = new FormData();
            formData.append("file", event.target.files[0]);
            this.uploadPicPan(formData);
        }
        uploadPicPan(file) {
            this.dataService.upload(this.callBackUploadPicPan.bind(this), file);
        }
        callBackUploadPicPan(data) {
            console.log("callBackUpload", data);
            if (data.return_code == 100) {
                let picPan = this.state.picPan;
                picPan.push({ url: data.response, name: "" });
                this.setState({
                    picPan: picPan,
                });
            }
            else {
                antd_mobile_4.Toast.info('上传失败', 2);
            }
            console.log("rrrrrrrrrrrrrP", this.state);
        }
        closePicPan(index) {
            let picPan = this.state.picPan;
            picPan.splice(index, 1);
            this.setState({
                picPan: picPan,
            });
            console.log("MMMMMMMM", this.state);
        }
        render() {
            const { files } = this.state;
            return (React.createElement("div", { className: "enterprise-information" },
                React.createElement("div", { className: "enterprise-information-back" },
                    React.createElement("div", { style: { float: "left" }, onClick: this.goBack.bind(this) },
                        React.createElement("img", { src: "./park_m/image/back.png", style: { margin: "-10px 10px 0 0" } }),
                        React.createElement("span", null, "\u4F01\u4E1A\u4FE1\u606F\u7BA1\u7406")),
                    this.state.modifyState ? null :
                        React.createElement("span", { style: { float: "right", marginRight: "50px", color: "#0B8BF0" }, onClick: this.modify.bind(this) }, "\u4FEE\u6539")),
                this.state.modifyState ?
                    React.createElement("div", { className: "enterprise-information-box" },
                        React.createElement("div", { className: "enterprise-information-id" },
                            React.createElement("div", { style: { color: "#949494", fontSize: "40px", lineHeight: "120px", marginLeft: "30px", float: "left", width: "25%" } }, "\u4F01\u4E1AID"),
                            React.createElement("input", { className: "enterprise-information-id-input", value: this.state.inputEnterpriseIDValue, readOnly: true })),
                        React.createElement("div", { className: "enterprise-information-modify-tag" },
                            React.createElement("div", { className: "enterprise-information-star" }),
                            React.createElement("div", { style: { color: "#949494", fontSize: "40px", lineHeight: "120px", float: "left", width: "25%" } }, "\u4F01\u4E1A\u540D\u79F0"),
                            React.createElement("input", { className: "enterprise-information-name-input", value: this.state.inputEnterpriseNameValue, onFocus: this.focusEnterpriseName.bind(this), onBlur: this.blurEnterpriseName.bind(this), onChange: this.changeEnterpriseName.bind(this) })),
                        React.createElement("div", { className: "", style: { height: "180px", width: "90%", margin: "auto", "marginTop": "1rem", borderBottom: "3px solid #F2F2F2" } },
                            React.createElement("span", { className: "enterprise-information-photograph-star" }),
                            React.createElement("span", { style: { color: "#949494", fontSize: "40px", lineHeight: "160px", float: "left" } }, "\u4F01\u4E1A logo"),
                            React.createElement("div", { className: "", style: { "marginLeft": "14rem" } },
                                React.createElement(antd_mobile_4.WingBlank, null,
                                    React.createElement(antd_mobile_4.ImagePicker, { files: this.state.filesLogo, onChange: this.onChangeLogo, onImageClick: (index, fs) => console.log(index, fs), selectable: files.length < 1, accept: "image/jpg,image/jpge,image/png", multiple: this.state.multiple })))),
                        React.createElement("div", { className: "enterprise-information-modify-tag" },
                            React.createElement("div", { className: "enterprise-information-star" }),
                            React.createElement("div", { style: { color: "#949494", fontSize: "40px", lineHeight: "120px", float: "left", width: "25%" } }, "\u4F01\u4E1A\u4F4D\u7F6E"),
                            React.createElement("input", { className: "enterprise-information-name-input", value: this.state.inputEnterprisePositionValue, onFocus: this.focusEnterprisePosition.bind(this), onBlur: this.blurEnterprisePosition.bind(this), onChange: this.changeEnterprisePosition.bind(this) })),
                        React.createElement("div", { className: "enterprise-information-modify-tag" },
                            React.createElement("div", { className: "enterprise-information-star" }),
                            React.createElement("div", { style: { color: "#949494", fontSize: "40px", lineHeight: "120px", float: "left", width: "25%" } }, "\u8054\u7CFB\u4EBA"),
                            React.createElement("input", { className: "enterprise-information-name-input", value: this.state.contactsValue, onFocus: this.focusContacts.bind(this), onBlur: this.blurContacts.bind(this), onChange: this.changeContacts.bind(this) })),
                        React.createElement("div", { className: "enterprise-information-modify-tag" },
                            React.createElement("div", { className: "enterprise-information-star" }),
                            React.createElement("div", { style: { color: "#949494", fontSize: "40px", lineHeight: "120px", float: "left", width: "25%" } }, "\u8054\u7CFB\u7535\u8BDD"),
                            React.createElement("input", { className: "enterprise-information-name-input", value: this.state.phoneValue, type: "text", onFocus: this.focusPhone.bind(this), onBlur: this.blurPhone.bind(this), onChange: this.changePhone.bind(this) })),
                        React.createElement("div", { className: "enterprise-information-modify-tag", onClick: this.showCompanyTypeBox.bind(this) },
                            React.createElement("div", { className: "enterprise-information-star" }),
                            React.createElement("div", { style: { color: "#949494", fontSize: "40px", lineHeight: "120px", float: "left", width: "25%" } }, "\u4F01\u4E1A\u5206\u7C7B"),
                            React.createElement("div", { style: { color: "#6C6C6C", fontSize: "40px", lineHeight: "120px", width: "50%", float: "left" } }, this.state.inputCompanyType),
                            React.createElement("div", { style: { float: "right", lineHeight: "120px", textAlign: "center", width: "60px" } },
                                React.createElement("img", { src: "./park_m/image/right.png" }))),
                        React.createElement("div", { className: "enterprise-information-modify-tag" },
                            React.createElement("div", { style: { color: "#949494", fontSize: "40px", lineHeight: "120px", float: "left", width: "25%", marginLeft: "30px" } }, "\u4F01\u4E1A\u5B98\u7F51"),
                            React.createElement("input", { className: "enterprise-information-name-input", value: this.state.officialWebsiteValue, onFocus: this.focusOfficialWebsite.bind(this), onBlur: this.blurOfficialWebsite.bind(this), onChange: this.changeOfficialWebsite.bind(this) })),
                        React.createElement("div", { style: { width: "90%", height: "120px", margin: "auto", marginTop: "10px" } },
                            React.createElement("div", { className: "enterprise-information-star" }),
                            React.createElement("div", { style: { color: "#949494", fontSize: "40px", lineHeight: "120px", float: "left", width: "35%" } }, "\u4F01\u4E1A\u8BE6\u60C5\u63CF\u8FF0:")),
                        React.createElement("textarea", { style: { width: "84%", height: "400px", backgroundColor: "#F2F2F2", fontSize: "40px", color: "#949494", border: "none", outline: "none", "padding": "2rem" }, value: this.state.descriptionValue, onFocus: this.focusDescription.bind(this), onBlur: this.blurDescription.bind(this), onChange: this.changeDescription.bind(this) }),
                        React.createElement("div", { className: "imgBox elegantImgBox", style: {} },
                            React.createElement("span", { style: { color: "#949494", fontSize: "40px", lineHeight: "160px", float: "left", "margin-right": "1rem" } }, "\u4F01\u4E1A\u98CE\u91C7"),
                            React.createElement("div", { className: "service-tel-B" },
                                this.state.pic.map((item, index) => {
                                    return (React.createElement("div", { style: { width: "12rem", height: "12rem", backgroundColor: "#F2F2F2", textAlign: "center", overflow: "hidden", margin: "30px 30px 0 0", float: "left" }, key: index },
                                        React.createElement("img", { className: "closeIcon", src: "./park_m/image/close.png", onClick: e => this.closePic(index) }),
                                        React.createElement("img", { className: "elegantImg", src: item.url })));
                                }),
                                React.createElement("input", { type: "file", onChange: this.updatePic.bind(this), id: "a-input", style: { "display": "none" } }),
                                React.createElement("div", { onClick: this.clupPic.bind(this), style: { width: "12rem", height: "12rem", backgroundColor: "#F2F2F2", textAlign: "center", overflow: "hidden", marginTop: "30px", float: "left" } },
                                    React.createElement("img", { src: "./park_m/image/addPicture.png", style: { height: "60px", width: "60px" } }),
                                    React.createElement("div", { style: { color: "#949494", marginTop: "-30px" } }, "\u6DFB\u52A0")))),
                        React.createElement("div", { className: "imgBox elegantImgBox", style: {} },
                            React.createElement("span", { style: { color: "#949494", fontSize: "40px", lineHeight: "160px", float: "left", "margin-right": "1rem" } }, "\u4EA7\u54C1\u5C55\u793A"),
                            React.createElement("div", { className: "service-tel-B" },
                                this.state.picPro.map((item, index) => {
                                    return (React.createElement("div", { style: { width: "12rem", height: "12rem", backgroundColor: "#F2F2F2", textAlign: "center", overflow: "hidden", margin: "30px 30px 0 0", float: "left" }, key: index },
                                        React.createElement("img", { className: "closeIcon", src: "./park_m/image/close.png", onClick: e => this.closePicPro(index) }),
                                        React.createElement("img", { className: "elegantImg", src: item.url })));
                                }),
                                React.createElement("input", { type: "file", onChange: this.updatePicPro.bind(this), id: "b-input", style: { "display": "none" } }),
                                React.createElement("div", { onClick: this.clupPicPro.bind(this), style: { width: "12rem", height: "12rem", backgroundColor: "#F2F2F2", textAlign: "center", overflow: "hidden", marginTop: "30px", float: "left" } },
                                    React.createElement("img", { src: "./park_m/image/addPicture.png", style: { height: "60px", width: "60px" } }),
                                    React.createElement("div", { style: { color: "#949494", marginTop: "-30px" } }, "\u6DFB\u52A0")))),
                        React.createElement("div", { className: "imgBox elegantImgBox", style: { "display": "none" } },
                            React.createElement("span", { style: { color: "#949494", fontSize: "40px", lineHeight: "160px", float: "left", "margin-right": "1rem" } }, "\u5168\u666F\u5C55\u793A"),
                            React.createElement("div", { className: "service-tel-B" },
                                this.state.picPan.map((item, index) => {
                                    return (React.createElement("div", { style: { width: "12rem", height: "12rem", backgroundColor: "#F2F2F2", textAlign: "center", overflow: "hidden", margin: "30px 30px 0 0", float: "left" }, key: index },
                                        React.createElement("img", { className: "closeIcon", src: "./park_m/image/close.png", onClick: e => this.closePicPan(index) }),
                                        React.createElement("img", { className: "elegantImg", src: item.url })));
                                }),
                                React.createElement("input", { type: "file", onChange: this.updatePicPan.bind(this), id: "h-input", style: { "display": "none" } }),
                                React.createElement("div", { onClick: this.clupPicPan.bind(this), style: { width: "12rem", height: "12rem", backgroundColor: "#F2F2F2", textAlign: "center", overflow: "hidden", marginTop: "30px", float: "left" } },
                                    React.createElement("img", { src: "./park_m/image/addPicture.png", style: { height: "60px", width: "60px" } }),
                                    React.createElement("div", { style: { color: "#949494", marginTop: "-30px" } }, "\u6DFB\u52A0")))),
                        React.createElement("div", { className: "enterprise-information-submit", onClick: this.submit.bind(this) }, "\u63D0\u4EA4")) :
                    React.createElement("div", null,
                        React.createElement("div", { style: { margin: "30px 0 0 50px", overflow: "hidden" } },
                            React.createElement("div", { style: { color: "#949494", fontSize: "40px", float: "left", width: "25%" } }, "\u4F01\u4E1AID"),
                            React.createElement("div", { style: { color: "#333333", fontSize: "40px", float: "left" } }, this.state.ID)),
                        React.createElement("div", { style: { margin: "30px 0 0 50px", overflow: "hidden" } },
                            React.createElement("div", { style: { color: "#949494", fontSize: "40px", float: "left", width: "25%" } }, "\u4F01\u4E1A\u540D\u79F0"),
                            React.createElement("div", { style: { color: "#333333", fontSize: "40px", float: "left" } }, this.state.name)),
                        React.createElement("div", { style: { margin: "30px 0 0 50px", overflow: "hidden" } },
                            React.createElement("div", { style: { color: "#949494", fontSize: "40px", float: "left", width: "25%" } }, "\u4F01\u4E1Alogo"),
                            React.createElement("div", { style: { float: "left", width: "12rem", "height": "12rem" } },
                                React.createElement("img", { src: this.state.headimageurl, style: { width: "100%", "height": "100%" }, onError: this.onErrorHeadimageurl.bind(this) }))),
                        React.createElement("div", { style: { margin: "30px 0 0 50px", overflow: "hidden" } },
                            React.createElement("div", { style: { color: "#949494", fontSize: "40px", float: "left", width: "25%" } }, "\u4F01\u4E1A\u4F4D\u7F6E"),
                            React.createElement("div", { style: { color: "#333333", fontSize: "40px", float: "left", width: "70%", display: "-webkit-box", webkitBoxOrient: "vertical", WebkitLineClamp: 1, overflow: "hidden" } }, this.state.address)),
                        React.createElement("div", { style: { margin: "30px 0 0 50px", overflow: "hidden" } },
                            React.createElement("div", { style: { color: "#949494", fontSize: "40px", float: "left", width: "25%" } }, "\u8054\u7CFB\u4EBA"),
                            React.createElement("div", { style: { color: "#333333", fontSize: "40px", float: "left" } }, this.state.contacts)),
                        React.createElement("div", { style: { margin: "30px 0 0 50px", overflow: "hidden" } },
                            React.createElement("div", { style: { color: "#949494", fontSize: "40px", float: "left", width: "25%" } }, "\u8054\u7CFB\u7535\u8BDD"),
                            React.createElement("div", { style: { color: "#333333", fontSize: "40px", float: "left" } }, this.state.phone)),
                        React.createElement("div", { style: { margin: "30px 0 0 50px", overflow: "hidden" } },
                            React.createElement("div", { style: { color: "#949494", fontSize: "40px", float: "left", width: "25%" } }, "\u4F01\u4E1A\u5206\u7C7B"),
                            React.createElement("div", { style: { color: "#333333", fontSize: "40px", float: "left" } }, this.state.company_type)),
                        React.createElement("div", { style: { margin: "30px 0 0 50px", overflow: "hidden" } },
                            React.createElement("div", { style: { color: "#949494", fontSize: "40px", float: "left", width: "25%" } }, "\u4F01\u4E1A\u5B98\u7F51"),
                            React.createElement("div", { style: { color: "#333333", fontSize: "40px", float: "left" } }, this.state.website)),
                        React.createElement("div", { style: { margin: "30px 0 0 50px", overflow: "hidden" } },
                            React.createElement("div", { style: { color: "#949494", fontSize: "40px", float: "left", width: "25%" } }, "\u4F01\u4E1A\u4ECB\u7ECD"),
                            React.createElement("div", { className: "enterpriseDetails" }, this.state.descriptArr.map((i, index) => {
                                return (React.createElement("p", { style: { "white-space": "pre-line", "text-indent": "5rem" } }, i));
                            }))),
                        React.createElement("div", { style: { margin: "0px 0 0 50px", overflow: "hidden" } },
                            React.createElement("div", { style: { color: "#949494", fontSize: "40px", float: "left", width: "25%" } }, "\u4F01\u4E1A\u98CE\u91C7"),
                            React.createElement("div", { style: { color: "#333333", fontSize: "40px", float: "left", width: "70%" } }, this.state.elegantImgList.map((item, index) => {
                                return (React.createElement("div", { key: index, style: { float: "left", width: "12rem", height: "12rem", margin: "0 20px 20px 0" } },
                                    React.createElement("img", { src: item.pic_url, width: "100%", height: "100%", onError: this.onErrorElegant.bind(this) })));
                            }))),
                        React.createElement("div", { style: { margin: "30px 0 0 50px", overflow: "hidden" } },
                            React.createElement("div", { style: { color: "#949494", fontSize: "40px", float: "left", width: "25%" } }, "\u4EA7\u54C1\u5C55\u793A"),
                            React.createElement("div", { style: { color: "#333333", fontSize: "40px", float: "left", width: "70%" } }, this.state.productImgList.map((item, index) => {
                                return (React.createElement("div", { key: index, style: { float: "left", width: "12rem", height: "12rem", margin: "0 20px 20px 0" } },
                                    React.createElement("img", { src: item.pic_url, width: "100%", height: "100%", onError: this.onErrorProduct.bind(this) })));
                            }))),
                        React.createElement("div", { style: { margin: "30px 0 0 50px", overflow: "hidden" }, className: "hide" },
                            React.createElement("div", { style: { color: "#949494", fontSize: "40px", float: "left", width: "25%" } }, "\u5168\u666F\u5C55\u793A"),
                            React.createElement("div", { style: { color: "#333333", fontSize: "40px", float: "left", width: "70%" } }, this.state.panoramaImgList.map((item, index) => {
                                return (React.createElement("div", { key: index, style: { float: "left", width: "12rem", height: "12rem", margin: "0 20px 20px 0" } },
                                    React.createElement("img", { src: item.pic_url, width: "100%", height: "100%", onError: this.onErrorPanorama.bind(this) })));
                            })))),
                React.createElement("div", { className: this.state.companyTypeBox },
                    React.createElement("ul", { className: "rollSelectCauseULcss" }, this.state.companyTypeUL.map((i, index) => {
                        return (React.createElement("li", { className: this.state.companyTypeIndexof == index ? "rollSelectCauseli-active" : "rollSelectCauseli", onClick: this.inCompanyeTypeList.bind(this, index, i.id, i.name) }, i.name));
                    })),
                    React.createElement("div", { className: "rollSelectCuasedBtn" },
                        React.createElement("span", { className: "rollSelectCancel", onClick: this.hideCompanyTypeBox.bind(this) }, "\u53D6\u6D88"),
                        React.createElement("span", { className: "rollSelectConfirm", onClick: this.getCompanyTypeBox.bind(this) }, "\u786E\u8BA4")))));
        }
    }
    exports.default = EnterpriseInformation;
});
define("findLease (2)", ["require", "exports", "react", "react-router-dom", "compat", "dataService"], function (require, exports, React, RouterDOM, compat_5, dataService_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class FindLease extends React.Component {
        constructor(props) {
            super(props);
            this.globalAction = new compat_5.default();
            this.state = {
                FindLeasecss: "findLease",
                showList: true,
                showInfo: false,
                companyInfotit: "companyInfotit",
            };
            FindLease.toggleView = this.toggleView.bind(this);
            FindLease.getLeaseinfoByroomid = this.getLeaseinfoByroomid.bind(this);
        }
        componentDidMount() {
            move3dBut("up");
        }
        static getLeaseinfoByroomid(id) { }
        getLeaseinfoByroomid(id) {
            console.log("getCompanyinfo", id);
            this.toggleView("Info", id);
            LeaseInfo.getLeaseInfo(id);
        }
        static toggleView(a, id) { }
        ;
        toggleView(a, id) {
            console.log("fl", a);
            console.log("fl", id);
            if (a == "Info") {
                this.setState({
                    showList: false,
                    showInfo: true,
                    companyInfotit: "hide"
                });
            }
            else {
                this.setState({
                    showList: true,
                    showInfo: false,
                    companyInfotit: "companyInfotit"
                });
            }
        }
        render() {
            return (React.createElement("div", { className: this.state.FindLeasecss },
                React.createElement("p", { className: this.state.companyInfotit },
                    React.createElement("span", null, "\u529E\u516C\u51FA\u79DF")),
                React.createElement("div", { className: this.state.showList == true ? "show" : "hide" },
                    React.createElement(LeaseList, null)),
                React.createElement("div", { className: this.state.showInfo == true ? "show" : "hide" },
                    React.createElement(LeaseInfo, null))));
        }
    }
    exports.default = FindLease;
    class LeaseList extends React.Component {
        constructor(props) {
            super(props);
            this.dataService = new dataService_5.default();
            this.globalAction = new compat_5.default();
            this.state = {
                roomNull: "hide",
                park_id: "1001",
                roomId: "",
                inputValue: "搜索",
                square: "全部",
                leaseListcss: "leaseList-part",
                foleBtn: "lease-foleBtn",
                indexOf: -1,
                leaseBtn: "leaseBtn-part",
                leaseul: "leaseul",
                roomData: [],
                areaType: [],
                typeIndexof: 100,
                iconfont: "iconfont iconfont-unturn",
                searchBoxIcon: "iconfont iconfont-unturn",
                src: "about:'blank'",
                imgurlNull: "./park_m/image/noImg.png",
            };
            this.showInfo = this.showInfo.bind(this);
            this.getRoomRentSquareType = this.getRoomRentSquareType.bind(this);
            this.setRoomRent = this.setRoomRent.bind(this);
            this.searchRoomRent = this.searchRoomRent.bind(this);
            this.change = this.change.bind(this);
        }
        componentDidMount() {
            this.dataService.getRoomRentSquareType(this.getRoomRentSquareType, this.state.park_id);
            this.dataService.findRoomRentByparkid(this.setRoomRent, this.state.park_id, "", 1, -1);
        }
        getRoomRentSquareType(data) {
            console.log("getRoomRentSquareType", data);
            this.setState({
                areaType: data.response,
            });
        }
        setRoomRent(data) {
            console.log("setRoomRent", data);
            if (data.response.length == 0) {
                this.setState({
                    roomData: data.response,
                    roomNull: "show",
                });
            }
            else {
                this.setState({
                    roomData: data.response,
                    roomNull: "hide",
                });
            }
        }
        showInfo(a, id, name, e) {
            FindLease.toggleView(a, id);
            LeaseInfo.getLeaseInfo(id);
            console.log("more", a, id, name, e);
        }
        toggleFold() {
            console.log("tftft");
            if (this.state.leaseListcss == "leaseList-all") {
                this.setState({
                    leaseListcss: "leaseList-part",
                    leaseul: "leaseul"
                });
                this.globalAction.web_call_webgl_continueloadModuler();
            }
            else {
                this.setState({
                    leaseListcss: "leaseList-all",
                    leaseul: "leaseul-all"
                });
                this.globalAction.web_call_webgl_pauseloadModuler();
            }
            if (this.state.iconfont == "iconfont iconfont-unturn") {
                this.setState({
                    iconfont: "iconfont iconfont-turn",
                });
            }
            else {
                this.setState({
                    iconfont: "iconfont iconfont-unturn",
                });
            }
        }
        foldBtn() {
            console.log("foldBtn");
            if (this.state.leaseBtn == "leaseBtn-part") {
                this.setState({
                    leaseBtn: "leaseBtn-all",
                    searchBoxIcon: "iconfont iconfont-turn",
                });
            }
            else {
                this.setState({
                    leaseBtn: "leaseBtn-part",
                    searchBoxIcon: "iconfont iconfont-unturn",
                });
            }
        }
        leaseActive(index, id, title, building, floor, room) {
            console.log("active", index, id);
            console.log("active2", building, floor, room);
            this.setState({
                indexOf: index,
                roomId: id
            });
            console.log("leaseActive", this.state);
            this.dataService.findRoomRentByroomid(this.callWebglSwitchRoom.bind(this), id);
        }
        callWebglSwitchRoom(data) {
            let roomData = {
                m_pTile: data.response.project_title,
                m_pBuilding: data.response.building_code,
                m_pLayer: data.response.floor_code,
                m_pRoom: data.response.room_code,
                m_pPart: data.response.part,
            };
            this.globalAction.web_call_webgl_switchRoom(roomData);
        }
        typeActive(indexof, name) {
            console.log("typeActive-1", indexof);
            console.log("typeActive-2", name);
            this.setState({
                typeIndexof: indexof,
                square: name,
                inputValue: name,
            }, () => {
                this.searchRoomRent();
            });
        }
        foucus() {
            if (this.state.inputValue == "搜索") {
                this.setState({ inputValue: "" });
            }
        }
        blur(event) {
            if (this.state.inputValue == "") {
                this.setState({ inputValue: "搜索" });
            }
        }
        change(event) {
            this.setState({
                inputValue: event.target.value,
                square: event.target.value,
            });
        }
        searchRoomRent() {
            if (this.state.square == "全部") {
                this.dataService.findRoomRentByparkid(this.setRoomRent, this.state.park_id, "", 1, -1);
            }
            else {
                this.dataService.findRoomRentByparkid(this.setRoomRent, this.state.park_id, this.state.square, 1, -1);
            }
            console.log("searchBtn", this.state.inputValue, this.state.square);
        }
        mapReturnpark() {
            this.globalAction.web_call_webgl_mapReturnpark();
            move3dBut("down");
        }
        onErrorHeadimageurl(index) {
            console.log('rrrrddrrr');
            var items = this.state.roomData;
            items[index].headimageurl = "./park_m/image/noImg.png";
            this.setState({
                roomData: items
            });
        }
        render() {
            return (React.createElement("div", { className: this.state.leaseListcss },
                React.createElement("div", { className: "foleBtn" },
                    React.createElement("p", { className: "companyGoHomeLeft", onClick: this.mapReturnpark.bind(this) },
                        React.createElement(RouterDOM.Link, { to: "/home", style: { color: "#949494" } },
                            React.createElement("i", { className: "iconfont companyInfoicon" }, "\uE83B"),
                            React.createElement("span", null, "\u8FD4\u56DE"))),
                    React.createElement("p", { className: "companyGoHomeRight" },
                        React.createElement("i", { className: this.state.iconfont, style: { "fontSize": "5rem", "color": "#C0C0C0" }, onClick: this.toggleFold.bind(this) }, "\uE849"))),
                React.createElement("ul", { className: this.state.leaseul },
                    React.createElement("p", { className: this.state.roomNull }, "\u6CA1\u6709\u7B26\u5408\u641C\u7D22\u6761\u4EF6\u7684\u7ED3\u679C\u00B7\u00B7\u00B7"),
                    this.state.roomData.map((i, index) => {
                        return (React.createElement("li", { onClick: this.leaseActive.bind(this, index, i.id, i.project_title, i.building_code, i.floor_code, i.room_code), className: this.state.indexOf == index ? "leaseli-active" : "leaseli", style: { display: ("1" == i.state) ? "block" : "none" } },
                            React.createElement("div", { className: this.state.indexOf == index ? "leaseImgback-active" : "leaseImgback" },
                                React.createElement("img", { src: i.headimageurl == null ? this.state.imgurlNull : i.headimageurl, onError: this.onErrorHeadimageurl.bind(this, index) })),
                            React.createElement("div", { className: "leaseul-middle" },
                                React.createElement("p", { className: this.state.indexOf == index ? "leaseName-active" : "leaseName", style: { "font-size": "2.4rem", "font-weight": "bold" } },
                                    i.building_name,
                                    "-",
                                    i.floor_name,
                                    "-",
                                    i.room_name),
                                React.createElement("p", { style: { "font-size": "2.5rem" } },
                                    React.createElement("span", { className: "iconfont", style: { "fontSize": "2.5rem", "margin-right": "1rem" } }, "\uE82A"),
                                    i.floorage,
                                    "m\u00B2"),
                                React.createElement("p", { className: this.state.indexOf == index ? "leaseType-active" : "leaseType" },
                                    React.createElement("span", { className: this.state.indexOf == index ? "leasePrice-active" : "leasePrice" }, i.price),
                                    "\u5143/m\u00B2\u00B7\u6708")),
                            React.createElement("div", { className: "leaseul-right" },
                                React.createElement("p", { onClick: this.showInfo.bind(this, "Info", i.id, i.name), className: this.state.indexOf == index ? "show" : "hide" },
                                    "\u66F4\u591A",
                                    React.createElement("i", { className: "iconfont", style: { "fontSize": "2rem" } }, "\uE827")))));
                    })),
                React.createElement("form", { action: '', target: "rfFrame" },
                    React.createElement("div", { className: this.state.leaseBtn },
                        React.createElement("div", { className: "searchBox", onClick: this.foldBtn.bind(this) },
                            React.createElement("span", { className: "searchBox-text" },
                                React.createElement("span", { className: "iconfont", style: { "fontSize": "2.3rem" } }, "\uE810"),
                                React.createElement("span", { style: { "color": "#333333", "margin-left": "1rem" } }, this.state.square == "全部" ? "全部" : this.state.square + "m²")),
                            React.createElement("span", { className: "searchBox-type" },
                                React.createElement("i", { className: this.state.searchBoxIcon, style: { "fontSize": "3rem", position: "relative", top: "0.3rem" } }, "\uE828 "))),
                        React.createElement("ul", { className: "areaTypeul" },
                            React.createElement("li", { className: this.state.typeIndexof == 100 ? "areaTypeli-active" : "areaTypeli", onClick: this.typeActive.bind(this, 100, "全部", "id-全部") }, "\u5168\u90E8"),
                            this.state.areaType.map((i, index) => {
                                return (React.createElement("li", { onClick: this.typeActive.bind(this, index, i), className: this.state.typeIndexof == index ? "areaTypeli-active" : "areaTypeli" },
                                    i,
                                    "m\u00B2"));
                            })))),
                React.createElement("iframe", { id: "rfFrame", name: "rfFrame", src: this.state.src, style: { display: "none" } }, "   ")));
        }
    }
    class LeaseInfo extends React.Component {
        constructor(props) {
            super(props);
            this.dataService = new dataService_5.default();
            this.state = {
                leaseInfocss: "leaseInfo",
                roomName: "",
                building: "",
                floor: "",
                room: "",
                building_name: "",
                floor_name: "",
                room_name: "",
                infoli: 0,
                iconfont: "iconfont iconfont-turn",
            };
            this.showList = this.showList.bind(this);
            LeaseInfo.getLeaseInfo = this.getLeaseInfo.bind(this);
            this.setLeaseInfo = this.setLeaseInfo.bind(this);
        }
        static getLeaseInfo(id) { }
        getLeaseInfo(id) {
            this.dataService.findRoomRentByroomid(this.setLeaseInfo, id);
        }
        setLeaseInfo(data) {
            console.log("setLeaseInfo", data);
            this.setState({
                building_name: data.response.building_name,
                floor_name: data.response.floor_name,
                room_name: data.response.room_name,
            });
            LeaseInfos.setLeaseInfos(data);
            Picshow.setPicshow(data);
            Videoshow.setVideoshow(data);
        }
        componentDidMount() {
        }
        showList(a, id) {
            FindLease.toggleView(a, id);
        }
        toggleFold() {
            if (this.state.leaseInfocss == "leaseInfo") {
                this.setState({
                    leaseInfocss: "leaseInfo-part",
                });
                LeaseInfos.botTelHide();
            }
            else {
                this.setState({
                    leaseInfocss: "leaseInfo",
                });
                LeaseInfos.botTelShow();
            }
            if (this.state.iconfont == "iconfont iconfont-unturn") {
                this.setState({
                    iconfont: "iconfont iconfont-turn",
                });
            }
            else {
                this.setState({
                    iconfont: "iconfont iconfont-unturn",
                });
            }
        }
        infoClick(indexof) {
            console.log("infoClick", indexof);
            this.setState({
                infoli: indexof,
            });
        }
        render() {
            return (React.createElement("div", null,
                React.createElement("p", { className: "companyInfotit" },
                    React.createElement("span", null,
                        this.state.building_name,
                        "-",
                        this.state.floor_name,
                        "-",
                        this.state.room_name)),
                React.createElement("div", { className: this.state.leaseInfocss },
                    React.createElement("div", { className: "foleBtn" },
                        React.createElement("p", { className: "companyGoHomeLeft", style: { color: "#949494" }, onClick: this.showList.bind(this, "List", "id-01") },
                            React.createElement("i", { className: "iconfont companyInfoicon" }, "\uE83B"),
                            React.createElement("span", null, "\u8FD4\u56DE")),
                        React.createElement("p", { className: "companyGoHomeRight" },
                            React.createElement("i", { className: this.state.iconfont, style: { "fontSize": "5rem", "color": "#C0C0C0" }, onClick: this.toggleFold.bind(this) }, "\uE849"))),
                    React.createElement("div", { className: "leaseInfoul_br" },
                        React.createElement("ul", { className: "leaseInfoul" },
                            React.createElement("li", { className: this.state.infoli == 0 ? "leaseInfoli-active" : "leaseInfoli", onClick: this.infoClick.bind(this, 0) }, "\u79DF\u623F\u4FE1\u606F"),
                            React.createElement("li", { className: this.state.infoli == 1 ? "leaseInfoli-active" : "leaseInfoli", onClick: this.infoClick.bind(this, 1) }, "\u623F\u95F4\u5C55\u793A"))),
                    React.createElement("div", { className: "leaseContain" },
                        React.createElement("div", { className: this.state.infoli == 0 ? "show" : "hide" },
                            React.createElement(LeaseInfos, null)),
                        React.createElement("div", { className: this.state.infoli == 1 ? "show" : "hide" },
                            React.createElement(Picshow, null)),
                        React.createElement("div", { className: this.state.infoli == 2 ? "show" : "hide" },
                            React.createElement(Videoshow, null))))));
        }
    }
    class LeaseInfos extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                floorage: "",
                inspection_time: "",
                floor_name: "",
                limit: "",
                elevator: "",
                price: 0,
                man: "",
                tel: "",
                sum: 0,
                sell_price: 0,
                sell_price_sum: 0,
                date: "",
                decorate_name: "",
                title: "",
                free_rent: "",
                station_amount: "",
                floor_sum: "",
                botTel: "botTel",
                sell_state: 0,
            };
            LeaseInfos.setLeaseInfos = this.setLeaseInfos.bind(this);
            LeaseInfos.botTelShow = this.botTelShow.bind(this);
            LeaseInfos.botTelHide = this.botTelHide.bind(this);
        }
        componentDidMount() { }
        static setLeaseInfos(data) { }
        setLeaseInfos(data) {
            console.log("setLeaseInfosIIII", data);
            let sum = data.response.floorage * data.response.price;
            let sum_z = sum.toFixed(0);
            let sell_price_sum = data.response.floorage * data.response.sell_price;
            let sell_price_sum_z = sell_price_sum.toFixed(0);
            let iselevator;
            if (data.response.lift == 1) {
                iselevator = "有";
            }
            else {
                iselevator = "无";
            }
            console.log("zzzzz", sum);
            this.setState({
                floorage: data.response.floorage,
                inspection_time: data.response.inspection_time,
                floor_name: data.response.floor_name,
                limit: data.response.require,
                elevator: iselevator,
                price: data.response.price,
                man: data.response.contact,
                tel: data.response.phone,
                sum: sum_z,
                sell_price: data.response.sell_price,
                sell_price_sum: sell_price_sum_z,
                date: data.response.date,
                decorate_name: data.response.decorate_name,
                free_rent: data.response.free_rent,
                station_amount: data.response.station_amount,
                floor_sum: data.response.floor_sum,
                sell_state: data.response.sell_state,
            });
            document.getElementById("telurl").href = 'tel:' + this.state.tel;
        }
        static botTelShow() { }
        botTelShow() {
            this.setState({
                botTel: "botTel"
            });
        }
        static botTelHide() { }
        botTelHide() {
            this.setState({
                botTel: "hide"
            });
        }
        render() {
            return (React.createElement("div", { className: "leaseInfos" },
                React.createElement("ul", { className: "leaseInfosul" },
                    React.createElement("div", { className: "leaseInfosliLeft" },
                        React.createElement("li", null,
                            React.createElement("span", { style: { "padding-right": "2rem" } }, "\u5EFA\u7B51\u9762\u79EF"),
                            React.createElement("span", { style: { "font-weight": "600" } },
                                this.state.floorage,
                                "\u5E73\u7C73")),
                        React.createElement("li", null,
                            React.createElement("span", { style: { "padding-right": "2rem" } }, "\u6240\u5728\u697C\u5C42"),
                            React.createElement("span", { style: { "font-weight": "600" } }, this.state.floor_name)),
                        React.createElement("li", { className: this.state.price == 0 ? "hide" : "jj" },
                            React.createElement("span", { style: { "padding-right": "7rem" } }, "\u79DF\u91D1"),
                            React.createElement("span", { style: { "color": "#F53636" } },
                                this.state.sum,
                                "\u5143/\u6708\uFF08",
                                this.state.price,
                                "\u5143/m\u00B2\u00B7\u6708\uFF09")),
                        React.createElement("li", { className: this.state.sell_state == 0 ? "jj" : "hide" },
                            React.createElement("span", { style: { "padding-right": "7rem" } }, "\u552E\u4EF7"),
                            React.createElement("span", { style: { "color": "#F53636" } },
                                this.state.sell_price_sum,
                                "\u5143\uFF08",
                                this.state.sell_price,
                                "\u5143/m\u00B2\uFF09")),
                        React.createElement("li", null,
                            React.createElement("span", { style: { "padding-right": "7rem" } }, "\u514D\u79DF"),
                            React.createElement("span", { style: { "font-weight": "600" } }, this.state.free_rent)),
                        React.createElement("li", null,
                            React.createElement("span", { style: { "padding-right": "2rem" } }, "\u5BB9\u7EB3\u5DE5\u4F4D"),
                            React.createElement("span", { style: { "font-weight": "600" } }, this.state.station_amount))),
                    React.createElement("div", { className: "leaseInfosliRight" },
                        React.createElement("li", null,
                            "\u603B\u5171\u697C\u5C42",
                            React.createElement("span", { style: { "font-weight": "600", "font-size": "2.3rem", "marginLeft": "2rem" } },
                                this.state.floor_sum,
                                "\u5C42")),
                        React.createElement("li", null,
                            "\u7535\u68AF",
                            React.createElement("span", { style: { "font-weight": "600", "font-size": "2.3rem", "marginLeft": "7rem" } }, this.state.elevator)),
                        React.createElement("li", { className: this.state.sell_price == 0 ? "kk" : "kk2" },
                            React.createElement("p", null)),
                        React.createElement("li", null,
                            "\u88C5\u4FEE",
                            React.createElement("span", { style: { "font-weight": "600", "font-size": "2.3rem", "marginLeft": "7rem" } }, this.state.decorate_name))),
                    React.createElement("li", { className: "room2" },
                        React.createElement("span", { style: { "padding-right": "2rem" } }, "\u770B\u623F\u65F6\u95F4"),
                        React.createElement("span", { style: { "font-weight": "600" } }, this.state.inspection_time)),
                    React.createElement("li", { className: "room2" },
                        React.createElement("span", { style: { "padding-right": "2rem" } }, "\u53D1\u5E03\u65F6\u95F4"),
                        React.createElement("span", { style: { "font-weight": "600" } }, this.state.date))),
                React.createElement("div", { className: this.state.botTel },
                    React.createElement("p", { className: "botTelMan" },
                        "\u8054\u7CFB\u4EBA ",
                        React.createElement("span", { style: { "font-weight": "600", "marginLeft": "2rem" } }, this.state.man)),
                    React.createElement("div", { className: "telBut" },
                        React.createElement("a", { href: "#", id: "telurl" }, "\u7535\u8BDD\u54A8\u8BE2")))));
        }
    }
    class Picshow extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                roomImg: [],
                urlNull: "hide",
                data: ['1', '2', '3', '4', '5', '6', '7'],
                imgHeight: 176,
                slideIndex: 0,
                picBtnIndex: 0,
            };
            Picshow.setPicshow = this.setPicshow.bind(this);
        }
        componentDidMount() {
            setTimeout(() => {
                this.setState({
                    data: ['1', '2', '3', '4', '5', '6', '7'],
                });
            }, 100);
        }
        static setPicshow(data) { }
        setPicshow(data) {
            let picurl = [];
            console.log("setPicshowPPPPPP", data);
            $.each(data.response.pic, function (index, item) {
                picurl.push(item.url);
            });
            if (data.response.pic.length == 0) {
                this.setState({
                    roomImg: data.response.pic,
                    urlNull: "show",
                });
            }
            else {
                this.setState({
                    roomImg: data.response.pic,
                    urlNull: "hide",
                    data: picurl,
                });
            }
        }
        picBtn(a, b) {
            console.log(a);
            this.setState({
                picBtnIndex: a
            });
        }
        render() {
            return (React.createElement("div", { className: "picshow" },
                this.state.picBtnIndex == 0 ?
                    React.createElement("ul", null,
                        React.createElement("p", { className: this.state.urlNull, style: { "margin": "1rem 0", "text-align": "center", "font-size": "3rem", "color": "#797979" } }, "\u6682\u65E0\u56FE\u7247\u00B7\u00B7\u00B7"),
                        this.state.data.map((i, index) => {
                            return (React.createElement("li", null,
                                React.createElement("img", { src: i })));
                        }))
                    :
                        React.createElement("div", null,
                            React.createElement(Videoshow, null)),
                React.createElement("div", { className: "picBtn" },
                    React.createElement("div", { className: this.state.picBtnIndex == 0 ? "picBtnS-active" : "picBtnS", onClick: this.picBtn.bind(this, 0) }, "\u56FE\u7247"),
                    React.createElement("div", { className: this.state.picBtnIndex == 1 ? "picBtnS-active" : "picBtnS", onClick: this.picBtn.bind(this, 1) }, "\u89C6\u9891"))));
        }
    }
    class Videoshow extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                urlNull: "hide",
                roomVideo: [],
            };
            Videoshow.setVideoshow = this.setVideoshow.bind(this);
            this.seeVideoState = this.seeVideoState.bind(this);
        }
        componentDidMount() {
            this.seeVideoState();
        }
        seeVideoState() {
            if (this.state.roomVideo.length == 0) {
                this.setState({
                    urlNull: "show",
                });
                console.log(this.state);
            }
            else if (!this.state.roomVideo[0].url) {
                this.setState({
                    urlNull: "show",
                });
            }
            else {
                this.setState({
                    urlNull: "hide",
                });
            }
        }
        static setVideoshow(data) { }
        setVideoshow(data) {
            console.log("4545454", data.response.video.length);
            if (data.response.video.length == 0) {
                console.log(898989898);
                this.setState({
                    roomVideo: [],
                    urlNull: "show",
                });
                console.log(this.state);
            }
            else if (!data.response.video[0].url) {
                this.setState({
                    roomVideo: [],
                    urlNull: "show",
                });
            }
            else {
                this.setState({
                    roomVideo: data.response.video,
                    urlNull: "hide",
                });
            }
            console.log("66666666666666", this.state);
        }
        render() {
            return (React.createElement("div", { className: "picshow" },
                React.createElement("ul", null,
                    React.createElement("p", { className: this.state.urlNull, style: { "margin": "1rem 0", "text-align": "center", "font-size": "3rem", "color": "#797979" } }, "\u6682\u65E0\u89C6\u9891\u00B7\u00B7\u00B7"),
                    this.state.roomVideo.map((i, index) => {
                        return (React.createElement("li", { style: { "width": "56rem", " height": "36rem" } },
                            React.createElement("video", { src: i.url, style: { "width": "100%", "height": "100%" }, controls: true }, "\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301video\u64AD\u653E")));
                    }))));
        }
    }
});
define("findSell (2)", ["require", "exports", "react", "react-router-dom", "compat", "dataService", "antd-mobile"], function (require, exports, React, RouterDOM, compat_6, dataService_6, antd_mobile_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class FindLease extends React.Component {
        constructor(props) {
            super(props);
            this.globalAction = new compat_6.default();
            this.state = {
                FindLeasecss: "findLease",
                showList: true,
                showInfo: false,
                companyInfotit: "companyInfotit",
            };
            FindLease.toggleView = this.toggleView.bind(this);
            FindLease.getLeaseinfoByroomid = this.getLeaseinfoByroomid.bind(this);
        }
        componentDidMount() {
            move3dBut("up");
        }
        static getLeaseinfoByroomid(id) { }
        getLeaseinfoByroomid(id) {
            console.log("getCompanyinfo", id);
            this.toggleView("Info", id);
            LeaseInfo.getLeaseInfo(id);
        }
        static toggleView(a, id) { }
        ;
        toggleView(a, id) {
            console.log("fl", a);
            console.log("fl", id);
            if (a == "Info") {
                this.setState({
                    showList: false,
                    showInfo: true,
                    companyInfotit: "hide"
                });
            }
            else {
                this.setState({
                    showList: true,
                    showInfo: false,
                    companyInfotit: "companyInfotit"
                });
            }
        }
        render() {
            return (React.createElement("div", { className: this.state.FindLeasecss },
                React.createElement("p", { className: this.state.companyInfotit },
                    React.createElement("span", null, "\u529E\u516C\u51FA\u552E")),
                React.createElement("div", { className: this.state.showList == true ? "show" : "hide" },
                    React.createElement(LeaseList, null)),
                React.createElement("div", { className: this.state.showInfo == true ? "show" : "hide" },
                    React.createElement(LeaseInfo, null))));
        }
    }
    exports.default = FindLease;
    class LeaseList extends React.Component {
        constructor(props) {
            super(props);
            this.dataService = new dataService_6.default();
            this.globalAction = new compat_6.default();
            this.state = {
                roomNull: "hide",
                park_id: "1001",
                roomId: "",
                inputValue: "搜索",
                square: "全部",
                leaseListcss: "leaseList-part",
                foleBtn: "lease-foleBtn",
                indexOf: -1,
                leaseBtn: "leaseBtn-part",
                leaseul: "leaseul",
                roomData: [],
                areaType: [],
                typeIndexof: 100,
                iconfont: "iconfont iconfont-unturn",
                searchBoxIcon: "iconfont iconfont-unturn",
                src: "about:'blank'",
                imgurlNull: "./park_m/image/noImg.png",
            };
            this.showInfo = this.showInfo.bind(this);
            this.getRoomRentSquareType = this.getRoomRentSquareType.bind(this);
            this.setRoomRent = this.setRoomRent.bind(this);
            this.searchRoomRent = this.searchRoomRent.bind(this);
            this.change = this.change.bind(this);
        }
        componentDidMount() {
            this.dataService.getRoomRentSquareType(this.getRoomRentSquareType, this.state.park_id);
            this.dataService.findRoomRentByparkid(this.setRoomRent, this.state.park_id, "", -1, 0);
        }
        getRoomRentSquareType(data) {
            console.log("getRoomRentSquareType", data);
            this.setState({
                areaType: data.response,
            });
        }
        setRoomRent(data) {
            console.log("setRoomRent", data);
            if (data.response.length == 0) {
                this.setState({
                    roomData: data.response,
                    roomNull: "show",
                });
            }
            else {
                this.setState({
                    roomData: data.response,
                    roomNull: "hide",
                });
            }
        }
        showInfo(a, id, name, e) {
            FindLease.toggleView(a, id);
            LeaseInfo.getLeaseInfo(id);
            console.log("more", a, id, name, e);
        }
        toggleFold() {
            console.log("tftft");
            if (this.state.leaseListcss == "leaseList-all") {
                this.setState({
                    leaseListcss: "leaseList-part",
                    leaseul: "leaseul"
                });
                this.globalAction.web_call_webgl_continueloadModuler();
            }
            else {
                this.setState({
                    leaseListcss: "leaseList-all",
                    leaseul: "leaseul-all"
                });
                this.globalAction.web_call_webgl_pauseloadModuler();
            }
            if (this.state.iconfont == "iconfont iconfont-unturn") {
                this.setState({
                    iconfont: "iconfont iconfont-turn",
                });
            }
            else {
                this.setState({
                    iconfont: "iconfont iconfont-unturn",
                });
            }
        }
        foldBtn() {
            console.log("foldBtn");
            if (this.state.leaseBtn == "leaseBtn-part") {
                this.setState({
                    leaseBtn: "leaseBtn-all",
                    searchBoxIcon: "iconfont iconfont-turn",
                });
            }
            else {
                this.setState({
                    leaseBtn: "leaseBtn-part",
                    searchBoxIcon: "iconfont iconfont-unturn",
                });
            }
        }
        leaseActive(index, id, title, building, floor, room) {
            console.log("active", index, id);
            console.log("active2", building, floor, room);
            this.setState({
                indexOf: index,
                roomId: id
            });
            console.log("leaseActive", this.state);
            this.dataService.findRoomRentByroomid(this.callWebglSwitchRoom.bind(this), id);
        }
        callWebglSwitchRoom(data) {
            let roomData = {
                m_pTile: data.response.project_title,
                m_pBuilding: data.response.building_code,
                m_pLayer: data.response.floor_code,
                m_pRoom: data.response.room_code,
                m_pPart: data.response.part,
            };
            this.globalAction.web_call_webgl_switchRoom(roomData);
        }
        typeActive(indexof, name) {
            console.log("typeActive-1", indexof);
            console.log("typeActive-2", name);
            this.setState({
                typeIndexof: indexof,
                square: name,
                inputValue: name,
            }, () => {
                this.searchRoomRent();
            });
        }
        foucus() {
            if (this.state.inputValue == "搜索") {
                this.setState({ inputValue: "" });
            }
        }
        blur(event) {
            if (this.state.inputValue == "") {
                this.setState({ inputValue: "搜索" });
            }
        }
        change(event) {
            this.setState({
                inputValue: event.target.value,
                square: event.target.value,
            });
        }
        searchRoomRent() {
            if (this.state.square == "全部") {
                this.dataService.findRoomRentByparkid(this.setRoomRent, this.state.park_id, " ", -1, 0);
            }
            else {
                this.dataService.findRoomRentByparkid(this.setRoomRent, this.state.park_id, this.state.square, -1, 0);
            }
            console.log("searchBtn", this.state.inputValue, this.state.square);
        }
        mapReturnpark() {
            this.globalAction.web_call_webgl_mapReturnpark();
            move3dBut("down");
        }
        onErrorHeadimageurl(index) {
            var items = this.state.roomData;
            items[index].headimageurl = "./park_m/image/noImg.png";
            this.setState({
                roomData: items
            });
        }
        render() {
            return (React.createElement("div", { className: this.state.leaseListcss },
                React.createElement("div", { className: "foleBtn" },
                    React.createElement("p", { className: "companyGoHomeLeft", onClick: this.mapReturnpark.bind(this) },
                        React.createElement(RouterDOM.Link, { to: "/home", style: { color: "#949494" } },
                            React.createElement("i", { className: "iconfont companyInfoicon" }, "\uE83B"),
                            React.createElement("span", null, "\u8FD4\u56DE"))),
                    React.createElement("p", { className: "companyGoHomeRight" },
                        React.createElement("i", { className: this.state.iconfont, style: { "fontSize": "5rem", "color": "#C0C0C0" }, onClick: this.toggleFold.bind(this) }, "\uE849"))),
                React.createElement("ul", { className: this.state.leaseul },
                    React.createElement("p", { className: this.state.roomNull }, "\u6CA1\u6709\u7B26\u5408\u641C\u7D22\u6761\u4EF6\u7684\u7ED3\u679C\u00B7\u00B7\u00B7"),
                    this.state.roomData.map((i, index) => {
                        return (React.createElement("li", { onClick: this.leaseActive.bind(this, index, i.id, i.project_title, i.building_code, i.floor_code, i.room_code), className: this.state.indexOf == index ? "leaseli-active" : "leaseli", style: { display: ("0" == i.sell_state) ? "block" : "none" } },
                            React.createElement("div", { className: this.state.indexOf == index ? "leaseImgback-active" : "leaseImgback" },
                                React.createElement("img", { src: i.headimageurl == null ? this.state.imgurlNull : i.headimageurl, onError: this.onErrorHeadimageurl.bind(this, index) })),
                            React.createElement("div", { className: "leaseul-middle" },
                                React.createElement("p", { className: this.state.indexOf == index ? "leaseName-active" : "leaseName", style: { "font-size": "2.4rem", "font-weight": "bold" } },
                                    i.building_name,
                                    "-",
                                    i.floor_name,
                                    "-",
                                    i.room_name),
                                React.createElement("p", { style: { "font-size": "2.5rem" } },
                                    React.createElement("span", { className: "iconfont", style: { "fontSize": "2.5rem", "margin-right": "1rem" } }, "\uE82A"),
                                    i.floorage,
                                    "m\u00B2"),
                                React.createElement("p", { className: this.state.indexOf == index ? "sellType-active" : "sellType" },
                                    React.createElement("span", { className: this.state.indexOf == index ? "sellPrice-active" : "sellPrice" }, i.sell_price),
                                    "\u5143/m\u00B2")),
                            React.createElement("div", { className: "sellul-right" },
                                React.createElement("p", { onClick: this.showInfo.bind(this, "Info", i.id, i.name), className: this.state.indexOf == index ? "show" : "hide" },
                                    "\u66F4\u591A",
                                    React.createElement("i", { className: "iconfont", style: { "fontSize": "2rem" } }, "\uE827")))));
                    })),
                React.createElement("form", { action: '', target: "rfFrame" },
                    React.createElement("div", { className: this.state.leaseBtn },
                        React.createElement("div", { className: "searchBox", onClick: this.foldBtn.bind(this) },
                            React.createElement("span", { className: "searchBox-text" },
                                React.createElement("span", { className: "iconfont", style: { "fontSize": "2.3rem" } }, "\uE810"),
                                React.createElement("span", { style: { "color": "#333333", "margin-left": "1rem" } }, this.state.square == "全部" ? "全部" : this.state.square + "m²")),
                            React.createElement("span", { className: "searchBox-type" },
                                React.createElement("i", { className: this.state.searchBoxIcon, style: { "fontSize": "3rem", position: "relative", top: "0.3rem" } }, "\uE828 "))),
                        React.createElement("ul", { className: "areaTypeul" },
                            React.createElement("li", { className: this.state.typeIndexof == 100 ? "areaTypeli-active" : "areaTypeli", onClick: this.typeActive.bind(this, 100, "全部", "id-全部") }, "\u5168\u90E8"),
                            this.state.areaType.map((i, index) => {
                                return (React.createElement("li", { onClick: this.typeActive.bind(this, index, i), className: this.state.typeIndexof == index ? "areaTypeli-active" : "areaTypeli" },
                                    i,
                                    "m\u00B2"));
                            })))),
                React.createElement("iframe", { id: "rfFrame", name: "rfFrame", src: this.state.src, style: { display: "none" } }, "   ")));
        }
    }
    class LeaseInfo extends React.Component {
        constructor(props) {
            super(props);
            this.dataService = new dataService_6.default();
            this.state = {
                leaseInfocss: "leaseInfo",
                roomName: "",
                building: "",
                floor: "",
                room: "",
                building_name: "",
                floor_name: "",
                room_name: "",
                infoli: 0,
                iconfont: "iconfont iconfont-turn",
            };
            this.showList = this.showList.bind(this);
            LeaseInfo.getLeaseInfo = this.getLeaseInfo.bind(this);
            this.setLeaseInfo = this.setLeaseInfo.bind(this);
        }
        static getLeaseInfo(id) { }
        getLeaseInfo(id) {
            this.dataService.findRoomRentByroomid(this.setLeaseInfo, id);
        }
        setLeaseInfo(data) {
            console.log("setLeaseInfo", data);
            this.setState({
                building_name: data.response.building_name,
                floor_name: data.response.floor_name,
                room_name: data.response.room_name,
            });
            LeaseInfos.setLeaseInfos(data);
            Picshow.setPicshow(data);
            Videoshow.setVideoshow(data);
        }
        componentDidMount() {
        }
        showList(a, id) {
            FindLease.toggleView(a, id);
        }
        toggleFold() {
            if (this.state.leaseInfocss == "leaseInfo") {
                this.setState({
                    leaseInfocss: "leaseInfo-part",
                });
                LeaseInfos.botTelHide();
            }
            else {
                this.setState({
                    leaseInfocss: "leaseInfo",
                });
                LeaseInfos.botTelShow();
            }
            if (this.state.iconfont == "iconfont iconfont-unturn") {
                this.setState({
                    iconfont: "iconfont iconfont-turn",
                });
            }
            else {
                this.setState({
                    iconfont: "iconfont iconfont-unturn",
                });
            }
        }
        infoClick(indexof) {
            console.log("infoClick", indexof);
            this.setState({
                infoli: indexof,
            });
        }
        render() {
            return (React.createElement("div", null,
                React.createElement("p", { className: "companyInfotit" },
                    React.createElement("span", null,
                        this.state.building_name,
                        "-",
                        this.state.floor_name,
                        "-",
                        this.state.room_name)),
                React.createElement("div", { className: this.state.leaseInfocss },
                    React.createElement("div", { className: "foleBtn" },
                        React.createElement("p", { className: "companyGoHomeLeft", style: { color: "#949494" }, onClick: this.showList.bind(this, "List", "id-01") },
                            React.createElement("i", { className: "iconfont companyInfoicon" }, "\uE83B"),
                            React.createElement("span", null, "\u8FD4\u56DE")),
                        React.createElement("p", { className: "companyGoHomeRight" },
                            React.createElement("i", { className: this.state.iconfont, style: { "fontSize": "5rem", "color": "#C0C0C0" }, onClick: this.toggleFold.bind(this) }, "\uE849"))),
                    React.createElement("div", { className: "leaseInfoul_br" },
                        React.createElement("ul", { className: "leaseInfoul" },
                            React.createElement("li", { className: this.state.infoli == 0 ? "leaseInfoli-active" : "leaseInfoli", onClick: this.infoClick.bind(this, 0) }, "\u552E\u623F\u4FE1\u606F"),
                            React.createElement("li", { className: this.state.infoli == 1 ? "leaseInfoli-active" : "leaseInfoli", onClick: this.infoClick.bind(this, 1) }, "\u623F\u95F4\u5C55\u793A"))),
                    React.createElement("div", { className: "leaseContain" },
                        React.createElement("div", { className: this.state.infoli == 0 ? "show" : "hide" },
                            React.createElement(LeaseInfos, null)),
                        React.createElement("div", { className: this.state.infoli == 1 ? "show" : "hide" },
                            React.createElement(Picshow, null)),
                        React.createElement("div", { className: this.state.infoli == 2 ? "show" : "hide" },
                            React.createElement(Videoshow, null))))));
        }
    }
    class LeaseInfos extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                floorage: "",
                inspection_time: "",
                floor_name: "",
                limit: "",
                elevator: "",
                price: 0,
                man: "",
                tel: "",
                sum: 0,
                sell_price: 0,
                sell_price_sum: 0,
                date: "",
                decorate_name: "",
                title: "",
                free_rent: "",
                station_amount: "",
                floor_sum: "",
                botTel: "botTel",
                sell_state: 0,
                state: 0,
            };
            LeaseInfos.setLeaseInfos = this.setLeaseInfos.bind(this);
            LeaseInfos.botTelShow = this.botTelShow.bind(this);
            LeaseInfos.botTelHide = this.botTelHide.bind(this);
        }
        componentDidMount() { }
        static setLeaseInfos(data) { }
        setLeaseInfos(data) {
            console.log("setLeaseInfosIIII", data);
            let sum = data.response.floorage * data.response.price;
            let sum_z = sum.toFixed(0);
            let sell_price_sum = data.response.floorage * data.response.sell_price;
            let sell_price_sum_z = sell_price_sum.toFixed(0);
            let iselevator;
            if (data.response.lift == 1) {
                iselevator = "有";
            }
            else {
                iselevator = "无";
            }
            console.log("zzzzz", sum);
            this.setState({
                floorage: data.response.floorage,
                inspection_time: data.response.inspection_time,
                floor_name: data.response.floor_name,
                limit: data.response.require,
                elevator: iselevator,
                price: data.response.price,
                man: data.response.contact,
                tel: data.response.phone,
                sum: sum_z,
                sell_price: data.response.sell_price,
                sell_price_sum: sell_price_sum_z,
                date: data.response.date,
                decorate_name: data.response.decorate_name,
                free_rent: data.response.free_rent,
                station_amount: data.response.station_amount,
                floor_sum: data.response.floor_sum,
                sell_state: data.response.sell_state,
                state: data.response.state,
            });
            document.getElementById("telurl").href = 'tel:' + this.state.tel;
        }
        static botTelShow() { }
        botTelShow() {
            this.setState({
                botTel: "botTel"
            });
        }
        static botTelHide() { }
        botTelHide() {
            this.setState({
                botTel: "hide"
            });
        }
        render() {
            return (React.createElement("div", { className: "sellInfos" },
                React.createElement("ul", { className: "sellul" },
                    React.createElement("li", null,
                        React.createElement("span", { style: { "padding-right": "2rem" } }, "\u5EFA\u7B51\u9762\u79EF"),
                        React.createElement("span", { style: { "font-weight": "600" } },
                            this.state.floorage,
                            "\u5E73\u7C73")),
                    React.createElement("li", null,
                        React.createElement("span", { style: { "padding-right": "2rem" } }, "\u6240\u5728\u697C\u5C42"),
                        React.createElement("span", { style: { "font-weight": "600" } }, this.state.floor_name)),
                    React.createElement("li", { className: this.state.state == 1 ? "sj" : "hide" },
                        React.createElement("span", { style: { "padding-right": "7rem" } }, "\u79DF\u91D1"),
                        React.createElement("span", { style: { "color": "#F53636" } },
                            this.state.sum,
                            "\u5143/\u6708\uFF08",
                            this.state.price,
                            "\u5143/m\u00B2\u00B7\u6708\uFF09")),
                    React.createElement("li", { className: this.state.sell_state == 0 ? "jj" : "hide" },
                        React.createElement("span", { style: { "padding-right": "7rem" } }, "\u552E\u4EF7"),
                        React.createElement("span", { style: { "color": "#F53636" } },
                            this.state.sell_price_sum,
                            "\u5143\uFF08",
                            this.state.sell_price,
                            "\u5143/m\u00B2\uFF09")),
                    React.createElement("li", { className: this.state.state == 1 ? "smj" : "hide" },
                        React.createElement("span", { style: { "padding-right": "7rem" } }, "\u514D\u79DF"),
                        React.createElement("span", { style: { "font-weight": "600" } }, this.state.free_rent)),
                    React.createElement("li", null,
                        React.createElement("span", { style: { "padding-right": "2rem" } }, "\u5BB9\u7EB3\u5DE5\u4F4D"),
                        React.createElement("span", { style: { "font-weight": "600" } }, this.state.station_amount)),
                    React.createElement("li", { className: "room2" },
                        React.createElement("span", { style: { "padding-right": "2rem" } }, "\u770B\u623F\u65F6\u95F4"),
                        React.createElement("span", { style: { "font-weight": "600" } }, this.state.inspection_time)),
                    React.createElement("li", { className: "room2" },
                        React.createElement("span", { style: { "padding-right": "2rem" } }, "\u53D1\u5E03\u65F6\u95F4"),
                        React.createElement("span", { style: { "font-weight": "600" } }, this.state.date)),
                    React.createElement("li", { className: this.state.state == 1 ? "LL1B" : "LL1" },
                        "\u603B\u5171\u697C\u5C42",
                        React.createElement("span", { style: { "font-weight": "600", "font-size": "2.3rem", "marginLeft": "2rem" } },
                            this.state.floor_sum,
                            "\u5C42")),
                    React.createElement("li", { className: this.state.state == 1 ? "LL2B" : "LL2" },
                        "\u7535\u68AF",
                        React.createElement("span", { style: { "font-weight": "600", "font-size": "2.3rem", "marginLeft": "7rem" } }, this.state.elevator)),
                    React.createElement("li", { className: this.state.state == 1 ? "LL3B" : "LL3" },
                        "\u88C5\u4FEE",
                        React.createElement("span", { style: { "font-weight": "600", "font-size": "2.3rem", "marginLeft": "7rem" } }, this.state.decorate_name)),
                    React.createElement("li", null)),
                React.createElement("div", { className: this.state.botTel },
                    React.createElement("p", { className: "botTelMan" },
                        "\u8054\u7CFB\u4EBA ",
                        React.createElement("span", { style: { "font-weight": "600", "marginLeft": "2rem" } }, this.state.man)),
                    React.createElement("div", { className: "telBut" },
                        React.createElement("a", { href: "#", id: "telurl" }, "\u7535\u8BDD\u54A8\u8BE2")))));
        }
    }
    class Picshow extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                roomImg: [],
                urlNull: "hide",
                data: ['1', '2', '3', '4', '5', '6', '7'],
                imgHeight: 176,
                slideIndex: 0,
                picBtnIndex: 0,
            };
            Picshow.setPicshow = this.setPicshow.bind(this);
        }
        componentDidMount() {
            setTimeout(() => {
                this.setState({
                    data: ['1', '2', '3', '4', '5', '6', '7'],
                });
            }, 100);
        }
        static setPicshow(data) { }
        setPicshow(data) {
            let picurl = [];
            console.log("setPicshowPPPPPP", data);
            $.each(data.response.pic, function (index, item) {
                picurl.push(item.url);
            });
            if (data.response.pic.length == 0) {
                this.setState({
                    roomImg: data.response.pic,
                    urlNull: "show",
                });
            }
            else {
                this.setState({
                    roomImg: data.response.pic,
                    urlNull: "hide",
                    data: picurl,
                });
            }
        }
        picBtn(a, b) {
            console.log(a);
            this.setState({
                picBtnIndex: a
            });
        }
        render() {
            return (React.createElement("div", { className: "picshow" },
                this.state.picBtnIndex == 0 ?
                    React.createElement("ul", null,
                        React.createElement("p", { className: this.state.urlNull, style: { "margin": "1rem 0", "text-align": "center", "font-size": "3rem", "color": "#797979" } }, "\u6682\u65E0\u56FE\u7247\u00B7\u00B7\u00B7"),
                        React.createElement(antd_mobile_5.WingBlank, null,
                            React.createElement(antd_mobile_5.Carousel, { className: "space-carousel", frameOverflow: "visible", cellSpacing: 10, slideWidth: 0.8, autoplay: true, infinite: true, afterChange: index => this.setState({ slideIndex: index }) }, this.state.data.map((val, index) => (React.createElement("img", { src: val, alt: "", style: { width: '100%', verticalAlign: 'top' }, onLoad: () => {
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                } }))))))
                    :
                        React.createElement("div", null,
                            React.createElement(Videoshow, null)),
                React.createElement("div", { className: "picBtn" },
                    React.createElement("div", { className: this.state.picBtnIndex == 0 ? "picBtnS-active" : "picBtnS", onClick: this.picBtn.bind(this, 0) }, "\u56FE\u7247"),
                    React.createElement("div", { className: this.state.picBtnIndex == 1 ? "picBtnS-active" : "picBtnS", onClick: this.picBtn.bind(this, 1) }, "\u89C6\u9891"))));
        }
    }
    class Videoshow extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                urlNull: "hide",
                roomVideo: [],
            };
            Videoshow.setVideoshow = this.setVideoshow.bind(this);
            this.seeVideoState = this.seeVideoState.bind(this);
        }
        componentDidMount() {
        }
        seeVideoState() {
            if (this.state.roomVideo.length == 0) {
                this.setState({
                    urlNull: "show",
                });
                console.log(this.state);
            }
            else {
                this.setState({
                    urlNull: "hide",
                });
            }
        }
        static setVideoshow(data) { }
        setVideoshow(data) {
            console.log("setVideoshow", data);
            if (data.response.video.length == 0) {
                console.log(898989898);
                this.setState({
                    roomVideo: [],
                    urlNull: "show",
                });
                console.log(this.state);
            }
            else if (!data.response.video[0].url) {
                this.setState({
                    roomVideo: [],
                    urlNull: "show",
                });
            }
            else {
                this.setState({
                    roomVideo: data.response.video,
                    urlNull: "hide",
                });
            }
            console.log("66666666666666", this.state);
            this.seeVideoState();
        }
        render() {
            return (React.createElement("div", { className: "picshow" },
                React.createElement("ul", null,
                    React.createElement("p", { className: this.state.urlNull, style: { "margin": "1rem 0", "text-align": "center", "font-size": "3rem", "color": "#797979" } }, "\u6682\u65E0\u89C6\u9891\u00B7\u00B7\u00B7"),
                    this.state.roomVideo.map((i, index) => {
                        return (React.createElement("li", { style: { "width": "56rem", " height": "36rem" } },
                            React.createElement("video", { src: i.url, style: { "width": "100%", "height": "100%" }, controls: true }, "\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301video\u64AD\u653E")));
                    }))));
        }
    }
});
define("findSell (3)", ["require", "exports", "react", "react-router-dom", "compat", "dataService", "antd-mobile"], function (require, exports, React, RouterDOM, compat_7, dataService_7, antd_mobile_6) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class FindLease extends React.Component {
        constructor(props) {
            super(props);
            this.globalAction = new compat_7.default();
            this.state = {
                FindLeasecss: "findLease",
                showList: true,
                showInfo: false,
                companyInfotit: "companyInfotit",
            };
            FindLease.toggleView = this.toggleView.bind(this);
            FindLease.getLeaseinfoByroomid = this.getLeaseinfoByroomid.bind(this);
        }
        componentDidMount() {
            move3dBut("up");
        }
        static getLeaseinfoByroomid(id) { }
        getLeaseinfoByroomid(id) {
            console.log("getCompanyinfo", id);
            this.toggleView("Info", id);
            LeaseInfo.getLeaseInfo(id);
        }
        static toggleView(a, id) { }
        ;
        toggleView(a, id) {
            console.log("fl", a);
            console.log("fl", id);
            if (a == "Info") {
                this.setState({
                    showList: false,
                    showInfo: true,
                    companyInfotit: "hide"
                });
            }
            else {
                this.setState({
                    showList: true,
                    showInfo: false,
                    companyInfotit: "companyInfotit"
                });
            }
        }
        render() {
            return (React.createElement("div", { className: this.state.FindLeasecss },
                React.createElement("p", { className: this.state.companyInfotit },
                    React.createElement("span", null, "\u529E\u516C\u51FA\u552E")),
                React.createElement("div", { className: this.state.showList == true ? "show" : "hide" },
                    React.createElement(LeaseList, null)),
                React.createElement("div", { className: this.state.showInfo == true ? "show" : "hide" },
                    React.createElement(LeaseInfo, null))));
        }
    }
    exports.default = FindLease;
    class LeaseList extends React.Component {
        constructor(props) {
            super(props);
            this.dataService = new dataService_7.default();
            this.globalAction = new compat_7.default();
            this.state = {
                roomNull: "hide",
                park_id: "1001",
                roomId: "",
                inputValue: "搜索",
                square: "全部",
                leaseListcss: "leaseList-part",
                foleBtn: "lease-foleBtn",
                indexOf: -1,
                leaseBtn: "leaseBtn-part",
                leaseul: "leaseul",
                roomData: [],
                areaType: [],
                typeIndexof: 100,
                iconfont: "iconfont iconfont-unturn",
                searchBoxIcon: "iconfont iconfont-unturn",
                src: "about:'blank'",
                imgurlNull: "./park_m/image/noImg.png",
            };
            this.showInfo = this.showInfo.bind(this);
            this.getRoomRentSquareType = this.getRoomRentSquareType.bind(this);
            this.setRoomRent = this.setRoomRent.bind(this);
            this.searchRoomRent = this.searchRoomRent.bind(this);
            this.change = this.change.bind(this);
        }
        componentDidMount() {
            this.dataService.getRoomRentSquareType(this.getRoomRentSquareType, this.state.park_id);
            this.dataService.findRoomRentByparkid(this.setRoomRent, this.state.park_id, "", -1, 0);
        }
        getRoomRentSquareType(data) {
            console.log("getRoomRentSquareType", data);
            this.setState({
                areaType: data.response,
            });
        }
        setRoomRent(data) {
            console.log("setRoomRent", data);
            if (data.response.length == 0) {
                this.setState({
                    roomData: data.response,
                    roomNull: "show",
                });
            }
            else {
                this.setState({
                    roomData: data.response,
                    roomNull: "hide",
                });
            }
        }
        showInfo(a, id, name, e) {
            FindLease.toggleView(a, id);
            LeaseInfo.getLeaseInfo(id);
            console.log("more", a, id, name, e);
        }
        toggleFold() {
            console.log("tftft");
            if (this.state.leaseListcss == "leaseList-all") {
                this.setState({
                    leaseListcss: "leaseList-part",
                    leaseul: "leaseul"
                });
                this.globalAction.web_call_webgl_continueloadModuler();
            }
            else {
                this.setState({
                    leaseListcss: "leaseList-all",
                    leaseul: "leaseul-all"
                });
                this.globalAction.web_call_webgl_pauseloadModuler();
            }
            if (this.state.iconfont == "iconfont iconfont-unturn") {
                this.setState({
                    iconfont: "iconfont iconfont-turn",
                });
            }
            else {
                this.setState({
                    iconfont: "iconfont iconfont-unturn",
                });
            }
        }
        foldBtn() {
            console.log("foldBtn");
            if (this.state.leaseBtn == "leaseBtn-part") {
                this.setState({
                    leaseBtn: "leaseBtn-all",
                    searchBoxIcon: "iconfont iconfont-turn",
                });
            }
            else {
                this.setState({
                    leaseBtn: "leaseBtn-part",
                    searchBoxIcon: "iconfont iconfont-unturn",
                });
            }
        }
        leaseActive(index, id, title, building, floor, room) {
            console.log("active", index, id);
            console.log("active2", building, floor, room);
            this.setState({
                indexOf: index,
                roomId: id
            });
            console.log("leaseActive", this.state);
            this.dataService.findRoomRentByroomid(this.callWebglSwitchRoom.bind(this), id);
        }
        callWebglSwitchRoom(data) {
            let roomData = {
                m_pTile: data.response.project_title,
                m_pBuilding: data.response.building_code,
                m_pLayer: data.response.floor_code,
                m_pRoom: data.response.room_code,
                m_pPart: data.response.part,
            };
            this.globalAction.web_call_webgl_switchRoom(roomData);
        }
        typeActive(indexof, name) {
            console.log("typeActive-1", indexof);
            console.log("typeActive-2", name);
            this.setState({
                typeIndexof: indexof,
                square: name,
                inputValue: name,
            }, () => {
                this.searchRoomRent();
            });
        }
        foucus() {
            if (this.state.inputValue == "搜索") {
                this.setState({ inputValue: "" });
            }
        }
        blur(event) {
            if (this.state.inputValue == "") {
                this.setState({ inputValue: "搜索" });
            }
        }
        change(event) {
            this.setState({
                inputValue: event.target.value,
                square: event.target.value,
            });
        }
        searchRoomRent() {
            if (this.state.square == "全部") {
                this.dataService.findRoomRentByparkid(this.setRoomRent, this.state.park_id, " ", -1, 0);
            }
            else {
                this.dataService.findRoomRentByparkid(this.setRoomRent, this.state.park_id, this.state.square, -1, 0);
            }
            console.log("searchBtn", this.state.inputValue, this.state.square);
        }
        mapReturnpark() {
            this.globalAction.web_call_webgl_mapReturnpark();
            move3dBut("down");
        }
        onErrorHeadimageurl(index) {
            var items = this.state.roomData;
            items[index].headimageurl = "./park_m/image/noImg.png";
            this.setState({
                roomData: items
            });
        }
        render() {
            return (React.createElement("div", { className: this.state.leaseListcss },
                React.createElement("div", { className: "foleBtn" },
                    React.createElement("p", { className: "companyGoHomeLeft", onClick: this.mapReturnpark.bind(this) },
                        React.createElement(RouterDOM.Link, { to: "/home", style: { color: "#949494" } },
                            React.createElement("i", { className: "iconfont companyInfoicon" }, "\uE83B"),
                            React.createElement("span", null, "\u8FD4\u56DE"))),
                    React.createElement("p", { className: "companyGoHomeRight" },
                        React.createElement("i", { className: this.state.iconfont, style: { "fontSize": "5rem", "color": "#C0C0C0" }, onClick: this.toggleFold.bind(this) }, "\uE849"))),
                React.createElement("ul", { className: this.state.leaseul },
                    React.createElement("p", { className: this.state.roomNull }, "\u6CA1\u6709\u7B26\u5408\u641C\u7D22\u6761\u4EF6\u7684\u7ED3\u679C\u00B7\u00B7\u00B7"),
                    this.state.roomData.map((i, index) => {
                        return (React.createElement("li", { onClick: this.leaseActive.bind(this, index, i.id, i.project_title, i.building_code, i.floor_code, i.room_code), className: this.state.indexOf == index ? "leaseli-active" : "leaseli", style: { display: ("0" == i.sell_state) ? "block" : "none" } },
                            React.createElement("div", { className: this.state.indexOf == index ? "leaseImgback-active" : "leaseImgback" },
                                React.createElement("img", { src: i.headimageurl == null ? this.state.imgurlNull : i.headimageurl, onError: this.onErrorHeadimageurl.bind(this, index) })),
                            React.createElement("div", { className: "leaseul-middle" },
                                React.createElement("p", { className: this.state.indexOf == index ? "leaseName-active" : "leaseName", style: { "font-size": "2.4rem", "font-weight": "bold" } },
                                    i.building_name,
                                    "-",
                                    i.floor_name,
                                    "-",
                                    i.room_name),
                                React.createElement("p", { style: { "font-size": "2.5rem" } },
                                    React.createElement("span", { className: "iconfont", style: { "fontSize": "2.5rem", "margin-right": "1rem" } }, "\uE82A"),
                                    i.floorage,
                                    "m\u00B2"),
                                React.createElement("p", { className: this.state.indexOf == index ? "sellType-active" : "sellType" },
                                    React.createElement("span", { className: this.state.indexOf == index ? "sellPrice-active" : "sellPrice" }, i.sell_price),
                                    "\u5143/m\u00B2")),
                            React.createElement("div", { className: "sellul-right" },
                                React.createElement("p", { onClick: this.showInfo.bind(this, "Info", i.id, i.name), className: this.state.indexOf == index ? "show" : "hide" },
                                    "\u66F4\u591A",
                                    React.createElement("i", { className: "iconfont", style: { "fontSize": "2rem" } }, "\uE827")))));
                    })),
                React.createElement("form", { action: '', target: "rfFrame" },
                    React.createElement("div", { className: this.state.leaseBtn },
                        React.createElement("div", { className: "searchBox", onClick: this.foldBtn.bind(this) },
                            React.createElement("span", { className: "searchBox-text" },
                                React.createElement("span", { className: "iconfont", style: { "fontSize": "2.3rem" } }, "\uE810"),
                                React.createElement("span", { style: { "color": "#333333", "margin-left": "1rem" } }, this.state.square == "全部" ? "全部" : this.state.square + "m²")),
                            React.createElement("span", { className: "searchBox-type" },
                                React.createElement("i", { className: this.state.searchBoxIcon, style: { "fontSize": "3rem", position: "relative", top: "0.3rem" } }, "\uE828 "))),
                        React.createElement("ul", { className: "areaTypeul" },
                            React.createElement("li", { className: this.state.typeIndexof == 100 ? "areaTypeli-active" : "areaTypeli", onClick: this.typeActive.bind(this, 100, "全部", "id-全部") }, "\u5168\u90E8"),
                            this.state.areaType.map((i, index) => {
                                return (React.createElement("li", { onClick: this.typeActive.bind(this, index, i), className: this.state.typeIndexof == index ? "areaTypeli-active" : "areaTypeli" },
                                    i,
                                    "m\u00B2"));
                            })))),
                React.createElement("iframe", { id: "rfFrame", name: "rfFrame", src: this.state.src, style: { display: "none" } }, "   ")));
        }
    }
    class LeaseInfo extends React.Component {
        constructor(props) {
            super(props);
            this.dataService = new dataService_7.default();
            this.state = {
                leaseInfocss: "leaseInfo",
                roomName: "",
                building: "",
                floor: "",
                room: "",
                building_name: "",
                floor_name: "",
                room_name: "",
                infoli: 0,
                iconfont: "iconfont iconfont-turn",
            };
            this.showList = this.showList.bind(this);
            LeaseInfo.getLeaseInfo = this.getLeaseInfo.bind(this);
            this.setLeaseInfo = this.setLeaseInfo.bind(this);
        }
        static getLeaseInfo(id) { }
        getLeaseInfo(id) {
            this.dataService.findRoomRentByroomid(this.setLeaseInfo, id);
        }
        setLeaseInfo(data) {
            console.log("setLeaseInfo", data);
            this.setState({
                building_name: data.response.building_name,
                floor_name: data.response.floor_name,
                room_name: data.response.room_name,
            });
            LeaseInfos.setLeaseInfos(data);
            Picshow.setPicshow(data);
            Picshow.setVideoshow(data);
        }
        componentDidMount() {
        }
        showList(a, id) {
            FindLease.toggleView(a, id);
        }
        toggleFold() {
            if (this.state.leaseInfocss == "leaseInfo") {
                this.setState({
                    leaseInfocss: "leaseInfo-part",
                });
                LeaseInfos.botTelHide();
            }
            else {
                this.setState({
                    leaseInfocss: "leaseInfo",
                });
                LeaseInfos.botTelShow();
            }
            if (this.state.iconfont == "iconfont iconfont-unturn") {
                this.setState({
                    iconfont: "iconfont iconfont-turn",
                });
            }
            else {
                this.setState({
                    iconfont: "iconfont iconfont-unturn",
                });
            }
        }
        infoClick(indexof) {
            console.log("infoClick", indexof);
            this.setState({
                infoli: indexof,
            });
        }
        render() {
            return (React.createElement("div", null,
                React.createElement("p", { className: "companyInfotit" },
                    React.createElement("span", null,
                        this.state.building_name,
                        "-",
                        this.state.floor_name,
                        "-",
                        this.state.room_name)),
                React.createElement("div", { className: this.state.leaseInfocss },
                    React.createElement("div", { className: "foleBtn" },
                        React.createElement("p", { className: "companyGoHomeLeft", style: { color: "#949494" }, onClick: this.showList.bind(this, "List", "id-01") },
                            React.createElement("i", { className: "iconfont companyInfoicon" }, "\uE83B"),
                            React.createElement("span", null, "\u8FD4\u56DE")),
                        React.createElement("p", { className: "companyGoHomeRight" },
                            React.createElement("i", { className: this.state.iconfont, style: { "fontSize": "5rem", "color": "#C0C0C0" }, onClick: this.toggleFold.bind(this) }, "\uE849"))),
                    React.createElement("div", { className: "leaseInfoul_br" },
                        React.createElement("ul", { className: "leaseInfoul" },
                            React.createElement("li", { className: this.state.infoli == 0 ? "leaseInfoli-active" : "leaseInfoli", onClick: this.infoClick.bind(this, 0) }, "\u552E\u623F\u4FE1\u606F"),
                            React.createElement("li", { className: this.state.infoli == 1 ? "leaseInfoli-active" : "leaseInfoli", onClick: this.infoClick.bind(this, 1) }, "\u623F\u95F4\u5C55\u793A"))),
                    React.createElement("div", { className: "leaseContain" },
                        React.createElement("div", { className: this.state.infoli == 0 ? "show" : "hide" },
                            React.createElement(LeaseInfos, null)),
                        React.createElement("div", { className: this.state.infoli == 1 ? "show" : "hide" },
                            React.createElement(Picshow, null)),
                        React.createElement("div", { className: this.state.infoli == 2 ? "show" : "hide" },
                            React.createElement(Videoshow, null))))));
        }
    }
    class LeaseInfos extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                floorage: "",
                inspection_time: "",
                floor_name: "",
                limit: "",
                elevator: "",
                price: 0,
                man: "",
                tel: "",
                sum: 0,
                sell_price: 0,
                sell_price_sum: 0,
                date: "",
                decorate_name: "",
                title: "",
                free_rent: "",
                station_amount: "",
                floor_sum: "",
                botTel: "botTel",
                sell_state: 0,
                state: 0,
            };
            LeaseInfos.setLeaseInfos = this.setLeaseInfos.bind(this);
            LeaseInfos.botTelShow = this.botTelShow.bind(this);
            LeaseInfos.botTelHide = this.botTelHide.bind(this);
        }
        componentDidMount() { }
        static setLeaseInfos(data) { }
        setLeaseInfos(data) {
            console.log("setLeaseInfosIIII", data);
            let sum = data.response.floorage * data.response.price;
            let sum_z = sum.toFixed(0);
            let sell_price_sum = data.response.floorage * data.response.sell_price;
            let sell_price_sum_z = sell_price_sum.toFixed(0);
            let iselevator;
            if (data.response.lift == 1) {
                iselevator = "有";
            }
            else {
                iselevator = "无";
            }
            console.log("zzzzz", sum);
            this.setState({
                floorage: data.response.floorage,
                inspection_time: data.response.inspection_time,
                floor_name: data.response.floor_name,
                limit: data.response.require,
                elevator: iselevator,
                price: data.response.price,
                man: data.response.contact,
                tel: data.response.phone,
                sum: sum_z,
                sell_price: data.response.sell_price,
                sell_price_sum: sell_price_sum_z,
                date: data.response.date,
                decorate_name: data.response.decorate_name,
                free_rent: data.response.free_rent,
                station_amount: data.response.station_amount,
                floor_sum: data.response.floor_sum,
                sell_state: data.response.sell_state,
                state: data.response.state,
            });
            document.getElementById("telurl").href = 'tel:' + this.state.tel;
        }
        static botTelShow() { }
        botTelShow() {
            this.setState({
                botTel: "botTel"
            });
        }
        static botTelHide() { }
        botTelHide() {
            this.setState({
                botTel: "hide"
            });
        }
        render() {
            return (React.createElement("div", { className: "sellInfos" },
                React.createElement("ul", { className: "sellul" },
                    React.createElement("li", null,
                        React.createElement("span", { style: { "padding-right": "2rem" } }, "\u5EFA\u7B51\u9762\u79EF"),
                        React.createElement("span", { style: { "font-weight": "600" } },
                            this.state.floorage,
                            "\u5E73\u7C73")),
                    React.createElement("li", null,
                        React.createElement("span", { style: { "padding-right": "2rem" } }, "\u6240\u5728\u697C\u5C42"),
                        React.createElement("span", { style: { "font-weight": "600" } }, this.state.floor_name)),
                    React.createElement("li", { className: this.state.state == 1 ? "sj" : "hide" },
                        React.createElement("span", { style: { "padding-right": "7rem" } }, "\u79DF\u91D1"),
                        React.createElement("span", { style: { "color": "#F53636" } },
                            this.state.sum,
                            "\u5143/\u6708\uFF08",
                            this.state.price,
                            "\u5143/m\u00B2\u00B7\u6708\uFF09")),
                    React.createElement("li", { className: this.state.sell_state == 0 ? "jj" : "hide" },
                        React.createElement("span", { style: { "padding-right": "7rem" } }, "\u552E\u4EF7"),
                        React.createElement("span", { style: { "color": "#F53636" } },
                            this.state.sell_price_sum,
                            "\u5143\uFF08",
                            this.state.sell_price,
                            "\u5143/m\u00B2\uFF09")),
                    React.createElement("li", { className: this.state.state == 1 ? "smj" : "hide" },
                        React.createElement("span", { style: { "padding-right": "7rem" } }, "\u514D\u79DF"),
                        React.createElement("span", { style: { "font-weight": "600" } }, this.state.free_rent)),
                    React.createElement("li", null,
                        React.createElement("span", { style: { "padding-right": "2rem" } }, "\u5BB9\u7EB3\u5DE5\u4F4D"),
                        React.createElement("span", { style: { "font-weight": "600" } },
                            this.state.station_amount,
                            "\u4F4D")),
                    React.createElement("li", { className: "room2" },
                        React.createElement("span", { style: { "padding-right": "2rem" } }, "\u770B\u623F\u65F6\u95F4"),
                        React.createElement("span", { style: { "font-weight": "600" } }, this.state.inspection_time)),
                    React.createElement("li", { className: "room2" },
                        React.createElement("span", { style: { "padding-right": "2rem" } }, "\u53D1\u5E03\u65F6\u95F4"),
                        React.createElement("span", { style: { "font-weight": "600" } }, this.state.date)),
                    React.createElement("li", { className: this.state.state == 1 ? "LL1B" : "LL1" },
                        "\u603B\u5171\u697C\u5C42",
                        React.createElement("span", { style: { "font-weight": "600", "font-size": "2.3rem", "marginLeft": "2rem" } },
                            this.state.floor_sum,
                            "\u5C42")),
                    React.createElement("li", { className: this.state.state == 1 ? "LL2B" : "LL2" },
                        "\u7535\u68AF",
                        React.createElement("span", { style: { "font-weight": "600", "font-size": "2.3rem", "marginLeft": "7rem" } }, this.state.elevator)),
                    React.createElement("li", { className: this.state.state == 1 ? "LL3B" : "LL3" },
                        "\u88C5\u4FEE",
                        React.createElement("span", { style: { "font-weight": "600", "font-size": "2.3rem", "marginLeft": "7rem" } }, this.state.decorate_name)),
                    React.createElement("li", null)),
                React.createElement("div", { className: this.state.botTel },
                    React.createElement("p", { className: "botTelMan" },
                        "\u8054\u7CFB\u4EBA ",
                        React.createElement("span", { style: { "font-weight": "600", "marginLeft": "2rem" } }, this.state.man)),
                    React.createElement("div", { className: "telBut" },
                        React.createElement("a", { href: "#", id: "telurl" }, "\u7535\u8BDD\u54A8\u8BE2")))));
        }
    }
    class Picshow extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                roomImg: [],
                urlNull: "hide",
                data: ['1', '2', '3', '4', '5', '6', '7'],
                imgHeight: 176,
                slideIndex: 0,
                picBtnIndex: 0,
                picurlNull: "hide",
                vidurlNull: "hide",
                roomVideo: [],
            };
            Picshow.setPicshow = this.setPicshow.bind(this);
            Picshow.setVideoshow = this.setVideoshow.bind(this);
            this.seeVideoState = this.seeVideoState.bind(this);
        }
        componentDidMount() {
            setTimeout(() => {
                this.setState({
                    data: ['1', '2', '3', '4', '5', '6', '7'],
                });
            }, 100);
        }
        static setPicshow(data) { }
        setPicshow(data) {
            let picurl = [];
            console.log("setPicshowPPPPPP", data);
            $.each(data.response.pic, function (index, item) {
                picurl.push(item.url);
            });
            if (data.response.pic.length == 0) {
                this.setState({
                    roomImg: data.response.pic,
                    picurlNull: "show",
                });
            }
            else {
                this.setState({
                    roomImg: data.response.pic,
                    picurlNull: "hide",
                    data: picurl,
                });
            }
        }
        picBtn(a, b) {
            console.log(a);
            this.setState({
                picBtnIndex: a
            });
        }
        seeVideoState() {
            if (this.state.roomVideo.length == 0) {
                this.setState({
                    vidurlNull: "show",
                });
                console.log(this.state);
            }
            else {
                this.setState({
                    vidurlNull: "hide",
                });
            }
        }
        static setVideoshow(data) { }
        setVideoshow(data) {
            console.log("setVideoshow", data);
            if (data.response.video.length == 0) {
                console.log(898989898);
                this.setState({
                    roomVideo: [],
                    vidurlNull: "show",
                });
                console.log(this.state);
            }
            else if (!data.response.video[0].url) {
                this.setState({
                    roomVideo: [],
                    vidurlNull: "show",
                });
            }
            else {
                this.setState({
                    roomVideo: data.response.video,
                    vidurlNull: "hide",
                });
            }
            console.log("66666666666666", this.state);
            this.seeVideoState();
        }
        render() {
            return (React.createElement("div", { className: "picshow" },
                this.state.picBtnIndex == 0 ?
                    React.createElement("ul", null,
                        React.createElement("p", { className: this.state.picurlNull, style: { "margin": "1rem 0", "text-align": "center", "font-size": "3rem", "color": "#797979" } }, "\u6682\u65E0\u56FE\u7247\u00B7\u00B7\u00B7"),
                        React.createElement(antd_mobile_6.WingBlank, null,
                            React.createElement(antd_mobile_6.Carousel, { className: "space-carousel", frameOverflow: "visible", cellSpacing: 10, slideWidth: 0.8, autoplay: false, infinite: true, afterChange: index => this.setState({ slideIndex: index }) }, this.state.data.map((val, index) => (React.createElement("img", { src: val, alt: "", style: { width: '100%', verticalAlign: 'top' }, onLoad: () => {
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                } }))))))
                    :
                        React.createElement("ul", null,
                            React.createElement("p", { className: this.state.vidurlNull, style: { "margin": "1rem 0", "text-align": "center", "font-size": "3rem", "color": "#797979" } }, "\u6682\u65E0\u89C6\u9891\u00B7\u00B7\u00B7"),
                            this.state.roomVideo.map((i, index) => {
                                return (React.createElement("li", { style: { "width": "56rem", "height": "36rem", "position": "relative", "right": "-3rem" } },
                                    React.createElement("video", { src: i.url, style: { "width": "100%", "height": "100%" }, controls: true }, "\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301video\u64AD\u653E")));
                            })),
                React.createElement("div", { className: "picBtn" },
                    React.createElement("div", { className: this.state.picBtnIndex == 0 ? "picBtnS-active" : "picBtnS", onClick: this.picBtn.bind(this, 0) }, "\u56FE\u7247"),
                    React.createElement("div", { className: this.state.picBtnIndex == 1 ? "picBtnS-active" : "picBtnS", onClick: this.picBtn.bind(this, 1) }, "\u89C6\u9891"))));
        }
    }
    class Videoshow extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                urlNull: "hide",
                roomVideo: [],
            };
            Videoshow.setVideoshow = this.setVideoshow.bind(this);
            this.seeVideoState = this.seeVideoState.bind(this);
        }
        componentDidMount() {
        }
        seeVideoState() {
            if (this.state.roomVideo.length == 0) {
                this.setState({
                    urlNull: "show",
                });
                console.log(this.state);
            }
            else {
                this.setState({
                    urlNull: "hide",
                });
            }
        }
        static setVideoshow(data) { }
        setVideoshow(data) {
            console.log("setVideoshow", data);
            if (data.response.video.length == 0) {
                console.log(898989898);
                this.setState({
                    roomVideo: [],
                    urlNull: "show",
                });
                console.log(this.state);
            }
            else if (!data.response.video[0].url) {
                this.setState({
                    roomVideo: [],
                    urlNull: "show",
                });
            }
            else {
                this.setState({
                    roomVideo: data.response.video,
                    urlNull: "hide",
                });
            }
            console.log("66666666666666", this.state);
            this.seeVideoState();
        }
        render() {
            return (React.createElement("div", { className: "picshow" },
                React.createElement("ul", null,
                    React.createElement("p", { className: this.state.urlNull, style: { "margin": "1rem 0", "text-align": "center", "font-size": "3rem", "color": "#797979" } }, "\u6682\u65E0\u89C6\u9891\u00B7\u00B7\u00B7"),
                    this.state.roomVideo.map((i, index) => {
                        return (React.createElement("li", { style: { "width": "56rem", " height": "36rem" } },
                            React.createElement("video", { src: i.url, style: { "width": "100%", "height": "100%" }, controls: true }, "\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301video\u64AD\u653E")));
                    }))));
        }
    }
});
define("findSell", ["require", "exports", "react", "react-router-dom", "compat", "dataService"], function (require, exports, React, RouterDOM, compat_8, dataService_8) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class FindLease extends React.Component {
        constructor(props) {
            super(props);
            this.globalAction = new compat_8.default();
            this.state = {
                FindLeasecss: "findLease",
                showList: true,
                showInfo: false,
                companyInfotit: "companyInfotit",
            };
            FindLease.toggleView = this.toggleView.bind(this);
            FindLease.getLeaseinfoByroomid = this.getLeaseinfoByroomid.bind(this);
        }
        componentDidMount() {
            move3dBut("up");
        }
        static getLeaseinfoByroomid(id) { }
        getLeaseinfoByroomid(id) {
            console.log("getCompanyinfo", id);
            this.toggleView("Info", id);
            LeaseInfo.getLeaseInfo(id);
        }
        static toggleView(a, id) { }
        ;
        toggleView(a, id) {
            console.log("fl", a);
            console.log("fl", id);
            if (a == "Info") {
                this.setState({
                    showList: false,
                    showInfo: true,
                    companyInfotit: "hide"
                });
            }
            else {
                this.setState({
                    showList: true,
                    showInfo: false,
                    companyInfotit: "companyInfotit"
                });
            }
        }
        render() {
            return (React.createElement("div", { className: this.state.FindLeasecss },
                React.createElement("p", { className: this.state.companyInfotit },
                    React.createElement("span", null, "\u529E\u516C\u51FA\u552E")),
                React.createElement("div", { className: this.state.showList == true ? "show" : "hide" },
                    React.createElement(LeaseList, null)),
                React.createElement("div", { className: this.state.showInfo == true ? "show" : "hide" },
                    React.createElement(LeaseInfo, null))));
        }
    }
    exports.default = FindLease;
    class LeaseList extends React.Component {
        constructor(props) {
            super(props);
            this.dataService = new dataService_8.default();
            this.globalAction = new compat_8.default();
            this.state = {
                roomNull: "hide",
                park_id: "1001",
                roomId: "",
                inputValue: "搜索",
                square: "全部",
                leaseListcss: "leaseList-part",
                foleBtn: "lease-foleBtn",
                indexOf: -1,
                leaseBtn: "leaseBtn-part",
                leaseul: "leaseul",
                roomData: [],
                areaType: [],
                typeIndexof: 100,
                iconfont: "iconfont iconfont-unturn",
                searchBoxIcon: "iconfont iconfont-unturn",
                src: "about:'blank'",
                imgurlNull: "./park_m/image/noImg.png",
            };
            this.showInfo = this.showInfo.bind(this);
            this.getRoomRentSquareType = this.getRoomRentSquareType.bind(this);
            this.setRoomRent = this.setRoomRent.bind(this);
            this.searchRoomRent = this.searchRoomRent.bind(this);
            this.change = this.change.bind(this);
        }
        componentDidMount() {
            this.dataService.getRoomRentSquareType(this.getRoomRentSquareType, this.state.park_id);
            this.dataService.findRoomRentByparkid(this.setRoomRent, this.state.park_id, "", -1, 0);
        }
        getRoomRentSquareType(data) {
            console.log("getRoomRentSquareType", data);
            this.setState({
                areaType: data.response,
            });
        }
        setRoomRent(data) {
            console.log("setRoomRent", data);
            if (data.response.length == 0) {
                this.setState({
                    roomData: data.response,
                    roomNull: "show",
                });
            }
            else {
                this.setState({
                    roomData: data.response,
                    roomNull: "hide",
                });
            }
        }
        showInfo(a, id, name, e) {
            FindLease.toggleView(a, id);
            LeaseInfo.getLeaseInfo(id);
            console.log("more", a, id, name, e);
        }
        toggleFold() {
            console.log("tftft");
            if (this.state.leaseListcss == "leaseList-all") {
                this.setState({
                    leaseListcss: "leaseList-part",
                    leaseul: "leaseul"
                });
                this.globalAction.web_call_webgl_continueloadModuler();
            }
            else {
                this.setState({
                    leaseListcss: "leaseList-all",
                    leaseul: "leaseul-all"
                });
                this.globalAction.web_call_webgl_pauseloadModuler();
            }
            if (this.state.iconfont == "iconfont iconfont-unturn") {
                this.setState({
                    iconfont: "iconfont iconfont-turn",
                });
            }
            else {
                this.setState({
                    iconfont: "iconfont iconfont-unturn",
                });
            }
        }
        foldBtn() {
            console.log("foldBtn");
            if (this.state.leaseBtn == "leaseBtn-part") {
                this.setState({
                    leaseBtn: "leaseBtn-all",
                    searchBoxIcon: "iconfont iconfont-turn",
                });
            }
            else {
                this.setState({
                    leaseBtn: "leaseBtn-part",
                    searchBoxIcon: "iconfont iconfont-unturn",
                });
            }
        }
        leaseActive(index, id, title, building, floor, room) {
            console.log("active", index, id);
            console.log("active2", building, floor, room);
            this.setState({
                indexOf: index,
                roomId: id
            });
            console.log("leaseActive", this.state);
            this.dataService.findRoomRentByroomid(this.callWebglSwitchRoom.bind(this), id);
        }
        callWebglSwitchRoom(data) {
            let roomData = {
                m_pTile: data.response.project_title,
                m_pBuilding: data.response.building_code,
                m_pLayer: data.response.floor_code,
                m_pRoom: data.response.room_code,
                m_pPart: data.response.part,
            };
            this.globalAction.web_call_webgl_switchRoom(roomData);
        }
        typeActive(indexof, name) {
            console.log("typeActive-1", indexof);
            console.log("typeActive-2", name);
            this.setState({
                typeIndexof: indexof,
                square: name,
                inputValue: name,
            }, () => {
                this.searchRoomRent();
            });
        }
        foucus() {
            if (this.state.inputValue == "搜索") {
                this.setState({ inputValue: "" });
            }
        }
        blur(event) {
            if (this.state.inputValue == "") {
                this.setState({ inputValue: "搜索" });
            }
        }
        change(event) {
            this.setState({
                inputValue: event.target.value,
                square: event.target.value,
            });
        }
        searchRoomRent() {
            if (this.state.square == "全部") {
                this.dataService.findRoomRentByparkid(this.setRoomRent, this.state.park_id, " ", -1, 0);
            }
            else {
                this.dataService.findRoomRentByparkid(this.setRoomRent, this.state.park_id, this.state.square, -1, 0);
            }
            console.log("searchBtn", this.state.inputValue, this.state.square);
        }
        mapReturnpark() {
            this.globalAction.web_call_webgl_mapReturnpark();
            move3dBut("down");
        }
        onErrorHeadimageurl(index) {
            var items = this.state.roomData;
            items[index].headimageurl = "./park_m/image/noImg.png";
            this.setState({
                roomData: items
            });
        }
        render() {
            return (React.createElement("div", { className: this.state.leaseListcss },
                React.createElement("div", { className: "foleBtn" },
                    React.createElement("p", { className: "companyGoHomeLeft", onClick: this.mapReturnpark.bind(this) },
                        React.createElement(RouterDOM.Link, { to: "/home", style: { color: "#949494" } },
                            React.createElement("i", { className: "iconfont companyInfoicon" }, "\uE83B"),
                            React.createElement("span", null, "\u8FD4\u56DE"))),
                    React.createElement("p", { className: "companyGoHomeRight" },
                        React.createElement("i", { className: this.state.iconfont, style: { "fontSize": "5rem", "color": "#C0C0C0" }, onClick: this.toggleFold.bind(this) }, "\uE849"))),
                React.createElement("ul", { className: this.state.leaseul },
                    React.createElement("p", { className: this.state.roomNull, style: { "text-align": "center", "font-size": "2.5rem" } }, "\u6CA1\u6709\u7B26\u5408\u641C\u7D22\u6761\u4EF6\u7684\u7ED3\u679C\u00B7\u00B7\u00B7"),
                    this.state.roomData.map((i, index) => {
                        return (React.createElement("li", { onClick: this.leaseActive.bind(this, index, i.id, i.project_title, i.building_code, i.floor_code, i.room_code), className: this.state.indexOf == index ? "leaseli-active" : "leaseli", style: { display: ("0" == i.sell_state) ? "block" : "none" } },
                            React.createElement("div", { className: this.state.indexOf == index ? "leaseImgback-active" : "leaseImgback" },
                                React.createElement("img", { src: i.headimageurl == null ? this.state.imgurlNull : i.headimageurl, onError: this.onErrorHeadimageurl.bind(this, index) })),
                            React.createElement("div", { className: "leaseul-middle" },
                                React.createElement("p", { className: this.state.indexOf == index ? "leaseName-active" : "leaseName", style: { "font-size": "2.4rem", "font-weight": "bold" } },
                                    i.building_name,
                                    "-",
                                    i.floor_name,
                                    "-",
                                    i.room_name),
                                React.createElement("p", { style: { "font-size": "2.5rem" } },
                                    React.createElement("span", { className: "iconfont", style: { "fontSize": "2.5rem", "margin-right": "1rem" } }, "\uE82A"),
                                    i.floorage,
                                    "m\u00B2"),
                                React.createElement("p", { className: this.state.indexOf == index ? "sellType-active" : "sellType" },
                                    React.createElement("span", { className: this.state.indexOf == index ? "sellPrice-active" : "sellPrice" }, i.sell_price),
                                    "\u5143/m\u00B2")),
                            React.createElement("div", { className: "sellul-right" },
                                React.createElement("p", { onClick: this.showInfo.bind(this, "Info", i.id, i.name), className: this.state.indexOf == index ? "show" : "hide" },
                                    "\u66F4\u591A",
                                    React.createElement("i", { className: "iconfont", style: { "fontSize": "2rem" } }, "\uE827")))));
                    })),
                React.createElement("form", { action: '', target: "rfFrame" },
                    React.createElement("div", { className: this.state.leaseBtn },
                        React.createElement("div", { className: "searchBox", onClick: this.foldBtn.bind(this) },
                            React.createElement("span", { className: "searchBox-text" },
                                React.createElement("span", { className: "iconfont", style: { "fontSize": "2.3rem" } }, "\uE810"),
                                React.createElement("span", { style: { "color": "#333333", "margin-left": "1rem" } }, this.state.square == "全部" ? "全部" : this.state.square + "m²")),
                            React.createElement("span", { className: "searchBox-type" },
                                React.createElement("i", { className: this.state.searchBoxIcon, style: { "fontSize": "3rem", position: "relative", top: "0.3rem" } }, "\uE828 "))),
                        React.createElement("ul", { className: "areaTypeul" },
                            React.createElement("li", { className: this.state.typeIndexof == 100 ? "areaTypeli-active" : "areaTypeli", onClick: this.typeActive.bind(this, 100, "全部", "id-全部") }, "\u5168\u90E8"),
                            this.state.areaType.map((i, index) => {
                                return (React.createElement("li", { onClick: this.typeActive.bind(this, index, i), className: this.state.typeIndexof == index ? "areaTypeli-active" : "areaTypeli" },
                                    i,
                                    "m\u00B2"));
                            })))),
                React.createElement("iframe", { id: "rfFrame", name: "rfFrame", src: this.state.src, style: { display: "none" } }, "   ")));
        }
    }
    class LeaseInfo extends React.Component {
        constructor(props) {
            super(props);
            this.dataService = new dataService_8.default();
            this.state = {
                leaseInfocss: "leaseInfo",
                roomName: "",
                building: "",
                floor: "",
                room: "",
                building_name: "",
                floor_name: "",
                room_name: "",
                infoli: 0,
                iconfont: "iconfont iconfont-turn",
            };
            this.showList = this.showList.bind(this);
            LeaseInfo.getLeaseInfo = this.getLeaseInfo.bind(this);
            this.setLeaseInfo = this.setLeaseInfo.bind(this);
        }
        static getLeaseInfo(id) { }
        getLeaseInfo(id) {
            this.dataService.findRoomRentByroomid(this.setLeaseInfo, id);
        }
        setLeaseInfo(data) {
            console.log("setLeaseInfo", data);
            this.setState({
                building_name: data.response.building_name,
                floor_name: data.response.floor_name,
                room_name: data.response.room_name,
            });
            LeaseInfos.setLeaseInfos(data);
            Picshow.setPicshow(data);
            Picshow.setVideoshow(data);
        }
        componentDidMount() {
        }
        showList(a, id) {
            FindLease.toggleView(a, id);
        }
        toggleFold() {
            if (this.state.leaseInfocss == "leaseInfo") {
                this.setState({
                    leaseInfocss: "leaseInfo-part",
                });
                LeaseInfos.botTelHide();
                Picshow.picCssHide();
            }
            else {
                this.setState({
                    leaseInfocss: "leaseInfo",
                });
                LeaseInfos.botTelShow();
                Picshow.picCssShow();
            }
            if (this.state.iconfont == "iconfont iconfont-unturn") {
                this.setState({
                    iconfont: "iconfont iconfont-turn",
                });
            }
            else {
                this.setState({
                    iconfont: "iconfont iconfont-unturn",
                });
            }
        }
        infoClick(indexof) {
            console.log("infoClick", indexof);
            this.setState({
                infoli: indexof,
            });
        }
        render() {
            return (React.createElement("div", null,
                React.createElement("p", { className: "companyInfotit" },
                    React.createElement("span", null,
                        this.state.building_name,
                        "-",
                        this.state.floor_name,
                        "-",
                        this.state.room_name)),
                React.createElement("div", { className: this.state.leaseInfocss },
                    React.createElement("div", { className: "foleBtn" },
                        React.createElement("p", { className: "companyGoHomeLeft", style: { color: "#949494" }, onClick: this.showList.bind(this, "List", "id-01") },
                            React.createElement("i", { className: "iconfont companyInfoicon" }, "\uE83B"),
                            React.createElement("span", null, "\u8FD4\u56DE")),
                        React.createElement("p", { className: "companyGoHomeRight" },
                            React.createElement("i", { className: this.state.iconfont, style: { "fontSize": "5rem", "color": "#C0C0C0" }, onClick: this.toggleFold.bind(this) }, "\uE849"))),
                    React.createElement("div", { className: "leaseInfoul_br" },
                        React.createElement("ul", { className: "leaseInfoul" },
                            React.createElement("li", { className: this.state.infoli == 0 ? "leaseInfoli-active" : "leaseInfoli", onClick: this.infoClick.bind(this, 0) }, "\u552E\u623F\u4FE1\u606F"),
                            React.createElement("li", { className: this.state.infoli == 1 ? "leaseInfoli-active" : "leaseInfoli", onClick: this.infoClick.bind(this, 1) }, "\u623F\u95F4\u5C55\u793A"))),
                    React.createElement("div", { className: "leaseContain" },
                        React.createElement("div", { className: this.state.infoli == 0 ? "show" : "hide" },
                            React.createElement(LeaseInfos, null)),
                        React.createElement("div", { className: this.state.infoli == 1 ? "show" : "hide" },
                            React.createElement(Picshow, null)),
                        React.createElement("div", { className: this.state.infoli == 2 ? "show" : "hide" },
                            React.createElement(Videoshow, null))))));
        }
    }
    class LeaseInfos extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                floorage: "",
                inspection_time: "",
                floor_name: "",
                limit: "",
                elevator: "",
                price: 0,
                man: "",
                tel: "",
                sum: 0,
                sell_price: 0,
                sell_price_sum: 0,
                date: "",
                decorate_name: "",
                title: "",
                free_rent: "",
                station_amount: "",
                floor_sum: "",
                botTel: "botTel",
                sell_state: 0,
                state: 0,
            };
            LeaseInfos.setLeaseInfos = this.setLeaseInfos.bind(this);
            LeaseInfos.botTelShow = this.botTelShow.bind(this);
            LeaseInfos.botTelHide = this.botTelHide.bind(this);
        }
        componentDidMount() { }
        static setLeaseInfos(data) { }
        setLeaseInfos(data) {
            console.log("setLeaseInfosIIII", data);
            let sum = data.response.floorage * data.response.price;
            let sum_z = sum.toFixed(0);
            let sell_price_sum = data.response.floorage * data.response.sell_price;
            let sell_price_sum_z = sell_price_sum.toFixed(0);
            let iselevator;
            if (data.response.lift == 1) {
                iselevator = "有";
            }
            else {
                iselevator = "无";
            }
            console.log("zzzzz", sum);
            this.setState({
                floorage: data.response.floorage,
                inspection_time: data.response.inspection_time,
                floor_name: data.response.floor_name,
                limit: data.response.require,
                elevator: iselevator,
                price: data.response.price,
                man: data.response.contact,
                tel: data.response.phone,
                sum: sum_z,
                sell_price: data.response.sell_price,
                sell_price_sum: sell_price_sum_z,
                date: data.response.date,
                decorate_name: data.response.decorate_name,
                free_rent: data.response.free_rent,
                station_amount: data.response.station_amount,
                floor_sum: data.response.floor_sum,
                sell_state: data.response.sell_state,
                state: data.response.state,
            });
            document.getElementById("telurl").href = 'tel:' + this.state.tel;
        }
        static botTelShow() { }
        botTelShow() {
            this.setState({
                botTel: "botTel"
            });
        }
        static botTelHide() { }
        botTelHide() {
            this.setState({
                botTel: "hide"
            });
        }
        render() {
            return (React.createElement("div", { className: "sellInfos" },
                React.createElement("ul", { className: "sellul" },
                    React.createElement("li", null,
                        React.createElement("span", { style: { "padding-right": "2rem" } }, "\u5EFA\u7B51\u9762\u79EF"),
                        React.createElement("span", { style: { "font-weight": "600" } },
                            this.state.floorage,
                            "\u5E73\u7C73")),
                    React.createElement("li", null,
                        React.createElement("span", { style: { "padding-right": "2rem" } }, "\u6240\u5728\u697C\u5C42"),
                        React.createElement("span", { style: { "font-weight": "600" } }, this.state.floor_name)),
                    React.createElement("li", { className: this.state.state == 1 ? "sj" : "hide" },
                        React.createElement("span", { style: { "padding-right": "7rem" } }, "\u79DF\u91D1"),
                        React.createElement("span", { style: { "color": "#F53636" } },
                            this.state.sum,
                            "\u5143/\u6708\uFF08",
                            this.state.price,
                            "\u5143/m\u00B2\u00B7\u6708\uFF09")),
                    React.createElement("li", { className: this.state.sell_state == 0 ? "jj" : "hide" },
                        React.createElement("span", { style: { "padding-right": "7rem" } }, "\u552E\u4EF7"),
                        React.createElement("span", { style: { "color": "#F53636" } },
                            this.state.sell_price_sum,
                            "\u5143\uFF08",
                            this.state.sell_price,
                            "\u5143/m\u00B2\uFF09")),
                    React.createElement("li", { className: this.state.state == 1 ? "smj" : "hide" },
                        React.createElement("span", { style: { "padding-right": "7rem" } }, "\u514D\u79DF"),
                        React.createElement("span", { style: { "font-weight": "600" } }, this.state.free_rent)),
                    React.createElement("li", null,
                        React.createElement("span", { style: { "padding-right": "2rem" } }, "\u5BB9\u7EB3\u5DE5\u4F4D"),
                        React.createElement("span", { style: { "font-weight": "600" } },
                            this.state.station_amount,
                            "\u4F4D")),
                    React.createElement("li", { className: "room2" },
                        React.createElement("span", { style: { "padding-right": "2rem" } }, "\u770B\u623F\u65F6\u95F4"),
                        React.createElement("span", { style: { "font-weight": "600" } }, this.state.inspection_time)),
                    React.createElement("li", { className: "room2" },
                        React.createElement("span", { style: { "padding-right": "2rem" } }, "\u53D1\u5E03\u65F6\u95F4"),
                        React.createElement("span", { style: { "font-weight": "600" } }, this.state.date)),
                    React.createElement("li", { className: this.state.state == 1 ? "LL1B" : "LL1" },
                        "\u603B\u5171\u697C\u5C42",
                        React.createElement("span", { style: { "font-weight": "600", "font-size": "2.3rem", "marginLeft": "2rem" } },
                            this.state.floor_sum,
                            "\u5C42")),
                    React.createElement("li", { className: this.state.state == 1 ? "LL2B" : "LL2" },
                        "\u7535\u68AF",
                        React.createElement("span", { style: { "font-weight": "600", "font-size": "2.3rem", "marginLeft": "7rem" } }, this.state.elevator)),
                    React.createElement("li", { className: this.state.state == 1 ? "LL3B" : "LL3" },
                        "\u88C5\u4FEE",
                        React.createElement("span", { style: { "font-weight": "600", "font-size": "2.3rem", "marginLeft": "7rem" } }, this.state.decorate_name)),
                    React.createElement("li", null)),
                React.createElement("div", { className: this.state.botTel },
                    React.createElement("p", { className: "botTelMan" },
                        "\u8054\u7CFB\u4EBA ",
                        React.createElement("span", { style: { "font-weight": "600", "marginLeft": "2rem" } }, this.state.man)),
                    React.createElement("div", { className: "telBut" },
                        React.createElement("a", { href: "#", id: "telurl" }, "\u7535\u8BDD\u54A8\u8BE2")))));
        }
    }
    class Picshow extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                roomImg: [],
                urlNull: "hide",
                data: ['1', '2', '3', '4', '5', '6', '7'],
                imgHeight: 176,
                slideIndex: 0,
                picBtnIndex: 0,
                picurlNull: "hide",
                vidurlNull: "hide",
                roomVideo: [],
                bigimg: '',
                bigImgBox: "hide",
                picCss: 'picshow',
            };
            Picshow.setPicshow = this.setPicshow.bind(this);
            Picshow.setVideoshow = this.setVideoshow.bind(this);
            this.seeVideoState = this.seeVideoState.bind(this);
            Picshow.picCssHide = this.picCssHide.bind(this);
            Picshow.picCssShow = this.picCssShow.bind(this);
        }
        componentDidMount() {
            setTimeout(() => {
                this.setState({
                    data: ['1', '2', '3', '4', '5', '6', '7'],
                });
            }, 100);
        }
        static setPicshow(data) { }
        setPicshow(data) {
            let picurl = [];
            console.log("setPicshowPPPPPP", data);
            $.each(data.response.pic, function (index, item) {
                picurl.push(item.url);
            });
            if (data.response.pic.length == 0) {
                this.setState({
                    roomImg: data.response.pic,
                    picurlNull: "show",
                });
            }
            else {
                this.setState({
                    roomImg: data.response.pic,
                    picurlNull: "hide",
                    data: picurl,
                });
            }
        }
        picBtn(a, b) {
            console.log(a);
            this.setState({
                picBtnIndex: a
            });
        }
        seeVideoState() {
            if (this.state.roomVideo.length == 0) {
                this.setState({
                    vidurlNull: "show",
                });
                console.log(this.state);
            }
            else {
                this.setState({
                    vidurlNull: "hide",
                });
            }
        }
        static setVideoshow(data) { }
        setVideoshow(data) {
            console.log("setVideoshow", data);
            if (data.response.video.length == 0) {
                console.log(898989898);
                this.setState({
                    roomVideo: [],
                    vidurlNull: "show",
                });
                console.log(this.state);
            }
            else if (!data.response.video[0].url) {
                this.setState({
                    roomVideo: [],
                    vidurlNull: "show",
                });
            }
            else {
                this.setState({
                    roomVideo: data.response.video,
                    vidurlNull: "hide",
                });
            }
            console.log("66666666666666", this.state);
            this.seeVideoState();
        }
        bigImg(i) {
            console.log('bigimg', i);
            this.setState({
                bigImgBox: "bigImgBox",
                bigimg: i
            });
        }
        closeBigImg() {
            this.setState({
                bigImgBox: "hide",
            });
        }
        static picCssHide() { }
        ;
        picCssHide() {
            this.setState({
                picCss: 'hide'
            });
        }
        static picCssShow() { }
        ;
        picCssShow() {
            this.setState({
                picCss: 'picshow'
            });
        }
        render() {
            return (React.createElement("div", { className: this.state.picCss },
                this.state.picBtnIndex == 0 ?
                    React.createElement("ul", null,
                        React.createElement("p", { className: this.state.picurlNull, style: { "margin": "1rem 0", "text-align": "center", "font-size": "3rem", "color": "#797979" } }, "\u6682\u65E0\u56FE\u7247\u00B7\u00B7\u00B7"),
                        this.state.data.map((i, index) => {
                            return (React.createElement("li", { onClick: this.bigImg.bind(this, i) },
                                React.createElement("img", { src: i })));
                        }))
                    :
                        React.createElement("ul", null,
                            React.createElement("p", { className: this.state.vidurlNull, style: { "margin": "1rem 0", "text-align": "center", "font-size": "3rem", "color": "#797979" } }, "\u6682\u65E0\u89C6\u9891\u00B7\u00B7\u00B7"),
                            this.state.roomVideo.map((i, index) => {
                                return (React.createElement("li", { style: { "width": "56rem", "height": "36rem", "position": "relative", "right": "-3rem" } },
                                    React.createElement("video", { src: i.url, style: { "width": "100%", "height": "100%" }, controls: true }, "\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301video\u64AD\u653E")));
                            })),
                React.createElement("div", { className: "picBtn" },
                    React.createElement("div", { className: this.state.picBtnIndex == 0 ? "picBtnS-active" : "picBtnS", onClick: this.picBtn.bind(this, 0) }, "\u56FE\u7247"),
                    React.createElement("div", { className: this.state.picBtnIndex == 1 ? "picBtnS-active" : "picBtnS", onClick: this.picBtn.bind(this, 1) }, "\u89C6\u9891")),
                React.createElement("div", { className: this.state.bigImgBox },
                    React.createElement("div", { className: "close_bigImg", onClick: this.closeBigImg.bind(this) },
                        React.createElement("i", { className: "iconfont close_bigImg_Icon" }, " \uE81C")),
                    React.createElement("img", { src: this.state.bigimg }))));
        }
    }
    class Videoshow extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                urlNull: "hide",
                roomVideo: [],
            };
            Videoshow.setVideoshow = this.setVideoshow.bind(this);
            this.seeVideoState = this.seeVideoState.bind(this);
        }
        componentDidMount() {
        }
        seeVideoState() {
            if (this.state.roomVideo.length == 0) {
                this.setState({
                    urlNull: "show",
                });
                console.log(this.state);
            }
            else {
                this.setState({
                    urlNull: "hide",
                });
            }
        }
        static setVideoshow(data) { }
        setVideoshow(data) {
            console.log("setVideoshow", data);
            if (data.response.video.length == 0) {
                console.log(898989898);
                this.setState({
                    roomVideo: [],
                    urlNull: "show",
                });
                console.log(this.state);
            }
            else if (!data.response.video[0].url) {
                this.setState({
                    roomVideo: [],
                    urlNull: "show",
                });
            }
            else {
                this.setState({
                    roomVideo: data.response.video,
                    urlNull: "hide",
                });
            }
            console.log("66666666666666", this.state);
            this.seeVideoState();
        }
        render() {
            return (React.createElement("div", { className: "picshow" },
                React.createElement("ul", null,
                    React.createElement("p", { className: this.state.urlNull, style: { "margin": "1rem 0", "text-align": "center", "font-size": "3rem", "color": "#797979" } }, "\u6682\u65E0\u89C6\u9891\u00B7\u00B7\u00B7"),
                    this.state.roomVideo.map((i, index) => {
                        return (React.createElement("li", { style: { "width": "56rem", " height": "36rem" } },
                            React.createElement("video", { src: i.url, style: { "width": "100%", "height": "100%" }, controls: true }, "\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301video\u64AD\u653E")));
                    }))));
        }
    }
});
define("fullView", ["require", "exports", "react"], function (require, exports, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class FullView extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                isShow: false,
                fullViewHide: "iconfont fullViewHide",
            };
            FullView.isShow = this.isShow.bind(this);
        }
        static isShow() { }
        ;
        isShow() {
            console.log(2222);
            this.setState({
                isShow: true,
            });
        }
        isHide() {
            this.setState({
                isShow: false,
            });
            this.props.history.goBack();
            show3dBut();
        }
        render() {
            return (React.createElement("div", { className: this.state.isShow == true ? "show" : "hide" },
                React.createElement("i", { className: this.state.fullViewHide, onClick: this.isHide.bind(this) }, "\uE83B")));
        }
    }
    exports.default = FullView;
});
define("homeBottom", ["require", "exports", "react", "react-router-dom", "compat", "css!./styles/view.css"], function (require, exports, React, RouterDOM, compat_9) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class HomeBottom extends React.Component {
        constructor(props) {
            super(props);
            this.props = {
                history: this.props.history
            };
            this.globalAction = new compat_9.default();
            this.state = {
                index: 1,
                iconImg1In: "./park_m/image/bottomBtn/3d-in.png",
                iconImg1Un: "./park_m/image/bottomBtn/3d-un.png",
                iconImg3In: "./park_m/image/bottomBtn/zx-in.png",
                iconImg3Un: "./park_m/image/bottomBtn/zx-un.png",
                iconImg4In: "./park_m/image/bottomBtn/my-in.png",
                iconImg4Un: "./park_m/image/bottomBtn/my-un.png",
            };
            this.toggleIcon = this.toggleIcon.bind(this);
        }
        componentDidMount() {
            console.log(this.props.history.location.pathname);
            if (this.props.history.location.pathname === "/home" || this.props.history.location.pathname === "/") {
                this.setState({ index: 1 }, () => {
                    this.toggleIcon(this.state.index);
                });
            }
            else if (this.props.history.location.pathname === "/home/personalCenter") {
                this.setState({ index: 4 }, () => {
                    this.toggleIcon(this.state.index);
                });
            }
            else {
                this.setState({ index: 3 }, () => {
                    this.toggleIcon(this.state.index);
                });
            }
        }
        toggleIcon(data) {
            this.setState({
                index: data
            });
            if (data == 1) {
                this.globalAction.web_call_webgl_continueloadModuler();
            }
            else {
                this.globalAction.web_call_webgl_pauseloadModuler();
            }
        }
        render() {
            return (React.createElement("div", { className: "bottomView" },
                React.createElement(RouterDOM.Link, { to: "/home" },
                    React.createElement("div", { className: this.state.index == 1 ? "iconBox-bottomIn" : "iconBox-bottom", onClick: this.toggleIcon.bind(this, 1) },
                        React.createElement("img", { src: this.state.index == 1 ? this.state.iconImg1In : this.state.iconImg1Un }),
                        React.createElement("p", null, "3D\u6C99\u76D8"))),
                React.createElement(RouterDOM.Link, { to: "/home/information" },
                    React.createElement("div", { className: this.state.index == 3 ? "iconBox-bottomIn" : "iconBox-bottom", onClick: this.toggleIcon.bind(this, 3) },
                        React.createElement("img", { src: this.state.index == 3 ? this.state.iconImg3In : this.state.iconImg3Un }),
                        React.createElement("p", null, "\u56ED\u533A\u8D44\u8BAF"))),
                React.createElement(RouterDOM.Link, { to: "/home/personalCenter" },
                    React.createElement("div", { className: this.state.index == 4 ? "iconBox-bottomIn" : "iconBox-bottom", onClick: this.toggleIcon.bind(this, 4) },
                        React.createElement("img", { src: this.state.index == 4 ? this.state.iconImg4In : this.state.iconImg4Un }),
                        React.createElement("p", null, "\u56ED\u533A\u4E2D\u5FC3")))));
        }
        ;
    }
    exports.default = HomeBottom;
});
define("home (2)", ["require", "exports", "react", "react-router-dom", "homeBottom", "dataService", "compat", "css!./styles/iconfont.css", "css!./styles/view.css"], function (require, exports, React, RouterDOM, homeBottom_1, dataService_9, compat_10) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Home extends React.Component {
        constructor(props) {
            super(props);
            this.props = {
                history: this.props.history,
                children: this.props.children
            };
            this.globalAction = new compat_10.default();
            this.dataService = new dataService_9.default();
            this.setToken = this.setToken.bind(this);
        }
        componentDidMount() {
        }
        setToken(data) {
            console.log("setToken", data);
            localStorage.setItem("token", data.token);
        }
        backParklist() {
            this.globalAction.web_call_webgl_pauseloadModuler();
        }
        render() {
            return (React.createElement("div", null,
                React.createElement("div", { className: "backParklist", onClick: this.backParklist.bind(this) },
                    React.createElement(RouterDOM.Link, { to: "/" },
                        React.createElement("i", { className: "iconfont", style: { "fontSize": "4rem", "color": "#6C6C6C" } }, "\uE83B"))),
                React.createElement(TopBtn, null),
                React.createElement(FoldBtn, null),
                this.props.children,
                React.createElement(homeBottom_1.default, { history: this.props.history })));
        }
    }
    class TopBtn extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                topView: "topView",
                topIcon1: "iconBox",
                topIcon2: "iconBox",
                topIcon3: "iconBox",
                topIcon4: "iconBox",
                topIcon5: "iconBox",
                topIcon: "iconBox",
                playIcon: "iconBox",
                moreIcon: "iconBox",
                topClose: "hide",
                topViewBack: "",
                topIcon3info: 0,
                topIcon4info: 0,
                topIcon5info: 0,
                haveIcon: false,
                mapIcon: [
                    { name: "交通" },
                    { name: "商圈" },
                    { name: "公交站" },
                    { name: "全景" },
                    { name: "停车场" },
                    { name: "交通" },
                ]
            };
            this.globalAction = new compat_10.default();
            this.dataService = new dataService_9.default();
            this.switchMark = this.switchMark.bind(this);
            this.logIcon = this.logIcon.bind(this);
        }
        componentDidMount() {
            var iconStated = JSON.parse(sessionStorage.getItem("iconstate"));
            console.log(JSON.parse(sessionStorage.getItem("iconstate")));
            console.log(iconStated);
            if (iconStated) {
                if (iconStated.haveIcon == true) {
                    this.setState({
                        topView: iconStated.topView,
                        topIcon1: iconStated.topIcon1,
                        topIcon2: iconStated.topIcon2,
                        topIcon3: iconStated.topIcon3,
                        topIcon4: iconStated.topIcon4,
                        topIcon5: iconStated.topIcon5,
                        topIcon: iconStated.topIcon,
                        playIcon: iconStated.playIcon,
                        moreIcon: iconStated.moreIcon,
                        topClose: iconStated.topClose,
                        topViewBack: iconStated.topViewBack,
                        topIcon3info: iconStated.topIcon3info,
                        topIcon4info: iconStated.topIcon4info,
                        topIcon5info: iconStated.topIcon5info,
                        mapIcon: iconStated.mapIcon,
                    });
                }
            }
        }
        moreIcon(a) {
            console.log('toggleIconbox', a);
            this.setState({
                topView: "topView-big",
                moreIcon: "hide",
                topClose: "topClose",
                topIcon1: "iconBox-big",
                topIcon2: "iconBox-big",
                topIcon3: "iconBox-big",
                topIcon4: "iconBox-big",
                topIcon5: "iconBox-big",
                topViewBack: "topViewBack",
            });
            if (this.state.topIcon1 == "iconBoxIn" && this.state.topIcon2 == "iconBoxIn") {
                this.setState({
                    topIcon1: "iconBox-bigIn",
                    topIcon2: "iconBox-bigIn",
                });
            }
            else if (this.state.topIcon1 == "iconBoxIn") {
                console.log(this.state.topIcon1);
                this.setState({
                    topIcon1: "iconBox-bigIn",
                });
            }
            else if (this.state.topIcon2 == "iconBoxIn") {
                console.log(this.state.topIcon1);
                this.setState({
                    topIcon2: "iconBox-bigIn",
                });
            }
            ;
            if (this.state.topIcon3info == 1) {
                this.setState({
                    topIcon3: "iconBox-bigIn",
                });
            }
            if (this.state.topIcon4info == 1) {
                this.setState({
                    topIcon4: "iconBox-bigIn",
                });
            }
            if (this.state.topIcon5info == 1) {
                this.setState({
                    topIcon5: "iconBox-bigIn",
                });
            }
            ;
        }
        topClose(a) {
            console.log('topClose', a);
            this.setState({
                topView: "topView",
                moreIcon: "iconBox",
                topClose: "hide",
                topViewBack: " ",
            });
            if (this.state.topIcon1 == "iconBox-bigIn" && this.state.topIcon2 == "iconBox-bigIn") {
                this.setState({
                    topIcon1: "iconBoxIn",
                    topIcon2: "iconBoxIn",
                });
            }
            else if (this.state.topIcon1 == "iconBox-bigIn") {
                this.setState({
                    topIcon1: "iconBoxIn",
                    topIcon2: "iconBox",
                });
            }
            else if (this.state.topIcon2 == "iconBox-bigIn") {
                this.setState({
                    topIcon1: "iconBox",
                    topIcon2: "iconBoxIn",
                });
            }
            else {
                this.setState({
                    topIcon1: "iconBox",
                    topIcon2: "iconBox",
                    topIcon3: "iconBox",
                    topIcon4: "iconBox",
                    topIcon5: "iconBox",
                });
            }
        }
        callMark(type, name) {
            this.dataService.getParkPointList(this.markBack.bind(this), type, name);
        }
        markBack(data, name) {
            console.log('mark', data.response, name);
            this.globalAction.web_call_webgl_switchMark(name, 'true', data.response);
        }
        markClose(name) {
            this.globalAction.web_call_webgl_switchMark(name, 'false', null);
        }
        switchMark(a, bInfo) {
            console.log('switchMark', a);
            if (a == "全景") {
                if (this.state.topIcon1 == "iconBoxIn" || this.state.topIcon1 == "iconBox-bigIn") {
                    if (this.state.topView == "topView-big") {
                        this.setState({
                            topIcon1: "iconBox-big",
                        }, () => {
                            this.logIcon();
                        });
                    }
                    else {
                        this.setState({
                            topIcon1: "iconBox",
                        }, () => {
                            this.logIcon();
                        });
                    }
                    this.markClose(a);
                }
                else {
                    if (this.state.topView == "topView-big") {
                        this.setState({
                            topIcon1: "iconBox-bigIn",
                        }, () => {
                            this.logIcon();
                        });
                    }
                    else {
                        this.setState({
                            topIcon1: "iconBoxIn",
                        }, () => {
                            this.logIcon();
                        });
                    }
                    this.callMark(4, a);
                }
            }
            else if (a == "商圈") {
                if (this.state.topIcon2 == "iconBoxIn" || this.state.topIcon2 == "iconBox-bigIn") {
                    if (this.state.topView == "topView-big") {
                        this.setState({
                            topIcon2: "iconBox-big",
                        }, () => {
                            this.logIcon();
                        });
                    }
                    else {
                        this.setState({
                            topIcon2: "iconBox",
                        }, () => {
                            this.logIcon();
                        });
                    }
                    this.markClose(a);
                }
                else {
                    if (this.state.topView == "topView-big") {
                        this.setState({
                            topIcon2: "iconBox-bigIn",
                        }, () => {
                            this.logIcon();
                        });
                    }
                    else {
                        this.setState({
                            topIcon2: "iconBoxIn",
                        }, () => {
                            this.logIcon();
                        });
                    }
                    this.callMark(2, a);
                }
            }
            else if (a == "公交车") {
                if (this.state.topIcon3 == "iconBox-big") {
                    this.setState({
                        topIcon3: "iconBox-bigIn",
                        topIcon3info: 1,
                        haveIcon: true,
                    }, () => {
                        this.logIcon();
                    });
                    this.callMark(3, a);
                }
                else {
                    this.setState({
                        topIcon3: "iconBox-big",
                        topIcon3info: 0,
                    }, () => {
                        this.logIcon();
                    });
                    this.markClose(a);
                }
            }
            else if (a == "交通") {
                if (this.state.topIcon4 == "iconBox-big") {
                    this.setState({
                        topIcon4: "iconBox-bigIn",
                        topIcon4info: 1,
                    }, () => {
                        this.logIcon();
                    });
                    this.callMark(1, a);
                }
                else {
                    this.setState({
                        topIcon4: "iconBox-big",
                        topIcon4info: 0,
                    }, () => {
                        this.logIcon();
                    });
                    this.markClose(a);
                }
            }
            else if (a == "停车场") {
                if (this.state.topIcon5 == "iconBox-big") {
                    this.setState({
                        topIcon5: "iconBox-bigIn",
                        topIcon5info: 1,
                    }, () => {
                        this.logIcon();
                    });
                    this.callMark(5, a);
                }
                else {
                    this.setState({
                        topIcon5: "iconBox-big",
                        topIcon5info: 0,
                    }, () => {
                        this.logIcon();
                    });
                    this.markClose(a);
                }
            }
        }
        logIcon() {
            console.log(this.state);
            if (this.state.topIcon1 == "iconBoxIn" || this.state.topIcon1 == "iconBox-bigIn" ||
                this.state.topIcon2 == "iconBoxIn" || this.state.topIcon2 == "iconBox-bigIn" ||
                this.state.topIcon3 == "iconBox-bigIn" ||
                this.state.topIcon4 == "iconBox-bigIn" ||
                this.state.topIcon5 == "iconBox-bigIn") {
                this.setState({
                    haveIcon: true
                }, () => {
                    sessionStorage.setItem("iconstate", JSON.stringify(this.state));
                });
            }
            else {
                this.setState({
                    haveIcon: false
                }, () => {
                    sessionStorage.setItem("iconstate", JSON.stringify(this.state));
                });
            }
        }
        render() {
            return (React.createElement("div", { className: this.state.topViewBack },
                React.createElement("div", { className: this.state.topView },
                    React.createElement("div", { className: this.state.topIcon1, onClick: this.switchMark.bind(this, "全景"), style: { "border-top": "0rem solid #646464" } },
                        React.createElement("i", { className: "iconfont", style: { "fontSize": "5rem" } }, "\uE818"),
                        React.createElement("p", null, "\u5168\u666F")),
                    React.createElement("div", { className: this.state.topIcon2, onClick: this.switchMark.bind(this, "商圈") },
                        React.createElement("i", { className: "iconfont", style: { "fontSize": "5rem" } }, "\uE81A"),
                        React.createElement("p", null, "\u5546\u5708")),
                    React.createElement("div", { className: this.state.moreIcon, onClick: this.moreIcon.bind(this, 10) },
                        React.createElement("i", { className: "iconfont", style: { "fontSize": "5rem" } }, "\uE819"),
                        React.createElement("p", null, "\u66F4\u591A")),
                    React.createElement("div", { className: this.state.topIcon3, onClick: this.switchMark.bind(this, "公交车"), style: { "border-top": "0rem solid #646464" } },
                        React.createElement("i", { className: "iconfont", style: { "fontSize": "5rem" } }, "\uE817"),
                        React.createElement("p", null, "\u516C\u4EA4\u8F66")),
                    React.createElement("div", { className: this.state.topIcon4, onClick: this.switchMark.bind(this, "交通") },
                        React.createElement("i", { className: "iconfont", style: { "fontSize": "5rem" } }, "\uE816"),
                        React.createElement("p", null, "\u4EA4\u901A")),
                    React.createElement("div", { className: this.state.topIcon5, onClick: this.switchMark.bind(this, "停车场") },
                        React.createElement("i", { className: "iconfont", style: { "fontSize": "5rem" } }, "\uE81B"),
                        React.createElement("p", null, "\u505C\u8F66\u573A")),
                    React.createElement("div", { className: this.state.topClose, onClick: this.topClose.bind(this, 10) },
                        React.createElement("i", { className: "iconfont", style: { "fontSize": "3rem" } }, "\uE81C"))),
                React.createElement(RouterDOM.Link, { to: "/narrate" },
                    React.createElement("div", { className: "playIconbox", style: { "color": "#707070" } },
                        React.createElement("div", { className: this.state.playIcon, style: { "border-top": "0rem solid #646464" } },
                            React.createElement("i", { className: "iconfont", style: { "fontSize": "5rem" } }, "\uE81D"),
                            React.createElement("p", null, "\u8BB2\u89E3"))))));
        }
    }
    class FoldBtn extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                foleIcon: "foleIcon",
                foldView: "foldView-part",
                iconfont: "iconfont iconfont-unturn",
            };
        }
        toggleFold() {
            if (this.state.foldView == "foldView") {
                this.setState({
                    foldView: " foldView-part"
                });
                window.move3dBut("down");
            }
            else {
                this.setState({
                    foldView: "foldView"
                });
                window.move3dBut("up");
            }
            if (this.state.iconfont == "iconfont iconfont-unturn") {
                this.setState({
                    iconfont: "iconfont iconfont-turn",
                });
            }
            else {
                this.setState({
                    iconfont: "iconfont iconfont-unturn",
                });
            }
            console.log(this.state.foldView);
        }
        render() {
            return (React.createElement("div", { className: this.state.foldView },
                React.createElement("div", { className: "foleBtn" },
                    React.createElement("i", { className: this.state.iconfont, style: { "fontSize": "4.5rem", "color": "#C0C0C0" } }, "\uE849")),
                React.createElement("div", { className: "foleIconbox" },
                    React.createElement(RouterDOM.Link, { to: "/parkInfo" },
                        React.createElement("div", { className: this.state.foleIcon },
                            React.createElement("i", { className: "iconfont", style: { "fontSize": "6rem", "color": "#1C90E2", "height": "6rem" } }, "\uE80E"),
                            React.createElement("p", null, "\u56ED\u533A\u4ECB\u7ECD"))),
                    React.createElement(RouterDOM.Link, { to: "/findLease" },
                        React.createElement("div", { className: this.state.foleIcon },
                            React.createElement("i", { className: "iconfont", style: { "fontSize": "6rem", "color": "#866FF1", "height": "6rem" } }, "\uE824"),
                            React.createElement("p", null, "\u529E\u516C\u51FA\u79DF"))),
                    React.createElement(RouterDOM.Link, { to: "/findSell" },
                        React.createElement("div", { className: this.state.foleIcon },
                            React.createElement("i", { className: "iconfont", style: { "fontSize": "6rem", "color": "#F0594C", "height": "6rem" } }, "\uE854"),
                            React.createElement("p", null, "\u529E\u516C\u51FA\u552E"))),
                    React.createElement(RouterDOM.Link, { to: "/parkCompany" },
                        React.createElement("div", { className: this.state.foleIcon },
                            React.createElement("i", { className: "iconfont", style: { "fontSize": "6rem", "color": "#1C90E2", "height": "6rem" } }, "\uE81E"),
                            React.createElement("p", null, "\u56ED\u533A\u4F01\u4E1A"))))));
        }
    }
    exports.default = Home;
});
define("home", ["require", "exports", "react", "react-router-dom", "homeBottom", "dataService", "compat", "css!./styles/iconfont.css", "css!./styles/view.css"], function (require, exports, React, RouterDOM, homeBottom_2, dataService_10, compat_11) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Home extends React.Component {
        constructor(props) {
            super(props);
            this.props = {
                history: this.props.history,
                children: this.props.children
            };
            this.globalAction = new compat_11.default();
            this.dataService = new dataService_10.default();
            this.setToken = this.setToken.bind(this);
        }
        componentDidMount() {
        }
        setToken(data) {
            console.log("setToken", data);
            localStorage.setItem("token", data.token);
        }
        backParklist() {
            this.globalAction.web_call_webgl_pauseloadModuler();
        }
        render() {
            return (React.createElement("div", null,
                React.createElement("div", { className: "backParklist", onClick: this.backParklist.bind(this) },
                    React.createElement(RouterDOM.Link, { to: "/" },
                        React.createElement("i", { className: "iconfont", style: { "fontSize": "4rem", "color": "#6C6C6C" } }, "\uE83B"))),
                React.createElement(TopBtn, null),
                React.createElement(FoldBtn, null),
                this.props.children,
                React.createElement(homeBottom_2.default, { history: this.props.history })));
        }
    }
    class TopBtn extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                topView: "topView",
                topIcon1: "iconBox",
                topIcon2: "iconBox",
                topIcon3: "iconBox",
                topIcon4: "iconBox",
                topIcon5: "iconBox",
                topIcon: "iconBox",
                playIcon: "iconBox",
                moreIcon: "iconBox",
                topClose: "hide",
                topViewBack: "",
                topIcon3info: 0,
                topIcon4info: 0,
                topIcon5info: 0,
                haveIcon: false,
                mapIcon: [
                    { name: "交通" },
                    { name: "商圈" },
                    { name: "公交站" },
                    { name: "全景" },
                    { name: "停车场" },
                    { name: "交通" },
                ]
            };
            this.globalAction = new compat_11.default();
            this.dataService = new dataService_10.default();
            this.switchMark = this.switchMark.bind(this);
            this.logIcon = this.logIcon.bind(this);
        }
        componentDidMount() {
            var iconStated = JSON.parse(sessionStorage.getItem("iconstate"));
            console.log(JSON.parse(sessionStorage.getItem("iconstate")));
            console.log(iconStated);
            this.topClose('10');
            if (iconStated) {
                if (iconStated.haveIcon == true) {
                    this.setState({
                        topIcon1: iconStated.topIcon1,
                        topIcon2: iconStated.topIcon2,
                        topIcon3: iconStated.topIcon3,
                        topIcon4: iconStated.topIcon4,
                        topIcon5: iconStated.topIcon5,
                        topIcon: iconStated.topIcon,
                        playIcon: iconStated.playIcon,
                        moreIcon: iconStated.moreIcon,
                        topClose: iconStated.topClose,
                        topViewBack: iconStated.topViewBack,
                        topIcon3info: iconStated.topIcon3info,
                        topIcon4info: iconStated.topIcon4info,
                        topIcon5info: iconStated.topIcon5info,
                        mapIcon: iconStated.mapIcon,
                    });
                }
            }
        }
        moreIcon(a) {
            console.log('toggleIconbox', a);
            this.setState({
                topView: "topView-big",
                moreIcon: "hide",
                topClose: "topClose",
                topIcon1: "iconBox-big",
                topIcon2: "iconBox-big",
                topIcon3: "iconBox-big",
                topIcon4: "iconBox-big",
                topIcon5: "iconBox-big",
                topViewBack: "topViewBack",
            });
            if (this.state.topIcon1 == "iconBoxIn" && this.state.topIcon2 == "iconBoxIn") {
                this.setState({
                    topIcon1: "iconBox-bigIn",
                    topIcon2: "iconBox-bigIn",
                });
            }
            else if (this.state.topIcon1 == "iconBoxIn") {
                console.log(this.state.topIcon1);
                this.setState({
                    topIcon1: "iconBox-bigIn",
                });
            }
            else if (this.state.topIcon2 == "iconBoxIn") {
                console.log(this.state.topIcon1);
                this.setState({
                    topIcon2: "iconBox-bigIn",
                });
            }
            ;
            if (this.state.topIcon3info == 1) {
                this.setState({
                    topIcon3: "iconBox-bigIn",
                });
            }
            if (this.state.topIcon4info == 1) {
                this.setState({
                    topIcon4: "iconBox-bigIn",
                });
            }
            if (this.state.topIcon5info == 1) {
                this.setState({
                    topIcon5: "iconBox-bigIn",
                });
            }
            ;
        }
        topClose(a) {
            console.log('topClose', a);
            this.setState({
                topView: "topView",
                moreIcon: "iconBox",
                topClose: "hide",
                topViewBack: " ",
            }, () => {
                this.logIcon();
            });
            if (this.state.topIcon1 == "iconBox-bigIn" && this.state.topIcon2 == "iconBox-bigIn") {
                this.setState({
                    topIcon1: "iconBoxIn",
                    topIcon2: "iconBoxIn",
                }, () => {
                    this.logIcon();
                });
            }
            else if (this.state.topIcon1 == "iconBox-bigIn") {
                this.setState({
                    topIcon1: "iconBoxIn",
                    topIcon2: "iconBox",
                }, () => {
                    this.logIcon();
                });
            }
            else if (this.state.topIcon2 == "iconBox-bigIn") {
                this.setState({
                    topIcon1: "iconBox",
                    topIcon2: "iconBoxIn",
                }, () => {
                    this.logIcon();
                });
            }
            else {
                this.setState({
                    topIcon1: "iconBox",
                    topIcon2: "iconBox",
                    topIcon3: "iconBox",
                    topIcon4: "iconBox",
                    topIcon5: "iconBox",
                }, () => {
                    this.logIcon();
                });
            }
            console.log('topClose2222', this.state);
        }
        callMark(type, name) {
            this.dataService.getParkPointList(this.markBack.bind(this), type, name);
        }
        markBack(data, name) {
            console.log('mark', data.response, name);
            this.globalAction.web_call_webgl_switchMark(name, 'true', data.response);
        }
        markClose(name) {
            this.globalAction.web_call_webgl_switchMark(name, 'false', null);
        }
        switchMark(a, bInfo) {
            console.log('switchMark', a);
            if (a == "全景") {
                if (this.state.topIcon1 == "iconBoxIn" || this.state.topIcon1 == "iconBox-bigIn") {
                    if (this.state.topView == "topView-big") {
                        this.setState({
                            topIcon1: "iconBox-big",
                        }, () => {
                            this.logIcon();
                        });
                    }
                    else {
                        this.setState({
                            topIcon1: "iconBox",
                        }, () => {
                            this.logIcon();
                        });
                    }
                    this.markClose(a);
                }
                else {
                    if (this.state.topView == "topView-big") {
                        this.setState({
                            topIcon1: "iconBox-bigIn",
                        }, () => {
                            this.logIcon();
                        });
                    }
                    else {
                        this.setState({
                            topIcon1: "iconBoxIn",
                        }, () => {
                            this.logIcon();
                        });
                    }
                    this.callMark(4, a);
                }
            }
            else if (a == "商圈") {
                if (this.state.topIcon2 == "iconBoxIn" || this.state.topIcon2 == "iconBox-bigIn") {
                    if (this.state.topView == "topView-big") {
                        this.setState({
                            topIcon2: "iconBox-big",
                        }, () => {
                            this.logIcon();
                        });
                    }
                    else {
                        this.setState({
                            topIcon2: "iconBox",
                        }, () => {
                            this.logIcon();
                        });
                    }
                    this.markClose(a);
                }
                else {
                    if (this.state.topView == "topView-big") {
                        this.setState({
                            topIcon2: "iconBox-bigIn",
                        }, () => {
                            this.logIcon();
                        });
                    }
                    else {
                        this.setState({
                            topIcon2: "iconBoxIn",
                        }, () => {
                            this.logIcon();
                        });
                    }
                    this.callMark(2, a);
                }
            }
            else if (a == "公交车") {
                if (this.state.topIcon3 == "iconBox-big") {
                    this.setState({
                        topIcon3: "iconBox-bigIn",
                        topIcon3info: 1,
                        haveIcon: true,
                    }, () => {
                        this.logIcon();
                    });
                    this.callMark(3, a);
                }
                else {
                    this.setState({
                        topIcon3: "iconBox-big",
                        topIcon3info: 0,
                    }, () => {
                        this.logIcon();
                    });
                    this.markClose(a);
                }
            }
            else if (a == "交通") {
                if (this.state.topIcon4 == "iconBox-big") {
                    this.setState({
                        topIcon4: "iconBox-bigIn",
                        topIcon4info: 1,
                    }, () => {
                        this.logIcon();
                    });
                    this.callMark(1, a);
                }
                else {
                    this.setState({
                        topIcon4: "iconBox-big",
                        topIcon4info: 0,
                    }, () => {
                        this.logIcon();
                    });
                    this.markClose(a);
                }
            }
            else if (a == "停车场") {
                if (this.state.topIcon5 == "iconBox-big") {
                    this.setState({
                        topIcon5: "iconBox-bigIn",
                        topIcon5info: 1,
                    }, () => {
                        this.logIcon();
                    });
                    this.callMark(5, a);
                }
                else {
                    this.setState({
                        topIcon5: "iconBox-big",
                        topIcon5info: 0,
                    }, () => {
                        this.logIcon();
                    });
                    this.markClose(a);
                }
            }
        }
        logIcon() {
            console.log(this.state);
            if (this.state.topIcon1 == "iconBoxIn" || this.state.topIcon1 == "iconBox-bigIn" ||
                this.state.topIcon2 == "iconBoxIn" || this.state.topIcon2 == "iconBox-bigIn" ||
                this.state.topIcon3 == "iconBox-bigIn" ||
                this.state.topIcon4 == "iconBox-bigIn" ||
                this.state.topIcon5 == "iconBox-bigIn") {
                this.setState({
                    haveIcon: true
                }, () => {
                    sessionStorage.setItem("iconstate", JSON.stringify(this.state));
                });
            }
            else {
                this.setState({
                    haveIcon: false
                }, () => {
                    sessionStorage.setItem("iconstate", JSON.stringify(this.state));
                });
            }
        }
        render() {
            return (React.createElement("div", { className: this.state.topViewBack },
                React.createElement("div", { className: this.state.topView },
                    React.createElement("div", { className: this.state.topIcon1, onClick: this.switchMark.bind(this, "全景"), style: { "border-top": "0rem solid #646464" } },
                        React.createElement("i", { className: "iconfont", style: { "fontSize": "5rem" } }, "\uE818"),
                        React.createElement("p", null, "\u5168\u666F")),
                    React.createElement("div", { className: this.state.topIcon2, onClick: this.switchMark.bind(this, "商圈") },
                        React.createElement("i", { className: "iconfont", style: { "fontSize": "5rem" } }, "\uE81A"),
                        React.createElement("p", null, "\u5546\u5708")),
                    React.createElement("div", { className: this.state.moreIcon, onClick: this.moreIcon.bind(this, 10) },
                        React.createElement("i", { className: "iconfont", style: { "fontSize": "5rem" } }, "\uE819"),
                        React.createElement("p", null, "\u66F4\u591A")),
                    React.createElement("div", { className: this.state.topIcon3, onClick: this.switchMark.bind(this, "公交车"), style: { "border-top": "0rem solid #646464" } },
                        React.createElement("i", { className: "iconfont", style: { "fontSize": "5rem" } }, "\uE817"),
                        React.createElement("p", null, "\u516C\u4EA4\u8F66")),
                    React.createElement("div", { className: this.state.topIcon4, onClick: this.switchMark.bind(this, "交通") },
                        React.createElement("i", { className: "iconfont", style: { "fontSize": "5rem" } }, "\uE816"),
                        React.createElement("p", null, "\u4EA4\u901A")),
                    React.createElement("div", { className: this.state.topIcon5, onClick: this.switchMark.bind(this, "停车场") },
                        React.createElement("i", { className: "iconfont", style: { "fontSize": "5rem" } }, "\uE81B"),
                        React.createElement("p", null, "\u505C\u8F66\u573A")),
                    React.createElement("div", { className: this.state.topClose, onClick: this.topClose.bind(this, 10) },
                        React.createElement("i", { className: "iconfont", style: { "fontSize": "3rem" } }, "\uE81C"))),
                React.createElement(RouterDOM.Link, { to: "/narrate" },
                    React.createElement("div", { className: "playIconbox hide", style: { "color": "#707070" } },
                        React.createElement("div", { className: this.state.playIcon, style: { "border-top": "0rem solid #646464" } },
                            React.createElement("i", { className: "iconfont", style: { "fontSize": "5rem" } }, "\uE81D"),
                            React.createElement("p", null, "\u8BB2\u89E3"))))));
        }
    }
    class FoldBtn extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                foleIcon: "foleIcon",
                foldView: "foldView-part",
                iconfont: "iconfont iconfont-unturn",
            };
        }
        toggleFold() {
            if (this.state.foldView == "foldView") {
                this.setState({
                    foldView: " foldView-part"
                });
                window.move3dBut("down");
            }
            else {
                this.setState({
                    foldView: "foldView"
                });
                window.move3dBut("up");
            }
            if (this.state.iconfont == "iconfont iconfont-unturn") {
                this.setState({
                    iconfont: "iconfont iconfont-turn",
                });
            }
            else {
                this.setState({
                    iconfont: "iconfont iconfont-unturn",
                });
            }
            console.log(this.state.foldView);
        }
        render() {
            return (React.createElement("div", { className: this.state.foldView },
                React.createElement("div", { className: "foleBtn", style: { "height": "4rem" } },
                    React.createElement("i", { className: this.state.iconfont, style: { "fontSize": "4.5rem", "color": "#C0C0C0", "display": "none" } }, "\uE849")),
                React.createElement("div", { className: "foleIconbox" },
                    React.createElement(RouterDOM.Link, { to: "/parkInfo" },
                        React.createElement("div", { className: this.state.foleIcon },
                            React.createElement("i", { className: "iconfont", style: { "fontSize": "6rem", "color": "#1C90E2", "height": "6rem" } }, "\uE80E"),
                            React.createElement("p", null, "\u56ED\u533A\u4ECB\u7ECD"))),
                    React.createElement(RouterDOM.Link, { to: "/findLease" },
                        React.createElement("div", { className: this.state.foleIcon },
                            React.createElement("i", { className: "iconfont", style: { "fontSize": "6rem", "color": "#866FF1", "height": "6rem" } }, "\uE824"),
                            React.createElement("p", null, "\u529E\u516C\u51FA\u79DF"))),
                    React.createElement(RouterDOM.Link, { to: "/findSell" },
                        React.createElement("div", { className: this.state.foleIcon },
                            React.createElement("i", { className: "iconfont", style: { "fontSize": "6rem", "color": "#F0594C", "height": "6rem" } }, "\uE854"),
                            React.createElement("p", null, "\u529E\u516C\u51FA\u552E"))),
                    React.createElement(RouterDOM.Link, { to: "/parkCompany" },
                        React.createElement("div", { className: this.state.foleIcon },
                            React.createElement("i", { className: "iconfont", style: { "fontSize": "6rem", "color": "#1C90E2", "height": "6rem" } }, "\uE81E"),
                            React.createElement("p", null, "\u56ED\u533A\u4F01\u4E1A"))))));
        }
    }
    exports.default = Home;
});
define("identityAuthentication", ["require", "exports", "react", "dataService", "antd-mobile"], function (require, exports, React, dataService_11, antd_mobile_7) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class IdentityAuthentication extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                id: "",
                applicant: "",
                phone: "",
                company: "",
                roleType: "",
                park_id: "",
                companyBox: "hide",
                inputValueRelate: "",
                company_id_in: "",
                company_name_in: "",
                companyNull: "hide",
                companyUL: [],
                company_id: "",
                company_name: "",
                companyIndexof: -1,
                roleTypeBox: "hide",
                roleTypeUL: [],
                roleTypeIndexof: 0,
                role_id: "",
                role_id_in: "",
                role_name: "",
                role_name_in: "",
                files: [],
                multiple: false,
                filesImg: [],
                pic_amount: "",
                pic: "",
                name: "",
            };
            this.dataService = new dataService_11.default();
            this.onChangeImg = (files, type, index) => {
                console.log(files, type, index);
                this.setState({
                    filesImg: files,
                    files,
                });
                console.log("11111", this.state.files);
                console.log("22222", this.state.filesImg);
                let obj = [{
                        "imgname": "headimg",
                        "imgbase64": this.state.filesImg[0].url,
                    }];
                if (type == "remove") {
                    this.setState({
                        pic: ""
                    });
                }
                else {
                    this.dataService.uploadImgOss(this.setImg, obj);
                }
            };
            this.setImg = this.setImg.bind(this);
        }
        componentDidMount() {
            let data = sessionStorage.getItem("userInfos");
            let dataObj = JSON.parse(data);
            let role_name = JSON.parse(sessionStorage.getItem("userInfos")).roles.role_name;
            let role_id = JSON.parse(sessionStorage.getItem("userInfos")).roles.role_id;
            let name = JSON.parse(sessionStorage.getItem("userInfos")).name;
            this.setState({
                applicant: dataObj.name,
                phone: dataObj.phone,
                company: sessionStorage.getItem("enterprise") == "undefined" ? "暂无绑定企业" : sessionStorage.getItem("enterprise"),
                company_id: sessionStorage.getItem("enterpriseId"),
                park_id: dataObj.park_id,
                role_name: role_name,
                role_id: role_id,
                name: dataObj.name,
            });
        }
        goBack() {
            this.props.history.goBack();
        }
        applicantChange(event) {
            this.setState({
                applicant: event.target.value
            });
        }
        phoneChange(event) {
            this.setState({
                phone: event.target.value
            });
        }
        companyChange(event) {
            console.log(555555555555555);
            this.setState({
                companyBox: "rollSelectCauseBox2",
            });
            this.dataService.findCompany(this.setCompanyList.bind(this), "", this.state.inputValueRelate);
        }
        setCompanyList(data) {
            console.log("mmmmmmmmmmmmm", data.response);
            if (data.response.length == 0) {
                this.setState({
                    companyNull: "show",
                    companyUL: data.response
                });
            }
            else {
                this.setState({
                    companyNull: "hide",
                    companyUL: data.response
                });
            }
        }
        hideCompanyBox() {
            this.setState({
                companyBox: "hide",
            }, () => {
                console.log("hide", this.state.company_id, this.state.company_name);
            });
        }
        getCompanyBox() {
            this.setState({
                companyBox: "hide",
                company_id: this.state.company_id_in,
                company_name: this.state.company_name_in,
                company: this.state.company_name_in,
            });
        }
        inCompanyeList(i, id, name) {
            this.setState({
                companyIndexof: i,
                company_id_in: id,
                company_name_in: name,
            }, () => {
                console.log("选中的公司", this.state.company_id_in, this.state.company_name_in);
            });
        }
        foucusRelate() {
            if (this.state.inputValueRelate == " ") {
                this.setState({ inputValueRelate: "" });
            }
        }
        blurRelate(event) {
            if (this.state.inputValueRelate == "") {
                this.setState({ inputValueRelate: " " });
            }
        }
        changeRelate(event) {
            this.setState({ inputValueRelate: event.target.value });
        }
        queryKeyDownHandlerRelate(e) {
            switch (e.keyCode) {
                case 13:
                    this.searchCompany();
                    break;
            }
        }
        searchCompany() {
            if (this.state.inputValueRelate == "请输入企业名称") {
                this.setState({ inputValueRelate: "" });
            }
            ;
            console.log("searchBtn", this.state.inputValueRelate);
            this.dataService.findCompany(this.setCompanyList.bind(this), "", this.state.inputValueRelate);
        }
        showRoleTypeBox() {
            console.log(111111);
            this.setState({
                roleTypeBox: "show rollSelectCauseBox",
            });
        }
        inRoleTypeList(i, id, name) {
            this.setState({
                role_id_in: id,
                role_name_in: name,
                roleTypeIndexof: i,
            });
        }
        hideRoleTypeBox() {
            this.setState({
                roleTypeBox: "hide",
            });
        }
        getRoleTypeBox() {
            this.setState({
                roleTypeBox: "hide",
                role_id: this.state.role_id_in,
                role_name: this.state.role_name_in,
            });
        }
        setImg(data) {
            this.setState({
                pic: data[0],
            });
        }
        sumbit() {
            console.log(this.state);
            let userId = JSON.parse(sessionStorage.getItem("userInfos")).userId;
            let obj = {
                "id": userId,
                "name": this.state.applicant,
                "company_name": this.state.company,
                "phone": this.state.phone,
                "park_id": this.state.park_id,
                "role_id": JSON.parse(sessionStorage.getItem("userInfos")).roles.role_id,
                "pic_amount": "1",
                "pic": this.state.pic,
                "bind_company": [
                    {
                        "company_id": this.state.company_id,
                        "company_name": this.state.company,
                    }
                ],
                "add_company": [
                    {
                        "company_name": ""
                    }
                ]
            };
            if (this.state.applicant == "") {
                antd_mobile_7.Toast.info('请填写姓名', 2);
            }
            else if (this.state.phone == "") {
                antd_mobile_7.Toast.info('请填写联系电话', 2);
            }
            else if (this.state.company == "" || this.state.company == "请先关联企业") {
                antd_mobile_7.Toast.info('请选择企业', 2);
            }
            else if (this.state.role_id == "") {
                antd_mobile_7.Toast.info('请选择角色类型', 2);
            }
            else {
                this.dataService.userAuthentication(this.sumbitSucceed, obj);
            }
        }
        sumbitSucceed(data) {
            antd_mobile_7.Toast.info(data);
            window.history.back();
        }
        render() {
            console.log("33333333333", this.state.role_name);
            return (React.createElement("div", { className: "modification-authentication" },
                React.createElement("div", { className: "personal-center-tag", style: { "border-bottom": "0rem" } },
                    React.createElement("div", { style: { paddingLeft: "30px", float: "left" }, onClick: this.goBack.bind(this) },
                        React.createElement("img", { src: "./park_m/image/right.png", style: { transform: "rotate(180deg)", marginBottom: "10px" } }),
                        React.createElement("span", { style: { color: "#6C6C6C" } }, "\u8EAB\u4EFD\u8BA4\u8BC1"))),
                React.createElement("form", null,
                    React.createElement("div", { className: "identityTop" },
                        React.createElement("p", null,
                            React.createElement("span", { className: "redStar" }, "*"),
                            "  \u7533\u8BF7\u4EBA",
                            React.createElement("input", { type: "text", value: this.state.applicant, placeholder: "\u8BF7\u8F93\u5165\u60A8\u7684\u59D3\u540D", style: { "border": "none", "margin-left": "8rem" }, onChange: this.applicantChange.bind(this), readOnly: true })),
                        React.createElement("p", null,
                            React.createElement("span", { className: "redStar" }, "*"),
                            "  \u8054\u7CFB\u53F7\u7801",
                            React.createElement("input", { type: "number", value: this.state.phone, placeholder: "\u8BF7\u8F93\u5165\u60A8\u7684\u8054\u7CFB\u53F7\u7801", style: { "border": "none", "margin-left": "5rem" }, onChange: this.phoneChange.bind(this), readOnly: true })),
                        React.createElement("p", null,
                            React.createElement("span", { className: "redStar" }, "*"),
                            "  \u4F01\u4E1A\u540D\u79F0",
                            React.createElement("input", { type: "text", value: this.state.company, placeholder: "", style: { "border": "none", "margin-left": "5rem" } }),
                            React.createElement("span", { onClick: this.companyChange.bind(this), className: "iconfont", style: { "fontSize": "3rem", "float": "right" } }, "\uE827")),
                        React.createElement("p", { onClick: this.showRoleTypeBox.bind(this) },
                            React.createElement("span", { className: "redStar" }, "*"),
                            "  \u89D2\u8272\u7C7B\u578B",
                            React.createElement("input", { type: "text", value: "企业管理员", placeholder: "\u4F01\u4E1A\u7BA1\u7406\u5458", style: { "border": "none", "margin-left": "5rem" } }))),
                    React.createElement("div", { className: "applyPutSumbit", onClick: this.sumbit.bind(this) }, "\u63D0\u4EA4"),
                    React.createElement("div", { className: "identityBotton" },
                        React.createElement("p", { style: { "color": "#333" } }, "\u8BA4\u8BC1\u6750\u6599"),
                        React.createElement("div", { className: "identityBottonBox" },
                            React.createElement("div", { className: "", style: { position: "relative", left: "13rem", width: "106rem" } },
                                React.createElement(antd_mobile_7.WingBlank, null,
                                    React.createElement(antd_mobile_7.ImagePicker, { files: this.state.files, onChange: this.onChangeImg, onImageClick: (index, fs) => console.log(index, fs), selectable: this.state.files.length < 1, multiple: this.state.multiple }))),
                            React.createElement("p", null, "\u8BA4\u8BC1\u4F01\u4E1A\u7BA1\u7406\u5458\u8BF7\u4E0A\u4F20\u79DF\u623F\u5408\u540C\u6216\u8425\u4E1A\u6267\u7167"),
                            React.createElement("p", null, "\u8BA4\u8BC1\u56ED\u533A\u7BA1\u7406\u5458\u8BF7\u4E0A\u4F20\u5DE5\u724C")),
                        React.createElement("p", { style: { "display": "none" } },
                            "\u6216\u8005\u7535\u8BDD\u8054\u7CFB\u7BA1\u7406\u5458\u8FDB\u884C\u6388\u6743(",
                            React.createElement("span", { style: { "color": "#333" } }, "0773-1234567"),
                            ")"))),
                React.createElement("div", { className: this.state.companyBox },
                    React.createElement("div", { className: "searchBox" },
                        React.createElement("span", { className: "searchBox-text" },
                            React.createElement("i", { className: "iconfont", style: { "fontSize": "2.3rem" } }, "\uE810"),
                            React.createElement("input", { className: "companySearch", type: "search", placeholder: "\u8BF7\u8F93\u5165\u4F01\u4E1A\u540D\u79F0", value: this.state.inputValueRelate, onFocus: this.foucusRelate.bind(this), onBlur: this.blurRelate.bind(this), onChange: this.changeRelate.bind(this), onKeyDown: this.queryKeyDownHandlerRelate.bind(this) }))),
                    React.createElement("ul", { className: "rollSelectCauseULcss2" },
                        React.createElement("p", { className: this.state.companyNull, style: { "text-align": "center" } }, "\u6CA1\u6709\u7B26\u5408\u641C\u7D22\u6761\u4EF6\u7684\u7ED3\u679C\u00B7\u00B7\u00B7"),
                        this.state.companyUL.map((i, index) => {
                            return (React.createElement("li", { className: this.state.companyIndexof == index ? "rollSelectCauseli-active" : "rollSelectCauseli", onClick: this.inCompanyeList.bind(this, index, i.id, i.name) }, i.name));
                        })),
                    React.createElement("div", { className: "rollSelectCuasedBtn" },
                        React.createElement("span", { className: "rollSelectCancel", onClick: this.hideCompanyBox.bind(this) }, "\u53D6\u6D88"),
                        React.createElement("span", { className: "rollSelectConfirm", onClick: this.getCompanyBox.bind(this) }, "\u786E\u8BA4")))));
        }
    }
    exports.default = IdentityAuthentication;
});
define("parkCompany", ["require", "exports", "react", "react-router-dom", "compat", "dataService", "antd-mobile"], function (require, exports, React, RouterDOM, compat_12, dataService_12, antd_mobile_8) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ParkCompany extends React.Component {
        constructor(props) {
            super(props);
            this.globalAction = new compat_12.default();
            this.state = {
                parkCompanycss: "parkCompany",
                showList: true,
                showInfo: false,
                token: "",
                companyInfotit: "companyInfotit"
            };
            ParkCompany.toggleView = this.toggleView.bind(this);
            ParkCompany.getCompanyinfo = this.getCompanyinfo.bind(this);
        }
        componentDidMount() {
            console.log("ParkCompany");
            move3dBut("up");
        }
        static getCompanyinfo(id) { }
        getCompanyinfo(id) {
            console.log("getCompanyinfo", id);
            this.toggleView("Info", id);
            CompanyInfo.getCompanyinfo(id);
        }
        static toggleView(a, id) { }
        ;
        toggleView(a, id) {
            console.log("ff", a);
            console.log("ff", id);
            if (a == "Info") {
                this.setState({
                    showList: false,
                    showInfo: true,
                    companyInfotit: "hide"
                });
            }
            else {
                this.setState({
                    showList: true,
                    showInfo: false,
                    companyInfotit: "companyInfotit"
                });
            }
        }
        render() {
            return (React.createElement("div", { className: this.state.parkCompanycss },
                React.createElement("p", { className: this.state.companyInfotit },
                    React.createElement("span", null, "\u56ED\u533A\u4F01\u4E1A")),
                React.createElement("div", { className: this.state.showList == true ? "show" : "hide" },
                    React.createElement(CompanyList, null)),
                React.createElement("div", { className: this.state.showInfo == true ? "show" : "hide" },
                    React.createElement(CompanyInfo, null))));
        }
    }
    class CompanyList extends React.Component {
        constructor(props) {
            super(props);
            this.dataService = new dataService_12.default();
            this.globalAction = new compat_12.default();
            this.state = {
                companyNull: "hide",
                park_id: 1001,
                companyListcss: "companyList-part",
                foleBtn: "foleBtn",
                companyBtn: "companyBtn-part",
                companyul: "companyul",
                searchBoxTypeIcon: "iconfont iconfont-unturn",
                companyData: [],
                companyType: [],
                indexOf: -1,
                typeIndexof: 100,
                typeName: " ",
                company_type_id: "",
                inputValue: "",
                iconfont: "iconfont iconfont-unturn",
                token: "",
                src: "about:'blank'",
                errImg: "./park_m/image/noImg.png",
                imgurlNull: "./park_m/image/noImg.png",
            };
            this.showInfo = this.showInfo.bind(this);
            this.setCompany = this.setCompany.bind(this);
            this.setCompanyType = this.setCompanyType.bind(this);
            this.change = this.change.bind(this);
            this.typeActive = this.typeActive.bind(this);
        }
        componentWillMount() {
        }
        componentDidMount() {
            this.dataService.getCompanyType(this.setCompanyType, this.state.park_id);
            this.dataService.findCompany(this.setCompany, this.state.company_type_id, this.state.typeName);
        }
        setCompanyType(data) {
            console.log("set企业类型列表", data.response);
            this.setState({
                companyType: data.response,
            });
        }
        setCompany(data) {
            console.log("set企业列表", data.response);
            if (data.response.length == 0) {
                console.log(22222222);
                this.setState({
                    companyData: data.response,
                    companyNull: "show",
                });
            }
            else {
                this.setState({
                    companyData: data.response,
                    companyNull: "hide",
                });
            }
        }
        onErrorHeadimageurl(index) {
            var items = this.state.companyData;
            items[index].headimageurl = "./park_m/image/noImg.png";
            this.setState({
                companyData: items
            });
        }
        showInfo(a, id, name, e) {
            ParkCompany.toggleView(a, id);
            CompanyInfo.getCompanyinfo(id);
            console.log("more", a, id, name, e);
        }
        toggleFold() {
            console.log("tftft");
            if (this.state.companyListcss == "companyList-all") {
                this.setState({
                    companyListcss: "companyList-part",
                    companyul: "companyul"
                });
                this.globalAction.web_call_webgl_continueloadModuler();
            }
            else {
                this.setState({
                    companyListcss: "companyList-all",
                    companyul: "companyul-all"
                });
                this.globalAction.web_call_webgl_pauseloadModuler();
            }
            if (this.state.iconfont == "iconfont iconfont-unturn") {
                this.setState({
                    iconfont: "iconfont iconfont-turn",
                });
            }
            else {
                this.setState({
                    iconfont: "iconfont iconfont-turn",
                });
            }
        }
        foldBtn() {
            console.log("foldBtn");
            if (this.state.companyBtn == "companyBtn-part") {
                this.setState({
                    companyBtn: "companyBtn-all",
                    searchBoxTypeIcon: "iconfont iconfont-turn",
                });
            }
            else {
                this.setState({
                    companyBtn: "companyBtn-part",
                    searchBoxTypeIcon: "iconfont iconfont-unturn",
                });
            }
        }
        companyActive(data, id, title, building, floor, room) {
            console.log("active", data);
            this.setState({
                indexOf: data,
            });
            this.dataService.getCompanyInfo(this.callWebglSwitchRoom.bind(this), id);
        }
        callWebglSwitchRoom(data) {
            let roomData = {
                m_pTile: data.response.project_title,
                m_pBuilding: data.response.building_code,
                m_pLayer: data.response.floor_code,
                m_pRoom: data.response.room_code,
                m_pPart: data.response.parts,
            };
            this.globalAction.web_call_webgl_switchRoom(roomData);
        }
        typeActive(indexof, name, id) {
            console.log("typeActive", indexof);
            console.log("typeActive", name);
            console.log("typeActive", id);
            this.setState({
                typeIndexof: indexof,
                typeName: name,
                company_type_id: id,
            }, () => {
                this.searchCompany();
            });
        }
        foucus() {
            if (this.state.inputValue == " ") {
                this.setState({ inputValue: "" });
            }
        }
        blur(event) {
            if (this.state.inputValue == "") {
                this.setState({ inputValue: " " });
            }
        }
        change(event) {
            this.setState({ inputValue: event.target.value });
        }
        queryKeyDownHandler(e) {
            switch (e.keyCode) {
                case 13:
                    this.searchCompany();
                    break;
            }
        }
        searchCompany() {
            if (this.state.inputValue == "请输入企业名称" || this.state.typeName == "全部 ") {
                this.setState({ inputValue: "" });
            }
            ;
            console.log("searchBtn", this.state.inputValue, this.state.company_type_id);
            this.dataService.findCompany(this.setCompany, this.state.company_type_id, this.state.inputValue);
        }
        mapReturnpark() {
            this.globalAction.web_call_webgl_mapReturnpark();
            move3dBut("down");
        }
        render() {
            return (React.createElement("div", { className: this.state.companyListcss },
                React.createElement("div", { className: "foleBtn" },
                    React.createElement("p", { className: "companyGoHomeLeft", onClick: this.mapReturnpark.bind(this) },
                        React.createElement(RouterDOM.Link, { to: "/home", style: { color: "#949494" } },
                            React.createElement("i", { className: "iconfont companyInfoicon" }, "\uE83B"),
                            React.createElement("span", null, "\u8FD4\u56DE"))),
                    React.createElement("p", { className: "companyGoHomeRight" },
                        React.createElement("i", { className: this.state.iconfont, style: { "fontSize": "5rem", "color": "#C0C0C0" }, onClick: this.toggleFold.bind(this) }, "\uE849"))),
                React.createElement("ul", { className: this.state.companyul },
                    React.createElement("p", { className: this.state.companyNull, style: { "text-align": "center", "font-size": "2.8rem" } }, "\u6CA1\u6709\u7B26\u5408\u641C\u7D22\u6761\u4EF6\u7684\u7ED3\u679C\u00B7\u00B7\u00B7"),
                    this.state.companyData.map((i, index) => {
                        return (React.createElement("li", { onClick: this.companyActive.bind(this, index, i.id, i.project_title, i.building_code, i.floor_code, i.room_code), className: this.state.indexOf == index ? "companyli-active" : "companyli" },
                            React.createElement("div", { className: this.state.indexOf == index ? "companyImgback-active" : "companyImgback" },
                                React.createElement("img", { src: i.headimageurl == null ? this.state.imgurlNull : i.headimageurl, onError: this.onErrorHeadimageurl.bind(this, index) })),
                            React.createElement("div", { className: "companyul-middle" },
                                React.createElement("p", { className: this.state.indexOf == index ? "companyName-active" : "companyName", style: { "font-size": "2.4rem", "font-weight": "bold" } }, i.name),
                                React.createElement("p", { style: { "font-size": "2.5rem", "overflow": "hidden", "text-overflow": "ellipsis", "white-space": "nowrap" } },
                                    React.createElement("i", { className: "iconfont", style: { "fontSize": "2.5rem" } }, "\uE815"),
                                    i.address)),
                            React.createElement("div", { className: "companyul-right" },
                                React.createElement("p", { onClick: this.showInfo.bind(this, "Info", i.id, i.name), className: this.state.indexOf == index ? "show" : "hide" },
                                    "\u66F4\u591A",
                                    React.createElement("i", { className: "iconfont", style: { "fontSize": "2rem" } }, "\uE827")),
                                React.createElement("p", { className: this.state.indexOf == index ? "companyType-active" : "companyType" }, i.company_type))));
                    })),
                React.createElement("form", { action: '', target: "rfFrame" },
                    React.createElement("div", { className: this.state.companyBtn },
                        React.createElement("div", { className: "searchBox" },
                            React.createElement("span", { className: "searchBox-text" },
                                React.createElement("i", { className: "iconfont", style: { "fontSize": "2.3rem" } }, "\uE810"),
                                React.createElement("input", { className: "companySearch", type: "search", placeholder: "\u8BF7\u8F93\u5165\u4F01\u4E1A\u540D\u79F0", value: this.state.inputValue, onFocus: this.foucus.bind(this), onBlur: this.blur.bind(this), onChange: this.change.bind(this), onKeyDown: this.queryKeyDownHandler.bind(this) })),
                            React.createElement("span", { onClick: this.foldBtn.bind(this), className: "searchBox-type" },
                                this.state.typeName,
                                " ",
                                React.createElement("i", { className: this.state.searchBoxTypeIcon, style: { "fontSize": "3rem", position: "relative", top: "0.3rem" } }, "\uE828"))),
                        React.createElement("ul", { className: "companyTypeul" },
                            React.createElement("li", { className: this.state.typeIndexof == 100 ? "companyTypeli-active" : "companyTypeli", onClick: this.typeActive.bind(this, 100, "全部", ""), style: { "width": "12rem" } }, "\u5168\u90E8"),
                            this.state.companyType.map((i, index) => {
                                return (React.createElement("li", { onClick: this.typeActive.bind(this, index, i.name, i.id), className: this.state.typeIndexof == index ? "companyTypeli-active" : "companyTypeli" }, i.name));
                            })))),
                React.createElement("iframe", { id: "rfFrame", name: "rfFrame", src: this.state.src, style: { display: "none" } }, "   ")));
        }
    }
    class CompanyInfo extends React.Component {
        constructor(props) {
            super(props);
            this.dataService = new dataService_12.default();
            this.state = {
                companyInfocss: "companyInfo",
                companyName: "浙江永拓信息科技有限公司",
                companyInfoul: "companyInfoul",
                infoli: 0,
                iconfont: "iconfont iconfont-turn",
            };
            this.showList = this.showList.bind(this);
            CompanyInfo.getCompanyinfo = this.getCompanyinfo.bind(this);
            this.setCompanyinfo = this.setCompanyinfo.bind(this);
        }
        static getCompanyinfo(id) { }
        getCompanyinfo(id) {
            this.dataService.getCompanyInfo(this.setCompanyinfo, id);
        }
        setCompanyinfo(data) {
            console.log("getCompanyinfo", data);
            this.setState({
                companyName: data.response.name,
            });
            CompanyInfos.setCompanyinfos(data);
            Mien.setCompanymien(data);
            Details.setCompanydetails(data);
            Product.setCompanyproduct(data);
        }
        showList(a, id) {
            ParkCompany.toggleView(a, id);
        }
        toggleFold() {
            console.log("tftft");
            if (this.state.companyInfocss == "companyInfo") {
                this.setState({
                    companyInfocss: "companyInfo-part",
                });
            }
            else {
                this.setState({
                    companyInfocss: "companyInfo",
                });
            }
            if (this.state.iconfont == "iconfont iconfont-unturn") {
                this.setState({
                    iconfont: "iconfont iconfont-turn",
                });
            }
            else {
                this.setState({
                    iconfont: "iconfont iconfont-unturn",
                });
            }
        }
        infoClick(indexof) {
            console.log("infoClick", indexof);
            this.setState({
                infoli: indexof,
            });
        }
        render() {
            return (React.createElement("div", null,
                React.createElement("p", { className: "companyInfotit" },
                    React.createElement("span", null, this.state.companyName)),
                React.createElement("div", { className: this.state.companyInfocss },
                    React.createElement("div", { className: "foleBtn" },
                        React.createElement("p", { className: "companyGoHomeLeft", style: { color: "#949494" }, onClick: this.showList.bind(this, "List", "id-01") },
                            React.createElement("i", { className: "iconfont companyInfoicon" }, "\uE83B"),
                            React.createElement("span", null, "\u8FD4\u56DE")),
                        React.createElement("p", { className: "companyGoHomeRight" },
                            React.createElement("i", { className: this.state.iconfont, style: { "fontSize": "5rem", "color": "#C0C0C0" }, onClick: this.toggleFold.bind(this) }, "\uE849"))),
                    React.createElement("ul", { className: this.state.companyInfoul },
                        React.createElement("li", { className: this.state.infoli == 0 ? "companyInfoli-active" : "companyInfoli", onClick: this.infoClick.bind(this, 0) }, "\u4F01\u4E1A\u4FE1\u606F"),
                        React.createElement("li", { className: this.state.infoli == 1 ? "companyInfoli-active" : "companyInfoli", onClick: this.infoClick.bind(this, 1) }, "\u4F01\u4E1A\u98CE\u91C7"),
                        React.createElement("li", { className: this.state.infoli == 2 ? "companyInfoli-active" : "companyInfoli", onClick: this.infoClick.bind(this, 2) }, "\u4F01\u4E1A\u8BE6\u60C5"),
                        React.createElement("li", { className: this.state.infoli == 3 ? "companyInfoli-active" : "companyInfoli", onClick: this.infoClick.bind(this, 3) }, "\u4EA7\u54C1\u5C55\u793A")),
                    React.createElement("div", { className: "infoContain" },
                        React.createElement("div", { className: this.state.infoli == 0 ? "show" : "hide" },
                            React.createElement(CompanyInfos, null)),
                        React.createElement("div", { className: this.state.infoli == 1 ? "show" : "hide" },
                            React.createElement(Mien, null)),
                        React.createElement("div", { className: this.state.infoli == 2 ? "show" : "hide" },
                            React.createElement(Details, null)),
                        React.createElement("div", { className: this.state.infoli == 3 ? "show" : "hide" },
                            React.createElement(Product, null))))));
        }
    }
    class CompanyInfos extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                imgurl: "",
                name: "",
                address: "",
                type: "",
                man: "",
                tel: "",
                http: ""
            };
            CompanyInfos.setCompanyinfos = this.setCompanyinfos.bind(this);
        }
        componentDidMount() { }
        static setCompanyinfos(data) { }
        setCompanyinfos(data) {
            console.log("setCompanyinfoCCCCCCCCCCC", data);
            this.setState({
                imgurl: data.response.headimageurl,
                name: data.response.name,
                address: data.response.address,
                type: data.response.company_type,
                man: data.response.contact,
                tel: data.response.phone,
                http: data.response.website,
            });
        }
        render() {
            if (!this.state.imgurl) {
                return (React.createElement("div", { className: "infos" },
                    React.createElement("img", { src: "./park_m/image/i.png" }),
                    React.createElement("div", { className: "ifosRight" },
                        React.createElement("h4", { className: "infos-1" },
                            this.state.name,
                            " "),
                        React.createElement("h5", { className: "infos-2" },
                            React.createElement("i", { className: "iconfont", style: { "fontSize": "3rem" } }, "\uE815"),
                            this.state.address),
                        React.createElement("p", { className: "infos-3" }, this.state.type),
                        React.createElement("p", { className: "infos-4" },
                            React.createElement("span", null, "\u8054\u7CFB\u4EBA"),
                            React.createElement("span", null, this.state.man)),
                        React.createElement("p", { className: "infos-5" },
                            React.createElement("span", null, "\u8054\u7CFB\u7535\u8BDD"),
                            React.createElement("span", null, this.state.tel)),
                        React.createElement("p", { className: "infos-6" },
                            React.createElement("span", null, "\u4F01\u4E1A\u5B98\u7F51"),
                            React.createElement("span", null, this.state.http)))));
            }
            else {
                return (React.createElement("div", { className: "infos" },
                    React.createElement("img", { src: this.state.imgurl }),
                    React.createElement("div", { className: "ifosRight" },
                        React.createElement("h4", { className: "infos-1" },
                            this.state.name,
                            " "),
                        React.createElement("h5", { className: "infos-2" },
                            React.createElement("i", { className: "iconfont", style: { "fontSize": "3rem", "margin-right": "1rem" } }, "\uE815"),
                            this.state.address),
                        React.createElement("p", { className: "infos-3" }, this.state.type),
                        React.createElement("p", { className: "infos-4" },
                            React.createElement("span", null, "\u8054\u7CFB\u4EBA"),
                            React.createElement("span", null, this.state.man)),
                        React.createElement("p", { className: "infos-5" },
                            React.createElement("span", null, "\u8054\u7CFB\u7535\u8BDD"),
                            React.createElement("span", null, this.state.tel)),
                        React.createElement("p", { className: "infos-6" },
                            React.createElement("span", null, "\u4F01\u4E1A\u5B98\u7F51"),
                            React.createElement("span", null, this.state.http)))));
            }
        }
    }
    class Mien extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                mienImg: [],
                data: ['1', '2', '3', '4', '5', '6', '7'],
                imgHeight: 176,
                slideIndex: 0,
                urlNull: "hide",
                urlShow: "hide",
            };
            Mien.setCompanymien = this.setCompanymien.bind(this);
        }
        componentDidMount() {
            setTimeout(() => {
                this.setState({
                    data: ['1', '2', '3', '4', '5', '6', '7'],
                });
            }, 100);
        }
        static setCompanymien(data) { }
        setCompanymien(data) {
            let picurl = [];
            console.log("setCompanyMienMMMMM", data);
            $.each(data.response.elegant, function (index, item) {
                picurl.push(item.pic_url);
            });
            if (data.response.elegant.length == 0) {
                this.setState({
                    urlNull: "show",
                    urlShow: "hide",
                });
            }
            else {
                this.setState({
                    mienImg: data.response.elegant,
                    mienImgLength: data.response.elegant.length,
                    data: picurl,
                    urlNull: "hide",
                    urlShow: "show"
                });
            }
            console.log("ssss", this.state);
        }
        render() {
            return (React.createElement("div", { className: "mien" },
                React.createElement("p", { className: this.state.urlNull, style: { "color": "#333333", "text-align": "center", "font-size": "2.5rem" } }, "\u6682\u65E0\u56FE\u7247\u00B7\u00B7\u00B7"),
                React.createElement("div", { className: this.state.urlShow },
                    React.createElement(antd_mobile_8.WingBlank, null,
                        React.createElement(antd_mobile_8.Carousel, { className: "space-carousel", frameOverflow: "visible", cellSpacing: 10, slideWidth: 0.8, autoplay: true, infinite: true, afterChange: index => this.setState({ slideIndex: index }) }, this.state.data.map((val, index) => (React.createElement("img", { src: val, alt: "", style: { width: '100%', verticalAlign: 'top' }, onLoad: () => {
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                            } }))))))));
        }
    }
    class Details extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                text: "",
                textArr: [],
                detailsNull: "hide",
                detailsShow: "hide"
            };
            Details.setCompanydetails = this.setCompanydetails.bind(this);
        }
        componentDidMount() { }
        static setCompanydetails(data) { }
        setCompanydetails(data) {
            console.log("setCompanyDetailsDDDDD", data);
            if (data.response.descript) {
                let descriptN = data.response.descript;
                descriptN.replace(/&#10;/, "<br />&nbsp;");
                let descriptArr = descriptN.split("    ");
                this.setState({
                    text: descriptN,
                    textArr: descriptArr,
                    detailsNull: "hide",
                    detailsShow: "show"
                });
            }
            else {
                this.setState({
                    detailsNull: "show",
                    detailsShow: "hide"
                });
            }
            console.log(this.state);
        }
        render() {
            return (React.createElement("div", { className: "details" },
                React.createElement("p", { className: this.state.detailsNull, style: { "color": "#333333", "text-align": "center" } }, "\u6682\u65E0\u4F01\u4E1A\u8BE6\u60C5\u4FE1\u606F\u00B7\u00B7\u00B7"),
                React.createElement("div", { className: this.state.detailsShow }, this.state.textArr.map((i, index) => {
                    return (React.createElement("p", { style: { "white-space": "pre-line", "text-indent": "5rem" } }, i));
                }))));
        }
    }
    class Product extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                productImg: [],
                urlNull: "hide",
                data: ['1', '2', '3', '4', '5', '6', '7'],
                imgHeight: 176,
                slideIndex: 0,
                urlShow: "hide",
            };
            Product.setCompanyproduct = this.setCompanyproduct.bind(this);
        }
        componentDidMount() {
            setTimeout(() => {
                this.setState({
                    data: ['1', '2', '3', '4', '5', '6', '7'],
                });
            }, 100);
        }
        static setCompanyproduct(data) { }
        setCompanyproduct(data) {
            console.log("setCompanyproductPPPP", data);
            let picurl = [];
            $.each(data.response.product, function (index, item) {
                console.log("ddddddddddd", item.pic_url);
                picurl.push(item.pic_url);
            });
            if (data.response.product.length == 0) {
                this.setState({
                    productImg: data.response.product,
                    urlNull: "show",
                    urlShow: "hide",
                });
            }
            else {
                this.setState({
                    productImg: data.response.product,
                    urlNull: "hide",
                    urlShow: "show",
                    data: picurl,
                });
            }
            console.log("666666666", this.state);
        }
        render() {
            return (React.createElement("div", { className: "product" },
                React.createElement("p", { className: this.state.urlNull, style: { "color": "#333333", "text-align": "center", "font-size": "2.5rem" } }, "\u6682\u65E0\u56FE\u7247\u00B7\u00B7\u00B7"),
                React.createElement("div", { className: this.state.urlShow },
                    React.createElement(antd_mobile_8.WingBlank, null,
                        React.createElement(antd_mobile_8.Carousel, { className: "space-carousel", frameOverflow: "visible", cellSpacing: 10, slideWidth: 0.8, autoplay: true, infinite: true, afterChange: index => this.setState({ slideIndex: index }) }, this.state.data.map((val, index) => (React.createElement("img", { src: val, alt: "", style: { width: '100%', verticalAlign: 'top' }, onLoad: () => {
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                            } }))))))));
        }
    }
    exports.default = ParkCompany;
});
define("photograph", ["require", "exports", "react", "react-router-dom", "dataService", "antd-mobile", "antd-mobile", "css!./styles/resetAntdMobile.css"], function (require, exports, React, RouterDOM, dataService_13, antd_mobile_9, antd_mobile_10) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Photograph extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                Photographcss: "photograph",
                showList: true,
                showInfo: false,
                showLoad: false,
                companyInfotit: "companyInfotit",
            };
            Photograph.toggleView = this.toggleView.bind(this);
            Photograph.getXY = this.getXY.bind(this);
        }
        static toggleView(a, e, n) { }
        ;
        toggleView(a, e, n) {
            console.log("fp", a);
            console.log("fp", e);
            console.log("fp", n);
            if (a == "Info") {
                this.setState({
                    showList: false,
                    showInfo: true,
                    showLoad: false,
                    companyInfotit: "hide"
                });
            }
            else if (a == "Load") {
                this.setState({
                    showList: false,
                    showInfo: false,
                    showLoad: true,
                    companyInfotit: "companyInfotit",
                });
            }
            else {
                this.setState({
                    showList: true,
                    showInfo: false,
                    showLoad: false,
                    companyInfotit: "companyInfotit",
                });
            }
        }
        static getXY(x, y) { }
        ;
        getXY(x, y) {
            IllegalUpload.getXY(x, y);
        }
        render() {
            return (React.createElement("div", { className: this.state.Photographcss },
                React.createElement("p", { className: this.state.companyInfotit },
                    React.createElement("span", null, "\u968F\u624B\u62CD")),
                React.createElement("div", { className: this.state.showList == true ? "show" : "hide" },
                    React.createElement(IllegalList, null)),
                React.createElement("div", { className: this.state.showInfo == true ? "show" : "hide" },
                    React.createElement(IllegalInfo, null)),
                React.createElement("div", { className: this.state.showLoad == true ? "show" : "hide" },
                    React.createElement(IllegalUpload, null))));
        }
    }
    exports.default = Photograph;
    class IllegalList extends React.Component {
        constructor(props) {
            super(props);
            this.dataService = new dataService_13.default();
            this.state = {
                park_id: "1009",
                iconfont: "iconfont iconfont-unturn",
                illegalListcss: "illegalList-part",
                indexOf: 0,
                illegalul: "illegalul",
                inputValue: "",
                illegalList: [],
            };
            this.setillList = this.setillList.bind(this);
        }
        componentDidMount() {
            this.dataService.getTakingPhotos(this.setillList, this.state.park_id, "");
        }
        setillList(data) {
            this.setState({
                illegalList: data.response,
            });
        }
        changeList(event) {
            this.setState({
                inputValue: event.target.value,
            });
        }
        queryKeyDownHandler(e) {
            switch (e.keyCode) {
                case 13:
                    this.dataService.getTakingPhotos(this.setillList, this.state.park_id, this.state.inputValue);
                    break;
            }
        }
        searchList() {
        }
        showPart(a, id, name, e) {
            Photograph.toggleView(a, id, name);
            console.log("more", a, id, name);
            IllegalInfo.getillInfo(id, name);
        }
        toggleFold() {
            console.log("tftft", this.state.illegalListcss);
            if (this.state.illegalListcss == "illegalList-part") {
                this.setState({
                    illegalListcss: "illegalList-all",
                    illegalul: "illegalul-all"
                });
            }
            else {
                this.setState({
                    illegalListcss: "illegalList-part",
                    illegalul: "illegalul"
                });
            }
            if (this.state.iconfont == "iconfont iconfont-unturn") {
                this.setState({
                    iconfont: "iconfont iconfont-turn",
                });
            }
            else {
                this.setState({
                    iconfont: "iconfont iconfont-unturn",
                });
            }
        }
        illegalActive(indexof, name, id) {
            this.setState({
                indexOf: indexof,
            });
        }
        render() {
            return (React.createElement("div", { className: this.state.illegalListcss },
                React.createElement("div", { className: "foleBtn" },
                    React.createElement(RouterDOM.Link, { to: "/home" },
                        React.createElement("p", { className: "companyGoHomeLeft", style: { color: "#949494" } },
                            React.createElement("i", { className: "iconfont companyInfoicon" }, "\uE83B"),
                            React.createElement("span", null, "\u8FD4\u56DE"))),
                    React.createElement("p", { className: "companyGoHomeRight" },
                        React.createElement("i", { className: this.state.iconfont, style: { "fontSize": "5rem", "color": "#C0C0C0" }, onClick: this.toggleFold.bind(this) }, "\uE849"))),
                React.createElement("ul", { className: this.state.illegalul }, this.state.illegalList.map((i, index) => {
                    return (React.createElement("li", { onClick: this.illegalActive.bind(this, index), className: this.state.indexOf == index ? "illegalli-active" : "illegalli" },
                        React.createElement("div", { className: "illegamgback" },
                            React.createElement("img", { src: i.photo })),
                        React.createElement("div", { className: "illegalul-middle " },
                            React.createElement("p", { className: this.state.indexOf == index ? "illegalType-active" : "illegalType", style: { "font-size": "2.4rem", "overflow": "hidden", "text-overflow": "ellipsis", "white-space": "nowrap" } }, i.type),
                            React.createElement("p", { style: { "font-size": "2.3rem" } }, i.time),
                            React.createElement("p", { style: { "font-size": "2.3rem" } },
                                React.createElement("i", { className: "iconfont", style: { "fontSize": "3rem", "margin-right": "1rem" } }, "\uE82B"),
                                i.car_license),
                            React.createElement("p", { style: { "font-size": "2.3rem", "overflow": "hidden", "text-overflow": "ellipsis", "white-space": "nowrap" } },
                                React.createElement("i", { className: "iconfont", style: { "fontSize": "3rem", "margin-right": "1rem" } }, "\uE82C"),
                                i.position),
                            React.createElement("p", { onClick: this.showPart.bind(this, "Info", i.id, i.car_license), style: { "font-size": "2.3rem", "float": "right", "color": "#fff" } },
                                "\u66F4\u591A",
                                React.createElement("i", { className: "iconfont", style: { "fontSize": "2rem" } }, "\uE827")))));
                })),
                React.createElement("div", { className: "illBottombox" },
                    React.createElement("div", { className: "illegalBox" },
                        React.createElement("span", { className: "searchBox-text" },
                            React.createElement("i", { className: "iconfont", style: { "fontSize": "2.3rem" } }, "\uE810"),
                            React.createElement("input", { className: "companySearch", type: "search", placeholder: "\u8BF7\u8F93\u5165\u8F66\u724C\u53F7", onChange: this.changeList.bind(this), onKeyDown: this.queryKeyDownHandler.bind(this) })))),
                React.createElement("span", { className: "illegalLoadBtn", onClick: this.showPart.bind(this, "Load") }, "\u968F\u624B\u62CD")));
        }
    }
    class IllegalUpload extends React.Component {
        constructor(props) {
            super(props);
            this.dataService = new dataService_13.default();
            this.onChange = (files, type, index) => {
                console.log(files, type, index);
                this.setState({
                    files,
                });
            };
            this.onSegChange = (e) => {
                const index = e.nativeEvent.selectedSegmentIndex;
                this.setState({
                    multiple: index === 1,
                });
            };
            this.state = {
                timeShow: "",
                files: [],
                multiple: false,
                illcauseBox: "hide",
                illegalLoadcss: "illegalLoad-part",
                illfromcss: "illfrom-part illfrom",
                illTime: "",
                illImg: "./park_m/image/photo.png",
                illcauseUL: [],
                indexOf: 0,
                illcauseInname: "",
                illcauseInid: "",
                iconfont: "iconfont iconfont-unturn",
                park_id: "1001",
                car_license: "",
                time: "",
                position: "",
                longitude: "",
                latitude: "",
                type_id: "",
                type_name: "",
                type_id_in: "",
                type_name_in: "",
                descript: "",
                photo: "",
            };
            IllegalUpload.getXY = this.getXY.bind(this);
            this.setillcauseUL = this.setillcauseUL.bind(this);
            this.showList = this.showList.bind(this);
            this.sumbitIllsuccess = this.sumbitIllsuccess.bind(this);
        }
        componentDidMount() {
            this.dataService.getTakingPhotosType(this.setillcauseUL, this.state.park_id);
        }
        setillcauseUL(data) {
            this.setState({
                illcauseUL: data.response,
            });
        }
        showList(a, e, n) {
            Photograph.toggleView(a, e, n);
        }
        toggleFold() {
            console.log("tftft");
            if (this.state.illegalLoadcss == "illegalLoad-all") {
                this.setState({
                    illegalLoadcss: "illegalLoad-part ",
                    illfromcss: "illfrom-part illfrom"
                });
            }
            else {
                this.setState({
                    illegalLoadcss: "illegalLoad-all",
                    illfromcss: "illfrom-all illfrom"
                });
            }
            if (this.state.iconfont == "iconfont iconfont-unturn") {
                this.setState({
                    iconfont: "iconfont iconfont-turn",
                });
            }
            else {
                this.setState({
                    iconfont: "iconfont iconfont-unturn",
                });
            }
        }
        illimgClick() {
            this.illimginputClick();
        }
        illimginputClick() {
            console.log("2323", this);
        }
        showillcauseUL() {
            this.setState({
                illcauseBox: "rollSelectCauseBox",
                type_id_in: this.state.illcauseUL[this.state.indexOf].id,
                type_name_in: this.state.illcauseUL[this.state.indexOf].name,
            });
        }
        illCuased(i, id, name) {
            this.setState({
                type_id_in: id,
                type_name_in: name,
                indexOf: i,
            });
        }
        getillcause() {
            this.setState({
                illcauseBox: "hide",
                type_id: this.state.type_id_in,
                type_name: this.state.type_name_in,
            });
        }
        hideillcauseUL() {
            this.setState({
                illcauseBox: "hide",
            });
        }
        illposition(event) {
            this.setState({
                position: event.target.value
            });
        }
        static getXY(x, y) { }
        ;
        getXY(x, y) {
            console.log("外部传入经纬度", x, y);
            this.setState({
                longitude: x,
                latitude: y,
                position: "请输入位置点名称"
            });
        }
        illcarLicense(event) {
            this.setState({
                car_license: event.target.value
            });
        }
        illdescript(event) {
            this.setState({
                descript: event.target.value
            });
        }
        p(s) {
            return s < 10 ? '0' + s : s;
        }
        getTime(date) {
            const d = new Date(date);
            const resDate = d.getFullYear() + '-' + this.p((d.getMonth() + 1)) + '-' + this.p(d.getDate());
            const resTime = this.p(d.getHours()) + ':' + this.p(d.getMinutes()) + ':' + this.p(d.getSeconds());
            const timeD = resDate + " " + resTime;
            console.log("start输入index656", timeD);
            this.setState({
                timeShow: date,
                time: timeD,
            });
        }
        sumbitIllfrom() {
            console.log("sumbit", this.state);
            if (this.state.files.length == 0) {
                antd_mobile_10.Toast.info('请提交违规照片', 2);
            }
            else if (this.state.type_id == "") {
                antd_mobile_10.Toast.info('请选择曝光类型', 2);
            }
            else if (this.state.position == "") {
                antd_mobile_10.Toast.info('请输入曝光位置', 2);
            }
            else if (this.state.car_license == "") {
                antd_mobile_10.Toast.info('请输入违规车牌号', 2);
            }
            else if (this.state.time == "") {
                antd_mobile_10.Toast.info('请填写曝光时间', 2);
            }
            else if (this.state.descript == "") {
                antd_mobile_10.Toast.info('请描述违规问题', 2);
            }
            else {
                this.dataService.postTakingPhotoInfo(this.sumbitIllsuccess, this.state);
            }
        }
        sumbitIllsuccess(data) {
            antd_mobile_10.Toast.info(data, 2);
            this.setState({
                car_license: "",
                time: "",
                position: "",
                longitude: "",
                latitude: "",
                type_id: "",
                type_name: "",
                descript: "",
                photo: "",
                files: [],
                timeShow: "",
            });
        }
        render() {
            return (React.createElement("div", null,
                React.createElement("p", { className: "companyInfotit" },
                    React.createElement("span", null, "\u968F\u624B\u62CD")),
                React.createElement("div", { className: this.state.illegalLoadcss },
                    React.createElement("div", { className: "foleBtn" },
                        React.createElement("p", { className: "companyGoHomeLeft", style: { color: "#949494" }, onClick: this.showList.bind(this, "List", "i.id") },
                            React.createElement("i", { className: "iconfont companyInfoicon" }, "\uE83B"),
                            React.createElement("span", null, "\u8FD4\u56DE")),
                        React.createElement("p", { className: "companyGoHomeRight" },
                            React.createElement("i", { className: this.state.iconfont, style: { "fontSize": "5rem", "color": "#C0C0C0" }, onClick: this.toggleFold.bind(this) }, "\uE849"))),
                    React.createElement("form", null,
                        React.createElement("ul", { className: this.state.illfromcss },
                            React.createElement("li", null,
                                React.createElement("span", { className: "redStar" }, "*"),
                                " \u8FDD\u89C4\u7167\u7247",
                                React.createElement("div", { className: "imgCom" },
                                    React.createElement(antd_mobile_9.WingBlank, null,
                                        React.createElement(antd_mobile_9.ImagePicker, { files: this.state.files, onChange: this.onChange, onImageClick: (index, fs) => console.log(index, fs), selectable: this.state.files.length < 1, multiple: this.state.multiple })))),
                            React.createElement("li", null,
                                React.createElement("span", { className: "redStar" }, "*"),
                                " \u66DD\u5149\u7C7B\u578B",
                                React.createElement("span", { onClick: this.showillcauseUL.bind(this) },
                                    React.createElement("input", { type: "text", className: "getillType", value: this.state.type_name, placeholder: "\u8BF7\u9009\u62E9\u66DD\u5149\u7C7B\u578B" }),
                                    React.createElement("span", { className: "iconfont", style: { "fontSize": "3rem", "float": "right", " padding": " 0 0 0 3rem", "padding": " 0 0 0 4rem" } }, "\uE827"))),
                            React.createElement("li", null,
                                React.createElement("span", { className: "redStar" }, "*"),
                                "  \u5730\u5740",
                                React.createElement("input", { type: "text", value: this.state.position, className: "getillAdd", placeholder: "\u8BF7\u8F93\u5165\u66DD\u5149\u4F4D\u7F6E", onChange: this.illposition.bind(this) }),
                                React.createElement("i", { className: "iconfont", style: { "fontSize": "3rem", "color": "#0B8BF0", "float": "right", "padding": " 0 0 0 4rem" } }, "\uE82C")),
                            React.createElement("li", null,
                                React.createElement("span", { className: "redStar" }, "*"),
                                " \u8F66\u724C",
                                React.createElement("input", { type: "text", value: this.state.car_license, className: "getillNum", placeholder: "\u8BF7\u8F93\u5165\u8FDD\u89C4\u8F66\u724C\u53F7", onChange: this.illcarLicense.bind(this) })),
                            React.createElement("li", null,
                                React.createElement("span", { className: "redStar" }, "*"),
                                React.createElement("div", { style: { "fonSize": "2.5rem", "float": "right", "position": "relative", "top": "-0.5rem", "left": "-0.5rem" }, className: "mDate" },
                                    React.createElement(antd_mobile_10.DatePicker, { value: this.state.timeShow, onChange: this.getTime.bind(this) },
                                        React.createElement(antd_mobile_10.List.Item, { arrow: "horizontal" }, "\u66DD\u5149\u65F6\u95F4")))),
                            React.createElement("li", null,
                                React.createElement("span", { className: "redStar" }, "*"),
                                " \u8FDD\u89C4\u63CF\u8FF0"),
                            React.createElement("li", null,
                                React.createElement("textarea", { className: "getilltextarea", value: this.state.descript, placeholder: "\u8BF7\u5C06\u8FDD\u89C4\u95EE\u9898\u63CF\u8FF0\u51FA\u6765\u3002\uFF08120\u5B57\u5185\uFF09", onChange: this.illdescript.bind(this), style: { "margin-bottom": "10rem" } })),
                            React.createElement("div", { className: "illSumbit", onClick: this.sumbitIllfrom.bind(this) }, "\u63D0\u4EA4")))),
                React.createElement("div", { className: this.state.illcauseBox },
                    React.createElement("ul", { className: "rollSelectCauseULcss" }, this.state.illcauseUL.map((i, index) => {
                        return (React.createElement("li", { className: this.state.indexOf == index ? "rollSelectCauseli-active" : "rollSelectCauseli", onClick: this.illCuased.bind(this, index, i.id, i.name) }, i.name));
                    })),
                    React.createElement("div", { className: "rollSelectCuasedBtn" },
                        React.createElement("span", { className: "rollSelectCancel", onClick: this.hideillcauseUL.bind(this) }, "\u53D6\u6D88"),
                        React.createElement("span", { className: "rollSelectConfirm", onClick: this.getillcause.bind(this) }, "\u786E\u8BA4")))));
        }
    }
    class IllegalInfo extends React.Component {
        constructor(props) {
            super(props);
            this.dataService = new dataService_13.default();
            this.state = {
                iconfont: "iconfont iconfont-turn",
                illegalInfocss: "illegalInfo-part",
                name: "",
                infoli: 0,
            };
            IllegalInfo.getillInfo = this.getillInfo.bind(this);
        }
        static getillInfo(id, name) { }
        ;
        getillInfo(id, name) {
            console.log(" 违规信息页", id, name);
            this.dataService.getTakingPhotoInfo(this.setillInfo, id);
            this.setState({
                name: name,
            });
        }
        setillInfo(data) {
            console.log("setillInfo", data);
            IllegalInfos.setIllinofs(data);
            IllegalImg.setIllimg(data);
        }
        showList(a, e, n) {
            Photograph.toggleView(a, e, n);
        }
        infoClick(indexof) {
            console.log("infoClick", indexof);
            this.setState({
                infoli: indexof,
            });
        }
        toggleFold() {
            console.log("tptp");
            if (this.state.illegalInfocss == "illegalInfo-part") {
                this.setState({
                    illegalInfocss: "illegalInfo-bottom",
                });
            }
            else {
                this.setState({
                    illegalInfocss: "illegalInfo-part",
                });
            }
            if (this.state.iconfont == "iconfont iconfont-unturn") {
                this.setState({
                    iconfont: "iconfont iconfont-turn",
                });
            }
            else {
                this.setState({
                    iconfont: "iconfont iconfont-unturn",
                });
            }
        }
        render() {
            return (React.createElement("div", null,
                React.createElement("p", { className: "companyInfotit" },
                    React.createElement("span", null,
                        this.state.name,
                        "\u8FDD\u89C4")),
                React.createElement("div", { className: this.state.illegalInfocss },
                    React.createElement("div", { className: "foleBtn" },
                        React.createElement("p", { className: "companyGoHomeLeft", style: { color: "#949494" }, onClick: this.showList.bind(this, "List", "id-01") },
                            React.createElement("i", { className: "iconfont companyInfoicon" }, "\uE83B"),
                            React.createElement("span", null, "\u8FD4\u56DE")),
                        React.createElement("p", { className: "companyGoHomeRight" },
                            React.createElement("i", { className: this.state.iconfont, style: { "fontSize": "5rem", "color": "#C0C0C0" }, onClick: this.toggleFold.bind(this) }, "\uE849"))),
                    React.createElement("div", { className: "leaseInfoul_br" },
                        React.createElement("ul", { className: "leaseInfoul", style: { "width": "44rem" } },
                            React.createElement("li", { className: this.state.infoli == 0 ? "leaseInfoli-active" : "leaseInfoli", onClick: this.infoClick.bind(this, 0) }, "\u8FDD\u89C4\u4FE1\u606F"),
                            React.createElement("li", { className: this.state.infoli == 1 ? "leaseInfoli-active" : "leaseInfoli", onClick: this.infoClick.bind(this, 1) }, "\u8FDD\u89C4\u7167\u7247"))),
                    React.createElement("div", { className: "leaseContain" },
                        React.createElement("div", { className: this.state.infoli == 0 ? "show" : "hide" },
                            React.createElement(IllegalInfos, null)),
                        React.createElement("div", { className: this.state.infoli == 1 ? "show" : "hide" },
                            React.createElement(IllegalImg, null))))));
        }
    }
    class IllegalInfos extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                IllegalLoadcss: "illegalLoad-part",
                type_name: "",
                time: "",
                car_license: "",
                position: "",
                descript: "",
            };
            IllegalInfos.setIllinofs = this.setIllinofs.bind(this);
        }
        componentDidMount() { }
        static setIllinofs(data) { }
        ;
        setIllinofs(data) {
            this.setState({
                type_name: data.response.type_name,
                time: data.response.time,
                car_license: data.response.car_license,
                position: data.response.position,
                descript: data.response.descript,
            });
        }
        showList(a, e, n) {
            Photograph.toggleView(a, e, n);
            this.setState({
                IllegalLoadcss: "illegalLoad-part",
            });
        }
        showLoad(a, e, n) {
            console.log("tftft");
            if (this.state.IllegalLoadcss == "illegalLoad") {
                this.setState({
                    IllegalLoadcss: "illegalLoad-part",
                });
            }
            else {
                this.setState({
                    IllegalLoadcss: "illegalLoad",
                });
            }
            Photograph.toggleView(a, e, n);
        }
        render() {
            return (React.createElement("div", { className: "illegalInfos" },
                React.createElement("p", null, this.state.type_name),
                React.createElement("p", null, this.state.time),
                React.createElement("p", null,
                    React.createElement("span", { className: "iconfont", style: { "fontSize": "3rem", "margin-right": "1rem" } }, "\uE82B"),
                    "\u8F66\u724C\uFF1A",
                    React.createElement("span", null, this.state.car_license)),
                React.createElement("p", null,
                    React.createElement("p", { style: { "float": "left", "font-weight": "normal" } },
                        React.createElement("span", { className: "iconfont", style: { "fontSize": "3rem", "margin-right": "1rem" } }, "\uE815"),
                        "\u4F4D\u7F6E\uFF1A"),
                    React.createElement("p", { style: { "width": "auto", "margin-left": "12rem" } }, this.state.position)),
                React.createElement("p", null, this.state.descript)));
        }
    }
    class IllegalImg extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                illegalImg: "",
            };
            IllegalImg.setIllimg = this.setIllimg.bind(this);
        }
        componentDidMount() { }
        static setIllimg(data) { }
        ;
        setIllimg(data) {
            this.setState({
                illegalImg: data.response.photo
            });
        }
        showList(a, e, n) {
            Photograph.toggleView(a, e, n);
            this.setState({
                IllegalLoadcss: "illegalLoad-part",
            });
        }
        showLoad(a, e, n) {
            console.log("tftft");
            Photograph.toggleView(a, e, n);
        }
        render() {
            return (React.createElement("div", { className: "illegalImg" },
                React.createElement("img", { src: this.state.illegalImg })));
        }
    }
});
define("infoArea", ["require", "exports", "react", "react-router-dom", "dataService", "css!./styles/infoArea.css"], function (require, exports, React, react_router_dom_3, dataService_14) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class InfoArea extends React.Component {
        constructor() {
            super(...arguments);
            this.state = {
                inputValue: "请输入主题",
                tagArr: ["咨询", "建议", "投诉", "其他"],
                listArr: [{ spread: true }, { spread: false }, { spread: false }, { spread: false }, { spread: false }, { spread: false }, { spread: false }, { spread: false }, { spread: false }],
                tagIndex: 0,
                content: { content: "", replylist: [{ username: "", time: "", content: "" }] }
            };
            this.dataService = new dataService_14.default();
        }
        componentDidMount() {
            this.getMicroCircleList();
            this.dataService.getMicroCircleType(this.callBackGetMicroCircleType.bind(this));
        }
        callBackGetMicroCircleType(data) {
            this.setState({ tagArr: JSON.parse(data).response });
        }
        callBackGetMicroCircleList(data) {
            let listArr = JSON.parse(data).response;
            listArr.forEach(item => {
                item.spread = false;
            });
            this.setState({ listArr: listArr });
            console.log(data);
        }
        callBackGetMicroCircleInfo(data) {
            this.setState({ content: JSON.parse(data).response });
        }
        getMicroCircleList() {
            let obj = {
                park_id: 1,
                type_id: this.state.tagIndex + 1
            };
            this.dataService.getMicroCircleList(this.callBackGetMicroCircleList.bind(this), obj);
        }
        foucus() {
            if (this.state.inputValue === "请输入主题") {
                this.setState({ inputValue: "" });
            }
        }
        blur() {
            if (this.state.inputValue === "") {
                this.setState({ inputValue: "请输入主题" });
            }
        }
        change(event) {
            this.setState({ inputValue: event.target.value });
        }
        clickTag(index) {
            this.setState({ tagIndex: index }, () => {
                this.getMicroCircleList();
            });
        }
        spread(index, id) {
            let listArr = this.state.listArr;
            listArr[index].spread = !listArr[index].spread;
            this.setState({ listArr: listArr });
            this.dataService.getMicroCircleInfo(this.callBackGetMicroCircleInfo.bind(this), id);
        }
        render() {
            return (React.createElement("div", { className: "infoarea" },
                React.createElement("div", { className: "infoarea-top" },
                    React.createElement("div", { className: "infoarea-child-top" },
                        React.createElement("input", { className: "infoarea-input", value: this.state.inputValue, onFocus: this.foucus.bind(this), onBlur: this.blur.bind(this), onChange: this.change.bind(this) }),
                        React.createElement("img", { src: "./park_m/image/search.png", className: "infoarea-search-img" }),
                        React.createElement("span", { className: "infoarea-sreach-bt" }, "\u641C\u7D22"))),
                React.createElement("div", { className: "infoarea-tag" }, this.state.tagArr.map((item, index) => {
                    return React.createElement("div", { key: index, className: index !== this.state.tagIndex ? "infoarea-tag-child" : "infoarea-tag-child-add", onClick: e => this.clickTag(index) }, item.name);
                })),
                React.createElement("div", { className: "infoarea-content" },
                    this.state.listArr.map((item, index) => {
                        return React.createElement("div", { className: item.spread ? "infoarea-content-child-bottom" : "infoarea-content-child", key: index }, item.spread ?
                            React.createElement("div", { style: { width: "100%", height: "100%" } },
                                React.createElement("div", { style: { height: "50%", width: "100%" } },
                                    React.createElement("div", { className: "infoarea-content-name" }, item.title),
                                    React.createElement("div", { className: "infoarea-content-bottom", onClick: e => this.spread(index, item.id) },
                                        React.createElement("img", { src: "./park_m/image/right.png", className: "infoarea-content-right-img" }))),
                                React.createElement("div", { className: "infoarea-br" },
                                    index !== 2 ?
                                        React.createElement("div", { className: "infoarea-br-bt" }, "\u5DF2\u89E3\u51B3") :
                                        React.createElement("div", { className: "infoarea-br-bt-add" }, "\u53D7\u7406\u4E2D"),
                                    React.createElement("div", { className: "infoarea-br-data" }, item.time)),
                                React.createElement("div", { style: { borderTop: "3px solid #F2F2F2", marginTop: "30px", marginRight: "50px" } }),
                                React.createElement("div", { style: { fontSize: "40px", color: "#949494", marginTop: "20px" } }, "\u7559\u8A00\u5185\u5BB9:"),
                                React.createElement("div", { style: { fontSize: "40px", color: "#333333", marginTop: "20px" } }, this.state.content.content),
                                React.createElement("div", { style: { fontSize: "40px", color: "#949494", marginTop: "30px" } }, "\u7559\u8A00\u56DE\u590D:"),
                                React.createElement("div", { style: { fontSize: "40px", marginTop: "20px" } },
                                    React.createElement("span", { style: { color: "#949494" } }, "\u7531"),
                                    React.createElement("span", { style: { fontWeight: "600", margin: "0 25px 0 25px" } }, this.state.content.replylist[0].username),
                                    React.createElement("span", { style: { color: "#949494" } }, "\u53D7\u7406\u4E8E"),
                                    React.createElement("span", { style: { color: "#333333", marginLeft: "25px" } }, this.state.content.replylist[0].time)),
                                React.createElement("div", { style: { fontSize: "40px", color: "#949494", marginTop: "20px" } }, "\u56DE\u590D\u5185\u5BB9:"),
                                React.createElement("div", { style: { fontSize: "40px", color: "#333333", marginTop: "20px", marginBottom: "150px" } }, this.state.content.replylist[0].content)) :
                            React.createElement("div", { style: { width: "100%", height: "100%" } },
                                React.createElement("div", { style: { height: "50%", width: "100%" } },
                                    React.createElement("div", { className: "infoarea-content-name" }, item.title),
                                    React.createElement("div", { className: "infoarea-content-right", onClick: e => this.spread(index, item.id) },
                                        React.createElement("img", { src: "./park_m/image/right.png", className: "infoarea-content-right-img" }))),
                                React.createElement("div", { className: "infoarea-br" },
                                    index !== 2 ?
                                        React.createElement("div", { className: "infoarea-br-bt" }, "\u5DF2\u89E3\u51B3") :
                                        React.createElement("div", { className: "infoarea-br-bt-add" }, "\u53D7\u7406\u4E2D"),
                                    React.createElement("div", { className: "infoarea-br-data" }, item.time))));
                    }),
                    this.state.listArr.length > 0 ?
                        React.createElement("div", { style: { width: "100%", height: "30%", textAlign: "center", fontSize: "40px", lineHeight: "60px", margin: "20px 0 0 -25px" } }, "\u5230\u5E95\u5566~") :
                        React.createElement("div", { style: { width: "100%", height: "30%", textAlign: "center", fontSize: "40px", lineHeight: "60px", margin: "20px 0 0 -25px" } }, "\u6682\u65E0\u5339\u914D\u6570\u636E")),
                React.createElement(react_router_dom_3.Link, { to: "/isay" },
                    React.createElement("div", { className: "infoarea-add-c" },
                        React.createElement("img", { src: "./park_m/image/add.png", width: "60px", height: "60px" })))));
        }
    }
    exports.default = InfoArea;
});
define("information", ["require", "exports", "react", "dataService", "css!./styles/information.css"], function (require, exports, React, dataService_15) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Information extends React.Component {
        constructor() {
            super(...arguments);
            this.state = {
                headline: [{ name: "" }],
                informationList: [
                    { name: "优惠政策", imgUrl: "./park_m/image/preferentialPolicy.png" }, { name: "园区咨询", imgUrl: "./park_m/image/information.png" },
                    { name: "园区活动", imgUrl: "./park_m/image/activity.png" }, { name: "第三方服务", imgUrl: "./park_m/image/thirdParty.png" }
                ]
            };
            this.props = {
                history: this.props.history
            };
            this.dataService = new dataService_15.default();
        }
        componentDidMount() {
            this.dataService.getHeadlines(this.callBackGetHeadlines.bind(this), 1);
        }
        callBackGetHeadlines(data) {
            this.setState({ headline: JSON.parse(data).response });
        }
        goChild(index) {
            this.props.history.push({ pathname: "/home/informationChilds", state: { index: index } });
        }
        render() {
            return (React.createElement("div", { className: "information" },
                React.createElement("div", { className: "information-headline" },
                    React.createElement("div", { style: { float: "left", width: "25%", height: "100%" } },
                        React.createElement("img", { src: "./park_m/image/headline.png", style: { marginBottom: "14px" } })),
                    React.createElement("div", { style: { float: "left", width: "75%", height: "100%", textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" } }, this.state.headline[0].name)),
                React.createElement("div", { className: "information-content" }, this.state.informationList.map((item, index) => {
                    return (React.createElement("div", { className: "information-content-child", key: index, onClick: e => this.goChild(index) },
                        React.createElement("img", { src: item.imgUrl, width: "130px", height: "130px" }),
                        React.createElement("div", { style: { marginTop: "20px" } }, item.name)));
                }))));
        }
    }
    exports.default = Information;
});
define("personalCenter", ["require", "exports", "react", "react-router-dom", "antd-mobile", "dataService", "css!./styles/personalCenter.css"], function (require, exports, React, react_router_dom_4, antd_mobile_11, dataService_16) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class PersonalCenter extends React.Component {
        constructor() {
            super(...arguments);
            this.props = {
                history: this.props.history
            };
            this.state = {
                parkList: [
                    { name: "统计报表", imgUrl: "./park_m/image/statistics.png", url: "/statisticalStatement" }, { name: "房间管理", imgUrl: "./park_m/image/room.png", url: "/room" },
                    { name: "租用到期", imgUrl: "./park_m/image/rent_expire.png", url: "/roomRent" }
                ],
                isSpread: true,
                userInfo: { name: "", avatar: "", phone: "", enterprise: "", roles: { role_id: "", role_name: "" } },
                pathname: "",
                messagelength: 0,
                workOrderLength: 0,
                enterprise: "kkfckfc",
                enterpriseId: "",
                companyBox: "hide",
                companyUL: [],
                companyIndexof: -1,
                company_id_in: "",
                company_name_in: "",
                company_id: "",
                company_name: "",
                inputValueRelate: "",
                companyNull: "hide",
            };
            this.dataService = new dataService_16.default();
        }
        componentDidMount() {
            console.log("enterprise", sessionStorage.getItem("enterprise"));
            let obj = {
                id: JSON.parse(sessionStorage.getItem("userInfos")).userId,
                work_type: "",
                state_type: "",
            };
            this.dataService.getMyMsgInfo(this.callBackGetMyMsgInfo.bind(this), "");
            this.dataService.getMyWork(this.callBackGetMyWork.bind(this), obj);
            let data = sessionStorage.getItem("userInfos");
            let dataObj = JSON.parse(data);
            this.setState({
                userInfo: JSON.parse(sessionStorage.getItem("userInfos")),
                pathname: this.props.history.location.pathname,
                enterprise: sessionStorage.getItem("enterprise"),
                enterpriseId: sessionStorage.getItem("enterpriseId"),
            });
        }
        callBackGetMyMsgInfo(data) {
            this.setState({ messagelength: data.response.length });
        }
        callBackGetMyWork(data) {
            this.setState({ workOrderLength: data.response ? data.response.length : 0 });
        }
        callBackGetRoleType(data) {
            console.log(data);
        }
        spread() {
            this.setState({ isSpread: !this.state.isSpread });
        }
        phoneChange() {
            let reg01 = /^1[3456789]\d{9}$/;
            var phoneNew = prompt("请输入新的手机号", "");
            if (phoneNew != null && phoneNew != "") {
                if (reg01.test(phoneNew)) {
                    console.log("phoneNew", phoneNew);
                    this.dataService.modifyUserInfo(this.callBackPhoneNew.bind(this), this.state.userInfo.name, phoneNew, this.state.enterpriseId);
                }
                else {
                    antd_mobile_11.Toast.info('手机号码不正确', 2);
                }
            }
        }
        callBackPhoneNew(data) {
            let userInfos = JSON.parse(sessionStorage.getItem("userInfos"));
            userInfos.phone = data.response.phone;
            sessionStorage.setItem("userInfos", JSON.stringify(userInfos));
            this.setState({
                userInfo: JSON.parse(sessionStorage.getItem("userInfos")),
            });
        }
        showCompanyList() {
            console.log("show公司列表");
            this.setState({
                companyBox: "rollSelectCauseBox2",
            });
            this.dataService.findCompany(this.setCompanyList.bind(this), "", "");
        }
        setCompanyList(data) {
            console.log("mmmmmmmmmmmmm", data.response);
            if (data.response.length == 0) {
                this.setState({
                    companyNull: "show",
                    companyUL: data.response
                });
            }
            else {
                this.setState({
                    companyNull: "hide",
                    companyUL: data.response
                });
            }
        }
        hideCompanyBox() {
            this.setState({
                companyBox: "hide",
            }, () => {
                console.log("hide", this.state.company_id, this.state.company_name);
            });
        }
        getCompanyBox() {
            if (this.state.company_id_in == '') {
                this.setState({
                    companyBox: "hide",
                    company_id: this.state.enterpriseId,
                    company_name: this.state.enterprise,
                });
            }
            else {
                this.setState({
                    companyBox: "hide",
                    company_id: this.state.company_id_in,
                    company_name: this.state.company_name_in,
                }, () => {
                    this.dataService.modifyUserInfo(this.callBackModifyCompanyName.bind(this), this.state.userInfo.name, this.state.userInfo.phone, this.state.company_id);
                });
            }
        }
        callBackModifyCompanyName(data) {
            antd_mobile_11.Toast.info(data.err_msg, 2);
            this.setState({
                enterprise: data.response.name,
                company_id: data.response.company_id
            });
            sessionStorage.setItem("enterprise", data.response.name);
            sessionStorage.setItem("enterpriseId", data.response.company_id);
            let userInfos = JSON.parse(sessionStorage.getItem("userInfos"));
            userInfos.enterprise = data.response.name;
            userInfos.enterpriseId = data.response.company_id;
            userInfos.enterprises[0].name = data.response.name;
            userInfos.enterprises[0].id = data.response.company_id;
            sessionStorage.setItem("userInfos", JSON.stringify(userInfos));
        }
        inCompanyeList(i, id, name) {
            this.setState({
                companyIndexof: i,
                company_id_in: id,
                company_name_in: name,
            }, () => {
                console.log("选中的公司", this.state.company_id_in, this.state.company_name_in);
            });
        }
        foucusRelate() {
            if (this.state.inputValueRelate == " ") {
                this.setState({ inputValueRelate: "" });
            }
        }
        blurRelate(event) {
            if (this.state.inputValueRelate == "") {
                this.setState({ inputValueRelate: " " });
            }
        }
        changeRelate(event) {
            this.setState({ inputValueRelate: event.target.value });
        }
        queryKeyDownHandlerRelate(e) {
            switch (e.keyCode) {
                case 13:
                    this.searchCompany();
                    break;
            }
        }
        searchCompany() {
            if (this.state.inputValueRelate == "请输入企业名称") {
                this.setState({ inputValueRelate: "" });
            }
            ;
            console.log("searchBtn", this.state.inputValueRelate);
            this.dataService.findCompany(this.setCompanyList.bind(this), "", this.state.inputValueRelate);
        }
        onErrorHeadimageurl() {
            let userInfo = JSON.parse(sessionStorage.getItem("userInfos"));
            this.setState({
                userInfo: {
                    name: userInfo.name,
                    avatar: "./park_m/image/noImg.png",
                    phone: userInfo.phone,
                    enterprise: "",
                    roles: {
                        role_id: userInfo.roles.role_id,
                        role_name: userInfo.roles.role_name,
                    }
                },
            });
        }
        render() {
            return (React.createElement("div", { className: "personal-center" },
                React.createElement("div", { className: "personal-center-top" },
                    React.createElement("div", { className: "personal-center-info" },
                        React.createElement("div", { className: "personal-center-tx" },
                            React.createElement("img", { src: this.state.userInfo.avatar == null ? "./park_m/image/noImg.png" : this.state.userInfo.avatar, onError: this.onErrorHeadimageurl.bind(this), className: "personal-center-tx-img" })),
                        React.createElement("div", { style: { float: "left", color: "#FFFFFF", fontSize: "42px", margin: this.state.pathname === "/personalCenter" ? "45px 0 0 36px" : "10px 0 0 36px" } },
                            React.createElement("div", null, this.state.userInfo.name),
                            this.state.pathname === "/personalCenter" ? null :
                                React.createElement("div", { style: {
                                        color: "#83d5ff", fontSize: "27px", backgroundColor: "#2e9cf3", width: "160px",
                                        height: "50px", textAlign: "center", lineHeight: "50px", borderRadius: "30px", marginTop: "20px"
                                    } }, this.state.userInfo.roles.role_name)),
                        this.state.pathname === "/personalCenter" ? null :
                            React.createElement(react_router_dom_4.Link, { to: { pathname: "/modificationAuthentication", state: { name: this.state.userInfo.name } } },
                                React.createElement("div", { className: "personal-center-right" },
                                    React.createElement("img", { src: "./park_m/image/w-right.png" }))))),
                this.state.pathname === "/personalCenter" ?
                    React.createElement("div", null,
                        React.createElement("div", { className: "personal-center-tag", style: { margin: "0 50px 0 50px", fontWeight: "600" } },
                            "\u6211\u7684\u6536\u85CF ",
                            React.createElement("img", { src: "./park_m/image/right.png", style: { marginTop: "40px", float: "right" } })),
                        React.createElement("div", { className: "personal-center-tag", style: { margin: "0 50px 0 50px", fontWeight: "600" } },
                            "\u6D4F\u89C8\u8BB0\u5F55 ",
                            React.createElement("img", { src: "./park_m/image/right.png", style: { marginTop: "40px", float: "right" } })),
                        React.createElement("div", { className: "personal-center-tag", style: { margin: "0 50px 0 50px", fontWeight: "600" } },
                            "\u5BA2\u670D\u7535\u8BDD ",
                            React.createElement("span", { style: { float: "right" } }, "400-808-3066"))) : null,
                this.state.pathname !== "/personalCenter" ?
                    React.createElement("div", null,
                        React.createElement("div", { className: "personal-center-tag" },
                            React.createElement("span", { style: { margin: "0 50px 0 50px" } }, "\u624B\u673A\u53F7\u7801"),
                            React.createElement("span", null, this.state.userInfo.phone),
                            React.createElement("span", { style: { float: "right", marginRight: "50px", color: "#0B8BF0" }, onClick: this.phoneChange.bind(this) }, "\u4FEE\u6539")),
                        React.createElement("div", { className: "personal-center-tag" },
                            React.createElement("span", { style: { margin: "0 50px 0 50px" } }, "\u5173\u8054\u4F01\u4E1A"),
                            React.createElement("span", null, this.state.enterprise),
                            this.state.userInfo.roles.role_name !== "园区管理员" && this.state.userInfo.roles.role_name !== "企业管理员" ?
                                React.createElement("span", { style: { float: "right", marginRight: "50px", color: "#0B8BF0" }, onClick: this.showCompanyList.bind(this) }, "\u4FEE\u6539") : null),
                        React.createElement("div", { className: "personal-center-my" },
                            React.createElement(react_router_dom_4.Link, { to: this.state.userInfo.roles.role_name === "园区管理员" ? "/parkWorkOrder" : "/workOrder" },
                                React.createElement("div", { className: "personal-center-my-left" },
                                    React.createElement("div", { style: { fontSize: "40px", marginTop: "30px", color: "#333333" } }, this.state.workOrderLength),
                                    React.createElement("div", { style: { fontSize: "40px", marginTop: "5px", color: "#6C6C6C" } }, "\u6211\u7684\u5DE5\u5355"))),
                            React.createElement("div", { className: "personal-center-my-middle" }),
                            React.createElement(react_router_dom_4.Link, { to: "/message" },
                                React.createElement("div", { className: "personal-center-my-right" },
                                    React.createElement("div", { style: { fontSize: "40px", marginTop: "30px", color: "#333333" } }, this.state.messagelength),
                                    React.createElement("div", { style: { fontSize: "40px", marginTop: "5px", color: "#6C6C6C" } }, "\u6211\u7684\u6D88\u606F")))))
                    : null,
                this.state.userInfo.roles.role_name === "企业管理员" && this.state.pathname !== "/personalCenter" ?
                    React.createElement("div", { className: "personal-center-enterprise" },
                        React.createElement(react_router_dom_4.Link, { to: "/enterpriseInformation" },
                            React.createElement("div", { className: "personal-center-enterprise-child" },
                                React.createElement("img", { src: "./park_m/image/enterprise.png", width: "70px", height: "70px", style: { marginBottom: "10px" } }),
                                React.createElement("span", { style: { fontSize: "40px", color: "#333333", marginLeft: "30px" } }, "\u4F01\u4E1A\u4FE1\u606F\u7BA1\u7406"),
                                React.createElement("div", { style: { float: "right", height: "100%", width: "120px", textAlign: "center" } },
                                    React.createElement("img", { src: "./park_m/image/right.png" })))),
                        React.createElement(react_router_dom_4.Link, { to: "/rentRoom" },
                            React.createElement("div", { className: "personal-center-enterprise-child" },
                                React.createElement("img", { src: "./park_m/image/let.png", width: "70px", height: "70px", style: { marginBottom: "10px" } }),
                                React.createElement("span", { style: { fontSize: "40px", color: "#333333", marginLeft: "30px" } }, "\u79DF\u7528\u623F\u95F4\u7BA1\u7406"),
                                React.createElement("div", { style: { float: "right", height: "100%", width: "120px", textAlign: "center" } },
                                    React.createElement("img", { src: "./park_m/image/right.png" }))))) : null,
                this.state.userInfo.roles.role_name === "园区管理员" && this.state.pathname !== "/personalCenter" ?
                    React.createElement("div", { className: "personal-center-park" },
                        React.createElement("div", { className: "personal-center-enterprise-child", onClick: this.spread.bind(this) },
                            React.createElement("img", { src: "./park_m/image/park.png", width: "60px", height: "60px", style: { marginBottom: "10px" } }),
                            React.createElement("span", { style: { fontSize: "40px", color: "#333333", marginLeft: "30px" } }, "\u56ED\u533A\u7BA1\u7406"),
                            React.createElement("div", { style: { float: "right", height: "100%", width: "120px", textAlign: "center" } },
                                React.createElement("img", { src: "./park_m/image/right.png", className: this.state.isSpread ? "personal-center-bottom-img" : "" }))),
                        this.state.isSpread ?
                            React.createElement("div", { style: { backgroundColor: "#ffffff", overflow: "hidden", paddingTop: "30px" } }, this.state.parkList.map((item, index) => {
                                return (React.createElement(react_router_dom_4.Link, { to: item.url },
                                    React.createElement("div", { key: index, className: "personal-center-park-child" },
                                        React.createElement("img", { src: item.imgUrl, width: "110px", height: "110px" }),
                                        React.createElement("div", { style: { marginTop: "10px" } }, item.name))));
                            })) : null) : null,
                React.createElement("div", { className: this.state.companyBox },
                    React.createElement("div", { className: "searchBox" },
                        React.createElement("span", { className: "searchBox-text" },
                            React.createElement("i", { className: "iconfont", style: { "fontSize": "2.3rem" } }, "\uE810"),
                            React.createElement("input", { className: "companySearch", type: "search", placeholder: "\u8BF7\u8F93\u5165\u4F01\u4E1A\u540D\u79F0", value: this.state.inputValueRelate, onFocus: this.foucusRelate.bind(this), onBlur: this.blurRelate.bind(this), onChange: this.changeRelate.bind(this), onKeyDown: this.queryKeyDownHandlerRelate.bind(this) }))),
                    React.createElement("ul", { className: "rollSelectCauseULcss2" },
                        React.createElement("p", { className: this.state.companyNull, style: { "text-align": "center" } }, "\u6CA1\u6709\u7B26\u5408\u641C\u7D22\u6761\u4EF6\u7684\u7ED3\u679C\u00B7\u00B7\u00B7"),
                        this.state.companyUL.map((i, index) => {
                            return (React.createElement("li", { className: this.state.companyIndexof == index ? "rollSelectCauseli-active" : "rollSelectCauseli", onClick: this.inCompanyeList.bind(this, index, i.id, i.name) }, i.name));
                        })),
                    React.createElement("div", { className: "rollSelectCuasedBtn" },
                        React.createElement("span", { className: "rollSelectCancel", onClick: this.hideCompanyBox.bind(this) }, "\u53D6\u6D88"),
                        React.createElement("span", { className: "rollSelectConfirm", onClick: this.getCompanyBox.bind(this) }, "\u786E\u8BA4")))));
        }
    }
    exports.default = PersonalCenter;
});
define("repairsOnline", ["require", "exports", "react", "react-router-dom", "dataService", "compat", "antd-mobile", "css!./styles/resetAntdMobile.css"], function (require, exports, React, RouterDOM, dataService_17, compat_13, antd_mobile_12) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class RepairsOnline extends React.Component {
        constructor(props) {
            super(props);
            this.dataService = new dataService_17.default();
            this.globalAction = new compat_13.default();
            this.onChangeImg = (files, type, index) => {
                console.log(files, type, index);
                this.setState({
                    filesImg: files,
                    files,
                });
                console.log("11111", this.state.files);
                console.log("22222", this.state.filesImg);
                let obj = [{
                        "imgname": "headimg",
                        "imgbase64": this.state.filesImg[0].url,
                    }];
                this.dataService.uploadImgOss(this.setImg.bind(this), obj);
            };
            this.state = {
                reqairscss: "reqairs-part",
                iconfont: "iconfont iconfont-unturn",
                reqairsul: "reqairsul-part reqairsul",
                typeULBox: "hide",
                typeUL: [],
                type_id_in: "",
                type_name_in: "",
                indexOf: 0,
                companyBox: "show",
                companyUL: [],
                companyIndexof: 0,
                company_id_in: "",
                company_name_in: "",
                park_id: 1001,
                type_id: "",
                type_name: "",
                position: "",
                longitude: "",
                latitude: "",
                building_id: "",
                floor_id: "",
                room_id: "",
                room: "",
                company: "",
                company_id: "",
                contact: "",
                staff_id: "",
                phone: "",
                descript: "",
                photo: "",
                files: [],
                multiple: false,
                filesImg: [],
                pic_amount: "",
                pic1: "",
                name: "",
            };
            this.setTypeUL = this.setTypeUL.bind(this);
            RepairsOnline.getReqairstpostion = this.getReqairstpostion.bind(this);
        }
        componentDidMount() {
            this.dataService.getRepairType(this.setTypeUL);
            let data = sessionStorage.getItem("userInfos");
            let dataObj = JSON.parse(data);
            this.setState({
                contact: dataObj.name,
                phone: dataObj.phone,
                staff_id: dataObj.userId,
            });
            if (dataObj.enterprises.length == 0) {
                this.setState({
                    companyUL: [],
                    company: "请先关联企业",
                    company_id: "请先关联企业",
                });
            }
            else {
                this.setState({
                    companyUL: [],
                    company: sessionStorage.getItem("enterprise"),
                    company_id: sessionStorage.getItem("enterpriseId"),
                });
            }
        }
        setTypeUL(data) {
            console.log("getRepairType", data);
            this.setState({
                typeUL: data.response,
                type_id: data.response[0].id,
                type_name: data.response[0].name,
            });
        }
        toggleFold() {
            console.log("reqairsOn");
            if (this.state.reqairscss == "reqairs-all") {
                this.setState({
                    reqairscss: "reqairs-part",
                    reqairsul: "reqairsul-part reqairsul",
                });
                this.globalAction.web_call_webgl_continueloadModuler();
            }
            else {
                this.setState({
                    reqairscss: "reqairs-all",
                    reqairsul: "reqairsul-all reqairsul",
                });
                this.globalAction.web_call_webgl_pauseloadModuler();
            }
            if (this.state.iconfont == "iconfont iconfont-unturn") {
                this.setState({
                    iconfont: "iconfont iconfont-turn",
                });
            }
            else {
                this.setState({
                    iconfont: "iconfont iconfont-unturn",
                });
            }
        }
        mapReturnpark() {
            this.globalAction.web_call_webgl_mapReturnpark();
        }
        static getReqairstpostion(data) { }
        ;
        getReqairstpostion(data) {
            console.log("getReqairstpostion", data);
            this.setState({
                position: data.position,
                longitude: data.longitude,
                latitude: data.latitude,
                building_id: data.building_id,
                floor_id: data.floor_id,
                room_id: data.room_id,
                room: data.room,
            });
        }
        reqairsImginput() {
        }
        reqairsImgshow() {
        }
        showTypeUL() {
            this.setState({
                typeULBox: "typeULBox",
                type_id_in: this.state.typeUL[this.state.indexOf].id,
                type_name_in: this.state.typeUL[this.state.indexOf].name,
            });
        }
        reqairsType(i, id, name) {
            this.setState({
                type_id_in: id,
                type_name_in: name,
                indexOf: i,
            });
        }
        gettypeUL() {
            this.setState({
                typeULBox: "hide",
                type_id: this.state.type_id_in,
                type_name: this.state.type_name_in,
            });
        }
        hidetypeUL() {
            this.setState({
                typeULBox: "hide",
            });
        }
        getPosition(event) {
            this.setState({
                position: event.target.value
            });
        }
        reqairsCompany(event) {
            this.setState({
                company: event.target.value,
            });
        }
        reqairsContacts(event) {
            this.setState({
                contact: event.target.value,
            });
        }
        reqairsPhone(event) {
            this.setState({
                phone: event.target.value,
            });
        }
        changeDescript(event) {
            this.setState({
                descript: event.target.value,
            });
        }
        changebookContent(event) {
            console.log("2222", event);
        }
        showCompanyBox() {
            this.setState({
                companyBox: "rollSelectCauseBox",
                company_id_in: this.state.companyUL[this.state.companyIndexof].id,
                company_name_in: this.state.companyUL[this.state.companyIndexof].name,
            });
        }
        inCompanyeList(i, id, name) {
            this.setState({
                companyIndexof: i,
                company_id_in: id,
                company_name_in: name,
            });
        }
        hideCompanyBox() {
            this.setState({
                companyBox: "hide",
            });
        }
        getCompanyBox() {
            this.setState({
                companyBox: "hide",
                company_id: this.state.company_id_in,
                company: this.state.company_name_in,
            });
        }
        setImg(data) {
            console.log("AAAA", data);
            console.log("BBB", data[0]);
            this.setState({
                img_url: data[0],
            });
            console.log("img_url", this.state);
        }
        sumbitReqairs() {
            console.log("提交报修", this.state);
            if (this.state.files.length == 0) {
                antd_mobile_12.Toast.info('请提交报修照片', 2);
            }
            else if (this.state.type_id == "") {
                antd_mobile_12.Toast.info('请选择报修类型', 2);
            }
            else if (this.state.position == "") {
                antd_mobile_12.Toast.info('请填写报修位置', 2);
            }
            else if (this.state.descript == "") {
                antd_mobile_12.Toast.info('请描述报修问题', 2);
            }
            else if (this.state.company == "请先关联企业" || this.state.company_id == "请先关联企业") {
                antd_mobile_12.Toast.info('请先前往关联企业', 2);
            }
            else if (this.state.phone == "") {
                antd_mobile_12.Toast.info('请先前往填写联系电话', 2);
            }
            else {
                this.dataService.saveRepairInfo(this.sumbitReqairssucceed, this.state);
            }
        }
        sumbitReqairssucceed(data) {
            antd_mobile_12.Toast.info(data, 2);
            window.history.back();
        }
        render() {
            return (React.createElement("div", { className: "repairsOnline" },
                React.createElement("p", { className: "companyInfotit" },
                    React.createElement("span", null, "\u5728\u7EBF\u62A5\u4FEE")),
                React.createElement("div", { className: this.state.reqairscss },
                    React.createElement("div", { className: "foleBtn" },
                        React.createElement(RouterDOM.Link, { to: "/home" },
                            React.createElement("p", { className: "companyGoHomeLeft", style: { color: "#949494" }, onClick: this.mapReturnpark.bind(this) },
                                React.createElement("i", { className: "iconfont companyInfoicon" }, "\uE83B"),
                                React.createElement("span", null, "\u8FD4\u56DE"))),
                        React.createElement("p", { className: "companyGoHomeRight" },
                            React.createElement("i", { className: this.state.iconfont, style: { "fontSize": "5rem", "color": "#C0C0C0" }, onClick: this.toggleFold.bind(this) }, "\uE849"))),
                    React.createElement("form", null,
                        React.createElement("ul", { className: this.state.reqairsul },
                            React.createElement("li", null,
                                React.createElement("span", { className: "redStar" }, "*"),
                                React.createElement("span", { style: { "color": "#949494" } }, "\u62A5\u4FEE\u7167\u7247"),
                                React.createElement("div", { className: "imgCom" },
                                    React.createElement(antd_mobile_12.WingBlank, null,
                                        React.createElement(antd_mobile_12.ImagePicker, { files: this.state.files, onChange: this.onChangeImg, onImageClick: (index, fs) => console.log(index, fs), selectable: this.state.files.length < 1, multiple: this.state.multiple })))),
                            React.createElement("li", null,
                                React.createElement("span", { className: "redStar" }, "*"),
                                React.createElement("span", { style: { "color": "#949494" } }, "\u62A5\u4FEE\u7C7B\u578B"),
                                React.createElement("input", { type: "text", className: "getillType", value: this.state.type_name, placeholder: "\u8BF7\u9009\u62E9\u62A5\u4FEE\u7C7B\u578B" }),
                                React.createElement("span", { className: "iconfont", onClick: this.showTypeUL.bind(this), style: { "fontSize": "3rem", "float": "right", " padding": " 0 0 0 3rem", "padding": " 0 0 0 4rem" } }, "\uE827")),
                            React.createElement("li", null,
                                React.createElement("span", { className: "redStar" }, "*"),
                                React.createElement("span", { style: { "color": "#949494" } }, "\u62A5\u4FEE\u4F4D\u7F6E"),
                                React.createElement("input", { type: "text", value: this.state.position, placeholder: "\u8BF7\u8F93\u5165\u62A5\u4FEE\u4F4D\u7F6E", style: { "margin-left": "4rem", "border": "0" }, onChange: this.getPosition.bind(this) }),
                                React.createElement("i", { className: "iconfont", style: { "fontSize": "3rem", "color": "#0B8BF0", "float": "right", "padding": " 0 0 0 4rem" } }, "\uE82C")),
                            React.createElement("li", null,
                                React.createElement("span", { className: "redStar" }, "*"),
                                React.createElement("span", { style: { "color": "#949494" } }, "\u62A5\u4FEE\u4F01\u4E1A"),
                                React.createElement("input", { type: "text", value: this.state.company, placeholder: "\u8BF7\u5148\u5173\u8054\u4F01\u4E1A", style: { "margin-left": "4rem", "border": "0" }, readOnly: true })),
                            React.createElement("li", null,
                                React.createElement("span", { className: "redStar" }, "*"),
                                React.createElement("span", { style: { "color": "#949494" } }, "\u8054\u7CFB\u4EBA"),
                                React.createElement("input", { type: "text", value: this.state.contact, placeholder: "\u8BF7\u586B\u5199\u8054\u7CFB\u4EBA", style: { "margin-left": "6rem", "border": "0" }, onChange: this.reqairsContacts.bind(this), readOnly: true })),
                            React.createElement("li", null,
                                React.createElement("span", { className: "redStar" }, "*"),
                                React.createElement("span", { style: { "color": "#949494" } }, "\u7535\u8BDD\u53F7\u7801"),
                                React.createElement("input", { type: "text", value: this.state.phone, placeholder: "\u8BF7\u5148\u7ED1\u5B9A\u624B\u673A\u53F7\u7801 ", style: { "margin-left": "4rem", "border": "0" }, onChange: this.reqairsPhone.bind(this), readOnly: true })),
                            React.createElement("li", null,
                                React.createElement("p", null,
                                    React.createElement("span", { className: "redStar" }, "*"),
                                    React.createElement("span", { style: { "fontSize": "2.5rem", "color": "#949494" } }, "\u62A5\u4FEE\u63CF\u8FF0\uFF1A")),
                                React.createElement("textarea", { className: "bookContent", value: this.state.descript, placeholder: "\u8BF7\u5C06\u62A5\u4FEE\u95EE\u9898\u63CF\u8FF0\u51FA\u6765\u3002\uFF08120\u5B57\u5185\uFF09", onChange: this.changeDescript.bind(this) }))),
                        React.createElement("div", { className: "reqairsSumbit", onClick: this.sumbitReqairs.bind(this) }, "\u63D0\u4EA4"))),
                React.createElement("div", { className: this.state.typeULBox },
                    React.createElement("ul", { className: "rollSelectCauseULcss" }, this.state.typeUL.map((i, index) => {
                        return (React.createElement("li", { className: this.state.indexOf == index ? "rollSelectCauseli-active" : "rollSelectCauseli", onClick: this.reqairsType.bind(this, index, i.id, i.name) }, i.name));
                    })),
                    React.createElement("div", { className: "rollSelectCuasedBtn" },
                        React.createElement("span", { className: "rollSelectCancel", onClick: this.hidetypeUL.bind(this) }, "\u53D6\u6D88"),
                        React.createElement("span", { className: "rollSelectConfirm", onClick: this.gettypeUL.bind(this) }, "\u786E\u8BA4"))),
                React.createElement("div", { className: this.state.companyBox },
                    React.createElement("ul", { className: "rollSelectCauseULcss" }, this.state.companyUL.map((i, index) => {
                        return (React.createElement("li", { className: this.state.companyIndexof == index ? "rollSelectCauseli-active" : "rollSelectCauseli", onClick: this.inCompanyeList.bind(this, index, i.id, i.name) }, i.name));
                    })),
                    React.createElement("div", { className: "rollSelectCuasedBtn" },
                        React.createElement("span", { className: "rollSelectCancel", onClick: this.hideCompanyBox.bind(this) }, "\u53D6\u6D88"),
                        React.createElement("span", { className: "rollSelectConfirm", onClick: this.getCompanyBox.bind(this) }, "\u786E\u8BA4")))));
        }
    }
    exports.default = RepairsOnline;
});
define("parking", ["require", "exports", "react", "react-router-dom", "compat", "dataService", "antd-mobile"], function (require, exports, React, RouterDOM, compat_14, dataService_18, antd_mobile_13) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Parking extends React.Component {
        constructor(props) {
            super(props);
            this.globalAction = new compat_14.default();
            this.state = {
                parkingcss: "parking",
                iconfont: "iconfont iconfont-unturn",
                infoli: 99,
            };
            Parking.infoClick = this.infoClick.bind(this);
            Parking.inParkingList = this.inParkingList.bind(this);
        }
        toggleFold() {
            console.log("parkingcss");
            if (this.state.parkingcss == "parking") {
                this.setState({
                    parkingcss: "parking-part",
                });
            }
            else {
                this.setState({
                    parkingcss: "parking",
                });
            }
            if (this.state.iconfont == "iconfont iconfont-unturn") {
                this.setState({
                    iconfont: "iconfont iconfont-turn",
                });
            }
            else {
                this.setState({
                    iconfont: "iconfont iconfont-unturn",
                });
            }
        }
        static infoClick(indexof) { }
        ;
        infoClick(indexof) {
            console.log("infoClick", indexof);
            this.setState({
                infoli: indexof,
            });
            if (indexof == 1) {
                Apply.undergroundState(1);
                this.globalAction.web_call_webgl_showParkingList(1);
            }
            else {
                Apply.undergroundState(0);
            }
        }
        static inParkingList(data) { }
        inParkingList(data) {
            var i = data.i;
            var id = data.id;
            var name = data.name;
            if (this.state.infoli == 1) {
                Apply.inParkingList(i, id, name);
            }
            else if (this.state.infoli == 3) {
                Visitor.inParkingList(i, id, name);
            }
        }
        render() {
            return (React.createElement("div", { className: "parkingBox" },
                React.createElement("p", { className: "companyInfotit" },
                    React.createElement(RouterDOM.Link, { to: "/home" },
                        React.createElement("span", { className: "iconfont companyInfoicon" }, "\uE83B")),
                    React.createElement("span", null, "\u505C\u8F66\u4E1A\u52A1")),
                React.createElement("div", { className: this.state.parkingcss },
                    React.createElement("div", { className: "foleBtn", onClick: this.toggleFold.bind(this) },
                        React.createElement("i", { className: this.state.iconfont, style: { "fontSize": "5rem" } }, "\uE849")),
                    React.createElement("ul", { className: "parkingul" },
                        React.createElement("li", { onClick: this.infoClick.bind(this, 0) },
                            React.createElement("i", { className: "iconfont", style: { "fontSize": "5rem", "color": "#00A447" } }, "\uE832"),
                            React.createElement("p", null,
                                "\u8F66\u4F4D\u7533\u8BF7",
                                React.createElement("i", { className: "iconfont", style: { "fontSize": "3rem", "color": "#949494", "float": "right" } }, "\uE83C"))),
                        React.createElement("li", { onClick: this.infoClick.bind(this, 1) },
                            React.createElement("i", { className: "iconfont", style: { "fontSize": "5rem", "color": "#118EEA" } }, "\uE830"),
                            React.createElement("p", null,
                                "\u5730\u5E93\u8F66\u4F4D\u9884\u7EA6",
                                React.createElement("i", { className: "iconfont", style: { "fontSize": "3rem", "color": "#949494", "float": "right" } }, "\uE83C"))),
                        React.createElement("li", { onClick: this.infoClick.bind(this, 2) },
                            React.createElement("i", { className: "iconfont", style: { "fontSize": "5rem", "color": "#E7551C" } }, "\uE82F"),
                            React.createElement("p", null,
                                "\u505C\u8F66\u4F4D\u53D8\u66F4",
                                React.createElement("i", { className: "iconfont", style: { "fontSize": "3rem", "color": "#949494", "float": "right" } }, "\uE83C"))),
                        React.createElement("li", { onClick: this.infoClick.bind(this, 3) },
                            React.createElement("i", { className: "iconfont", style: { "fontSize": "5rem", "color": "#F49C2E" } }, "\uE831"),
                            React.createElement("p", null,
                                "\u6765\u8BBF\u8F66\u8F86\u9884\u7EA6",
                                React.createElement("i", { className: "iconfont", style: { "fontSize": "3rem", "color": "#949494", "float": "right" } }, "\uE83C")))),
                    React.createElement("div", { className: this.state.infoli == 0 ? "show" : "hide" },
                        React.createElement(Apply, null)),
                    React.createElement("div", { className: this.state.infoli == 1 ? "show" : "hide" },
                        React.createElement(Apply, null)),
                    React.createElement("div", { className: this.state.infoli == 2 ? "show" : "hide" },
                        React.createElement(Alteration, null)),
                    React.createElement("div", { className: this.state.infoli == 3 ? "show" : "hide" },
                        React.createElement(Visitor, null)))));
        }
    }
    exports.default = Parking;
    class Apply extends React.Component {
        constructor(props) {
            super(props);
            this.dataService = new dataService_18.default();
            this.globalAction = new compat_14.default();
            this.state = {
                contentULcss: "contentUL-part contentUL",
                carTypeBox: "hide",
                carTypeUL: [],
                carTypeIndexof: 0,
                componentBox: "componentBox-part",
                contentBox: "contentBox-part",
                iconfont: "iconfont iconfont-unturn",
                undergroundState: false,
                parkingListBox: "hide",
                parkingListIndexof: 0,
                parkingListUL: [],
                companyBox: "hide",
                companyUL: [],
                companyIndexof: 0,
                company_id_in: "",
                company_name_in: "",
                park_id: "",
                car_license_color: "",
                car_license: "",
                applicant: "",
                phone: "",
                company: "",
                company_address: "",
                car_owner: "",
                car_brand: "",
                car_model: "",
                car_color: "",
                car_type: "",
                car_type_in: "",
                car_type_name: "",
                car_type_name_in: "",
                underground_parking_id: "",
                underground_parking_id_in: "",
                underground_parking_name: "",
                underground_parking_name_in: "",
            };
            this.showParking = this.showParking.bind(this);
            this.setCarType = this.setCarType.bind(this);
            Apply.undergroundState = this.undergroundState.bind(this);
            this.setParkingList = this.setParkingList.bind(this);
            Apply.inParkingList = this.inParkingList.bind(this);
        }
        componentDidMount() {
            let enterprises = JSON.parse(localStorage.getItem("enterprises"));
            console.log("enterprises--------", enterprises);
            let applicant = localStorage.getItem("userName");
            let phone = localStorage.getItem("phone");
            let staff_id = localStorage.getItem("userid");
            console.log("--------", applicant, phone, staff_id);
            this.setState({
                applicant: applicant,
                phone: phone,
                staff_id: staff_id,
                companyUL: enterprises,
                company: enterprises[0].name,
                company_id: enterprises[0].id,
            });
            this.dataService.getCarType(this.setCarType, 101);
            this.dataService.getParkingList(this.setParkingList, 101);
        }
        static undergroundState(data) { }
        undergroundState(data) {
            if (data == 1) {
                this.setState({
                    undergroundState: true
                });
            }
            else {
                undergroundState: false;
            }
        }
        toggleFold() {
            console.log("reqairsOn");
            if (this.state.contentBox == "contentBox-all") {
                this.setState({
                    contentBox: "contentBox-part",
                    contentULcss: "contentUL-part contentUL"
                });
                this.globalAction.web_call_webgl_continueloadModuler();
            }
            else {
                this.setState({
                    contentBox: "contentBox-all",
                    contentULcss: "contentUL-all contentUL"
                });
                this.globalAction.web_call_webgl_pauseloadModuler();
            }
            if (this.state.iconfont == "iconfont iconfont-unturn") {
                this.setState({
                    iconfont: "iconfont iconfont-turn",
                });
            }
            else {
                this.setState({
                    iconfont: "iconfont iconfont-unturn",
                });
            }
        }
        showParking() {
            Parking.infoClick(99);
        }
        carLicensecolor(event) {
            this.setState({
                car_license_color: event.target.value,
            });
        }
        carLicense(event) {
            this.setState({
                car_license: event.target.value,
            });
        }
        applicant(event) {
            this.setState({
                applicant: event.target.value,
            });
        }
        phone(event) {
            this.setState({
                phone: event.target.value,
            });
        }
        showCompanyBox() {
            this.setState({
                companyBox: "rollSelectCauseBox",
                company_id_in: this.state.companyUL[this.state.companyIndexof].id,
                company_name_in: this.state.companyUL[this.state.companyIndexof].name,
            });
        }
        inCompanyeList(i, id, name) {
            this.setState({
                companyIndexof: i,
                company_id_in: id,
                company_name_in: name,
            });
        }
        hideCompanyBox() {
            this.setState({
                companyBox: "hide",
            });
        }
        getCompanyBox() {
            this.setState({
                companyBox: "hide",
                company_id: this.state.company_id_in,
                company: this.state.company_name_in,
            });
        }
        companyAddress(event) {
            this.setState({
                company_address: event.target.value,
            });
        }
        carOwner(event) {
            this.setState({
                car_owner: event.target.value,
            });
        }
        carBrand(event) {
            this.setState({
                car_brand: event.target.value,
            });
        }
        carModel(event) {
            this.setState({
                car_model: event.target.value,
            });
        }
        carColor(event) {
            this.setState({
                car_color: event.target.value,
            });
        }
        showCartypeBox() {
            this.setState({
                carTypeBox: "rollSelectCauseBox",
                car_type_in: this.state.carTypeUL[this.state.carTypeIndexof].id,
                car_type_name_in: this.state.carTypeUL[this.state.carTypeIndexof].name,
            });
        }
        setCarType(data) {
            this.setState({
                carTypeUL: data.response
            });
        }
        inCartype(i, id, name) {
            console.log("选中车辆类型", i, id, name);
            this.setState({
                car_type_in: id,
                car_type_name_in: name,
                carTypeIndexof: i,
            });
        }
        hideCartypeBox() {
            console.log("隐藏车辆类型列表");
            this.setState({
                carTypeBox: "hide",
            });
        }
        getCarTypeBox() {
            console.log("隐藏车辆类型列表");
            this.setState({
                carTypeBox: "hide",
                car_type: this.state.car_type_in,
                car_type_name: this.state.car_type_name_in,
            });
        }
        showParkingList() {
            this.setState({
                parkingListBox: "rollSelectCauseBox",
                underground_parking_id_in: this.state.parkingListUL[this.state.parkingListIndexof].id,
                underground_parking_name_in: this.state.parkingListUL[this.state.parkingListIndexof].name,
            });
        }
        setParkingList(data) {
            this.setState({
                parkingListUL: data.response
            });
        }
        static inParkingList(i, id, name) { }
        inParkingList(i, id, name) {
            console.log("选中地下车库--申请", i, id, name);
            this.setState({
                underground_parking_id_in: id,
                underground_parking_name_in: name,
                parkingListIndexof: i,
            });
            this.globalAction.web_call_webgl_onParking(i);
        }
        hideParkingListBox() {
            this.setState({
                parkingListBox: "hide",
            });
        }
        getParkingListBox() {
            this.setState({
                parkingListBox: "hide",
                underground_parking_id: this.state.underground_parking_id_in,
                underground_parking_name: this.state.underground_parking_name_in,
            });
        }
        parkingSumbit() {
            if (this.state.car_license_color == "") {
                alert("请填写车牌颜色");
            }
            else if (this.state.car_license == "") {
                alert("请填写车牌号");
            }
            else if (this.state.company_address == "") {
                alert("请填写公司地址");
            }
            else if (this.state.car_owner == "") {
                alert("请填写车主");
            }
            else if (this.state.car_brand == "") {
                alert("请填写车辆品牌");
            }
            else if (this.state.car_model == "") {
                alert("请填写车辆型号");
            }
            else if (this.state.car_color == "") {
                alert("请填写车辆颜色");
            }
            else if (this.state.car_type == "") {
                alert("请选择车辆类型");
            }
            else {
                this.dataService.saveParkingApply(this.paringSumbitSuccess, this.state);
            }
        }
        paringSumbitSuccess(data) {
            alert(data);
        }
        undergroundSumbit() {
            if (this.state.car_license_color == "") {
                alert("请填写车牌颜色");
            }
            else if (this.state.car_license == "") {
                alert("请填写车牌号");
            }
            else if (this.state.company_address == "") {
                alert("请填写公司地址");
            }
            else if (this.state.car_owner == "") {
                alert("请填写车主");
            }
            else if (this.state.car_brand == "") {
                alert("请填写车辆品牌");
            }
            else if (this.state.car_model == "") {
                alert("请填写车辆型号");
            }
            else if (this.state.car_color == "") {
                alert("请填写车辆颜色");
            }
            else if (this.state.car_type == "") {
                alert("请选择车辆类型");
            }
            else if (this.state.underground_parking_name == "") {
                alert("请选择停车场");
            }
            else {
                this.dataService.saveParkingAppointment(this.undergroundSumbitSuccess, this.state);
            }
        }
        undergroundSumbitSuccess(data) {
            alert(data);
        }
        render() {
            return (React.createElement("div", { className: this.state.componentBox },
                React.createElement("p", { className: "companyInfotit" },
                    React.createElement("span", { className: "iconfont companyInfoicon", onClick: this.showParking }, "\uE83B"),
                    React.createElement("span", null,
                        "\u8F66\u4F4D\u7533\u8BF7",
                        this.state.undergroundState)),
                React.createElement("div", { className: this.state.contentBox },
                    React.createElement("div", { className: "foleBtn", onClick: this.toggleFold.bind(this) },
                        React.createElement("i", { className: this.state.iconfont, style: { "fontSize": "5rem" } }, "\uE849")),
                    React.createElement("form", null,
                        React.createElement("ul", { className: this.state.contentULcss },
                            React.createElement("li", null,
                                React.createElement("span", { className: "bookformLeft" },
                                    React.createElement("span", { className: "redStar" }, "*"),
                                    "\u8F66\u724C\u989C\u8272"),
                                React.createElement("p", { className: "bookfromliRight" },
                                    React.createElement("input", { type: "text", value: this.state.car_license_color, placeholder: "\u8BF7\u586B\u5199\u8F66\u724C\u989C\u8272", onChange: this.carLicensecolor.bind(this) }))),
                            React.createElement("li", null,
                                React.createElement("span", { className: "bookformLeft" },
                                    React.createElement("span", { className: "redStar" }, "*"),
                                    "\u8F66\u724C\u53F7\u7801"),
                                React.createElement("p", { className: "bookfromliRight" },
                                    React.createElement("input", { type: "text", value: this.state.car_license, placeholder: "\u8BF7\u586B\u5199\u8F66\u724C\u53F7\u7801", onChange: this.carLicense.bind(this) }))),
                            React.createElement("li", null,
                                React.createElement("span", { className: "bookformLeft" },
                                    React.createElement("span", { className: "redStar" }, "*"),
                                    "\u7533\u8BF7\u4EBA"),
                                React.createElement("p", { className: "bookfromliRight" },
                                    React.createElement("input", { type: "text", value: this.state.applicant, placeholder: "\u8BF7\u8F93\u5165\u7533\u8BF7\u4EBA\u59D3\u540D", onChange: this.applicant.bind(this) }))),
                            React.createElement("li", null,
                                React.createElement("span", { className: "bookformLeft" },
                                    React.createElement("span", { className: "redStar" }, "*"),
                                    "\u7535\u8BDD\u53F7\u7801"),
                                React.createElement("p", { className: "bookfromliRight" },
                                    React.createElement("input", { type: "number", value: this.state.phone, placeholder: "\u8BF7\u8F93\u5165\u7535\u8BDD\u53F7\u7801", onChange: this.phone.bind(this) }))),
                            React.createElement("li", null,
                                React.createElement("span", { className: "bookformLeft" },
                                    React.createElement("span", { className: "redStar" }, "*"),
                                    "\u516C\u53F8\u540D\u79F0"),
                                React.createElement("p", { className: "bookfromliRight", onClick: this.showCompanyBox.bind(this) }, this.state.company)),
                            React.createElement("li", null,
                                React.createElement("span", { className: "bookformLeft" },
                                    React.createElement("span", { className: "redStar" }, "*"),
                                    "\u516C\u53F8\u5730\u5740"),
                                React.createElement("p", { className: "bookfromliRight" },
                                    React.createElement("input", { type: "text", value: this.state.company_address, placeholder: "\u5982**\u5EA7**\u533A**\u697C**\u53F7", onChange: this.companyAddress.bind(this) }))),
                            React.createElement("li", { className: this.state.undergroundState == false ? "show" : "hide" },
                                React.createElement("span", { className: "bookformLeft" },
                                    React.createElement("span", { className: "redStar" }, "*"),
                                    "\u7533\u8BF7\u7C7B\u578B"),
                                React.createElement("p", { className: "bookfromliRight" }, "\u7533\u8BF7\u5730\u9762\u8F66\u4F4D")),
                            React.createElement("li", { className: this.state.undergroundState == true ? "show" : "hide" },
                                React.createElement("span", { className: "bookformLeft" },
                                    React.createElement("span", { className: "redStar" }, "*"),
                                    "\u7533\u8BF7\u7C7B\u578B"),
                                React.createElement("p", { className: "bookfromliRight", onClick: this.showParkingList.bind(this) },
                                    React.createElement("input", { type: "text", value: this.state.underground_parking_name, placeholder: "\u8BF7\u9009\u62E9\u505C\u8F66\u573A" }),
                                    React.createElement("span", { className: "iconfont", style: { "fontSize": "3rem", "float": "right", " padding": " 0 0 0 3rem", "padding": " 0 0 0 4rem" } }, "\uE827"))),
                            React.createElement("li", null,
                                React.createElement("span", { className: "bookformLeft" },
                                    React.createElement("span", { className: "redStar" }, "*"),
                                    "\u8F66\u4E3B"),
                                React.createElement("p", { className: "bookfromliRight" },
                                    React.createElement("input", { type: "text", value: this.state.car_owner, placeholder: "\u8BF7\u8F93\u5165\u8F66\u4E3B", onChange: this.carOwner.bind(this) }))),
                            React.createElement("li", null,
                                React.createElement("span", { className: "bookformLeft" },
                                    React.createElement("span", { className: "redStar" }, "*"),
                                    "\u8F66\u8F86\u54C1\u724C"),
                                React.createElement("p", { className: "bookfromliRight" },
                                    React.createElement("input", { type: "text", value: this.state.car_brand, placeholder: "\u8BF7\u8F93\u5165\u8F66\u8F86\u54C1\u724C\uFF0C\u5982\uFF1A\u5927\u4F17", onChange: this.carBrand.bind(this) }))),
                            React.createElement("li", null,
                                React.createElement("span", { className: "bookformLeft" },
                                    React.createElement("span", { className: "redStar" }, "*"),
                                    "\u8F66\u8F86\u578B\u53F7"),
                                React.createElement("p", { className: "bookfromliRight" },
                                    React.createElement("input", { type: "text", value: this.state.car_model, placeholder: "\u8BF7\u8F93\u5165\u8F66\u8F86\u578B\u53F7\uFF0C\u5982\uFF1A\u9AD8\u5C14\u592B", onChange: this.carModel.bind(this) }))),
                            React.createElement("li", null,
                                React.createElement("span", { className: "bookformLeft" },
                                    React.createElement("span", { className: "redStar" }, "*"),
                                    "\u8F66\u8EAB\u989C\u8272"),
                                React.createElement("p", { className: "bookfromliRight" },
                                    React.createElement("input", { type: "text", value: this.state.car_color, placeholder: "\u8BF7\u8F93\u5165\u8F66\u8EAB\u989C\u8272\uFF0C\u5982\uFF1A\u767D\u8272", onChange: this.carColor.bind(this) }))),
                            React.createElement("li", null,
                                React.createElement("span", { className: "bookformLeft" },
                                    React.createElement("span", { className: "redStar" }, "*"),
                                    "\u8F66\u8F86\u7C7B\u578B"),
                                React.createElement("p", { className: "bookfromliRight", onClick: this.showCartypeBox.bind(this) },
                                    React.createElement("input", { type: "text", value: this.state.car_type_name, placeholder: "\u8BF7\u9009\u62E9\u8F66\u8F86\u7C7B\u578B" }),
                                    React.createElement("span", { className: "iconfont", style: { "fontSize": "3rem", "float": "right", " padding": " 0 0 0 3rem", "padding": " 0 0 0 4rem" } }, "\uE827")))),
                        React.createElement("li", { className: this.state.undergroundState == false ? "show" : "hide" },
                            React.createElement("div", { className: "bookSumbit", onClick: this.parkingSumbit.bind(this) }, "\u63D0\u4EA4")),
                        React.createElement("li", { className: this.state.undergroundState == true ? "show" : "hide" },
                            React.createElement("div", { className: "bookSumbit", onClick: this.undergroundSumbit.bind(this) }, "\u63D0\u4EA4"))),
                    React.createElement("div", { className: this.state.companyBox },
                        React.createElement("ul", { className: "rollSelectCauseULcss" }, this.state.companyUL.map((i, index) => {
                            return (React.createElement("li", { className: this.state.companyIndexof == index ? "rollSelectCauseli-active" : "rollSelectCauseli", onClick: this.inCompanyeList.bind(this, index, i.id, i.name) }, i.name));
                        })),
                        React.createElement("div", { className: "rollSelectCuasedBtn" },
                            React.createElement("span", { className: "rollSelectCancel", onClick: this.hideCompanyBox.bind(this) }, "\u53D6\u6D88"),
                            React.createElement("span", { className: "rollSelectConfirm", onClick: this.getCompanyBox.bind(this) }, "\u786E\u8BA4"))),
                    React.createElement("div", { className: this.state.carTypeBox },
                        React.createElement("ul", { className: "rollSelectCauseULcss" }, this.state.carTypeUL.map((i, index) => {
                            return (React.createElement("li", { className: this.state.carTypeIndexof == index ? "rollSelectCauseli-active" : "rollSelectCauseli", onClick: this.inCartype.bind(this, index, i.id, i.name) }, i.name));
                        })),
                        React.createElement("div", { className: "rollSelectCuasedBtn" },
                            React.createElement("span", { className: "rollSelectCancel", onClick: this.hideCartypeBox.bind(this) }, "\u53D6\u6D88"),
                            React.createElement("span", { className: "rollSelectConfirm", onClick: this.getCarTypeBox.bind(this) }, "\u786E\u8BA4"))),
                    React.createElement("div", { className: this.state.parkingListBox },
                        React.createElement("ul", { className: "rollSelectCauseULcss" }, this.state.parkingListUL.map((i, index) => {
                            return (React.createElement("li", { className: this.state.parkingListIndexof == index ? "rollSelectCauseli-active" : "rollSelectCauseli", onClick: this.inParkingList.bind(this, index, i.id, i.name) }, i.name));
                        })),
                        React.createElement("div", { className: "rollSelectCuasedBtn" },
                            React.createElement("span", { className: "rollSelectCancel", onClick: this.hideParkingListBox.bind(this) }, "\u53D6\u6D88"),
                            React.createElement("span", { className: "rollSelectConfirm", onClick: this.getParkingListBox.bind(this) }, "\u786E\u8BA4"))))));
        }
    }
    class Alteration extends React.Component {
        constructor(props) {
            super(props);
            this.globalAction = new compat_14.default();
            this.dataService = new dataService_18.default();
            this.state = {
                componentBox: "componentBox-part",
                contentBox: "contentBox-part",
                iconfont: "iconfont iconfont-unturn",
                contentULcss: "contentUL-part contentUL",
                "park_id": "",
                "orgin_car_license_color": "",
                "orgin_car_license": "",
                "orgin_car_owner": "",
                "orgin_phone": "",
                "car_license_color": "",
                "car_license": "",
                "applicant": "",
                "phone": "",
                "company": "",
                "company_address": "",
                "car_owner": "",
                "car_brand": "",
                "car_model": "",
                "car_color": "",
                "car_type": "",
            };
            this.showParking = this.showParking.bind(this);
        }
        componentDidMount() { }
        toggleFold() {
            console.log("reqairsOn");
            if (this.state.contentBox == "contentBox-all") {
                this.setState({
                    contentBox: "contentBox-part",
                    contentULcss: "contentUL-part contentUL"
                });
            }
            else {
                this.setState({
                    contentBox: "contentBox-all",
                    contentULcss: "contentUL-all contentUL"
                });
            }
            if (this.state.iconfont == "iconfont iconfont-unturn") {
                this.setState({
                    iconfont: "iconfont iconfont-turn",
                });
            }
            else {
                this.setState({
                    iconfont: "iconfont iconfont-unturn",
                });
            }
        }
        orginCarLicenseColor(event) {
            this.setState({
                orgin_car_license_color: event.target.value
            });
        }
        orginCarLicense(event) {
            this.setState({
                orgin_car_license: event.target.value
            });
        }
        orginCarOwner(event) {
            this.setState({
                orgin_car_owner: event.target.value
            });
        }
        orginPhone(event) {
            this.setState({
                orgin_phone: event.target.value
            });
        }
        carLicenseColor(event) {
            this.setState({
                car_license_color: event.target.value
            });
        }
        carLicense(event) {
            this.setState({
                car_license: event.target.value
            });
        }
        applicant(event) {
            this.setState({
                applicant: event.target.value
            });
        }
        phone(event) {
            this.setState({
                phone: event.target.value
            });
        }
        company(event) {
            this.setState({
                company: event.target.value
            });
        }
        companyAddress(event) {
            this.setState({
                company_address: event.target.value
            });
        }
        carOwner(event) {
            this.setState({
                car_owner: event.target.value
            });
        }
        carBrand(event) {
            this.setState({
                car_brand: event.target.value
            });
        }
        carModel(event) {
            this.setState({
                car_model: event.target.value
            });
        }
        carColor(event) {
            this.setState({
                car_color: event.target.value
            });
        }
        carType(event) {
            this.setState({
                car_type: event.target.value
            });
        }
        alterationSumbit() {
            if (this.state.orgin_car_license_color == "") {
                alert(" 请填写原车牌颜色");
            }
            else if (this.state.orgin_car_license == "") {
                alert(" 请填写原车牌号");
            }
            else if (this.state.orgin_car_owner == "") {
                alert(" 请填写原车主");
            }
            else if (this.state.orgin_phone == "") {
                alert("请填写原车主手机号码 ");
            }
            else if (this.state.car_license_color == "") {
                alert("请填写车牌颜色");
            }
            else if (this.state.car_license == "") {
                alert("请填写车牌号");
            }
            else if (this.state.applicant == "") {
                alert("请填写申请人 ");
            }
            else if (this.state.phone == "") {
                alert(" 请填写更改后手机号码");
            }
            else if (this.state.company_address == "") {
                alert("请填写公司地址");
            }
            else if (this.state.car_owner == "") {
                alert("请填写车主");
            }
            else if (this.state.car_brand == "") {
                alert("请填写车辆品牌");
            }
            else if (this.state.car_model == "") {
                alert("请填写车辆型号");
            }
            else if (this.state.car_color == "") {
                alert("请填写车辆颜色");
            }
            else if (this.state.car_type == "") {
                alert("请选择车辆类型");
            }
            else {
                this.dataService.changeParkingCarInfo(this.alterationSumbitSuccess, this.state);
            }
        }
        alterationSumbitSuccess(data) {
            alert(data);
        }
        showParking() {
            Parking.infoClick(99);
        }
        render() {
            return (React.createElement("div", { className: this.state.componentBox },
                React.createElement("p", { className: "companyInfotit" },
                    React.createElement("span", { className: "iconfont companyInfoicon", onClick: this.showParking }, "\uE83B"),
                    React.createElement("span", null, "\u505C\u8F66\u4F4D\u53D8\u66F4")),
                React.createElement("div", { className: this.state.contentBox },
                    React.createElement("div", { className: "foleBtn", onClick: this.toggleFold.bind(this) },
                        React.createElement("i", { className: this.state.iconfont, style: { "fontSize": "5rem" } }, "\uE849")),
                    React.createElement("form", null,
                        React.createElement("ul", { className: this.state.contentULcss },
                            React.createElement("p", { className: "alterationTitle" }, "\u53D8\u66F4\u524D"),
                            React.createElement("li", null,
                                React.createElement("span", { className: "bookformLeft" },
                                    React.createElement("span", { className: "redStar" }, "*"),
                                    "\u8F66\u724C\u989C\u8272"),
                                React.createElement("p", { className: "bookfromliRight" },
                                    React.createElement("input", { type: "text", value: this.state.orgin_car_license_color, placeholder: "\u8BF7\u586B\u5199\u8F66\u724C\u989C\u8272", onChange: this.orginCarLicenseColor.bind(this) }))),
                            React.createElement("li", null,
                                React.createElement("span", { className: "bookformLeft" },
                                    React.createElement("span", { className: "redStar" }, "*"),
                                    "\u8F66\u724C\u53F7\u7801"),
                                React.createElement("p", { className: "bookfromliRight" },
                                    React.createElement("input", { type: "text", value: this.state.orgin_car_license, placeholder: "\u8BF7\u586B\u5199\u8F66\u724C\u989C\u8272", onChange: this.orginCarLicense.bind(this) }))),
                            React.createElement("li", null,
                                React.createElement("span", { className: "bookformLeft" },
                                    React.createElement("span", { className: "redStar" }, "*"),
                                    "\u8F66\u4E3B"),
                                React.createElement("p", { className: "bookfromliRight" },
                                    React.createElement("input", { type: "text", value: this.state.orgin_car_owner, placeholder: "\u8BF7\u586B\u5199\u8F66\u4E3B\u59D3\u540D", onChange: this.orginCarOwner.bind(this) }))),
                            React.createElement("li", null,
                                React.createElement("span", { className: "bookformLeft" },
                                    React.createElement("span", { className: "redStar" }, "*"),
                                    "\u7535\u8BDD\u53F7\u7801"),
                                React.createElement("p", { className: "bookfromliRight" },
                                    React.createElement("input", { type: "text", value: this.state.orgin_phone, placeholder: "\u8BF7\u586B\u5199\u7535\u8BDD\u53F7\u7801", onChange: this.orginPhone.bind(this) }))),
                            React.createElement("p", { className: "alterationTitle" }, "\u53D8\u66F4\u540E"),
                            React.createElement("li", null,
                                React.createElement("span", { className: "bookformLeft" },
                                    React.createElement("span", { className: "redStar" }, "*"),
                                    "\u8F66\u724C\u989C\u8272"),
                                React.createElement("p", { className: "bookfromliRight" },
                                    React.createElement("input", { type: "text", value: this.state.car_license_color, placeholder: "\u8BF7\u586B\u5199\u8F66\u724C\u989C\u8272", onChange: this.carLicenseColor.bind(this) }))),
                            React.createElement("li", null,
                                React.createElement("span", { className: "bookformLeft" },
                                    React.createElement("span", { className: "redStar" }, "*"),
                                    "\u8F66\u724C\u53F7\u7801"),
                                React.createElement("p", { className: "bookfromliRight" },
                                    React.createElement("input", { type: "text", value: this.state.car_license, placeholder: "\u8BF7\u586B\u5199\u8F66\u724C\u53F7\u7801", onChange: this.carLicense.bind(this) }))),
                            React.createElement("li", null,
                                React.createElement("span", { className: "bookformLeft" },
                                    React.createElement("span", { className: "redStar" }, "*"),
                                    "\u7533\u8BF7\u4EBA"),
                                React.createElement("p", { className: "bookfromliRight" },
                                    React.createElement("input", { type: "text", value: this.state.applicant, placeholder: "\u8BF7\u586B\u5199\u7533\u8BF7\u4EBA\u59D3\u540D", onChange: this.applicant.bind(this) }))),
                            React.createElement("li", null,
                                React.createElement("span", { className: "bookformLeft" },
                                    React.createElement("span", { className: "redStar" }, "*"),
                                    "\u7535\u8BDD\u53F7\u7801"),
                                React.createElement("p", { className: "bookfromliRight" },
                                    React.createElement("input", { type: "text", value: this.state.phone, placeholder: "\u8BF7\u586B\u5199\u7535\u8BDD\u53F7\u7801", onChange: this.phone.bind(this) }))),
                            React.createElement("li", null,
                                React.createElement("span", { className: "bookformLeft" },
                                    React.createElement("span", { className: "redStar" }, "*"),
                                    "\u516C\u53F8\u540D\u79F0"),
                                React.createElement("p", { className: "bookfromliRight" },
                                    React.createElement("input", { type: "text", value: this.state.company, placeholder: "\u8BF7\u586B\u5199\u516C\u53F8\u540D\u79F0", onChange: this.company.bind(this) }))),
                            React.createElement("li", null,
                                React.createElement("span", { className: "bookformLeft" },
                                    React.createElement("span", { className: "redStar" }, "*"),
                                    "\u516C\u53F8\u5730\u5740"),
                                React.createElement("p", { className: "bookfromliRight" },
                                    React.createElement("input", { type: "text", value: this.state.company_address, placeholder: "\u8BF7\u586B\u5199\u516C\u53F8\u5730\u5740", onChange: this.companyAddress.bind(this) }))),
                            React.createElement("li", null,
                                React.createElement("span", { className: "bookformLeft" },
                                    React.createElement("span", { className: "redStar" }, "*"),
                                    "\u8F66\u4E3B"),
                                React.createElement("p", { className: "bookfromliRight" },
                                    React.createElement("input", { type: "text", value: this.state.car_owner, placeholder: "\u8BF7\u586B\u5199\u8F66\u4E3B\u59D3\u540D", onChange: this.carOwner.bind(this) }))),
                            React.createElement("li", null,
                                React.createElement("span", { className: "bookformLeft" },
                                    React.createElement("span", { className: "redStar" }, "*"),
                                    "\u54C1\u724C"),
                                React.createElement("p", { className: "bookfromliRight" },
                                    React.createElement("input", { type: "text", value: this.state.car_brand, placeholder: "\u8BF7\u586B\u5199\u8F66\u8F86\u54C1\u724C", onChange: this.carBrand.bind(this) }))),
                            React.createElement("li", null,
                                React.createElement("span", { className: "bookformLeft" },
                                    React.createElement("span", { className: "redStar" }, "*"),
                                    "\u8F66\u8F86\u578B\u53F7"),
                                React.createElement("p", { className: "bookfromliRight" },
                                    React.createElement("input", { type: "text", value: this.state.car_model, placeholder: "\u8BF7\u586B\u5199\u8F66\u8F86\u578B\u53F7", onChange: this.carModel.bind(this) }))),
                            React.createElement("li", null,
                                React.createElement("span", { className: "bookformLeft" },
                                    React.createElement("span", { className: "redStar" }, "*"),
                                    "\u8F66\u8F86\u989C\u8272"),
                                React.createElement("p", { className: "bookfromliRight" },
                                    React.createElement("input", { type: "text", value: this.state.car_color, placeholder: "\u8BF7\u586B\u5199\u8F66\u8F86\u989C\u8272", onChange: this.carColor.bind(this) }))),
                            React.createElement("li", null,
                                React.createElement("span", { className: "bookformLeft" },
                                    React.createElement("span", { className: "redStar" }, "*"),
                                    "\u8F66\u8F86\u7C7B\u578B"),
                                React.createElement("p", { className: "bookfromliRight" },
                                    React.createElement("input", { type: "text", value: this.state.car_type, placeholder: "\u8BF7\u586B\u5199\u8F66\u8F86\u7C7B\u578B", onChange: this.carType.bind(this) })))),
                        React.createElement("div", { className: "bookSumbit", onClick: this.alterationSumbit.bind(this) }, "\u63D0\u4EA4")))));
        }
    }
    class Visitor extends React.Component {
        constructor(props) {
            super(props);
            this.dataService = new dataService_18.default();
            this.globalAction = new compat_14.default();
            this.state = {
                componentBox: "componentBox-part",
                contentBox: "contentBox-part",
                iconfont: "iconfont iconfont-unturn",
                contentULcss: "contentUL-part contentUL",
                parkingListBox: "hide",
                parkingListUL: [],
                parkingListIndexof: 0,
                "park_id": "",
                "car_license_color": "",
                "car_license": "",
                "applicant": "",
                "phone": "",
                "company": "",
                "underground_parking_id": "",
                "underground_parking_id_in": "",
                "underground_parking_name": "",
                "underground_parking_name_in": "",
                "start_date": "",
                "start_time": "",
                "startTime": "",
                "end_date": "",
                "end_time": "",
                "endTime": "",
            };
            this.showParking = this.showParking.bind(this);
            this.setParkingList = this.setParkingList.bind(this);
            Visitor.inParkingList = this.inParkingList.bind(this);
        }
        componentDidMount() {
            this.dataService.getParkingList(this.setParkingList, 101);
        }
        toggleFold() {
            console.log("reqairsOn");
            if (this.state.contentBox == "contentBox-all") {
                this.setState({
                    contentBox: "contentBox-part",
                    contentULcss: "contentUL-part contentUL",
                });
            }
            else {
                this.setState({
                    contentBox: "contentBox-all",
                    contentULcss: "contentUL-all contentUL",
                });
            }
            if (this.state.iconfont == "iconfont iconfont-unturn") {
                this.setState({
                    iconfont: "iconfont iconfont-turn",
                });
            }
            else {
                this.setState({
                    iconfont: "iconfont iconfont-unturn",
                });
            }
        }
        showParking() {
            Parking.infoClick(99);
        }
        carLicenseColor(event) {
            this.setState({
                car_license_color: event.target.value
            });
        }
        carLicense(event) {
            this.setState({
                car_license: event.target.value
            });
        }
        applicant(event) {
            this.setState({
                applicant: event.target.value
            });
        }
        phone(event) {
            this.setState({
                phone: event.target.value
            });
        }
        company(event) {
            this.setState({
                company: event.target.value
            });
        }
        startDate(event) {
            this.setState({
                start_date: event.target.value
            });
        }
        startTime(event) {
            this.setState({
                start_time: event.target.value
            });
        }
        endDate(event) {
            this.setState({
                end_date: event.target.value
            });
        }
        endTime(event) {
            this.setState({
                end_time: event.target.value
            });
        }
        p(s) {
            return s < 10 ? '0' + s : s;
        }
        setStartTime(date) {
            const d = new Date(date);
            const resDate = d.getFullYear() + '-' + this.p((d.getMonth() + 1)) + '-' + this.p(d.getDate());
            const resTime = this.p(d.getHours()) + ':' + this.p(d.getMinutes()) + ':' + this.p(d.getSeconds());
            const startDate = resDate + " " + resTime;
            console.log("start输入index656", startDate);
            this.setState({
                startTime: date,
                start_time: startDate,
            });
        }
        setEndTime(date) {
            const d = new Date(date);
            const resDate = d.getFullYear() + '-' + this.p((d.getMonth() + 1)) + '-' + this.p(d.getDate());
            const resTime = this.p(d.getHours()) + ':' + this.p(d.getMinutes()) + ':' + this.p(d.getSeconds());
            const endDate = resDate + " " + resTime;
            this.setState({
                endTime: date,
                end_time: endDate,
            });
        }
        showParkingList() {
            this.setState({
                parkingListBox: "rollSelectCauseBox",
                underground_parking_id_in: this.state.parkingListUL[this.state.parkingListIndexof].id,
                underground_parking_name_in: this.state.parkingListUL[this.state.parkingListIndexof].name,
            });
        }
        setParkingList(data) {
            this.setState({
                parkingListUL: data.response
            });
        }
        static inParkingList(i, id, name) { }
        ;
        inParkingList(i, id, name) {
            console.log("选中地下车库--预约", i, id, name);
            this.setState({
                underground_parking_id_in: id,
                underground_parking_name_in: name,
                parkingListIndexof: i,
            });
            this.globalAction.web_call_webgl_onParking(i);
        }
        hideParkingListBox() {
            this.setState({
                parkingListBox: "hide",
            });
        }
        getParkingListBox() {
            this.setState({
                parkingListBox: "hide",
                underground_parking_id: this.state.underground_parking_id_in,
                underground_parking_name: this.state.underground_parking_name_in,
            });
        }
        visitorSumbit() {
            if (this.state.car_license_color == "") {
                alert(" 请填写车牌颜色");
            }
            else if (this.state.car_license == "") {
                alert(" 请填写车牌号");
            }
            else if (this.state.applicant == "") {
                alert("请填写预约人 ");
            }
            else if (this.state.phone == "") {
                alert(" 请填写预约手机号码");
            }
            else if (this.state.company == "") {
                alert("请填写拜访企业");
            }
            else if (this.state.underground_parking_id == "") {
                alert("请选择停车场");
            }
            else if (this.state.start_time == "") {
                alert("请选择开始时间");
            }
            else if (this.state.end_time == "") {
                alert("请选择结束时间");
            }
            else {
                this.dataService.saveVisitorParkingAppointment(this.visitorSumbitSuccess, this.state);
            }
        }
        visitorSumbitSuccess(data) {
            alert(data);
        }
        render() {
            return (React.createElement("div", { className: this.state.componentBox },
                React.createElement("p", { className: "companyInfotit" },
                    React.createElement("span", { className: "iconfont companyInfoicon", onClick: this.showParking }, "\uE83B"),
                    React.createElement("span", null, "\u6765\u8BBF\u8F66\u8F86\u9884\u7EA6")),
                React.createElement("div", { className: this.state.contentBox },
                    React.createElement("div", { className: "foleBtn", onClick: this.toggleFold.bind(this) },
                        React.createElement("i", { className: this.state.iconfont, style: { "fontSize": "5rem" } }, "\uE849")),
                    React.createElement("form", null,
                        React.createElement("ul", { className: this.state.contentULcss },
                            React.createElement("li", null,
                                React.createElement("span", { className: "bookformLeft" },
                                    React.createElement("span", { className: "redStar", style: { "margin-right": "2rem" } }, "*"),
                                    "\u8F66\u724C\u989C\u8272"),
                                React.createElement("p", { className: "bookfromliRight" },
                                    React.createElement("input", { type: "text", value: this.state.car_license_color, placeholder: "\u8BF7\u8F93\u5165\u8F66\u724C\u989C\u8272", onChange: this.carLicenseColor.bind(this) }))),
                            React.createElement("li", null,
                                React.createElement("span", { className: "bookformLeft" },
                                    React.createElement("span", { className: "redStar", style: { "margin-right": "2rem" } }, "*"),
                                    "\u8F66\u724C\u53F7"),
                                React.createElement("p", { className: "bookfromliRight" },
                                    React.createElement("input", { type: "text", value: this.state.car_license, placeholder: "\u8BF7\u8F93\u5165\u8F66\u724C\u53F7", onChange: this.carLicense.bind(this) }))),
                            React.createElement("li", null,
                                React.createElement("span", { className: "bookformLeft" },
                                    React.createElement("span", { className: "redStar", style: { "margin-right": "2rem" } }, "*"),
                                    "\u9884\u7EA6\u4EBA"),
                                React.createElement("p", { className: "bookfromliRight" },
                                    React.createElement("input", { type: "text", value: this.state.applicant, placeholder: "\u8BF7\u8F93\u5165\u9884\u7EA6\u4EBA", onChange: this.applicant.bind(this) }))),
                            React.createElement("li", null,
                                React.createElement("span", { className: "bookformLeft" },
                                    React.createElement("span", { className: "redStar", style: { "margin-right": "2rem" } }, "*"),
                                    "\u7535\u8BDD\u53F7\u7801"),
                                React.createElement("p", { className: "bookfromliRight" },
                                    React.createElement("input", { type: "text", value: this.state.phone, placeholder: "\u8BF7\u8F93\u5165\u7535\u8BDD\u53F7\u7801", onChange: this.phone.bind(this) }))),
                            React.createElement("li", null,
                                React.createElement("span", { className: "bookformLeft" },
                                    React.createElement("span", { className: "redStar", style: { "margin-right": "2rem" } }, "*"),
                                    "\u62DC\u8BBF\u4F01\u4E1A"),
                                React.createElement("p", { className: "bookfromliRight" },
                                    React.createElement("input", { type: "text", value: this.state.company, placeholder: "\u8BF7\u8F93\u5165\u62DC\u8BBF\u4F01\u4E1A", onChange: this.company.bind(this) }))),
                            React.createElement("li", null,
                                React.createElement("span", { className: "bookformLeft" },
                                    React.createElement("span", { className: "redStar", style: { "margin-right": "2rem" } }, "*"),
                                    "\u505C\u8F66\u573A"),
                                React.createElement("p", { className: "bookfromliRight", onClick: this.showParkingList.bind(this) },
                                    React.createElement("input", { type: "text", value: this.state.underground_parking_name, placeholder: "\u8BF7\u9009\u62E9\u505C\u8F66\u573A" }),
                                    React.createElement("span", { className: "iconfont", style: { "fontSize": "3rem", "float": "right", " padding": " 0 0 0 3rem", "padding": " 0 0 0 4rem" } }, "\uE827"))),
                            React.createElement("li", { style: { "padding": "1.5rem 0rem" } },
                                React.createElement("p", null,
                                    React.createElement("span", { className: "redStar", style: { "float": "left", "margin-top": "-1.2rem" } }, "*"),
                                    React.createElement("div", { style: { "fonSize": "2.5rem" }, className: "mDate" },
                                        React.createElement(antd_mobile_13.DatePicker, { style: { "fonSize": "2.5rem" }, value: this.state.startTime, onChange: this.setStartTime.bind(this) },
                                            React.createElement(antd_mobile_13.List.Item, { arrow: "horizontal" }, "\u5F00\u59CB\u65F6\u95F4"))))),
                            React.createElement("li", { style: { "padding": "1.5rem 0rem" } },
                                React.createElement("p", null,
                                    React.createElement("span", { className: "redStar", style: { "float": "left", "margin-top": "-1.2rem" } }, "*"),
                                    React.createElement("div", { style: { "fonSize": "2.5rem" }, className: "mDate" },
                                        React.createElement(antd_mobile_13.DatePicker, { style: { "fonSize": "2.5rem" }, value: this.state.endTime, onChange: this.setEndTime.bind(this) },
                                            React.createElement(antd_mobile_13.List.Item, { arrow: "horizontal" }, "\u7ED3\u675F\u65F6\u95F4"))))),
                            React.createElement("div", { className: "bookSumbit", onClick: this.visitorSumbit.bind(this) }, "\u63D0\u4EA4"))),
                    React.createElement("div", { className: this.state.parkingListBox },
                        React.createElement("ul", { className: "rollSelectCauseULcss" }, this.state.parkingListUL.map((i, index) => {
                            return (React.createElement("li", { className: this.state.parkingListIndexof == index ? "rollSelectCauseli-active" : "rollSelectCauseli", onClick: this.inParkingList.bind(this, index, i.id, i.name) }, i.name));
                        })),
                        React.createElement("div", { className: "rollSelectCuasedBtn" },
                            React.createElement("span", { className: "rollSelectCancel", onClick: this.hideParkingListBox.bind(this) }, "\u53D6\u6D88"),
                            React.createElement("span", { className: "rollSelectConfirm", onClick: this.getParkingListBox.bind(this) }, "\u786E\u8BA4"))))));
        }
    }
});
define("narrate", ["require", "exports", "react", "react-router-dom", "compat", "dataService", "css!./styles/view.css"], function (require, exports, React, RouterDOM, compat_15, dataService_19) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Narrate extends React.Component {
        constructor(props) {
            super(props);
            this.dataService = new dataService_19.default();
            this.globalAction = new compat_15.default();
            this.state = {
                paused: true,
                activeType: 0,
                parkAudio: [],
                currentAudio: 0
            };
            Narrate.selfPlay = this.selfPlay.bind(this);
            this.playerOver = this.playerOver.bind(this);
            this.setAudio = this.setAudio.bind(this);
        }
        componentDidMount() {
            console.log("自动讲解");
            let audio = document.getElementById("audioTool");
            let audioN = 0;
            audio.onended = function () {
                console.log("当前音频，播放结束", audio.paused);
                audioN = audioN + 1;
                Narrate.selfPlay(audioN);
            };
            this.dataService.getParkInfo(this.setAudio, 1009);
        }
        setAudio(data) {
            console.log("setaudio", data.response[0].audio);
            this.setState({
                parkAudio: data.response[0].audio,
            }, () => {
                this.selfPlay(0);
            });
        }
        static selfPlay(audioN) { }
        ;
        selfPlay(audioN) {
            console.log("selfPlay", audioN);
            let audio = document.getElementById("audioTool");
            if (audioN !== this.state.parkAudio.length) {
                if (this.state.parkAudio[audioN].url) {
                    let url = this.state.parkAudio[audioN].url;
                    audio.src = url;
                    audio.play();
                    this.setState({
                        activeType: audioN
                    });
                }
            }
            else {
                audioN = 0;
                console.log("audioOver", audioN, audio.paused);
                this.playerOver(false);
            }
            ;
            console.log(audioN, "audioN", this.state);
        }
        playerOver(a) {
            this.setState({
                paused: a,
            });
        }
        audioClick(index, name, url) {
            console.log("handleSiblingsClick", index, name, url);
            this.setState({
                activeType: index,
                paused: true,
            });
            console.log("activeType", this.state.activeType);
            let audio = document.getElementById("audioTool");
            audio.src = url;
            audio.play();
        }
        togglePlay(a) {
            var audio = document.getElementById('audioTool');
            if (audio !== null) {
                console.log(audio.paused);
                if (audio.paused) {
                    audio.play();
                    this.setState({
                        paused: true,
                    });
                }
                else {
                    audio.pause();
                    this.setState({
                        paused: false,
                    });
                }
            }
        }
        render() {
            return (React.createElement("div", null,
                React.createElement("audio", { controls: true, id: "audioTool" },
                    React.createElement("source", { src: "" })),
                React.createElement("p", { className: "companyInfotit" },
                    React.createElement(RouterDOM.Link, { to: "/home" },
                        React.createElement("i", { className: "iconfont companyInfoicon" }, "\uE83B")),
                    React.createElement("span", null, "\u81EA\u52A8\u8BB2\u89E3")),
                React.createElement("div", { className: "audioBox" },
                    React.createElement("ul", { className: "flex-layout category-head" }, this.state.parkAudio.map((i, index) => {
                        return (React.createElement("li", { className: this.state.activeType == index ? "flex-active" : "flex", onClick: this.audioClick.bind(this, index, i.name, i.url), "data-index": index }, i.name));
                    })),
                    React.createElement("div", { className: "playBtn", onClick: this.togglePlay.bind(this) }, this.state.paused ?
                        React.createElement("span", { className: "iconfont", style: { "fontSize": "5rem", "color": "#fff" } }, "\uE84A")
                        :
                            React.createElement("span", { className: "iconfont", style: { "fontSize": "5rem", "color": "#fff" } }, "\uE84B")))));
        }
    }
    exports.default = Narrate;
});
define("isay", ["require", "exports", "react", "dataService", "css!./styles/isay.css"], function (require, exports, React, dataService_20) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Isay extends React.Component {
        constructor() {
            super(...arguments);
            this.state = {
                tagArray: [{ name: "咨询" }, { name: "建议" }, { name: "投诉" }, { name: "其它" }],
                tagIndex: 0,
                inputValue: "不能少于3个字且不能大于33个字",
                textareaValue: "请将留言内容描述出来（200字内）"
            };
            this.dataService = new dataService_20.default();
        }
        callBackSaveMyMicroCircle(data) {
            console.log(data);
        }
        inputFoucus() {
            if (this.state.inputValue === "不能少于3个字且不能大于33个字") {
                this.setState({ inputValue: "" });
            }
        }
        inputBlur() {
            if (this.state.inputValue === "") {
                this.setState({ inputValue: "不能少于3个字且不能大于33个字" });
            }
        }
        inputChange(event) {
            this.setState({ inputValue: event.target.value });
        }
        textareaFoucus() {
            if (this.state.textareaValue === "请将留言内容描述出来（200字内）") {
                this.setState({ textareaValue: "" });
            }
        }
        textareaBlur() {
            if (this.state.textareaValue === "") {
                this.setState({ textareaValue: "请将留言内容描述出来（200字内）" });
            }
        }
        textareaChange(event) {
            this.setState({ textareaValue: event.target.value });
        }
        goBack() {
            this.props.history.goBack();
        }
        changeIndex(index) {
            this.setState({ tagIndex: index });
        }
        submit() {
            let obj = {
                park_id: 1,
                user_id: 1,
                type_id: this.state.tagIndex,
                name: this.state.inputValue,
                content: this.state.textareaValue,
            };
            this.dataService.saveMyMicroCircle(this.callBackSaveMyMicroCircle.bind(this), obj);
        }
        render() {
            return (React.createElement("div", { className: "isay" },
                React.createElement("div", { className: "isay-back" },
                    React.createElement("img", { src: "./park_m/image/back.png", style: { marginBottom: "25px" }, onClick: this.goBack.bind(this) }),
                    React.createElement("span", { style: { color: "#6C6C6C", fontSize: "40px", marginLeft: "15px" } }, "\u6211\u6709\u8BDD\u8BF4")),
                React.createElement("div", { style: { fontSize: "40px", color: "#949494", margin: "20px 0 0 35px", overflow: "hidden" } },
                    React.createElement("div", { className: "isay-star" }),
                    React.createElement("div", { style: { float: "left", marginLeft: "15px" } }, "\u7559\u8A00\u7C7B\u522B:")),
                React.createElement("div", { className: "isay-tag" }, this.state.tagArray.map((item, index) => {
                    return (React.createElement("div", { className: "isay-tag-child", key: index, onClick: () => this.changeIndex(index) },
                        React.createElement("img", { src: this.state.tagIndex === index ? "./park_m/image/checked.png" : "./park_m/image/unchecked.png", style: { margin: "-22px 20px 0 0" } }),
                        React.createElement("span", { style: { fontSize: "40px", color: "#6C6C6C" } }, item.name)));
                })),
                React.createElement("div", { style: { borderTop: "3px solid #F2F2F2", marginTop: "30px", margin: "0 30px 0 30px" } }),
                React.createElement("div", { style: { fontSize: "40px", color: "#949494", margin: "20px 0 0 35px", overflow: "hidden" } },
                    React.createElement("div", { className: "isay-star" }),
                    React.createElement("div", { style: { float: "left", marginLeft: "15px" } }, "\u7559\u8A00\u4E3B\u9898:")),
                React.createElement("div", { className: "isay-theme" },
                    React.createElement("input", { className: "isay-theme-input", value: this.state.inputValue, onFocus: this.inputFoucus.bind(this), onBlur: this.inputBlur.bind(this), onChange: this.inputChange.bind(this) })),
                React.createElement("div", { style: { fontSize: "40px", color: "#949494", margin: "30px 0 0 35px", overflow: "hidden" } },
                    React.createElement("div", { className: "isay-star" }),
                    React.createElement("div", { style: { float: "left", marginLeft: "15px" } }, "\u7559\u8A00\u5185\u5BB9:")),
                React.createElement("div", { className: "isay-content" },
                    React.createElement("textarea", { className: "isay-content-textarea", value: this.state.textareaValue, onFocus: this.textareaFoucus.bind(this), onBlur: this.textareaBlur.bind(this), onChange: this.textareaChange.bind(this) })),
                React.createElement("div", { className: "isay-submit", onClick: this.submit.bind(this) }, "\u63D0\u4EA4")));
        }
    }
    exports.default = Isay;
});
define("workOrder", ["require", "exports", "react", "dataService", "css!./styles/workOrder.css"], function (require, exports, React, dataService_21) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class WorkOrder extends React.Component {
        constructor() {
            super(...arguments);
            this.state = {
                tagList: [
                    { id: 0, name: "全部" }
                ],
                tagIndex: 0,
                workOrderArray: [
                    { id: "", applicant: "", state_name: "", time: "" }
                ]
            };
            this.dataService = new dataService_21.default();
        }
        componentDidMount() {
            this.dataService.getWorkType(this.callBackGetMyAuthorityWorkType.bind(this));
            this.getMyWork();
        }
        callBackGetMyAuthorityWorkType(data) {
            let tagList = this.state.tagList;
            data.response.forEach(item => {
                tagList.push(item);
            });
            this.setState({ tagList: tagList });
        }
        callBackGetMyWork(data) {
            if (data.response) {
                this.setState({ workOrderArray: data.response });
            }
            else {
                this.setState({ workOrderArray: [] });
            }
        }
        getMyWork() {
            let obj = {};
            obj.id = JSON.parse(sessionStorage.getItem("userInfos")).userId;
            if (this.state.tagIndex !== 0) {
                obj.work_type = this.state.tagIndex;
            }
            this.dataService.getMyWork(this.callBackGetMyWork.bind(this), obj);
        }
        changeTag(index) {
            this.setState({ tagIndex: index }, () => {
                this.getMyWork();
            });
        }
        goBack() {
            this.props.history.goBack();
        }
        goWorkOrderDetail(index) {
            let obj = {
                id: this.state.workOrderArray[index].id,
                workType: this.state.workOrderArray[index].work_type,
                name: this.state.workOrderArray[index].work_type == 1 ? "身份认证工单" : this.state.workOrderArray[index].work_type == 2 ?
                    "场地预定工单" : this.state.workOrderArray[index].work_type == 3 ? "摆点申请工单" : this.state.workOrderArray[index].work_type == 4 ? "在线保修工单" : null,
                stateName: this.state.workOrderArray[index].state_name
            };
            sessionStorage.setItem("workOrder", JSON.stringify(obj));
            this.props.history.push("/workOrderDetail");
        }
        render() {
            return (React.createElement("div", { className: "work-order" },
                React.createElement("div", { className: "work-order-back", onClick: this.goBack.bind(this) },
                    React.createElement("img", { src: "./park_m/image/back.png", style: { margin: "-10px 10px 0 0" } }),
                    React.createElement("span", null, "\u6211\u7684\u5DE5\u5355")),
                React.createElement("div", { className: "work-order-tag" }, this.state.tagList.map((item, index) => {
                    return React.createElement("div", { key: index, className: index === this.state.tagIndex ? "work-order-tag-child-add" : "work-order-tag-child", onClick: e => this.changeTag(index) }, item.name);
                })),
                React.createElement("div", { className: "work-order-list" },
                    this.state.workOrderArray.map((item, index) => {
                        return (React.createElement("div", { key: index, className: "work-order-list-child", onClick: e => this.goWorkOrderDetail(index) },
                            React.createElement("div", { style: { overflow: "hidden", margin: "30px 0 0 40px" } },
                                React.createElement("div", { style: { float: "left", fontSize: "40px", color: "#333333", fontWeight: "600" } }, item.work_type == 1 ? "身份认证工单" : item.work_type == 2 ? "场地预定工单" : item.work_type == 3 ? "摆点申请工单" : item.work_type == 4 ? "在线保修工单" : ""),
                                React.createElement("img", { style: { float: "right", marginRight: "40px" }, src: "./park_m/image/right.png" })),
                            React.createElement("div", { style: { fontSize: "38px", color: "#949494", margin: "30px 0 0 40px" } },
                                "\u7533\u8BF7\u4EBA\uFF1A",
                                item.applicant),
                            React.createElement("div", { style: { fontSize: "38px", color: "#949494", margin: "10px 0 0 40px", overflow: "hidden" } },
                                React.createElement("div", { style: { float: "left" } },
                                    "\u7533\u8BF7\u65F6\u95F4\uFF1A",
                                    item.time),
                                React.createElement("div", { style: {
                                        float: "right", color: "#ffffff", width: "130px", height: "55px", borderRadius: "50px",
                                        marginRight: "40px", fontSize: "32px", textAlign: "center", lineHeight: "55px"
                                    }, className: item.state_name == "审核中" ? "bluebg" : item.state_name == "已通过" ? "greenbg" : item.state_name == "未通过" ? "redbg" : "whitebg" }, item.state_name))));
                    }),
                    this.state.workOrderArray.length > 0 ?
                        React.createElement("div", { style: { width: "100%", height: "60px", textAlign: "center", fontSize: "40px", lineHeight: "60px", marginTop: "30px" } }, "\u5230\u5E95\u5566~") :
                        React.createElement("div", { style: { width: "100%", height: "60px", textAlign: "center", fontSize: "40px", lineHeight: "60px", marginTop: "30px" } }, "\u6682\u65E0\u5339\u914D\u6570\u636E"))));
        }
    }
    exports.default = WorkOrder;
});
define("workOrderDetail", ["require", "exports", "react", "dataService", "css!./styles/workOrderDetail.css"], function (require, exports, React, dataService_22) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class workOrderDetail extends React.Component {
        constructor() {
            super(...arguments);
            this.state = {
                stateName: JSON.parse(sessionStorage.getItem("workOrder")).stateName,
                datas: {
                    applicant: "", phone: "", company: "", content: "", time: "", id: 0, examine_transfer: [{ checker: "" }, { checker: "", checker_date: "" }],
                    positions: { name: "", start_date: "", end_date: "" },
                    examine: { checker: "", checker_date: "", reply: "" }
                },
                tagArray: [
                    [
                        { name: "申请人", type: "text", content: "" }, { name: "联系号码", type: "text", content: "" }, { name: "企业名称", type: "text", content: "" },
                        { name: "角色类型", type: "text", content: "" }, { name: "认证材料", type: "image", content: "" }
                    ],
                    [
                        { name: "申请人", type: "text", content: "" }, { name: "手机号码", type: "text", content: "" }, { name: "申请企业", type: "text", content: "" },
                        { name: "使用场地", type: "text", content: "" }, { name: "开始日期", type: "text", content: "" }, { name: "开始时间", type: "text", content: "" },
                        { name: "结束日期", type: "text", content: "" }, { name: "结束时间", type: "text", content: "" }, { name: "会议主题", type: "text", content: "" },
                        { name: "具体需求", type: "text", content: "" }
                    ],
                    [
                        { name: "申请人", type: "text", content: "" }, { name: "手机号码", type: "text", content: "" }, { name: "申请单位", type: "text", content: "" },
                        { name: "具体内容", type: "text", content: "" }, { name: "广告位置", type: "text", content: "" }, { name: "开始时间", type: "text", content: "" },
                        { name: "结束时间", type: "text", content: "" }
                    ],
                    [
                        { name: "联系人", type: "text", content: "" }, { name: "电话号码", type: "text", content: "" }, { name: "保修描述", type: "text", content: "" }
                    ]
                ],
                reply: "200字内"
            };
            this.dataService = new dataService_22.default();
        }
        componentDidMount() {
            if (JSON.parse(sessionStorage.getItem("workOrder")).workType == 1) {
                this.dataService.getRoleAuthenticationInfo(this.callBackGetRoleAuthenticationInfo.bind(this), JSON.parse(sessionStorage.getItem("workOrder")).id);
            }
            else if (JSON.parse(sessionStorage.getItem("workOrder")).workType == 2) {
                this.dataService.getBookingRoomInfo(this.callBackGetBookingRoomInfo.bind(this), JSON.parse(sessionStorage.getItem("workOrder")).id);
            }
            else if (JSON.parse(sessionStorage.getItem("workOrder")).workType == 3) {
                this.dataService.getAdvertisementPointInfo(this.callBackGetAdvertisementPointInfo.bind(this), JSON.parse(sessionStorage.getItem("workOrder")).id);
            }
            else {
                this.dataService.getRepairInfo(this.callBackGetRepairInfo.bind(this), JSON.parse(sessionStorage.getItem("workOrder")).id);
            }
        }
        callBackGetRoleAuthenticationInfo(data) {
            console.log('aaaaaaaa', data);
            let tagArray = this.state.tagArray;
            tagArray[0][0].content = data.response.name;
            tagArray[0][1].content = data.response.phone;
            tagArray[0][2].content = data.response.company_name[0].company_name;
            tagArray[0][3].content = data.response.role_name;
            tagArray[0][4].content = data.response.pic_url;
            this.setState({
                tagArray: tagArray, datas: data.response,
                stateName: data.response.state === 0 ? "审核中" : data.response.state === 1 ? "已通过" : data.response.state === 2 ? "已转单" : "未通过"
            });
            console.log("aaaaaaaaaa", this.state.datas.examine_transfer);
        }
        callBackGetBookingRoomInfo(data) {
            console.log('bbbbbbbbb', data);
            let tagArray = this.state.tagArray;
            tagArray[1][0].content = data.response.applicant;
            tagArray[1][1].content = data.response.phone;
            tagArray[1][2].content = data.response.company;
            tagArray[1][3].content = data.response.publicplace;
            tagArray[1][4].content = data.response.start_date.substring(0, 10);
            tagArray[1][5].content = data.response.start_date.substring(10);
            tagArray[1][6].content = data.response.end_date.substring(0, 10);
            tagArray[1][7].content = data.response.end_date.substring(10);
            tagArray[1][8].content = data.response.theme;
            tagArray[1][9].content = data.response.content;
            this.setState({
                tagArray: tagArray, datas: data.response,
                stateName: data.response.state === 0 ? "审核中" : data.response.state === 1 ? "已通过" : data.response.state === 2 ? "已转单" : "未通过"
            });
        }
        callBackGetAdvertisementPointInfo(data) {
            console.log("摆点", data);
            let tagArray = this.state.tagArray;
            tagArray[2][0].content = data.response.applicant;
            tagArray[2][1].content = data.response.phone;
            tagArray[2][2].content = data.response.company;
            tagArray[2][3].content = data.response.content;
            tagArray[2][4].content = data.response.positions.name;
            tagArray[2][5].content = data.response.positions.start_date;
            tagArray[2][6].content = data.response.positions.end_date;
            this.setState({
                tagArray: tagArray, datas: data.response,
                stateName: data.response.state === 0 ? "审核中" : data.response.state === 1 ? "已通过" : data.response.state === 2 ? "已转单" : "未通过"
            });
        }
        callBackGetRepairInfo(data) {
            console.log("保修", data);
            let tagArray = this.state.tagArray;
            tagArray[3][0].content = data.response.linkman;
            tagArray[3][1].content = data.response.phone;
            tagArray[3][2].content = data.response.descript;
            this.setState({
                tagArray: tagArray, datas: data.response,
                stateName: data.response.state === 0 ? "审核中" : data.response.state === 1 ? "已通过" : data.response.state === 2 ? "已转单" : "未通过"
            });
        }
        goBack() {
            this.props.history.goBack();
        }
        inputChange(event) {
            this.setState({ reply: event.target.value });
        }
        textareaFoucus() {
            if (this.state.reply === "200字内") {
                this.setState({ reply: "" });
            }
        }
        textareaBlur() {
            if (this.state.reply === "") {
                this.setState({ reply: "200字内" });
            }
        }
        submit(index) {
            if (index === 0) {
                this.props.history.push("/searchUser");
                return;
            }
            let obj = {
                uid: JSON.parse(sessionStorage.getItem("userInfos")).userId,
                id: JSON.parse(sessionStorage.getItem("workOrder")).id,
                state: index,
                reply: this.state.reply
            };
            if (!this.state.reply || this.state.reply === "200字内") {
                return alert("请填写回复!");
            }
            if (JSON.parse(sessionStorage.getItem("workOrder")).workType == 1) {
                this.dataService.changeRoleAuthenticationInfo(this.callBack.bind(this), obj);
            }
            else if (JSON.parse(sessionStorage.getItem("workOrder")).workType == 2) {
                this.dataService.changeBookingRoomInfo(this.callBack.bind(this), obj);
            }
            else if (JSON.parse(sessionStorage.getItem("workOrder")).workType == 3) {
                this.dataService.changeAdvertisementPointInfo(this.callBack.bind(this), obj);
            }
            else {
                this.dataService.changeRepairInfo(this.callBack.bind(this), obj);
            }
        }
        callBack(data) {
            if (data.return_code == 100) {
                this.props.history.goBack();
            }
        }
        render() {
            return (React.createElement("div", { className: "work-order-detail" },
                React.createElement("div", { className: "work-order-detail-back", onClick: this.goBack.bind(this) },
                    React.createElement("img", { src: "./park_m/image/back.png", style: { margin: "-10px 10px 0 0" } }),
                    React.createElement("span", null, "\u6211\u7684\u5DE5\u5355")),
                React.createElement("div", { style: { padding: "40px 0 0 50px", borderBottom: "4px solid #F2F2F2", width: "100%", height: "140px" } },
                    React.createElement("span", { style: { fontSize: "40px", fontWeight: "600" } }, JSON.parse(sessionStorage.getItem("workOrder")).name),
                    React.createElement("span", { style: {
                            float: "right", color: "#ffffff", width: "130px", height: "55px", borderRadius: "50px",
                            marginRight: "40px", fontSize: "32px", textAlign: "center", lineHeight: "55px"
                        }, className: this.state.stateName == "审核中" ? "bluebg" : this.state.stateName == "已通过" ? "greenbg" : this.state.stateName == "未通过" ? "redbg" : "whitebg" }, this.state.stateName)),
                this.state.tagArray[JSON.parse(sessionStorage.getItem("workOrder")).workType - 1].map((item, index) => {
                    return (React.createElement("div", { style: { margin: "30px 0 0 50px", overflow: "hidden" }, key: index },
                        React.createElement("div", { style: { color: "#949494", fontSize: "40px", float: "left", width: "25%" } }, item.name),
                        item.type === "text" ?
                            React.createElement("div", { style: { color: "#333333", fontSize: "40px", float: "left", width: "70%" } }, item.content) :
                            React.createElement("div", null,
                                React.createElement("img", { src: item.content }))));
                }),
                React.createElement("div", { style: { fontSize: "40px", color: "#949494", float: "right", margin: "30px 50px 0 0" } },
                    "\u5DE5\u5355\u7533\u8BF7\u65F6\u95F4\uFF1A",
                    this.state.datas.time),
                React.createElement("div", { style: { width: "100%", overflow: "hidden", textAlign: "center" } },
                    React.createElement("div", { style: { border: "2px solid #F2F2F2", width: "90%", margin: "30px 0 0 5%" } })),
                this.state.datas.examine.reply ?
                    React.createElement("div", null,
                        React.createElement("div", { style: { margin: "30px 0 0 50px" } },
                            React.createElement("span", { style: { color: "#949494", fontSize: "40px" } }, "\u7531"),
                            React.createElement("span", { style: { color: "#333333", fontSize: "40px", marginLeft: "25px", fontWeight: "600" } }, this.state.datas.examine.checker),
                            React.createElement("span", { style: { color: "#949494", fontSize: "40px", marginLeft: "25px" } }, "\u5BA1\u6838\u4E8E"),
                            React.createElement("span", { style: { color: "#333333", fontSize: "40px", marginLeft: "25px" } }, this.state.datas.examine.checker_date)),
                        React.createElement("div", { style: { margin: "20px 0 0 50px" } },
                            React.createElement("span", { style: { color: "#949494", fontSize: "40px" } }, "\u5BA1\u6838\u56DE\u590D:")),
                        React.createElement("div", { style: { margin: "20px 0 0 50px", color: "#333333", fontSize: "40px", wordBreak: "break-all", width: "90%" } }, this.state.datas.examine.reply)) : null,
                this.state.datas.examine_transfer ?
                    React.createElement("div", null,
                        React.createElement("div", { style: { margin: "30px 0 0 50px", fontSize: "38px" } },
                            React.createElement("span", { style: { color: "#949494" } }, "\u7531"),
                            React.createElement("span", { style: { color: "#333333", marginLeft: "25px", fontWeight: "600" } }, this.state.datas.examine_transfer[0].checker),
                            React.createElement("span", { style: { color: "#949494", marginLeft: "25px" } }, "\u8F6C\u5355\u4E8E"),
                            React.createElement("span", { style: { color: "#333333", marginLeft: "25px" } },
                                this.state.datas.examine_transfer[1].checker,
                                " ",
                                this.state.datas.examine_transfer[1].checker_date))) : null,
                this.state.stateName === "审核中" && JSON.parse(sessionStorage.getItem("userInfos")).roles.role_name === "园区管理员" ?
                    React.createElement("div", null,
                        React.createElement("div", { style: { padding: "30px 0 0 50px" } },
                            React.createElement("div", { className: "isay-star" }),
                            React.createElement("div", { style: { marginLeft: "30px", fontSize: "40px", color: "#333333" } }, "\u5BA1\u6838\u56DE\u590D\uFF1A"),
                            React.createElement("textarea", { style: { height: "200px", width: "90%", backgroundColor: "#F2F2F2", marginTop: "30px", fontSize: "40px", color: "#949494" }, value: this.state.reply, onFocus: this.textareaFoucus.bind(this), onBlur: this.textareaBlur.bind(this), onChange: this.inputChange.bind(this) })),
                        React.createElement("div", { style: { height: "150px", width: "100%", position: "fixed", bottom: 0, fontSize: "45px" } },
                            React.createElement("div", { style: { float: "left", height: "100%", width: "50%", lineHeight: "150px", textAlign: "center", backgroundColor: "#FE4E4E", color: "#FFFFFF" }, onClick: e => this.submit(3) }, "\u4E0D\u901A\u8FC7"),
                            React.createElement("div", { style: { float: "left", height: "100%", width: "50%", lineHeight: "150px", textAlign: "center", backgroundColor: "#0B8BF0", color: "#FFFFFF" }, onClick: e => this.submit(1) }, "\u901A\u8FC7"))) : null));
        }
    }
    exports.default = workOrderDetail;
});
define("modificationAuthentication", ["require", "exports", "react", "react-router-dom", "dataService", "css!./styles/modificationAuthentication.css"], function (require, exports, React, react_router_dom_5, dataService_23) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ModificationAuthentication extends React.Component {
        constructor() {
            super(...arguments);
            this.state = {
                userName: "用户昵称XXX",
                phone: "",
                company_id: "",
                role_name: "",
            };
            this.props = {
                location: this.props.location,
                history: this.props.history
            };
            this.dataService = new dataService_23.default();
        }
        componentDidMount() {
            let userName = JSON.parse(sessionStorage.getItem("userInfos")).name;
            let phone = JSON.parse(sessionStorage.getItem("userInfos")).phone;
            let company_id = JSON.parse(sessionStorage.getItem("userInfos")).enterpriseId;
            let role_name = JSON.parse(sessionStorage.getItem("userInfos")).roles.role_name;
            console.log("role_name", role_name);
            this.setState({
                userName: userName,
                phone: phone,
                company_id: company_id,
                role_name: role_name,
            });
        }
        modifyUserName() {
            if (this.state.userName != null && this.state.userName != "") {
                console.log("userNameNew", this.state.userName);
                let userInfos = JSON.parse(sessionStorage.getItem("userInfos"));
                this.dataService.modifyUserInfo(this.callBackModifyUserName.bind(this), this.state.userName, userInfos.phone, sessionStorage.getItem("enterpriseId"));
            }
        }
        callBackModifyUserName(data) {
            let userInfos = JSON.parse(sessionStorage.getItem("userInfos"));
            userInfos.name = data.response.username;
            sessionStorage.setItem("userInfos", JSON.stringify(userInfos));
            this.setState({
                userName: data.response.username,
            });
            alert(data.err_msg);
            this.props.history.goBack();
        }
        focus() {
            if (this.state.userName === "用户昵称XXX") {
                this.setState({ userName: "" });
            }
        }
        blur() {
            if (this.state.userName === "") {
                this.setState({ userName: "用户昵称XXX" });
            }
        }
        change(event) {
            this.setState({ userName: event.target.value });
        }
        goBack() {
            this.props.history.goBack();
        }
        render() {
            return (React.createElement("div", { className: "modification-authentication" },
                React.createElement("div", { className: "personal-center-tag-c" },
                    React.createElement("div", { style: { paddingLeft: "30px", float: "left" }, onClick: this.goBack.bind(this) },
                        React.createElement("img", { src: "./park_m/image/right.png", style: { transform: "rotate(180deg)", marginBottom: "10px" } }),
                        React.createElement("span", { style: { color: "#6C6C6C" } }, "\u4FEE\u6539\u8BA4\u8BC1"))),
                React.createElement("div", { className: "modification-authentication-tag", style: { marginTop: "15px" } },
                    React.createElement("div", { style: { paddingLeft: "40px", float: "left" } },
                        React.createElement("span", { style: { color: "#333333", fontSize: "42px" } }, "\u7528\u6237\u6635\u79F0"),
                        React.createElement("input", { value: this.state.userName, className: "modification-authentication-input", onFocus: this.focus.bind(this), onBlur: this.blur.bind(this), onChange: this.change.bind(this) })),
                    React.createElement("div", { style: { float: "right", marginRight: "50px", color: "#0B8BF0" }, onClick: this.modifyUserName.bind(this) }, "\u4FEE\u6539")),
                this.state.role_name !== "园区管理员" ?
                    React.createElement("div", { className: "modification-authentication-tag" },
                        React.createElement("div", { style: { paddingLeft: "40px", float: "left" } },
                            React.createElement("span", { style: { color: "#333333", fontSize: "42px" } }, "\u8EAB\u4EFD\u8BA4\u8BC1"),
                            React.createElement("span", { style: { color: "#949494", fontSize: "42px", marginLeft: "50px" } }, "\u8BA4\u8BC1\u6210\u4E3A\u4F01\u4E1A\u7BA1\u7406\u5458")),
                        React.createElement(react_router_dom_5.Link, { to: "/identityAuthentication" },
                            React.createElement("div", { style: { float: "right", marginRight: "50px", color: "#0B8BF0" } }, "\u8BA4\u8BC1"))) : null));
        }
    }
    exports.default = ModificationAuthentication;
});
define("message", ["require", "exports", "react", "dataService", "css!./styles/message.css"], function (require, exports, React, dataService_24) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Message extends React.Component {
        constructor() {
            super(...arguments);
            this.state = {
                tagList: ["全部", "房屋租赁到期", "车位到期", "参与活动"],
                tagIndex: 0,
                workOrderArray: []
            };
            this.dataService = new dataService_24.default();
        }
        componentDidMount() {
            this.dataService.getMyMsgType(this.callBackGetMyMsgType.bind(this));
            this.dataService.getMyMsgInfo(this.callBackGetMyMsgInfo.bind(this), "");
        }
        callBackGetMyMsgType(data) {
            if (data.return_code == 100) {
                let tagList = [{ id: 0, name: "全部" }];
                data.response.forEach(item => {
                    tagList.push(item);
                });
                this.setState({
                    tagList: tagList
                });
            }
        }
        callBackGetMyMsgInfo(data) {
            if (data.return_code == 100) {
                this.setState({ workOrderArray: data.response });
            }
        }
        changeTag(index, id) {
            this.setState({ tagIndex: index });
            this.dataService.getMyMsgInfo(this.callBackGetMyMsgInfo.bind(this), id);
        }
        goBack() {
            this.props.history.goBack();
        }
        render() {
            return (React.createElement("div", { className: "work-order" },
                React.createElement("div", { className: "work-order-back", onClick: this.goBack.bind(this) },
                    React.createElement("img", { src: "./park_m/image/back.png", style: { margin: "-10px 10px 0 0" } }),
                    React.createElement("span", { style: { color: "#333333" } }, "\u6211\u7684\u6D88\u606F")),
                React.createElement("div", { className: "work-order-tag" }, this.state.tagList.map((item, index) => {
                    return React.createElement("div", { key: index, className: index === this.state.tagIndex ? "work-order-tag-child-add" : "work-order-tag-child", onClick: e => this.changeTag(index, item.id) }, item.name);
                })),
                React.createElement("div", { className: "work-order-list" },
                    this.state.workOrderArray.map((item, index) => {
                        return React.createElement("div", { key: index, className: "work-order-list-child" },
                            React.createElement("div", { style: { overflow: "hidden", margin: "30px 0 0 40px" } },
                                React.createElement("div", { style: { float: "left", fontSize: "40px", color: "#333333", fontWeight: "600" } },
                                    "\u60A8\u53C2\u52A0\u7684\u6D3B\u52A8",
                                    new Date(item.time).getTime() > new Date().getTime() ? "即将开始" : "")),
                            React.createElement("div", { style: { fontSize: "38px", margin: "30px 0 0 40px", color: new Date(item.time).getTime() > new Date().getTime() ? "" : "red" } },
                                "\u6D3B\u52A8\u540D\u79F0\uFF1A",
                                item.name),
                            React.createElement("div", { style: { fontSize: "38px", margin: "10px 0 0 40px", color: new Date(item.time).getTime() > new Date().getTime() ? "" : "red" } },
                                "\u6D3B\u52A8\u65F6\u95F4\uFF1A",
                                item.time));
                    }),
                    this.state.workOrderArray.length > 0 ?
                        React.createElement("div", { style: { width: "100%", height: "60px", textAlign: "center", fontSize: "40px", lineHeight: "60px", marginTop: "30px" } }, "\u5230\u5E95\u5566~") :
                        React.createElement("div", { style: { width: "100%", height: "60px", textAlign: "center", fontSize: "40px", lineHeight: "60px", marginTop: "30px" } }, "\u6682\u65E0\u5339\u914D\u6570\u636E"))));
        }
    }
    exports.default = Message;
});
define("rentRoom", ["require", "exports", "react", "react-router-dom", "css!./styles/rentRoom.css"], function (require, exports, React, react_router_dom_6) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class RentRoom extends React.Component {
        constructor() {
            super(...arguments);
            this.state = {
                workOrderArray: ["A座-1F-201室", "A座-1F-202室", "A座-1F-203室"],
                defaultIndex: 0
            };
        }
        goBack() {
            this.props.history.goBack();
        }
        render() {
            return (React.createElement("div", { className: "rent-room" },
                React.createElement("div", { className: "rent-room-back" },
                    React.createElement("div", { style: { float: "left" }, onClick: this.goBack.bind(this) },
                        React.createElement("img", { src: "./park_m/image/back.png", style: { margin: "-10px 10px 0 0" } }),
                        React.createElement("span", null, "\u79DF\u7528\u623F\u95F4\u7BA1\u7406"))),
                React.createElement("div", { className: "rent-room-list" },
                    this.state.workOrderArray.map((item, index) => {
                        return React.createElement(react_router_dom_6.Link, { to: "/rentRoomDetail" },
                            React.createElement("div", { key: index, className: "rent-room-list-child" },
                                React.createElement("div", { style: { overflow: "hidden", margin: "30px 0 0 40px" } },
                                    React.createElement("div", { style: { float: "left", fontSize: "40px", color: "#333333", fontWeight: "600" } }, item),
                                    React.createElement("img", { style: { float: "right", marginRight: "40px" }, src: "./park_m/image/right.png" })),
                                React.createElement("div", { style: { fontSize: "38px", color: "#949494", margin: "30px 0 0 40px" } },
                                    "\u4F7F\u7528\u72B6\u6001\uFF1A",
                                    React.createElement("span", { style: { marginLeft: "30px", color: "#333333" } }, "\u79DF\u7528\u4E2D")),
                                React.createElement("div", { style: { fontSize: "38px", color: "#949494", margin: "10px 0 0 40px", overflow: "hidden" } },
                                    React.createElement("div", { style: { float: "left" } },
                                        "\u79DF\u7528\u65E5\u671F\uFF1A",
                                        React.createElement("span", { style: { color: "#F53636", marginLeft: "28px" } }, "2020-03-20 ~ 2021-03-20")),
                                    this.state.defaultIndex === index ?
                                        React.createElement("div", { style: {
                                                float: "right", backgroundColor: "#0BC491", color: "#ffffff", width: "160px", height: "55px", borderRadius: "50px",
                                                marginRight: "40px", fontSize: "32px", textAlign: "center", lineHeight: "55px"
                                            } }, "\u9ED8\u8BA4\u5C55\u793A") : null)));
                    }),
                    React.createElement(react_router_dom_6.Link, { to: "/defaultRentRoom" },
                        React.createElement("div", { style: { width: "100%", height: "60px", textAlign: "center", fontSize: "40px", lineHeight: "60px", marginTop: "50px", color: "#0B8BF0" } }, "\u9009\u62E9\u9ED8\u8BA4\u5C55\u793A\u623F\u95F4")))));
        }
    }
    exports.default = RentRoom;
});
define("roomBaseUpdate", ["require", "exports", "react", "dataService"], function (require, exports, React, dataService_25) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class RoomBaseUpdate extends React.Component {
        constructor() {
            super(...arguments);
            this.props = {
                location: this.props.location,
                history: this.props.history
            };
            this.state = {
                isElevator: false,
                lift: JSON.parse(sessionStorage.getItem("roomInfo"))[0].lift,
                square: JSON.parse(sessionStorage.getItem("roomInfo"))[0].square,
                floorList: [],
                floorIndex: -1,
                isFloor: false,
                isFloorRight: false
            };
            this.dataService = new dataService_25.default();
        }
        componentDidMount() {
            console.log(this.props.location.state.state);
            this.dataService.getParkBuildingInfo(this.callBackGetParkBuildingInfo.bind(this));
        }
        callBackGetParkBuildingInfo(data) {
            console.log("1112", data);
            this.setState({ floorList: data.response[parseInt(sessionStorage.getItem("floorId"))].child });
        }
        goBack() {
            this.props.history.goBack();
        }
        changeElevator() {
            this.setState({ isElevator: !this.state.isElevator });
        }
        closeElevator(flag) {
            this.setState({ isElevator: false, lift: flag ? 1 : 0 });
        }
        changea(event) {
            this.setState({ square: event.target.value });
        }
        submit() {
            let obj = {
                square: this.state.square,
                lift: this.state.lift,
                title: this.props.location.state.state.title,
                price: this.props.location.state.state.price,
                freeRent: this.props.location.state.state.freeRent,
                decorateName: this.props.location.state.state.decorateName,
                decorateId: this.props.location.state.state.decorateId,
                stationAmount: this.props.location.state.state.stationAmount,
                inspectionTime: this.props.location.state.state.inspectionTime,
                enableRentTime: this.props.location.state.state.enableRentTime,
                headimageurl: this.props.location.state.state.headimageurl,
                pic: this.props.location.state.state.pic,
                video: this.props.location.state.state.video,
                contact: this.props.location.state.state.contact,
                phone: this.props.location.state.state.phone,
                sellPrice: this.props.location.state.state.sellPrice,
                require: this.props.location.state.state.require,
                floorId: this.state.floorList[this.state.floorIndex].id
            };
            let roomInfo = JSON.parse(sessionStorage.getItem("roomInfo"));
            roomInfo[0].lift = this.state.lift;
            roomInfo[0].square = this.state.square;
            roomInfo[0].floor = this.state.floorList[this.state.floorIndex].name;
            sessionStorage.setItem("roomInfo", JSON.stringify(roomInfo));
            this.dataService.saveRoomBaseInfo(this.callBackSaveRoomBaseInfo.bind(this), obj);
        }
        callBackSaveRoomBaseInfo(data) {
            if (data.return_code == 100) {
                this.props.history.goBack();
            }
        }
        changeFloor() {
            this.setState({ isFloor: !this.state.isFloor, isFloorRight: !this.state.isFloorRight });
        }
        choiceFloor(index) {
            this.setState({ isFloor: false, floorIndex: index, isFloorRight: false });
        }
        render() {
            return (React.createElement("div", { className: "rent-room", style: { backgroundColor: "#ffffff" } },
                React.createElement("div", { className: "rent-room-back" },
                    React.createElement("div", { style: { float: "left", width: "100%" }, onClick: this.goBack.bind(this) },
                        React.createElement("img", { src: "./park_m/image/back.png", style: { margin: "-10px 10px 0 0" } }),
                        React.createElement("span", null, "\u623F\u95F4\u57FA\u672C\u4FE1\u606F\u7F16\u8F91-"),
                        React.createElement("span", null, sessionStorage.getItem("roomName")),
                        React.createElement("span", null, "-\u57FA\u672C\u4FE1\u606F\u4FEE\u6539"))),
                React.createElement("div", { style: { width: "100%", height: "15px", backgroundColor: "#F2F2F2" } }),
                React.createElement("div", { className: "service-tel", style: { fontSize: "40px", color: "#333333", borderBottom: "2px solid #F2F2F2" } },
                    React.createElement("div", { className: "enterprise-information-star" }),
                    React.createElement("div", { style: { color: "#949494", height: "80px", float: "left", width: "30%" } }, "\u5EFA\u7B51\u9762\u79EF"),
                    React.createElement("input", { onChange: this.changea.bind(this), value: this.state.square, style: { float: "left", width: "65%", height: "120px", border: "none", outline: "none", marginTop: "-1px", paddingLeft: "30px", color: "#6C6C6C" } })),
                React.createElement("div", { className: "service-tel", style: { fontSize: "40px", color: "#333333", borderBottom: "2px solid #F2F2F2" } },
                    React.createElement("div", { className: "enterprise-information-star" }),
                    React.createElement("div", { style: { color: "#949494", height: "80px", float: "left", width: "30%" } }, "\u603B\u5171\u697C\u5C42"),
                    React.createElement("input", { value: this.props.location.state.state.floorSum + "层", style: { float: "left", width: "65%", height: "120px", border: "none", outline: "none", marginTop: "-1px", paddingLeft: "30px", color: "#6C6C6C" } })),
                React.createElement("div", { className: "service-tel", style: { fontSize: "40px", color: "#333333", borderBottom: "2px solid #F2F2F2" } },
                    React.createElement("div", { className: "enterprise-information-star" }),
                    React.createElement("div", { style: { color: "#949494", height: "80px", float: "left", width: "30%" } }, "\u6240\u5728\u697C\u5C42"),
                    React.createElement("div", { onClick: this.changeFloor.bind(this), style: { float: "left", width: "65%", height: "120px", paddingLeft: "30px", color: "#6C6C6C" } },
                        this.state.floorIndex === -1 ? this.props.location.state.state.floor : this.state.floorList[this.state.floorIndex].name,
                        React.createElement("div", { style: { height: "100%", float: "right" } },
                            React.createElement("img", { src: "./park_m/image/right.png", style: { margin: "-10px 25px 0 0", transform: this.state.isFloorRight ? "rotate(90deg)" : "" } })))),
                this.state.isFloor ?
                    React.createElement("div", { style: { position: "relative", width: "99.9%", backgroundColor: "#ffffff", border: "1px solid #797272", fontSize: "40px", textAlign: "center" } }, this.state.floorList.map((item, index) => {
                        return (React.createElement("div", { style: { width: "500px", height: "100px", lineHeight: "100px", margin: "auto" }, onClick: e => this.choiceFloor(index) }, item.name));
                    })) : null,
                React.createElement("div", { className: "service-tel", style: { fontSize: "40px", color: "#333333", borderBottom: "2px solid #F2F2F2" }, onClick: this.changeElevator.bind(this) },
                    React.createElement("div", { className: "enterprise-information-star" }),
                    React.createElement("div", { style: { color: "#949494", height: "80px", float: "left", width: "30%", marginRight: "30px" } }, "\u7535\u68AF"),
                    React.createElement("div", { style: { color: "#6C6C6C", float: "left" } }, this.state.lift == 1 ? "有" : "没有"),
                    React.createElement("div", { style: { height: "100%", float: "right" } },
                        React.createElement("img", { src: "./park_m/image/right.png", style: { margin: "-10px 40px 0 0", transform: this.state.isElevator ? "rotate(90deg)" : "" } })),
                    this.state.isElevator ?
                        React.createElement("div", { style: { position: "relative", top: "120px", width: "97%", height: "200px", backgroundColor: "#ffffff", border: "1px solid #797272" } },
                            React.createElement("div", { style: { width: "500px", height: "100px", margin: "auto", paddingRight: "100px" }, onClick: e => this.closeElevator(true) }, "\u6709"),
                            React.createElement("div", { style: { width: "500px", height: "100px", margin: "auto", paddingRight: "100px" }, onClick: e => this.closeElevator(false) }, "\u6CA1\u6709")) : null),
                React.createElement("div", { onClick: this.submit.bind(this), style: { width: "100%", height: "150px", textAlign: "center", lineHeight: "150px", color: "#ffffff", backgroundColor: "#0B8BF0", position: "fixed", bottom: 0, fontSize: "50px" } }, "\u63D0\u4EA4")));
        }
    }
    exports.default = RoomBaseUpdate;
});
define("rentRoomDetail", ["require", "exports", "react", "css!./styles/rentRoomDetail.css"], function (require, exports, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class RentRoomDetail extends React.Component {
        constructor() {
            super(...arguments);
            this.state = {};
        }
        goBack() {
            this.props.history.goBack();
        }
        render() {
            return (React.createElement("div", { className: "rent-room-detail" },
                React.createElement("div", { className: "rent-room-back" },
                    React.createElement("div", { style: { float: "left" }, onClick: this.goBack.bind(this) },
                        React.createElement("img", { src: "./park_m/image/back.png", style: { margin: "-10px 10px 0 0" } }),
                        React.createElement("span", null, "\u79DF\u7528\u623F\u95F4\u7BA1\u7406"))),
                React.createElement("div", { className: "rent-room-detail-content" },
                    React.createElement("div", { style: { overflow: "hidden", marginBottom: "20px" } },
                        React.createElement("div", { style: { float: "left", width: "22%" } }, "\u623F\u95F4\u540D\u79F0"),
                        React.createElement("div", { style: { color: "#333333", marginLeft: "30px", float: "left", width: "60%" } }, "A\u5EA7-1F-201\u5BA4")),
                    React.createElement("div", { style: { overflow: "hidden", marginBottom: "20px" } },
                        React.createElement("div", { style: { float: "left", width: "22%" } }, "\u4F7F\u7528\u72B6\u6001"),
                        React.createElement("div", { style: { color: "#333333", marginLeft: "30px", float: "left", width: "60%" } }, "\u79DF\u7528\u4E2D")),
                    React.createElement("div", { style: { overflow: "hidden", marginBottom: "20px" } },
                        React.createElement("div", { style: { float: "left", width: "22%" } }, "\u79DF\u7528\u5355\u4F4D"),
                        React.createElement("div", { style: { color: "#333333", marginLeft: "30px", float: "left", width: "60%" } }, "\u6D59\u6C5F\u6C38\u62D3\u4FE1\u606F\u79D1\u6280\u6709\u9650\u516C\u53F8")),
                    React.createElement("div", { style: { overflow: "hidden", marginBottom: "20px" } },
                        React.createElement("div", { style: { float: "left", width: "22%" } }, "\u79DF\u7528\u4EBA"),
                        React.createElement("div", { style: { color: "#333333", marginLeft: "30px", float: "left", width: "60%" } }, "\u5C0F\u660E")),
                    React.createElement("div", { style: { overflow: "hidden", marginBottom: "20px" } },
                        React.createElement("div", { style: { float: "left", width: "22%" } }, "\u8054\u7CFB\u7535\u8BDD"),
                        React.createElement("div", { style: { color: "#333333", marginLeft: "30px", float: "left", width: "60%" } }, "123456789")),
                    React.createElement("div", { style: { overflow: "hidden", marginBottom: "20px" } },
                        React.createElement("div", { style: { float: "left", width: "22%" } }, "\u79DF\u7528\u65E5\u671F"),
                        React.createElement("div", { style: { color: "#F53636", marginLeft: "30px", float: "left", width: "60%" } }, "2020-03-20 ~ 2021-03-20")))));
        }
    }
    exports.default = RentRoomDetail;
});
define("parkWorkOrder", ["require", "exports", "react", "dataService", "css!./styles/workOrder.css"], function (require, exports, React, dataService_26) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class parkWorkOrder extends React.Component {
        constructor() {
            super(...arguments);
            this.state = {
                tagList: [{ id: "", name: "全部" }, { id: 0, name: "审核中" }, { id: 1, name: "已通过" }, { id: 3, name: "未通过" }, { id: 2, name: "已转单" }],
                tagIndex: 0,
                workOrderArray: [
                    { id: "", applicant: "", state_name: "", time: "" }
                ]
            };
            this.dataService = new dataService_26.default();
        }
        componentDidMount() {
            this.getMyWork();
        }
        callBackGetMyWork(data) {
            if (data.response) {
                this.setState({ workOrderArray: data.response });
            }
            else {
                this.setState({ workOrderArray: [] });
            }
        }
        getMyWork() {
            let obj = {};
            obj.id = JSON.parse(sessionStorage.getItem("userInfos")).userId;
            if (this.state.tagIndex !== 0) {
                obj.state_type = this.state.tagList[this.state.tagIndex].id;
            }
            this.dataService.getMyWork(this.callBackGetMyWork.bind(this), obj);
        }
        changeTag(index) {
            this.setState({ tagIndex: index }, () => {
                this.getMyWork();
            });
        }
        goBack() {
            this.props.history.goBack();
        }
        goWorkOrderDetail(index) {
            let obj = {
                id: this.state.workOrderArray[index].id,
                workType: this.state.workOrderArray[index].work_type,
                name: this.state.workOrderArray[index].work_type == 1 ? "身份认证工单" : this.state.workOrderArray[index].work_type == 2 ?
                    "场地预定工单" : this.state.workOrderArray[index].work_type == 3 ? "摆点申请工单" : "在线保修工单",
                stateName: this.state.workOrderArray[index].state_name
            };
            sessionStorage.setItem("workOrder", JSON.stringify(obj));
            this.props.history.push("/workOrderDetail");
        }
        render() {
            return (React.createElement("div", { className: "work-order" },
                React.createElement("div", { className: "work-order-back", onClick: this.goBack.bind(this) },
                    React.createElement("img", { src: "./park_m/image/back.png", style: { margin: "-10px 10px 0 0" } }),
                    React.createElement("span", null, "\u6211\u7684\u5DE5\u5355")),
                React.createElement("div", { className: "work-order-tag" }, this.state.tagList.map((item, index) => {
                    return React.createElement("div", { key: index, className: index === this.state.tagIndex ? "work-order-tag-child-add" : "work-order-tag-child", onClick: e => this.changeTag(index) }, item.name);
                })),
                React.createElement("div", { className: "work-order-list" },
                    this.state.workOrderArray.map((item, index) => {
                        return (React.createElement("div", { key: index, className: "work-order-list-child", onClick: e => this.goWorkOrderDetail(index) },
                            React.createElement("div", { style: { overflow: "hidden", margin: "30px 0 0 40px" } },
                                React.createElement("div", { style: { float: "left", fontSize: "40px", color: "#333333", fontWeight: "600" } }, item.work_type == 1 ? "身份认证工单" : item.work_type == 2 ? "场地预定工单" : item.work_type == 3 ? "摆点申请工单" : "在线保修工单"),
                                React.createElement("img", { style: { float: "right", marginRight: "40px" }, src: "./park_m/image/right.png" })),
                            React.createElement("div", { style: { fontSize: "38px", color: "#949494", margin: "30px 0 0 40px" } },
                                "\u7533\u8BF7\u4EBA\uFF1A",
                                item.applicant),
                            React.createElement("div", { style: { fontSize: "38px", color: "#949494", margin: "10px 0 0 40px", overflow: "hidden" } },
                                React.createElement("div", { style: { float: "left" } },
                                    "\u7533\u8BF7\u65F6\u95F4\uFF1A",
                                    item.time),
                                React.createElement("div", { style: {
                                        float: "right", color: "#ffffff", width: "130px", height: "55px", borderRadius: "50px",
                                        marginRight: "40px", fontSize: "32px", textAlign: "center", lineHeight: "55px"
                                    }, className: item.state_name == "审核中" ? "bluebg" : item.state_name == "已通过" ? "greenbg" : item.state_name == "未通过" ? "redbg" : "whitebg" }, item.state_name))));
                    }),
                    this.state.workOrderArray.length > 0 ?
                        React.createElement("div", { style: { width: "100%", height: "60px", textAlign: "center", fontSize: "40px", lineHeight: "60px", marginTop: "30px" } }, "\u5230\u5E95\u5566~") :
                        React.createElement("div", { style: { width: "100%", height: "60px", textAlign: "center", fontSize: "40px", lineHeight: "60px", marginTop: "30px" } }, "\u6682\u65E0\u5339\u914D\u6570\u636E"))));
        }
    }
    exports.default = parkWorkOrder;
});
define("serviceTel", ["require", "exports", "react", "dataService", "css!./styles/serviceTel.css"], function (require, exports, React, dataService_27) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ServiceTel extends React.Component {
        constructor() {
            super(...arguments);
            this.state = {
                inputValue: "0773-123456"
            };
            this.dataService = new dataService_27.default();
        }
        componentDidMount() {
        }
        modification() {
            this.dataService.postParkPhone(this.callBackPostParkPhone.bind(this), this.state.inputValue);
        }
        callBackPostParkPhone(data) {
            if (data.return_code == 100) {
                alert("修改成功");
            }
            else {
                alert("修改失败");
            }
        }
        goBack() {
            this.props.history.goBack();
        }
        focus() {
            if (this.state.inputValue === "0773-123456") {
                this.setState({ inputValue: "" });
            }
        }
        blur() {
            if (this.state.inputValue === "") {
                this.setState({ inputValue: "0773-123456" });
            }
        }
        change(event) {
            this.setState({ inputValue: event.target.value });
        }
        render() {
            return (React.createElement("div", { className: "rent-room" },
                React.createElement("div", { className: "rent-room-back" },
                    React.createElement("div", { style: { float: "left" }, onClick: this.goBack.bind(this) },
                        React.createElement("img", { src: "./park_m/image/back.png", style: { margin: "-10px 10px 0 0" } }),
                        React.createElement("span", null, "\u5BA2\u670D\u7535\u8BDD"))),
                React.createElement("div", { className: "service-tel" },
                    React.createElement("span", null, "\u5BA2\u670D\u7535\u8BDD"),
                    React.createElement("input", { onFocus: this.focus.bind(this), onBlur: this.blur.bind(this), onChange: this.change.bind(this), value: this.state.inputValue, style: { marginLeft: "90px", border: "none", outline: "none" } }),
                    React.createElement("span", { style: { float: "right", color: "#0B8BF0", marginRight: "50px" }, onClick: this.modification.bind(this) }, "\u4FEE\u6539"))));
        }
    }
    exports.default = ServiceTel;
});
define("searchUser", ["require", "exports", "react", "dataService", "css!./styles/searchUser.css"], function (require, exports, React, dataService_28) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class SearchUser extends React.Component {
        constructor() {
            super(...arguments);
            this.state = {
                inputValue: "搜索人员",
                listArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
                tagIndex: 0,
            };
            this.dataService = new dataService_28.default();
        }
        componentDidMount() {
            if (JSON.parse(sessionStorage.getItem("workOrder")).workType == 1) {
                this.dataService.getRefRoleAuthenticationRole(this.callBack.bind(this), JSON.parse(sessionStorage.getItem("workOrder")).id);
            }
            else if (JSON.parse(sessionStorage.getItem("workOrder")).workType == 2) {
                this.dataService.getRefBookingRoomRole(this.callBack.bind(this), JSON.parse(sessionStorage.getItem("workOrder")).id);
            }
            else if (JSON.parse(sessionStorage.getItem("workOrder")).workType == 3) {
                this.dataService.getAdvertisementPointRole(this.callBack.bind(this), JSON.parse(sessionStorage.getItem("workOrder")).id);
            }
            else {
                this.dataService.getRepairInfoRole(this.callBack.bind(this), JSON.parse(sessionStorage.getItem("workOrder")).id);
            }
        }
        callBack(data) {
            console.log("xxx", data);
            this.setState({ listArr: data.response });
        }
        submit() {
            let obj = {
                workId: JSON.parse(sessionStorage.getItem("workOrder")).id,
                currentRoleId: JSON.parse(sessionStorage.getItem("userInfos")).userId,
                currentRoleName: JSON.parse(sessionStorage.getItem("userInfos")).name,
                nextRoleId: this.state.listArr[this.state.tagIndex].id,
                nextRoleName: this.state.listArr[this.state.tagIndex].name
            };
            if (JSON.parse(sessionStorage.getItem("workOrder")).workType == 1) {
                this.dataService.changeRoleAuthenticationRole(this.callBackRole.bind(this), obj);
            }
            else if (JSON.parse(sessionStorage.getItem("workOrder")).workType == 2) {
                this.dataService.changeBookingRoomRole(this.callBackRole.bind(this), obj);
            }
            else if (JSON.parse(sessionStorage.getItem("workOrder")).workType == 3) {
                this.dataService.changeAdvertisementPointRole(this.callBackRole.bind(this), obj);
            }
            else {
                this.dataService.changeRepairInfoRole(this.callBackRole.bind(this), obj);
            }
        }
        callBackRole() {
            this.props.history.goBack();
        }
        foucus() {
            if (this.state.inputValue === "搜索人员") {
                this.setState({ inputValue: "" });
            }
        }
        blur() {
            if (this.state.inputValue === "") {
                this.setState({ inputValue: "搜索人员" });
            }
        }
        change(event) {
            this.setState({ inputValue: event.target.value });
        }
        clickTag(index) {
            this.setState({ tagIndex: index });
        }
        goBack() {
            this.props.history.goBack();
        }
        render() {
            return (React.createElement("div", { className: "infoarea" },
                React.createElement("div", { className: "infoarea-top" },
                    React.createElement("div", { className: "infoarea-child-top" },
                        React.createElement("img", { src: "./park_m/image/whiteBack.png", style: { margin: "0 10px 30px -15px", padding: "15px 15px 15px 15px" }, onClick: this.goBack.bind(this) }),
                        React.createElement("input", { className: "infoarea-input", value: this.state.inputValue, onFocus: this.foucus.bind(this), onBlur: this.blur.bind(this), onChange: this.change.bind(this) }),
                        React.createElement("img", { src: "./park_m/image/search.png", className: "infoarea-search-img" }),
                        React.createElement("span", { className: "search-user-bt" }, "\u641C\u7D22"))),
                React.createElement("div", { className: "search-user-list" },
                    this.state.listArr.map((item, index) => {
                        return (React.createElement("div", { key: index, className: "search-user-list-child", onClick: e => this.clickTag(index) },
                            React.createElement("span", { style: { float: "left" } }, item.name),
                            React.createElement("div", { style: { float: "right" } },
                                React.createElement("img", { src: this.state.tagIndex === index ? "./park_m/image/checked.png" : "./park_m/image/unchecked.png" }))));
                    }),
                    this.state.listArr.length > 0 ?
                        React.createElement("div", { style: { width: "100%", height: "350px", textAlign: "center", fontSize: "40px", lineHeight: "100px" } }, "\u5230\u5E95\u5566~") :
                        React.createElement("div", { style: { width: "100%", height: "350px", textAlign: "center", fontSize: "40px", lineHeight: "100px" } }, "\u6682\u65E0\u5339\u914D\u6570\u636E")),
                React.createElement("div", { className: "rent-room-detail-bottom" },
                    React.createElement("div", { style: { float: "left", width: "50%", height: "100%", textAlign: "center", lineHeight: "130px", color: "#6C6C6C", backgroundColor: "#F2F2F2" }, onClick: this.goBack.bind(this) }, "\u53D6\u6D88"),
                    React.createElement("div", { style: { float: "left", width: "50%", height: "100%", textAlign: "center", lineHeight: "130px", backgroundColor: "#0B8BF0", color: "#ffffff" }, onClick: this.submit.bind(this) }, "\u63D0\u4EA4"))));
        }
    }
    exports.default = SearchUser;
});
define("ring", ["require", "exports", "react", "css!./styles/ring.css"], function (require, exports, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Ring extends React.Component {
        constructor() {
            super(...arguments);
            this.props = {
                ringList: this.props.ringList,
                ringRadius: 0,
                ringWidth: 0,
                fontSize: this.props.fontSize,
                ringName: this.props.ringName,
                ringNumber: this.props.ringNumber,
                label: true,
                labelType: 0
            };
            this.state = {
                ringList: [],
                innerRingRadius: 0,
                fontTop: 0,
                label: false,
                ringName: "",
                ringNumber: 0,
            };
        }
        componentDidMount() {
            this.init();
            this.calculatePercentage();
        }
        init() {
            let innerRingRadius = this.props.ringRadius - this.props.ringWidth;
            this.setState({ innerRingRadius: innerRingRadius, fontTop: innerRingRadius - this.props.fontSize * 1.5 });
        }
        calculatePercentage() {
            let ringList = [];
            let position = 0;
            let percentageFloat = 0;
            this.props.ringList.map(item => {
                if (item.percentage / 0.25 > 1) {
                    for (let i = 1; i <= item.percentage / 0.25; i++) {
                        ringList.push({ color: item.color, percentage: 0.25, position: position, length: 91, name: item.name, number: item.amount });
                        position = position + 90;
                    }
                    if (item.percentage % 0.25 !== 0) {
                        percentageFloat = parseFloat("0." + (item.percentage / 0.25).toString().replace(/\d+\.(\d*)/, "$1"));
                        ringList.push({ color: item.color, percentage: percentageFloat * 0.25, position: position, length: percentageFloat * 0.25 * 360, name: item.name, number: item.amount });
                        position = position + percentageFloat * 90;
                    }
                }
                else {
                    ringList.push({ color: item.color, percentage: item.percentage, position: position, length: item.percentage * 360, name: item.name, number: item.amount });
                    position = position + item.percentage * 360;
                }
            });
            console.log("ringList", ringList);
            this.setState({ ringList: ringList, label: this.props.label ? true : this.props.label, ringName: this.props.ringName, ringNumber: this.props.ringNumber });
        }
        choiceType(index) {
            this.setState({ ringName: this.state.ringList[index].name, ringNumber: this.state.ringList[index].number }, () => {
                console.log("ringNumber", this.state.ringList[index]);
            });
        }
        render() {
            return (React.createElement("div", { className: "ring" },
                React.createElement("div", { className: "ring-a", style: { width: this.props.ringRadius * 2, height: this.props.ringRadius * 2 } },
                    React.createElement("div", { className: "inner-ring", style: { width: this.state.innerRingRadius * 2, height: this.state.innerRingRadius * 2, margin: this.props.ringRadius - this.state.innerRingRadius, fontSize: this.props.fontSize } },
                        React.createElement("div", { style: { width: "100%", height: "50%", paddingTop: this.state.fontTop } },
                            React.createElement("div", null, this.state.ringName)),
                        React.createElement("div", { style: { width: "100%", height: "50%" } },
                            React.createElement("div", null, this.state.ringNumber))),
                    this.state.ringList.map((item, index) => {
                        return (React.createElement("div", { key: index, className: "ring-common", style: { backgroundColor: item.color, transform: "rotate(" + item.position + "deg)" + " " + "skewY(" + (item.length - 90) + "deg)" }, onClick: e => this.choiceType(index) }));
                    })),
                this.state.label ?
                    React.createElement("div", { style: { width: this.props.labelType === 2 ? "100%" : null, overflow: "hidden" } }, this.props.labelType === 1 ?
                        React.createElement("div", { style: { float: "left", height: this.props.ringRadius * 2, paddingTop: (this.props.ringRadius * 2 - this.props.ringRadius * 2 / 1.5 + (this.props.ringRadius * 2 / 1.5 / 4)) / 2 } }, this.props.ringList.map((item, index) => {
                            return (React.createElement("div", { style: { width: "100%", height: this.props.ringRadius * 2 / this.state.ringList.length / 1.5, overflow: "hidden", marginLeft: "60px" }, key: index },
                                React.createElement("div", { style: { height: "30px", width: "30px", border: "5px solid " + item.color, borderRadius: "50%", float: "left", marginTop: "10px" } }),
                                React.createElement("div", { style: { float: "left", color: "#333333", fontSize: "32px", marginLeft: "30px" } }, item.name)));
                        }))
                        :
                            React.createElement("div", { style: { height: this.props.ringRadius * 2, paddingTop: "40px" } }, this.props.ringList.map((item, index) => {
                                return (React.createElement("div", { style: { float: "left", width: "30%", height: this.props.ringRadius * 2 / this.state.ringList.length / 1.5, overflow: "hidden", marginLeft: "30px" }, key: index },
                                    React.createElement("div", { style: { height: "30px", width: "30px", backgroundColor: item.color, float: "left", marginTop: "10px" } }),
                                    React.createElement("div", { style: { float: "left", color: "#333333", fontSize: "32px", marginLeft: "30px" } }, item.name)));
                            })))
                    : null));
        }
    }
    exports.default = Ring;
});
define("statisticalStatement", ["require", "exports", "react", "ring", "dataService", "css!./styles/statisticalStatement.css"], function (require, exports, React, ring_1, dataService_29) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class StatisticalStatement extends React.Component {
        constructor() {
            super(...arguments);
            this.props = {
                history: this.props.history
            };
            this.state = {
                squre: [],
                rent: [],
                into: [],
                ringRadius: 250,
                ringWidth: 100,
                fontSize: 50,
                ringName: "总数",
                colorArr: [{ color: "#55D8FE" }, { color: "#FF8373" }, { color: "#FFDA83" }, { color: "#A3A0FB" }],
                ringList: [
                    { array: [], name: "房屋面积统计", sum: 0 },
                    { array: [], name: "出租统计", sum: 0 },
                    { array: [], name: "入驻分类统计", sum: 0 }
                ]
            };
            this.dataService = new dataService_29.default();
        }
        componentDidMount() {
            this.dataService.getMyStatistic(this.callBackGetMyStatistic.bind(this));
        }
        callBackGetMyStatistic(data) {
            console.log(data);
            if (data.return_code == 100) {
                this.adjustment(data.response.squre, 0);
                this.adjustment(data.response.rent, 1);
                this.adjustment(data.response.into, 2);
                this.setState({
                    squre: data.response.squre,
                    rent: data.response.rent,
                    into: data.response.into
                });
            }
        }
        adjustment(arr, index) {
            let sum = 0;
            let ringList = this.state.ringList;
            arr.forEach(item => {
                sum = parseInt(item.amount) + sum;
            });
            arr.forEach((item, index) => {
                item.color = this.state.colorArr[index].color,
                    item.percentage = item.amount / sum;
            });
            ringList[index].sum = sum;
            ringList[index].array = arr;
            this.setState({ ringList: ringList });
        }
        goBack() {
            this.props.history.goBack();
        }
        render() {
            return (React.createElement("div", { className: "rent-room" },
                React.createElement("div", { className: "rent-room-back" },
                    React.createElement("div", { style: { float: "left" }, onClick: this.goBack.bind(this) },
                        React.createElement("img", { src: "./park_m/image/back.png", style: { margin: "-10px 10px 0 0" } }),
                        React.createElement("span", null, "\u7EDF\u8BA1\u62A5\u8868"))),
                this.state.squre.length > 0 ?
                    this.state.ringList.map((item, index) => {
                        return (React.createElement("div", { className: "statistical-statementl-child", key: index },
                            React.createElement("div", { className: "statistical-statement-sign" },
                                React.createElement("div", { style: { height: "100%", width: "12px", backgroundColor: "#0B8BF0", float: "left", marginRight: "25px" } }),
                                React.createElement("div", { style: { float: "left" } }, item.name)),
                            React.createElement("div", { style: { width: "100%", padding: "90px 20px 20px 80px" } }, index !== 1 ?
                                React.createElement(ring_1.default, { ringList: item.array, ringRadius: this.state.ringRadius, ringWidth: this.state.ringWidth, fontSize: this.state.fontSize, ringName: this.state.ringName, ringNumber: item.sum, label: true, labelType: 1 }) :
                                React.createElement("div", { style: { marginLeft: "160px" } },
                                    React.createElement(ring_1.default, { ringList: item.array, ringRadius: 200, ringWidth: 50, fontSize: this.state.fontSize, ringName: this.state.ringName, ringNumber: item.sum, label: true, labelType: 2 })))));
                    })
                    : null));
        }
    }
    exports.default = StatisticalStatement;
});
define("informationChild", ["require", "exports", "react", "dataService", "css!./styles/informationChild.css"], function (require, exports, React, dataService_30) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class InformationChild extends React.Component {
        constructor() {
            super(...arguments);
            this.state = {
                inputValue: "搜索政策信息",
                listArr: [],
                tagIndex: 0,
                tagArr: []
            };
            this.props = {
                history: this.props.history,
                location: this.props.location
            };
            this.dataService = new dataService_30.default();
        }
        componentWillMount() {
            sessionStorage.setItem("informationId", "0");
            this.getTag();
        }
        getTag() {
            if (parseInt(sessionStorage.getItem("informationId")) === 0) {
                this.dataService.getPreferentialPolicyType(this.callBackTag.bind(this), 1);
            }
            else if (parseInt(sessionStorage.getItem("informationId")) === 1) {
                this.dataService.getParkInformationType(this.callBackTag.bind(this), 1);
            }
            else if (parseInt(sessionStorage.getItem("informationId")) === 2) {
                this.dataService.getActivityType(this.callBackTag.bind(this), 1);
            }
            else {
                this.dataService.getThirdServiceType(this.callBackTag.bind(this), 1);
            }
        }
        getTagContent() {
            let obj = {
                park_id: sessionStorage.getItem("park_id"),
                type_id: this.state.tagArr[this.state.tagIndex].id
            };
            if (parseInt(sessionStorage.getItem("informationId")) === 0) {
                this.dataService.getPreferentialPolicies(this.callBackTagContent.bind(this), obj);
            }
            else if (parseInt(sessionStorage.getItem("informationId")) === 1) {
                this.dataService.getParkInformationList(this.callBackTagContent.bind(this), obj);
            }
            else if (parseInt(sessionStorage.getItem("informationId")) === 2) {
                this.dataService.getActivities(this.callBackTagContent.bind(this), obj);
            }
            else {
                this.dataService.getThirdServices(this.callBackTagContent.bind(this), obj);
            }
        }
        callBackTag(data) {
            this.setState({ tagArr: JSON.parse(data).response }, () => {
                this.getTagContent();
            });
        }
        callBackTagContent(data) {
            let datas = JSON.parse(data).response ? JSON.parse(data).response : [];
            let listArr = [];
            if (parseInt(sessionStorage.getItem("informationId")) === 2) {
                datas.forEach(item => {
                    let obj = { title: "", visitAmount: "", time: "", headimgurl: "", taga: "", tagb: "", contenta: "", contentb: "" };
                    obj.title = item.name;
                    obj.visitAmount = item.visit_amount;
                    obj.time = item.time;
                    obj.headimgurl = item.headimgurl;
                    obj.taga = "活动时间";
                    obj.tagb = "活动位置";
                    obj.contenta = item.start_time;
                    obj.contentb = item.position;
                    listArr.push(obj);
                });
                this.setState({ listArr: listArr });
            }
            else if (parseInt(sessionStorage.getItem("informationId")) === 3) {
                datas.forEach(item => {
                    let obj = { title: "", visitAmount: "", time: "", headimgurl: "", taga: "", tagb: "", contenta: "", contentb: "" };
                    obj.title = item.title;
                    obj.visitAmount = item.visit_amount;
                    obj.time = item.time;
                    obj.headimgurl = item.headimgurl;
                    obj.taga = "服务内容";
                    obj.tagb = "联系方式";
                    obj.contenta = item.content;
                    obj.contentb = item.mobile;
                    listArr.push(obj);
                });
                this.setState({ listArr: listArr });
            }
            else {
                this.setState({ listArr: datas });
            }
        }
        foucus() {
            if (this.state.inputValue === "搜索政策信息") {
                this.setState({ inputValue: "" });
            }
        }
        blur() {
            if (this.state.inputValue === "") {
                this.setState({ inputValue: "搜索政策信息" });
            }
        }
        change(event) {
            this.setState({ inputValue: event.target.value });
        }
        clickTag(index) {
            this.setState({ tagIndex: index }, () => {
                this.getTagContent();
            });
        }
        goBack() {
            this.props.history.goBack();
        }
        goDetail(index) {
            this.props.history.push({ pathname: "/informationDetail", state: { index: index } });
        }
        render() {
            return (React.createElement("div", { className: "information-child" },
                React.createElement("div", { className: "information-child-top" },
                    React.createElement("div", { style: { width: "90%", margin: "auto" } },
                        React.createElement("input", { className: "information-child-input", value: this.state.inputValue, onFocus: this.foucus.bind(this), onBlur: this.blur.bind(this), onChange: this.change.bind(this) }),
                        React.createElement("img", { src: "./park_m/image/search.png", className: "information-childa-search-img" }))),
                React.createElement("div", { className: "information-child-tag" }, this.state.tagArr.map((item, index) => {
                    return (React.createElement("div", { key: index, className: index !== this.state.tagIndex ? "information-child-c" : "information-child-add-c", onClick: e => this.clickTag(index), style: { width: 100 / this.state.tagArr.length + "%" } },
                        React.createElement("span", { style: { borderBottom: index === this.state.tagIndex ? "5px solid #0B8BF0" : "", paddingBottom: index === this.state.tagIndex ? "20px" : 0 } }, item.name)));
                })),
                React.createElement("div", { className: "information-child-List" },
                    this.state.listArr.map((item, index) => {
                        return (parseInt(sessionStorage.getItem("informationId")) < 2 ?
                            React.createElement("div", { key: index, className: "information-child-List-child", onClick: e => this.goDetail(item.id) },
                                React.createElement("div", { style: { fontSize: "42px", color: "#333333", width: "90%", margin: "auto", paddingTop: "30px" } }, item.name),
                                React.createElement("div", { style: {
                                        color: "#949494", fontSize: "36px", margin: "10px 0 0 50px", width: "90%", overflow: "hidden", minHeight: "210px"
                                    } },
                                    React.createElement("div", { className: "inner-html-c", dangerouslySetInnerHTML: { __html: item.content } })),
                                React.createElement("div", { style: { color: "#949494", fontSize: "34px", margin: "30px 0 0 50px" } },
                                    React.createElement("div", { style: { float: "left" } },
                                        item.visit_amount,
                                        "\u6B21\u6D4F\u89C8"),
                                    React.createElement("div", { style: { float: "right", marginRight: "50px" } },
                                        item.time,
                                        " \u53D1\u5E03"))) :
                            React.createElement("div", { key: index, className: "information-child-List-child", onClick: e => this.goDetail(item.id) },
                                React.createElement("div", { style: { overflow: "hidden" } },
                                    React.createElement("div", { style: { width: "250px", height: "260px", float: "left", margin: "30px 0 0 50px", borderRadius: "10px" } },
                                        React.createElement("img", { src: item.headimgurl, style: { width: "100%", height: "100%" } })),
                                    React.createElement("div", { style: { float: "left", fontSize: "45px", margin: "25px 0 0 50px", fontWeight: "600", color: "#333333", width: "60%" } },
                                        React.createElement("div", null, item.title),
                                        React.createElement("div", { style: { color: "#949494", fontSize: "40px", fontWeight: "400", marginTop: "85px", display: "-webkit-box", webkitBoxOrient: "vertical", webkitLineClamp: "1", overflow: "hidden" } },
                                            item.taga,
                                            "\uFF1A",
                                            item.contenta),
                                        React.createElement("div", { style: { color: "#949494", fontSize: "40px", fontWeight: "400", display: "-webkit-box", webkitBoxOrient: "vertical", webkitLineClamp: "1", overflow: "hidden" } },
                                            item.tagb,
                                            "\uFF1A",
                                            item.contentb))),
                                React.createElement("div", { style: { color: "#949494", fontSize: "34px", margin: "30px 0 0 50px", overflow: "hidden" } },
                                    React.createElement("div", { style: { float: "left" } },
                                        item.visitAmount,
                                        "\u6B21\u6D4F\u89C8"),
                                    React.createElement("div", { style: { float: "right", marginRight: "50px" } },
                                        item.time,
                                        " \u53D1\u5E03"))));
                    }),
                    this.state.listArr.length > 0 ?
                        React.createElement("div", { style: { width: "100%", height: "100px", textAlign: "center", fontSize: "40px", lineHeight: "100px" } }, "\u5230\u5E95\u5566~") :
                        React.createElement("div", { style: { width: "100%", height: "100px", textAlign: "center", fontSize: "40px", lineHeight: "100px" } }, "\u6682\u65E0\u5339\u914D\u6570\u636E"))));
        }
    }
    exports.default = InformationChild;
});
define("informationChilds", ["require", "exports", "react", "dataService", "css!./styles/informationChild.css"], function (require, exports, React, dataService_31) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class InformationChilds extends React.Component {
        constructor() {
            super(...arguments);
            this.state = {
                inputValue: "搜索",
                listArr: [],
                tagIndex: 0,
                tagArr: []
            };
            this.props = {
                history: this.props.history,
                location: this.props.location
            };
            this.dataService = new dataService_31.default();
        }
        componentWillMount() {
            if (this.props.location.state) {
                sessionStorage.setItem("informationId", this.props.location.state.index);
            }
            this.getTag();
        }
        getTag() {
            if (parseInt(sessionStorage.getItem("informationId")) === 0) {
                this.dataService.getPreferentialPolicyType(this.callBackTag.bind(this), 1);
            }
            else if (parseInt(sessionStorage.getItem("informationId")) === 1) {
                this.dataService.getParkInformationType(this.callBackTag.bind(this), 1);
            }
            else if (parseInt(sessionStorage.getItem("informationId")) === 2) {
                this.dataService.getActivityType(this.callBackTag.bind(this), 1);
            }
            else {
                this.dataService.getThirdServiceType(this.callBackTag.bind(this), 1);
            }
        }
        getTagContent() {
            let obj = {
                park_id: sessionStorage.getItem("park_id"),
                type_id: this.state.tagArr[this.state.tagIndex].id
            };
            if (parseInt(sessionStorage.getItem("informationId")) === 0) {
                this.dataService.getPreferentialPolicies(this.callBackTagContent.bind(this), obj);
            }
            else if (parseInt(sessionStorage.getItem("informationId")) === 1) {
                this.dataService.getParkInformationList(this.callBackTagContent.bind(this), obj);
            }
            else if (parseInt(sessionStorage.getItem("informationId")) === 2) {
                this.dataService.getActivities(this.callBackTagContent.bind(this), obj);
            }
            else {
                this.dataService.getThirdServices(this.callBackTagContent.bind(this), obj);
            }
        }
        callBackTag(data) {
            if (parseInt(sessionStorage.getItem("informationId")) > 1) {
                this.setState({ tagArr: [...[{ id: 0, name: "全部" }], ...JSON.parse(data).response] }, () => {
                    this.getTagContent();
                });
            }
            else {
                this.setState({ tagArr: JSON.parse(data).response }, () => {
                    this.getTagContent();
                });
            }
        }
        callBackTagContent(data) {
            let datas = JSON.parse(data).response ? JSON.parse(data).response : [];
            let listArr = [];
            if (parseInt(sessionStorage.getItem("informationId")) === 2) {
                datas.forEach(item => {
                    let obj = { id: "", title: "", visitAmount: "", time: "", headimgurl: "", taga: "", tagb: "", contenta: "", contentb: "" };
                    obj.id = item.id;
                    obj.title = item.name;
                    obj.visitAmount = item.visit_amount;
                    obj.time = item.time;
                    obj.headimgurl = item.headimgurl;
                    obj.taga = "活动时间";
                    obj.tagb = "活动位置";
                    obj.contenta = item.start_time;
                    obj.contentb = item.position;
                    listArr.push(obj);
                });
                this.setState({ listArr: listArr });
                console.log(listArr);
            }
            else if (parseInt(sessionStorage.getItem("informationId")) === 3) {
                datas.forEach(item => {
                    let obj = { id: "", title: "", visitAmount: "", time: "", headimgurl: "", taga: "", tagb: "", contenta: "", contentb: "" };
                    obj.id = item.id;
                    obj.title = item.title;
                    obj.visitAmount = item.visit_amount;
                    obj.time = item.time;
                    obj.headimgurl = item.headimgurl;
                    obj.taga = "服务内容";
                    obj.tagb = "联系方式";
                    obj.contenta = item.content;
                    obj.contentb = item.mobile;
                    listArr.push(obj);
                });
                this.setState({ listArr: listArr });
            }
            else {
                this.setState({ listArr: datas });
            }
        }
        foucus() {
            if (this.state.inputValue === "搜索") {
                this.setState({ inputValue: "" });
            }
        }
        blur() {
            if (this.state.inputValue === "") {
                this.setState({ inputValue: "搜索" });
            }
        }
        change(event) {
            this.setState({ inputValue: event.target.value });
        }
        clickTag(index) {
            this.setState({ tagIndex: index }, () => {
                this.getTagContent();
            });
        }
        goBack() {
            this.props.history.goBack();
        }
        goDetail(index) {
            this.props.history.push({ pathname: "informationDetails", state: { index: index } });
        }
        render() {
            return (React.createElement("div", { className: "information-child" },
                React.createElement("div", { className: "infoarea-top" },
                    React.createElement("div", { className: "infoarea-child-top" },
                        React.createElement("img", { src: "./park_m/image/whiteBack.png", style: { margin: "0 10px 30px -15px", padding: "15px 15px 15px 15px" }, onClick: this.goBack.bind(this) }),
                        React.createElement("input", { className: "infoarea-input", value: this.state.inputValue, onFocus: this.foucus.bind(this), onBlur: this.blur.bind(this), onChange: this.change.bind(this) }),
                        React.createElement("img", { src: "./park_m/image/search.png", className: "infoarea-search-img" }),
                        React.createElement("span", { className: "search-user-bt" }, "\u641C\u7D22"))),
                React.createElement("div", { className: "information-child-tag" }, this.state.tagArr.map((item, index) => {
                    return (React.createElement("div", { key: index, className: index !== this.state.tagIndex ? "information-child-c" : "information-child-add-c", onClick: e => this.clickTag(index), style: { width: 100 / this.state.tagArr.length + "%" } },
                        React.createElement("span", { style: { borderBottom: index === this.state.tagIndex ? "5px solid #0B8BF0" : "", paddingBottom: index === this.state.tagIndex ? "20px" : 0 } }, item.name)));
                })),
                React.createElement("div", { className: "information-child-List" },
                    this.state.listArr.map((item, index) => {
                        return (parseInt(sessionStorage.getItem("informationId")) < 2 ?
                            React.createElement("div", { key: index, className: "information-child-List-child", onClick: e => this.goDetail(item.id) },
                                React.createElement("div", { style: { fontSize: "42px", color: "#333333", width: "90%", margin: "auto", paddingTop: "30px" } }, item.name),
                                React.createElement("div", { style: {
                                        color: "#949494", fontSize: "36px", margin: "10px 0 0 50px", width: "90%", minHeight: "210px", overflow: "hidden",
                                    } },
                                    React.createElement("div", { className: "inner-html-c", dangerouslySetInnerHTML: { __html: item.content } })),
                                React.createElement("div", { style: { color: "#949494", fontSize: "34px", margin: "30px 0 0 50px" } },
                                    React.createElement("div", { style: { float: "left" } },
                                        item.visit_amount,
                                        "\u6B21\u6D4F\u89C8"),
                                    React.createElement("div", { style: { float: "right", marginRight: "50px" } },
                                        item.time,
                                        " \u53D1\u5E03"))) :
                            React.createElement("div", { key: index, className: "information-child-List-child", onClick: e => this.goDetail(item.id) },
                                React.createElement("div", { style: { overflow: "hidden" } },
                                    React.createElement("div", { style: { width: "250px", height: "250px", float: "left", margin: "30px 0 0 50px", borderRadius: "10px" } },
                                        React.createElement("img", { src: item.headimgurl, style: { width: "100%", height: "100%", borderRadius: "10px" } }),
                                        new Date(item.contenta).getTime() < new Date().getTime() ?
                                            React.createElement("div", { style: { position: "relative", bottom: "62px", fontSize: "38px", color: "#ffffff", height: "5px", textAlign: "center", zIndex: 2 } }, "\u5DF2\u7ED3\u675F") : null,
                                        new Date(item.contenta).getTime() < new Date().getTime() ?
                                            React.createElement("div", { style: { position: "relative", bottom: "72px", height: "72px", backgroundColor: "black", opacity: 0.4, zIndex: 1 } }) : null),
                                    React.createElement("div", { style: { float: "left", fontSize: "45px", margin: "25px 0 0 50px", fontWeight: "600", color: "#333333", width: "60%" } },
                                        React.createElement("div", null, item.title),
                                        React.createElement("div", { style: { color: "#949494", fontSize: "34px", fontWeight: "400", marginTop: "85px", overflow: "hidden" } },
                                            React.createElement("div", { style: { float: "left", width: "35%" } },
                                                " ",
                                                item.taga,
                                                "\uFF1A"),
                                            React.createElement("div", { className: "c-p", style: { float: "left", display: "-webkit-box", webkitBoxOrient: "vertical", webkitLineClamp: "1", overflow: "hidden", width: "65%", height: "50px" }, dangerouslySetInnerHTML: { __html: item.contenta } })),
                                        React.createElement("div", { style: { color: "#949494", fontSize: "34px", fontWeight: "400", overflow: "hidden" } },
                                            React.createElement("div", { style: { width: "35%", float: "left" } },
                                                item.tagb,
                                                "\uFF1A"),
                                            React.createElement("div", { style: { width: "65%", float: "left", display: "-webkit-box", webkitBoxOrient: "vertical", webkitLineClamp: "1" } }, item.contentb)))),
                                React.createElement("div", { style: { color: "#949494", fontSize: "34px", margin: "30px 0 0 50px", overflow: "hidden" } },
                                    React.createElement("div", { style: { float: "left" } },
                                        item.visitAmount,
                                        "\u6B21\u6D4F\u89C8"),
                                    React.createElement("div", { style: { float: "right", marginRight: "50px" } },
                                        item.time,
                                        " \u53D1\u5E03"))));
                    }),
                    this.state.listArr.length > 0 ?
                        React.createElement("div", { style: { width: "100%", height: "100px", textAlign: "center", fontSize: "40px", lineHeight: "100px" } }, "\u5230\u5E95\u5566~") :
                        React.createElement("div", { style: { width: "100%", height: "100px", textAlign: "center", fontSize: "40px", lineHeight: "100px" } }, "\u6682\u65E0\u5339\u914D\u6570\u636E"))));
        }
    }
    exports.default = InformationChilds;
});
define("informationDetail", ["require", "exports", "react", "dataService", "react-router-dom", "css!./styles/informationDetail.css"], function (require, exports, React, dataService_32, react_router_dom_7) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class informationDetail extends React.Component {
        constructor() {
            super(...arguments);
            this.state = {
                data: { name: "", start_time: "", end_time: "", position: "", sign_end_time: "", contact: "", contact_tel: "", content: [], fee: "", headimgurl: "", visit_amount: "", time: "" },
                parkArr: [
                    {
                        "id": "1009",
                        "headimgurl": null,
                        "province": "桂林",
                        "longitude": "10.55",
                        "latitude": "66.666",
                        "name": "桂林国家高新",
                        "phone": "0773-123456",
                        "address": "桂林七星朝阳路D-11",
                        "service": [
                            {
                                "id": "1009",
                                "name": "电子信息",
                            }
                        ]
                    }
                ],
                tagArr: ["七星区", "东二环路", "1号线"],
            };
            this.props = {
                history: this.props.history
            };
            this.dataService = new dataService_32.default();
        }
        componentDidMount() {
            if (parseInt(sessionStorage.getItem("informationId")) < 2) {
                this.dataService.getInformation(this.callBack.bind(this), this.props.history.location.state.index);
            }
            else if (parseInt(sessionStorage.getItem("informationId")) === 2) {
                this.dataService.getActivitiyInfo(this.callBack.bind(this), this.props.history.location.state.index);
            }
        }
        callBack(data) {
            let datas = JSON.parse(data).response;
            let array = datas.content.split("<p>");
            for (let j = 0; j < array.length; j++) {
                array[j] = array[j].replace("</p>", "");
                array[j] = array[j].replace("<br>", "");
            }
            datas.content = array;
            this.setState({ data: datas });
        }
        goBack() {
            this.props.history.goBack();
        }
        initPark(park_id) {
            this.globalAction.web_call_webgl_initPark(park_id);
            localStorage.setItem("park_id", park_id);
        }
        submit() {
            let obj = {
                user_id: 2,
                activity_id: 1
            };
            this.dataService.postActivitySign(this.callBackPostActivitySign.bind(this), obj);
        }
        callBackPostActivitySign(data) {
            alert(JSON.parse(data).err_msg);
        }
        render() {
            return (React.createElement("div", { className: "information-detail" }, parseInt(sessionStorage.getItem("informationId")) === 0 || parseInt(sessionStorage.getItem("informationId")) === 1 ?
                React.createElement("div", null,
                    React.createElement("div", { className: "isay-back" },
                        React.createElement("img", { src: "./park_m/image/back.png", style: { marginBottom: "25px" }, onClick: this.goBack.bind(this) }),
                        React.createElement("span", { style: { color: "#6C6C6C", fontSize: "40px", marginLeft: "15px" } }, "\u8BE6\u60C5\u5185\u5BB9")),
                    React.createElement("div", { style: { fontSize: "40px", width: "90%", color: "#333333", margin: "20px auto" } }, this.state.data.name),
                    React.createElement("div", { style: { color: "#949494", fontSize: "34px", margin: "30px 0 0 50px", overflow: "hidden" } },
                        React.createElement("div", { style: { float: "left" } },
                            this.state.data.visit_amount,
                            "\u6B21\u6D4F\u89C8"),
                        React.createElement("div", { style: { float: "right", marginRight: "50px" } },
                            this.state.data.time,
                            " \u53D1\u5E03")),
                    React.createElement("div", { style: { border: "2px solid #F2F2F2", marginTop: "25px" } }),
                    React.createElement("div", { style: { fontSize: "40px", color: "#333333", width: "90%", margin: "30px auto" } },
                        React.createElement("p", { style: { fontSize: "40px" } }, "\u5404\u76F8\u5173\u5355\u4F4D\uFF1A"),
                        this.state.data.content.map((it, ind) => {
                            return (React.createElement("p", { key: ind, style: { fontSize: "36px" } }, it));
                        })),
                    React.createElement("div", { style: { width: "100%", height: "120px", borderBottom: "2px solid #F2F2F2" } },
                        React.createElement("div", { style: { height: "50px", width: "12px", backgroundColor: "#0B8BF0", float: "left", margin: "36px 30px 0 50px" } }),
                        React.createElement("div", { style: { color: "#333333", fontSize: "40px", fontWeight: "600", lineHeight: "120px" } }, "\u670D\u52A1\u4FE1\u606F")),
                    React.createElement("div", { className: "index-park" }, this.state.parkArr.map((item, index) => {
                        return (React.createElement(react_router_dom_7.Link, { to: "/home" },
                            React.createElement("div", { className: "index-child-park", key: index, onClick: this.initPark.bind(this, 1001) },
                                React.createElement("div", { className: "index-child-park-left" },
                                    React.createElement("img", { src: "./park_m/image/a.jpg", className: "park-img" })),
                                React.createElement("div", { className: "index-child-park-right" },
                                    React.createElement("div", { className: "index-park-name" }, item.name),
                                    React.createElement("div", { className: "index-tag" },
                                        this.state.tagArr.map((item, index) => {
                                            return (index < 3 ?
                                                React.createElement("div", { key: index, className: "index-tag-child" }, item)
                                                : null);
                                        }),
                                        this.state.tagArr.length > 3 ? React.createElement("div", { className: "index-tag-child-add" }, "...") : null),
                                    React.createElement("div", { style: { color: "#949494", fontSize: "36px", margin: "20px 0 0 25px" } }, item.address)),
                                React.createElement("div", { className: "index-child-park-end" },
                                    React.createElement("div", { className: "index-distance" },
                                        (item.distance * 0.001).toFixed(1),
                                        "km")))));
                    }))) : parseInt(sessionStorage.getItem("informationId")) === 2 ?
                React.createElement("div", { style: { fontSize: "36px", color: "#333333" } },
                    React.createElement("div", { style: { width: "100%", height: "600px" } },
                        React.createElement("img", { src: this.state.data.headimgurl, style: { width: "100%", height: "100%" } }),
                        React.createElement("div", { style: {
                                position: "absolute", left: "50px", top: "30px", backgroundColor: "#000000", background: "rgba(0, 0, 0, 0.3)",
                                borderRadius: "50px", width: "260px", height: "75px", lineHeight: "75px", textAlign: "center", opacity: "0.8"
                            }, onClick: this.goBack.bind(this) },
                            React.createElement("img", { src: "./park_m/image/w-right.png", style: { transform: "rotate(180deg)", margin: "0px 18px 22px 0px" } }),
                            React.createElement("span", { style: { fontSize: "40px", color: "#ffffff", marginRight: "15px" } }, "\u8BE6\u60C5\u5185\u5BB9"))),
                    React.createElement("div", { style: { width: "100%", height: "120px", fontSize: "42px", color: "#333333", fontWeight: "600", borderBottom: "5px solid #F2F2F2", lineHeight: "120px", textAlign: "center" } }, this.state.data.name),
                    React.createElement("div", { style: { width: "100%", height: "120px", borderBottom: "2px solid #F2F2F2" } },
                        React.createElement("div", { style: { height: "60px", width: "12px", backgroundColor: "#0B8BF0", float: "left", margin: "30px 30px 0 50px" } }),
                        React.createElement("div", { style: { color: "#333333", fontSize: "42px", fontWeight: "600", lineHeight: "120px" } }, "\u6D3B\u52A8\u4FE1\u606F")),
                    React.createElement("div", { style: { width: "100%", height: "120px", borderBottom: "2px solid #F2F2F2", lineHeight: "120px" } },
                        React.createElement("div", { style: { float: "left", height: "100%", width: "30%", marginLeft: "50px" } }, "\u6D3B\u52A8\u65F6\u95F4"),
                        React.createElement("div", { style: { float: "left", width: "60%" } },
                            this.state.data.start_time.substring(0, 16),
                            "~",
                            this.state.data.end_time.substring(0, 16))),
                    React.createElement("div", { style: { width: "100%", height: "120px", borderBottom: "2px solid #F2F2F2", lineHeight: "120px" } },
                        React.createElement("div", { style: { float: "left", height: "100%", width: "30%", marginLeft: "50px" } }, "\u6D3B\u52A8\u5730\u70B9"),
                        React.createElement("div", { style: { float: "left" } }, this.state.data.position)),
                    React.createElement("div", { style: { width: "100%", height: "120px", borderBottom: "2px solid #F2F2F2", lineHeight: "120px" } },
                        React.createElement("div", { style: { float: "left", height: "100%", width: "30%", marginLeft: "50px" } }, "\u6D3B\u52A8\u8D39\u7528"),
                        React.createElement("div", { style: { float: "left" } }, this.state.data.fee)),
                    React.createElement("div", { style: { width: "100%", height: "120px", borderBottom: "2px solid #F2F2F2", lineHeight: "120px" } },
                        React.createElement("div", { style: { float: "left", height: "100%", width: "30%", marginLeft: "50px" } }, "\u62A5\u540D\u622A\u81F3\u65F6\u95F4"),
                        React.createElement("div", { style: { float: "left" } }, this.state.data.sign_end_time)),
                    React.createElement("div", { style: { width: "100%", height: "120px", borderBottom: "2px solid #F2F2F2", lineHeight: "120px" } },
                        React.createElement("div", { style: { float: "left", height: "100%", width: "30%", marginLeft: "50px" } }, "\u8054\u7CFB\u4EBA"),
                        React.createElement("div", { style: { float: "left" } }, this.state.data.contact)),
                    React.createElement("div", { style: { width: "100%", height: "120px", borderBottom: "5px solid #F2F2F2", lineHeight: "120px" } },
                        React.createElement("div", { style: { float: "left", height: "100%", width: "30%", marginLeft: "50px" } }, "\u8054\u7CFB\u7535\u8BDD"),
                        React.createElement("div", { style: { float: "left" } }, this.state.data.contact_tel)),
                    React.createElement("div", { style: { width: "100%", height: "120px", borderBottom: "2px solid #F2F2F2" } },
                        React.createElement("div", { style: { height: "60px", width: "12px", backgroundColor: "#0B8BF0", float: "left", margin: "30px 30px 0 50px" } }),
                        React.createElement("div", { style: { color: "#333333", fontSize: "42px", fontWeight: "600", lineHeight: "120px" } }, "\u6D3B\u52A8\u8BE6\u60C5")),
                    React.createElement("div", { style: { width: "90%", margin: "auto", padding: "30px 0 200px 0" } }, this.state.data.content),
                    React.createElement("div", { style: {
                            backgroundColor: "#0B8BF0", width: "100%", height: "150px", fontSize: "50px", color: "#ffffff", lineHeight: "150px",
                            textAlign: "center", position: "fixed", bottom: "0px"
                        }, onClick: this.submit.bind(this) }, "\u6211\u8981\u62A5\u540D")) :
                React.createElement("div", { style: { fontSize: "36px", color: "#333333" } },
                    React.createElement("div", { style: { width: "100%", height: "600px" } },
                        React.createElement("img", { src: "./park_m/image/thirdParty_bg.png", style: { width: "100%", height: "100%" } }),
                        React.createElement("div", { style: {
                                position: "absolute", left: "50px", top: "30px", backgroundColor: "#000000", background: "rgba(0, 0, 0, 0.3)",
                                borderRadius: "50px", width: "260px", height: "75px", lineHeight: "75px", textAlign: "center", opacity: "0.8"
                            }, onClick: this.goBack.bind(this) },
                            React.createElement("img", { src: "./park_m/image/w-right.png", style: { transform: "rotate(180deg)", margin: "0px 18px 22px 0px" } }),
                            React.createElement("span", { style: { fontSize: "40px", color: "#ffffff", marginRight: "15px" } }, "\u8BE6\u60C5\u5185\u5BB9"))),
                    React.createElement("div", { style: { width: "100%", height: "120px", fontSize: "42px", color: "#333333", fontWeight: "600", borderBottom: "5px solid #F2F2F2", lineHeight: "120px", textAlign: "center" } }, "\u4F01\u4E1A\u6876\u88C5\u6C34\u91C7\u8D2D\uFF0C\u91CF\u5927\u4ECE\u4F18\uFF0C\u51C6\u65F6\u9001\u8FBE"),
                    React.createElement("div", { style: { width: "100%", height: "120px", borderBottom: "2px solid #F2F2F2" } },
                        React.createElement("div", { style: { height: "60px", width: "12px", backgroundColor: "#0B8BF0", float: "left", margin: "30px 30px 0 50px" } }),
                        React.createElement("div", { style: { color: "#333333", fontSize: "42px", fontWeight: "600", lineHeight: "120px" } }, "\u670D\u52A1\u4FE1\u606F")),
                    React.createElement("div", { style: { width: "100%", height: "120px", borderBottom: "2px solid #F2F2F2", overflow: "hidden" } },
                        React.createElement("div", { style: { float: "left", height: "100%", width: "30%", marginLeft: "50px", lineHeight: "120px" } }, "\u670D\u52A1\u5185\u5BB9"),
                        React.createElement("div", { style: { float: "left", height: "100%", width: "60%" } }, "1. \u54C1\u724C\u6876\u88C5\u6C34 2. \u5FEB\u901F\u9001\u8FBE 3. \u54C1\u8D28\u53EF\u9760 \u6B22\u8FCE\u5404\u5927\u4F01\u4E1A\u8BA2\u8D2D")),
                    React.createElement("div", { style: { width: "100%", height: "120px", borderBottom: "5px solid #F2F2F2", lineHeight: "120px" } },
                        React.createElement("div", { style: { float: "left", height: "100%", width: "30%", marginLeft: "50px" } }, "\u8054\u7CFB\u7535\u8BDD"),
                        React.createElement("div", { style: { float: "left" } }, "15578383040")),
                    React.createElement("div", { style: { width: "100%", height: "120px", borderBottom: "2px solid #F2F2F2", lineHeight: "120px" } },
                        React.createElement("div", { style: { float: "left", height: "100%", width: "30%", marginLeft: "50px" } }, "\u6536\u8D39\u6807\u51C6"),
                        React.createElement("div", { style: { float: "left" } }, "\u6309\u6876\u88C5\u6C34\u54C1\u724C\u4EF7\u683C")))));
        }
    }
    exports.default = informationDetail;
});
define("informationDetails", ["require", "exports", "react", "dataService", "react-router-dom", "css!./styles/informationDetail.css"], function (require, exports, React, dataService_33, react_router_dom_8) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class informationDetail extends React.Component {
        constructor() {
            super(...arguments);
            this.state = {
                data: { id: 0, name: "", is_sign_up: 0, start_time: "", end_time: "", position: "", sign_end_time: "", contact: "", contact_tel: "", content: [], fee: "", headimgurl: "", visit_amount: "", time: "", fees: "", mobile: "", title: "" },
                parkArr: [
                    {
                        "id": "1009",
                        "headimgurl": null,
                        "province": "桂林",
                        "longitude": "10.55",
                        "latitude": "66.666",
                        "name": "桂林国家高新",
                        "phone": "0773-123456",
                        "address": "桂林七星朝阳路D-11",
                        "service": [
                            {
                                "id": "1009",
                                "name": "电子信息",
                            }
                        ]
                    }
                ],
                tagArr: ["七星区", "东二环路", "1号线"],
            };
            this.props = {
                history: this.props.history
            };
            this.dataService = new dataService_33.default();
        }
        componentDidMount() {
            if (parseInt(sessionStorage.getItem("informationId")) < 2) {
                this.dataService.getInformation(this.callBack.bind(this), this.props.history.location.state.index);
            }
            else if (parseInt(sessionStorage.getItem("informationId")) === 2) {
                this.dataService.getActivitiyInfo(this.callBack.bind(this), this.props.history.location.state.index);
            }
            else if (parseInt(sessionStorage.getItem("informationId")) === 3) {
                this.dataService.getThirdServicesInfo(this.callBack.bind(this), this.props.history.location.state.index);
            }
        }
        callBack(data) {
            this.setState({ data: JSON.parse(data).response });
        }
        goBack() {
            this.props.history.goBack();
        }
        initPark(park_id) {
            this.globalAction.web_call_webgl_initPark(park_id);
            localStorage.setItem("park_id", park_id);
        }
        submit(flag) {
            if (flag) {
                let obj = {
                    user_id: JSON.parse(sessionStorage.getItem("userInfos")).userId,
                    activity_id: this.state.data.id
                };
                this.dataService.postActivitySign(this.callBackPostActivitySign.bind(this), obj);
            }
        }
        callBackPostActivitySign(data) {
            this.setState({ is_sign_up: 1 });
            alert(JSON.parse(data).err_msg);
        }
        render() {
            return (React.createElement("div", { className: "information-detail" }, parseInt(sessionStorage.getItem("informationId")) === 0 || parseInt(sessionStorage.getItem("informationId")) === 1 ?
                React.createElement("div", null,
                    React.createElement("div", { className: "isay-back" },
                        React.createElement("img", { src: "./park_m/image/back.png", style: { marginBottom: "25px" }, onClick: this.goBack.bind(this) }),
                        React.createElement("span", { style: { color: "#6C6C6C", fontSize: "40px", marginLeft: "15px" } }, "\u8BE6\u60C5\u5185\u5BB9")),
                    React.createElement("div", { style: { fontSize: "40px", width: "90%", color: "#333333", margin: "20px auto" } }, this.state.data.name),
                    React.createElement("div", { style: { color: "#949494", fontSize: "34px", margin: "30px 0 0 50px", overflow: "hidden" } },
                        React.createElement("div", { style: { float: "left" } },
                            this.state.data.visit_amount,
                            "\u6B21\u6D4F\u89C8"),
                        React.createElement("div", { style: { float: "right", marginRight: "50px" } },
                            this.state.data.time,
                            " \u53D1\u5E03")),
                    React.createElement("div", { style: { border: "2px solid #F2F2F2", marginTop: "25px" } }),
                    React.createElement("div", { style: { fontSize: "40px", color: "#333333", width: "90%", margin: "30px auto" } },
                        React.createElement("p", { style: { fontSize: "40px" } }, "\u5404\u76F8\u5173\u5355\u4F4D\uFF1A"),
                        React.createElement("span", { className: "c-p", dangerouslySetInnerHTML: { __html: this.state.data.content } })),
                    parseInt(sessionStorage.getItem("informationId")) > 1 ?
                        React.createElement("div", null,
                            React.createElement("div", { style: { width: "100%", height: "120px", borderBottom: "2px solid #F2F2F2" } },
                                React.createElement("div", { style: { height: "50px", width: "12px", backgroundColor: "#0B8BF0", float: "left", margin: "36px 30px 0 50px" } }),
                                React.createElement("div", { style: { color: "#333333", fontSize: "40px", fontWeight: "600", lineHeight: "120px" } }, "\u670D\u52A1\u4FE1\u606F")),
                            React.createElement("div", { className: "index-park" }, this.state.parkArr.map((item, index) => {
                                return (React.createElement(react_router_dom_8.Link, { to: "/home" },
                                    React.createElement("div", { className: "index-child-park", key: index, onClick: this.initPark.bind(this, 1001) },
                                        React.createElement("div", { className: "index-child-park-left" },
                                            React.createElement("img", { src: "./park_m/image/a.jpg", className: "park-img" })),
                                        React.createElement("div", { className: "index-child-park-right" },
                                            React.createElement("div", { className: "index-park-name" }, item.name),
                                            React.createElement("div", { className: "index-tag" },
                                                this.state.tagArr.map((item, index) => {
                                                    return (index < 3 ?
                                                        React.createElement("div", { key: index, className: "index-tag-child" }, item)
                                                        : null);
                                                }),
                                                this.state.tagArr.length > 3 ? React.createElement("div", { className: "index-tag-child-add" }, "...") : null),
                                            React.createElement("div", { style: { color: "#949494", fontSize: "36px", margin: "20px 0 0 25px" } }, item.address)),
                                        React.createElement("div", { className: "index-child-park-end" },
                                            React.createElement("div", { className: "index-distance" },
                                                (item.distance * 0.001).toFixed(1),
                                                "km")))));
                            }))) : null) : parseInt(sessionStorage.getItem("informationId")) === 2 ?
                React.createElement("div", { style: { fontSize: "33px", color: "#333333" } },
                    React.createElement("div", { style: { width: "100%", height: "600px" } },
                        React.createElement("img", { src: this.state.data.headimgurl, style: { width: "100%", height: "100%" } }),
                        React.createElement("div", { style: {
                                position: "absolute", left: "50px", top: "30px", backgroundColor: "#000000", background: "rgba(0, 0, 0, 0.3)",
                                borderRadius: "50px", width: "260px", height: "75px", lineHeight: "75px", textAlign: "center", opacity: "0.8"
                            }, onClick: this.goBack.bind(this) },
                            React.createElement("img", { src: "./park_m/image/w-right.png", style: { transform: "rotate(180deg)", margin: "0px 18px 22px 0px" } }),
                            React.createElement("span", { style: { fontSize: "40px", color: "#ffffff", marginRight: "15px" } }, "\u8BE6\u60C5\u5185\u5BB9"))),
                    React.createElement("div", { style: { width: "100%", height: "120px", fontSize: "38px", color: "#333333", fontWeight: "600", borderBottom: "5px solid #F2F2F2", lineHeight: "120px", textAlign: "center" } }, this.state.data.name),
                    React.createElement("div", { style: { width: "100%", height: "120px", borderBottom: "2px solid #F2F2F2" } },
                        React.createElement("div", { style: { height: "60px", width: "12px", backgroundColor: "#0B8BF0", float: "left", margin: "30px 30px 0 50px" } }),
                        React.createElement("div", { style: { color: "#333333", fontSize: "38px", fontWeight: "600", lineHeight: "120px" } }, "\u6D3B\u52A8\u4FE1\u606F")),
                    React.createElement("div", { style: { width: "100%", height: "120px", borderBottom: "2px solid #F2F2F2", lineHeight: "120px" } },
                        React.createElement("div", { style: { float: "left", height: "100%", width: "30%", marginLeft: "50px" } }, "\u6D3B\u52A8\u65F6\u95F4"),
                        React.createElement("div", { style: { float: "left", width: "60%" } },
                            this.state.data.start_time.substring(0, 16),
                            "~",
                            this.state.data.end_time.substring(0, 16))),
                    React.createElement("div", { style: { width: "100%", height: "120px", borderBottom: "2px solid #F2F2F2", lineHeight: "120px" } },
                        React.createElement("div", { style: { float: "left", height: "100%", width: "30%", marginLeft: "50px" } }, "\u6D3B\u52A8\u5730\u70B9"),
                        React.createElement("div", { style: { float: "left", width: "60%", display: "-webkit-box", webkitBoxOrient: "vertical", WebkitLineClamp: 1, overflow: "hidden" } }, this.state.data.position)),
                    React.createElement("div", { style: { width: "100%", height: "120px", borderBottom: "2px solid #F2F2F2", lineHeight: "120px" } },
                        React.createElement("div", { style: { float: "left", height: "100%", width: "30%", marginLeft: "50px" } }, "\u6D3B\u52A8\u8D39\u7528"),
                        React.createElement("div", { style: { float: "left" } }, this.state.data.fee)),
                    React.createElement("div", { style: { width: "100%", height: "120px", borderBottom: "2px solid #F2F2F2", lineHeight: "120px" } },
                        React.createElement("div", { style: { float: "left", height: "100%", width: "30%", marginLeft: "50px" } }, "\u62A5\u540D\u622A\u81F3\u65F6\u95F4"),
                        React.createElement("div", { style: { float: "left" } }, this.state.data.sign_end_time)),
                    React.createElement("div", { style: { width: "100%", height: "120px", borderBottom: "2px solid #F2F2F2", lineHeight: "120px" } },
                        React.createElement("div", { style: { float: "left", height: "100%", width: "30%", marginLeft: "50px" } }, "\u8054\u7CFB\u4EBA"),
                        React.createElement("div", { style: { float: "left" } }, this.state.data.contact)),
                    React.createElement("div", { style: { width: "100%", height: "120px", borderBottom: "5px solid #F2F2F2", lineHeight: "120px" } },
                        React.createElement("div", { style: { float: "left", height: "100%", width: "30%", marginLeft: "50px" } }, "\u8054\u7CFB\u7535\u8BDD"),
                        React.createElement("div", { style: { float: "left" } }, this.state.data.contact_tel)),
                    React.createElement("div", { style: { width: "100%", height: "120px", borderBottom: "2px solid #F2F2F2" } },
                        React.createElement("div", { style: { height: "60px", width: "12px", backgroundColor: "#0B8BF0", float: "left", margin: "30px 30px 0 50px" } }),
                        React.createElement("div", { style: { color: "#333333", fontSize: "38px", fontWeight: "600", lineHeight: "120px" } }, "\u6D3B\u52A8\u8BE6\u60C5")),
                    React.createElement("div", { style: { width: "90%", margin: "auto", padding: "30px 0 200px 0" } },
                        React.createElement("span", { className: "c-p", dangerouslySetInnerHTML: { __html: this.state.data.content } })),
                    React.createElement("div", { style: {
                            backgroundColor: this.state.data.is_sign_up === 0 && new Date(this.state.data.sign_end_time).getTime() > new Date().getTime() ? "#0B8BF0" : "rgb(190, 193, 195)", width: "100%", height: "150px", fontSize: "50px", color: "#ffffff", lineHeight: "150px",
                            textAlign: "center", position: "fixed", bottom: "0px"
                        }, onClick: e => this.submit(new Date(this.state.data.sign_end_time).getTime() > new Date().getTime()) }, this.state.data.is_sign_up === 1 ? "已报名" : new Date(this.state.data.sign_end_time).getTime() > new Date().getTime() ? "我要报名" :
                        new Date(this.state.data.start_time).getTime() > new Date().getTime() ? "报名已截止" : "已结束")) :
                React.createElement("div", { style: { fontSize: "33px", color: "#333333" } },
                    React.createElement("div", { style: { width: "100%", height: "600px" } },
                        React.createElement("img", { src: this.state.data.headimgurl, style: { width: "100%", height: "100%" } }),
                        React.createElement("div", { style: {
                                position: "absolute", left: "50px", top: "30px", backgroundColor: "#000000", background: "rgba(0, 0, 0, 0.3)",
                                borderRadius: "50px", width: "260px", height: "75px", lineHeight: "75px", textAlign: "center", opacity: "0.8"
                            }, onClick: this.goBack.bind(this) },
                            React.createElement("img", { src: "./park_m/image/w-right.png", style: { transform: "rotate(180deg)", margin: "0px 18px 22px 0px" } }),
                            React.createElement("span", { style: { fontSize: "40px", color: "#ffffff", marginRight: "15px" } }, "\u8BE6\u60C5\u5185\u5BB9"))),
                    React.createElement("div", { style: { width: "100%", height: "120px", fontSize: "38px", color: "#333333", fontWeight: "600", borderBottom: "5px solid #F2F2F2", lineHeight: "120px", textAlign: "center" } }, this.state.data.title),
                    React.createElement("div", { style: { width: "100%", height: "120px", borderBottom: "2px solid #F2F2F2" } },
                        React.createElement("div", { style: { height: "60px", width: "12px", backgroundColor: "#0B8BF0", float: "left", margin: "30px 30px 0 50px" } }),
                        React.createElement("div", { style: { color: "#333333", fontSize: "38px", fontWeight: "600", lineHeight: "120px" } }, "\u670D\u52A1\u4FE1\u606F")),
                    React.createElement("div", { style: { width: "100%", minHeight: "120px", borderBottom: "2px solid #F2F2F2", overflow: "hidden" } },
                        React.createElement("div", { style: { float: "left", height: "100%", width: "30%", marginLeft: "50px", lineHeight: "120px" } }, "\u670D\u52A1\u5185\u5BB9"),
                        React.createElement("div", { style: { float: "left", height: "100%", width: "60%" } },
                            React.createElement("div", { className: "c-p", dangerouslySetInnerHTML: { __html: this.state.data.content } }))),
                    React.createElement("div", { style: { width: "100%", height: "120px", borderBottom: "5px solid #F2F2F2", lineHeight: "120px" } },
                        React.createElement("div", { style: { float: "left", height: "100%", width: "30%", marginLeft: "50px" } }, "\u8054\u7CFB\u7535\u8BDD"),
                        React.createElement("div", { style: { float: "left" } }, this.state.data.mobile)),
                    React.createElement("div", { style: { width: "100%", height: "120px", borderBottom: "2px solid #F2F2F2", lineHeight: "120px" } },
                        React.createElement("div", { style: { float: "left", height: "100%", width: "30%", marginLeft: "50px" } }, "\u6536\u8D39\u6807\u51C6"),
                        React.createElement("div", { style: { float: "left" } }, this.state.data.fees)))));
        }
    }
    exports.default = informationDetail;
});
define("room", ["require", "exports", "react", "react-router-dom", "dataService", "css!./styles/room.css"], function (require, exports, React, react_router_dom_9, dataService_34) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Room extends React.Component {
        constructor() {
            super(...arguments);
            this.state = {
                inputValue: "搜索房间",
                buildingArr: [],
                buildingIndex: "",
                floorIndex: ""
            };
            this.dataService = new dataService_34.default();
        }
        componentDidMount() {
            this.dataService.getParkBuildingInfo(this.callBackParkBuildingInfo.bind(this));
        }
        callBackParkBuildingInfo(data) {
            data.response.forEach(item => {
                item.child.forEach(it => {
                    it.isSpread = false;
                });
            });
            this.setState({ buildingArr: data.response });
        }
        foucus() {
            if (this.state.inputValue === "搜索房间") {
                this.setState({ inputValue: "" });
            }
        }
        blur() {
            if (this.state.inputValue === "") {
                this.setState({ inputValue: "搜索房间" });
            }
        }
        change(event) {
            this.setState({ inputValue: event.target.value });
        }
        goBack() {
            this.props.history.goBack();
        }
        goFloor(index) {
            sessionStorage.setItem("floorId", index);
            this.setState({ buildingIndex: index });
        }
        backBuilding() {
            this.setState({ buildingIndex: "" });
        }
        spread(index) {
            let buildingArr = this.state.buildingArr;
            buildingArr[this.state.buildingIndex].child.forEach((item, ind) => {
                if (ind === index) {
                    item.isSpread = !item.isSpread;
                }
                else {
                    item.isSpread = false;
                }
            });
            this.setState({ buildingArr: buildingArr, floorIndex: this.state.floorIndex === index ? "" : index });
        }
        render() {
            return (React.createElement("div", { className: "rent-room", style: { backgroundColor: "#ffffff" } },
                React.createElement("div", { className: "infoarea-top" },
                    React.createElement("div", { className: "infoarea-child-top" },
                        React.createElement("img", { src: "./park_m/image/whiteBack.png", style: { margin: "0 10px 30px -15px", padding: "15px 15px 15px 15px" }, onClick: this.goBack.bind(this) }),
                        React.createElement("input", { className: "infoarea-input", value: this.state.inputValue, onFocus: this.foucus.bind(this), onBlur: this.blur.bind(this), onChange: this.change.bind(this) }),
                        React.createElement("img", { src: "./park_m/image/search.png", className: "infoarea-search-img" }),
                        React.createElement("span", { className: "search-user-bt" }, "\u641C\u7D22"))),
                React.createElement("div", { className: "room-content" },
                    this.state.buildingIndex === "" ?
                        React.createElement("div", { style: { fontSize: "40px", color: "#333333", fontWeight: "600", width: "100%", padding: "30px 0 0 50px" } }, "\u56ED\u533A\u697C\u5B87") :
                        React.createElement("div", { style: { fontSize: "40px", color: "#0B8BF0", fontWeight: "600", width: "100%", padding: "30px 0 0 50px" } },
                            React.createElement("span", { onClick: this.backBuilding.bind(this) }, "\u56ED\u533A\u697C\u5B87"),
                            React.createElement("img", { src: "./park_m/image/blue_right.png", width: "30px", height: "30px", style: { margin: "0 10px 5px 10px" } }),
                            React.createElement("span", { style: { color: "#333333", fontWeight: "600" } }, this.state.buildingArr[this.state.buildingIndex].name)),
                    this.state.buildingIndex === "" ?
                        this.state.buildingArr.map((item, index) => {
                            return (React.createElement("div", { key: index, className: "room-content-child", onClick: e => this.goFloor(index) },
                                React.createElement("img", { src: "./park_m/image/building.png", style: { margin: "0 30px 30px 0" } }),
                                React.createElement("span", { style: { fontSize: "40px", color: "#333333" } }, item.name),
                                React.createElement("div", { style: { float: "right", lineHeight: "180px" } },
                                    React.createElement("img", { src: "./park_m/image/right.png" }))));
                        }) :
                        this.state.buildingArr[this.state.buildingIndex].child.map((item, index) => {
                            return (React.createElement("div", { key: index },
                                React.createElement("div", { className: "room-content-child", onClick: e => this.spread(index) },
                                    React.createElement("img", { src: "./park_m/image/floor.png", style: { margin: "10px 30px 30px 0" }, width: "40px", height: "40px" }),
                                    React.createElement("span", { style: { fontSize: "42px", color: "#333333" } }, item.name),
                                    React.createElement("div", { style: { float: "right", lineHeight: "180px" } },
                                        React.createElement("img", { src: "./park_m/image/right.png", className: item.isSpread ? "room-spread-right" : null }))),
                                this.state.floorIndex === index ?
                                    React.createElement("div", { style: { width: "90%", margin: "10px auto", overflow: "hidden" } }, this.state.buildingArr[this.state.buildingIndex].child[this.state.floorIndex].child.map((it, ind) => {
                                        return (React.createElement(react_router_dom_9.Link, { to: { pathname: "/roomDetail", state: { name: it.name, id: it.id } } },
                                            React.createElement("div", { key: ind, className: it.state === 1 || it.sell_state === 0 ? "room-single-add" : "room-single" }, it.name)));
                                    })) : null));
                        }))));
        }
    }
    exports.default = Room;
});
define("roomRent", ["require", "exports", "react", "dataService", "css!./styles/room.css"], function (require, exports, React, dataService_35) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class RoomRent extends React.Component {
        constructor() {
            super(...arguments);
            this.state = {
                inputValue: "搜索房间",
                tagArray: [
                    { name: "选择日期", isSpread: false }, { name: "选择楼宇", isSpread: false }, { name: "选择楼层", isSpread: false }
                ],
                roomArray: [
                    { name: "100室" }, { name: "200室" }, { name: "300室" }, { name: "400室" }, { name: "500室" }, { name: "600室" }, { name: "700室" }, { name: "800室" }
                ],
                spreadIndex: 3,
                isMask: false,
                datas: [
                    [
                        { name: "不限" }, { name: "2020-6" }, { name: "2020-7" }, { name: "2020-8" }, { name: "2020-9" }, { name: "2020-10" }, { name: "2020-11" }, { name: "2020-12" },
                        { name: "2021-1" }, { name: "2021-2" }, { name: "2021-3" }, { name: "2021-4" }, { name: "2021-5" }, { name: "2021-6" }, { name: "2021-7" }
                    ],
                    [{ name: "不限" }],
                    [{ name: "不限" }]
                ],
                tagList: ["", "", ""],
                isModal: false,
                modalIndex: 0,
                timeId: 0
            };
            this.dataService = new dataService_35.default();
        }
        componentDidMount() {
            this.getExpiredRoomInfo();
            this.dataService.getParkBuildingAndFloorLevel(this.callBackGetParkBuildingAndFloorLevel.bind(this));
        }
        getExpiredRoomInfo() {
            let obj = {
                id: JSON.parse(sessionStorage.getItem("userInfos")).userId,
                parkId: sessionStorage.getItem("park_id"),
                roomName: this.state.inputValue === "搜索房间" ? "" : this.state.inputValue,
                date: this.state.datas[0][this.state.tagList[0]] ? this.state.datas[0][this.state.tagList[0]].name !== "不限" ? this.state.datas[0][this.state.tagList[0]].name : "" : "",
                buildingId: this.state.datas[1][this.state.tagList[1]] ? this.state.datas[1][this.state.tagList[1]].id : "",
                floorId: this.state.datas[2][this.state.tagList[2]] ? this.state.datas[2][this.state.tagList[2]].id : ""
            };
            this.dataService.getExpiredRoomInfo(this.callBackGetExpiredRoomInfo.bind(this), obj);
        }
        callBackGetExpiredRoomInfo(data) {
            let datas = this.state.datas;
            this.setState({ roomArray: data.response }, () => {
                if (this.state.tagList[1] !== "") {
                    if (this.state.tagList[1] === 0) {
                        datas[2] = [{ name: "不限" }];
                    }
                    else {
                        datas[2] = [...[{ name: "不限" }], ...datas[1][this.state.tagList[1]].child];
                    }
                    this.setState({ datas: datas });
                }
            });
        }
        callBackGetParkBuildingAndFloorLevel(data) {
            let datas = this.state.datas;
            datas[1] = [...[{ name: "不限" }], ...data.response];
            this.setState({ datas: datas });
        }
        foucus() {
            if (this.state.inputValue === "搜索房间") {
                this.setState({ inputValue: "" });
            }
        }
        blur() {
            if (this.state.inputValue === "") {
                this.setState({ inputValue: "搜索房间" });
            }
        }
        change(event) {
            this.setState({ inputValue: event.target.value });
            this.debounce();
        }
        goBack() {
            this.props.history.goBack();
        }
        spread(index) {
            this.setState({
                spreadIndex: this.state.spreadIndex === index ? 3 : index,
                isMask: this.state.spreadIndex === index ? false : true
            });
        }
        clickMask() {
            this.setState({ isMask: false, spreadIndex: 3 });
        }
        changeTagList(index) {
            let tagList = this.state.tagList;
            let tagArray = this.state.tagArray;
            tagList[this.state.spreadIndex] = index;
            tagArray[this.state.spreadIndex].name = this.state.datas[this.state.spreadIndex][index].name;
            this.setState({ tagList: tagList, tagArray: tagArray, });
            this.clickMask();
            this.getExpiredRoomInfo();
        }
        openModal(index) {
            this.setState({ isModal: true, modalIndex: index });
        }
        closeModal() {
            this.setState({ isModal: false });
        }
        debounce() {
            let timeId;
            clearTimeout(this.state.timeId);
            timeId = setTimeout(() => {
                this.getExpiredRoomInfo();
            }, 500);
            this.setState({ timeId: timeId });
        }
        render() {
            return (React.createElement("div", { className: "rent-room", style: { backgroundColor: "#ffffff" } },
                React.createElement("div", { className: "infoarea-top" },
                    React.createElement("div", { className: "infoarea-child-top" },
                        React.createElement("img", { src: "./park_m/image/whiteBack.png", style: { margin: "0 10px 30px -15px", padding: "15px 15px 15px 15px" }, onClick: this.goBack.bind(this) }),
                        React.createElement("input", { className: "infoarea-input", value: this.state.inputValue, onFocus: this.foucus.bind(this), onBlur: this.blur.bind(this), onChange: this.change.bind(this) }),
                        React.createElement("img", { src: "./park_m/image/search.png", className: "infoarea-search-img" }),
                        React.createElement("span", { className: "search-user-bt" }, "\u641C\u7D22"))),
                React.createElement("div", { style: { fontSize: "38px", color: "#333333", margin: "0 50px 0 50px" } },
                    React.createElement("div", { style: { height: "50px", width: "100%", overflow: "hidden", marginTop: "50px" } },
                        React.createElement("div", { style: { backgroundColor: "#0B8BF0", height: "50px", width: "10px", float: "left" } }),
                        React.createElement("div", { style: { fontWeight: 600, float: "left", lineHeight: "50px", marginLeft: "20px" } }, "\u79DF\u7528\u5230\u671F\u67E5\u8BE2")),
                    React.createElement("div", { style: { overflow: "hidden", marginTop: "40px" } }, this.state.tagArray.map((item, index) => {
                        return (React.createElement("div", { key: index, style: { float: "left", width: "33.3%", textAlign: "center", color: this.state.spreadIndex === index ? "#0B8BF0" : null }, onClick: e => this.spread(index) },
                            item.name,
                            React.createElement("img", { src: this.state.spreadIndex === index ? "./park_m/image/up.png" : "./park_m/image/down.png", width: "25px", height: "20px", style: { margin: "0 0 5px 10px" } })));
                    })),
                    this.state.isMask ?
                        React.createElement("div", { style: { width: "100%", height: "900px", backgroundColor: "#ffffff", position: "absolute", top: "23%", marginLeft: "-50px", zIndex: 10, padding: "20px 0 0 50px", overflowY: "auto" } }, this.state.datas[this.state.spreadIndex].map((item, index) => {
                            return (React.createElement("div", { key: index, style: { fontSize: "36px", height: "120px", lineHeight: "120px", color: this.state.tagList[this.state.spreadIndex] === index ? "#0B8BF0" : null }, onClick: e => this.changeTagList(index) }, item.name));
                        })) : null,
                    React.createElement("div", { style: { color: "#F53636", margin: "20px 0 20px 0" } },
                        "\u79DF\u7528\u5230\u671F\u67E5\u8BE2  (",
                        this.state.roomArray.length,
                        " \u95F4)"),
                    this.state.roomArray.map((item, index) => {
                        return (React.createElement("div", { key: index, onClick: e => this.openModal(index), style: {
                                backgroundColor: "#FF7E7E", float: "left", minWidth: "180px", height: "80px", lineHeight: "80px", borderRadius: "5px", textAlign: "center", margin: "20px", padding: "0 20px",
                                color: "#ffffff"
                            } }, item.room_name));
                    })),
                this.state.isModal ?
                    React.createElement("div", { style: { position: "fixed", width: "80%", height: "720px", marginLeft: "10%", backgroundColor: "#ffffff", fontSize: "38px", overflow: "hidden", borderRadius: "5px", boxShadow: "0px 3px 10px rgba(0,0,0,0.2)" } },
                        React.createElement("div", { style: { height: "50px", width: "100%", overflow: "hidden", margin: "30px 0 0 40px" } },
                            React.createElement("div", { style: { backgroundColor: "#0B8BF0", height: "50px", width: "10px", float: "left" } }),
                            React.createElement("div", { style: { fontWeight: 600, float: "left", lineHeight: "50px", marginLeft: "20px" } }, "\u623F\u95F4\u79DF\u7528\u8BE6\u60C5"),
                            React.createElement("img", { src: "./park_m/image/close_h.png", style: { float: "right", marginRight: "80px" }, onClick: this.closeModal.bind(this) })),
                        React.createElement("div", { style: { overflow: "hidden", margin: "30px 0 0 30px" } },
                            React.createElement("div", { style: { float: "left", width: "30%", color: "#949494" } }, "\u623F\u95F4\u540D\u79F0"),
                            React.createElement("div", { style: { float: "left", width: "70%", color: "#333333" } }, this.state.roomArray[this.state.modalIndex].room_name)),
                        React.createElement("div", { style: { overflow: "hidden", margin: "30px 0 0 30px" } },
                            React.createElement("div", { style: { float: "left", width: "30%", color: "#949494" } }, "\u4F7F\u7528\u72B6\u6001"),
                            React.createElement("div", { style: { float: "left", width: "70%", color: "#333333" } }, "\u79DF\u7528\u4E2D")),
                        React.createElement("div", { style: { overflow: "hidden", margin: "30px 0 0 30px" } },
                            React.createElement("div", { style: { float: "left", width: "30%", color: "#949494" } }, "\u79DF\u7528\u5355\u4F4D"),
                            React.createElement("div", { style: { float: "left", width: "70%", color: "#333333" } }, this.state.roomArray[this.state.modalIndex].company_name)),
                        React.createElement("div", { style: { overflow: "hidden", margin: "30px 0 0 30px" } },
                            React.createElement("div", { style: { float: "left", width: "30%", color: "#949494" } }, "\u79DF\u7528\u4EBA"),
                            React.createElement("div", { style: { float: "left", width: "70%", color: "#333333" } }, this.state.roomArray[this.state.modalIndex].user)),
                        React.createElement("div", { style: { overflow: "hidden", margin: "30px 0 0 30px" } },
                            React.createElement("div", { style: { float: "left", width: "30%", color: "#949494" } }, "\u8054\u7CFB\u7535\u8BDD"),
                            React.createElement("div", { style: { float: "left", width: "70%", color: "#333333" } }, this.state.roomArray[this.state.modalIndex].phone)),
                        React.createElement("div", { style: { overflow: "hidden", margin: "30px 0 0 30px" } },
                            React.createElement("div", { style: { float: "left", width: "30%", color: "#949494" } }, "\u79DF\u7528\u65E5\u671F"),
                            React.createElement("div", { style: { float: "left", width: "70%", color: "#333333" } }, this.state.roomArray[this.state.modalIndex].rent_date)),
                        React.createElement("div", { style: { overflow: "hidden", margin: "30px 0 0 30px" } },
                            React.createElement("div", { style: { float: "left", width: "30%", color: "#949494" } }, "\u5230\u671F\u65E5\u671F"),
                            React.createElement("div", { style: { float: "left", width: "70%", color: "#333333" } }, this.state.roomArray[this.state.modalIndex].rent_end_date))) : null,
                this.state.isMask ?
                    React.createElement("div", { className: "mask", onClick: this.clickMask.bind(this), style: { position: "absolute", top: "50%", height: "50%" } }) : null));
        }
    }
    exports.default = RoomRent;
});
define("roomDetail", ["require", "exports", "react", "react-router-dom", "dataService"], function (require, exports, React, react_router_dom_10, dataService_36) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class RoomDetail extends React.Component {
        constructor() {
            super(...arguments);
            this.props = {
                location: this.props.location,
                history: this.props.history
            };
            this.dataService = new dataService_36.default();
            this.state = {
                roomName: "",
                roomInfo: [{ use_info: { state: 1, company_name: "", user: "", phone: "", rent_date: "" } }]
            };
        }
        componentDidMount() {
            if (this.props.location.state) {
                sessionStorage.setItem("roomName", this.props.location.state.name);
                sessionStorage.setItem("roomId", this.props.location.state.id);
            }
            this.setState({ roomName: sessionStorage.getItem("roomName") });
            this.dataService.getRoomInfo(this.callBackGetRoomInfo.bind(this), sessionStorage.getItem("roomId"));
        }
        callBackGetRoomInfo(data) {
            this.setState({ roomInfo: data.response });
            sessionStorage.setItem("roomInfo", JSON.stringify(data.response));
        }
        goBack() {
            this.props.history.goBack();
        }
        render() {
            return (React.createElement("div", { className: "rent-room", style: { backgroundColor: "#ffffff" } },
                React.createElement("div", { className: "rent-room-back" },
                    React.createElement("div", { style: { float: "left", width: "100%" }, onClick: this.goBack.bind(this) },
                        React.createElement("img", { src: "./park_m/image/back.png", style: { margin: "-10px 10px 0 0" } }),
                        React.createElement("span", null, "\u623F\u95F4\u7BA1\u7406-"),
                        React.createElement("span", null, this.state.roomName))),
                React.createElement("div", { style: { width: "100%", height: "15px", backgroundColor: "#F2F2F2" } }),
                React.createElement(react_router_dom_10.Link, { to: { pathname: "/roomBase", state: { roomInfo: this.state.roomInfo } } },
                    React.createElement("div", { className: "service-tel", style: { fontSize: "40px", color: "#333333", borderBottom: "2px solid #F2F2F2" } },
                        React.createElement("img", { src: "./park_m/image/room_base.png", style: { margin: "0 20px 15px 10px" } }),
                        React.createElement("span", null, "\u623F\u95F4\u57FA\u672C\u4FE1\u606F"),
                        React.createElement("span", { style: { color: "#0B8BF0", float: "right", marginRight: "50px" } }, "\u4FEE\u6539"))),
                React.createElement(react_router_dom_10.Link, { to: "/roomPattern" },
                    React.createElement("div", { className: "service-tel", style: { fontSize: "40px", color: "#333333", borderBottom: "2px solid #F2F2F2" } },
                        React.createElement("img", { src: "./park_m/image/pattern.png", style: { margin: "0 20px 15px 10px" } }),
                        React.createElement("span", null, "\u623F\u95F4\u683C\u5C40\u4FE1\u606F"),
                        React.createElement("span", { style: { color: "#0B8BF0", float: "right", marginRight: "50px" } }, "\u4FEE\u6539"))),
                React.createElement(react_router_dom_10.Link, { to: { pathname: "/roomUse", state: { roomInfo: this.state.roomInfo } } },
                    React.createElement("div", { className: "service-tel", style: { fontSize: "40px", color: "#333333", borderBottom: "2px solid #F2F2F2" } },
                        React.createElement("img", { src: "./park_m/image/room_rent.png", style: { margin: "0 20px 15px 10px" } }),
                        React.createElement("span", null, "\u623F\u95F4\u4F7F\u7528\u4FE1\u606F"),
                        React.createElement("span", { style: { color: "#0B8BF0", float: "right", marginRight: "50px" } }, "\u4FEE\u6539"))),
                React.createElement("div", { style: { fontSize: "38px", color: "#949494" } },
                    React.createElement("div", { style: { width: "100%", overflow: "hidden" } },
                        React.createElement("div", { style: { float: "left", width: "300px", margin: "30px 0 0 120px" } }, "\u4F7F\u7528\u72B6\u6001"),
                        React.createElement("div", { style: { float: "left", color: "#333333", marginTop: "30px" } },
                            this.state.roomInfo[0].use_info.sell_state != 1 ?
                                this.state.roomInfo[0].use_info.state == 0 ? "租用中" : this.state.roomInfo[0].use_info.state == 1 ? "招租中" : "不出租" : null,
                            this.state.roomInfo[0].use_info.sell_state != 1 && this.state.roomInfo[0].use_info.state != 0 ? "，" : null,
                            this.state.roomInfo[0].use_info.state != 0 ?
                                this.state.roomInfo[0].use_info.sell_state == 0 ? "出售中" : this.state.roomInfo[0].use_info.sell_state == 1 ? "已售出" : "不出售" : null)),
                    this.state.roomInfo[0].use_info.state == 0 ?
                        React.createElement("div", null,
                            React.createElement("div", { style: { width: "100%", overflow: "hidden" } },
                                React.createElement("div", { style: { float: "left", width: "300px", margin: "30px 0 0 120px" } }, "\u79DF\u7528\u5355\u4F4D"),
                                React.createElement("div", { style: { float: "left", color: "#333333", marginTop: "30px" } }, this.state.roomInfo[0].use_info.company_name)),
                            React.createElement("div", { style: { width: "100%", overflow: "hidden" } },
                                React.createElement("div", { style: { float: "left", width: "300px", margin: "30px 0 0 120px" } }, "\u79DF\u7528\u4EBA"),
                                React.createElement("div", { style: { float: "left", color: "#333333", marginTop: "30px" } }, this.state.roomInfo[0].use_info.user)),
                            React.createElement("div", { style: { width: "100%", overflow: "hidden" } },
                                React.createElement("div", { style: { float: "left", width: "300px", margin: "30px 0 0 120px" } }, "\u8054\u7CFB\u7535\u8BDD"),
                                React.createElement("div", { style: { float: "left", color: "#333333", marginTop: "30px" } }, this.state.roomInfo[0].use_info.phone)),
                            React.createElement("div", { style: { width: "100%", overflow: "hidden" } },
                                React.createElement("div", { style: { float: "left", width: "300px", margin: "30px 0 0 120px" } }, "\u79DF\u7528\u65E5\u671F"),
                                React.createElement("div", { style: { float: "left", marginTop: "30px", color: "#F53636" } }, this.state.roomInfo[0].use_info.rent_date)),
                            React.createElement("div", { style: { width: "100%", overflow: "hidden" } },
                                React.createElement("div", { style: { float: "left", width: "300px", margin: "30px 0 0 120px" } }, "\u5230\u671F\u65E5\u671F"),
                                React.createElement("div", { style: { float: "left", marginTop: "30px", color: "#F53636" } }, this.state.roomInfo[0].use_info.rent_end_date))) : null)));
        }
    }
    exports.default = RoomDetail;
});
define("roomUse", ["require", "exports", "react", "dataService", "antd-mobile"], function (require, exports, React, dataService_37, antd_mobile_14) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class RoomUse extends React.Component {
        constructor() {
            super(...arguments);
            this.props = {
                location: this.props.location,
                history: this.props.history
            };
            this.dataService = new dataService_37.default();
            this.state = {
                companyName: JSON.parse(sessionStorage.getItem("roomInfo"))[0].use_info.company_name,
                user: JSON.parse(sessionStorage.getItem("roomInfo"))[0].use_info.user,
                phone: JSON.parse(sessionStorage.getItem("roomInfo"))[0].use_info.phone,
                rentDate: JSON.parse(sessionStorage.getItem("roomInfo"))[0].use_info.rent_date,
                rentEndDate: JSON.parse(sessionStorage.getItem("roomInfo"))[0].use_info.rent_end_date,
                state: JSON.parse(sessionStorage.getItem("roomInfo"))[0].use_info.state,
                sellState: JSON.parse(sessionStorage.getItem("roomInfo"))[0].use_info.sell_state,
                isSpread: false,
                companyNameList: [],
                companyId: JSON.parse(sessionStorage.getItem("roomInfo"))[0].use_info.company_id,
            };
        }
        componentDidMount() {
            $('#startDate').click(() => {
                $('#startDatePicker').click();
            });
            $('#endDate').click(() => {
                $('#endDatePicker').click();
            });
            $('#workoffDate').click(() => {
                $('#workoffDatePicker').click();
            });
            if (this.props.location.state) {
                sessionStorage.setItem("roomInfo", JSON.stringify(this.props.location.state.roomInfo));
            }
            console.log(JSON.parse(sessionStorage.getItem("roomInfo")));
        }
        changea(event) {
            this.setState({ companyName: event.target.value });
            this.dataService.findCompany(this.callBackFindCompany.bind(this), "", event.target.value);
        }
        callBackFindCompany(data) {
            console.log("callBackFindCompany", data);
            this.setState({ companyNameList: data.response, isSpread: data.response.length > 0 ? true : false });
        }
        clickCompanyName(index) {
            let companyNameList = this.state.companyNameList[index];
            this.setState({
                companyId: companyNameList.id, companyName: companyNameList.name,
                user: companyNameList.contact, phone: companyNameList.phone, isSpread: false
            });
        }
        goBack() {
            this.props.history.goBack();
        }
        submit() {
            let obj = {
                state: this.state.sellState === 1 ? 2 : this.state.state,
                companyId: this.state.companyId,
                companyName: this.state.companyName,
                user: this.state.user,
                phone: this.state.phone,
                rentDate: this.state.rentDate,
                rentEndDate: this.state.rentEndDate,
                sellState: this.state.state === 0 ? 2 : this.state.sellState,
                defaultRoom: JSON.parse(sessionStorage.getItem("roomInfo"))[0].use_info.default_room
            };
            if (obj.state === 0) {
                for (var key in obj) {
                    if (!obj[key] && obj[key] !== 0) {
                        return alert("请把资料填完整！");
                    }
                }
            }
            this.dataService.saveRoomRentInfo(this.callBackSaveRoomRentInfo.bind(this), obj);
        }
        callBackSaveRoomRentInfo(data) {
            if (data.return_code == 100) {
                this.props.history.goBack();
            }
        }
        changeState(index) {
            this.setState({ state: index }, () => {
                $('#startDate').click(() => {
                    $('#startDatePicker').click();
                });
                $('#endDate').click(() => {
                    $('#endDatePicker').click();
                });
            });
        }
        changeSellState(index) {
            this.setState({ sellState: index }, () => {
                $('#workoffDate').click(() => {
                    $('#workoffDatePicker').click();
                });
            });
        }
        setStartDate(date) {
            let dateStr = JSON.stringify(date);
            let dateN = dateStr.slice(1, 11);
            this.setState({ rentDate: dateN });
        }
        setEndDate(date) {
            let dateStr = JSON.stringify(date);
            let dateN = dateStr.slice(1, 11);
            this.setState({ rentEndDate: dateN });
        }
        render() {
            return (React.createElement("div", { className: "rent-room", style: { backgroundColor: "#ffffff" } },
                React.createElement("div", { className: "rent-room-back" },
                    React.createElement("div", { style: { float: "left", width: "100%" }, onClick: this.goBack.bind(this) },
                        React.createElement("img", { src: "./park_m/image/back.png", style: { margin: "-10px 10px 0 0" } }),
                        React.createElement("span", null, "\u623F\u95F4\u4F7F\u7528\u4FE1\u606F\u7F16\u8F91-"),
                        React.createElement("span", null, sessionStorage.getItem("roomName")))),
                React.createElement("div", { style: { width: "100%", height: "15px", backgroundColor: "#F2F2F2" } }),
                this.state.sellState !== 1 ?
                    React.createElement("div", { className: "service-tel", style: { fontSize: "40px", color: "#333333", borderBottom: "2px solid #F2F2F2", height: "220px" } },
                        React.createElement("div", { className: "enterprise-information-star" }),
                        React.createElement("div", { style: { color: "#949494", height: "80px" } }, "\u51FA\u79DF\u72B6\u6001"),
                        React.createElement("div", null, ["租用中", "招租中", "不出租"].map((item, index) => {
                            return (React.createElement("div", { style: { float: "left" }, onClick: e => this.changeState(index) },
                                React.createElement("img", { key: index, style: { margin: "0 20px 10px 0" }, src: index == this.state.state ? "./park_m/image/checked.png" : "./park_m/image/unchecked.png" }),
                                React.createElement("span", { style: { marginRight: "50px" } }, item)));
                        }))) : null,
                this.state.state !== 0 ?
                    React.createElement("div", { className: "service-tel", style: { fontSize: "40px", color: "#333333", borderBottom: "2px solid #F2F2F2", height: "220px" } },
                        React.createElement("div", { className: "enterprise-information-star" }),
                        React.createElement("div", { style: { color: "#949494", height: "80px" } }, "\u51FA\u552E\u72B6\u6001"),
                        React.createElement("div", null, ["出售中", "已出售", "不出售"].map((item, index) => {
                            return (React.createElement("div", { style: { float: "left" }, onClick: e => this.changeSellState(index) },
                                React.createElement("img", { key: index, style: { margin: "0 20px 10px 0" }, src: index == this.state.sellState ? "./park_m/image/checked.png" : "./park_m/image/unchecked.png" }),
                                React.createElement("span", { style: { marginRight: "50px" } }, item)));
                        }))) : null,
                this.state.state === 0 ?
                    React.createElement("div", null,
                        React.createElement("div", { className: "service-tel", style: { fontSize: "40px", color: "#333333", borderBottom: "2px solid #F2F2F2" } },
                            React.createElement("div", { className: "enterprise-information-star" }),
                            React.createElement("div", { style: { color: "#949494", height: "80px", float: "left", width: "20%" } }, "\u79DF\u7528\u5355\u4F4D"),
                            React.createElement("input", { onChange: this.changea.bind(this), value: this.state.companyName, style: { float: "left", width: "70%", height: "120px", border: "none", outline: "none", marginTop: "-1px", paddingLeft: "30px", color: "#6C6C6C" } })),
                        this.state.isSpread ?
                            React.createElement("div", { style: { width: "70%", backgroundColor: "#ffffff", position: "absolute", left: "28%", border: "1px solid #797272" } }, this.state.companyNameList.map((item, index) => {
                                return (React.createElement("div", { key: index, style: { height: "100px", fontSize: "40px", lineHeight: "100px" }, onClick: e => this.clickCompanyName(index) }, item.name));
                            })) : null,
                        React.createElement("div", { className: "service-tel", style: { fontSize: "40px", color: "#333333", borderBottom: "2px solid #F2F2F2" } },
                            React.createElement("div", { className: "enterprise-information-star" }),
                            React.createElement("div", { style: { color: "#949494", height: "80px", float: "left", width: "20%" } }, "\u79DF\u7528\u4EBA"),
                            React.createElement("div", { style: { float: "left", width: "70%", height: "120px", border: "none", outline: "none", marginTop: "-1px", paddingLeft: "30px", color: "#6C6C6C" } }, this.state.user)),
                        React.createElement("div", { className: "service-tel", style: { fontSize: "40px", color: "#333333", borderBottom: "2px solid #F2F2F2" } },
                            React.createElement("div", { className: "enterprise-information-star" }),
                            React.createElement("div", { style: { color: "#949494", height: "80px", float: "left", width: "20%" } }, "\u8054\u7CFB\u7535\u8BDD"),
                            React.createElement("div", { style: { float: "left", width: "70%", height: "120px", border: "none", outline: "none", marginTop: "-1px", paddingLeft: "30px", color: "#6C6C6C" } }, this.state.phone)),
                        React.createElement("div", { className: "service-tel", id: "startDate", style: { fontSize: "40px", color: "#333333", borderBottom: "2px solid #F2F2F2" } },
                            React.createElement("div", { className: "enterprise-information-star" }),
                            React.createElement("div", { style: { color: "#949494", height: "80px", float: "left", width: "20%" } }, "\u79DF\u7528\u65E5\u671F"),
                            React.createElement("div", { style: { float: "left", width: "65%", height: "120px", border: "none", outline: "none", marginTop: "-1px", paddingLeft: "30px", color: "#6C6C6C" } }, this.state.rentDate),
                            React.createElement("img", { src: "./park_m/image/calendar.png" })),
                        React.createElement("div", { className: "service-tel", id: "endDate", style: { fontSize: "40px", color: "#333333", borderBottom: "2px solid #F2F2F2" } },
                            React.createElement("div", { className: "enterprise-information-star" }),
                            React.createElement("div", { style: { color: "#949494", height: "80px", float: "left", width: "20%" } }, "\u5230\u671F\u65E5\u671F"),
                            React.createElement("div", { style: { float: "left", width: "65%", height: "120px", border: "none", outline: "none", marginTop: "-1px", paddingLeft: "30px", color: "#6C6C6C" } }, this.state.rentEndDate),
                            React.createElement("img", { src: "./park_m/image/calendar.png" }))) : null,
                false ?
                    React.createElement("div", null,
                        React.createElement("div", { className: "service-tel", style: { fontSize: "40px", color: "#333333", borderBottom: "2px solid #F2F2F2" } },
                            React.createElement("div", { className: "enterprise-information-star" }),
                            React.createElement("div", { style: { color: "#949494", height: "80px", float: "left", width: "20%" } }, "\u8054\u7CFB\u4EBA"),
                            React.createElement("input", { onChange: this.changea.bind(this), value: this.state.companyName, style: { float: "left", width: "70%", height: "120px", border: "none", outline: "none", marginTop: "-1px", paddingLeft: "30px", color: "#6C6C6C" } })),
                        React.createElement("div", { className: "service-tel", style: { fontSize: "40px", color: "#333333", borderBottom: "2px solid #F2F2F2" } },
                            React.createElement("div", { className: "enterprise-information-star" }),
                            React.createElement("div", { style: { color: "#949494", height: "80px", float: "left", width: "20%" } }, "\u8054\u7CFB\u7535\u8BDD"),
                            React.createElement("input", { onChange: this.changea.bind(this), value: this.state.companyName, style: { float: "left", width: "70%", height: "120px", border: "none", outline: "none", marginTop: "-1px", paddingLeft: "30px", color: "#6C6C6C" } })),
                        React.createElement("div", { className: "service-tel", id: "workoffDate", style: { fontSize: "40px", color: "#333333", borderBottom: "2px solid #F2F2F2" } },
                            React.createElement("div", { className: "enterprise-information-star" }),
                            React.createElement("div", { style: { color: "#949494", height: "80px", float: "left", width: "20%" } }, "\u552E\u51FA\u65E5\u671F"),
                            React.createElement("div", { style: { float: "left", width: "65%", height: "120px", border: "none", outline: "none", marginTop: "-1px", paddingLeft: "30px", color: "#6C6C6C" } }, this.state.rentDate),
                            React.createElement("img", { src: "./park_m/image/calendar.png" }))) : null,
                React.createElement(antd_mobile_14.DatePicker, { mode: "date", extra: " ", onChange: this.setStartDate.bind(this) },
                    React.createElement(antd_mobile_14.List.Item, { arrow: "horizontal", style: { position: "absolute", top: "-100px" }, id: "startDatePicker" })),
                React.createElement(antd_mobile_14.DatePicker, { mode: "date", extra: " ", onChange: this.setEndDate.bind(this) },
                    React.createElement(antd_mobile_14.List.Item, { arrow: "horizontal", style: { position: "absolute", top: "-100px" }, id: "endDatePicker" })),
                React.createElement(antd_mobile_14.DatePicker, { mode: "date", extra: " ", onChange: this.setEndDate.bind(this) },
                    React.createElement(antd_mobile_14.List.Item, { arrow: "horizontal", style: { position: "absolute", top: "-100px" }, id: "workoffDatePicker" })),
                React.createElement("div", { onClick: this.submit.bind(this), style: { width: "100%", height: "150px", textAlign: "center", lineHeight: "150px", color: "#ffffff", backgroundColor: "#0B8BF0", position: "fixed", bottom: 0, fontSize: "50px" } }, "\u63D0\u4EA4")));
        }
    }
    exports.default = RoomUse;
});
define("roomBase", ["require", "exports", "react", "dataService", "react-router-dom", "antd-mobile"], function (require, exports, React, dataService_38, react_router_dom_11, antd_mobile_15) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class RoomBase extends React.Component {
        constructor() {
            super(...arguments);
            this.props = {
                location: this.props.location,
                history: this.props.history
            };
            this.state = {
                square: JSON.parse(sessionStorage.getItem("roomInfo"))[0].square,
                price: JSON.parse(sessionStorage.getItem("roomInfo"))[0].price,
                contact: JSON.parse(sessionStorage.getItem("roomInfo"))[0].contact,
                phone: JSON.parse(sessionStorage.getItem("roomInfo"))[0].phone,
                inspectionTime: JSON.parse(sessionStorage.getItem("roomInfo"))[0].inspection_time,
                require: JSON.parse(sessionStorage.getItem("roomInfo"))[0].require,
                pic: JSON.parse(sessionStorage.getItem("roomInfo"))[0].pic ? JSON.parse(sessionStorage.getItem("roomInfo"))[0].pic : [],
                video: JSON.parse(sessionStorage.getItem("roomInfo"))[0].video.length > 0 ? JSON.parse(sessionStorage.getItem("roomInfo"))[0].video : [{ id: "", name: "", url: "" }],
                lift: JSON.parse(sessionStorage.getItem("roomInfo"))[0].lift,
                headimageurl: JSON.parse(sessionStorage.getItem("roomInfo"))[0].headimageurl,
                isElevator: false,
                title: JSON.parse(sessionStorage.getItem("roomInfo"))[0].title ? JSON.parse(sessionStorage.getItem("roomInfo"))[0].title : "15个字是传达买点的最佳长度",
                freeRent: JSON.parse(sessionStorage.getItem("roomInfo"))[0].free_rent,
                stationAmount: JSON.parse(sessionStorage.getItem("roomInfo"))[0].station_amount,
                enableRentTime: JSON.parse(sessionStorage.getItem("roomInfo"))[0].enable_rent_time,
                decorateName: JSON.parse(sessionStorage.getItem("roomInfo"))[0].decorate_name,
                decoration: [],
                decorateId: JSON.parse(sessionStorage.getItem("roomInfo"))[0].decorate_id,
                sellPrice: JSON.parse(sessionStorage.getItem("roomInfo"))[0].sell_price,
                floor: JSON.parse(sessionStorage.getItem("roomInfo"))[0].floor,
                floorSum: JSON.parse(sessionStorage.getItem("roomInfo"))[0].floor_sum
            };
            this.dataService = new dataService_38.default();
        }
        componentDidMount() {
            $('#a-img').click(() => {
                $('#a-input').click();
            });
            $('#b-img').click(() => {
                $('#b-input').click();
            });
            $('#h-img').click(() => {
                $('#h-input').click();
            });
            $('#startDate').click(() => {
                $('#startDatePicker').click();
            });
            if (this.props.location.state) {
                sessionStorage.setItem("roomInfo", JSON.stringify(this.props.location.state.roomInfo));
            }
            this.dataService.getRoomDecorateType(this.callBackGetRoomDecorateType.bind(this));
        }
        callBackGetRoomDecorateType(data) {
            this.setState({ decoration: data.response });
        }
        changea(event) {
            this.setState({ price: event.target.value });
        }
        changeb(event) {
            this.setState({ freeRent: event.target.value });
        }
        changec(event) {
            this.setState({ stationAmount: event.target.value });
        }
        changed(event) {
            this.setState({ inspectionTime: event.target.value });
        }
        changef(event) {
            this.setState({ phone: event.target.value });
        }
        changeg(event) {
            this.setState({ sellPrice: event.target.value });
        }
        changeh(event) {
            this.setState({ require: event.target.value });
        }
        changep(event) {
            this.setState({ contact: event.target.value });
        }
        setStartDate(date) {
            let dateStr = JSON.stringify(date);
            let dateN = dateStr.slice(1, 11);
            this.setState({ enableRentTime: dateN });
        }
        goBack() {
            this.props.history.goBack();
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
            };
            for (var key in obj) {
                if (obj[key] === "" && (key !== "video" && key !== "require" && key !== "inspectionTime" && key !== "enableRentTime" && key !== "contact" && key !== "phone")) {
                    return alert("请把资料填完整！");
                }
            }
            this.dataService.saveRoomBaseInfo(this.callBackSaveRoomBaseInfo.bind(this), obj);
        }
        callBackSaveRoomBaseInfo(data) {
            if (data.return_code == 100) {
                this.props.history.goBack();
            }
        }
        changeElevator() {
            this.setState({ isElevator: !this.state.isElevator });
        }
        closeElevator(index) {
            this.setState({ isElevator: false, decorateName: this.state.decoration[index].name, decorateId: this.state.decoration[index].id });
        }
        onBlur() {
            if (this.state.title === "") {
                this.setState({ title: "15个字是传达买点的最佳长度" });
            }
        }
        onFocus() {
            if (this.state.title === "15个字是传达买点的最佳长度") {
                this.setState({ title: "" });
            }
        }
        onChange(event) {
            this.setState({ title: event.target.value });
        }
        closePic(index) {
            let pic = this.state.pic;
            pic.splice(index, 1);
            this.setState({ pic: pic });
        }
        closeVideo() {
            this.setState({ video: [{ id: "", name: "", url: "" }] }, () => {
                $('#b-img').click(() => {
                    $('#b-input').click();
                });
            });
        }
        closeHeadimageurl() {
            this.setState({ headimageurl: "" }, () => {
                $('#h-img').click(() => {
                    $('#h-input').click();
                });
            });
        }
        uploadPic(file) {
            this.dataService.upload(this.callBackUploadPic.bind(this), file);
        }
        callBackUploadPic(data) {
            if (data.return_code == 100) {
                let pic = this.state.pic;
                pic.push({ url: data.response, name: "" });
                this.setState({ pic: pic });
            }
            else {
                alert("上传失败");
            }
        }
        updatePic(event) {
            let formData = new FormData();
            formData.append("file", event.target.files[0]);
            this.uploadPic(formData);
        }
        updateVideo(event) {
            let formData = new FormData();
            formData.append("file", event.target.files[0]);
            this.uploadVideo(formData);
        }
        updateHeadimage(event) {
            let formData = new FormData();
            formData.append("file", event.target.files[0]);
            this.uploadHeadimage(formData);
        }
        uploadVideo(file) {
            this.dataService.upload(this.callBackUploadVideo.bind(this), file);
        }
        uploadHeadimage(file) {
            this.dataService.upload(this.callBackUploadHeadimage.bind(this), file);
        }
        callBackUploadVideo(data) {
            if (data.return_code == 100) {
                let video = [{ id: "", name: "", url: "" }];
                video[0].url = data.response;
                this.setState({ video: video });
            }
            else {
                alert("上传失败");
            }
        }
        callBackUploadHeadimage(data) {
            if (data.return_code == 100) {
                this.setState({ headimageurl: data.response });
            }
            else {
                alert("上传失败");
            }
        }
        render() {
            return (React.createElement("div", { className: "rent-room", style: { backgroundColor: "#ffffff" } },
                React.createElement("div", { className: "rent-room-back" },
                    React.createElement("div", { style: { float: "left", width: "100%" }, onClick: this.goBack.bind(this) },
                        React.createElement("img", { src: "./park_m/image/back.png", style: { margin: "-10px 10px 0 0" } }),
                        React.createElement("span", null, "\u623F\u95F4\u57FA\u672C\u4FE1\u606F\u7F16\u8F91-"),
                        React.createElement("span", null, sessionStorage.getItem("roomName")))),
                React.createElement("div", { style: { width: "100%", height: "15px", backgroundColor: "#F2F2F2" } }),
                React.createElement("div", { style: { fontSize: "40px", color: "#333333", fontWeight: "600", height: "50px", lineHeight: "50px", overflow: "hidden", margin: "30px 0 0 50px" } },
                    React.createElement("div", { style: { width: "10px", height: "100%", backgroundColor: "#0B8BF0", float: "left", marginRight: "30px" } }),
                    React.createElement("div", { style: { float: "left", fontSize: "40px" } }, "\u57FA\u672C\u4FE1\u606F"),
                    React.createElement(react_router_dom_11.Link, { to: { pathname: "/roomBaseUpdate", state: { state: this.state } } },
                        React.createElement("div", { style: { color: "#0B8BF0", float: "right", marginRight: "50px" } }, "\u4FEE\u6539"))),
                React.createElement("div", { style: { fontSize: "40px", margin: "50px 0 50px 85px" } },
                    React.createElement("div", { style: { overflow: "hidden" } },
                        React.createElement("div", { style: { float: "left", color: "#6C6C6C", width: "25%" } }, "\u5EFA\u7B51\u9762\u79EF"),
                        React.createElement("div", { style: { float: "left", width: "20%", color: "#333333", fontWeight: "600" } },
                            this.state.square,
                            "\u5E73\u7C73"),
                        React.createElement("div", { style: { float: "left", color: "#6C6C6C", width: "25%", marginLeft: "35px" } }, "\u603B\u5171\u697C\u5C42"),
                        React.createElement("div", { style: { float: "left", width: "20%", color: "#333333", fontWeight: "600" } },
                            this.state.floorSum,
                            "\u5C42")),
                    React.createElement("div", { style: { overflow: "hidden" } },
                        React.createElement("div", { style: { float: "left", color: "#6C6C6C", width: "25%" } }, "\u6240\u5728\u697C\u5C42"),
                        React.createElement("div", { style: { float: "left", width: "20%", color: "#333333", fontWeight: "600" } }, this.state.floor),
                        React.createElement("div", { style: { float: "left", color: "#6C6C6C", width: "25%", marginLeft: "35px" } }, "\u7535\u68AF"),
                        React.createElement("div", { style: { float: "left", width: "20%", color: "#333333", fontWeight: "600" } }, this.state.lift ? "有" : "没有"))),
                React.createElement("div", { style: { fontSize: "40px", color: "#333333", fontWeight: "600", height: "50px", lineHeight: "50px", overflow: "hidden", margin: "30px 0 0 50px" } },
                    React.createElement("div", { style: { width: "10px", height: "100%", backgroundColor: "#0B8BF0", float: "left", marginRight: "30px" } }),
                    React.createElement("div", { style: { float: "left", fontSize: "40px" } }, "\u51FA\u79DF\u4FE1\u606F")),
                React.createElement("div", { style: { fontSize: "40px", color: "#949494", margin: "35px 0 0 45px", float: "left" } }, "\u623F\u6E90\u6807\u9898"),
                React.createElement("div", { style: { float: "left", backgroundColor: "#F53636", borderRadius: "50px", width: "40px", height: "40px", margin: "46px 0 0 15px", color: "#ffffff", fontSize: "30px", lineHeight: "40px", textAlign: "center" } }, "?"),
                React.createElement("input", { style: { margin: "30px 0 0 50px", backgroundColor: "#F2F2F2", width: "90%", height: "120px", border: "none", outline: "none", fontSize: "40px", color: "#6C6C6C", paddingLeft: "50px" }, value: this.state.title, onBlur: this.onBlur.bind(this), onFocus: this.onFocus.bind(this), onChange: this.onChange.bind(this) }),
                React.createElement("div", { className: "service-tel", style: { fontSize: "40px", color: "#333333", borderBottom: "2px solid #F2F2F2", overflow: "hidden" } },
                    React.createElement("div", { className: "enterprise-information-star" }),
                    React.createElement("div", { style: { color: "#949494", height: "80px", float: "left", width: "30%" } }, "\u552E\u4EF7"),
                    React.createElement("input", { onChange: this.changeg.bind(this), value: this.state.sellPrice, style: { float: "left", width: "65%", height: "120px", border: "none", outline: "none", marginTop: "-1px", paddingLeft: "30px", color: "#6C6C6C" } })),
                React.createElement("div", { className: "service-tel", style: { fontSize: "40px", color: "#333333", borderBottom: "2px solid #F2F2F2", overflow: "hidden" } },
                    React.createElement("div", { className: "enterprise-information-star" }),
                    React.createElement("div", { style: { color: "#949494", height: "80px", float: "left", width: "30%" } }, "\u79DF\u91D1"),
                    React.createElement("input", { onChange: this.changea.bind(this), value: this.state.price, style: { float: "left", width: "65%", height: "120px", border: "none", outline: "none", marginTop: "-1px", paddingLeft: "30px", color: "#6C6C6C" } })),
                React.createElement("div", { className: "service-tel", style: { fontSize: "40px", color: "#333333", borderBottom: "2px solid #F2F2F2" } },
                    React.createElement("div", { className: "enterprise-information-star" }),
                    React.createElement("div", { style: { color: "#949494", height: "80px", float: "left", width: "30%" } }, "\u514D\u79DF\u60C5\u51B5"),
                    React.createElement("input", { onChange: this.changeb.bind(this), value: this.state.freeRent, style: { float: "left", width: "65%", height: "120px", border: "none", outline: "none", marginTop: "-1px", paddingLeft: "30px", color: "#6C6C6C" } })),
                React.createElement("div", { className: "service-tel", style: { fontSize: "40px", color: "#333333", borderBottom: "2px solid #F2F2F2", overflow: "hidden" }, onClick: this.changeElevator.bind(this) },
                    React.createElement("div", { className: "enterprise-information-star" }),
                    React.createElement("div", { style: { color: "#949494", height: "80px", float: "left", width: "30%", marginRight: "30px" } }, "\u88C5\u4FEE\u60C5\u51B5"),
                    React.createElement("div", { style: { color: "#6C6C6C", float: "left" } }, this.state.decorateName),
                    React.createElement("div", { style: { height: "100%", float: "right" } },
                        React.createElement("img", { src: "./park_m/image/right.png", style: { margin: "-10px 40px 0 0", transform: this.state.isElevator ? "rotate(90deg)" : "" } }))),
                this.state.isElevator ?
                    React.createElement("div", { style: { position: "relative", width: "99.9%", fontSize: "40px", backgroundColor: "#ffffff", border: "1px solid #797272", textAlign: "center" } }, this.state.decoration.map((item, index) => {
                        return React.createElement("div", { key: index, style: { width: "500px", height: "100px", margin: "auto", lineHeight: "100px" }, onClick: e => this.closeElevator(index) }, item.name);
                    })) : null,
                React.createElement("div", { className: "service-tel", style: { fontSize: "40px", color: "#333333", borderBottom: "2px solid #F2F2F2" } },
                    React.createElement("div", { className: "enterprise-information-star" }),
                    React.createElement("div", { style: { color: "#949494", height: "80px", float: "left", width: "30%" } }, "\u5BB9\u7EB3\u5DE5\u4F4D"),
                    React.createElement("input", { onChange: this.changec.bind(this), value: this.state.stationAmount, style: { float: "left", width: "65%", height: "120px", border: "none", outline: "none", marginTop: "-1px", paddingLeft: "30px", color: "#6C6C6C" } })),
                React.createElement("div", { className: "service-tel", style: { fontSize: "40px", color: "#333333", borderBottom: "2px solid #F2F2F2", paddingLeft: "60px" } },
                    React.createElement("div", { style: { color: "#949494", height: "80px", float: "left", width: "30%" } }, "\u770B\u623F\u65F6\u95F4"),
                    React.createElement("input", { onChange: this.changed.bind(this), value: this.state.inspectionTime, style: { float: "left", width: "65%", height: "120px", border: "none", outline: "none", marginTop: "-1px", paddingLeft: "30px", color: "#6C6C6C" } })),
                React.createElement("div", { className: "service-tel", style: { fontSize: "40px", color: "#333333", borderBottom: "2px solid #F2F2F2", paddingLeft: "60px" } },
                    React.createElement("div", { style: { color: "#949494", height: "80px", float: "left", width: "30%" } }, "\u6700\u65E9\u53EF\u79DF\u65F6\u95F4"),
                    React.createElement("input", { id: "startDate", value: this.state.enableRentTime, style: { float: "left", width: "65%", height: "120px", border: "none", outline: "none", marginTop: "-1px", paddingLeft: "30px", color: "#6C6C6C" } })),
                React.createElement(antd_mobile_15.DatePicker, { mode: "date", extra: " ", onChange: this.setStartDate.bind(this) },
                    React.createElement(antd_mobile_15.List.Item, { arrow: "horizontal", style: { position: "absolute", top: "-100px" }, id: "startDatePicker" })),
                React.createElement("div", { className: "service-tel", style: { fontSize: "40px", color: "#333333", borderBottom: "2px solid #F2F2F2", paddingLeft: "60px" } },
                    React.createElement("div", { style: { color: "#949494", height: "80px", float: "left", width: "30%" } }, "\u79DF\u623F\u9700\u6C42"),
                    React.createElement("input", { onChange: this.changeh.bind(this), value: this.state.require, style: { float: "left", width: "65%", height: "120px", border: "none", outline: "none", marginTop: "-1px", paddingLeft: "30px", color: "#6C6C6C" } })),
                React.createElement("div", { className: "service-tel", style: { fontSize: "40px", color: "#333333", borderBottom: "2px solid #F2F2F2", height: 360 } },
                    React.createElement("div", { className: "enterprise-information-star" }),
                    React.createElement("div", { style: { color: "#949494", height: "80px", width: "20%" } }, "\u7F29\u7565\u56FE"),
                    this.state.headimageurl ?
                        React.createElement("div", { style: { width: "220px", height: "220px", backgroundColor: "#F2F2F2", textAlign: "center", overflow: "hidden", margin: "30px 30px 0 0", float: "left" } },
                            React.createElement("img", { src: "./park_m/image/close.png", style: { position: "absolute", left: "250px" }, onClick: e => this.closeHeadimageurl() }),
                            React.createElement("img", { src: this.state.headimageurl, style: { height: "100%", width: "100%" } })) :
                        React.createElement("div", null,
                            React.createElement("div", { style: { width: "220px", height: "220px", backgroundColor: "#F2F2F2", textAlign: "center", overflow: "hidden", marginTop: "30px", float: "left" }, id: "h-img" },
                                React.createElement("img", { src: "./park_m/image/addPicture.png", style: { height: "60px", width: "60px" } }),
                                React.createElement("div", { style: { color: "#949494", marginTop: "-30px" } }, "\u6DFB\u52A0")),
                            React.createElement("input", { type: "file", onChange: this.updateHeadimage.bind(this), id: "h-input", style: { display: "none" }, accept: "image/*" }))),
                React.createElement("div", { className: "service-tel", style: { fontSize: "40px", color: "#333333", borderBottom: "2px solid #F2F2F2", height: 360 + Math.floor(this.state.pic.length / 3) * 250 } },
                    React.createElement("div", { className: "enterprise-information-star" }),
                    React.createElement("div", { style: { color: "#949494", height: "80px" } }, "\u623F\u95F4\u56FE\u7247"),
                    this.state.pic.map((item, index) => {
                        return (React.createElement("div", { style: { width: "220px", height: "220px", backgroundColor: "#F2F2F2", textAlign: "center", overflow: "hidden", margin: (index > 2 && index % 3 === 0) ? "30px 30px 0 30px" : "30px 30px 0 0", float: "left" }, key: index },
                            React.createElement("img", { src: "./park_m/image/close.png", style: { position: "absolute", left: (index % 3 + 1) * 250 }, onClick: e => this.closePic(index) }),
                            React.createElement("img", { src: item.url, style: { height: "100%", width: "100%" } })));
                    }),
                    React.createElement("input", { type: "file", onChange: this.updatePic.bind(this), id: "a-input", style: { display: "none" }, accept: "image/*" }),
                    React.createElement("div", { style: { width: "220px", height: "220px", backgroundColor: "#F2F2F2", textAlign: "center", overflow: "hidden", marginTop: "30px", float: "left", marginLeft: this.state.pic.length % 3 === 0 && this.state.pic.length !== 0 ? "30px" : null }, id: "a-img" },
                        React.createElement("img", { src: "./park_m/image/addPicture.png", style: { height: "60px", width: "60px" } }),
                        React.createElement("div", { style: { color: "#949494", marginTop: "-30px" } }, "\u6DFB\u52A0"))),
                React.createElement("div", { className: "service-tel", style: { fontSize: "40px", color: "#333333", borderBottom: "2px solid #F2F2F2", height: 360 + Math.floor(this.state.video.length / 3) * 250, marginLeft: "30px" } },
                    React.createElement("div", { style: { color: "#949494", height: "80px", width: "20%" } }, "\u623F\u95F4\u89C6\u9891"),
                    this.state.video[0].url ?
                        React.createElement("div", { style: { width: "220px", height: "220px", backgroundColor: "#F2F2F2", textAlign: "center", overflow: "hidden", margin: "30px 30px 0 0", float: "left" } },
                            React.createElement("img", { src: "./park_m/image/close.png", style: { position: "absolute", left: "250px", zIndex: 100 }, onClick: e => this.closeVideo() }),
                            React.createElement("video", { src: this.state.video[0].url, controls: "controls", style: { width: "100%", height: "100%" } })) :
                        React.createElement("div", null,
                            React.createElement("div", { style: { width: "220px", height: "220px", backgroundColor: "#F2F2F2", textAlign: "center", overflow: "hidden", marginTop: "30px", float: "left" }, id: "b-img" },
                                React.createElement("img", { src: "./park_m/image/addPicture.png", style: { height: "60px", width: "60px" } }),
                                React.createElement("div", { style: { color: "#949494", marginTop: "-30px" } }, "\u6DFB\u52A0"))),
                    React.createElement("input", { type: "file", onChange: this.updateVideo.bind(this), id: "b-input", style: { display: "none" }, accept: "video/*" })),
                React.createElement("div", { style: { fontSize: "40px", color: "#333333", fontWeight: "600", height: "50px", lineHeight: "50px", overflow: "hidden", margin: "30px 0 0 50px" } },
                    React.createElement("div", { style: { width: "10px", height: "100%", backgroundColor: "#0B8BF0", float: "left", marginRight: "30px" } }),
                    React.createElement("div", { style: { float: "left", fontSize: "40px" } }, "\u8054\u7CFB\u4EBA\u4FE1\u606F")),
                React.createElement("div", { className: "service-tel", style: { fontSize: "40px", color: "#333333", borderBottom: "2px solid #F2F2F2", marginLeft: "30px" } },
                    React.createElement("div", { style: { color: "#949494", height: "80px", float: "left", width: "20%" } }, "\u8054\u7CFB\u4EBA"),
                    React.createElement("input", { onChange: this.changep.bind(this), value: this.state.contact, style: { float: "left", width: "65%", height: "120px", border: "none", outline: "none", marginTop: "-1px", paddingLeft: "30px", color: "#6C6C6C" } })),
                React.createElement("div", { className: "service-tel", style: { fontSize: "40px", color: "#333333", borderBottom: "2px solid #F2F2F2", marginLeft: "30px" } },
                    React.createElement("div", { style: { color: "#949494", height: "80px", float: "left", width: "20%" } }, "\u8054\u7CFB\u7535\u8BDD"),
                    React.createElement("input", { onChange: this.changef.bind(this), value: this.state.phone, style: { float: "left", width: "65%", height: "120px", border: "none", outline: "none", marginTop: "-1px", paddingLeft: "30px", color: "#6C6C6C" } })),
                React.createElement("div", { style: { height: "300px" } }),
                React.createElement("div", { onClick: this.submit.bind(this), style: { width: "100%", height: "150px", textAlign: "center", lineHeight: "150px", color: "#ffffff", backgroundColor: "#0B8BF0", position: "fixed", bottom: 0, fontSize: "50px" } }, "\u63D0\u4EA4")));
        }
    }
    exports.default = RoomBase;
});
define("roomPattern", ["require", "exports", "react", "react-router-dom", "dataService", "css!./styles/roomPattern.css"], function (require, exports, React, react_router_dom_12, dataService_39) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class RoomPattern extends React.Component {
        constructor() {
            super(...arguments);
            this.props = {
                history: this.props.history,
            };
            this.state = {
                roomInfo: [{ part: [] }]
            };
            this.dataService = new dataService_39.default();
        }
        componentDidMount() {
            this.dataService.getRoomInfo(this.callBackGetRoomInfo.bind(this), sessionStorage.getItem("roomId"));
        }
        callBackGetRoomInfo(data) {
            console.log(data);
            this.setState({ roomInfo: data.response });
            sessionStorage.setItem("roomInfo", JSON.stringify(data.response));
        }
        goBack() {
            this.props.history.goBack();
        }
        add() {
            let obj = this.state.roomInfo[0].part;
            obj.push({ name: "名称", headimageurl: "", panoramaurl: "", position: "" });
            this.dataService.saveRoomPartBaseInfo(this.callBack.bind(this), obj);
        }
        delete(index) {
            let obj = this.state.roomInfo[0].part;
            obj.splice(index, 1);
            this.dataService.saveRoomPartBaseInfo(this.callBack.bind(this), obj);
        }
        callBack(data) {
            if (data.return_code == 100) {
                this.dataService.getRoomInfo(this.callBackGetRoomInfo.bind(this), sessionStorage.getItem("roomId"));
            }
        }
        render() {
            return (React.createElement("div", { className: "rent-room", style: { backgroundColor: "#F2F2F2" } },
                React.createElement("div", { className: "rent-room-back" },
                    React.createElement("div", { style: { float: "left", width: "100%" }, onClick: this.goBack.bind(this) },
                        React.createElement("img", { src: "./park_m/image/back.png", style: { margin: "-10px 10px 0 0" } }),
                        React.createElement("span", null, "\u623F\u95F4\u683C\u5C40\u4FE1\u606F"))),
                React.createElement("div", { className: "room-pattern-content" }, this.state.roomInfo[0].part.map((item, index) => {
                    return (React.createElement("div", { key: index, style: { width: "100%", height: "400px", backgroundColor: "#ffffff", marginBottom: "10px" } },
                        React.createElement("div", { style: { overflow: "hidden", padding: "30px 0 0 50px" } },
                            React.createElement("div", { style: { fontSize: "42px", color: "#333333", fontWeight: "600", float: "left" } }, item.name),
                            React.createElement(react_router_dom_12.Link, { to: { pathname: "/roomPatternUpdate", state: { index: index } } },
                                React.createElement("div", { style: { float: "right", fontSize: "40px", color: "#0B8BF0", marginRight: "50px" } }, "\u4FEE\u6539")),
                            React.createElement("div", { style: { float: "right", fontSize: "40px", color: "#F00B0B", marginRight: "50px" }, onClick: e => this.delete(index) }, "\u5220\u9664")),
                        React.createElement("div", { style: { width: "100%", height: "300px", lineHeight: "300px", paddingLeft: "50px" } },
                            React.createElement("div", { style: { fontSize: "40px", color: "#6C6C6C", float: "left", marginRight: "20px" } }, "\u7F29\u7565\u56FE\uFF1A"),
                            React.createElement("div", { style: { float: "left", width: "200px", height: "200px" } },
                                React.createElement("img", { src: item.headimageurl, style: { width: "100%", height: "100%" } })),
                            React.createElement("div", { style: { fontSize: "40px", color: "#6C6C6C", float: "left", margin: "0 20px 0 50px" } }, "\u5168\u666F\u56FE\uFF1A"),
                            React.createElement("div", { style: { float: "left", width: "200px", height: "200px" } },
                                React.createElement("img", { src: item.panoramaurl, style: { width: "100%", height: "100%" } })))));
                }))));
        }
    }
    exports.default = RoomPattern;
});
define("roomPatternUpdate", ["require", "exports", "react", "dataService", "css!./styles/roomPatternUpdate.css"], function (require, exports, React, dataService_40) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class roomPatternUpdate extends React.Component {
        constructor() {
            super(...arguments);
            this.props = {
                history: this.props.history,
                location: this.props.location
            };
            this.state = {
                fileIndex: 0,
                fileArr: [],
                name: JSON.parse(sessionStorage.getItem("roomInfo"))[0].part[this.props.location.state.index].name
            };
            this.dataService = new dataService_40.default();
        }
        componentDidMount() {
            sessionStorage.setItem("part", JSON.stringify(JSON.parse(sessionStorage.getItem("roomInfo"))[0].part[this.props.location.state.index]));
            let fileArr = this.state.fileArr;
            fileArr[0] = JSON.parse(sessionStorage.getItem("part")).headimageurl;
            fileArr[1] = JSON.parse(sessionStorage.getItem("part")).panoramaurl;
            this.setState({ fileArr: fileArr });
        }
        upload(file) {
            this.dataService.upload(this.callBackUpload.bind(this), file);
        }
        callBackUpload(data) {
            console.log("callBackUpload", data);
            if (data.return_code == 100) {
                let fileArr = this.state.fileArr;
                fileArr[this.state.fileIndex] = data.response;
                this.setState({ fileArr: fileArr }, () => {
                    console.log(this.state.fileArr);
                });
            }
            else {
                alert("上传失败");
            }
        }
        change(event) {
            this.setState({ name: event.target.value });
        }
        goBack() {
            this.props.history.goBack();
        }
        updateA(event) {
            let formData = new FormData();
            formData.append("file", event.target.files[0]);
            this.upload(formData);
            this.setState({ fileIndex: 0 });
        }
        updateB(event) {
            let formData = new FormData();
            formData.append("file", event.target.files[0]);
            this.upload(formData);
            this.setState({ fileIndex: 1 });
        }
        submit() {
            let obj = JSON.parse(sessionStorage.getItem("roomInfo"))[0].part;
            obj[this.props.location.state.index] = {
                id: JSON.parse(sessionStorage.getItem("part")).id,
                name: this.state.name,
                position: JSON.parse(sessionStorage.getItem("part")).position,
                headimageurl: this.state.fileArr[0],
                panoramaurl: this.state.fileArr[1]
            };
            this.dataService.saveRoomPartBaseInfo(this.callBackSaveRoomPartBaseInfo.bind(this), obj);
        }
        callBackSaveRoomPartBaseInfo(data) {
            if (data.return_code == 100) {
                this.props.history.goBack();
            }
            else {
                alert("提交失败");
            }
        }
        close(index) {
            let fileArr = this.state.fileArr;
            fileArr[index] = "";
            this.setState({ fileArr: fileArr });
        }
        render() {
            return (React.createElement("div", { className: "rent-room", style: { backgroundColor: "#F2F2F2" } },
                React.createElement("div", { className: "rent-room-back" },
                    React.createElement("div", { style: { float: "left", width: "100%" }, onClick: this.goBack.bind(this) },
                        React.createElement("img", { src: "./park_m/image/back.png", style: { margin: "-10px 10px 0 0" } }),
                        React.createElement("span", null, "\u623F\u95F4\u683C\u5C40\u4FEE\u6539"))),
                React.createElement("div", { style: { backgroundColor: "#ffffff", width: "100%", height: "90%", marginTop: "15px" } },
                    React.createElement("div", { style: { width: "100%", height: "160px", lineHeight: "160px", fontSize: "40px", paddingLeft: "50px" } },
                        React.createElement("div", { className: "enterprise-information-star" }),
                        React.createElement("div", { style: { color: "#949494", height: "80px", float: "left", marginRight: "30px", marginTop: "-16px" } }, "\u683C\u5C40\u540D\u79F0\uFF1A")),
                    React.createElement("div", { style: { height: "120px", margin: "0 50px 0 50px", fontSize: "40px" } },
                        React.createElement("input", { value: this.state.name, onChange: this.change.bind(this), style: { backgroundColor: "#F2F2F2", width: "100%", margin: "auto", height: "120px", lineHeight: "120px", border: "none", outline: "none", color: "#333333", paddingLeft: "50px" } })),
                    React.createElement("div", { style: { fontSize: "40px", color: "#6C6C6C", margin: "100px 50px 0 50px", height: "500px" } },
                        React.createElement("div", { style: { float: "left", width: "50%" } },
                            React.createElement("div", null, "\u7F29\u7565\u56FE:"),
                            React.createElement("div", { style: { width: "250px", height: "250px", marginTop: "50px" }, className: this.state.fileArr[0] !== "" ? "" : "room-add-a" },
                                React.createElement("img", { src: this.state.fileArr[0] !== "" ? this.state.fileArr[0] : "./park_m/image/addPicture.png", width: "100%", height: "100%", id: "a-img", className: this.state.fileArr[0] !== "" ? "" : "room-add-img" }))),
                        React.createElement("div", { style: { float: "left", width: "50%" } },
                            React.createElement("div", null, "\u5168\u666F\u56FE:"),
                            React.createElement("div", { style: { width: "250px", height: "250px", marginTop: "50px" }, className: this.state.fileArr[1] !== "" ? "" : "room-add-a" },
                                React.createElement("img", { src: this.state.fileArr[1] !== "" ? this.state.fileArr[1] : "./park_m/image/addPicture.png", width: "100%", height: "100%", id: "b-img", className: this.state.fileArr[1] !== "" ? "" : "room-add-img" }))))),
                React.createElement("div", { className: "rent-room-detail-bottom" },
                    React.createElement("div", { style: { float: "left", width: "50%", height: "100%", textAlign: "center", lineHeight: "130px", color: "#6C6C6C", backgroundColor: "#F2F2F2" }, onClick: this.goBack.bind(this) }, "\u53D6\u6D88"),
                    React.createElement("div", { style: { float: "left", width: "50%", height: "100%", textAlign: "center", lineHeight: "130px", backgroundColor: "#0B8BF0", color: "#ffffff" }, onClick: this.submit.bind(this) }, "\u63D0\u4EA4"))));
        }
    }
    exports.default = roomPatternUpdate;
});
define("modificationAuthenticationDetail", ["require", "exports", "react", "dataService", "css!./styles/roomPattern.css"], function (require, exports, React, dataService_41) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class modificationAuthenticationDetail extends React.Component {
        constructor() {
            super(...arguments);
            this.props = {
                history: this.props.history,
                location: this.props.location
            };
            this.state = {
                file: "",
                name: JSON.parse(sessionStorage.getItem("roomInfo"))[0].part[0].name
            };
            this.dataService = new dataService_41.default();
        }
        componentDidMount() {
        }
        upload(file) {
            this.dataService.upload(this.callBackUpload.bind(this), file);
        }
        callBackUpload(data) {
            console.log(data);
        }
        change(event) {
            this.setState({ name: event.target.value });
        }
        goBack() {
            this.props.history.goBack();
        }
        submit(event) {
            let formFile = new FormData();
            formFile.append("uploadFile", event.target.files[0]);
            console.log(formFile);
            this.upload(formFile);
        }
        render() {
            return (React.createElement("div", { className: "rent-room", style: { backgroundColor: "#F2F2F2" } },
                React.createElement("div", { className: "rent-room-back" },
                    React.createElement("div", { style: { float: "left", width: "100%" }, onClick: this.goBack.bind(this) },
                        React.createElement("img", { src: "./park_m/image/back.png", style: { margin: "-10px 10px 0 0" } }),
                        React.createElement("span", null, "\u623F\u95F4\u683C\u5C40\u4FEE\u6539"))),
                React.createElement("div", { style: { backgroundColor: "#ffffff", width: "100%", height: "90%", marginTop: "15px" } },
                    React.createElement("div", { style: { width: "100%", height: "160px", lineHeight: "160px", fontSize: "40px", paddingLeft: "50px" } },
                        React.createElement("div", { className: "enterprise-information-star" }),
                        React.createElement("div", { style: { color: "#949494", height: "80px", float: "left", marginRight: "30px", marginTop: "-16px" } }, "\u683C\u5C40\u540D\u79F0\uFF1A")),
                    React.createElement("div", { style: { height: "120px", margin: "0 50px 0 50px", fontSize: "40px" } },
                        React.createElement("input", { value: this.state.name, onChange: this.change.bind(this), style: { backgroundColor: "#F2F2F2", width: "100%", margin: "auto", height: "120px", lineHeight: "120px", border: "none", outline: "none", color: "#333333", paddingLeft: "50px" } })),
                    React.createElement("div", { style: { fontSize: "40px", color: "#6C6C6C", margin: "100px 50px 0 50px", height: "500px" } },
                        React.createElement("div", { style: { float: "left", width: "50%" } },
                            React.createElement("div", null, "\u7F29\u7565\u56FE:"),
                            React.createElement("div", { style: { width: "250px", height: "250px", marginTop: "50px" } },
                                React.createElement("img", { src: "./park_m/image/close.png", style: { position: "relative", left: "210px", top: "10px" } }),
                                React.createElement("input", { type: "file", onChange: this.submit.bind(this) }),
                                React.createElement("img", { src: "./park_m/image/tx.jpg", width: "100%", height: "100%" }))),
                        React.createElement("div", { style: { float: "left", width: "50%" } },
                            React.createElement("div", null, "\u5168\u666F\u56FE:"),
                            React.createElement("div", { style: { width: "250px", height: "250px", marginTop: "50px" } },
                                React.createElement("img", { src: "./park_m/image/close.png", style: { position: "relative", left: "210px", top: "10px" } }),
                                React.createElement("img", { src: "./park_m/image/tx.jpg", width: "100%", height: "100%" }))))),
                React.createElement("div", { className: "rent-room-detail-bottom" },
                    React.createElement("div", { style: { float: "left", width: "50%", height: "100%", textAlign: "center", lineHeight: "130px", color: "#6C6C6C", backgroundColor: "#F2F2F2" } }, "\u53D6\u6D88"),
                    React.createElement("div", { style: { float: "left", width: "50%", height: "100%", textAlign: "center", lineHeight: "130px", backgroundColor: "#0B8BF0", color: "#ffffff" }, onClick: this.submit.bind(this) }, "\u63D0\u4EA4"))));
        }
    }
    exports.default = modificationAuthenticationDetail;
});
define("parkInfo", ["require", "exports", "react", "react-router-dom", "dataService", "compat"], function (require, exports, React, RouterDOM, dataService_42, compat_16) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ParkInfo extends React.Component {
        constructor(props) {
            super(props);
            this.dataService = new dataService_42.default();
            this.globalAction = new compat_16.default();
            this.state = {
                applyPutcss: "applyPut-part ",
                iconfont: "iconfont iconfont-unturn",
                companyInfoul: "companyInfoul",
                infoli: 0,
            };
        }
        componentDidMount() {
            let park_id = sessionStorage.getItem("park_id");
            this.dataService.getParkShowInfo(this.setParkInfo, park_id);
            move3dBut("up");
        }
        static setParkInfo(data) { }
        setParkInfo(data) {
            if (data) {
                Intro.getNotes(data);
                Advantage.getNotes(data);
                Sale.getNotes(data);
                Elegant.getNotes(data);
            }
        }
        mapReturnpark() {
            this.globalAction.web_call_webgl_mapReturnpark();
            move3dBut("down");
        }
        toggleFold() {
            console.log("tftft");
            if (this.state.applyPutcss == "applyPut-all") {
                this.setState({
                    applyPutcss: "applyPut-part",
                    applyPutul: " applyPutul-part applyPutul",
                });
                this.globalAction.web_call_webgl_continueloadModuler();
                Intro.textCss("part");
                Advantage.textCss("part");
                Sale.textCss("part");
                Elegant.textCss("part");
            }
            else {
                this.setState({
                    applyPutcss: "applyPut-all",
                    applyPutul: " applyPutul-all applyPutul",
                });
                this.globalAction.web_call_webgl_pauseloadModuler();
                Intro.textCss("all");
                Advantage.textCss("all");
                Sale.textCss("all");
                Elegant.textCss("all");
            }
            if (this.state.iconfont == "iconfont iconfont-unturn") {
                this.setState({
                    iconfont: "iconfont iconfont-turn",
                });
            }
            else {
                this.setState({
                    iconfont: "iconfont iconfont-unturn",
                });
            }
        }
        infoClick(indexof) {
            console.log("infoClick", indexof);
            this.setState({
                infoli: indexof,
            });
        }
        render() {
            return (React.createElement("div", null,
                React.createElement("p", { className: "companyInfotit" },
                    React.createElement("span", null, "\u56ED\u533A\u4ECB\u7ECD")),
                React.createElement("div", { className: this.state.applyPutcss },
                    React.createElement("div", { className: "foleBtn" },
                        React.createElement(RouterDOM.Link, { to: "/home" },
                            React.createElement("p", { className: "companyGoHomeLeft", style: { color: "#949494" }, onClick: this.mapReturnpark.bind(this) },
                                React.createElement("i", { className: "iconfont companyInfoicon" }, "\uE83B"),
                                React.createElement("span", null, "\u8FD4\u56DE"))),
                        React.createElement("p", { className: "companyGoHomeRight" },
                            React.createElement("i", { className: this.state.iconfont, style: { "fontSize": "5rem", "color": "#C0C0C0" }, onClick: this.toggleFold.bind(this) }, "\uE849"))),
                    React.createElement("ul", { className: this.state.companyInfoul },
                        React.createElement("li", { className: this.state.infoli == 0 ? "companyInfoli-active" : "companyInfoli", onClick: this.infoClick.bind(this, 0) }, "\u56ED\u533A\u7B80\u4ECB"),
                        React.createElement("li", { className: this.state.infoli == 1 ? "companyInfoli-active" : "companyInfoli", onClick: this.infoClick.bind(this, 1) }, "\u533A\u4F4D\u4F18\u52BF"),
                        React.createElement("li", { className: this.state.infoli == 2 ? "companyInfoli-active" : "companyInfoli", onClick: this.infoClick.bind(this, 2) }, "\u4F18\u60E0\u653F\u7B56"),
                        React.createElement("li", { className: this.state.infoli == 3 ? "companyInfoli-active" : "companyInfoli", onClick: this.infoClick.bind(this, 3) }, "\u56ED\u533A\u98CE\u91C7")),
                    React.createElement("div", { className: "infoContain" },
                        React.createElement("div", { className: this.state.infoli == 0 ? "show" : "hide" },
                            React.createElement(Intro, null)),
                        React.createElement("div", { className: this.state.infoli == 1 ? "show" : "hide" },
                            React.createElement(Advantage, null)),
                        React.createElement("div", { className: this.state.infoli == 2 ? "show" : "hide" },
                            React.createElement(Sale, null)),
                        React.createElement("div", { className: this.state.infoli == 3 ? "show" : "hide" },
                            React.createElement(Elegant, null))))));
        }
    }
    class Intro extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                intro: "intro intro-part",
                square: "",
                floorage: "",
                construction_time: "",
            };
            Intro.textCss = this.textCss.bind(this);
            Intro.getNotes = this.getNotes.bind(this);
        }
        static textCss(css) { }
        textCss(css) {
            if (css == "part") {
                this.setState({
                    intro: "intro intro-part"
                });
            }
            else {
                this.setState({
                    intro: "intro intro-all"
                });
            }
        }
        static getNotes(data) { }
        ;
        getNotes(data) {
            let datas = data.response[0];
            this.setState({
                square: datas.square,
                floorage: datas.floorage,
                construction_time: datas.construction_time,
            });
            if (datas.introduction) {
                document.getElementById("introText").innerHTML = datas.introduction;
            }
        }
        componentWillMount() { }
        render() {
            return (React.createElement("div", { className: this.state.intro },
                React.createElement("p", null,
                    "\u5360\u5730\u9762\u79EF",
                    React.createElement("span", { className: "introT" }, this.state.square)),
                React.createElement("p", null,
                    "\u5EFA\u7B51\u9762\u79EF",
                    React.createElement("span", { className: "introT" }, this.state.floorage)),
                React.createElement("p", null,
                    "\u5EFA\u56ED\u65F6\u95F4",
                    React.createElement("span", { className: "introT" }, this.state.construction_time)),
                React.createElement("p", null, " "),
                React.createElement("div", { id: "introText", className: "parkInfoText" })));
        }
    }
    class Advantage extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                intro: "intro intro-part",
                location: "",
            };
            Advantage.textCss = this.textCss.bind(this);
            Advantage.getNotes = this.getNotes.bind(this);
        }
        componentWillMount() { }
        static textCss(css) { }
        textCss(css) {
            if (css == "part") {
                this.setState({
                    intro: "intro intro-part"
                });
            }
            else {
                this.setState({
                    intro: "intro intro-all"
                });
            }
        }
        static getNotes(data) { }
        ;
        getNotes(data) {
            console.log("NotesNotes", data);
            let datas = data.response[0];
            document.getElementById("advantageText").innerHTML = datas.location_advantage;
            this.setState({
                location: datas.location,
            });
        }
        render() {
            return (React.createElement("div", { className: this.state.intro },
                React.createElement("p", null,
                    "\u5730\u7406\u4F4D\u7F6E",
                    React.createElement("span", { className: "introT_dlwz" }, this.state.location)),
                React.createElement("div", { id: "advantageText", className: "parkInfoText" })));
        }
    }
    class Sale extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                intro: "intro intro-part",
            };
            Sale.textCss = this.textCss.bind(this);
            Sale.getNotes = this.getNotes.bind(this);
        }
        componentWillMount() { }
        static textCss(css) { }
        textCss(css) {
            if (css == "part") {
                this.setState({
                    intro: "intro intro-part"
                });
            }
            else {
                this.setState({
                    intro: "intro intro-all"
                });
            }
        }
        static getNotes(data) { }
        ;
        getNotes(data) {
            console.log("NotesNotes", data);
            let datas = data.response[0];
            document.getElementById("saleText").innerHTML = datas.preferential_policy;
        }
        render() {
            return (React.createElement("div", { className: this.state.intro },
                React.createElement("div", { id: "saleText", className: "parkInfoText" })));
        }
    }
    class Elegant extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                intro: "intro intro-part",
            };
            Elegant.textCss = this.textCss.bind(this);
            Elegant.getNotes = this.getNotes.bind(this);
        }
        componentWillMount() { }
        static textCss(css) { }
        textCss(css) {
            if (css == "part") {
                this.setState({
                    intro: "intro intro-part"
                });
            }
            else {
                this.setState({
                    intro: "intro intro-all"
                });
            }
        }
        static getNotes(data) { }
        ;
        getNotes(data) {
            console.log("NotesNotes", data);
            let datas = data.response[0];
            document.getElementById("elegantText").innerHTML = datas.elegant;
        }
        render() {
            return (React.createElement("div", { className: this.state.intro },
                React.createElement("div", { id: "elegantText", className: "parkInfoText" })));
        }
    }
    exports.default = ParkInfo;
});
define("router", ["require", "exports", "react-router-dom", "react", "index", "home", "parkCompany", "photograph", "infoArea", "information", "personalCenter", "findLease", "applyPut", "bookSite", "repairsOnline", "parking", "narrate", "isay", "workOrder", "workOrderDetail", "modificationAuthentication", "message", "enterpriseInformation", "rentRoom", "roomBaseUpdate", "rentRoomDetail", "defaultRentRoom", "parkWorkOrder", "serviceTel", "distribute", "searchUser", "statisticalStatement", "informationChild", "informationChilds", "informationDetail", "informationDetails", "attractInvestment", "attractInvestmentList", "room", "roomRent", "roomDetail", "roomUse", "roomBase", "roomPattern", "roomPatternUpdate", "modificationAuthenticationDetail", "identityAuthentication", "parkInfo", "findSell"], function (require, exports, react_router_dom_13, React, index_1, home_1, parkCompany_1, photograph_1, infoArea_1, information_1, personalCenter_1, findLease_1, applyPut_1, bookSite_1, repairsOnline_1, parking_1, narrate_1, isay_1, workOrder_1, workOrderDetail_1, modificationAuthentication_1, message_1, enterpriseInformation_1, rentRoom_1, roomBaseUpdate_1, rentRoomDetail_1, defaultRentRoom_1, parkWorkOrder_1, serviceTel_1, distribute_1, searchUser_1, statisticalStatement_1, informationChild_1, informationChilds_1, informationDetail_1, informationDetails_1, attractInvestment_1, attractInvestmentList_1, room_1, roomRent_1, roomDetail_1, roomUse_1, roomBase_1, roomPattern_1, roomPatternUpdate_1, modificationAuthenticationDetail_1, identityAuthentication_1, parkInfo_1, findSell_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Router extends React.Component {
        render() {
            return (React.createElement(react_router_dom_13.HashRouter, null,
                React.createElement(react_router_dom_13.Switch, null,
                    React.createElement(react_router_dom_13.Route, { exact: true, path: "/", component: index_1.default }),
                    React.createElement(react_router_dom_13.Route, { path: "/parkCompany", component: parkCompany_1.default }),
                    React.createElement(react_router_dom_13.Route, { path: "/photograph", component: photograph_1.default }),
                    React.createElement(react_router_dom_13.Route, { path: "/findLease", component: findLease_1.default }),
                    React.createElement(react_router_dom_13.Route, { path: "/applyPut", component: applyPut_1.default }),
                    React.createElement(react_router_dom_13.Route, { path: "/bookSite", component: bookSite_1.default }),
                    React.createElement(react_router_dom_13.Route, { path: "/repairsOnline", component: repairsOnline_1.default }),
                    React.createElement(react_router_dom_13.Route, { path: "/parking", component: parking_1.default }),
                    React.createElement(react_router_dom_13.Route, { path: "/narrate", component: narrate_1.default }),
                    React.createElement(react_router_dom_13.Route, { path: "/isay", component: isay_1.default }),
                    React.createElement(react_router_dom_13.Route, { path: "/workOrder", component: workOrder_1.default }),
                    React.createElement(react_router_dom_13.Route, { path: "/workOrderDetail", component: workOrderDetail_1.default }),
                    React.createElement(react_router_dom_13.Route, { path: "/parkworkOrder", component: parkWorkOrder_1.default }),
                    React.createElement(react_router_dom_13.Route, { path: "/modificationAuthentication", component: modificationAuthentication_1.default }),
                    React.createElement(react_router_dom_13.Route, { path: "/message", component: message_1.default }),
                    React.createElement(react_router_dom_13.Route, { path: "/enterpriseInformation", component: enterpriseInformation_1.default }),
                    React.createElement(react_router_dom_13.Route, { path: "/rentRoom", component: rentRoom_1.default }),
                    React.createElement(react_router_dom_13.Route, { path: "/roomBaseUpdate", component: roomBaseUpdate_1.default }),
                    React.createElement(react_router_dom_13.Route, { path: "/rentRoomDetail", component: rentRoomDetail_1.default }),
                    React.createElement(react_router_dom_13.Route, { path: "/defaultRentRoom", component: defaultRentRoom_1.default }),
                    React.createElement(react_router_dom_13.Route, { path: "/serviceTel", component: serviceTel_1.default }),
                    React.createElement(react_router_dom_13.Route, { path: "/distribute", component: distribute_1.default }),
                    React.createElement(react_router_dom_13.Route, { path: "/searchUser", component: searchUser_1.default }),
                    React.createElement(react_router_dom_13.Route, { path: "/statisticalStatement", component: statisticalStatement_1.default }),
                    React.createElement(react_router_dom_13.Route, { path: "/informationDetail", component: informationDetail_1.default }),
                    React.createElement(react_router_dom_13.Route, { path: "/attractInvestment", component: attractInvestment_1.default }),
                    React.createElement(react_router_dom_13.Route, { path: "/attractInvestmentList", component: attractInvestmentList_1.default }),
                    React.createElement(react_router_dom_13.Route, { path: "/room", component: room_1.default }),
                    React.createElement(react_router_dom_13.Route, { path: "/roomRent", component: roomRent_1.default }),
                    React.createElement(react_router_dom_13.Route, { path: "/roomDetail", component: roomDetail_1.default }),
                    React.createElement(react_router_dom_13.Route, { path: "/roomUse", component: roomUse_1.default }),
                    React.createElement(react_router_dom_13.Route, { path: "/roomBase", component: roomBase_1.default }),
                    React.createElement(react_router_dom_13.Route, { path: "/roomPattern", component: roomPattern_1.default }),
                    React.createElement(react_router_dom_13.Route, { path: "/roomPatternUpdate", component: roomPatternUpdate_1.default }),
                    React.createElement(react_router_dom_13.Route, { path: "/modificationAuthenticationDetail", component: modificationAuthenticationDetail_1.default }),
                    React.createElement(react_router_dom_13.Route, { path: "/identityAuthentication", component: identityAuthentication_1.default }),
                    React.createElement(react_router_dom_13.Route, { path: "/parkInfo", component: parkInfo_1.default }),
                    React.createElement(react_router_dom_13.Route, { path: "/findSell", component: findSell_1.default }),
                    React.createElement(react_router_dom_13.Route, { path: "/home", render: (props) => (React.createElement(home_1.default, Object.assign({}, props),
                            React.createElement(react_router_dom_13.Route, { path: "/home/infoArea", component: infoArea_1.default }),
                            React.createElement(react_router_dom_13.Route, { path: "/home/information", component: information_1.default }),
                            React.createElement(react_router_dom_13.Route, { path: "/home/informationChilds", component: informationChilds_1.default }),
                            React.createElement(react_router_dom_13.Route, { path: "/home/informationDetails", component: informationDetails_1.default }),
                            React.createElement(react_router_dom_13.Route, { path: "/home/personalCenter", component: personalCenter_1.default }))) }),
                    React.createElement(react_router_dom_13.Route, { path: "/", render: (props) => (React.createElement(index_1.default, Object.assign({}, props),
                            React.createElement(react_router_dom_13.Route, { path: "/informationChild", component: informationChild_1.default }),
                            React.createElement(react_router_dom_13.Route, { path: "/personalCenter", component: personalCenter_1.default }))) }))));
        }
    }
    exports.default = Router;
});
define("index", ["require", "exports", "react", "react-dom", "react-router-dom", "router", "parkCompany", "findLease", "applyPut", "photograph", "bookSite", "parking", "bottomBtn", "repairsOnline", "dataService", "compat", "css!./styles/index.css"], function (require, exports, React, ReactDOM, react_router_dom_14, router_1, parkCompany_2, findLease_2, applyPut_2, photograph_2, bookSite_2, parking_2, bottomBtn_1, repairsOnline_2, dataService_43, compat_17) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Index extends React.Component {
        constructor(props) {
            super(props);
            this.dataService = new dataService_43.default();
            this.globalAction = new compat_17.default();
            this.state = {
                inputValue: "请输入园区名/区域名/商圈名",
                city: "",
                parkArr: [
                    {
                        "id": "1009",
                        "headimgurl": null,
                        "province": "桂林",
                        "longitude": "10.55",
                        "latitude": "66.666",
                        "name": "桂林国家高新",
                        "phone": "0773-123456",
                        "address": "桂林七星朝阳路D-11",
                        "service": [
                            {
                                "id": "1009",
                                "name": "电子信息",
                            }
                        ]
                    }
                ],
                roomArr: [{ name: "精装修 户型方正 使用率高", price: "1.5" }],
                tagArr: ["七星区", "东二环路", "1号线"],
                longitude: "",
                latitude: "",
                longitudeLocal: "",
                latitudeLocal: "",
                type: true,
                area: [
                    { name: "秀峰区", children: [{ name: "全部" }, { name: "万象城" }, { name: "嘉多国际" }, { name: "十字街" }] },
                    { name: "七星区", children: [{ name: "全部" }, { name: "创意产业园" }, { name: "大学科技园" }, { name: "甲天下广场" }, { name: "三里店" }] },
                    { name: "叠彩区", children: [{ name: "全部" }, { name: "万达广场" }, { name: "东晖星城" }, { name: "桂林国奥城" }, { name: "恒大广场" }] },
                    { name: "象山区", children: [{ name: "全部" }, { name: "万福广场" }, { name: "桂林站" }, { name: "新梦百货" }, { name: "青禾美邦" }] },
                    { name: "临桂区", children: [{ name: "全部" }, { name: "文化广场" }, { name: "吾悦广场" }, { name: "一院两馆" }, { name: "花生糖" }] },
                ],
                subway: [
                    { name: "全部", children: [{ name: "全部" }] },
                ],
                _area: [
                    { name: "秀峰区", children: [{ name: "全部" }, { name: "万象城" }, { name: "嘉多国际" }, { name: "十字街" }] },
                    { name: "七星区", children: [{ name: "全部" }, { name: "创意产业园" }, { name: "大学科技园" }, { name: "甲天下广场" }, { name: "三里店" }] },
                    { name: "叠彩区", children: [{ name: "全部" }, { name: "万达广场" }, { name: "东晖星城" }, { name: "桂林国奥城" }, { name: "恒大广场" }] },
                    { name: "象山区", children: [{ name: "全部" }, { name: "万福广场" }, { name: "桂林站" }, { name: "新梦百货" }, { name: "青禾美邦" }] },
                    { name: "临桂区", children: [{ name: "全部" }, { name: "文化广场" }, { name: "吾悦广场" }, { name: "一院两馆" }, { name: "花生糖" }] },
                ],
                _subway: [
                    { name: "全部", children: [{ name: "全部" }] },
                ],
                areas: [{ name: "不限" }, { name: "0-100m" }, { name: "100-200m" }, { name: "200-300m" }, { name: "300-500m" }, { name: "500-1000m" }, { name: ">1000m" }],
                totalPrice: [{ name: "不限" }, { name: "0-0.5万元/月" }, { name: "1.5-3万元/月" }, { name: "3-5万元/月" }, { name: "5-10万元/月" }, { name: "10万元/月以上" }],
                unitPrice: [{ name: "不限" }, { name: "1-0.5元/m²·月" }, { name: "1.5-3元/m²·月" }, { name: "3-5元/m²·月" }, { name: "5-10元/m²·月" }, { name: "10元/m²·月" }],
                isPosition: false,
                position: "",
                isArea: true,
                areaIndex: 0,
                subwayIndex: 0,
                areaChildrenIndex: 0,
                subwayChildrenIndex: 0,
                _isPosition: false,
                _position: "",
                _isArea: true,
                _areaIndex: 0,
                _subwayIndex: 0,
                _areaChildrenIndex: 0,
                _subwayChildrenIndex: 0,
                isAreas: false,
                areasName: "",
                areasIndex: 0,
                isPrice: false,
                priceName: "",
                isTotalPrice: true,
                totalPriceIndex: 0,
                unitPriceIndex: 0,
                isMore: false,
                decorationArr: [{ id: 0, name: "不限" }, { id: 1, name: "毛坯" }, { id: 2, name: "简装" }, { id: 3, name: "精装" }, { id: 4, name: "豪华" }],
                typeArr: ["不限", "共享办公", "独立办公"],
                decorationIndex: 0,
                typeIndex: 0,
                moreName: "",
                isMask: false,
                isCompanyArr: false,
                isLoginBox: false,
            };
            this.props = {
                history: this.props.history
            };
            Index.g_pIns = this;
            this.setParks = this.setParks.bind(this);
            this.isLoginData = this.isLoginData.bind(this);
            Index.hideCompanyArr = this.hideCompanyArr.bind(this);
            Index.hideLoginBox = this.hideLoginBox.bind(this);
            Index.showLoginBox = this.showLoginBox.bind(this);
        }
        componentWillMount() {
            this.dataService.getUserInfo(this.callBackGetUserInfo.bind(this));
            let data = sessionStorage.getItem("userInfos");
            let dataObj = JSON.parse(data);
            if (dataObj) {
                console.log("77777777777771", dataObj.name);
                this.dataService.getParks(this.setParks);
            }
        }
        callBackGetRoomDecorateType(data) {
            this.setState({ decorationArr: [...[{ id: 0, name: "不限" }], ...data.response] });
        }
        callBackGetUserInfo(data) {
            data = JSON.parse(data);
            console.log("userInfos", data);
            let userInfo = {
                userId: data.id, name: data.name, phone: data.phone, avatar: data.avatar, enterprise: data.enterprise, enterpriseId: data.enterprises.length > 0 ? data.enterprises[0].id : "",
                roles: {
                    role_id: data.roles[0].role_id, role_name: data.roles[0].role_name
                },
                enterprises: data.enterprises,
            };
            sessionStorage.setItem("token", data.token);
            sessionStorage.setItem("userInfos", JSON.stringify(userInfo));
            this.dataService.getParks(this.setParks);
            this.isLoginData();
        }
        static showLoginBox() { }
        showLoginBox() {
            this.setState({
                isLoginBox: true
            });
        }
        static hideLoginBox() { }
        hideLoginBox() {
            this.setState({
                isLoginBox: false,
            });
            this.isLoginData();
            this.dataService.getParks(this.setParks);
        }
        static hideLoginBox2() { }
        hideLoginBox2() {
            this.setState({
                isLoginBox: false,
            });
        }
        isLoginData() {
            let data = sessionStorage.getItem("userInfos");
            let dataObj = JSON.parse(data);
            console.log("LoginData", dataObj);
            console.log(" LoginData", typeof dataObj);
            console.log("LoginData21", dataObj.enterprises);
            console.log(" LoginData22", typeof dataObj.enterprises);
            IsCompanys.getCompanyArr(dataObj.enterprises);
            if (dataObj.enterprises.length > 1) {
                this.setState({
                    isCompanyArr: true,
                });
            }
            else {
                if (dataObj.enterprises.length == 0) {
                    sessionStorage.setItem("enterprise", "请先关联企业");
                    sessionStorage.setItem("enterpriseId", "请先关联企业");
                }
                else {
                    sessionStorage.setItem("enterprise", dataObj.enterprise);
                    sessionStorage.setItem("enterpriseId", dataObj.enterpriseId);
                }
            }
        }
        static hideCompanyArr() { }
        hideCompanyArr() {
            this.setState({
                isCompanyArr: false,
            });
        }
        foucus() {
            if (this.state.inputValue === "请输入园区名/区域名/商圈名") {
                this.setState({ inputValue: "" });
            }
        }
        blur() {
            if (this.state.inputValue === "") {
                this.setState({ inputValue: "请输入园区名/区域名/商圈名" });
            }
        }
        change(event) {
            this.setState({ inputValue: event.target.value });
        }
        initPark(park_id) {
            console.log("initPark", park_id);
            sessionStorage.setItem("park_id", park_id);
            this.dataService.getParkBuildingInfo(this.roomList.bind(this));
            this.globalAction.web_call_webgl_initPark(park_id);
        }
        roomList(data) {
            console.log('roomList', data);
            this.globalAction.web_call_webgl_parkRoomList(data.response);
        }
        setParks(data) {
            this.setState({
                parkArr: data
            });
            let _this = this;
            if (!sessionStorage.getItem("city")) {
                var geolocation = new BMap.Geolocation();
                geolocation.getCurrentPosition(function (r) {
                    if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                        let parkArr = _this.state.parkArr;
                        parkArr.forEach(item => {
                            item.distance = _this.getFlatternDistance(parseFloat(r.latitude), parseFloat(r.longitude), parseFloat(item.latitude), parseFloat(item.longitude));
                        });
                        sessionStorage.setItem("city", r.address.city);
                        _this.setState({ city: r.address.city, parkArr: parkArr });
                    }
                    else {
                        if (this.getStatus() === 6) {
                            console.log("没有权限");
                        }
                        if (this.getStatus() === 8) {
                            console.log("连接超时");
                        }
                    }
                });
            }
        }
        getRad(d) {
            return d * Math.PI / 180.0;
        }
        getFlatternDistance(lat1, lng1, lat2, lng2) {
            var f = this.getRad((lat1 + lat2) / 2);
            var g = this.getRad((lat1 - lat2) / 2);
            var l = this.getRad((lng1 - lng2) / 2);
            var sg = Math.sin(g);
            var sl = Math.sin(l);
            var sf = Math.sin(f);
            var s, c, w, r, d, h1, h2;
            var a = 6378137.0;
            var fl = 1 / 298.257;
            sg = sg * sg;
            sl = sl * sl;
            sf = sf * sf;
            s = sg * (1 - sl) + (1 - sf) * sl;
            c = (1 - sg) * (1 - sl) + sf * sl;
            w = Math.atan(Math.sqrt(s / c));
            r = Math.sqrt(s * c) / w;
            d = 2 * w * a;
            h1 = (3 * r - 1) / 2 / c;
            h2 = (3 * r + 1) / 2 / s;
            return d * (1 + fl * (h1 * sf * (1 - sg) - h2 * (1 - sf) * sg));
        }
        changeType() {
            this.setState({ type: !this.state.type, isPosition: false, _isPosition: false, isAreas: false, isPrice: false, isMore: false, isMask: false });
        }
        changePosition() {
            this.setState({
                isPosition: !this.state.isPosition,
                isMask: !this.state.isMask
            });
        }
        changePositions() {
            this.setState({
                _isPosition: !this.state._isPosition, isAreas: false, isPrice: false, isMore: false,
                isMask: !this.state._isPosition
            });
        }
        changeArea(index) {
            this.setState({ areaIndex: index });
        }
        changeAreaChildren(index) {
            this.setState({ areaChildrenIndex: index, isPosition: false, isMask: false }, () => {
                this.setState({
                    position: this.state.isArea ? this.state.area[this.state.areaIndex].name + (this.state.area[this.state.areaIndex].children.length > 0 ? this.state.area[this.state.areaIndex].children[this.state.areaChildrenIndex].name : null) :
                        this.state.subway[this.state.subwayIndex].name + (this.state.subway[this.state.subwayIndex].children.length > 0 ? this.state.subway[this.state.subwayIndex].children[this.state.subwayChildrenIndex].name : null)
                });
            });
        }
        _changeArea(index) {
            this.setState({ _areaIndex: index });
        }
        clickAreas() {
            this.setState({
                isAreas: !this.state.isAreas, _isPosition: false, isPrice: false, isMore: false,
                isMask: !this.state.isAreas, areasName: this.state.areas[this.state.areasIndex].name
            });
        }
        changeAreas(index) {
            this.setState({ areasIndex: index, isAreas: false, isMask: false }, () => {
                this.setState({
                    areasName: this.state.areas[this.state.areasIndex].name
                });
            });
        }
        _changeAreaChildren(index) {
            this.setState({ _areaChildrenIndex: index, _isPosition: false, isMask: false }, () => {
                this.setState({
                    _position: this.state._isArea ? this.state._area[this.state._areaIndex].name + (this.state._area[this.state._areaIndex].children.length > 0 ? this.state._area[this.state._areaIndex].children[this.state._areaChildrenIndex].name : null) :
                        this.state._subway[this.state._subwayIndex].name + (this.state._subway[this.state._subwayIndex].children.length > 0 ? this.state._subway[this.state._subwayIndex].children[this.state._subwayChildrenIndex].name : null)
                });
            });
        }
        _changeSubwayChildren(index) {
            this.setState({ _subwayChildrenIndex: index });
        }
        changeSubway(index) {
            this.setState({ subwayIndex: index });
        }
        changeSubwayChildren(index) {
            this.setState({ subwayChildrenIndex: index, isPosition: false, isMask: false }, () => {
                this.setState({
                    position: this.state.isArea ? this.state.area[this.state.areaIndex].name + (this.state.area[this.state.areaIndex].children.length > 0 ? this.state.area[this.state.areaIndex].children[this.state.areaChildrenIndex].name : null) :
                        this.state.subway[this.state.subwayIndex].name + (this.state.subway[this.state.subwayIndex].children.length > 0 ? this.state.subway[this.state.subwayIndex].children[this.state.subwayChildrenIndex].name : null)
                });
            });
        }
        ckArea() {
            this.setState({ isArea: true });
        }
        ckSubway() {
            this.setState({ isArea: false });
        }
        ckAreas() {
            this.setState({ _isArea: true });
        }
        ckSubways() {
            this.setState({ _isArea: false });
        }
        clickPrice() {
            console.log(111);
            this.setState({
                isPrice: !this.state.isPrice, _isPosition: false, isAreas: false, isMore: false, isMask: !this.state.isPrice,
                priceName: this.state.isTotalPrice ? this.state.totalPrice[this.state.totalPriceIndex].name : this.state.unitPrice[this.state.unitPriceIndex].name,
            });
        }
        changeTotalPrice(index) {
            this.setState({ totalPriceIndex: index, isPrice: false, isMask: false }, () => {
                this.setState({
                    priceName: this.state.isTotalPrice ? this.state.totalPrice[this.state.totalPriceIndex].name : this.state.unitPrice[this.state.unitPriceIndex].name
                });
            });
        }
        changeUnitPrice(index) {
            this.setState({ unitPriceIndex: index, isPrice: false, isMask: false }, () => {
                this.setState({
                    priceName: this.state.isTotalPrice ? this.state.totalPrice[this.state.totalPriceIndex].name : this.state.unitPrice[this.state.unitPriceIndex].name
                });
            });
        }
        ckTotalPrice() {
            this.setState({ isTotalPrice: true });
        }
        ckUnitPrice() {
            this.setState({ isTotalPrice: false });
        }
        changeDecorationIndex(index) {
            this.setState({ decorationIndex: index });
        }
        changeTypeIndex(index) {
            this.setState({ typeIndex: index });
        }
        clickMore() {
            this.setState({
                isMore: !this.state.isMore, _isPosition: false, isAreas: false, isPrice: false, isMask: !this.state.isMore
            });
        }
        clickMask() {
            this.setState({ isPosition: false, _isPosition: false, isAreas: false, isPrice: false, isMore: false, isMask: false });
        }
        reset() {
            this.setState({ isMore: false, isMask: false, moreName: this.state.decorationArr[0].name, decorationIndex: 0 });
        }
        enter() {
            this.setState({ isMore: false, isMask: false, moreName: this.state.decorationArr[this.state.decorationIndex].name });
        }
        render() {
            return (React.createElement("div", { className: "index" },
                React.createElement("div", { className: this.state.isCompanyArr == true ? "show" : "hide" },
                    React.createElement(IsCompanys, null)),
                React.createElement("div", { className: this.state.isLoginBox == true ? "show" : "hide" },
                    React.createElement(LoginTest, null)),
                React.createElement("div", { className: "index-input-div" },
                    React.createElement("div", { className: "index-child-right" },
                        React.createElement("span", { style: { fontWeight: "500" } }, sessionStorage.getItem("city")),
                        React.createElement("img", { src: "./park_m/image/bottom.png", width: "50px", height: "50px", style: { marginTop: "-10px" } })),
                    React.createElement("div", { className: "index-child-left" },
                        React.createElement("input", { className: "index-input", value: this.state.inputValue, onFocus: this.foucus.bind(this), onBlur: this.blur.bind(this), onChange: this.change.bind(this) }),
                        React.createElement("img", { src: "./park_m/image/search.png", className: "index-search-img" }))),
                React.createElement("div", { style: { width: "100%", color: "#333333", fontWeight: "600", fontSize: "42px", marginTop: "30px", overflow: "hidden" } },
                    React.createElement("div", { className: "index-park-a", onClick: this.changeType.bind(this) },
                        React.createElement("div", { style: { position: "relative", backgroundColor: "#ffffff", zIndex: 2, color: this.state.type ? "#0B8BF0" : "#333333" } }, "\u56ED\u533A"),
                        React.createElement("div", { style: { position: "relative", top: "-62px", backgroundColor: "#ffffff", color: "#ffffff" } }, "a"),
                        this.state.type ? React.createElement("div", { style: { width: "23%", margin: "auto", border: "6px solid #0B8BF0", borderRadius: "50%", color: "#ffffff", marginTop: "-125px" } }, "a") : null),
                    React.createElement("div", { className: "index-park-b", onClick: this.changeType.bind(this) },
                        React.createElement("div", { style: { position: "relative", backgroundColor: "#ffffff", zIndex: 2, color: !this.state.type ? "#0B8BF0" : "#333333" } }, "\u623F\u6E90\u63A8\u8350"),
                        React.createElement("div", { style: { position: "relative", top: "-62px", backgroundColor: "#ffffff", color: "#ffffff" } }, "a"),
                        !this.state.type ? React.createElement("div", { style: { width: "23%", margin: "auto", border: "6px solid #0B8BF0", borderRadius: "50%", color: "#ffffff", marginTop: "-125px" } }, "a") : null)),
                React.createElement("div", { className: "index-number" },
                    this.state.type ?
                        React.createElement("div", { onClick: this.changePosition.bind(this), style: { overflow: "hidden", float: "left", width: "25%", textAlign: "center" } },
                            React.createElement("div", { style: { float: "left", fontSize: "38px", fontWeight: "500", color: this.state.position ? "#0B8BF0" : "#333333", width: "80%" }, className: "index-white-space" }, this.state.position ? this.state.position : "位置"),
                            React.createElement("div", { className: this.state.position ? "corner-add" : "corner", style: { transform: this.state.isPosition ? "rotate(180deg)" : "", margin: this.state.isPosition ? "15px 0 0 0" : "" } })) : null,
                    this.state.type ?
                        React.createElement("div", { style: { float: "right", fontSize: "38px" } },
                            "\u5DF2\u6709",
                            React.createElement("span", { style: { color: "#0B8BF0", margin: "0 15px 0 15px" } }, this.state.parkArr.length),
                            "\u5BB6\u56ED\u533A\u4E0A\u7EBF") :
                        React.createElement("div", { style: { overflow: "hidden", float: "left", width: "100%" } },
                            React.createElement("div", { onClick: this.changePositions.bind(this), style: { overflow: "hidden", float: "left", width: "25%", textAlign: "center" } },
                                React.createElement("div", { style: { float: "left", fontSize: "38px", fontWeight: "500", color: this.state._position ? "#0B8BF0" : "#333333", width: "80%" }, className: "index-white-space" }, this.state._position ? this.state._position : "位置"),
                                React.createElement("div", { className: this.state._position ? "corner-add" : "corner", style: { transform: this.state._isPosition ? "rotate(180deg)" : "", margin: this.state._isPosition ? "15px 0 0 0" : "" } })),
                            React.createElement("div", { onClick: this.clickAreas.bind(this), style: { overflow: "hidden", float: "left", width: "25%", textAlign: "center" } },
                                React.createElement("div", { style: { float: "left", fontSize: "38px", fontWeight: "500", color: this.state.areasName ? "#0B8BF0" : "#333333", width: "80%" }, className: "index-white-space" }, this.state.areasName ? this.state.areasName : "面积"),
                                React.createElement("div", { className: this.state.areasName ? "corner-add" : "corner", style: { transform: this.state.isAreas ? "rotate(180deg)" : "", margin: this.state.isAreas ? "15px 0 0 0" : "" } })),
                            React.createElement("div", { onClick: this.clickPrice.bind(this), style: { overflow: "hidden", float: "left", width: "25%", textAlign: "center" } },
                                React.createElement("div", { style: { float: "left", fontSize: "38px", fontWeight: "500", color: this.state.priceName ? "#0B8BF0" : "#333333", width: "80%" }, className: "index-white-space" }, this.state.priceName ? this.state.priceName : "价格"),
                                React.createElement("div", { className: this.state.priceName ? "corner-add" : "corner", style: { transform: this.state.isPrice ? "rotate(180deg)" : "", margin: this.state.isPrice ? "15px 0 0 0" : "" } })),
                            React.createElement("div", { onClick: this.clickMore.bind(this), style: { overflow: "hidden", float: "left", width: "25%", textAlign: "center" } },
                                React.createElement("div", { style: { float: "left", fontSize: "38px", fontWeight: "500", color: this.state.moreName ? "#0B8BF0" : "#333333", width: "80%" }, className: "index-white-space" }, this.state.moreName ? this.state.moreName : "更多"),
                                React.createElement("div", { className: this.state.moreName ? "corner-add" : "corner", style: { transform: this.state.isMore ? "rotate(180deg)" : "", margin: this.state.isMore ? "15px 0 0 0" : "" } })))),
                this.state.isPosition ?
                    React.createElement("div", { className: "index-position" },
                        React.createElement("div", { style: { overflow: "hidden" } },
                            React.createElement("div", { onClick: this.ckArea.bind(this), style: { float: "left", backgroundColor: this.state.isArea ? "#0B8BF0" : "#F2F2F2", width: "240px", borderRadius: "5px", height: "70px", lineHeight: "70px", textAlign: "center", color: this.state.isArea ? "#ffffff" : "#6C6C6C" } }, "\u533A\u57DF"),
                            React.createElement("div", { onClick: this.ckSubway.bind(this), style: { float: "left", backgroundColor: this.state.isArea ? "#F2F2F2" : "#0B8BF0", width: "240px", borderRadius: "5px", height: "70px", lineHeight: "70px", textAlign: "center", marginLeft: "50px", color: this.state.isArea ? "#6C6C6C" : "#ffffff" } }, "\u5730\u94C1\u7AD9")),
                        this.state.isArea ?
                            React.createElement("div", { style: { height: "100%" } },
                                React.createElement("div", { className: "index-area" }, this.state.area.map((item, index) => {
                                    return (React.createElement("div", { key: index, style: { height: "120px", lineHeight: "120px", fontWeight: "500", color: index === this.state.areaIndex ? "#0B8BF0" : "#333333" }, onClick: e => this.changeArea(index) }, item.name));
                                })),
                                React.createElement("div", { className: "index-area-child" }, this.state.area[this.state.areaIndex].children.map((item, index) => {
                                    return (React.createElement("div", { key: index, style: { height: "120px", lineHeight: "120px", fontWeight: "500", color: index === this.state.areaChildrenIndex ? "#0B8BF0" : "#333333" }, onClick: e => this.changeAreaChildren(index) }, item.name));
                                })))
                            :
                                React.createElement("div", { style: { height: "100%" } },
                                    React.createElement("div", { className: "index-subway" }, this.state.subway.map((item, index) => {
                                        return (React.createElement("div", { key: index, style: { height: "120px", lineHeight: "120px", fontWeight: "500", color: index === this.state.subwayIndex ? "#0B8BF0" : "#333333" }, onClick: e => this.changeSubway(index) }, item.name));
                                    })),
                                    React.createElement("div", { className: "index-subway-child" }, this.state.subway[this.state.subwayIndex].children.map((item, index) => {
                                        return (React.createElement("div", { key: index, style: { height: "120px", lineHeight: "120px", fontWeight: "500", color: index === this.state.subwayChildrenIndex ? "#0B8BF0" : "#333333" }, onClick: e => this.changeSubwayChildren(index) }, item.name));
                                    })))) : null,
                this.state._isPosition ?
                    React.createElement("div", { className: "index-position" },
                        React.createElement("div", { style: { overflow: "hidden" } },
                            React.createElement("div", { onClick: this.ckAreas.bind(this), style: { float: "left", backgroundColor: this.state._isArea ? "#0B8BF0" : "#F2F2F2", width: "240px", borderRadius: "5px", height: "70px", lineHeight: "70px", textAlign: "center", color: this.state._isArea ? "#ffffff" : "#6C6C6C" } }, "\u533A\u57DF"),
                            React.createElement("div", { onClick: this.ckSubways.bind(this), style: { float: "left", backgroundColor: this.state._isArea ? "#F2F2F2" : "#0B8BF0", width: "240px", borderRadius: "5px", height: "70px", lineHeight: "70px", textAlign: "center", marginLeft: "50px", color: this.state._isArea ? "#6C6C6C" : "#ffffff" } }, "\u5730\u94C1\u7AD9")),
                        this.state._isArea ?
                            React.createElement("div", { style: { height: "100%" } },
                                React.createElement("div", { className: "index-area" }, this.state._area.map((item, index) => {
                                    return (React.createElement("div", { key: index, style: { height: "120px", lineHeight: "120px", fontWeight: "500", color: index === this.state._areaIndex ? "#0B8BF0" : "#333333" }, onClick: e => this._changeArea(index) }, item.name));
                                })),
                                React.createElement("div", { className: "index-area-child" }, this.state._area[this.state._areaIndex].children.map((item, index) => {
                                    return (React.createElement("div", { key: index, style: { height: "120px", lineHeight: "120px", fontWeight: "500", color: index === this.state._areaChildrenIndex ? "#0B8BF0" : "#333333" }, onClick: e => this._changeAreaChildren(index) }, item.name));
                                })))
                            :
                                React.createElement("div", { style: { height: "100%" } },
                                    React.createElement("div", { className: "index-subway" }, this.state._subway.map((item, index) => {
                                        return (React.createElement("div", { key: index, style: { height: "120px", lineHeight: "120px", fontWeight: "500", color: index === this.state._subwayIndex ? "#0B8BF0" : "#333333" }, onClick: e => this.changeSubway(index) }, item.name));
                                    })),
                                    React.createElement("div", { className: "index-subway-child" }, this.state._subway[this.state._subwayIndex].children.map((item, index) => {
                                        return (React.createElement("div", { key: index, style: { height: "120px", lineHeight: "120px", fontWeight: "500", color: index === this.state._subwayChildrenIndex ? "#0B8BF0" : "#333333" }, onClick: e => this._changeSubwayChildren(index) }, item.name));
                                    })))) : null,
                this.state.isAreas ?
                    React.createElement("div", { className: "index-position" },
                        React.createElement("div", { style: { height: "100%" } },
                            React.createElement("div", { className: "index-area" }, this.state.areas.map((item, index) => {
                                return (React.createElement("div", { key: index, style: { height: "120px", lineHeight: "120px", fontWeight: "500", color: index === this.state.areasIndex ? "#0B8BF0" : "#333333" }, onClick: e => this.changeAreas(index) },
                                    item.name,
                                    index !== 0 ? React.createElement("span", null, "\u00B2") : null));
                            })))) : null,
                this.state.isPrice ?
                    React.createElement("div", { className: "index-position" },
                        React.createElement("div", { style: { overflow: "hidden" } },
                            React.createElement("div", { onClick: this.ckTotalPrice.bind(this), style: { float: "left", backgroundColor: this.state.isTotalPrice ? "#0B8BF0" : "#F2F2F2", width: "240px", borderRadius: "5px", height: "70px", lineHeight: "70px", textAlign: "center", color: this.state.isTotalPrice ? "#ffffff" : "#6C6C6C" } }, "\u603B\u4EF7"),
                            React.createElement("div", { onClick: this.ckUnitPrice.bind(this), style: { float: "left", backgroundColor: this.state.isTotalPrice ? "#F2F2F2" : "#0B8BF0", width: "240px", borderRadius: "5px", height: "70px", lineHeight: "70px", textAlign: "center", marginLeft: "50px", color: this.state.isTotalPrice ? "#6C6C6C" : "#ffffff" } }, "\u5355\u4EF7")),
                        this.state.isTotalPrice ?
                            React.createElement("div", { style: { height: "100%" } },
                                React.createElement("div", { className: "index-area" }, this.state.totalPrice.map((item, index) => {
                                    return (React.createElement("div", { key: index, style: { height: "120px", lineHeight: "120px", fontWeight: "500", color: index === this.state.totalPriceIndex ? "#0B8BF0" : "#333333" }, onClick: e => this.changeTotalPrice(index) }, item.name));
                                })))
                            :
                                React.createElement("div", { style: { height: "100%" } },
                                    React.createElement("div", { className: "index-subway" }, this.state.unitPrice.map((item, index) => {
                                        return (React.createElement("div", { key: index, style: { height: "120px", lineHeight: "120px", fontWeight: "500", color: index === this.state.unitPriceIndex ? "#0B8BF0" : "#333333" }, onClick: e => this.changeUnitPrice(index) }, item.name));
                                    })))) : null,
                this.state.isMore ?
                    React.createElement("div", { className: "index-position" },
                        React.createElement("div", { style: { color: "#333333", fontSize: "46px", fontWeight: "500", marginBottom: "40px", marginTop: "10px" } }, "\u88C5\u4FEE"),
                        React.createElement("div", { style: { overflow: "hidden" } }, this.state.decorationArr.map((item, index) => {
                            return (React.createElement("div", { key: index, style: {
                                    float: "left", backgroundColor: this.state.decorationIndex === index ? "#0B8BF0" : "#F2F2F2", color: this.state.decorationIndex === index ? "#FFFFFF" : "#6C6C6C", width: "200px", height: "70px", textAlign: "center", lineHeight: "70px",
                                    fontSize: "40px", borderRadius: "5px", margin: "0 30px 30px 0"
                                }, onClick: e => this.changeDecorationIndex(index) }, item.name));
                        })),
                        false ?
                            React.createElement("div", null,
                                React.createElement("div", { style: { color: "#333333", fontSize: "46px", fontWeight: "500", marginBottom: "40px", marginTop: "30px" } }, "\u7C7B\u578B"),
                                React.createElement("div", { style: { overflow: "hidden" } }, this.state.typeArr.map((item, index) => {
                                    return (React.createElement("div", { key: index, style: {
                                            float: "left", backgroundColor: this.state.typeIndex === index ? "#0B8BF0" : "#F2F2F2", color: this.state.typeIndex === index ? "#FFFFFF" : "#6C6C6C", width: "200px", height: "70px", textAlign: "center", lineHeight: "70px",
                                            fontSize: "40px", borderRadius: "5px", margin: "0 30px 30px 0"
                                        }, onClick: e => this.changeTypeIndex(index) }, item));
                                }))) : null,
                        React.createElement("div", { style: { overflow: "hidden", position: "absolute", bottom: "100px", width: "90%" } },
                            React.createElement("div", { style: { float: "left", width: "400px", height: "110px", color: "#707589", backgroundColor: "#F2F2F2", borderRadius: "5px", textAlign: "center", lineHeight: "110px", marginLeft: "20px" }, onClick: this.reset.bind(this) }, "\u91CD\u7F6E"),
                            React.createElement("div", { style: { float: "right", width: "400px", height: "110px", color: "#ffffff", backgroundColor: "#0B8BF0", borderRadius: "5px", textAlign: "center", lineHeight: "120px", marginRight: "20px" }, onClick: this.enter.bind(this) }, "\u786E\u5B9A"))) : null,
                this.state.isMask ?
                    React.createElement("div", { className: "mask", onClick: this.clickMask.bind(this) }) : null,
                React.createElement("div", { className: "index-park" },
                    this.state.type ?
                        React.createElement("div", null, this.state.parkArr.map((item, index) => {
                            return (React.createElement(react_router_dom_14.Link, { to: "/home" },
                                React.createElement("div", { className: "index-child-park", key: index, onClick: this.initPark.bind(this, item.id) },
                                    React.createElement("div", { className: "index-child-park-left" },
                                        React.createElement("img", { src: this.state.type ? "./park_m/image/a.jpg" : "./park_m/image/b.jpg", className: "park-img" })),
                                    React.createElement("div", { className: "index-child-park-right" },
                                        React.createElement("div", { className: "index-park-name" }, item.name),
                                        React.createElement("div", { className: "index-tag" },
                                            this.state.tagArr.map((item, index) => {
                                                return (index < 3 ?
                                                    React.createElement("div", { key: index, className: "index-tag-child" }, item)
                                                    : null);
                                            }),
                                            this.state.tagArr.length > 3 ? React.createElement("div", { className: "index-tag-child-add" }, "...") : null),
                                        React.createElement("div", { style: { color: "#949494", fontSize: "36px", margin: "20px 0 0 25px" } }, item.address)),
                                    React.createElement("div", { className: "index-child-park-end" },
                                        React.createElement("div", { className: "index-distance" },
                                            true ? 100 : (item.distance * 0.001).toFixed(1),
                                            "km")))));
                        }))
                        :
                            React.createElement("div", null, this.state.roomArr.map((item, index) => {
                                return (React.createElement(react_router_dom_14.Link, { to: "/home" },
                                    React.createElement("div", { className: "index-child-park", key: index, onClick: this.initPark.bind(this, item.id) },
                                        React.createElement("div", { className: "index-child-park-left" },
                                            React.createElement("img", { src: "./park_m/image/b.jpg", className: "park-img" })),
                                        React.createElement("div", { className: "index-child-park-right" },
                                            React.createElement("div", { className: "index-park-name" }, item.name),
                                            React.createElement("div", { className: "index-tag" },
                                                this.state.tagArr.map((item, index) => {
                                                    return (index < 3 ?
                                                        React.createElement("div", { key: index, className: "index-tag-child" }, item)
                                                        : null);
                                                }),
                                                this.state.tagArr.length > 3 ? React.createElement("div", { className: "index-tag-child-add" }, "...") : null),
                                            React.createElement("div", { style: { color: "#949494", fontSize: "36px", margin: "0 0 0 25px" } },
                                                React.createElement("span", { style: { fontSize: "60px", color: "red", fontWeight: "600", marginRight: "10px" } }, item.price),
                                                React.createElement("span", null, "\u4E07\u5143/\u6708(1.5\u5143/m\u00B2\u00B7\u5929)"))))));
                            })),
                    this.state.parkArr.length > 0 ?
                        React.createElement("div", { style: { width: "100%", height: "60px", textAlign: "center", fontSize: "40px", lineHeight: "60px", marginLeft: "-25px" } }, "\u5230\u5E95\u5566~") :
                        React.createElement("div", { style: { width: "100%", height: "60px", textAlign: "center", fontSize: "40px", lineHeight: "60px", marginLeft: "-25px" } }, "\u6682\u65E0\u5339\u914D\u6570\u636E")),
                React.createElement("div", { className: "index-bottom-logo" },
                    React.createElement("img", { src: "./park_m/image/bottomLogo.png", className: "index-bottom-logo-img" })),
                this.props.children,
                React.createElement(bottomBtn_1.default, { history: this.props.history })));
        }
        refreshCompanyinfo(id) {
            this.props.history.push('/parkCompany');
            parkCompany_2.default.getCompanyinfo(id);
        }
        refreshLeaseinfo(id) {
            this.props.history.push('/findLease');
            findLease_2.default.getLeaseinfoByroomid(id);
        }
        addapplyPut(data) {
            this.props.history.push('/applyPut');
            applyPut_2.default.addapplyPut(data);
        }
        addillegal(x, y) {
            this.props.history.push('/photograph');
            photograph_2.default.getXY(x, y);
        }
        addReqairs(data) {
            this.props.history.push('/repairsOnline');
            repairsOnline_2.default.getReqairstpostion(data);
        }
        refreshBooksite(id) {
            this.props.history.push('/bookSite');
            bookSite_2.default.getSiteinfo(id);
        }
        refreshParking(data) {
            this.props.history.push('/parking');
            parking_2.default.inParkingList(data);
        }
        selfLogin(style) {
            console.log("selflogin", style);
            if (style == "park") {
                LoginTest.parkLogin();
            }
            else if (style == "company") {
                LoginTest.companyLogin();
            }
            else if (style == "normal") {
                LoginTest.ptLogin();
            }
            else {
            }
        }
    }
    Index.g_pIns = null;
    class IsCompanys extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                companyArr: [],
                indexOf: 100,
            };
            IsCompanys.getCompanyArr = this.getCompanyArr.bind(this);
            this.setCompanyArr = this.setCompanyArr.bind(this);
        }
        componentDidMount() {
            console.log(444, this.state);
            sessionStorage.removeItem('iconstate');
        }
        static getCompanyArr(data) { }
        getCompanyArr(data) {
            this.setCompanyArr(data);
        }
        setCompanyArr(data) {
            console.log(99, data);
            this.setState({
                companyArr: data
            });
            console.log(888, this.state.companyArr);
        }
        companyActive(index, id, name) {
            console.log("active", index, id, name);
            this.setState({
                indexOf: index,
            });
            sessionStorage.setItem("enterprise", name);
            sessionStorage.setItem("enterpriseId", id);
            let userInfos = JSON.parse(sessionStorage.getItem("userInfos"));
            userInfos.enterprise = name;
            userInfos.enterpriseId = id;
            setTimeout(function () { Index.hideCompanyArr(); }, 1000);
        }
        render() {
            return (React.createElement("div", { className: "isCompanyBox" },
                React.createElement("ul", { className: "isCompanyBox_ul" }, this.state.companyArr.map((i, index) => {
                    return (React.createElement("li", { onClick: this.companyActive.bind(this, index, i.id, i.name), className: this.state.indexOf == index ? "companyIn" : "companyUn" }, i.name));
                }))));
        }
    }
    class LoginTest extends React.Component {
        constructor(props) {
            super(props);
            this.dataService = new dataService_43.default();
            this.globalAction = new compat_17.default();
            this.state = {
                username: "",
                password: "",
            };
            LoginTest.parkLogin = this.parkLogin.bind(this);
            LoginTest.companyLogin = this.companyLogin.bind(this);
            LoginTest.ptLogin = this.ptLogin.bind(this);
        }
        componentDidMount() {
            console.log(44333334, this.state);
        }
        doLogin() {
            console.log(this.state.username, this.state.password);
            this.dataService.login(this.state.username, this.state.password, this.hideLogin);
        }
        adminLogin() {
            console.log(this.state.username, this.state.password);
            this.dataService.login("admin", "admin", this.hideLogin);
        }
        static parkLogin() { }
        ;
        parkLogin() {
            this.dataService.login("twl01", "123456", this.hideLogin);
        }
        static companyLogin() { }
        ;
        companyLogin() {
            console.log(this.state.username, this.state.password);
            this.dataService.login("twl02", "123456", this.hideLogin);
        }
        static ptLogin() { }
        ptLogin() {
            console.log(this.state.username, this.state.password);
            this.dataService.login("test", "123456", this.hideLogin);
        }
        hideLogin() {
            setTimeout(function () { Index.hideLoginBox(); }, 1000);
        }
        usernameChange(event) {
            this.setState({
                username: event.target.value,
            });
        }
        passwordChange(event) {
            this.setState({
                password: event.target.value,
            });
        }
        render() {
            return (React.createElement("div", { className: "userBox" },
                React.createElement("ul", { className: "userBox_ul" },
                    React.createElement("li", null,
                        "\u7528\u6237\u540D\uFF1A",
                        React.createElement("input", { type: "text", value: this.state.username, onChange: this.usernameChange.bind(this) })),
                    React.createElement("li", null,
                        "\u5BC6\u7801\uFF1A",
                        React.createElement("input", { type: "text", value: this.state.password, onChange: this.passwordChange.bind(this) })),
                    React.createElement("li", null,
                        React.createElement("button", { onClick: this.doLogin.bind(this) }, "\u767B\u5F55")),
                    React.createElement("li", null,
                        "  // admin admin (\u8D85\u7EA7\u7BA1\u7406\u5458)",
                        React.createElement("button", { onClick: this.adminLogin.bind(this) }, "admin\u767B\u5F55")),
                    React.createElement("li", null,
                        "  // twl01    123456(\u56ED\u533A\u7BA1\u7406\u5458)",
                        React.createElement("button", { onClick: this.parkLogin.bind(this) }, "\u56ED\u533A\u7BA1\u7406\u5458"),
                        " "),
                    React.createElement("li", null,
                        "  // twl02    123456(\u4F01\u4E1A\u7BA1\u7406\u5458)",
                        React.createElement("button", { onClick: this.companyLogin.bind(this) }, "\u4F01\u4E1A\u7BA1\u7406\u5458"),
                        " "),
                    React.createElement("li", null,
                        "  // twl03    123456(\u666E\u901A\u7528\u6237)",
                        React.createElement("button", { onClick: this.ptLogin.bind(this) }, "\u666E\u901A\u7528\u6237"),
                        " "))));
        }
    }
    exports.default = Index;
    viewDraw = function () {
        ReactDOM.render(React.createElement(router_1.default, null), document.getElementById('viewContainer'));
    };
});
define("personalCenter (2)", ["require", "exports", "react", "react-router-dom", "antd-mobile", "dataService", "css!./styles/personalCenter.css"], function (require, exports, React, react_router_dom_15, antd_mobile_16, dataService_44) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class PersonalCenter extends React.Component {
        constructor() {
            super(...arguments);
            this.props = {
                history: this.props.history
            };
            this.state = {
                parkList: [
                    { name: "统计报表", imgUrl: "./park_m/image/statistics.png", url: "/statisticalStatement" }, { name: "房间管理", imgUrl: "./park_m/image/room.png", url: "/room" },
                    { name: "客服电话", imgUrl: "./park_m/image/service.png", url: "/serviceTel" }, { name: "租用到期", imgUrl: "./park_m/image/rent_expire.png", url: "/roomRent" }
                ],
                isSpread: true,
                userInfo: { name: "", avatar: "", phone: "", enterprise: "", roles: { role_id: "", role_name: "" } },
                pathname: "",
                messagelength: 0,
                workOrderLength: 0,
                enterprise: "kkfckfc",
                enterpriseId: "",
                companyBox: "hide",
                companyUL: [],
                companyIndexof: -1,
                company_id_in: "",
                company_name_in: "",
                company_id: "",
                company_name: "",
                inputValueRelate: "",
                companyNull: "hide",
            };
            this.dataService = new dataService_44.default();
        }
        componentDidMount() {
            console.log("enterprise", sessionStorage.getItem("enterprise"));
            let obj = {
                id: JSON.parse(sessionStorage.getItem("userInfos")).userId,
                work_type: "",
                state_type: "",
            };
            this.dataService.getMyMsgInfo(this.callBackGetMyMsgInfo.bind(this), "");
            this.dataService.getMyWork(this.callBackGetMyWork.bind(this), obj);
            let data = sessionStorage.getItem("userInfos");
            let dataObj = JSON.parse(data);
            this.setState({
                userInfo: JSON.parse(sessionStorage.getItem("userInfos")),
                pathname: this.props.history.location.pathname,
                enterprise: sessionStorage.getItem("enterprise") == "undefined" ? "暂无绑定企业" : sessionStorage.getItem("enterprise"),
                enterpriseId: sessionStorage.getItem("enterpriseId"),
            });
        }
        callBackGetMyMsgInfo(data) {
            this.setState({ messagelength: data.response.length });
        }
        callBackGetMyWork(data) {
            this.setState({ workOrderLength: data.response ? data.response.length : 0 });
        }
        callBackGetRoleType(data) {
            console.log(data);
        }
        spread() {
            this.setState({ isSpread: !this.state.isSpread });
        }
        phoneChange() {
            let reg01 = /^1[3456789]\d{9}$/;
            var phoneNew = prompt("请输入新的手机号", "");
            if (phoneNew != null && phoneNew != "") {
                if (reg01.test(phoneNew)) {
                    console.log("phoneNew", phoneNew);
                    this.dataService.modifyUserInfo(this.callBackPhoneNew.bind(this), this.state.userInfo.name, phoneNew, this.state.enterpriseId);
                }
                else {
                    antd_mobile_16.Toast.info('手机号码不正确', 2);
                }
            }
        }
        callBackPhoneNew(data) {
            let userInfos = JSON.parse(sessionStorage.getItem("userInfos"));
            userInfos.phone = data.response.phone;
            sessionStorage.setItem("userInfos", JSON.stringify(userInfos));
            this.setState({
                userInfo: JSON.parse(sessionStorage.getItem("userInfos")),
            });
        }
        showCompanyList() {
            console.log("show公司列表");
            this.setState({
                companyBox: "rollSelectCauseBox2",
            });
            this.dataService.findCompany(this.setCompanyList.bind(this), "", "");
        }
        setCompanyList(data) {
            console.log("mmmmmmmmmmmmm", data.response);
            if (data.response.length == 0) {
                this.setState({
                    companyNull: "show",
                    companyUL: data.response,
                });
            }
            else {
                this.setState({
                    companyNull: "hide",
                    companyUL: data.response
                });
            }
        }
        hideCompanyBox() {
            this.setState({
                companyBox: "hide",
            }, () => {
                console.log("hide", this.state.company_id, this.state.company_name);
            });
        }
        getCompanyBox() {
            if (this.state.company_id_in == '') {
                this.setState({
                    companyBox: "hide",
                    company_id: this.state.enterpriseId,
                    company_name: this.state.enterprise,
                });
            }
            else {
                this.setState({
                    companyBox: "hide",
                    company_id: this.state.company_id_in,
                    company_name: this.state.company_name_in,
                }, () => {
                    this.dataService.modifyUserInfo(this.callBackModifyCompanyName.bind(this), this.state.userInfo.name, this.state.userInfo.phone, this.state.company_id);
                });
            }
        }
        callBackModifyCompanyName(data) {
            antd_mobile_16.Toast.info(data.err_msg, 2);
            this.setState({
                enterprise: data.response.name,
                company_id: data.response.company_id
            });
            sessionStorage.setItem("enterprise", data.response.name);
            sessionStorage.setItem("enterpriseId", data.response.company_id);
            let userInfos = JSON.parse(sessionStorage.getItem("userInfos"));
            userInfos.enterprise = data.response.name;
            userInfos.enterpriseId = data.response.company_id;
            userInfos.enterprises[0].name = data.response.name;
            userInfos.enterprises[0].id = data.response.company_id;
            sessionStorage.setItem("userInfos", JSON.stringify(userInfos));
        }
        inCompanyeList(i, id, name) {
            this.setState({
                companyIndexof: i,
                company_id_in: id,
                company_name_in: name,
            }, () => {
                console.log("选中的公司", this.state.company_id_in, this.state.company_name_in);
            });
        }
        foucusRelate() {
            if (this.state.inputValueRelate == " ") {
                this.setState({ inputValueRelate: "" });
            }
        }
        blurRelate(event) {
            if (this.state.inputValueRelate == "") {
                this.setState({ inputValueRelate: " " });
            }
        }
        changeRelate(event) {
            this.setState({ inputValueRelate: event.target.value });
        }
        queryKeyDownHandlerRelate(e) {
            switch (e.keyCode) {
                case 13:
                    this.searchCompany();
                    break;
            }
        }
        searchCompany() {
            if (this.state.inputValueRelate == "请输入企业名称") {
                this.setState({ inputValueRelate: "" });
            }
            ;
            console.log("searchBtn", this.state.inputValueRelate);
            this.dataService.findCompany(this.setCompanyList.bind(this), "", this.state.inputValueRelate);
        }
        onErrorHeadimageurl() {
            let userInfo = JSON.parse(sessionStorage.getItem("userInfos"));
            this.setState({
                userInfo: {
                    name: userInfo.name,
                    avatar: "./park_m/image/noImg.png",
                    phone: userInfo.phone,
                    enterprise: "",
                    roles: {
                        role_id: userInfo.roles.role_id,
                        role_name: userInfo.roles.role_name,
                    }
                },
            });
        }
        render() {
            return (React.createElement("div", { className: "personal-center" },
                React.createElement("div", { className: "personal-center-top" },
                    React.createElement("div", { className: "personal-center-info" },
                        React.createElement("div", { className: "personal-center-tx" },
                            React.createElement("img", { src: this.state.userInfo.avatar == null ? "./park_m/image/noImg.png" : this.state.userInfo.avatar, onError: this.onErrorHeadimageurl.bind(this), className: "personal-center-tx-img" })),
                        React.createElement("div", { style: { float: "left", color: "#FFFFFF", fontSize: "42px", margin: "45px 0 0 36px" } },
                            React.createElement("div", null, this.state.userInfo.name)),
                        React.createElement(react_router_dom_15.Link, { to: { pathname: "/modificationAuthentication", state: { name: this.state.userInfo.name } } },
                            React.createElement("div", { className: "personal-center-right" },
                                React.createElement("img", { src: "./park_m/image/w-right.png" }))))),
                this.state.pathname === "/personalCenter" ?
                    React.createElement("div", null,
                        React.createElement("div", { className: "personal-center-tag", style: { margin: "0 50px 0 50px", fontWeight: "600" } },
                            "\u6211\u7684\u6536\u85CF ",
                            React.createElement("img", { src: "./park_m/image/right.png", style: { marginTop: "40px", float: "right" } })),
                        React.createElement("div", { className: "personal-center-tag", style: { margin: "0 50px 0 50px", fontWeight: "600" } },
                            "\u6D4F\u89C8\u8BB0\u5F55 ",
                            React.createElement("img", { src: "./park_m/image/right.png", style: { marginTop: "40px", float: "right" } })),
                        React.createElement("div", { className: "personal-center-tag", style: { margin: "0 50px 0 50px", fontWeight: "600" } },
                            "\u5BA2\u670D\u7535\u8BDD ",
                            React.createElement("span", { style: { float: "right" } }, "400-808-3066"))) : null,
                this.state.pathname !== "/personalCenter" ?
                    React.createElement("div", null,
                        React.createElement("div", { className: "personal-center-tag" },
                            React.createElement("span", { style: { margin: "0 50px 0 50px" } }, "\u624B\u673A\u53F7\u7801"),
                            React.createElement("span", null, this.state.userInfo.phone),
                            this.state.enterprise && this.state.enterprise !== "请先关联企业" ?
                                React.createElement("span", { style: { float: "right", marginRight: "50px", color: "#0B8BF0" }, onClick: this.phoneChange.bind(this) }, "\u4FEE\u6539") : null),
                        React.createElement("div", { className: "personal-center-tag" },
                            React.createElement("span", { style: { margin: "0 50px 0 50px" } }, "\u5173\u8054\u4F01\u4E1A"),
                            React.createElement("span", null, this.state.enterprise),
                            this.state.userInfo.roles.role_name !== "园区管理员" && this.state.userInfo.roles.role_name !== "企业管理员" ?
                                React.createElement("span", { style: { float: "right", marginRight: "50px", color: "#0B8BF0" }, onClick: this.showCompanyList.bind(this) }, "\u4FEE\u6539") : null),
                        React.createElement("div", { className: "personal-center-tag" },
                            React.createElement("span", { style: { margin: "0 50px 0 50px" } }, "\u5BA2\u670D\u7535\u8BDD"),
                            React.createElement("span", null, "0773-123456")),
                        React.createElement("div", { className: "personal-center-my" },
                            React.createElement(react_router_dom_15.Link, { to: this.state.userInfo.roles.role_name === "园区管理员" ? "/parkWorkOrder" : "/workOrder" },
                                React.createElement("div", { className: "personal-center-my-left" },
                                    React.createElement("div", { style: { fontSize: "40px", marginTop: "30px", color: "#333333" } }, this.state.workOrderLength),
                                    React.createElement("div", { style: { fontSize: "40px", marginTop: "5px", color: "#6C6C6C" } }, "\u6211\u7684\u5DE5\u5355"))),
                            React.createElement("div", { className: "personal-center-my-middle" }),
                            React.createElement(react_router_dom_15.Link, { to: "/message" },
                                React.createElement("div", { className: "personal-center-my-right" },
                                    React.createElement("div", { style: { fontSize: "40px", marginTop: "30px", color: "#333333" } }, this.state.messagelength),
                                    React.createElement("div", { style: { fontSize: "40px", marginTop: "5px", color: "#6C6C6C" } }, "\u6211\u7684\u6D88\u606F")))))
                    : null,
                this.state.userInfo.roles.role_name === "企业管理员" && this.state.pathname !== "/personalCenter" ?
                    React.createElement("div", { className: "personal-center-enterprise" },
                        React.createElement(react_router_dom_15.Link, { to: "/enterpriseInformation" },
                            React.createElement("div", { className: "personal-center-enterprise-child" },
                                React.createElement("img", { src: "./park_m/image/enterprise.png", width: "70px", height: "70px", style: { marginBottom: "10px" } }),
                                React.createElement("span", { style: { fontSize: "40px", color: "#333333", marginLeft: "30px" } }, "\u4F01\u4E1A\u4FE1\u606F\u7BA1\u7406"),
                                React.createElement("div", { style: { float: "right", height: "100%", width: "120px", textAlign: "center" } },
                                    React.createElement("img", { src: "./park_m/image/right.png" })))),
                        React.createElement(react_router_dom_15.Link, { to: "/rentRoom" },
                            React.createElement("div", { className: "personal-center-enterprise-child" },
                                React.createElement("img", { src: "./park_m/image/let.png", width: "70px", height: "70px", style: { marginBottom: "10px" } }),
                                React.createElement("span", { style: { fontSize: "40px", color: "#333333", marginLeft: "30px" } }, "\u79DF\u7528\u623F\u95F4\u7BA1\u7406"),
                                React.createElement("div", { style: { float: "right", height: "100%", width: "120px", textAlign: "center" } },
                                    React.createElement("img", { src: "./park_m/image/right.png" }))))) : null,
                this.state.userInfo.roles.role_name === "园区管理员" && this.state.pathname !== "/personalCenter" ?
                    React.createElement("div", { className: "personal-center-park" },
                        React.createElement("div", { className: "personal-center-enterprise-child", onClick: this.spread.bind(this) },
                            React.createElement("img", { src: "./park_m/image/park.png", width: "60px", height: "60px", style: { marginBottom: "10px" } }),
                            React.createElement("span", { style: { fontSize: "40px", color: "#333333", marginLeft: "30px" } }, "\u56ED\u533A\u7BA1\u7406"),
                            React.createElement("div", { style: { float: "right", height: "100%", width: "120px", textAlign: "center" } },
                                React.createElement("img", { src: "./park_m/image/right.png", className: this.state.isSpread ? "personal-center-bottom-img" : "" }))),
                        this.state.isSpread ?
                            React.createElement("div", { style: { backgroundColor: "#ffffff", overflow: "hidden", paddingTop: "30px" } }, this.state.parkList.map((item, index) => {
                                return (React.createElement(react_router_dom_15.Link, { to: item.url },
                                    React.createElement("div", { key: index, className: "personal-center-park-child" },
                                        React.createElement("img", { src: item.imgUrl, width: "110px", height: "110px" }),
                                        React.createElement("div", { style: { marginTop: "10px" } }, item.name))));
                            })) : null) : null,
                React.createElement("div", { className: this.state.companyBox },
                    React.createElement("div", { className: "searchBox" },
                        React.createElement("span", { className: "searchBox-text" },
                            React.createElement("i", { className: "iconfont", style: { "fontSize": "2.3rem" } }, "\uE810"),
                            React.createElement("input", { className: "companySearch", type: "search", placeholder: "\u8BF7\u8F93\u5165\u4F01\u4E1A\u540D\u79F0", value: this.state.inputValueRelate, onFocus: this.foucusRelate.bind(this), onBlur: this.blurRelate.bind(this), onChange: this.changeRelate.bind(this), onKeyDown: this.queryKeyDownHandlerRelate.bind(this) }))),
                    React.createElement("ul", { className: "rollSelectCauseULcss2" },
                        React.createElement("p", { className: this.state.companyNull, style: { "text-align": "center" } }, "\u6CA1\u6709\u7B26\u5408\u641C\u7D22\u6761\u4EF6\u7684\u7ED3\u679C\u00B7\u00B7\u00B7"),
                        this.state.companyUL.map((i, index) => {
                            return (React.createElement("li", { className: this.state.companyIndexof == index ? "rollSelectCauseli-active" : "rollSelectCauseli", onClick: this.inCompanyeList.bind(this, index, i.id, i.name) }, i.name));
                        })),
                    React.createElement("div", { className: "rollSelectCuasedBtn" },
                        React.createElement("span", { className: "rollSelectCancel", onClick: this.hideCompanyBox.bind(this) }, "\u53D6\u6D88"),
                        React.createElement("span", { className: "rollSelectConfirm", onClick: this.getCompanyBox.bind(this) }, "\u786E\u8BA4")))));
        }
    }
    exports.default = PersonalCenter;
});
define("personalCenter (3)", ["require", "exports", "react", "react-router-dom", "antd-mobile", "dataService", "css!./styles/personalCenter.css"], function (require, exports, React, react_router_dom_16, antd_mobile_17, dataService_45) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class PersonalCenter extends React.Component {
        constructor() {
            super(...arguments);
            this.props = {
                history: this.props.history
            };
            this.state = {
                parkList: [
                    { name: "统计报表", imgUrl: "./park_m/image/statistics.png", url: "/statisticalStatement" }, { name: "房间管理", imgUrl: "./park_m/image/room.png", url: "/room" },
                    { name: "客服电话", imgUrl: "./park_m/image/service.png", url: "/serviceTel" }, { name: "租用到期", imgUrl: "./park_m/image/rent_expire.png", url: "/roomRent" },
                    { name: "租用到期", imgUrl: "./park_m/image/rent_expire.png", url: "/roomRent" }
                ],
                isSpread: true,
                userInfo: { name: "", avatar: "", phone: "", enterprise: "", roles: { role_id: "", role_name: "" } },
                pathname: "",
                messagelength: 0,
                workOrderLength: 0,
                enterprise: "kkfckfc",
                enterpriseId: "",
                companyBox: "hide",
                companyUL: [],
                companyIndexof: -1,
                company_id_in: "",
                company_name_in: "",
                company_id: "",
                company_name: "",
                inputValueRelate: "",
                companyNull: "hide",
            };
            this.dataService = new dataService_45.default();
        }
        componentDidMount() {
            console.log("enterprise", sessionStorage.getItem("enterprise"));
            let obj = {
                id: JSON.parse(sessionStorage.getItem("userInfos")).userId,
                work_type: "",
                state_type: "",
            };
            this.dataService.getMyMsgInfo(this.callBackGetMyMsgInfo.bind(this), "");
            this.dataService.getMyWork(this.callBackGetMyWork.bind(this), obj);
            let data = sessionStorage.getItem("userInfos");
            let dataObj = JSON.parse(data);
            this.setState({
                userInfo: JSON.parse(sessionStorage.getItem("userInfos")),
                pathname: this.props.history.location.pathname,
                enterprise: sessionStorage.getItem("enterprise") == "undefined" ? "暂无绑定企业" : sessionStorage.getItem("enterprise"),
                enterpriseId: sessionStorage.getItem("enterpriseId"),
            });
        }
        callBackGetMyMsgInfo(data) {
            this.setState({ messagelength: data.response.length });
        }
        callBackGetMyWork(data) {
            this.setState({ workOrderLength: data.response ? data.response.length : 0 });
        }
        callBackGetRoleType(data) {
            console.log(data);
        }
        spread() {
            this.setState({ isSpread: !this.state.isSpread });
        }
        phoneChange() {
            let reg01 = /^1[3456789]\d{9}$/;
            var phoneNew = prompt("请输入新的手机号", "");
            if (phoneNew != null && phoneNew != "") {
                if (reg01.test(phoneNew)) {
                    console.log("phoneNew", phoneNew);
                    this.dataService.modifyUserInfo(this.callBackPhoneNew.bind(this), this.state.userInfo.name, phoneNew, this.state.enterpriseId);
                }
                else {
                    antd_mobile_17.Toast.info('手机号码不正确', 2);
                }
            }
        }
        callBackPhoneNew(data) {
            let userInfos = JSON.parse(sessionStorage.getItem("userInfos"));
            userInfos.phone = data.response.phone;
            sessionStorage.setItem("userInfos", JSON.stringify(userInfos));
            this.setState({
                userInfo: JSON.parse(sessionStorage.getItem("userInfos")),
            });
        }
        showCompanyList() {
            console.log("show公司列表");
            this.setState({
                companyBox: "rollSelectCauseBox2",
            });
            this.dataService.findCompany(this.setCompanyList.bind(this), "", "");
        }
        setCompanyList(data) {
            console.log("mmmmmmmmmmmmm", data.response);
            if (data.response.length == 0) {
                this.setState({
                    companyNull: "show",
                    companyUL: data.response,
                });
            }
            else {
                this.setState({
                    companyNull: "hide",
                    companyUL: data.response
                });
            }
        }
        hideCompanyBox() {
            this.setState({
                companyBox: "hide",
            }, () => {
                console.log("hide", this.state.company_id, this.state.company_name);
            });
        }
        getCompanyBox() {
            if (this.state.company_id_in == '') {
                this.setState({
                    companyBox: "hide",
                    company_id: this.state.enterpriseId,
                    company_name: this.state.enterprise,
                });
            }
            else {
                this.setState({
                    companyBox: "hide",
                    company_id: this.state.company_id_in,
                    company_name: this.state.company_name_in,
                }, () => {
                    this.dataService.modifyUserInfo(this.callBackModifyCompanyName.bind(this), this.state.userInfo.name, this.state.userInfo.phone, this.state.company_id);
                });
            }
        }
        callBackModifyCompanyName(data) {
            antd_mobile_17.Toast.info(data.err_msg, 2);
            this.setState({
                enterprise: data.response.name,
                company_id: data.response.company_id
            });
            sessionStorage.setItem("enterprise", data.response.name);
            sessionStorage.setItem("enterpriseId", data.response.company_id);
            let userInfos = JSON.parse(sessionStorage.getItem("userInfos"));
            userInfos.enterprise = data.response.name;
            userInfos.enterpriseId = data.response.company_id;
            userInfos.enterprises[0].name = data.response.name;
            userInfos.enterprises[0].id = data.response.company_id;
            sessionStorage.setItem("userInfos", JSON.stringify(userInfos));
        }
        inCompanyeList(i, id, name) {
            this.setState({
                companyIndexof: i,
                company_id_in: id,
                company_name_in: name,
            }, () => {
                console.log("选中的公司", this.state.company_id_in, this.state.company_name_in);
            });
        }
        foucusRelate() {
            if (this.state.inputValueRelate == " ") {
                this.setState({ inputValueRelate: "" });
            }
        }
        blurRelate(event) {
            if (this.state.inputValueRelate == "") {
                this.setState({ inputValueRelate: " " });
            }
        }
        changeRelate(event) {
            this.setState({ inputValueRelate: event.target.value });
        }
        queryKeyDownHandlerRelate(e) {
            switch (e.keyCode) {
                case 13:
                    this.searchCompany();
                    break;
            }
        }
        searchCompany() {
            if (this.state.inputValueRelate == "请输入企业名称") {
                this.setState({ inputValueRelate: "" });
            }
            ;
            console.log("searchBtn", this.state.inputValueRelate);
            this.dataService.findCompany(this.setCompanyList.bind(this), "", this.state.inputValueRelate);
        }
        onErrorHeadimageurl() {
            let userInfo = JSON.parse(sessionStorage.getItem("userInfos"));
            this.setState({
                userInfo: {
                    name: userInfo.name,
                    avatar: "./park_m/image/noImg.png",
                    phone: userInfo.phone,
                    enterprise: "",
                    roles: {
                        role_id: userInfo.roles.role_id,
                        role_name: userInfo.roles.role_name,
                    }
                },
            });
        }
        render() {
            return (React.createElement("div", { className: "personal-center" },
                React.createElement("div", { className: "personal-center-top" },
                    React.createElement("div", { className: "personal-center-info" },
                        React.createElement("div", { className: "personal-center-tx" },
                            React.createElement("img", { src: this.state.userInfo.avatar == null ? "./park_m/image/noImg.png" : this.state.userInfo.avatar, onError: this.onErrorHeadimageurl.bind(this), className: "personal-center-tx-img" })),
                        React.createElement("div", { style: { float: "left", color: "#FFFFFF", fontSize: "42px", margin: "45px 0 0 36px" } },
                            React.createElement("div", null, this.state.userInfo.name)),
                        React.createElement(react_router_dom_16.Link, { to: { pathname: "/modificationAuthentication", state: { name: this.state.userInfo.name } } },
                            React.createElement("div", { className: "personal-center-right" },
                                React.createElement("img", { src: "./park_m/image/w-right.png" }))))),
                this.state.pathname === "/personalCenter" ?
                    React.createElement("div", null,
                        React.createElement("div", { className: "personal-center-tag", style: { margin: "0 50px 0 50px", fontWeight: "600" } },
                            "\u6211\u7684\u6536\u85CF ",
                            React.createElement("img", { src: "./park_m/image/right.png", style: { marginTop: "40px", float: "right" } })),
                        React.createElement("div", { className: "personal-center-tag", style: { margin: "0 50px 0 50px", fontWeight: "600" } },
                            "\u6D4F\u89C8\u8BB0\u5F55 ",
                            React.createElement("img", { src: "./park_m/image/right.png", style: { marginTop: "40px", float: "right" } })),
                        React.createElement("div", { className: "personal-center-tag", style: { margin: "0 50px 0 50px", fontWeight: "600" } },
                            "\u5BA2\u670D\u7535\u8BDD ",
                            React.createElement("span", { style: { float: "right" } }, "400-808-3066"))) : null,
                this.state.pathname !== "/personalCenter" ?
                    React.createElement("div", null,
                        React.createElement("div", { className: "personal-center-tag" },
                            React.createElement("span", { style: { margin: "0 50px 0 50px" } }, "\u624B\u673A\u53F7\u7801"),
                            React.createElement("span", null, this.state.userInfo.phone),
                            this.state.enterprise && this.state.enterprise !== "请先关联企业" ?
                                React.createElement("span", { style: { float: "right", marginRight: "50px", color: "#0B8BF0" }, onClick: this.phoneChange.bind(this) }, "\u4FEE\u6539") : null),
                        React.createElement("div", { className: "personal-center-tag" },
                            React.createElement("span", { style: { margin: "0 50px 0 50px" } }, "\u5173\u8054\u4F01\u4E1A"),
                            React.createElement("span", null, this.state.enterprise),
                            this.state.userInfo.roles.role_name !== "园区管理员" && this.state.userInfo.roles.role_name !== "企业管理员" ?
                                React.createElement("span", { style: { float: "right", marginRight: "50px", color: "#0B8BF0" }, onClick: this.showCompanyList.bind(this) }, "\u4FEE\u6539") : null),
                        React.createElement("div", { className: "personal-center-my" },
                            React.createElement(react_router_dom_16.Link, { to: this.state.userInfo.roles.role_name === "园区管理员" ? "/parkWorkOrder" : "/workOrder" },
                                React.createElement("div", { className: "personal-center-my-left" },
                                    React.createElement("div", { style: { fontSize: "40px", marginTop: "30px", color: "#333333" } }, this.state.workOrderLength),
                                    React.createElement("div", { style: { fontSize: "40px", marginTop: "5px", color: "#6C6C6C" } }, "\u6211\u7684\u5DE5\u5355"))),
                            React.createElement("div", { className: "personal-center-my-middle" }),
                            React.createElement(react_router_dom_16.Link, { to: "/message" },
                                React.createElement("div", { className: "personal-center-my-right" },
                                    React.createElement("div", { style: { fontSize: "40px", marginTop: "30px", color: "#333333" } }, this.state.messagelength),
                                    React.createElement("div", { style: { fontSize: "40px", marginTop: "5px", color: "#6C6C6C" } }, "\u6211\u7684\u6D88\u606F")))))
                    : null,
                this.state.userInfo.roles.role_name === "企业管理员" && this.state.pathname !== "/personalCenter" ?
                    React.createElement("div", { className: "personal-center-enterprise" },
                        React.createElement(react_router_dom_16.Link, { to: "/enterpriseInformation" },
                            React.createElement("div", { className: "personal-center-enterprise-child" },
                                React.createElement("img", { src: "./park_m/image/enterprise.png", width: "70px", height: "70px", style: { marginBottom: "10px" } }),
                                React.createElement("span", { style: { fontSize: "40px", color: "#333333", marginLeft: "30px" } }, "\u4F01\u4E1A\u4FE1\u606F\u7BA1\u7406"),
                                React.createElement("div", { style: { float: "right", height: "100%", width: "120px", textAlign: "center" } },
                                    React.createElement("img", { src: "./park_m/image/right.png" })))),
                        React.createElement(react_router_dom_16.Link, { to: "/rentRoom" },
                            React.createElement("div", { className: "personal-center-enterprise-child" },
                                React.createElement("img", { src: "./park_m/image/let.png", width: "70px", height: "70px", style: { marginBottom: "10px" } }),
                                React.createElement("span", { style: { fontSize: "40px", color: "#333333", marginLeft: "30px" } }, "\u79DF\u7528\u623F\u95F4\u7BA1\u7406"),
                                React.createElement("div", { style: { float: "right", height: "100%", width: "120px", textAlign: "center" } },
                                    React.createElement("img", { src: "./park_m/image/right.png" }))))) : null,
                this.state.userInfo.roles.role_name === "园区管理员" && this.state.pathname !== "/personalCenter" ?
                    React.createElement("div", { className: "personal-center-park" },
                        React.createElement("div", { className: "personal-center-enterprise-child", onClick: this.spread.bind(this) },
                            React.createElement("img", { src: "./park_m/image/park.png", width: "60px", height: "60px", style: { marginBottom: "10px" } }),
                            React.createElement("span", { style: { fontSize: "40px", color: "#333333", marginLeft: "30px" } }, "\u56ED\u533A\u7BA1\u7406"),
                            React.createElement("div", { style: { float: "right", height: "100%", width: "120px", textAlign: "center" } },
                                React.createElement("img", { src: "./park_m/image/right.png", className: this.state.isSpread ? "personal-center-bottom-img" : "" }))),
                        this.state.isSpread ?
                            React.createElement("div", { style: { backgroundColor: "#ffffff", overflow: "hidden", paddingTop: "30px" } }, this.state.parkList.map((item, index) => {
                                return (React.createElement(react_router_dom_16.Link, { to: item.url },
                                    React.createElement("div", { key: index, className: "personal-center-park-child" },
                                        React.createElement("img", { src: item.imgUrl, width: "110px", height: "110px" }),
                                        React.createElement("div", { style: { marginTop: "10px" } }, item.name))));
                            })) : null) : null,
                React.createElement("div", { className: this.state.companyBox },
                    React.createElement("div", { className: "searchBox" },
                        React.createElement("span", { className: "searchBox-text" },
                            React.createElement("i", { className: "iconfont", style: { "fontSize": "2.3rem" } }, "\uE810"),
                            React.createElement("input", { className: "companySearch", type: "search", placeholder: "\u8BF7\u8F93\u5165\u4F01\u4E1A\u540D\u79F0", value: this.state.inputValueRelate, onFocus: this.foucusRelate.bind(this), onBlur: this.blurRelate.bind(this), onChange: this.changeRelate.bind(this), onKeyDown: this.queryKeyDownHandlerRelate.bind(this) }))),
                    React.createElement("ul", { className: "rollSelectCauseULcss2" },
                        React.createElement("p", { className: this.state.companyNull, style: { "text-align": "center" } }, "\u6CA1\u6709\u7B26\u5408\u641C\u7D22\u6761\u4EF6\u7684\u7ED3\u679C\u00B7\u00B7\u00B7"),
                        this.state.companyUL.map((i, index) => {
                            return (React.createElement("li", { className: this.state.companyIndexof == index ? "rollSelectCauseli-active" : "rollSelectCauseli", onClick: this.inCompanyeList.bind(this, index, i.id, i.name) }, i.name));
                        })),
                    React.createElement("div", { className: "rollSelectCuasedBtn" },
                        React.createElement("span", { className: "rollSelectCancel", onClick: this.hideCompanyBox.bind(this) }, "\u53D6\u6D88"),
                        React.createElement("span", { className: "rollSelectConfirm", onClick: this.getCompanyBox.bind(this) }, "\u786E\u8BA4")))));
        }
    }
    exports.default = PersonalCenter;
});
