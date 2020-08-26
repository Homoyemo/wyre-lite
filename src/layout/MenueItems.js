import React from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import propTypes from 'prop-types';

const { SubMenu } = Menu;

const MenueItems = ({ darkMode }) => {
  const pathArray = window.location.pathname.split('/');

  return (
    <Menu
      mode="inline"
      theme={darkMode && 'dark'}
      // eslint-disable-next-line no-nested-ternary
      defaultSelectedKeys={[`${pathArray[1] === '' ? 'home' : pathArray.length === 2 ? pathArray[1] : pathArray[2]}`]}
      defaultOpenKeys={[`${pathArray[1] !== '' ? pathArray[1] : 'dashboard'}`]}
    >
      <SubMenu key="dashboard" icon={<FeatherIcon icon="home" />} title="Dashboard">
        <Menu.Item key="home">
          <NavLink to="/">Google Analytics Social Media</NavLink>
        </Menu.Item>
        <Menu.Item key="business">
          <NavLink to="/dashboard/business">Fintech / Business Dashboard</NavLink>
        </Menu.Item>
        <Menu.Item key="performance">
          <NavLink to="/dashboard/performance">Site Performance Dashboard</NavLink>
        </Menu.Item>
        <Menu.Item key="ecommerce">
          <NavLink to="/dashboard/ecommerce">Ecommerce</NavLink>
        </Menu.Item>
        <Menu.Item key="base">
          <NavLink to="/dashboard/base">Dashbord Base</NavLink>
        </Menu.Item>
      </SubMenu>

      <SubMenu key="email" icon={<FeatherIcon icon="mail" />} title="Email">
        <Menu.Item key="inbox">
          <NavLink to="/email/inbox">Inbox</NavLink>
        </Menu.Item>
        <Menu.Item key="single">
          <NavLink to="/email/single/1585118055048">Read Email</NavLink>
        </Menu.Item>
        <Menu.Item key="7">Compose Email</Menu.Item>
      </SubMenu>

      <Menu.Item icon={<FeatherIcon icon="message-square" />} key="chat">
        <NavLink to="/chat/private">Chat</NavLink>
      </Menu.Item>

      <SubMenu key="ecommerce" icon={<FeatherIcon icon="shopping-cart" />} title="eCommerce">
        <Menu.Item key="products">
          <NavLink to="/ecommerce/products">Products</NavLink>
        </Menu.Item>
        <Menu.Item key="productDetails">
          <NavLink to="/ecommerce/productDetails/1">Product detail</NavLink>
        </Menu.Item>

        <Menu.Item key="add-product">
          <NavLink to="/ecommerce/add-product">Product Add</NavLink>
        </Menu.Item>

        <Menu.Item key="edit-product">
          <NavLink to="/ecommerce/edit-product">Product Edit</NavLink>
        </Menu.Item>
        <Menu.Item key="cart">
          <NavLink to="/ecommerce/cart">Cart</NavLink>
        </Menu.Item>
        <Menu.Item key="orders">
          <NavLink to="/ecommerce/orders">Orders</NavLink>
        </Menu.Item>
        <Menu.Item key="15">Credit Card</Menu.Item>
        <Menu.Item key="sellers">
          <NavLink to="/ecommerce/sellers">Sellers</NavLink>
        </Menu.Item>
        <Menu.Item key="Invoice">
          <NavLink to="/ecommerce/Invoice">Invoices</NavLink>
        </Menu.Item>
        <Menu.Item key="18">Transactions</Menu.Item>
      </SubMenu>

      {/* <Menu.Item key="calendar">
        <NavLink to="/calendar">
          <FeatherIcon icon="calendar" />
          <span>Calendar</span>
        </NavLink>
      </Menu.Item> */}

      <Menu.Item icon={<FeatherIcon icon="target" />} key="project">
        <NavLink to="/project">Project</NavLink>
      </Menu.Item>

      <SubMenu key="sub4" icon={<FeatherIcon icon="layout" />} title="Layouts">
        <Menu.Item key="20">Sidebar with User</Menu.Item>
        <Menu.Item key="21">Light Sidebar</Menu.Item>
        <Menu.Item key="22">Dark Sidebar</Menu.Item>
        <Menu.Item key="23">Light Topbar</Menu.Item>
        <Menu.Item key="24">Dark Topbar</Menu.Item>
        <Menu.Item key="25">Sidebar Collapsed</Menu.Item>
      </SubMenu>

      <SubMenu key="profile" icon={<FeatherIcon icon="user" />} title="Profile">
        <Menu.Item key="26">Profile</Menu.Item>
        <Menu.Item key="settings">
          <NavLink to="/profile/settings/profile">Settings</NavLink>
        </Menu.Item>
        <Menu.Item key="28">Login</Menu.Item>
        <Menu.Item key="29">Register</Menu.Item>
        <Menu.Item key="30">Forgot Password</Menu.Item>
      </SubMenu>

      <SubMenu key="pages" icon={<FeatherIcon icon="folder" />} title="Pages">
        <Menu.Item key="team">
          <NavLink to="/pages/team">Team</NavLink>
        </Menu.Item>
        <Menu.Item key="users">
          <NavLink to="/pages/users">Users</NavLink>
        </Menu.Item>
        <Menu.Item key="dataTable">
          <NavLink to="/pages/dataTable">Users Table</NavLink>
        </Menu.Item>
        <Menu.Item key="gallery">
          <NavLink to="/pages/gallery">Gallery</NavLink>
        </Menu.Item>
        <Menu.Item key="pricing">
          <NavLink to="/pages/pricing">Pricing</NavLink>
        </Menu.Item>
        <Menu.Item key="faq">
          <NavLink to="/pages/faq">Faq`s</NavLink>
        </Menu.Item>
        <Menu.Item key="search">
          <NavLink to="/pages/search">Search Results</NavLink>
        </Menu.Item>
        <Menu.Item key="maintenance">
          <NavLink to="/pages/maintenance">Coming Soon</NavLink>
        </Menu.Item>
        <Menu.Item key="404">
          <NavLink to="/pages/404">404</NavLink>
        </Menu.Item>
      </SubMenu>
      <p className="sidebar-nav-title">Components</p>

      <SubMenu key="components" icon={<FeatherIcon icon="layers" />} title="UI Elements">
        <Menu.Item key="alerts">
          <NavLink to="/components/alerts">Alerts</NavLink>
        </Menu.Item>
        <Menu.Item key="auto-complete">
          <NavLink to="/components/auto-complete">AutoComplete</NavLink>
        </Menu.Item>
        <Menu.Item key="avatar">
          <NavLink to="/components/avatar">Avatar</NavLink>
        </Menu.Item>
        <Menu.Item key="badge">
          <NavLink to="/components/badge">Badge</NavLink>
        </Menu.Item>
        <Menu.Item key="breadcrumb">
          <NavLink to="/components/breadcrumb">Breadcrumb</NavLink>
        </Menu.Item>
        <Menu.Item key="button">
          <NavLink to="/components/button">Button</NavLink>
        </Menu.Item>
        <Menu.Item key="calendar">
          <NavLink to="/components/calendar">Calendar</NavLink>
        </Menu.Item>
        <Menu.Item key="cards">
          <NavLink to="/components/cards">Cards</NavLink>
        </Menu.Item>
        <Menu.Item key="carousel">
          <NavLink to="/components/carousel">Carousel</NavLink>
        </Menu.Item>
        <Menu.Item key="cascader">
          <NavLink to="/components/cascader">Cascader</NavLink>
        </Menu.Item>
        <Menu.Item key="checkbox">
          <NavLink to="/components/checkbox">Checkbox</NavLink>
        </Menu.Item>
        <Menu.Item key="collapse">
          <NavLink to="/components/collapse">Collapse</NavLink>
        </Menu.Item>
        <Menu.Item key="comments">
          <NavLink to="/components/comments">Comments</NavLink>
        </Menu.Item>
        <Menu.Item key="date-picker">
          <NavLink to="/components/date-picker">DatePicker</NavLink>
        </Menu.Item>
        <Menu.Item key="drag">
          <NavLink to="/components/drag">Drag & Drop</NavLink>
        </Menu.Item>
        <Menu.Item key="drawer">
          <NavLink to="/components/drawer">Drawer</NavLink>
        </Menu.Item>
        <Menu.Item key="dropdown">
          <NavLink to="/components/dropdown">Dropdown</NavLink>
        </Menu.Item>
        <Menu.Item key="empty">
          <NavLink to="/components/empty">Empty</NavLink>
        </Menu.Item>
        <Menu.Item key="form">
          <NavLink to="/components/form">Form</NavLink>
        </Menu.Item>
        <Menu.Item key="grid">
          <NavLink to="/components/grid">Grid</NavLink>
        </Menu.Item>
        <Menu.Item key="input">
          <NavLink to="/components/input">Input</NavLink>
        </Menu.Item>
        <Menu.Item key="list">
          <NavLink to="/components/list">List</NavLink>
        </Menu.Item>
        <Menu.Item key="menu">
          <NavLink to="/components/menu">Menu</NavLink>
        </Menu.Item>
        <Menu.Item key="message">
          <NavLink to="/components/message">Message</NavLink>
        </Menu.Item>
        <Menu.Item key="modals">
          <NavLink to="/components/modals">Modals</NavLink>
        </Menu.Item>
        <Menu.Item key="notification">
          <NavLink to="/components/notification">Notification</NavLink>
        </Menu.Item>
        <Menu.Item key="page-headers">
          <NavLink to="/components/page-headers">Page Headers</NavLink>
        </Menu.Item>
        <Menu.Item key="pagination">
          <NavLink to="/components/pagination">Paginations</NavLink>
        </Menu.Item>
        <Menu.Item key="confirme">
          <NavLink to="/components/confirme">Popconfirme</NavLink>
        </Menu.Item>
        <Menu.Item key="popover">
          <NavLink to="/components/popover">Popover</NavLink>
        </Menu.Item>
        <Menu.Item key="progress">
          <NavLink to="/components/progress">Progress</NavLink>
        </Menu.Item>
        <Menu.Item key="radio">
          <NavLink to="/components/radio">Radio</NavLink>
        </Menu.Item>
        <Menu.Item key="rate">
          <NavLink to="/components/rate">Rate</NavLink>
        </Menu.Item>
        <Menu.Item key="result">
          <NavLink to="/components/result">Result</NavLink>
        </Menu.Item>
        <Menu.Item key="select">
          <NavLink to="/components/select">Select</NavLink>
        </Menu.Item>
        <Menu.Item key="skeleton">
          <NavLink to="/components/skeleton">Skeleton </NavLink>
        </Menu.Item>
        <Menu.Item key="slider">
          <NavLink to="/components/slider">Slider</NavLink>
        </Menu.Item>
        <Menu.Item key="spiner">
          <NavLink to="/components/spiner">Spiner</NavLink>
        </Menu.Item>
        <Menu.Item key="statistic">
          <NavLink to="/components/statistic">Statistic</NavLink>
        </Menu.Item>
        <Menu.Item key="steps">
          <NavLink to="/components/steps">Steps</NavLink>
        </Menu.Item>
        <Menu.Item key="switch">
          <NavLink to="/components/switch">Switch</NavLink>
        </Menu.Item>
        <Menu.Item key="tabs">
          <NavLink to="/components/tabs">Tabs</NavLink>
        </Menu.Item>
        <Menu.Item key="tags">
          <NavLink to="/components/tags">Tags</NavLink>
        </Menu.Item>
        <Menu.Item key="timeline">
          <NavLink to="/components/timeline">Timeline</NavLink>
        </Menu.Item>
        <Menu.Item key="timepicker">
          <NavLink to="/components/timepicker">Timepicker</NavLink>
        </Menu.Item>
        <Menu.Item key="tree-select">
          <NavLink to="/components/tree-select">TreeSelect</NavLink>
        </Menu.Item>
        <Menu.Item key="upload">
          <NavLink to="/components/upload">Upload</NavLink>
        </Menu.Item>
      </SubMenu>

      <SubMenu key="icon" icon={<FeatherIcon icon="grid" />} title="Icons">
        <Menu.Item key="feathers">
          <NavLink to="/icon/feathers">Feather icons (svg)</NavLink>
        </Menu.Item>
        <Menu.Item key="font-awesome">
          <NavLink to="/icon/font-awesome">Font Awesome</NavLink>
        </Menu.Item>
        <Menu.Item key="line-awesome">
          <NavLink to="/icon/line-awesome">Line Awesome</NavLink>
        </Menu.Item>
        <Menu.Item key="antd">
          <NavLink to="/icon/antd">Ant Design icons</NavLink>
        </Menu.Item>
      </SubMenu>

      <SubMenu key="charts" icon={<FeatherIcon icon="bar-chart-2" />} title="Charts">
        <Menu.Item key="chartjs">
          <NavLink to="/charts/chartjs">Chart Js</NavLink>
        </Menu.Item>
        <Menu.Item key="google-chart">
          <NavLink to="/charts/google-chart">Google Charts</NavLink>
        </Menu.Item>

        <SubMenu key="recharts" icon={<FeatherIcon icon="bar-chart" />} title="Recharts">
          <Menu.Item key="bar">
            <NavLink to="/charts/recharts/bar">Bar Charts</NavLink>
          </Menu.Item>
          <Menu.Item key="area">
            <NavLink to="/charts/recharts/area">Area Charts</NavLink>
          </Menu.Item>
          <Menu.Item key="composed">
            <NavLink to="/charts/recharts/composed">Composed Charts</NavLink>
          </Menu.Item>
          <Menu.Item key="line">
            <NavLink to="/charts/recharts/line">Line Charts</NavLink>
          </Menu.Item>
          <Menu.Item key="pie">
            <NavLink to="/charts/recharts/pie">Pie Charts</NavLink>
          </Menu.Item>
          <Menu.Item key="radar">
            <NavLink to="/charts/recharts/radar">Radar Charts</NavLink>
          </Menu.Item>
          <Menu.Item key="radial">
            <NavLink to="/charts/recharts/radial">Radial Charts</NavLink>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="peity">
          <NavLink to="/charts/peity">Peity Charts</NavLink>
        </Menu.Item>
      </SubMenu>

      <Menu.Item icon={<FeatherIcon icon="cpu" />} key="tables">
        <NavLink to="/tables">Table</NavLink>
      </Menu.Item>

      <Menu.Item icon={<FeatherIcon icon="disc" />} key="forms">
        <NavLink to="/forms">Forms</NavLink>
      </Menu.Item>

      <SubMenu key="maps" icon={<FeatherIcon icon="map" />} title="Maps">
        <Menu.Item key="google">
          <NavLink to="/maps/google">Google Maps</NavLink>
        </Menu.Item>
        <Menu.Item key="leaflet">
          <NavLink to="/maps/leaflet">Leaflet Maps</NavLink>
        </Menu.Item>
        <Menu.Item key="Vector">
          <NavLink to="/maps/Vector">Vector Maps</NavLink>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
};

MenueItems.propTypes = {
  darkMode: propTypes.bool,
};

MenueItems.defaultProps = {
  darkMode: false,
};

export default MenueItems;
