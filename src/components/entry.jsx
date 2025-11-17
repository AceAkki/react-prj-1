import * as Icon from "@phosphor-icons/react";

export default function CreateEntry (props) {
    let timeOftheDay;

    const hours = new Date().getHours();

    if (hours <12) {
        timeOftheDay = "morning"
    } else if (hours >= 12 && hours <17) {
        timeOftheDay = "afternoon"
    } else if (hours < 21) {
        timeOftheDay = "eve"
    } else {
        timeOftheDay = "night"
    }
    return (
        <article className="entry-card">
            <div className="image-wrap">
                <img src={props.img}  alt="" />
            </div>
            <div className="content-wrap">
                <div className="top-wrap">
                    <Icon.MapPin size={16} color="orangered" weight="fill"/>
                    <span>
                        {props.country}
                    </span>
                    <a href={props.map}> View on Google Maps</a>

                </div>
                <h2 className="content-title"> {props.title} </h2>
                <h5 className="content-date"> {props.date} {timeOftheDay} </h5>
                <p className="content">
                    {props.desc}
                </p>
            </div>
        </article>
    )
}