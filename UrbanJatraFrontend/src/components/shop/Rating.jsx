import { RiStarFill, RiStarLine, RiStarHalfFill} from "react-icons/ri";

function Rating({rating}) {
  const stars = [];
  for(let i=1;i<=5;i++){
    if(rating>=i){
      stars.push(<RiStarFill key={i} className="text-yellow-500 text-sm" />)
    }else if(rating>=i-0.5){
      stars.push(<RiStarHalfFill key={i} className="text-yellow-500 text-sm"/>)
    }else{
      stars.push(<RiStarLine key={i} className="text-yellow-500 text-sm" />)
    }
  }
  return (
    <div className="flex">{stars}</div>
  )
}

export default Rating