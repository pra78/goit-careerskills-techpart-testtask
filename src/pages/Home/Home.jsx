import { HeaderTextStyled, HomePageStyled, NavBarStyled, NavLinkStyled, PrintScreenStyled, TechStackStyled, TextPageStyled } from "./Home.styled";

const Home = () => {
    return (<HomePageStyled>
        <NavBarStyled>
            <div></div>
            <HeaderTextStyled>HOME</HeaderTextStyled>
            <NavLinkStyled to="/tweets" >Tweets</NavLinkStyled>
        </NavBarStyled>
        <TextPageStyled>

            <h4 align="center">A minimal tweet cards app with some interactivity when a button is clicked.</h4>

            <TechStackStyled align="center">
                <a href="https://img.shields.io/badge/stack-React-blue">
                    <img src="https://img.shields.io/badge/stack-React-blue" alt="react" />
                </a>
                <a href="https://img.shields.io/badge/stack-JS-brightgreen">
                    <img src="https://img.shields.io/badge/stack-JS-brightgreen" alt="JS" />
                </a>
            </TechStackStyled>

            <TechStackStyled>Mockup: <a href="https://www.figma.com/file/zun1oP6NmS2Lmgbcj6e1IG/Test?node-id=0%3A1&t=VoiYTfiXggVItgVd-1">https://www.figma.com/file/zun1oP6NmS2Lmgbcj6e1IG/Test?node-id=0%3A1&t=VoiYTfiXggVItgVd-1</a></TechStackStyled>

            <PrintScreenStyled src="https://textbook.edu.goit.global/lms-career-homework/uk/img/image-1.jpg" alt="printscreen of the app" />

            <h3>Key Features</h3>
            <ul>
                <li>Interactive - click Follow button => the button text is changed to Following.</li>
                <li>The button color is also changed.</li>
                <li>The followers quantity is added your count.</li>
                <li>When the page is refreshed the user's final result is pertained.</li>
                <li>When clicking the button again the color and text are changed back to their initial state.</li>
                <li>The followers quantity is also set back (by minus 1).</li>
                <li>Personal backend is attached to this app by UI-service mockapi.io.</li>
            </ul>

            <h3>How To Use</h3>
            <p>
                To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:
                <code>
                    <br />```bash
                    <br /># Clone this repository
                    <br />$ git clone https://github.com/pra78/goit-careerskills-techpart-testtask.git
                    <br />
                    <br /># Go into the repository
                    <br />$ cd goit-careerskills-techpart-testtask
                    <br />
                    <br /># Install dependencies
                    <br />$ npm install
                    <br />
                    <br /># Run the app
                    <br />$ npm start
                    <br />```
                </code>
            </p>
        </TextPageStyled>
    </HomePageStyled>);
};

export default Home;