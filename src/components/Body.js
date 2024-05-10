import { useEffect } from "react"
import Login from "./Login"
import { useDispatch } from "react-redux"
import { addUser, removeUser } from "../utils/userSlice"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom"


const Body = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        // console.log(user);
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
        navigate("/brows")

      } else {
        navigate("/")
        dispatch(removeUser())
      }
    });
  }, [])

  return (
    <div>
      <Login />
    </div>
  )
}


export default Body