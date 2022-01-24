import { Input } from 'antd';
import { SizeType } from 'antd/lib/config-provider/SizeContext';

interface InputProps {
    icon?: any
    placeholder?: string
    size?: SizeType
    width?: number
    value?: any
    onChange?: (value: any) => void
    border?: string
    background?: string
    type?: 'text' | 'number'
}

export default function InputText(props: InputProps) {
    return (
        <div>
            <Input
                size={props.size}
                placeholder={props.placeholder}
                prefix={props.icon}
                type={props.type}
                className={`
                    border-solid border rounded-[0.63rem] border-gray-border
                    flex text-xs text-dark-gray-text
                    py-3 pl-[1.1rem]
                `}
                style={{ width: props.width, border: props.border, background: props.background }}
                value={props.value}
                onChange={e => props.onChange?.(e.target.value)}
            />
        </div>
    )
}