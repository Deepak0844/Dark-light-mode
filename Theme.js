
//1.Creating - createContext
//2.Publisher - provider = context.provider
//3.Subscriber - useContext = UseContext(context)

const ThemeContext = createContext(null);

function Theme(){
  const [mode,setMode] = useState("light")
  const styles = {
    background:!(mode==="light")?"black":"white",
    width:"100%",
    height:"500px",
  }
return(
<ThemeContext.Provider value ={[mode, setMode]}>
  <div style={styles}>
    <Lists />
  </div>
  </ThemeContext.Provider>
);
}
const Lists=()=>{
  return(
  <ul>
    <ListItem value="light" />
    <ListItem value="dark"/>
  </ul>
  )
}
const ListItem=({value}) =>{
  return(
  <li>
    <ButtonToggle value={value}/>
  </li>
  )
};
const ButtonToggle =({value}) =>{
  const [mode,setMode] = useContext(ThemeContext);

  const styles ={
    background:!(mode==="light")?"white":"black",
    color:(mode==="light")?"white":"black",
    width:"80px",
    margin:"10px",
    border:"none"
  }
  return <button style={styles} onClick={()=>setMode(value)} >{value}</button>;
};
