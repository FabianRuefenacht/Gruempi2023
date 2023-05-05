import { Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Gruppen() {
    const [gruppe, setGruppe] = useState({
        "Gruppe": [
            {
                "Data": {
                    "GrpNm": "GruppeA",
                    "Name": "Daten werden geladen",
                    "Spiele": { "Spiel1": "0", "Spiel2": "0", "Spiel3": "0", "Spiel4": "0" },
                    "TorDiff": { "Spiel1": "0", "Spiel2": "0", "Spiel3": "0", "Spiel4": "0" }
                }
            },
            {
                "Data": {
                    "GrpNm": "GruppeB",
                    "Name": "Daten werden geladen",
                    "Spiele": { "Spiel1": "0", "Spiel2": "0", "Spiel3": "0", "Spiel4": "0" },
                    "TorDiff": { "Spiel1": "0", "Spiel2": "0", "Spiel3": "0", "Spiel4": "0" }
                }
            },
            {
                "Data": {
                    "GrpNm": "GruppeC",
                    "Name": "Daten werden geladen",
                    "Spiele": { "Spiel1": "0", "Spiel2": "0", "Spiel3": "0", "Spiel4": "0" },
                    "TorDiff": { "Spiel1": "0", "Spiel2": "0", "Spiel3": "0", "Spiel4": "0" }
                }
            },
            {
                "Data": {
                    "GrpNm": "GruppeD",
                    "Name": "Daten werden geladen",
                    "Spiele": { "Spiel1": "0", "Spiel2": "0", "Spiel3": "0", "Spiel4": "0" },
                    "TorDiff": { "Spiel1": "0", "Spiel2": "0", "Spiel3": "0", "Spiel4": "0" }
                }
            }
        ]
    });

    let gruppeA = gruppe.Gruppe.filter((teams) => teams.Data.GrpNm.includes('GruppeA'));
    let gruppeAsorted = gruppeA.sort((a, b) =>
        ((JSON.parse(a.Data.Spiele.Spiel1) + JSON.parse(a.Data.Spiele.Spiel2) + JSON.parse(a.Data.Spiele.Spiel3)) + JSON.parse(a.Data.Spiele.Spiel4)) > (JSON.parse(b.Data.Spiele.Spiel1) + JSON.parse(b.Data.Spiele.Spiel2) + JSON.parse(b.Data.Spiele.Spiel3) + JSON.parse(b.Data.Spiele.Spiel4))
            ? -1 :
            (JSON.parse(a.Data.Spiele.Spiel1) + JSON.parse(a.Data.Spiele.Spiel2) + JSON.parse(a.Data.Spiele.Spiel3) + JSON.parse(a.Data.Spiele.Spiel4)) < (JSON.parse(b.Data.Spiele.Spiel1) + JSON.parse(b.Data.Spiele.Spiel2) + JSON.parse(b.Data.Spiele.Spiel3) + JSON.parse(b.Data.Spiele.Spiel4))
                ? 1 :
                (JSON.parse(a.Data.TorDiff.Spiel1) + JSON.parse(a.Data.TorDiff.Spiel2) + JSON.parse(a.Data.TorDiff.Spiel3) + JSON.parse(a.Data.TorDiff.Spiel4)) > (JSON.parse(b.Data.TorDiff.Spiel1) + JSON.parse(b.Data.TorDiff.Spiel2) + JSON.parse(b.Data.TorDiff.Spiel3) + JSON.parse(b.Data.TorDiff.Spiel4))
                    ? -1 : 1);

    let gruppeB = gruppe.Gruppe.filter((teams) => teams.Data.GrpNm.includes('GruppeB'));
    let gruppeBsorted = gruppeB.sort((a, b) =>
    ((JSON.parse(a.Data.Spiele.Spiel1) + JSON.parse(a.Data.Spiele.Spiel2) + JSON.parse(a.Data.Spiele.Spiel3)) + JSON.parse(a.Data.Spiele.Spiel4)) > (JSON.parse(b.Data.Spiele.Spiel1) + JSON.parse(b.Data.Spiele.Spiel2) + JSON.parse(b.Data.Spiele.Spiel3) + JSON.parse(b.Data.Spiele.Spiel4))
        ? -1 :
        (JSON.parse(a.Data.Spiele.Spiel1) + JSON.parse(a.Data.Spiele.Spiel2) + JSON.parse(a.Data.Spiele.Spiel3) + JSON.parse(a.Data.Spiele.Spiel4)) < (JSON.parse(b.Data.Spiele.Spiel1) + JSON.parse(b.Data.Spiele.Spiel2) + JSON.parse(b.Data.Spiele.Spiel3) + JSON.parse(b.Data.Spiele.Spiel4))
            ? 1 :
            (JSON.parse(a.Data.TorDiff.Spiel1) + JSON.parse(a.Data.TorDiff.Spiel2) + JSON.parse(a.Data.TorDiff.Spiel3) + JSON.parse(a.Data.TorDiff.Spiel4)) > (JSON.parse(b.Data.TorDiff.Spiel1) + JSON.parse(b.Data.TorDiff.Spiel2) + JSON.parse(b.Data.TorDiff.Spiel3) + JSON.parse(b.Data.TorDiff.Spiel4))
                ? -1 : 1);

    let gruppeC = gruppe.Gruppe.filter((teams) => teams.Data.GrpNm.includes('GruppeC'));
    let gruppeCsorted = gruppeC.sort((a, b) =>
        ((JSON.parse(a.Data.Spiele.Spiel1) + JSON.parse(a.Data.Spiele.Spiel2) + JSON.parse(a.Data.Spiele.Spiel3)) + JSON.parse(a.Data.Spiele.Spiel4)) > (JSON.parse(b.Data.Spiele.Spiel1) + JSON.parse(b.Data.Spiele.Spiel2) + JSON.parse(b.Data.Spiele.Spiel3) + JSON.parse(b.Data.Spiele.Spiel4))
            ? -1 :
            (JSON.parse(a.Data.Spiele.Spiel1) + JSON.parse(a.Data.Spiele.Spiel2) + JSON.parse(a.Data.Spiele.Spiel3) + JSON.parse(a.Data.Spiele.Spiel4)) < (JSON.parse(b.Data.Spiele.Spiel1) + JSON.parse(b.Data.Spiele.Spiel2) + JSON.parse(b.Data.Spiele.Spiel3) + JSON.parse(b.Data.Spiele.Spiel4))
                ? 1 :
                (JSON.parse(a.Data.TorDiff.Spiel1) + JSON.parse(a.Data.TorDiff.Spiel2) + JSON.parse(a.Data.TorDiff.Spiel3) + JSON.parse(a.Data.TorDiff.Spiel4)) > (JSON.parse(b.Data.TorDiff.Spiel1) + JSON.parse(b.Data.TorDiff.Spiel2) + JSON.parse(b.Data.TorDiff.Spiel3) + JSON.parse(b.Data.TorDiff.Spiel4))
                    ? -1 : 1);

    let gruppeD = gruppe.Gruppe.filter((teams) => teams.Data.GrpNm.includes('GruppeD'));
    let gruppeDsorted = gruppeD.sort((a, b) =>
        ((JSON.parse(a.Data.Spiele.Spiel1) + JSON.parse(a.Data.Spiele.Spiel2) + JSON.parse(a.Data.Spiele.Spiel3)) + JSON.parse(a.Data.Spiele.Spiel4)) > (JSON.parse(b.Data.Spiele.Spiel1) + JSON.parse(b.Data.Spiele.Spiel2) + JSON.parse(b.Data.Spiele.Spiel3) + JSON.parse(b.Data.Spiele.Spiel4))
            ? -1 :
            (JSON.parse(a.Data.Spiele.Spiel1) + JSON.parse(a.Data.Spiele.Spiel2) + JSON.parse(a.Data.Spiele.Spiel3) + JSON.parse(a.Data.Spiele.Spiel4)) < (JSON.parse(b.Data.Spiele.Spiel1) + JSON.parse(b.Data.Spiele.Spiel2) + JSON.parse(b.Data.Spiele.Spiel3) + JSON.parse(b.Data.Spiele.Spiel4))
                ? 1 :
                (JSON.parse(a.Data.TorDiff.Spiel1) + JSON.parse(a.Data.TorDiff.Spiel2) + JSON.parse(a.Data.TorDiff.Spiel3) + JSON.parse(a.Data.TorDiff.Spiel4)) > (JSON.parse(b.Data.TorDiff.Spiel1) + JSON.parse(b.Data.TorDiff.Spiel2) + JSON.parse(b.Data.TorDiff.Spiel3) + JSON.parse(b.Data.TorDiff.Spiel4))
                    ? -1 : 1);

    useEffect(() => {
        axios
            .get("https://vm26.sourcelab.ch/GruppenAPI")
            .then((response) => {
                setGruppe(response.data)
            })
            .catch((err) => { console.log(err) });
    }, [])

    return (
        <>
            <div className='overflowxScroll GruppenCenter'>
                <Grid container spacing={2} wrap={'nowrap'}>
                    <Grid item minWidth={'70px'}>
                        <h3>Rang</h3>
                    </Grid>
                    <Grid item minWidth={'250px'}>
                        <h3>Teamname</h3>
                    </Grid>
                    <Grid item minWidth={'80px'} >
                        <h3>Punkte</h3>
                    </Grid>
                    <Grid item minWidth={'100px'} >
                        <h3>Tor Diff.</h3>
                    </Grid>
                </Grid>
                <h3>Gruppe 1:</h3>
                {gruppeAsorted.map((GrA, i) => {
                    return (<Grid container paddingBottom={'10px'} key={i} wrap={'nowrap'}>
                        <Grid item minWidth={'70px'}>{i + 1}</Grid>
                        <Grid item minWidth={'250px'}>{GrA.Data.Name}</Grid>
                        <Grid item minWidth={'80px'}>{JSON.parse(GrA.Data.Spiele.Spiel1) + JSON.parse(GrA.Data.Spiele.Spiel2) + JSON.parse(GrA.Data.Spiele.Spiel3) + JSON.parse(GrA.Data.Spiele.Spiel4)}</Grid>
                        <Grid item minWidth={'100px'}>{JSON.parse(GrA.Data.TorDiff.Spiel1) + JSON.parse(GrA.Data.TorDiff.Spiel2) + JSON.parse(GrA.Data.TorDiff.Spiel3) + JSON.parse(GrA.Data.TorDiff.Spiel4)}</Grid>
                    </ Grid>
                    )
                })}
                <h3>Gruppe 2:</h3>
                {gruppeBsorted.map((GrB, i) => {
                    return (<Grid container paddingBottom={'10px'} key={i} wrap={'nowrap'}>
                        <Grid item minWidth={'70px'}>{i + 1}</Grid>
                        <Grid item minWidth={'250px'}>{GrB.Data.Name}</Grid>
                        <Grid item minWidth={'80px'}>{JSON.parse(GrB.Data.Spiele.Spiel1) + JSON.parse(GrB.Data.Spiele.Spiel2) + JSON.parse(GrB.Data.Spiele.Spiel3) + JSON.parse(GrB.Data.Spiele.Spiel4)}</Grid>
                        <Grid item minWidth={'100px'}>{JSON.parse(GrB.Data.TorDiff.Spiel1) + JSON.parse(GrB.Data.TorDiff.Spiel2) + JSON.parse(GrB.Data.TorDiff.Spiel3) + JSON.parse(GrB.Data.TorDiff.Spiel4)}</Grid>
                    </ Grid>
                    )
                })}
                <h3>Gruppe 3:</h3>
                {gruppeCsorted.map((GrC, i) => {
                    return (<Grid container paddingBottom={'10px'} key={i} wrap={'nowrap'}>
                        <Grid item minWidth={'70px'}>{i + 1}</Grid>
                        <Grid item minWidth={'250px'}>{GrC.Data.Name}</Grid>
                        <Grid item minWidth={'80px'}>{JSON.parse(GrC.Data.Spiele.Spiel1) + JSON.parse(GrC.Data.Spiele.Spiel2) + JSON.parse(GrC.Data.Spiele.Spiel3) + JSON.parse(GrC.Data.Spiele.Spiel4)}</Grid>
                        <Grid item minWidth={'100px'}>{JSON.parse(GrC.Data.TorDiff.Spiel1) + JSON.parse(GrC.Data.TorDiff.Spiel2) + JSON.parse(GrC.Data.TorDiff.Spiel3) + JSON.parse(GrC.Data.TorDiff.Spiel4)}</Grid>
                    </ Grid>
                    )
                })}
                <h3>Gruppe 4:</h3>
                {gruppeDsorted.map((GrD, i) => {
                    return (<Grid container paddingBottom={'10px'} key={i} wrap={'nowrap'}>
                        <Grid item minWidth={'70px'}>{i + 1}</Grid>
                        <Grid item minWidth={'250px'}>{GrD.Data.Name}</Grid>
                        <Grid item minWidth={'80px'}>{JSON.parse(GrD.Data.Spiele.Spiel1) + JSON.parse(GrD.Data.Spiele.Spiel2) + JSON.parse(GrD.Data.Spiele.Spiel3) + JSON.parse(GrD.Data.Spiele.Spiel4)}</Grid>
                        <Grid item minWidth={'100px'}>{JSON.parse(GrD.Data.TorDiff.Spiel1) + JSON.parse(GrD.Data.TorDiff.Spiel2) + JSON.parse(GrD.Data.TorDiff.Spiel3) + JSON.parse(GrD.Data.TorDiff.Spiel4)}</Grid>
                    </ Grid>
                    )
                })}
            </div>
        </>
    )
}