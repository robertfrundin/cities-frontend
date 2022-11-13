import { Button } from "./components/Button/Button"
import { ChangeLang } from "./components/ChangeLang/ChangeLang"

function App(className) {
  return (
    <>
    <Button className={className} text = {'ИГРАТЬ'} size = 'medium'> </Button> 
    <Button className={className} text = {'КОМНАТЫ'} size = 'medium'></Button> 
    <ChangeLang className={className} ></ChangeLang>
    </>
  )
}

export default App
