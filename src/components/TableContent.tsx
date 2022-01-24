import { Table } from "antd"
import { useState } from "react";
import ActionsIcon from "./ActionsIcon";
import Vehicle from "src/Entities/Vehicle";
import Actions from "./Actions";

interface TableContentProps {
    vehicles: Vehicle[]
}

export default function TableContent(props: TableContentProps) {

    const [select, setSelect] = useState({
        selectedRowKeys: [],
        loading: false
    })
    const [showActions, setShowActions] = useState('')
    const [click, setClick] = useState(false)

    function actions(id: string) {
        if (!click) {
            setClick(true)
        } else {
            setClick(false)
        }
        setShowActions(id)
    }

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
        }, {
            title: 'Veículo',
            dataIndex: 'vehicle',
        }, {
            title: 'Marca',
            dataIndex: 'brand',
        }, {
            title: 'Placa',
            dataIndex: 'plate',
        }, {
            title: 'Tipo de veículo',
            dataIndex: 'type',
        }, {
            title: 'Status',
            dataIndex: 'status',
        }, {
            title: 'Ações',
            dataIndex: 'actions',
        },
    ];

    const data = props.vehicles?.map((item, index) => {
        return {
            key: index,
            id: item.id,
            vehicle: item.vehicle,
            brand: item.brand,
            plate: item.plate,
            type: item.type,
            status: <div
                className={
                    `rounded-lg bg-[#E6F4FF] text-blue
                    text-center py-3 px-5`
                }>{item.status}</div>,
            actions: <div className="flex justify-center">
                <ActionsIcon onClick={() => actions(item.id)} />
                {showActions === item.id && click ?
                    <Actions id={item.id} /> : false
                }
            </div>
        }
    });

    const { selectedRowKeys, loading } = select;

    const rowSelection = {
        selectedRowKeys,
        onChange: (selectedRowKeys) => {
            setSelect({
                ...select,
                selectedRowKeys: selectedRowKeys
            });
        }
    };

    return (
        <Table
            rowSelection={rowSelection}
            loading={loading}
            columns={columns}
            dataSource={data}
            pagination={{
                position: ["bottomCenter"],
                pageSize: 10
            }}
        />
    )
}