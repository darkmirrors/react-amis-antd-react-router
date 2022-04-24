import { Menu } from "antd";
import { Children, FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import Icon from "../Icon";

const { SubMenu } = Menu;

interface IMenuList {
  title: string;
  key: string;
  icon: string;
  isPublic?: boolean;
  children?: IMenuList[];
}

const LeftNav: FC = (): ReactElement => {
  const menuList: IMenuList[] = [
    {
      title: "首页",
      key: "/",
      icon: "HomeOutlined",
      isPublic: true,
    },
    {
      title: "商品",
      key: "/products",
      icon: "",
      children: [
        {
          title: "分类列表",
          key: "/series",
          icon: "",
        },
      ],
    },
    {
      title: "用户管理",
      key: "/user",
      icon: "",
    },

    // {
    //   title: '用户管理',
    //   key: '/user',
    //   icon: 'user',
    // },
    // {
    //   title: '角色管理',
    //   key: '/role',
    //   icon: 'safety',
    // },

    // {
    //   title: '图形图表',
    //   key: '/charts',
    //   icon: 'area-chart',
    //   children: [
    //     {
    //       title: '柱形图',
    //       key: '/charts/bar',
    //       icon: 'bar-chart',
    //     },
    //     {
    //       title: '折线图',
    //       key: '/charts/line',
    //       icon: 'line-chart',
    //     },
    //     {
    //       title: '饼图',
    //       key: '/charts/pie',
    //       icon: 'pie-chart',
    //     },
    //   ],
    // },

    // {
    //   title: '订单管理',
    //   key: '/order',
    //   icon: 'windows',
    // },
  ];

  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      style={{ height: "100%", borderRight: 0 }}
    >
      {menuList.map((item, index) => {
        if (item.children?.length) {
          return (
            <SubMenu
              key={item.key}
              icon={item.icon ? Icon(item.icon) : ""}
              title={item.title}
            >
              {item.children.map((sub) => {
                return (
                  <Menu.Item
                    key={sub.key}
                    icon={sub.icon ? Icon(sub.icon) : ""}
                  >
                    <Link to={sub.key}>{sub.title}</Link>
                  </Menu.Item>
                );
              })}
            </SubMenu>
          );
        } else {
          return (
            <Menu.Item key={item.key} icon={item.icon ? Icon(item.icon) : ""}>
              <Link to={item.key}>{item.title}</Link>
              {/* <a href={item.key}>{item.title}</a> */}
            </Menu.Item>
          );
        }
      })}
    </Menu>
  );
};

export default LeftNav;
