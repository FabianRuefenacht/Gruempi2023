import { Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Zeitplan() {
    const [timetable, setTimetable] = useState({
        "Tabelle": [
            {
                "Data": {
                    "Spielfunktion": "Gruppenspiel",
                    "Anpfiff": "17:00",
                    "Feld": "A",
                    "Team1": "Daten werden geladen",
                    "Endresultat": "-1:-1",
                    "Team2": "Daten werden geladen",
                    "Schiedsrichter": "Daten werden geladen"
                }
            },
            {
                "Data": {
                    "Spielfunktion": "Halbfinale",
                    "Anpfiff": "19:00",
                    "Feld": "B",
                    "Team1": "Daten werden geladen",
                    "Endresultat": "-1:-1",
                    "Team2": "Daten werden geladen",
                    "Schiedsrichter": "Daten werden geladen"
                }
            },
            {
                "Data": {
                    "Spielfunktion": "Finale",
                    "Anpfiff": "19:30",
                    "Feld": "B",
                    "Team1": "Daten werden geladen",
                    "Endresultat": "-1:-1",
                    "Team2": "Daten werden geladen",
                    "Schiedsrichter": "Daten werden geladen"
                }
            }
        ]
    });

    useEffect(() => {
        let IntervalID =
            setInterval(() => {
                axios
                    .get("https://vm26.sourcelab.ch/ZeitplanAPI")
                    .then((response) => {
                        setTimetable(response.data)
                    })
                    .catch((err) => { console.log(err) });
            }, 1000);
        return () => {
            clearInterval(IntervalID);
        };
    })

    let Gruppenspiele = timetable.Tabelle.filter((entry) => entry.Data.Spielfunktion.includes('Gruppenspiel'));

    let Halbfinale = timetable.Tabelle.filter((entry) => entry.Data.Spielfunktion.includes('Halbfinale'));

    let Finale = timetable.Tabelle.filter((entry) => entry.Data.Spielfunktion.includes('Finale'));

    return (
        <>
            <div className='overflowxScroll'>
                <Grid container spacing={2} borderBottom={'1px solid #d0d0d0'} wrap={false}>
                    <Grid item minWidth={'70px'}>
                        <h3>Start</h3>
                    </Grid>
                    <Grid item minWidth={'70px'}>
                        <h3>Feld</h3>
                    </Grid>
                    <Grid item minWidth={'250px'}>
                        <h3>Team</h3>
                    </Grid>
                    <Grid item minWidth={'90px'} >
                        <h3>Resultat</h3>
                    </Grid>
                    <Grid item minWidth={'250px'} >
                        <h3>Team</h3>
                    </Grid>
                    <Grid item minWidth={'250px'} >
                        <h3>Schiedsrichter</h3>
                    </Grid>
                </Grid>
                <h4>Gruppenspiele:</h4>
                {Gruppenspiele.map((GrpPhase, i) => {
                    return (<Grid container paddingBottom={'10px'} key={i} borderBottom={GrpPhase.Data.Feld === 'C' ? '1px solid #d0d0d0' : ''} wrap={false}>
                        <Grid item minWidth={'70px'}>{GrpPhase.Data.Anpfiff}</Grid>
                        <Grid item minWidth={'70px'}>{GrpPhase.Data.Feld}</Grid>
                        <Grid item minWidth={'250px'}>{GrpPhase.Data.Team1}</Grid>
                        <Grid item minWidth={'90px'}>{GrpPhase.Data.Endresultat === '-1:-1' ? '' : GrpPhase.Data.Endresultat}</Grid>
                        <Grid item minWidth={'250px'}>{GrpPhase.Data.Team2}</Grid>
                        <Grid item minWidth={'250px'}>{GrpPhase.Data.Schiedsrichter}</Grid>
                    </ Grid>
                    )
                })}
                <h4>Halbfinale:</h4>
                {Halbfinale.map((SemiFPhase, i) => {
                    return (<Grid container paddingBottom={'10px'} key={i} wrap={false} borderBottom={'1px solid #d0d0d0'}>
                        <Grid item minWidth={'70px'}>{SemiFPhase.Data.Anpfiff}</Grid>
                        <Grid item minWidth={'70px'}>{SemiFPhase.Data.Feld}</Grid>
                        <Grid item minWidth={'250px'}>{SemiFPhase.Data.Team1}</Grid>
                        <Grid item minWidth={'90px'}>{SemiFPhase.Data.Endresultat === '-1:-1' ? '' : SemiFPhase.Data.Endresultat}</Grid>
                        <Grid item minWidth={'250px'}>{SemiFPhase.Data.Team2}</Grid>
                        <Grid item minWidth={'250px'}>{SemiFPhase.Data.Schiedsrichter}</Grid>
                    </ Grid>
                    )
                })}
                <h4>Finale:</h4>
                {Finale.map((Finale, i) => {
                    return (<Grid container paddingBottom={'10px'} key={i} wrap={false} borderBottom={'2px solid #d0d0d0'}>
                        <Grid item minWidth={'70px'}>{Finale.Data.Anpfiff}</Grid>
                        <Grid item minWidth={'70px'}>{Finale.Data.Feld}</Grid>
                        <Grid item minWidth={'250px'}>{Finale.Data.Team1}</Grid>
                        <Grid item minWidth={'90px'}>{Finale.Data.Endresultat === '-1:-1' ? '' : Finale.Data.Endresultat}</Grid>
                        <Grid item minWidth={'250px'}>{Finale.Data.Team2}</Grid>
                        <Grid item minWidth={'250px'}>{Finale.Data.Schiedsrichter}</Grid>
                    </ Grid>
                    )
                })}
            </div>
        </>
    )
}