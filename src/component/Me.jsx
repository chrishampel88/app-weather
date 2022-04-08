import style from './styles/Me.module.css'
import {Accordion} from "react-bootstrap";

export default function Me(){
    return(
        <div className={style.Me}>
            <div className={style.divTitle} >
                <h1 className={style.title} >Hi! I am Chrsitian!!</h1>
            </div>
            <div>
            <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header><h3>A little bit about me</h3></Accordion.Header>
    <Accordion.Body>
    I started studying programming at the beginning of 2021 in a self-taught way. I did some other course to get more knowledge, until I started Henry's bootcamp, where I learned a lot. Now having finished it I am looking for my first job in the area.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header><h3>Technologies that I use</h3></Accordion.Header>
    <Accordion.Body>
        <ul className={style.ul}>
            <li>HTML</li>
            <li>CCS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Redux</li>
            <li>Less</li>
            <li>PHP</li>
            <li>NodeJS</li>
            <li>Sequalize</li>
            <li>Express</li>
            <li>PostgresSQL</li>

        </ul>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
                
            </div>
        </div>
    )
}