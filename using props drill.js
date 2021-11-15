function Theme(){
  const [mode,setMode] = useState("light")
  const styles = {
    background:!(mode==="light")?"black":"white",
    width:"100%",
    height:"500px",
  }
return(
  <div style={styles}>
    <Lists mode={mode} setMode={setMode}/>
  </div>
);
}
const Lists=({mode,setMode})=>{
  return(
  <ul>
    <ListItem value="light" mode={mode} setMode={setMode}/>
    <ListItem value="dark" mode={mode} setMode={setMode}/>
  </ul>
  )
}
const ListItem=({value,mode,setMode}) =>{
  return(
  <li>
    <ButtonToggle value={value} mode={mode} setMode={setMode}/>
  </li>
  )
};
const ButtonToggle =({value,mode,setMode}) =>{
  const styles ={
    background:!(mode==="light")?"white":"black",
    color:(mode==="light")?"white":"black",
    width:"80px",
    margin:"10px",
    border:"none"
  }
  return <button style={styles} onClick={()=>setMode(value)} >{value}</button>;
};
