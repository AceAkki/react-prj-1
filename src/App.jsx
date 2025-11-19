import Header from "./components/Header";
import CreateEntry from "./components/entry";


export default function App () {
 
  return (
    <>
      <Header />
      <div className="entry-wrap">
        

      <CreateEntry 
        img={{src:"https://cdn.pixabay.com/photo/2025/04/29/13/22/cityscape-9567180_1280.jpg", alt:"japan"}}
        country="Japan"
        map="https://goo.gl/maps/19Af5yVV8Kk"
        title="Mount Fuji"
        date="March 2023"
        desc="Japan, an archipelago of 14,125 islands, is renowned for its harmonious blend of ancient traditions and cutting-edge technology. From the serene temples of Kyoto to the bustling streets of Tokyo, Japan offers a vast array of cultural experiences. Known for its impressive nature, Japan is home to stunning landscapes such as Mount Fuji, cherry blossoms in spring, and the peaceful shores of Okinawa. Japanese culture emphasizes respect, discipline, and mindfulness, reflected in practices like tea ceremonies, sumo wrestling, and the art of calligraphy. The food, especially sushi and ramen, is famous worldwide, and the country's hospitality, known as `omotenashi,`` ensures a memorable experience for all who visit."

      />
      <CreateEntry 
        img={{src:"https://cdn.pixabay.com/photo/2025/04/29/13/22/cityscape-9567180_1280.jpg", alt:"italy"}}
        country="Italy"
        map="https://goo.gl/maps/Jow3QspDkAPgR5x9A"
        title="Mount Fuji"
        date="June 2022"
        desc="Italy is a country known for its rich history, art, architecture, and cuisine. From the ancient ruins of Rome to the romantic canals of Venice, Italy's cultural and natural beauty is unrivaled. The country is famous for its contributions to art (think Leonardo da Vinci and Michelangelo), its iconic architecture (the Colosseum, the Leaning Tower of Pisa), and its culinary delights like pasta, pizza, and gelato. Italy's diverse regions each offer something unique, from the fashion capital of Milan to the stunning coastal cliffs of the Amalfi Coast. Italians are known for their warm hospitality, and visiting Italy feels like stepping into a living history book."

      />
      </div>
    
    </>
  )
}