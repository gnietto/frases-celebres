import React, {useState} from 'react';
import { Message } from 'semantic-ui-react';
import './quotestyles.css';

function Quote() {

	const QUOTES = [
	{
	  quote: 'Have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary',
	  author: 'Steve Jobs'
	},
	{
	  quote: 'The only way to do great work is to love what you do. If you have not found it yet, keep looking. Do not settle',
	  author: 'Steve Jobs'
	},
	{
	  quote: 'The best coders understand the basics of coding, deeply.',
	  author: 'Fikayo Adepoju'
	},
	{
	  quote: 'The best coders understand the basics of coding, deeply.',
	  author: 'Fikayo Adepoju'
	},
	{
	  quote: 'Talk is cheap. Show me the code.',
	  author: 'Linus Torvalds'
	},
	{
	  quote: 'Programs must be written for people to read, and only incidentally for machines to execute.',
	  author: 'Harold Abelson'
	},
	{
	  quote: 'I am not a great programmer, I am just a good programmer with great habits.',
	  author: 'Kent Beck'
	},
	{
	  quote: 'A language that does not affect the way you think about programming is not worth knowing',
	  author: 'Alan Perlis'
	},
	{
	  quote: 'Object-oriented programming offers a sustainable way to write spaghetti code. It lets you accrete programs as a series of patches',
	  author: 'Paul Graham'
	},
	{
	  quote: 'Work until your name becomes your CV.',
	  author: 'Prosper Otemuyiwa'
	},
	{
	  quote: 'Preguntarse cuándo los ordenadores podrán pensar es como preguntarse cuándo los submarinos podrán nadar.',
	  author: 'Edsger W. Dijkstra'
	},
	{
	  quote: 'Es ridículo vivir 100 años y sólo ser capaces de recordar 30 millones de bytes. O sea, menos que un compact disc. La condición humana se hace más obsoleta cada minuto.',
	  author: 'Marvin Minsky'
	},
	{
	  quote: 'Hardware: las partes de un ordenador que pueden ser pateadas.',
	  author: 'Jeff Pesis'
	},
	{
	  quote: 'Por fin he entendido lo que significa \'upward compatible\' (compatible hacia arriba). Significa que mantenemos todos nuestros viejos errores.',
	  author: 'Dennie van Tassel'
	},
	{
	  quote: 'Hay dos grandes productos que salieron de Berkeley: LSD y UNIX. No creemos que esto sea una coincidencia.',
	  author: 'Jeremy S. Anderson'
	},
	{
	  quote: 'La verdadera innovación a menudo viene de las pequeñas startups que son capaces de crear mercados pero carecen de peso para poseerlos.',
	  author: 'Timm Martin'
	},
	{
	  quote: 'El logro más impresionante de la industria del software es su continua anulación de los constantes y asombrosos logros de la industria del hardware.',
	  author: 'Henry Petroski'
	},
	{
	  quote: 'Hay dos maneras de diseñar software: una es hacerlo tan simple que sea obvia su falta de deficiencias, y la otra es hacerlo tan complejo que no haya deficiencias obvias.',
	  author: 'C.A.R. Hoare'
	},
	{
	  quote: 'La función de un buen software es hacer que lo complejo aparente ser simple.',
	  author: 'Grady Booch'
	},
	{
	  quote: 'La formación en informática no puede convertir a nadie en experto programador, de la misma forma que estudiar pinceles y pigmentos puede hacer a alguien un experto pintor.',
	  author: 'Eric Raymond'
	},
	{
	  quote: "Life isn’t about getting and having, it’s about giving and being.", 
	  author: "Kevin Kruse"
	},
	{
	  quote: "Un hacker puede ser capaz de producir, en unos pocos meses, algo que un pequeño grupo de desarrolladores (digamos de 7 u 8 personas) podría tener trabajado duramente juntos más de un año. IBM solía decir que ciertos programadores podían ser 100 veces más productivos que otros trabajadores, o más.", 
	  author: "Peter Seebach"
	},
	{
	  quote: "Los mejores programadores no son sólo marginalmente mejores que los buenos. Se trata de un orden de magnitud mayor, medida por cualquier estándar: creatividad conceptual, velocidad, ingenio o habilidad para solucionar problemas.", 
	  author: "Randall E. Stross"
	},
	{
	  quote: "Un gran operario de tornos vale varias veces más que un operario medio, pero un gran escritor de código vale 10.000 veces el precio de un desarrollador medio.", 
	  author: "Bill Gates"
	},
	{
	  quote: "No te preocupes si no funciona bien. Si todo estuviera correcto, serías despedido de tu trabajo.", 
	  author: "Ley de Mosher de la Ingeniería del Software"
	},
	{
	  quote: "Primero resuelve el problema. Entonces, escribe el código.", 
	  author: "John Johnson"
	},
	{
	  quote: "Primero aprende informática y toda la teoría. Después desarrolla un estilo de programación. Entonces, olvídalo todo y hackea.", 
	  author: "George Carrette"
	},
	{
	  quote: "Iterar es humano, 'recursivar' es divino.", 
	  author: "L. Peter Deutsch"
	},
	{
	  quote: "Lo mejor de los booleanos es que si te equivocas estás a un sólo bit de la solución correcta.", 
	  author: "Anónimo"
	},
	{
	  quote: "Pienso que Microsoft eligió el nombre .Net para que no pudiera ser mostrado en un listado de directorio de Unix.", 
	  author: "Oktal"
	},
	{
	  quote: "El uso de COBOL daña la mente. Su enseñanza debería ser considerada como un ataque criminal.", 
	  author: "Edsger. W. Dijkstra"
	},
	{
	  quote: "Es prácticamente imposible enseñar buenos hábitos de programación a estudiantes que hayan sido previamente sometidos a una exposición de BASIC. Como desarrolladores en potencia, están mentalmente mutilados sin esperanza de regeneración.", 
	  author: "Edsger. W. Dijkstra"
	},
	{
	  quote: "No hay lenguaje de programación, no importa su estructura, que impida que los programadores hagan malos programas.", 
	  author: "Larry Flon"
	},
	{
	  quote: "Codifica siempre como si la persona que finalmente mantendrá tu código fuera un psicópata violento que sabe dónde vives.", 
	  author: "Martin Golding"
	},
	{
	  quote: "Whatever the mind of man can conceive and believe, it can achieve.", 
	  author: "Napoleon Hill"
	},
	{
	  quote: "Un experto es una persona que ha cometido todos los errores posibles en un determinado terreno.", 
	  author: "Niels Bohr"
	},
	{
	  quote: "Los bulos (hoaxes) que circulan por internet usan la debilidad del ser humano para asegurar su replicación y distribución. En otras palabras, utilizan los resquicios del Sistema Operativo Humano.", 
	  author: "Stewart Kirkpatrick"
	},
	{
	  quote: "Las organizaciones gastan millones de dólares en firewalls y dispositivos de seguridad, pero tiran el dinero porque ninguna de estas medidas cubre el eslabón más débil de la cadena de seguridad: la gente que usa y administra los ordenadores.", 
	  author: "Kevin Mitnick"
	},
	{
	  quote: "Strive not to be a success, but rather to be of value.", 
	  author: "Albert Einstein"
	},
	{
	  quote: "Two roads diverged in a wood, and I—I took the one…raveled by, And that has made all the difference.", 
	  author: "Robert Frost"
	},
	{
	  quote: "I attribute my success to this: I never gave or took any excuse.", 
	  author: "Florence Nightingale"
	},
	{
	  quote: "You miss 100% of the shots you don’t take.", 
	  author: "Wayne Gretzky"
	},
	{
	  quote: "I’ve missed more than 9000 shots in my career. I’ve over again in my life. And that is why I succeed.", 
	  author: "Michael Jordan"
	},
	{
	  quote: "The most difficult thing is the decision to act, the rest is merely tenacity.", 
	  author: "Amelia Earhart"
	},
	{
	  quote: "Every strike brings me closer to the next home run.", 
	  author: "Babe Ruth"
	},
	{
	  quote: "Definiteness of purpose is the starting point of all achievement.", 
	  author: "W. Clement Stone"
	},
	{
	  quote: "No sabemos lo que queremos y aun así somos responsables de lo que somos. Eso es un hecho", 
	  author: "Jean Paul Sartre"
	},
	{
	  quote: "La creatividad requiere el coraje de dejar ir las certezas", 
	  author: "Erich Fromm"
	},
	{
	  quote: "Tener un hijo, plantar un árbol y escribir un libro es fácil. Lo difícil es criar un niño, regar el árbol y que alguien lea el libro", 
	  author: "Anónimo"
	},
	{
	  quote: "Todos somos aficionados. La vida es tan corta que no da para más", 
	  author: "Charles Chaplin"
	},
	{
	  quote: "La vida es una obra teatral que no importa cuánto haya durado, sino lo bien que haya sido representada", 
	  author: "Séneca"
	},
	{
	  quote: "La perfección se logra no cuando no hay nada más que añadir, sino cuando no hay nada más que quitar", 
	  author: "Antoine de Saint-Exupéry"
	},
	{
	  quote: "Lo que doy, me lo doy. Lo que no doy, me lo quito. Nada para mí que no sea para los otros", 
	  author: "Alejandro Jodorowsky"
	},
	{
	  quote: "Se necesitan dos años para aprender a hablar, y sesenta para aprender a callar", 
	  author: "Ernest Hemingway"
	},
	{
	  quote: "Es una locura odiar a todas las rosas porque una te pinchó. renunciar a todos tus sueños porque uno de ellos no se realizó", 
	  author: "El Principito"
	},
	{
	  quote: "Nunca sabes lo fuerte que eres, hasta que ser fuerte es la única opción que te queda", 
	  author: "Bob Marley"
	},
	{
	  quote: "En la vida hay algo peor que el fracaso: el no haber intentado nada", 
	  author: "Franklin D. Roosvelt"
	},
	{
	  quote: "Pide y recibirás, busca y encontrarás; llama y se te abrirán las puertas", 
	  author: "Anónimo"
	},
	{
	  quote: "El éxito no se mide en el dinero, sino en la diferencia que marca en las personas", 
	  author: "Michelle Obama"
	},
	{
	  quote: "Si tú crees que puedes, puedes. Si tú crees que no puedes, no puedes. Tanto si piensas una cosa como la otra, estás en lo cierto", 
	  author: "Henry Ford"
	},
	{
	  quote: "No hay camino para la verdad, la verdad es el camino", 
	  author: "Mahatma Ghandi"
	},
	{
	  quote: "No hagas a los otros lo que no te gustaría que te hicieran a ti", 
	  author: "Confucio"
	},
	{
	  quote: "Para ser feliz hay que vivir en guerra con las propias pasiones y en paz con las de los demás", 
	  author: "Séneca"
	},
	{
	  quote: "¿Amas la vida? Pues no desperdicies el tiempo, porque es la sustancia de la que está hecha", 
	  author: "Benjamin Franklin"
	},
	{
	  quote: "Una persona que ve la vida a los 50 años igual que a los 20, ha desperdiciado 30 años de vida", 
	  author: "Muhammad Alí"
	},
	{
	  quote: "En el mundo del software, los activos más importantes de la compañía se van a casa todas las noches. Si no se les trata bien, pueden no volver al día siguiente", 
	  author: "Peter Chang"
	},
	{
	  quote: "Si piensas que la tecnología puede solucionar tus problemas de seguridad, está claro que ni entiendes los problemas ni entiendes la tecnología", 
	  author: "Bruce Schneier"
	},
	{
	  quote: "Hay únicamente dos problemas realmente duros en informática: el primero es la invalidación de cachés, y el segundo darles nombres apropiados a las cosas", 
	  author: "Phil Karlton"
	},
	{
	  quote: "Una documentación voluminosa es parte del problema, no de la solución", 
	  author: "Tom DeMarco"
	},
	{
	  quote: "Compatibilidad significa repetir deliberadamente los errores de otras personas", 
	  author: "David Wheeler"
	},
	{
	  quote: "Estas máquinas no tienen sentido común; todavía no han aprendido a pensar, sólo hacen exactamente lo que se les ordena, ni más ni menos. Este hecho es el concepto más difícil de entender la primera vez que se utiliza un ordenador", 
	  author: "Donald Knuth"
	},
	{
	  quote: "La última prueba que me gustaría proponerle para medir la usabilidad es realmente simple: si el sistema fuera una persona, ¿cuánto tiempo tardarías en golpearle en la nariz?", 
	  author: "Tom Carey"
	},
	{
	  quote: "La base de usuarios de sistemas criptográficos fuertes se reduce a la mitad por cada pulsación de tecla o click de ratón requerido para hacerlos funcionar", 
	  author: "Carl Ellison"
	},
	{
	  quote: "Una solución elegante a un problema incorrecto no resuelve nada", 
	  author: "M. Bryce"
	},
	{
	  quote: "Hay tres maneras de adquirir sabiduría: primero, por la reflexión, que es la más noble; segundo, por imitación, que es la más sencilla; y tercero, por la experiencia, que es la más amarga", 
	  author: "Confucio"
	},
	{
	  quote: "No hay parche que corrija la estupidez", 
	  author: "Kevin Mitnick"
	},
	{
	  quote: "Sólo los necios aprenden exclusivamente de sus propios errores; los sabios observan también los errores de otros", 
	  author: "Otto von Bismarck"
	}
	];

	const getNumber = parseInt(Math.random() * QUOTES.length);

	const [textual, setTextual] = useState({cita: QUOTES[0]['quote'], autor: QUOTES[0]['author']})																					

	const handleClick = () => setTextual({	cita: QUOTES[getNumber]['quote'],
											autor: QUOTES[getNumber]['author']})

	return (
		<div className='quotepadding'>			
			<Message color='green' size='large'>			
	      <h1 className='title quotealign'>Máquina de Frases Célebres</h1>      
	      <div id='quote-box' className='quotealign'>
	        <div id='text' className='text'>
	        	{textual.cita}
	        </div>
	        <div id='author' className='quoteauthor'>
	        	{textual.autor}
	      	</div>

	        <div id='buttons' className='buttons'>
	          <a id='tweet-quote' href={`https://twitter.com/intent/tweet?text= ${textual.cita} ${textual.autor}`} target='_blank' rel='noopener noreferrer' title="Postea esta frase en Twitter!">
	            <span>
	              <i className="twitter icon" /> 
	            </span>
	          </a>
	          <button id='new-quote' className='button' onClick={handleClick} >																																									
	          	Siguiente Frase
	          </button>
	        </div>
	      </div>
	    </Message>
    </div>	  
	)
}

export default Quote;