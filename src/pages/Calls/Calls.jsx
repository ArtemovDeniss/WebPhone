import Search from '../../components/Search/Search'
import List from './List/List'
import Content from './Content/Content'

import './Calls.scss'

const Calls = () => {
    return (
        <>
            <aside>
                <Search />
                <div className='aside-list'>
                    <div className="list-box">
                        <div className="header-list">
                            <button className='activeBtn'>Recent</button>
                            <button className='normalBtn'>Missed</button>
                        </div>
                        <List />
                    </div>
                </div>
                <div className="bottom">
                    <button>View all on PBX</button>
                </div>
            </aside>
            <Content />
        </>
    )
}

export default Calls