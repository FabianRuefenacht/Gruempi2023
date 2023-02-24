import React, { useEffect, useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Anmeldung() {
    const [showForm, setShowForm] = useState(true)

    const [Teamname, setTeamname] = useState(' ');
    const [captain, setCaptain] = useState(' ');
    const [mail, setMail] = useState(' ');
    const [male, setMale] = useState(' ');
    const [female, setFemale] = useState(' ');
    const [div, setDiv] = useState(' ');
    const [color, setColor] = useState(' ');

    const Anmeldeschluss = new Date(2023, 4, 1, 0, 0, 0, 1);

    const [Teams, setTeams] = useState({
        "registered": [
            {
                "createdAt": "2023-02-15T13:04:42.527Z",
                "id": "ns29r4jzhR8XAGAIrkj5K",
                "data": {
                    "Captain": "Max Mustermann",
                    "Farbe": "#a13a3a",
                    "Teamname": "Placeholder2",
                    "div": "6",
                    "female": "3",
                    "mail": "example@example.com",
                    "male": "0"
                },
                "formId": "yj6MwGOh"
            },
            {
                "createdAt": "2023-02-15T13:03:15.276Z",
                "id": "WSPQQV6JwNhTWTbTpNwEc",
                "data": {
                    "Captain": "Max Mustermann",
                    "Farbe": "#ffffff",
                    "Teamname": "Placeholder1",
                    "div": "1",
                    "female": "0",
                    "mail": "example@example.com",
                    "male": "9"
                },
                "formId": "yj6MwGOh"
            }
        ]
    });

    axios
        .get("https://vm26.sourcelab.ch/TeamsGruempiAPI")
        .then((response) => {
            setTeams({ registered: response.data })
        })
        .catch((err) => { console.log(err) })

    useEffect(() => {
        const TeamNM = window.localStorage.getItem('TeamnameKey');
        setTeamname(TeamNM);
        const CaptNM = window.localStorage.getItem('CaptainKey');
        setCaptain(CaptNM);
        const email = window.localStorage.getItem('MailKey');
        setMail(email);
        const NumM = window.localStorage.getItem('MaleKey');
        setMale(NumM);
        const NumF = window.localStorage.getItem('FemaleKey');
        setFemale(NumF);
        const NumD = window.localStorage.getItem('DivKey');
        setDiv(NumD);
    }, [])

    useEffect(() => {
        window.localStorage.setItem('TeamnameKey', (Teamname));
        if (Teamname !== (undefined && ' ')) {
            setTeamname(Teamname)
        }
        window.localStorage.setItem('CaptainKey', (captain));
        if (captain !== (undefined && ' ')) {
            setCaptain(captain)
        }
        window.localStorage.setItem('MailKey', (mail));
        if (mail !== (undefined && ' ')) {
            setMail(mail)
        }
        window.localStorage.setItem('MaleKey', (male));
        if (male !== (undefined && ' ')) {
            setMale(male)
        }
        window.localStorage.setItem('FemaleKey', (female));
        if (female !== (undefined && ' ')) {
            setFemale(female)
        }
        window.localStorage.setItem('DivKey', (div));
        if (div !== (undefined && ' ')) {
            setDiv(div)
        }
    }, [Teamname, captain, mail, male, female, div])

    return (
        <div className='AnmeldungComponent'>
            {new Date() >= Anmeldeschluss &&
                <>
                    <h2>Die Anmeldephase ist leider abgelaufen, folgende Teams haben sich registriert:</h2>
                </>}
            {new Date() < Anmeldeschluss &&
                <>
                    <form action='https://submit-form.com/eqX8Uq4J'>
                        <h1>Melde dein Team jetzt an:</h1>
                        {showForm && <>
                            <h3>Angaben zum Team</h3>
                            <Grid container>
                                <Grid paddingRight={'20px'} paddingBottom={'20px'}>
                                    <TextField
                                        name='Teamname'
                                        type={'text'}
                                        required
                                        id="outlined-required"
                                        label="Teamname"
                                        helperText='Wie soll das Team heissen?'
                                        value={Teamname !== ' ' ? Teamname : ''}
                                        onChange={(event) => {
                                            setTeamname(event.target.value);
                                        }}
                                    />
                                </Grid>
                                <Grid paddingRight={'20px'} paddingBottom={'20px'}>
                                    <TextField
                                        name='Captain'
                                        type={'name'}
                                        required
                                        id="outlined-required"
                                        label="Captain"
                                        helperText='Name und Vorname des Captain.'
                                        value={captain !== ' ' ? captain : ''}
                                        onChange={(event) => {
                                            setCaptain(event.target.value);
                                        }}
                                    />
                                </Grid>
                                <Grid paddingRight={'20px'} paddingBottom={'20px'}>
                                    <TextField
                                        name='mail'
                                        type={'email'}
                                        required
                                        id="outlined-required"
                                        label="E-Mail"
                                        placeholder='E-Mail des Captain'
                                        helperText='Hier werden Informationen zum Grümpi geschickt.'
                                        value={mail !== ' ' ? mail : ''}
                                        onChange={(event) => {
                                            setMail(event.target.value);
                                        }}
                                    />
                                </Grid>
                            </Grid>
                            <h3>Geschlecht der Spielenden, Anzahl</h3>
                            <Grid container>
                                <Grid paddingRight={'20px'} paddingBottom={'20px'}>
                                    <TextField
                                        name='male'
                                        required
                                        id="outlined-required"
                                        label="m"
                                        type='number'
                                        step='1'
                                        value={male !== ' ' ? male : ''}
                                        onChange={(event) => {
                                            setMale(event.target.value);
                                        }}
                                    />
                                </Grid>
                                <Grid paddingRight={'20px'} paddingBottom={'20px'}>
                                    <TextField
                                        name='female'
                                        required
                                        id="outlined-required"
                                        label="w"
                                        type='number'
                                        step='1'
                                        value={female !== ' ' ? female : ''}
                                        onChange={(event) => {
                                            setFemale(event.target.value);
                                        }}
                                    />
                                </Grid>
                                <Grid paddingRight={'20px'} paddingBottom={'20px'}>
                                    <TextField
                                        name='div'
                                        required
                                        id="outlined-required"
                                        label="div"
                                        type='number'
                                        step='1'
                                        value={div !== ' ' ? div : ''}
                                        onChange={(event) => {
                                            setDiv(event.target.value);
                                        }}
                                    />
                                </Grid>
                                <Grid paddingRight={'20px'} paddingBottom={'20px'} width={'200px'}>
                                    <TextField
                                        size='200px'
                                        name='Farbe'
                                        required
                                        id="outlined-required"
                                        label="Farbe des Trikot"
                                        type='color'
                                        className='ColorPicker'
                                        value={color !== ' ' ? color : ''}
                                        fullWidth
                                        onChange={(event) => {
                                            setColor(event.target.value);
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </>}
                        <Grid container paddingBottom={'20px'}>
                            {showForm &&
                                <Grid>
                                    <Button variant={((Teamname === ' ' || captain === ' ' || mail === ' ' || male === ' ' || female === ' ' || div === ' ' || color === ' ')) ? 'disabled' : 'contained'} type='submit'>Anmelden</Button>
                                </Grid>
                            }
                            <Grid>
                                <Button variant={'outlined'} onClick={(() => setShowForm(!showForm))}>{showForm === true ? 'verstecken' : 'einblenden'}</Button>
                            </Grid>
                        </Grid>
                    </form>
                </>}
            {new Date() < Anmeldeschluss &&
                <>
                    <h1>Folgende Teams haben sich bereits registriert:</h1>
                </>}
            <Grid container>
                {Teams.registered.map((renderTeams) => {
                    return (
                        <div key={renderTeams.id} className='TeamWrapper'>
                            <Grid item className='Teamcontainer TeamsBGProvider' >
                                <Link to={`/Teams/${renderTeams.data.Teamname}`} className='texteco'>
                                    <h3>{renderTeams.data.Teamname}</h3><br />
                                </Link>
                                <p>{JSON.parse(renderTeams.data.male) + JSON.parse(renderTeams.data.female) + JSON.parse(renderTeams.data.div)} Spielende</p>
                                <br />
                                <svg version="1.1" id="Layer_1" x="0px" y="0px" stroke={renderTeams.data.Farbe} fill={renderTeams.data.Farbe} viewBox="0 0 122.88 99.43" width={'50px'} className='Shirt'>
                                    <g>
                                        <path d="M78.36,4.61H44.51c0.17,1.87,0.64,3.65,1.37,5.3c0.85,1.94,2.06,3.69,3.54,5.17c1.57,1.57,3.44,2.83,5.51,3.69 c2,0.83,4.19,1.28,6.5,1.28c2.31,0,4.5-0.46,6.5-1.28c2.07-0.86,3.94-2.12,5.51-3.69c1.48-1.48,2.69-3.23,3.54-5.17 C77.72,8.26,78.2,6.48,78.36,4.61L78.36,4.61z M9.28,37.06l16.57,0.72l0.02,0c0.61,0.03,1.15,0.3,1.54,0.7 c0.37,0.38,0.6,0.9,0.64,1.46c0.01,0.04,0.01,0.09,0.01,0.13v54.75h67.35V39.68c0-0.63,0.26-1.21,0.68-1.63l0,0l0,0l0,0 c0.42-0.42,0.99-0.67,1.62-0.67c0.01,0,0.02,0,0.09,0l0.01,0l0.07,0l16.26-0.18l3.78-17.59l-35-14.29 c-0.24,2.31-0.85,4.52-1.76,6.56c-1.09,2.43-2.6,4.62-4.45,6.46c-1.99,1.99-4.37,3.59-7.02,4.69c-2.55,1.06-5.34,1.64-8.26,1.64 s-5.71-0.58-8.26-1.64c-2.65-1.1-5.03-2.7-7.02-4.69c-1.82-1.82-3.32-3.97-4.4-6.35c-0.91-2-1.52-4.16-1.78-6.43L5.01,19.97 L9.28,37.06L9.28,37.06z M23.45,42.28l-15.98-0.7c-0.52,0-1.01-0.17-1.4-0.47c-0.02-0.02-0.04-0.03-0.06-0.05 c-0.37-0.3-0.65-0.72-0.78-1.22L0.07,19.16c-0.01-0.03-0.01-0.05-0.02-0.08c-0.11-0.52-0.03-1.06,0.2-1.51 c0.24-0.48,0.65-0.87,1.18-1.09l39.4-16.24c0.15-0.08,0.31-0.13,0.49-0.18v0C41.5,0.02,41.68,0,41.86,0h0.3h38.56h0.9 c0.03,0,0.07,0,0.1,0.01c0.12,0,0.23,0.02,0.34,0.04l0,0v0c0.14,0.03,0.28,0.07,0.42,0.13l0,0l0,0l38.96,15.9 c0.02,0.01,0.04,0.02,0.06,0.03c0.48,0.21,0.87,0.58,1.11,1.03c0.24,0.46,0.33,1.01,0.22,1.56l-4.57,21.27 c-0.01,0.03-0.01,0.06-0.02,0.09c-0.12,0.48-0.4,0.91-0.78,1.21c-0.39,0.32-0.89,0.51-1.43,0.52l-16,0.17v55.18 c0,0.63-0.26,1.21-0.68,1.63l0,0c-0.42,0.42-0.99,0.68-1.63,0.68H25.76c-0.63,0-1.21-0.26-1.63-0.68l0,0 c-0.42-0.42-0.68-0.99-0.68-1.63V42.28L23.45,42.28z" />
                                    </g>
                                </svg>
                            </Grid>
                        </div>)
                })}
            </Grid>
        </div>
    )
}