import { Button, Table } from 'antd'
import { FC, ReactElement, useEffect } from 'react'
import { Link } from 'react-router-dom'

import axios from '@/services/aixos'
import { first } from 'rxjs'

const { ColumnGroup, Column } = Table

const HomePage: FC = (): ReactElement => {
  useEffect(() => {
    axios.get('/series').then((res) => {
      console.log(res)
    })
    // console.log(1123)
  })

  return (
    <div className="App">
      <Link to="/login">
        <Button type="primary">跳转登录</Button>
      </Link>

      <Table
        dataSource={[
          {
            firstName: 'a',
            lastName: 'b',
            age: 1,
            address: 'dsad',
          },
          {
            firstName: 'a',
            lastName: 'b',
            age: 1,
            address: 'dsad',
          },
          {
            firstName: 'a',
            lastName: 'b',
            age: 1,
            address: 'dsad',
          },
          {
            firstName: 'a',
            lastName: 'b',
            age: 1,
            address: 'dsad',
          },
        ]}
      >
        <ColumnGroup title="Name">
          <Column title="First Name" key="firstName" />
          <Column title="Last Name" dataIndex="lastName" key="lastName" />
        </ColumnGroup>
        <Column title="Age" dataIndex="age" key="age" />
        <Column title="Address" dataIndex="address" key="address" />
        <Column
          title="Action"
          key="action"
          render={(text, record) => (
            <span>
              <a href="#">Action 一 {(record as any).name} 22222</a>
              <span className="ant-divider" />
              <a href="#">Delete</a>
              <span className="ant-divider" />
              <a href="#" className="ant-dropdown-link">
                More actions 321
              </a>
            </span>
          )}
        />
      </Table>

      <div className="font-bold font-size-10 text-blue-500 hover:text-red-500 md:text-xl lg:text-2xl">Hello Home!</div>
      <div className="btn">123</div>
      <img />
    </div>
  )
}

export default HomePage
