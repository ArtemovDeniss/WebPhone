import CallBtn from "../../../../components/CallBtn/CallBtn"
import './ListItem.scss'

function getUser(id) {
    console.log(id);
}

const ListItem = ({item}) => {
    return (
        <li className="item" onClick={() => {getUser(item.id)}}>
            <div className="left">
                <div className="contact">
                    <span className="number">{item.phoneNumber}</span>
                    <span className="name">{item.firstName} {item.lastName}</span>
                </div>
            </div>
            <div className="right">
                <span className="date">{item.date}, {item.time}</span>
                <button>
                    <CallBtn />
                </button>
            </div>
        </li>
    )
}

export default ListItem