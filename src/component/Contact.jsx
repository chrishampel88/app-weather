import style from './Contact.module.css'

export default function Contact(){
    return(
        <div className={style.div}>

            <h1>If you want to contact me you can do it through:</h1>
            <h2 >
                <img className={style.logo} src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
                <a className={style.link} rel="noreferrer" href="https://www.linkedin.com/in/christian-hampel88/" target="_blank"> Linkedin</a>
            </h2 >
            <h2 >
                <img className={style.logo} src="https://cdn-icons-png.flaticon.com/512/270/270798.png" alt="" />
                <a className={style.link} rel="noreferrer" href="https://github.com/chrishampel88" target="_blank"> Github</a>
            </h2> 
            <h2 >
                <img className={style.logo} src="https://cdn-icons.flaticon.com/png/512/3178/premium/3178283.png?token=exp=1648751792~hmac=4f52271186d71acff5a7aaab2926bb0c" alt="" />
                <a className={style.link} rel="noreferrer" href="mailto:christianhampel88@gmail.com" target="_blank"> E-mail</a>
            </h2>
        </div>
    )
}