import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Table } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, TableWrapper, CardToolbox } from '../styled';
import Heading from '../../components/heading/heading';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';

const UserListDataTable = () => {
  const { users } = useSelector(state => {
    return {
      users: state.users,
    };
  });

  const usersTableData = [];

  users.map(user => {
    const { id, name, designation, img, status } = user;

    return usersTableData.push({
      key: id,
      user: (
        <div className="user-info">
          <figure>
            <img style={{ width: '40px' }} src={require(`../../${img}`)} alt="" />
          </figure>
          <figcaption>
            <Heading className="user-name" as="h6">
              {name}
            </Heading>
            <span className="user-designation">San Francisco, CA</span>
          </figcaption>
        </div>
      ),
      email: 'john@gmail.com',
      company: 'Business Development',
      position: designation,
      joinDate: 'January 20, 2020',
      status: <span className={status}>{status}</span>,
      action: (
        <div className="table-actions">
          <>
            <Button className="btn-icon" type="primary" to="#" shape="circle">
              <FeatherIcon icon="eye" size={16} />
            </Button>
            <Button className="btn-icon" type="info" to="#" shape="circle">
              <FeatherIcon icon="edit" size={16} />
            </Button>
            <Button className="btn-icon" type="danger" to="#" shape="circle">
              <FeatherIcon icon="trash-2" size={16} />
            </Button>
          </>
        </div>
      ),
    });
  });

  const usersTableColumns = [
    {
      title: 'User',
      dataIndex: 'user',
      key: 'user',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: 'Join Date',
      dataIndex: 'joinDate',
      key: 'joinDate',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Actions',
      dataIndex: 'action',
      key: 'action',
      width: '90px',
    },
  ];

  return (
    <>
      <CardToolbox>
        <PageHeader ghost title="Drag & Drop" />
      </CardToolbox>

      <Main>
        <Row gutter={15}>
          <Col md={24}>
            <Cards headless>
              <TableWrapper className="table-responsive">
                <Table
                  dataSource={usersTableData}
                  columns={usersTableColumns}
                  pagination={{
                    defaultPageSize: 5,
                    total: usersTableData.length,
                    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
                  }}
                />
              </TableWrapper>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default UserListDataTable;
