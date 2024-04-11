import ContentHeader from './ContentHeader/ContentHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons'
const iconDel = <FontAwesomeIcon icon={faCircleMinus} style={{ color: "#fd6d0d", }} />

const Content = () => {
    return ( 
        <section className='info'>
            <ContentHeader />
            <div className='main-info'>
                <div className="col-left">
                    <ul className="left-list">
                        <li>
                            <div className="text">
                                <h3>CALL ID</h3>
                            </div>
                            <div className="item-botton">
                                <span>W_LK87H</span>
                                <button className="btn-copy">
                                    {/* <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.9205 3.54549L11.7045 2.32951C11.4935 2.11853 11.2074 2 10.909 2H6.875C6.25367 2 5.75 2.50367 5.75 3.125V4.25H3.875C3.25367 4.25 2.75 4.75367 2.75 5.375V12.875C2.75 13.4963 3.25367 14 3.875 14H9.125C9.74633 14 10.25 13.4963 10.25 12.875V11.75H12.125C12.7463 11.75 13.25 11.2463 13.25 10.625V4.34098C13.25 4.04262 13.1315 3.75647 12.9205 3.54549ZM8.98438 12.875H4.01562C3.97833 12.875 3.94256 12.8602 3.91619 12.8338C3.88982 12.8074 3.875 12.7717 3.875 12.7344V5.51562C3.875 5.47833 3.88982 5.44256 3.91619 5.41619C3.94256 5.38982 3.97833 5.375 4.01562 5.375H5.75V10.625C5.75 11.2463 6.25367 11.75 6.875 11.75H9.125V12.7344C9.125 12.7717 9.11018 12.8074 9.08381 12.8338C9.05744 12.8602 9.02167 12.875 8.98438 12.875ZM11.9844 10.625H7.01562C6.97833 10.625 6.94256 10.6102 6.91619 10.5838C6.88982 10.5574 6.875 10.5217 6.875 10.4844V3.26562C6.875 3.22833 6.88982 3.19256 6.91619 3.16619C6.94256 3.13982 6.97833 3.125 7.01562 3.125H9.5V5.1875C9.5 5.49816 9.75184 5.75 10.0625 5.75H12.125V10.4844C12.125 10.5217 12.1102 10.5574 12.0838 10.5838C12.0574 10.6102 12.0217 10.625 11.9844 10.625ZM12.125 4.625H10.625V3.125H10.8507C10.888 3.125 10.9238 3.13981 10.9502 3.16618L12.0838 4.2998C12.0969 4.31286 12.1072 4.32837 12.1143 4.34543C12.1214 4.36249 12.125 4.38078 12.125 4.39925V4.625Z" fill="#A6B4D0"/></svg> */}
                                </button>
                            </div>
                        </li>
                        <li>
                            <div className="text">
                                <h3>CALL CATEGORY</h3>
                            </div>
                            <div className="item-botton">
                                <span>Insurance Auto</span>
                            </div>
                        </li>
                        <li>
                            <div className="text">
                                <h3>SOURCE NUMBER</h3>
                            </div>
                            <div className="item-botton">
                                <span>310-456-7899</span>
                            </div>
                        </li>
                        <li>
                            <div className="text">
                                <h3>DESTINATION NUMBER</h3>
                            </div>
                            <div className="item-botton">
                                <span>818-800-0000</span>
                            </div>
                        </li>
                        <li>
                            <div className="text">
                                <h3>QUEUE</h3>
                            </div>
                            <div className="item-botton">
                                <span>#1 Top priority queue</span>
                            </div>
                        </li>
                        <li>
                            <div className="text">
                                <h3>AGENT</h3>
                            </div>
                            <div className="item-botton">
                                <span>Arlene McCoy</span>
                            </div>
                        </li>
                        <li>
                            <div className="text">
                                <h3>TOTAL DURATION</h3>
                            </div>
                            <div className="item-botton">
                                <span>1h 2m</span>
                            </div>
                        </li>
                        <li>
                            <div className="text">
                                <h3>IVR DURATION</h3>
                            </div>
                            <div className="item-botton">
                                <span>4m 15s</span>
                            </div>
                        </li>
                        <li>
                            <div className="text">
                                <h3>WAITING DURATION</h3>
                            </div>
                            <div className="item-botton">
                                <span>2m 45s</span>
                            </div>
                        </li>
                        <li>
                            <div className="text">
                                <h3>ON CALL DURATION</h3>
                            </div>
                            <div className="item-botton">
                                <span>55m</span>
                            </div>
                        </li>
                    </ul>
                    <button className='btn-botton'>Show more on PBX</button>
                </div>
                <div className="col-right">
                    <div className="list result">
                        <span>RESULT</span>
                        <select className="select" id="">
                            <option value="">Select option</option>
                        </select>
                    </div>
                    <div className="list tag">
                        <span>TAGS</span>
                        <div className="tags-text">
                            <div className="tags">
                                <div className="active-tag">
                                    <span>Demo</span>
                                    {iconDel}
                                </div>
                                <div className="active-tag">
                                    <span>Upsell call</span>
                                    {iconDel}
                                </div>
                                <div className="active-tag">
                                    <span>New Sale</span>
                                    {iconDel}
                                </div>
                                <div className="active-tag">
                                    <span>Cancelation</span>
                                    {iconDel}
                                </div>
                            </div>
                            <input type="text" id=""></input>
                        </div>
                    </div>
                    <div className="list note">
                        <span>NOTE</span>
                        <textarea className="textarea" name="" id="" cols="57" rows="5"></textarea>
                    </div>
                    <button className="btn-botton">Save</button>
                </div>
            </div>
        </section>
    )
}

export default Content