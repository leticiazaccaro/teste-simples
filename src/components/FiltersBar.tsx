import Label from './Label';
import SearchIcon from './SearchIcon';
import Input from './Input'
import Select from './Select'

export default function FiltersBar(props) {

    const options = [{
        label: 'Todos',
        value: 'Todos'
    }, {
        label: 'Ativo',
        value: 'Ativo'
    }]

    return (
        <div className={`
            bg-white rounded-[1.3rem] w-full h-[6.63rem]
            pt-[0.85rem] pl-[1.38rem] pb-5 mt-4 shadow-3xl
            flex items-center justify-start
        `}>
            <div className='mr-2'>
                <Label>Buscar por filtro</Label>
                <Input icon={<SearchIcon />} placeholder="Buscar veículo" width={438} />
            </div>
            <div>
                <Label>Status</Label>
                <Select options={options} value='Todos' />
            </div>
        </div>
    )
}