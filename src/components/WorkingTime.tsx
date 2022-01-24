import Label from './Label';
import Input from './Input'
import ClockIcon from './ClockIcon'
import Title from './Title';

interface WorkingTimeProps {
    start: string
    setStart: any
    end: string
    setEnd: any
}

export default function WorkingTime(props: WorkingTimeProps) {

    return (
        <div className={`
            bg-white rounded-[1.3rem] w-[50%] h-[11.5rem]
            py-8 pl-8 mt-8 shadow-3xl
        `}>
            <Title>Jornada de trabalho</Title>
            <div className='flex items-center justify-start mt-8'>
                <div className='mr-4'>
                    <Label>Início</Label>
                    <Input
                        icon={<ClockIcon />}
                        width={90}
                        value={props.start}
                        onChange={props.setStart}
                    />
                </div>
                <div>
                    <Label>Fim</Label>
                    <Input
                        icon={<ClockIcon />}
                        width={90}
                        value={props.end}
                        onChange={props.setEnd}
                    />
                </div>
            </div>
        </div>
    )
}