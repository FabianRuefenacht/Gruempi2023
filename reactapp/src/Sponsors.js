import React, { Component } from 'react';
import { Grid } from '@mui/material';
import axios from 'axios';

class Sponsors extends Component {
    constructor(props) {
        super(props);

        this.state = {
            SponsorList: {
                "Platin": [
                    {
                        "key": 1,
                        "Company": "none",
                        "img_link": "https://vm26.sourcelab.ch/Sponsors/Platin/Logo_Gruempi_ohne_Jahr_color_breitvektor.svg",
                        "url": "https://www.Grümpi2023.sourcelab.ch"
                    }
                ],
                "Gold": [
                    {
                        "key": 1001,
                        "Company": "none",
                        "img_link": "https://vm26.sourcelab.ch/Sponsors/Gold/Logo_Gruempi_ohne_Jahr_color_breitvektor.svg",
                        "url": "https://www.Grümpi2023.sourcelab.ch"
                    }
                ],
                "Silber": [
                    {
                        "key": 2001,
                        "Company": "none",
                        "img_link": "https://vm26.sourcelab.ch/Sponsors/Silber/Logo_Gruempi_ohne_Jahr_color_breitvektor.svg",
                        "url": "https://www.Grümpi2023.sourcelab.ch"
                    }
                ],
                "Bronze": [
                    {
                        "key": 3001,
                        "Company": "none",
                        "img_link": "https://vm26.sourcelab.ch/Sponsors/Bronze/Logo_Gruempi_ohne_Jahr_color_breitvektor.svg",
                        "url": "https://www.Grümpi2023.sourcelab.ch"
                    }
                ]
            }
        }
    }

    componentDidMount() {
        axios
        .get("https://vm26.sourcelab.ch/SponsorAPI")
        .then((response) => {
            this.setState({ SponsorList: response.data })
        })
        .catch((err) => { console.log(err) })
    }

    render() {
        return (
            <>
                <div className='Sponsors'>
                    <h1>Sponsoren</h1>
                    <h2>Platin</h2>
                    <Grid container spacing={0} gap={2}>
                        {this.state.SponsorList.Platin.map((renderPlatinum) => {
                            return (
                                <Grid item key={renderPlatinum.key} className={'Grid-Sponsor-Platinum'}>
                                    <a href={renderPlatinum.url} target="_blank" rel='noreferrer'>
                                        <img src={renderPlatinum.img_link} alt={renderPlatinum.Company} width={"100%"} />
                                    </a>
                                </Grid>
                            )
                        })}
                    </Grid>

                    <h2>Gold</h2>
                    <Grid container spacing={0} gap={2}>
                        {this.state.SponsorList.Gold.map((renderGold) => {
                            return (
                                <Grid item key={renderGold.key} className={'Grid-Sponsor-Gold'}>
                                    <a href={renderGold.url} target="_blank" rel='noreferrer'>
                                        <img src={renderGold.img_link} alt={renderGold.Company} width={"100%"} />
                                    </a>
                                </Grid>
                            )
                        })}
                    </Grid>

                    <h2>Silber</h2>
                    <Grid container spacing={0} gap={2}>
                        {this.state.SponsorList.Silber.map((renderSilver) => {
                            return (
                                <Grid item key={renderSilver.key} className={'Grid-Sponsor-Silver'}>
                                    <a href={renderSilver.url} target="_blank" rel='noreferrer'>
                                        <img src={renderSilver.img_link} alt={renderSilver.Company} width={"100%"} />
                                    </a>
                                </Grid>
                            )
                        })}
                    </Grid>

                    <h2>Bronze</h2>
                    <Grid container spacing={0} gap={2}>
                        {this.state.SponsorList.Bronze.map((renderBronze) => {
                            return (
                                <Grid item key={renderBronze.key} className={'Grid-Sponsor-Bronze'}>
                                    <a href={renderBronze.url} target="_blank" rel='noreferrer'>
                                        <img src={renderBronze.img_link} alt={renderBronze.Company} width={"100%"} />
                                    </a>
                                </Grid>
                            )
                        })}
                    </Grid>

                </div>
            </>
        )
    }
}

export default Sponsors;