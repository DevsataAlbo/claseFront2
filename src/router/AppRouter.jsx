import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { AguaterosPage } from "../jugadores/pages/AguaterosPage"
import { JugadoresPage } from "../jugadores/pages/JugadoresPage"
import { SuplentesPage } from "../jugadores/pages/SuplentesPage"
import { HomePage } from "../jugadores/pages/HomePage"
import { NavBar } from "../ui/components/NavBar"
import { Footer } from "../ui/components/Footer"


export const AppRouter = () => {
  return (
    <>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Navigate to="/home"/>}></Route>
            <Route path="home" element={<HomePage/>}></Route>
            <Route path="login" element={<LoginPage/>}></Route>
            <Route path="aguateros" element={<AguaterosPage/>}></Route>
            <Route path="jugadores" element={<JugadoresPage/>}></Route>
            <Route path="suplentes" element={<SuplentesPage/>}></Route>
        </Routes>
        <Footer/>
    </>
  )
}



