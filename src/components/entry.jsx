import * as Icon from "@phosphor-icons/react";

export default function CreateEntry (props) {
    
    let obj = props.object;
    console.log(obj, props)
    // let timeOftheDay;

    // const hours = new Date().getHours();

    // if (hours <12) {
    //     timeOftheDay = "morning"
    // } else if (hours >= 12 && hours <17) {
    //     timeOftheDay = "afternoon"
    // } else if (hours < 21) {
    //     timeOftheDay = "eve"
    // } else {
    //     timeOftheDay = "night"
    // }
    return (
        <article className="entry-card">
            <div className="image-wrap">
                <img src={obj.img.src}  alt={obj.img.alt} />
            </div>
            <div className="content-wrap">
                <div className="top-wrap">
                    <Icon.MapPin size={16} colo r="orangered" weight="fill"/>
                    <span>
                        {obj.country}
                    </span>
                    <a href={obj.map}> View on Google Maps</a>

                </div>
                <h2 className="content-title"> {obj.title} </h2>
                <h5 className="content-date"> {obj.date} </h5>
                <p className="content">
                    {obj.desc}
                </p>
            </div>
        </article>
    )
}