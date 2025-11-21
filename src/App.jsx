import Header from "./components/Header";
import CreateEntry from "./components/entry";
import travelData from "./data"


export default function App () {
  const nums =[1, 2, 4, 5];
  const newe = nums.map((num) => num*num); 
  console.log(newe);

 // const names=[<h2>april</h2>, <h2>julia</h2>, <h2>may</h2>, <h2>spider-man</h2>];
  // const highN = names.map((str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`);
  // console.log(highN)

  // const tag = names.map(str => 
  //   `<p>${str}</p>`
  // )
  //console.log(tag)

  const travelEntries = travelData.map((entry) => {
    return <CreateEntry
        key={entry.id}
        object={entry}
      />
  })

  return (
    <>
      <Header />
      <div className="entry-wrap">
        
      {travelEntries}
      {/* <CreateEntry 
        img={{src:"https://cdn.pixabay.com/photo/2025/04/29/13/22/cityscape-9567180_1280.jpg", alt:"japan"}}
        country="Japan"
        map="https://goo.gl/maps/19Af5yVV8Kk"
        title="Mount Fuji"
        date="March 2023"
        desc="Japan, an archipelago of 14,125 islands, is renowned for its harmonious blend of ancient traditions and cutting-edge technology. From the serene temples of Kyoto to the bustling streets of Tokyo, Japan offers a vast array of cultural experiences. Known for its impressive nature, Japan is home to stunning landscapes such as Mount Fuji, cherry blossoms in spring, and the peaceful shores of Okinawa. Japanese culture emphasizes respect, discipline, and mindfulness, reflected in practices like tea ceremonies, sumo wrestling, and the art of calligraphy. The food, especially sushi and ramen, is famous worldwide, and the country's hospitality, known as `omotenashi,`` ensures a memorable experience for all who visit."

      /> */}
     
      </div>
      {/* {names} */}
    
    </>
  )
}