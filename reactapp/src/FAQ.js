import { Component } from "react";
import Map from "./Map";

class FAQ extends Component {
    render() {
        return (
            <>
                <div className="FAQComponent">
                    <h1>FAQ</h1>
                    <h2>Wo findet das Grümpi 2023 statt?</h2>
                    <p>Das Grümpi findet auch in diesem Jahr wieder auf der Spielwiese Kriegacker statt.</p>
                    <Map zoom={17} center={[47.534025, 7.641420]} />
                    <h2>Wann findet das FHNW Grümpi 2023 statt?</h2>
                    <p>Das Grümpi findet am 11. Mai 2022 statt, der Anpfiff zum ersten Spiel ist voraussichtlich um 17.00 Uhr.</p>
                    <p>Wenn das Wetter das Fussballspielen nicht zulässt, ist der Ausweichtermin am 25.Mai 2023.</p>
                    <h2>Wer darf am Grümpi teilnehmen?</h2>
                    <p>
                        Wie auch in den letzten Jahren dürfen alle Studierenden und Mitarbeitenden der FHNW Muttenz teilnehmen.
                        Wer nicht an der FHNW Muttenz studiert oder arbeitet, aber dennoch ein Team stellen will, kann <a className="GesuchAuswertige" href="mailto: andrea.bricalli@students.fhnw.ch">hier</a> um eine Genehmigung bitten.
                    </p>
                    <h2>Wie viele Frauen müssen in einem Team sein?</h2>
                    <p>Da die Verteilung der Geschlechter über die verschiedenen Studiengänge sehr unterschiedlich ist, gibt es keine feste Regel dazu. Wir werden aber alles daran setzen, dass die Gruppenphase möglichst ausgeglichen sein wird.</p>
                    <h2>Wer organisiert das Grümpi?</h2>
                    <p>Das Grümpi wird dieses Jahr vom Studierendenverein Geomatik 2021 organisiert. Dieser Verein wurde von der Klasse G2021
                        (Bachelorstudiengang Geomatik, 4. Semester) mit dem Zweck der Organisation des Grümpi's gegründet.
                    </p>
                    <h2>Was kostet die Teilnahme am Grümpi?</h2>
                    <p>Pro Team ist eine Startgebühr von 30 Franken zu entrichten. Der Betrag kann vor Turnierbeginn am Speakertisch in Bar oder mit Twint gezahlt werden.</p>
                    <h2>Noch weitere Fragen?</h2>
                    <p>Weitere Fragen zum Turnier können <a className="GesuchAuswertige" href="mailto: andrea.bricalli@students.fhnw.ch">hier</a> gestellt werden.</p>
                </div>
            </>
        )
    }
}

export default FAQ;