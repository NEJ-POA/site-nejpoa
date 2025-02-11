import React, { useState } from "react";

import { 
  Container, 
  ServicosRede, 
  Foto, 
  ListaArea,
  Areas,
  DropDown,
  DropDownIcon,
  LegendaLista,
  Adm,
  Agro,
  Contabeis,
  Design,
  Direito,
  Engenharia,
  Geo,
  Quimica,
  Saude,
  Ri,
  CloseDropDown,
  DetalhesEJs,
  ShowEJs,
  LogoEJ,
} from "./styles";

import Header from "../../components/Header";
import Contato from "../../components/Contato";

import rede from "../../assets/rede-1.png";

import atlantica  from "../../assets/logos/Atlantica.png"
import catalisa  from "../../assets/logos/Catalisa.png"
import ceanut  from "../../assets/logos/Ceanut.png"
import chemsul  from "../../assets/logos/Chemsul.png"
import cincolinha  from "../../assets/logos/Cincolinha.png"
import ejminas  from "../../assets/logos/EJMinas.png"
import eme  from "../../assets/logos/EME.png"
import epr  from "../../assets/logos/EPR.png"
import eali  from "../../assets/logos/Eali.png"
import enfitec  from "../../assets/logos/Enfitec.png"
import enger  from "../../assets/logos/Enger.png"
import equilibrio  from "../../assets/logos/Equilibrio.png"
import escritorio  from "../../assets/logos/Escritorio.png"
import esfera  from "../../assets/logos/Esfera.png"
import faisca  from "../../assets/logos/Faisca.png"
import hidrologica  from "../../assets/logos/Hidrologica.png"
import ide  from "../../assets/logos/IDE.png"
import incentive  from "../../assets/logos/Incentive.png"
import irradiation  from "../../assets/logos/Irradiation.png"
import legacy  from "../../assets/logos/Legacy.png"
import mova  from "../../assets/logos/MOVA.png"
import mandala  from "../../assets/logos/Mandala.png"
import neodonto  from "../../assets/logos/Neodonto.png"
import nutriacao  from "../../assets/logos/Nutriacao.png"
import otmza  from "../../assets/logos/Otmza.png"
import ps  from "../../assets/logos/PS.png"
import petra  from "../../assets/logos/Petra.png"
import quimlabor  from "../../assets/logos/Quimlabor.png"
import relab  from "../../assets/logos/Relab.png"
import renova  from "../../assets/logos/Renova.png"
import sinc  from "../../assets/logos/Sinc.png"
import { Helmet } from "react-helmet";

