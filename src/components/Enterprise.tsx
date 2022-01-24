import EnterpriseIcon from './EnterpriseIcon'
import EnterpriseText from './EnterpriseText'

export default function Enterprise(props) {
    return (
        <div className={`
            flex items-center w-48 h-16
            bg-light-gray rounded-xl
        `}>
            <EnterpriseIcon />
            <EnterpriseText />
        </div>
    )
}