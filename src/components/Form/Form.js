import {
    Table, Input, Button, Popconfirm, Form, Row, Col,
} from 'antd/lib/index';
import React from "react";
import { Radio } from 'antd/lib/index';
import { Checkbox } from 'antd/lib/index';

const RadioGroup = Radio.Group;
const FormItem = Form.Item;
const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
    <EditableContext.Provider value={form}>
        <tr {...props} />
    </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
    state = {
        editing: false,
    }

    toggleEdit = () => {
        const editing = !this.state.editing;
        this.setState({ editing }, () => {
            if (editing) {
                this.input.focus();
            }
        });
    }


    save = (e) => {
        const { record, handleSave } = this.props;
        this.form.validateFields((error, values) => {
            if (error && error[e.currentTarget.id]) {
                return;
            }
            this.toggleEdit();
            handleSave({ ...record, ...values });
        });
    }

    render() {
        const { editing } = this.state;
        const {
            editable,
            dataIndex,
            title,
            record,
            index,
            handleSave,
            ...restProps
        } = this.props;
        return (
            <td {...restProps}>
                {editable ? (
                    <EditableContext.Consumer>
                        {(form) => {
                            this.form = form;
                            return (
                                editing ? (
                                    <FormItem style={{ margin: 0 }}>
                                        {form.getFieldDecorator(dataIndex, {
                                            rules: [{
                                                required: true,
                                                message: `${title} is required.`,
                                            }],
                                            initialValue: record[dataIndex],
                                        })(
                                            <Input
                                                ref={node => (this.input = node)}
                                                onPressEnter={this.save}
                                                onBlur={this.save}
                                            />
                                        )}
                                    </FormItem>
                                ) : (
                                    <div
                                        className="editable-cell-value-wrap"
                                        style={{ paddingRight: 24 }}
                                        onClick={this.toggleEdit}
                                    >
                                        {restProps.children}
                                    </div>
                                )
                            );
                        }}
                    </EditableContext.Consumer>
                ) : restProps.children}
            </td>
        );
    }
}

export default class MainForm extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [{
            title: 'Item Name',
            dataIndex: 'itemName',
            width: '30%',
            editable: true,
        }, {
            title: 'Price',
            dataIndex: 'price',
            editable: true,
        }, {
            title: 'Quantity',
            dataIndex: 'quantity',
            editable: true,

        }, {
            title: 'Delete Item',
            dataIndex: 'operation',
            render: (text, record) => (
                this.state.dataSource.length >= 1
                    ? (
                        <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                            <a href="javascript:;" style={{color: 'black'}}>Delete</a>
                        </Popconfirm>
                    ) : null
            ),
        }];

        this.state = {
            value: 1,
            dataSource: this.props.dataSource,
            count: 2,
        };
    }
    onChangePaid(e) {
        console.log(`checked = ${e.target.checked}`);
    }
    handleDelete = (key) => {
        const dataSource = [...this.state.dataSource];
        this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
    }

    handleAdd = () => {
        const { count, dataSource } = this.state;
        const newData = {
            key: count,
            itemName: `Chicken Kurma`,
            price: 320,
            quantity: `4`,
        };
        this.setState({
            dataSource: [...dataSource, newData],
            count: count + 1,
        });
    }


    onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    }


    handleSave = (row) => {
        const newData = [...this.state.dataSource];
        const index = newData.findIndex(item => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, {
            ...item,
            ...row,
        });
        this.setState({ dataSource: newData });
    }

    render() {
        const { dataSource } = this.state;
        const components = {
            body: {
                row: EditableFormRow,
                cell: EditableCell,
            },
        };
        const columns = this.columns.map((col) => {
            if (!col.editable) {
                return col;
            }
            return {
                ...col,
                onCell: record => ({
                    record,
                    editable: col.editable,
                    dataIndex: col.dataIndex,
                    title: col.title,
                    handleSave: this.handleSave,
                }),
            };
        });
        return (
            <div >
                <Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 16 ,marginTop:15}}>
                    Add a Item
                </Button>
                <Table
                    id='bill-table'
                    components={components}
                    rowClassName={() => 'editable-row'}
                    bordered
                    dataSource={dataSource}
                    columns={columns}
                />
                <p><Button type='primary' style={{fontSize:'20px',right: -200}}>Paid Through </Button></p>
                <RadioGroup onChange={this.onChange} value={this.state.value} style={{marginTop:15}}>
                    <Radio value={1} style={{fontSize:'20px'}}>Cash</Radio>
                    <Radio value={2} style={{fontSize:'20px'}}>Card</Radio>
                    <Radio value={3} style={{fontSize:'20px'}}>Due</Radio>
                    <Radio value={4} style={{fontSize:'20px'}}>Part</Radio>
                </RadioGroup>
                <br/>
                <Checkbox onChange={this.onChangePaid} style={{marginTop:15 ,fontSize:'20px'}}>Paid ?</Checkbox>,

                <Row type="flex" justify="space-around" align="middle" style={{marginTop:15}}>
                    <Col span={4}>
                        <Button type='primary' value={100} style={{fontSize:'20px'}}>SAVE </Button>
                    </Col>
                    <Col span={4}>
                        <Button type='primary' value={100} style={{fontSize:'15px'}}>SAVE & PRINT </Button>
                    </Col>
                    <Col span={4}>
                        <Button type='primary' value={100} style={{fontSize:'20px'}}> KOT </Button>
                    </Col>
                    <Col span={4}>
                        <Button type='primary' value={100} style={{fontSize:'20px'}}>KOT & PRINT</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}






