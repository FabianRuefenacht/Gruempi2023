import React, { Component } from 'react';
import { InstagramEmbed } from 'react-social-media-embed';
import { Grid } from '@mui/material';
import axios from 'axios';

class Instagram extends Component {
    constructor(props) {
        super(props);

        this.state = {
            InstaPosts: { "Instagram": [{ "url": "https://www.instagram.com/p/B-0BTP9AcM9/?utm_source=ig_embed&amp;utm_campaign=loading", "key": 1 }] }
        }
    }

    componentDidMount() {
        axios
            .get("https://vm26.sourcelab.ch/InstaAPI")
            .then((response) => {
                this.setState({ InstaPosts: response.data })
            })
            .catch((err) => { console.log(err) })
    }

    render() {
        return (
            <div className='SocialComponent'>
                <h1 className='SocialWall'>
                    Social Wall
                </h1>
                <Grid container  wrap='nowrap' overflow={'scroll'}>
                    {this.state.InstaPosts.Instagram.map((renderIG) => {
                        return (
                            <Grid item key={renderIG.key} className='InstaPhone'>
                                <div style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
                                    <InstagramEmbed url={renderIG.url} width={328} />
                                </div>
                            </Grid>)
                    })}
                </Grid>
            </div>
        )
    }
}

export default Instagram;