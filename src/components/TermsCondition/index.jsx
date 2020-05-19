import React from 'react';
import PropTypes from 'prop-types';

import H3 from 'components/UI/H3';
import cross from '../../assets/icons/cross.svg';
import graywave from '../../assets/icons/graywaves.svg';
import {
  StyledTermsCondition,
  StyledTermsConditionHeader,
  StyledTermsConditionContent
} from './style';
import Button from '../UI/Button';

const TermsCondition = ({ onClose }) => (
  <StyledTermsCondition>
    <StyledTermsConditionHeader>
      <Button className="cross" onClick={onClose}>
        <img src={cross} alt="close" />
      </Button>
      <span className="terms">Allmänna villkor</span>
    </StyledTermsConditionHeader>
    <StyledTermsConditionContent>
      <img src={graywave} alt="wave" />
      <div className="text">
        <H3>Gäller från och med 18 maj </H3>

        <p>
          De allmänna villkoren är ett juridiskt avtal mellan dig och mobilapplikationen GÅ MAMA!,
          de servrar som används av applikationen och de datorfiler som lagras på förekommande
          servrar.
        </p>

        <H3>1. Godkännande av villkor</H3>

        <p>
          Vänligen läs igenom avtalet noggrant innan du godkänner villkoren. Vi kan komma att ändra
          avtalet emellanåt. Vid en sådan förändring kommer vi att meddela dig via e-post eller via
          appen. Du kommer då att på nytt behöva läsa igenom och godkänna villkoren.
        </p>

        <H3>2. Registrering och behörighet</H3>

        <p>
          För att kunna använda GÅ MAMA! krävs ett konto. För att skapa ett konto kommer du att bli
          ombedd att ange viss personlig information. Nedan specificeras den exakta datan som kommer
          att samlas in. Vid en registering godkänner du till att uppge korrekta och fullständiga
          uppgifter och du ansvarar även för att uppdatera uppgifterna omgående när ändringar
          uppstår. För att skapa ett konto och komma åt appen måste du vara minst 16 år. Om du är
          under 18 måste din förälder eller vårdnadshavare granska och acceptera villkoren i
          avtalet.
        </p>

        <H3>2. Typ av data</H3>

        <p>Vi kommer att samla in personuppgifter i form av; </p>
        <ul>
          <li>Förnamn;</li>
          <li>Födelsedatum (ÅÅMMDD);</li>
          <li>E-post;</li>
          <li>Kön (valfritt);</li>
          <li>Svenskanivå; </li>
          <li>Profilbild. </li>
        </ul>

        <H3>3. Syfte med insamling av persondata</H3>

        <p>
          Syftet med att samla in persondata är för att skapa en trygghet i appen och GÅ MAMA!
          gemenskapen. Namn, ålder, kön och profilbild ger andra medlemmar en indikation på vem du
          är. Svenskanivå anges då appen syftar till att föra samman mammor som talar olika nivåer
          av svenska, för att låta medlemmar utvecklas på ett språkligt plan. Vidare syftar
          persondatan att ligga till grund för att analysera, driva, underhålla och förbättra appen,
          lägga till nya funktioner och tjänster och för att stödja befintliga funktioner i appen.
        </p>
        <H3>4. Tidsperiod</H3>
        <p>
          Vi kommer att spara dina personuppgifter och historik i appen i 12 månader efter senaste
          inloggning. Efter 12 månaders inaktivitet raderas ditt konto och medföljande uppgifter.
        </p>
        <H3>5. Användning av appen</H3>
        <p>
          Du är ansvarig för all egen aktivitet i appen och du ska följa alla lokala, statliga,
          nationella och internationella lagar och förordningar. Att bryta mot dessa lagar och
          regler är lika med att bryta mot avtalet och ditt konto kommer att stängas av från GÅ
          MAMA! Vidare är du införstådd med att du ALDRIG FÅR:
        </p>
        <ol type="a">
          <li>tillåta andra använda ditt konto på GÅ MAMA!;</li>
          <li>
            använda GÅ MAMA! för att annonsera, erbjuda eller överföra kommersiell reklam, vilket
            innefattar kedjebrev, skräppost, eller upprepande meddelande till andra medlemmar;
          </li>
          <li>använda kontot i olagliga ändamål;</li>
          <li>ladda upp eller överföra kommunikation som bryter mot någon annans rättighet;</li>
          <li>
            ladda upp media eller förmedla innehåll som innefattar hat, missbruk, sexuellt eller är
            stötande på något vis.
          </li>
        </ol>

        <H3>7. Lösenord</H3>
        <p>
          Du är ansvarig för att vidta rimliga åtgärder för att säkerställa att ingen obehörig får
          tillgång till ditt lösenord på appen. Det är ditt eget ansvar att kontrollera att ingen
          obehörig använder ditt konto. Vid misstankar om att någon obehörig fått åtkomst till ditt
          konto kontakta GÅ MAMA! direkt på gamama@gmail.com
        </p>
        <H3>8. Integritetsrättigheter </H3>

        <h4>Korrigering av personuppgifter:</h4>
        <p>
          Om du anser att dina personuppgifter är felaktiga har du rätt att kontakta oss och be oss
          korrigera dem.
        </p>
        <h4>Informationsrättigheter och åtkomst till dina personuppgifter:</h4>
        <p>
          Appen ger dig möjlighet att komma åt dina personuppgifter i appen. Du har rätt att begära
          information om vilka personuppgifter vi har om dig, få tillgång till alla dina
          personuppgifter och få en kopia av dem.
        </p>
        <h4>Radering av personuppgifter: </h4>
        <p>
          Du har rätt att kontakta oss och be oss oss radera personuppgifter om du återtar samtycke
          till bearbetning och lagring.
        </p>
        <p>Kontaktuppgifter: gamama@gmail.com</p>
      </div>
    </StyledTermsConditionContent>
  </StyledTermsCondition>
);

TermsCondition.propTypes = {
  onClose: PropTypes.func
};

export default TermsCondition;
