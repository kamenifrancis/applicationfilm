import MovieList from './Composants/MovieList';
import { useState } from 'react';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import Add from './Composants/AddMovie';
import SearchName from './Composants/Search';
const App=()=> { 
   const [MovieData,SetMovieData]= useState([
    { 
      id: Math.random(),
    photo:
        "https://i.pinimg.com/originals/4d/ea/be/4deabeb03554cacdba17995886789005.jpg",
      rating: 4,
      name: "Devil's Mile",
      date: "2014",
      type: "Action | Crime",
      description:
        "A relentlessly-paced hybrid of gritty crime thriller and Lovecraftian supernatural horror, The Devil's Mile follows a trio of kidnappers who take an ill-advised detour en route to deliver..."
    },
    {
      id: Math.random(),
      photo:
        "https://static.cinemagia.ro/img/db/movie/00/69/88/once-upon-a-time-in-the-west-549264l.jpg",
      rating: 5,
      name: "Once Upon A Time In The west",
      date: "1968",
      type: "Western",
      description:
        "A mysterious stranger with a harmonica joins forces with a notorious desperado to protect a beautiful widow from a ruthless assassin working for the railroad."
    },
    {
      id: Math.random(),
      photo:
        "https://i.pinimg.com/564x/37/bd/f8/37bdf8f405a30977959e112d6f48aec0.jpg",
      rating: 4,
      name: "Taxi Driver",
      date: "1976",
      type: "Crime | Drama",
      description:
        "A mentally unstable veteran works as a nighttime taxi driver in New York City, where the perceived decadence and sleaze fuels his urge for violent action by attempting to liberate a presidential campaign worker and an underage prostitute."
    },
    {
      id: Math.random(),
      photo:
        "https://i.pinimg.com/564x/78/55/ac/7855acc7002b1ae619b1edaa4b595df3.jpg",
      rating: 4,
      name: "Mad Max",
      date: "1979",
      type: "Action | Adventure",
      description:
        "In a self-destructing world, a vengeful Australian policeman sets out to stop a violent motorcycle gang."
    },
  ]) 
  const add = (newMovie) =>{
    SetMovieData([...MovieData,newMovie]) 
  } 
  const handlesearch = ()=>{
 
  }
  return (
    <div>
    <MovieList MovieData={MovieData} />  
    <Add add= {add} />
    </div>
  );
}

export default App;
