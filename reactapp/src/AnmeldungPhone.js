import React, { useEffect, useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function AnmeldungPhone() {
    const ipr = {
        min: 0,
        max: 10,
        placeholder: '[0-10]'
    };
    const [showForm, setShowForm] = useState(true)

    const [Teamname, setTeamname] = useState(' ');
    const [captain, setCaptain] = useState(' ');
    const [mail, setMail] = useState(' ');
    const [male, setMale] = useState(' ');
    const [female, setFemale] = useState(' ');
    const [div, setDiv] = useState(' ');

    const Anmeldeschluss = new Date(2023, 4, 1, 0, 0, 0, 1);

    const [Teams, setTeams] = useState({
        "registered": [
            {
                "createdAt": "2023-02-15T13:04:42.527Z",
                "id": "ns29r4jzhR8XAGAIrkj5K",
                "data": {
                    "Captain": "Max Mustermann",
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
        <div className='AnmeldungComponentPhone'>
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
                                        inputProps={ipr}
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
                                        inputProps={ipr}
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
                                        inputProps={ipr}
                                        value={div !== ' ' ? div : ''}
                                        onChange={(event) => {
                                            setDiv(event.target.value);
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </>}
                        <Grid container paddingBottom={'20px'}>
                            {showForm &&
                                <Grid>
                                    <Button variant={((Teamname && captain && mail && male && female && div) !== (null || undefined || ' ' || "")) ? 'contained' : 'disabled'} type='submit'>Anmelden</Button>
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
                                <p className='TeamsText'>{JSON.parse(renderTeams.data.male) + JSON.parse(renderTeams.data.female) + JSON.parse(renderTeams.data.div)} Spielende</p>
                            </Grid>
                        </div>)
                })}
            </Grid>
        </div>
    )
}