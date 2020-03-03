define("bottomBtn", ["require", "exports", "react", "react-router-dom", "css!./styles/view.css"], function (require, exports, React, RouterDOM) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class BottomBtn extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                iconBottom1: "iconBox-bottomIn",
                iconBottom2: "iconBox-bottom",
                iconBottom3: "iconBox-bottom",
                iconBottom4: "iconBox-bottom"
            };
            BottomBtn.toggleIcon = this.toggleIcon.bind(this);
        }
        static toggleIcon(a) { }
        toggleIcon(data) {
            console.log(data);
            if (data == 1) {
                this.setState({
                    iconBottom1: "iconBox-bottomIn",
                    iconBottom2: "iconBox-bottom",
                    iconBottom3: "iconBox-bottom",
                    iconBottom4: "iconBox-bottom",
                });
            }
            else if (data == 2) {
                this.setState({
                    iconBottom1: "iconBox-bottom",
                    iconBottom2: "iconBox-bottomIn",
                    iconBottom3: "iconBox-bottom",
                    iconBottom4: "iconBox-bottom",
                });
            }
            else if (data == 3) {
                this.setState({
                    iconBottom1: "iconBox-bottom",
                    iconBottom2: "iconBox-bottom",
                    iconBottom3: "iconBox-bottomIn",
                    iconBottom4: "iconBox-bottom",
                });
            }
            else if (data == 4) {
                this.setState({
                    iconBottom1: "iconBox-bottom",
                    iconBottom2: "iconBox-bottom",
                    iconBottom3: "iconBox-bottom",
                    iconBottom4: "iconBox-bottomIn",
                });
            }
        }
        render() {
            return (React.createElement("div", { className: "bottomView" },
                React.createElement(RouterDOM.Link, { to: "/" },
                    React.createElement("div", { className: this.state.iconBottom1 },
                        React.createElement("span", { className: "iconfont", style: { "fontSize": "5rem" } }, "\uE7FA"),
                        React.createElement("p", null, "3D\u6C99\u76D8"))),
                React.createElement(RouterDOM.Link, { to: "/infoArea" },
                    React.createElement("div", { className: this.state.iconBottom2 },
                        React.createElement("span", { className: "iconfont iconActice", style: { "fontSize": "5rem" } }, " \uE7FA "),
                        React.createElement("p", null, "\u5FAE\u5708"))),
                React.createElement(RouterDOM.Link, { to: "/message" },
                    React.createElement("div", { className: this.state.iconBottom3 },
                        React.createElement("span", { className: "iconfont", style: { "fontSize": "5rem" } }, "\uE7FA"),
                        React.createElement("p", null, "\u8D44\u8BAF"))),
                React.createElement(RouterDOM.Link, { to: "/aboutMe" },
                    React.createElement("div", { className: this.state.iconBottom4 },
                        React.createElement("span", { className: "iconfont", style: { "fontSize": "5rem" } }, "\uE7FA"),
                        React.createElement("p", null, "\u6211\u7684")))));
        }
        ;
    }
    exports.default = BottomBtn;
});
define("aboutMe", ["require", "exports", "react", "bottomBtn", "css!./styles/view.css"], function (require, exports, React, bottomBtn_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class AboutMe extends React.Component {
        constructor(props) {
            super(props);
            this.state = {};
        }
        componentDidMount() {
            bottomBtn_1.default.toggleIcon(4);
        }
        render() {
            return (React.createElement("div", null,
                React.createElement("div", { className: "aboutMebox" }, "AboutMeAboutMe\uFFFD\u3F6D\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u03E2\uFFFD\u01BC\uFFFD\uFFFD\uFFFD\uFFFD\u07B9\uFFFD\u02FE"),
                React.createElement(bottomBtn_1.default, null)));
        }
    }
    exports.default = AboutMe;
});
define("compat", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class GlobalAction {
        switchRoom(pName) {
            console.log("SwitchLayer", pName);
        }
        switchMark(pName) {
            console.log("switchMark", pName);
        }
    }
    exports.default = GlobalAction;
});
define("home", ["require", "exports", "react", "bottomBtn", "compat", "css!./styles/view.css"], function (require, exports, React, bottomBtn_2, compat_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Home extends React.Component {
        constructor(props) {
            super(props);
            this.state = {};
        }
        componentDidMount() {
            bottomBtn_2.default.toggleIcon(1);
        }
        render() {
            return (React.createElement("div", null,
                React.createElement(TopBtn, null),
                React.createElement(bottomBtn_2.default, null)));
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
            };
            this.globalAction = new compat_1.default();
        }
        moreIcon(a) {
            console.log('toggleIconbox', a);
            this.setState({
                topView: "topView-big",
                topIcon1: "iconBox-big",
                topIcon2: "iconBox-big",
                topIcon3: "iconBox-big",
                topIcon4: "iconBox-big",
                topIcon5: "iconBox-big",
                moreIcon: "hide",
                topClose: "topClose",
            });
        }
        topClose(a) {
            console.log('topClose', a);
            this.setState({
                topView: "topView",
                topIcon1: "iconBox",
                topIcon2: "iconBox",
                topIcon3: "iconBox",
                topIcon4: "iconBox",
                topIcon5: "iconBox",
                moreIcon: "iconBox",
                topClose: "hide",
            });
        }
        switchMark(a) {
            this.globalAction.switchMark(a);
            if (a == "交通") {
                if (this.state.topClose == "topClose") {
                    this.setState({
                        topIcon1: "iconBox-bigIn",
                        topIcon2: "iconBox-big",
                        topIcon3: "iconBox-big",
                        topIcon4: "iconBox-big",
                        topIcon5: "iconBox-big",
                        topIcon: "iconBox-big",
                    });
                }
                else {
                    this.setState({
                        topIcon1: "iconBoxIn",
                        topIcon2: "iconBox",
                        topIcon3: "iconBox",
                        topIcon4: "iconBox",
                        topIcon5: "iconBox",
                        topIcon: "iconBox",
                    });
                }
            }
            else if (a == "商圈") {
                this.setState({
                    topIcon1: "iconBox",
                    topIcon2: "iconBoxIn",
                    topIcon3: "iconBox",
                    topIcon4: "iconBox",
                    topIcon5: "iconBox",
                    topIcon: "iconBox",
                });
            }
            else if (a == "公交车") {
                this.setState({
                    topIcon1: "iconBox-big",
                    topIcon2: "iconBox-big",
                    topIcon3: "iconBox-bigIn",
                    topIcon4: "iconBox-big",
                    topIcon5: "iconBox-big",
                    topIcon: "iconBox",
                });
            }
            else if (a == "全景") {
                this.setState({
                    topIcon1: "iconBox-big",
                    topIcon2: "iconBox-big",
                    topIcon3: "iconBox-big",
                    topIcon4: "iconBox-bigIn",
                    topIcon5: "iconBox-big",
                    topIcon: "iconBox",
                });
            }
            else if (a == "停车场") {
                this.setState({
                    topIcon1: "iconBox-big",
                    topIcon2: "iconBox-big",
                    topIcon3: "iconBox-big",
                    topIcon4: "iconBox-big",
                    topIcon5: "iconBox-bigIn",
                    topIcon: "iconBox",
                });
            }
        }
        render() {
            return (React.createElement("div", null,
                React.createElement("div", { className: this.state.topView },
                    React.createElement("div", { className: this.state.topIcon1, onClick: this.switchMark.bind(this, "交通") },
                        React.createElement("span", { className: "iconfont", style: { "fontSize": "5rem" } }, "\uE7FA"),
                        React.createElement("p", null, "\u4EA4\u901A")),
                    React.createElement("div", { className: this.state.topIcon2, onClick: this.switchMark.bind(this, "商圈") },
                        React.createElement("span", { className: "iconfont", style: { "fontSize": "5rem" } }, "\uE7FA"),
                        React.createElement("p", null, "\u5546\u5708")),
                    React.createElement("div", { className: this.state.moreIcon, onClick: this.moreIcon.bind(this, 10) },
                        React.createElement("span", { className: "iconfont", style: { "fontSize": "5rem" } }, "\uE7FA"),
                        React.createElement("p", null, "\u66F4\u591A")),
                    React.createElement("div", { className: this.state.topIcon3, onClick: this.switchMark.bind(this, "公交车") },
                        React.createElement("span", { className: "iconfont", style: { "fontSize": "5rem" } }, "\uE7FA"),
                        React.createElement("p", null, "\u516C\u4EA4\u8F66")),
                    React.createElement("div", { className: this.state.topIcon4, onClick: this.switchMark.bind(this, "全景") },
                        React.createElement("span", { className: "iconfont", style: { "fontSize": "5rem" } }, "\uE7FA"),
                        React.createElement("p", null, "\u5168\u666F")),
                    React.createElement("div", { className: this.state.topIcon5, onClick: this.switchMark.bind(this, "停车场") },
                        React.createElement("span", { className: "iconfont", style: { "fontSize": "5rem" } }, "\uE7FA"),
                        React.createElement("p", null, "\u505C\u8F66\u573A")),
                    React.createElement("div", { className: this.state.topClose, onClick: this.topClose.bind(this, 10) },
                        React.createElement("span", { className: "iconfont", style: { "fontSize": "3rem" } }, "\uE7FA"))),
                React.createElement("div", { className: "playIconbox" },
                    React.createElement("div", { className: this.state.playIcon },
                        React.createElement("span", { className: "iconfont", style: { "fontSize": "5rem" } }, "\uE7FA"),
                        React.createElement("p", null, "\u8BB2\u89E3")))));
        }
    }
    class FoldBtn extends React.Component {
        constructor(props) {
            super(props);
            this.state = {};
        }
        render() {
            return (React.createElement("div", null, "foldBtn"));
        }
    }
    exports.default = Home;
});
define("parkCompany", ["require", "exports", "react"], function (require, exports, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ParkCompany extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (React.createElement("div", null, "ParkCompany"));
        }
    }
    exports.default = ParkCompany;
});
define("photograph", ["require", "exports", "react"], function (require, exports, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Photograph extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (React.createElement("div", null, "Photograph"));
        }
    }
    exports.default = Photograph;
});
define("infoArea", ["require", "exports", "react", "bottomBtn"], function (require, exports, React, bottomBtn_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class InfoArea extends React.Component {
        constructor(props) {
            super(props);
            this.state = {};
        }
        componentDidMount() {
            bottomBtn_3.default.toggleIcon(2);
        }
        render() {
            return (React.createElement("div", null,
                React.createElement("div", { className: "infoAreabox" }, "InfoArea"),
                React.createElement(bottomBtn_3.default, null)));
        }
    }
    exports.default = InfoArea;
});
define("message", ["require", "exports", "react", "bottomBtn"], function (require, exports, React, bottomBtn_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Message extends React.Component {
        constructor(props) {
            super(props);
            this.state = {};
        }
        componentDidMount() {
            bottomBtn_4.default.toggleIcon(3);
        }
        render() {
            return (React.createElement("div", null,
                React.createElement("div", { className: "messageBox" }, "message"),
                React.createElement(bottomBtn_4.default, null)));
        }
    }
    exports.default = Message;
});
define("index", ["require", "exports", "react", "react-dom", "home", "parkCompany", "photograph", "infoArea", "message", "aboutMe", "react-router-dom", "css!./styles/view.css"], function (require, exports, React, ReactDOM, home_1, parkCompany_1, photograph_1, infoArea_1, message_1, aboutMe_1, react_router_dom_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Index extends React.Component {
        constructor(props) {
            super(props);
        }
        componentDidMount() {
        }
        three() { }
        render() {
            return (React.createElement("div", { className: "web" },
                React.createElement(home_1.default, null)));
        }
    }
    exports.default = Index;
    ReactDOM.render(React.createElement(react_router_dom_1.HashRouter, null,
        React.createElement(react_router_dom_1.Switch, null,
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/parkCompany", component: parkCompany_1.default }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/photograph", component: photograph_1.default }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: Index }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/infoArea", component: infoArea_1.default }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/message", component: message_1.default }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/aboutMe", component: aboutMe_1.default }))), document.getElementById('viewContainer'));
});