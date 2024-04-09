import { AttendeeList } from "./components/attendee-list"
import { Header } from "./components/header"

interface MeuBotaoProps{
  texto:string
}
function MeuBotao(props :MeuBotaoProps ){
  return <button className="bg-orange-500 h-10 px-8 rounded">{props.texto}</button>
}

export function App() {

  return (
    <div className="max-w-[1216px] mx-auto py-5 flex flex-col gap-5">
      <Header></Header>
      <AttendeeList></AttendeeList>
    </div>
  ) 
    
}