const Rede: React.FC = () => {
  const [active, setActive] = useState(true);
  const [rotate, setRotate] = useState(true);
  const handleClick = () => {
    setActive(!active);
    setRotate(!rotate);
  }
  const [nome, setNome] = useState('');
  const [administracao, setAdministracao] = useState(true);
  const [agronomia, setAgronomia] = useState(false);
  const [contabilidade, setContabilidade] = useState(false);
  const [design, setDesign] = useState(false);
  const [direito, setDireito] = useState(false);
  const [engenharia, setEngenharia] = useState(false);
  const [geociencias, setGeociencias] = useState(false);
  const [quimica, setQuimica] = useState(false);
  const [saude, setSaude] = useState(false);
  const [ri, setRi] = useState(false);
  const print0 = () => {
    setNome('Administração');
    setAdministracao(true);
    setAgronomia(false);
    setContabilidade(false);
    setDesign(false);
    setDireito(false);
    setEngenharia(false);
    setGeociencias(false);
    setQuimica(false);
    setSaude(false);
    setRi(false);
  }
  const print1 = () => {
    setNome('Agronomia');
    setAdministracao(false);
    setAgronomia(true);
    setContabilidade(false);
    setDesign(false);
    setDireito(false);
    setEngenharia(false);
    setGeociencias(false);
    setQuimica(false);
    setSaude(false);
    setRi(false);
  }
  const print2 = () => {
    setNome('Contabilidade');
    setAdministracao(false);
    setAgronomia(false);
    setContabilidade(true);
    setDesign(false);
    setDireito(false);
    setEngenharia(false);
    setGeociencias(false);
    setQuimica(false);
    setSaude(false);
    setRi(false);
  }
  const print3 = () => {
    setNome('Design');
    setAdministracao(false);
    setAgronomia(false);
    setContabilidade(false);
    setDesign(true);
    setDireito(false);
    setEngenharia(false);
    setGeociencias(false);
    setQuimica(false);
    setSaude(false);
    setRi(false);
  }
  const print4 = () => {
    setNome('Direito');
    setAdministracao(false);
    setAgronomia(false);
    setContabilidade(false);
    setDesign(false);
    setDireito(true);
    setEngenharia(false);
    setGeociencias(false);
    setQuimica(false);
    setSaude(false);
    setRi(false);
  }
  const print5 = () => {
    setNome('Engenharia');
    setAdministracao(false);
    setAgronomia(false);
    setContabilidade(false);
    setDesign(false);
    setDireito(false);
    setEngenharia(true);
    setGeociencias(false);
    setQuimica(false);
    setSaude(false);
    setRi(false);
  }
  const print6 = () => {
    setNome('Geociências');
    setAdministracao(false);
    setAgronomia(false);
    setContabilidade(false);
    setDesign(false);
    setDireito(false);
    setEngenharia(false);
    setGeociencias(true);
    setQuimica(false);
    setSaude(false);
    setRi(false);
  }
  const print7 = () => {
    setNome('Química');
    setAdministracao(false);
    setAgronomia(false);
    setContabilidade(false);
    setDesign(false);
    setDireito(false);
    setEngenharia(false);
    setGeociencias(false);
    setQuimica(true);
    setSaude(false);
    setRi(false);
  }
  const print8 = () => {
    setNome('Saúde');
    setAdministracao(false);
    setAgronomia(false);
    setContabilidade(false);
    setDesign(false);
    setDireito(false);
    setEngenharia(false);
    setGeociencias(false);
    setQuimica(false);
    setSaude(true);
    setRi(false);
  }
  const print9 = () => {
    setNome('Relações Internacionais');
    setAdministracao(false);
    setAgronomia(false);
    setContabilidade(false);
    setDesign(false);
    setDireito(false);
    setEngenharia(false);
    setGeociencias(false);
    setQuimica(false);
    setSaude(false);
    setRi(true);
  }

  return (
    <Container>
      <Header />

      <Helmet>
          <title>NEJ POA - Rede</title>
          <meta property="og:image" content="../../assets/nejpoa.png" />
        </Helmet>
      <CloseDropDown 
        className={active ? "" : "active"}
        onClick={handleClick}/>

      <h1>Rede NEJ POA</h1>
      <Foto src={rede} />
      <h2>Nossa Rede é muito grande e diversa, selecione abaixo a área de seu interesse.</h2>

      <ListaArea onClick={handleClick}>
        <LegendaLista>
          <p>{nome ? nome : "Administração"}</p>
          <DropDownIcon className={rotate ? "" : "rotate"} />
        </LegendaLista>
        <DropDown className={active ? "" : "active"}>
          <Areas onClick={print0}>Administração</Areas>
          <Areas onClick={print1}>Agronomia</Areas>
          <Areas onClick={print2}>Contabilidade</Areas>
          <Areas onClick={print3}>Design</Areas>
          <Areas onClick={print4}>Direito</Areas>
          <Areas onClick={print5}>Engenharia</Areas>
          <Areas onClick={print6}>Geociências</Areas>
          <Areas onClick={print7}>Química</Areas>
          <Areas onClick={print8}>Saúde</Areas>
          <Areas onClick={print9}>Relações Internacionais</Areas>
        </DropDown>
      </ListaArea>

      <>
        <Adm className={administracao ? "administracao" : ""}>
          <ShowEJs>
            <DetalhesEJs>
              <a href="https://www.instagram.com/legacypucrs/">
                <LogoEJ src={legacy} />
              </a>
              <h1>Legacy</h1>
              <p>Consultoria Empresarial<br/>PUC</p>
            </DetalhesEJs>
            <DetalhesEJs>
              <a href="https://www.instagram.com/ps.junior/">
                <LogoEJ src={ps} />
              </a>
              <h1>PS Junior</h1>
              <p>Consultoria empresarial<br/>UFRGS</p>
            </DetalhesEJs>
            <DetalhesEJs>
              <a href="https://www.instagram.com/relabjrconsultoria/">
                <LogoEJ src={relab} />
              </a>
              <h1>Relab</h1>
              <p>Gestão e Negócios<br/>Unisinos</p>
            </DetalhesEJs>
          </ShowEJs>
        </Adm>
        <Agro className={agronomia ? "agronomia" : ""}>
          <ShowEJs>
            <DetalhesEJs>
              <a href="https://www.instagram.com/incentivejunior/">
                <LogoEJ src={incentive} />
              </a>
              <h1>Incentive</h1>
              <p>Agronomia<br/>UFRGS</p>
            </DetalhesEJs>
          </ShowEJs>
        </Agro>
        <Contabeis className={contabilidade ? "contabilidade" : ""}>
          <ShowEJs>
            <DetalhesEJs>
              <a href="https://www.instagram.com/equilibrioufrgs/">
                <LogoEJ src={equilibrio} />
              </a>
              <h1>Equilíbrio</h1>
              <p>Contabilidade<br/>UFRGS</p>
            </DetalhesEJs>
          </ShowEJs>
        </Contabeis>
        <Design className={design ? "design" : ""}>
          <ShowEJs>
            <DetalhesEJs>
              <a href="https://www.instagram.com/faiscadesignjr/">
                <LogoEJ src={faisca} />
              </a>
              <h1>Faísca</h1>
              <p>Design<br/>UFRGS</p>
            </DetalhesEJs>
          </ShowEJs>
        </Design>
        <Direito className={direito ? "direito" : ""}>
          <ShowEJs>
            <DetalhesEJs>
              <a href="https://www.instagram.com/ejcirnelima/">
                <LogoEJ src={escritorio} />
              </a>
              <h1>Escritório Ruy Cirne Lima</h1>
              <p>Direito<br/>UFRGS</p>
            </DetalhesEJs>
          </ShowEJs>
        </Direito>
        <Engenharia className={engenharia ? "engenharia" : ""}>
          <ShowEJs>
            <DetalhesEJs>
              <a href="https://www.instagram.com/catalisajr/">
                <LogoEJ src={catalisa} />
              </a>
              <h1>Catalisa</h1>
              <p>Engenharia química<br/>UFRGS</p>
            </DetalhesEJs>
            <DetalhesEJs>
              <a href="https://www.instagram.com/ejminas/">
                <LogoEJ src={ejminas} />
              </a>
              <h1>EJMinas</h1>
              <p>Engenharia de minas<br/>UFRGS</p>
            </DetalhesEJs>
            <DetalhesEJs>
              <a href="https://www.instagram.com/esferajr/">
                <LogoEJ src={esfera} />
              </a>
              <h1>Esfera Junior</h1>
              <p>Engenharia Civil e Arquitetura<br/>UFRGS</p>
            </DetalhesEJs>
            <DetalhesEJs>
              <a href="https://www.instagram.com/emejrufrgs/">
                <LogoEJ src={eme} />
              </a>
              <h1>EME Júnior</h1>
              <p>Engenharia de materiais<br/>UFRGS</p>
            </DetalhesEJs>
          </ShowEJs>
          <ShowEJs>
            <DetalhesEJs>
              <a href="https://www.instagram.com/eprconsultoria/">
                <LogoEJ src={epr} />
              </a>
              <h1>EPR Consultoria</h1>
              <p>Engenharia de produção<br/>UFRGS</p>
            </DetalhesEJs>
            <DetalhesEJs>
              <a href="https://www.instagram.com/ealiconsultoriajr/">
                <LogoEJ src={eali} />
              </a>
              <h1>Eali</h1>
              <p>Engenharia de alimentos<br/>UFRGS</p>
            </DetalhesEJs>
            <DetalhesEJs>
              <a href="https://www.instagram.com/enfitecjunior/">
                <LogoEJ src={enfitec} />
              </a>
              <h1>Enfitec Júnior</h1>
              <p>Engenharia física<br/>UFRGS</p>
            </DetalhesEJs>
          </ShowEJs>
          <ShowEJs>
            <DetalhesEJs>
              <a href="https://www.instagram.com/engersolutionej/">
                <LogoEJ src={enger} />
              </a>
              <h1>Enger Solutions</h1>
              <p>Engenharia agroindustrial<br/>FURG-SAP</p>
            </DetalhesEJs>
            <DetalhesEJs>
              <a href="https://www.instagram.com/hidrologica/">
                <LogoEJ src={hidrologica} />
              </a>
              <h1>Hidrológica</h1>
              <p>Engenharia hídrica<br/>UFRGS</p>
            </DetalhesEJs>
            <DetalhesEJs>
              <a href="https://www.instagram.com/ide_jr/">
                <LogoEJ src={ide} />
              </a>
              <h1>IDE</h1>
              <p>Ciência e engenharia de computação<br/>UFRGS</p>
            </DetalhesEJs>
          </ShowEJs>
          <ShowEJs>
            <DetalhesEJs>
              <a href="https://www.instagram.com/ejmandala/">
                <LogoEJ src={mandala} />
              </a>
              <h1>Mandala</h1>
              <p>Engenharia ambiental<br/>UFRGS</p>
            </DetalhesEJs>
            <DetalhesEJs>
              <a href="https://www.instagram.com/otmza.ej/">
                <LogoEJ src={otmza} />
              </a>
              <h1>OTMZA Júnior</h1>
              <p>Engenharia mecânica<br/>UFRGS</p>
            </DetalhesEJs>
            <DetalhesEJs>
              <a href="https://www.instagram.com/renova_jr/">
                <LogoEJ src={renova} />
              </a>
              <h1>Renova Júnior</h1>
              <p>Engenharia de energia<br/>UFRGS</p>
            </DetalhesEJs>
          </ShowEJs>
          <ShowEJs>
            <DetalhesEJs>
              <a href="https://www.instagram.com/sincjunior/">
                <LogoEJ src={sinc} />
              </a>
              <h1>Sinc Júnior</h1>
              <p>Engenharia elétrica & engenharia de controle e automação<br/>UFRGS</p>
            </DetalhesEJs>
          </ShowEJs>
        </Engenharia>
        <Geo className={geociencias ? "geociencias" : ""}>
          <ShowEJs>
            <DetalhesEJs>
              <a href="https://www.instagram.com/petrajrpoa/">
                <LogoEJ src={petra} />
              </a>
              <h1>Petra</h1>
              <p>Geociências<br/>UFRGS</p>
            </DetalhesEJs>
          </ShowEJs>
        </Geo>
        <Quimica className={quimica ? "quimica" : ""}>
          <ShowEJs>
            <DetalhesEJs>
              <a href="https://www.instagram.com/quimlaborjr/">
                <LogoEJ src={quimlabor} />
              </a>
              <h1>Quimlabor</h1>
              <p>Química<br/>UFRGS</p>
            </DetalhesEJs>
          </ShowEJs>
        </Quimica>
        <Saude className={saude ? "saude" : ""}>
          <ShowEJs>
            <DetalhesEJs>
              <a href="https://www.instagram.com/ceanut.ej/">
                <LogoEJ src={ceanut} />
              </a>
              <h1>CEANUT</h1>
              <p>Nutrição<br/>UFRGS</p>
            </DetalhesEJs>
            <DetalhesEJs>
              <a href="https://www.instagram.com/chemsul/">
                <LogoEJ src={chemsul} />
              </a>
              <h1>Chemsul</h1>
              <p>Química medicinal<br/>UFCSPA</p>
            </DetalhesEJs>
            <DetalhesEJs>
              <a href="https://www.instagram.com/cincolinhajr/">
                <LogoEJ src={cincolinha} />
              </a>
              <h1>Cincolinha</h1>
              <p>Biotecnologia<br/>UFRGS</p>
            </DetalhesEJs>
          </ShowEJs>
          <ShowEJs>
            <DetalhesEJs>
              <a href="https://www.instagram.com/irradiationjr/">
                <LogoEJ src={irradiation} />
              </a>
              <h1>Irradiation</h1>
              <p>Física médica<br/>UFCSPA</p>
            </DetalhesEJs>
            <DetalhesEJs>
              <a href="https://www.instagram.com/movaej/">
                <LogoEJ src={mova} />
              </a>
              <h1>MOVA</h1>
              <p>Fisioterapia<br/>UFCSPA</p>
            </DetalhesEJs>
            <DetalhesEJs>
              <a href="https://www.instagram.com/neodontojr/">
                <LogoEJ src={neodonto} />
              </a>
              <h1>Neodonto</h1>
              <p>Odontologia<br/>UFRGS</p>
            </DetalhesEJs>
          </ShowEJs>
          <ShowEJs>
            <DetalhesEJs>
              <a href="https://www.instagram.com/ejnutriacao/">
                <LogoEJ src={nutriacao} />
              </a>
              <h1>Nutriação</h1>
              <p>Nutrição<br/>UFCSPA</p>
            </DetalhesEJs>
          </ShowEJs>
        </Saude>
        <Ri className={ri ? "ri" : ""}>
          <ShowEJs>
            <DetalhesEJs>
              <a href="https://www.instagram.com/atlantica.consultoria/">
                <LogoEJ src={atlantica} />
              </a>
              <h1>Atlântica</h1>
              <p>Relações internacionais<br/>UFRGS</p>
            </DetalhesEJs>
          </ShowEJs>
        </Ri>
      </>
      
      <a href="https://drive.google.com/file/d/1J0TXwQU3i9M6irdnYu4scAdXgDTCqAyJ/view?usp=drive_link">
        <ServicosRede><p>Veja os serviços da nossa rede!</p></ServicosRede>
      </a>
      <Contato />
    </Container>
  );
};

export default Rede;
