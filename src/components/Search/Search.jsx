import './Search.scss'

const Search = () => {
    return (
        <div className="search">
            <input type="text" placeholder="Search"></input>
            <button className="dialpad-btn"><svg fill="#000000" width="14px" height="19px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title>ionicons-v5-g</title><path d="M256,400a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z"/><path d="M256,272a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z"/><path d="M256,144a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z"/><path d="M256,16a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z"/><path d="M384,272a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z"/><path d="M384,144a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z"/><path d="M384,16a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z"/><path d="M128,272a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z"/><path d="M128,144a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z"/><path d="M128,16a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z"/></svg></button>
        </div>
    )
}

export default Search