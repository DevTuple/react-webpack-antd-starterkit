import React, { Component } from "react";
import { HashRouter as Router, Route, Link, Routes } from "react-router-dom";
import "antd/dist/antd.css";
import "../assets/stylesheets/app.css";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Dashboard } from "../pages/Dashboard";
export interface MainProps {}
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


export const MainLayoutPage: React.FunctionComponent = () => {
  const [collapsed, isCollapsed] = React.useState(false);

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    isCollapsed(collapsed);
  };
  return (
   
      <>
        <Layout style={ {minHeight: "100vh"} }>
          <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} className="mh-sider">
            <div className="logo" />
            <Menu defaultSelectedKeys={["1"]} mode="inline" className="mh-menu">
              <Menu.Item key="1" icon={<PieChartOutlined />}  className="mh-menu-item">
                Option 1
              </Menu.Item>
              <Menu.Item key="2" icon={<DesktopOutlined />}>
                Option 2
              </Menu.Item>
              <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                <Menu.Item key="3">Tom1</Menu.Item>
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
              </SubMenu>
              <Menu.Item key="9" icon={<FileOutlined />}>
                Files
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: "0 16px" }}>
              <Routes>
                <Route  path="/" element={Dashboard} />
               

              </Routes>
              {/* <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
              >
                Bill is a cat.
  </div>*/}
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Fulcurm ©2022 Created by PerfectPUT
            </Footer>
          </Layout>
        </Layout>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/foo">Foo</Link>
          <Link to="/bar">Bar</Link>
        </nav>
      </>
   
  );
};
