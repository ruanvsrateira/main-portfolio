import { ButtonOutlined } from "../elements/ButtonOutlined";
import "./Apresentation.scss";

export const Apresentation = () => {
  return (
    <section id="apresentation">
      <div className="apresentation-container">
        <div className="apresentation-container-left">
          <h2>
            Bem-vindo ao meu <span>Portfólio</span>
          </h2>
          <h1>Olá, Sou Ruan Victor</h1>
          <p>
            Tenho experiência em projetos utilizando ferramentas como NodeJS,
            NestJS, ReactJS, NextJS. Adquiridas em cursos extra-curriculares e
            também nos meus cursos acadêmicos; Trabalhando com TI aprendi como
            funcionam as coisas debaixo dos panos, como protocólos de rede e
            funcionamento de hardware; Trabalhando como Fiscal aprendi processos
            de faturamento e calculo de impostos; Participei de diversos
            bootcamps de tecnologias de empresas como FullCycle, DIO
          </p>
          <ButtonOutlined
            text="Conecte-se Comigo"
            link="https://linkedin.com/in/ruan-victor-rateira"
          />
        </div>
        <div className="apresentation-container-right">
          <div className="border-line">
            <div className="border-line">
              <img
                src="https://avatars.githubusercontent.com/u/101360876?v=4"
                alt="Imagem Perfil GitHub"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
