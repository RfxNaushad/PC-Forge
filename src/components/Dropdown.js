import React from 'react';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import Link from "next/link";

const items = [
  {
    key: '1',
    label: (

    <Link href="/categories/cpu-processor"> CPU / Processor </Link>
    ),
  },
  {
    key: '2',
    label: (
        <Link href="/categories/motherboard"> Motherboard </Link>
    ),

  },
  {
    key: '3',
    label: (
        <Link href="/categories/ram"> RAM </Link>
    ),
  },
    {key: '4',
    label: (
        <Link href="/categories/power-supply-unit"> Power Supply Unit </Link>
    ),
  },
    {key: '5',
    label: (
        <Link href="/categories/storage-device"> Storage Device </Link>
    ),
  },
    {key: '6',
    label: (
        <Link href="/categories/monitor"> Monitor </Link>
    ),
  },
    {key: '7',
    label: (
        <Link href="/categories/others"> Others </Link>
    ),
  },

];


const CategoryDropdown = () => (
  <Dropdown
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
      Categories
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default CategoryDropdown;