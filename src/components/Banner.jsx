import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/images/images.png";

function Banner() {
    //El siguiente hook nos ayudará a seleccionar uno de los elementos del arreglo
    //toRotate
    const [loopNum,setLoopNum] = useState(0);
    //El siguiente Hook se utiliza para verificar que el texto este borrado
    const [isDeleting,setIsDeleting] = useState(false);
    //El arreglo de texto que queremos aparezca y desaparezca
    const toRotate = ["Frontend Developer", "Streamer", "Designer Hardware"];
    //El hook que actualizará el texto mostrado en la pantalla
    const [text,setText] = useState("");
    //La siguiente función se usa para determinar el tiempo en que setInterval invocará la función tick()
    const [delta,setDelta] = useState(300-Math.random()*100);
    //Con la siguiente varaible, camabiará el valor de nuestro delta para que se mantenga 2 segundos, y despues
    //se vuelva a eliminar letra por letra los elementos del array
    const period = 1000;

    //El siguiente hook nos indica que la función "ticker" se invocará cada que "text" cambie de estado
    useEffect(()=>{
        //La siguiente funcion llamará a la función tick cada "delta" milisegundos.
        let ticker = setInterval(()=>{
            tick();
        },delta);
        //Cuando termine, parará la función ticker
        return ()=> {clearInterval(ticker)};
    }, [text]);

    //La siguiente función nos indicará se desapareció o no las letras de cada elemento del array
    function tick(){
        //La siguiente varaible nos dará un residuo entre loolNum y el tamaño del arreglo
        let i = loopNum%toRotate.length;
        //llamamos al elemento del arreglo con el valor obtenido del residuo
        let fullText = toRotate[i];
        //Con la siguiente línea, tomará letra por letra los elementos del array para aparecerlos o desaparecerlos
        const updatedText = isDeleting === true ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1);

        //Actulizamos el estado de "Text" con el siguiente hook
        setText(updatedText);

        isDeleting===true&&setDelta(prevDelta=>prevDelta/2);

        //El siguiente if-else determinará si está borrando el texto del array o si ya terminó
        if(isDeleting===false && updatedText === fullText){
            //Cuando termine, setDelta cambiará el valor del delta 2 segundo, para que no se elimine luego el elemento
            //del array
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting===true && updatedText === ""){
            //Si isDeleting es igual a true, y ya no hay nada en el updatedText, isDeleting cambiará a false
            //loopNum se le sumará un uno para obtener otro valor, y tener un elemento aleatorio del arreglo
            //y a delta se le actuallizará un valor de 500 milisegundos
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        } 
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline"> Welcome to my portfolio</span>
                        <h1>{`Hello, I'm `}<span className="wrap">{text}</span></h1>
                        <p>My name is Ricardo. I have a bachelor Degree of Science in Digital Systems and Robotics.
                            Therefore, i have been working with microcontrollers, Arduino, Designer hardware, Machine Learning, etc. Nevertheless, i prefer programming due to the fact that i like challenges.
                            I have been programming in many languages such as Java, C#, C++, Assembly, Python and Javascript. Currently, i develop web pages as front-end developer with ReactJS.</p>
                        <button onClick={() => console.log("connected")}>Let's Goo<ArrowRightCircle size={20} /></button>
                    </Col>
                    <Col>
                        <img src={headerImg} alt="header" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Banner;