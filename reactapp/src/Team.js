import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';
import P404 from './P404';



export default function Team() {
    const { id } = useParams();

    const [timetable, setTimetable] = useState({
        "Tabelle": [
            {
                "Data": {
                    "Spielfunktion": "Gruppenspiel",
                    "Anpfiff": "17:00",
                    "Feld": "A",
                    "Team1": "Daten werden geladen",
                    "Endresultat": "0:0",
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
                    "Endresultat": "0:0",
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
                    "Endresultat": "0:0",
                    "Team2": "Daten werden geladen",
                    "Schiedsrichter": "Daten werden geladen"
                }
            }
        ]
    });

    useEffect(() => {
        axios
            .get("https://vm26.sourcelab.ch/ZeitplanAPI")
            .then((response) => {
                setTimetable(response.data)
            })
            .catch((err) => { console.log(err) });
    }, [])

    let Games = timetable.Tabelle.filter((entry) => entry.Data.Team1.includes(`${id}`) || entry.Data.Team2.includes(`${id}`));
    let Schiri = timetable.Tabelle.filter((entry) => entry.Data.Schiedsrichter.includes(`${id}`));

    return (
        <>
        {Games.length === 0 ? <P404 /> :
            <div className='TeamsComponent'>
                <h1>
                    Team {id}
                </h1>
                <h2>Spiele</h2>
                <Grid container>
                    {Games.map((Teamname, i) => {
                        return (
                            <div key={i} className='TeamWrapper'>
                                <Grid item className='TeamViewBox'>
                                    <div>
                                        <h3>
                                            {Teamname.Data.Team1}
                                        </ h3>
                                        <div className='vs'>
                                            vs.
                                        </div>
                                        <h3>
                                            {Teamname.Data.Team2}
                                        </h3>
                                        <h4>
                                            {Teamname.Data.Endresultat === '-1:-1' ? '' : Teamname.Data.Endresultat}
                                        </h4>
                                        <div className='SideInfoPadd'>
                                            {Teamname.Data.Spielfunktion}
                                        </div>
                                        <div className='SideInfo'>
                                            Feld: {Teamname.Data.Feld}
                                        </div>
                                        <div className='SideInfo'>
                                            Anpfiff: {Teamname.Data.Anpfiff}
                                        </div>
                                        <div className='SideInfo'>
                                            Schiedsrichter: {Teamname.Data.Schiedsrichter}
                                        </div>
                                    </div>
                                </Grid>
                            </div>
                        )
                    })}
                </Grid>
                
                <h2>Schiedsrichter in folgenden Spielen</h2>
                <Grid container>
                    {Schiri.map((Teamname, i) => {
                        return (
                            <div key={i} className='TeamWrapper'>
                                <Grid item className='TeamViewBox'>
                                    <div>
                                        <h3>
                                            {Teamname.Data.Team1}
                                        </ h3>
                                        <div className='vs'>
                                            vs.
                                        </div>
                                        <h3>
                                            {Teamname.Data.Team2}
                                        </h3>
                                        <h4>
                                            {Teamname.Data.Endresultat === '-1:-1' ? '' : Teamname.Data.Endresultat}
                                        </h4>
                                        <div className='SideInfoPadd'>
                                            {Teamname.Data.Spielfunktion}
                                        </div>
                                        <div className='SideInfo'>
                                            Feld: {Teamname.Data.Feld}
                                        </div>
                                        <div className='SideInfo'>
                                            Anpfiff: {Teamname.Data.Anpfiff}
                                        </div>
                                        <div className='SideInfo'>
                                            Schiedsrichter: {Teamname.Data.Schiedsrichter}
                                        </div>
                                    </div>
                                </Grid>
                            </div>
                        )
                    })}
                </Grid>
            </div>
            }
        </>
    )
}
