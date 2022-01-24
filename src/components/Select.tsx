import { Select } from 'antd';

const { Option } = Select;

interface SelectProps {
    options: any
    width?: number
    value?: string
    onChange?: any
}

export default function SelectOptions(props: SelectProps) {
    return (
        <div>
            <Select
                onChange={props.onChange}
                value={props.value}
            >
                {props.options.map((item, index) => {
                    return <Option
                        className="text-xs text-dark-gray-text"
                        value={item.value}
                        key={index}
                    >{item.label}</Option>
                })}
            </Select>
        </div>
    )
}