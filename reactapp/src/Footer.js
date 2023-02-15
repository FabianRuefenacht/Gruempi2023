import { Component } from "react";
import Logo_Gruempi_symbol_colorvektor from './Data/Logo/SVG/Logo_Gruempi_symbol_colorvektor.svg'

class Footer extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        Impressum: true,
        Datenschutz: false
      }
    }

    render() {
        return(
            <div className="Footer">
                <img src={Logo_Gruempi_symbol_colorvektor} alt='Logo Grümpi 2023' />
                <div>
                    <p>
                        <a href="https://github.com/FabianRuefenacht/Gruempi2023" target="_blank" rel="noreferrer">©Grümpi2023</a>
                    </p>
                    <p className="toggleImpressum" onClick={() => this.setState({Impressum: true, Datenschutz: false})}>
                        Impressum
                    </p>
                    <p className="toggleDatenschutz" onClick={() => this.setState({Datenschutz: true, Impressum: false})}>
                        Datenschutz
                    </p>
                </div>
                {this.state.Impressum &&
                <div className="FooterImpressum">
                    <div>
                        <h3>Kontakt</h3>
                        <p>Studierendenverein Geomatik 2021</p>
                        <p>c/o Institut Geomatik</p>
                        <p>Hofackerstrasse 30</p>
                        <p>4132 Muttenz</p>
                    </div>
                    <div>
                        <h3>Noch Fragen?</h3>
                        <p>Fragen zum Grümpi:</p>
                        <a href="mailto: andrea.bricalli@students.fhnw.ch">andrea.bricalli@students.fhnw.ch</a>
                        <p>Fragen zur Website:</p>
                        <a href="mailto: fabian.ruefenacht@students.fhnw.ch">fabian.ruefenacht@students.fhnw.ch</a>
                    </div>
                    <div>
                        <h3>Haftungsausschluss</h3>
                        <p className="FooterEnd">Für Schäden materieller oder immaterieller Art, welche im Zusammenhang mit der Nutzung oder nicht
                        Nutzung der angebotenen Informationen, durch Missbrauch der Verbindungen oder durch technische Störungen 
                        entstehen, übernimmt die Klasse G2021 keine Haftung.</p>
                    </div>
                </div>
                }
                {this.state.Datenschutz &&
                <div className="FooterDatenschutz">
                    <h3>Datenschutz</h3>
                    <p>Die Datenschutzerklärung informiert dich über die Art, den Umfang und den Zweck der Verarbeitung von personenbezogenen Daten bei der Nutzung unserer Webseite.</p>
                    <h3>Haftungsausschluss</h3>
                    <p>Für das Webhosting unserer Webseiten nutzen wir die Hosting-Dienstleistungen der hosttech GmbH, mit welcher wir auch einen Vertrag zur Auftragsdatenverarbeitung abgeschlossen haben. Der Serverstandort liegt in der Schweiz.</p>
                    <h3>Cookies</h3>
                    <p>Als „Cookies“ werden kleine Textdateien bezeichnet, die auf deinem Rechner gespeichert werden. Cookies enthalten keine Viren und richten keinen Schaden an. Ein Cookie dient primär dazu, unsere Angaben zu einem Nutzer (bzw. dem Gerät auf dem das Cookie gespeichert ist) während oder auch nach seinem Besuch auf einer Webseite zu speichern.
Diese Webseite nutzt „Session-Cookies“, welche nach dem Verlassen der Webseite und dem Schliessen des Browsers wieder gelöscht werden. Zudem werden «permanente» Cookies eingesetzt, welche auch nach dem Schliessen des Browsers noch vorhanden sind. Diese dienen unter anderem dazu, dich auch nach mehreren Tagen wiederzuerkennen.
Falls du nicht willst, dass Cookies auf deinem Rechner gespeichert werden, kannst du die entsprechenden Optionen in den Einstellungen deines Browsers ändern. In den Systemeinstellungen des Brosers können ausserdem bereits gespeicherte Cookies gelöscht werden. Der Ausschluss von Cookies kann aber zu Funktionseinschränkungen bei der Nutzung dieser Webseite führen.</p>
                    <h3>Social Wall</h3>
                    <p className="FooterEnd">Um die Instagram-Beiträge anzuzeigen, wird das React-Social-Media-Plugin verwendet. Dieses übermittelt die Cookies an Instagram.</p>
                </div>
                }
            </div>
        )
    }
}

export default Footer;