import { Component } from "react";

class Reglement extends Component {
    render() {
        return (
            <>
                <div className="ReglementComponent">
                    <h1>Reglement</h1>
                    <h2><strong className="romanCount">I</strong>.&nbsp;&nbsp;&nbsp;Allgemein</h2>
                    <ol>
                        <h3>
                            <li type="1">Versicherung</li>
                        </h3>
                        <ol>
                            <li type="a">Versicherungen sind Sache jedes einzelnen Teilnehmendens.</li>
                            <li type="a">Soweit gesetzlich zulässig, lehnt der Veranstalter für sich und seine Helfenden jede Haftung gegenüber den Teilnehmenden ab.</li>
                        </ol>
                        <h3>
                            <li>Wetter</li>
                        </h3>
                        <ol>
                            <li type="a">Bei extremen Wetterverhältnissen wird das Grümpi auf den Ausweichtermin XX.XX.XXXX verschoben.</li>
                            <li type="a">Wenn während des Turnieres extreme Platz- oder Wetterverhältnisse herrschen, kann das OK das Turnier unterbrechen oder abbrechen. Genauere Informationen dazu werden in diesem Fall am Speakertisch bekannt gegeben.</li>
                        </ol>
                        <h3>
                            <li type="1">Reglement</li>
                        </h3>
                        <ol>
                            <li type="a">Über alle hier nicht aufgeführten Fälle entscheidet das OK endgültig.</li>
                        </ol>
                    </ol>
                    <h2><strong className="romanCount">II</strong>.&nbsp;&nbsp;Team</h2>
                    <ol>
                        <h3>
                            <li type="1">Teilnahmebedingung</li>
                        </h3>
                        <ol>
                            <li type="a">Teilnahmeberechtigt sind alle Studierenden und Mitarbeitenden der FHNW Muttenz.</li>
                            <li type="a">Über Ausnahmen kann das OK entscheiden. Anfragen können via Mail <a className="GesuchAuswertige" href="mailto: andrea.bricalli@students.fhnw.ch">hier</a> gestellt werden.</li>
                        </ol>
                        <h3>
                            <li type="1">Teamgrösse</li>
                        </h3>
                        <ol>
                            <li type="a">Ein Team besteht aus 5 Feldspieler:Innen, sowie einem:r Torhüter:In und beliebig vielen Auswechselspieler:Innen.</li>
                            <li type="a">Jede:r Spieler:in kann nur in einem Team eingesetzt werden. Verstösse führen zu Forfait-Niederlagen.</li>
                        </ol>
                        <h3>
                            <li type="1">Startgeld</li>
                        </h3>
                        <ol>
                            <li type="a">Jedes Team muss eine Startgebühr von 25 Franken entrichten. Der Betrag wird pro Team eingezogen.</li>
                            <li type="a">Die Gebühr ist vor Turnierbeginn am Speakertisch zu bezahlen.</li>
                            <li type="a">Das Startgeld kann in Bar oder via Twint bezahlt werden.</li>
                            <li type="a">Kann ein Team - aus welchen Gründen auch immer - das Turnier nicht beenden, wird die Startgebühr nicht erstattet.</li>
                        </ol>
                        <h3>
                            <li type="1">Teamnamen</li>
                        </h3>
                        <ol>
                            <li type="a">Der Teamname darf nur aus alphanumerischen Zeichen und Bindestrichen bestehen.</li>
                            <li type="a">Teamnamen dürfen keine beleidigenden, rassistischen, politischen oder anstössigen Wortteile beinhalten.</li>
                            <li type="a">Teamnamen, welche den oben genannten Bedingungen verstossen oder sittenwidrig sind, können vom OK abgelehnt werden.</li>
                        </ol>
                        <h3>
                            <li type="1">Trikot</li>
                        </h3>
                        <ol>
                            <li type="a">Wir empfehlen, pro Team eine einheitliche Farbe zu wählen. Notfalls können am Speakertisch Überzüge geliehen werden.</li>
                        </ol>
                    </ol>
                    <h2><strong className="romanCount">III</strong>.Turnier</h2>
                    <ol>
                        <h3>
                            <li type="1">Turniermodus</li>
                        </h3>
                        <ol>
                            <li type="a">Das Turnier startet mit einer Gruppenphase. Teams einer Gruppe spielen nur gegen Teams der angehörigen Gruppe.</li>
                            <li type="a">Nach der Gruppenphase startet die KO-Runde. Hier spielen die zwei besten Teams der einzelnen Gruppen.</li>
                            <li type="a">Massgebend für die Rangordnung sind:
                                <ol>
                                    <li type="i">Punktzahl (Sieg: 3 Pkte, Remis: 1 Pkt, Niederlage: 0 Pkte)</li>
                                    <li type="i">Tordifferenz</li>
                                    <li type="i">Direkte Begegnung auf dem Platz</li>
                                    <li type="i">Anzahl der geschossenen Tore</li>
                                    <li type="i">Münzwurf am Speakertisch</li>
                                </ol>
                            </li>
                        </ol>
                        <h3>
                            <li type="1">Spielregeln</li>
                        </h3>
                        <ol>
                            <li type="a">Es wird grundsätzlich nach den Regeln des SFV gespielt. Die Abseits- und die Rückpassregeln sind aufgehoben.</li>
                            <li type="a">Felder und Tore sind verkleinert.</li>
                            <li type="a">Die Spieldauer beträgt 10 Minuten ohne Seitenwechsel.</li>
                            <li type="a">Bei unentschiedenem Spielausgang in den KO-Spielen entscheidet ein Penaltyschiessen. Es gewinnt dasjenige Team, welches von drei Penalties mehr Treffer erzielt hat.
                                Ist der Spielstand nach dem Penaltyschiessen unentschieden, so wird es fortgesetzt, bis das eine Team trifft, während das andere nicht trifft.
                                Ein:e Spieler:in darf erst ein zweites Mal schiessen, wenn bereits alle Teammitglieder einen Penalty geschossen haben. Das Finale wird vor dem Penaltyschiessen erst um 5 Minuten verlängert.</li>
                            <li type="a">Es darf nur in Turn- oder Nockenschuhen (ohne auswechselbare Stollen) gespielt werden.</li>
                            <li type="a">Bei Freistössen muss ein Abstand von mindestens 5 Metern eingehalten werden.</li>
                            <li type="a">Die Entscheidungen des/der Schiedsrichters:in sind endgültig und unanfechtbar.</li>
                            <li type="a">Das Auswechseln kann auch fliegend erfolgen. Der/Die einzuwechselnde Spieler:in muss das Spielfeld am gleichen Ort betreten, wo der/die auszuwechselnde es verlassen hat. Zuwiderhandlungen werden mit indirektem Freistoss geahndet.</li>
                            <li type="a">Ein:e vom Feld verwiesene:r Spieler:in kann im gleichen Spiel nicht mehr ersetzt werden.</li>
                        </ol>
                        <h3>
                            <li type="1">Forfait</li>
                        </h3>
                        <ol>
                            <li type="a">Zu spät oder nicht antretende Mannschaften verlieren das betreffende Spiel mit 0:3 Forfait.</li>
                        </ol>
                        <h3>
                            <li type="1">Preise</li>
                        </h3>
                        <ol>
                            <li type="a">Der Turniersieger erhält einen Wanderpokal.</li>
                        </ol>
                        <h3>
                            <li type="1">Schiedsrichter</li>
                        </h3>
                        <ol>
                            <li type="a">Jedes Team muss einen Schiedsrichter stellen. Dieser pfeift nur Spiele, welche seine Gruppe nicht betreffen.</li>
                        </ol>
                    </ol>
                </div>
            </>
        )
    }

}

export default Reglement;