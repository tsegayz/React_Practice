import styles from "./styles.module.css"
import './styles.css'
function StyleSheet(props) {

    let className = props.begin ? "begin" : ''

    const myStyle = { fontSize: '80px',
                        color: 'blue'  }
  return (
    <div>
        {/* 1. CSS StyleSheet */}
        <h1 className={className}> Hola y'all </h1>  

        {/* 2. inline styling */}
        <h2 style={myStyle}> How's it going </h2> 

        {/* 3. CSS modules */}
        <h2 className={styles.growth}> Let's hang out</h2>
    </div>
  )
}

export default StyleSheet
