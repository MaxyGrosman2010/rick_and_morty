import style from './About.module.css';

export default function About(){
    return(
        <div className={style.contains} >
            <h1 className={style.h1} >About:</h1>
            <h2 className={style.h2} >About me</h2>
            <h4 className={style.h4} >
                Mi nombre es Maximiliano Grosman, el creador de esta pagina.<br/>
                Soy un desarrollador Fullstack, al momento de escribir este about en busqueda laboral.<br/>
                Con conocimiento en las tecnologias React, Redux, Express, Sequelize, Multer.<br/>
            </h4>
            <h2 className={style.h2} >About the site</h2>
            <h4 className={style.h4}>
                Este sitio fue creado con el proposito de poner en practica los conocimientos adquiridos a travez del Henry's Bootcamp, 3 meses tras haberlo terminado volvi a este mismo, ya que, no estaba orgulloso de este, y al volver aplique un monton de cosas que aprendi por mi cuenta o travez de la charla con otros desarrolladores que cursaron el mismo bootcamp.
            </h4>
        </div>
    );
}