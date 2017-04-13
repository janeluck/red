/**
 * Created by janeluck on 3/31/17.
 */
import React, {PropTypes} from 'react'

import _ from 'lodash'

import {
    Form, Select, InputNumber, Switch, Radio,
    Slider, Button, Upload, Icon,
} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

/*
 注: AttrType值对应的字段属性
 1. 数值型
 3. 金额
 4. 单行文本型
 6. 多行文本型
 8. Email，此次不校验，与单行文本型同样方法处理
 9. URL，此次不校验，与单行文本型同样方法处理
 10. Phone，此次不校验，与单行文本型同样方法处理
 11. 布尔型.（可以参照是否重点客户字段的展示）
 12. 单选
 13. 下拉(12,13目前都按照下拉选择的方式处理)
 14. 多选
 15. 日期类型
 16. 日期时间类型(15,16目前按一种类型处理)
 17. 图片类型(该类型值为对象，分别是ThumbPath缩略图和ImgPath大图两个元素)
 18. ID.要结合自定义属性的IsDispView使用， 当IsDispView=0时，表示该字段不   显示，否则,该字段返回值是数组，或者对象.（目前有OwnerID和RelUsers两个字段,目前先按照原有处理方式处理）
 93. AddressList类型，在新增和编辑界面，要加上地区(State, City, District)三个关联枚举字段和公司地址(Address, Lng, Lat)
 */


class FormTemplate extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    /*    normFile = (e) => {
     console.log('Upload event:', e);
     if (Array.isArray(e)) {
     return e;
     }
     return e && e.fileList;
     }*/

    renderFormItem = (item) => {
        const {getFieldDecorator} = this.props.form;
        // attrType 可为String, Number类型。 传入的时候统一处理为Number
        const {AttrType, Label} = item
        switch (AttrType) {
            case 1:
                return (
                    <FormItem
                        label={Label}
                        hasFeedback
                    >
                        <InputNumber />
                    </FormItem>)
                break;
            case 3:
                return (<FormItem
                    label={Label}
                    hasFeedback
                >
                    <InputNumber
                        //defaultValue={1000}
                        formatter={value => `$ ${value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
                        parser={value => value.replace(/\$\s?|(,*)/g, '')}
                        onChange={onChange}
                    />
                </FormItem>)


                break;
            case 4:
                return (<FormItem
                    label={Label}
                    hasFeedback
                ><Input/></FormItem>)
                break;
            case 5:
                return (<FormItem
                    label={Label}
                    hasFeedback>
                    <Input type='textarea'/>
                </FormItem>)
            case 8:
                return ( <FormItem
                    label={Label}
                    hasFeedback
                >
                    {getFieldDecorator('email', {
                        rules: [{
                            type: 'email', message: 'The input is not valid E-mail!',
                        }, {
                            required: true, message: 'Please input your E-mail!',
                        }],
                    })(
                        <Input />
                    )}
                </FormItem>)
                break;
            case 9:
                return ( <FormItem
                    label={Label}
                >
                    {getFieldDecorator('phone', {
                        rules: [{required: true, message: 'Please input your phone number!'}],
                    })(
                        <Input />
                    )}
                </FormItem>)
                break;
            default:
                return null

        }

    }

    renderGroup = (all, group) => {
        all.concat(group.map())
        return all
    }

    renderForm = () => {

    }

    render() {
        const {dataSource} = this.props

        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {span: 6},
            wrapperCol: {span: 14},
        };
        return (
            <Form onSubmit={this.handleSubmit}>
                {/*<FormItem
                    {...formItemLayout}
                    label="Plain Text"
                >
                    <span className="ant-form-text">China</span>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Select"
                    hasFeedback
                >
                    {getFieldDecorator('select', {
                        rules: [
                            {required: true, message: 'Please select your country!'},
                        ],
                    })(
                        <Select placeholder="Please select a country">
                            <Option value="china">China</Option>
                            <Option value="use">U.S.A</Option>
                        </Select>
                    )}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="Select[multiple]"
                >
                    {getFieldDecorator('select-multiple', {
                        rules: [
                            {required: true, message: 'Please select your favourite colors!', type: 'array'},
                        ],
                    })(
                        <Select mode="multiple"
                                multiple
                                placeholder="Please select favourite colors">
                            <Option value="red">Red</Option>
                            <Option value="green">Green</Option>
                            <Option value="blue">Blue</Option>
                        </Select>
                    )}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="InputNumber"
                >
                    {getFieldDecorator('input-number', {initialValue: 3})(
                        <InputNumber min={1} max={10}/>
                    )}
                    <span className="ant-form-text"> machines</span>
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="Switch"
                >
                    {getFieldDecorator('switch', {valuePropName: 'checked'})(
                        <Switch />
                    )}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="Slider"
                >
                    {getFieldDecorator('slider')(
                        <Slider marks={{0: 'A', 20: 'B', 40: 'C', 60: 'D', 80: 'E', 100: 'F'}}/>
                    )}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="Radio.Group"
                >
                    {getFieldDecorator('radio-group')(
                        <RadioGroup>
                            <Radio value="a">item 1</Radio>
                            <Radio value="b">item 2</Radio>
                            <Radio value="c">item 3</Radio>
                        </RadioGroup>
                    )}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="Radio.Button"
                >
                    {getFieldDecorator('radio-button')(
                        <RadioGroup>
                            <RadioButton value="a">item 1</RadioButton>
                            <RadioButton value="b">item 2</RadioButton>
                            <RadioButton value="c">item 3</RadioButton>
                        </RadioGroup>
                    )}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="Upload"
                    extra="longgggggggggggggggggggggggggggggggggg"
                >
                    {getFieldDecorator('upload', {
                        valuePropName: 'fileList',
                        getValueFromEvent: this.normFile,
                    })(
                        <Upload name="logo" action="/upload.do" listType="picture">
                            <Button>
                                <Icon type="upload"/> Click to upload
                            </Button>
                        </Upload>
                    )}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="Dragger"
                >
                    <div className="dropbox">
                        {getFieldDecorator('dragger', {
                            valuePropName: 'fileList',
                            getValueFromEvent: this.normFile,
                        })(
                            <Upload.Dragger name="files" action="/upload.do">
                                <p className="ant-upload-drag-icon">
                                    <Icon type="inbox"/>
                                </p>
                                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit
                                    from uploading company data or other band files</p>
                            </Upload.Dragger>
                        )}
                    </div>
                </FormItem>*/}
                {_.reduce(dataSource, this.renderGroup, [])}

                <FormItem
                    wrapperCol={{span: 12, offset: 6}}
                >
                    <Button type="primary" htmlType="submit">Submit</Button>
                </FormItem>
            </Form>
        );
    }
}


FormTemplate.propTypes = {
    onSubmit: PropTypes.func,
}


FormTemplate.defaultProps = {};


export default Form.create()(FormTemplate)
