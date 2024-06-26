// import { useState, useEffect } from 'react'
// import servises from '../../../../services/callsList'

const ContentListInfo = () => {
    // const [items, renderListInfo] = useState([]);

    // useEffect(() => {
    //     (async () => {
    //         const response = await servises.get();

    //         renderListInfo(response)
    //     })()
    // }, []);

    return (
        items.id ? <ul className="left-list">
            {items.map(item => <>
                        <li key={item.id}>
                            <div className="text">
                                <h3>CALL ID</h3>
                            </div>
                            <div className="item-botton">
                                <span>{item.callId}</span>
                                <button className="btn-copy">
                                    {/* <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.9205 3.54549L11.7045 2.32951C11.4935 2.11853 11.2074 2 10.909 2H6.875C6.25367 2 5.75 2.50367 5.75 3.125V4.25H3.875C3.25367 4.25 2.75 4.75367 2.75 5.375V12.875C2.75 13.4963 3.25367 14 3.875 14H9.125C9.74633 14 10.25 13.4963 10.25 12.875V11.75H12.125C12.7463 11.75 13.25 11.2463 13.25 10.625V4.34098C13.25 4.04262 13.1315 3.75647 12.9205 3.54549ZM8.98438 12.875H4.01562C3.97833 12.875 3.94256 12.8602 3.91619 12.8338C3.88982 12.8074 3.875 12.7717 3.875 12.7344V5.51562C3.875 5.47833 3.88982 5.44256 3.91619 5.41619C3.94256 5.38982 3.97833 5.375 4.01562 5.375H5.75V10.625C5.75 11.2463 6.25367 11.75 6.875 11.75H9.125V12.7344C9.125 12.7717 9.11018 12.8074 9.08381 12.8338C9.05744 12.8602 9.02167 12.875 8.98438 12.875ZM11.9844 10.625H7.01562C6.97833 10.625 6.94256 10.6102 6.91619 10.5838C6.88982 10.5574 6.875 10.5217 6.875 10.4844V3.26562C6.875 3.22833 6.88982 3.19256 6.91619 3.16619C6.94256 3.13982 6.97833 3.125 7.01562 3.125H9.5V5.1875C9.5 5.49816 9.75184 5.75 10.0625 5.75H12.125V10.4844C12.125 10.5217 12.1102 10.5574 12.0838 10.5838C12.0574 10.6102 12.0217 10.625 11.9844 10.625ZM12.125 4.625H10.625V3.125H10.8507C10.888 3.125 10.9238 3.13981 10.9502 3.16618L12.0838 4.2998C12.0969 4.31286 12.1072 4.32837 12.1143 4.34543C12.1214 4.36249 12.125 4.38078 12.125 4.39925V4.625Z" fill="#A6B4D0"/></svg> */}
                                </button>
                            </div>
                        </li>
                        <li key={item.id}>
                            <div className="text">
                                <h3>CALL CATEGORY</h3>
                            </div>
                            <div className="item-botton">
                                <span>{item.callCategory}</span>
                            </div>
                        </li>
                        <li key={item.id}>
                            <div className="text">
                                <h3>SOURCE NUMBER</h3>
                            </div>
                            <div className="item-botton">
                                <span>{item.sourceNumber}</span>
                            </div>
                        </li>
                        <li key={item.id}>
                            <div className="text">
                                <h3>DESTINATION NUMBER</h3>
                            </div>
                            <div className="item-botton">
                                <span>{item.destinationNumber}</span>
                            </div>
                        </li>
                        <li key={item.id}>
                            <div className="text">
                                <h3>QUEUE</h3>
                            </div>
                            <div className="item-botton">
                                <span>{item.queue}</span>
                            </div>
                        </li>
                        <li key={item.id}>
                            <div className="text">
                                <h3>AGENT</h3>
                            </div>
                            <div className="item-botton">
                                <span>{item.agent}</span>
                            </div>
                        </li>
                        <li key={item.id}>
                            <div className="text">
                                <h3>TOTAL DURATION</h3>
                            </div>
                            <div className="item-botton">
                                <span>{item.totalDuration}</span>
                            </div>
                        </li>
                        <li key={item.id}>
                            <div className="text">
                                <h3>IVR DURATION</h3>
                            </div>
                            <div className="item-botton">
                                <span>{item.ivrDuration}</span>
                            </div>
                        </li>
                        <li key={item.id}>
                            <div className="text">
                                <h3>WAITING DURATION</h3>
                            </div>
                            <div className="item-botton">
                                <span>{item.waitingDuration}</span>
                            </div>
                        </li>
                        <li key={item.id}>
                            <div className="text">
                                <h3>ON CALL DURATION</h3>
                            </div>
                            <div className="item-botton">
                                <span>{item.onCallDuration}</span>
                            </div>
                        </li>
                        </>
                        )}
        </ul> : null
    )
}

export default ContentListInfo