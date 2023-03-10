import React, { Component } from 'react';
import Logo_Gruempi_full_colorvektor from './Data/Logo/SVG/Logo_Gruempi_full_colorvektor.svg';

class TimerPhone extends Component {
    constructor(props) {
        super(props);

        this.state = {
            today: 99,
            hour: 99,
            minute: 99
        }
        this.getDay = this.getDay.bind(this);
        this.updateToday = this.updateToday.bind(this);
    }

    updateToday() {
        setInterval(this.getDay(), 1000)
    }

    getDay() {
        let now = new Date();
        let gr = new Date(2023, 4, 11, 17, 0, 0, 0);
        let start = new Date(now.getFullYear(), 0, 0);
        let diff = now - start;
        let oneDay = 1000 * 60 * 60 * 24;
        if (now.getTime() >= gr.getTime()) {
            var day = "00"
            var hours = "00"
            var mins = "00"
        } else {
            day = 130 - Math.floor(diff / oneDay);
            if (day < 10) {
                day = "0" + day
            }
            mins = 59 - now.getMinutes();
            if (mins < 10) {
                mins = "0" + mins
            }
            hours = 16 - now.getHours();
            if (hours < 0) {
                hours = 24 + hours
            }
            if (hours < 10) {
                hours = "0" + hours
            }
        }
        this.setState({
            today: day,
            hour: hours,
            minute: mins
        });
        return (this.state.today, this.state.hour, this.state.minute)
    }

    render() {
        return (
            <div className='TimerComponent'>
                <div className='TimerPhone'>
                    {this.state.today === 99 &&
                        (setInterval(() => {
                            this.getDay()
                        }, 1000))
                    }
                    {this.state.today === 99 &&
                        <h1 className='LoadingScreen'>Loading...</h1>}
                    {this.state.today !== 99 &&
                        <>
                            <div className='LiveInPhone'>Anpfiff in</div>
                            <div className='daysPhone'>
                                <div>{this.state.today}</div> <p className='dPhone'>DAYS</p>
                            </div>
                            <div className='hoursPhone'>
                                <div>{this.state.hour}</div> <p className='hPhone'>HRS</p>
                            </div>
                            <div className='minutePhone'>
                                <div>{this.state.minute}</div> <p className='minPhone'>MINS</p>
                            </div>
                            <div className='TimerBackgroundPhone' />
                            <div className='TimerGlassPhone' />
                        </>}
                </div>
                <img src={Logo_Gruempi_full_colorvektor} alt='Logo Grümpi 2023' className='HomeTeilnahmeIMGPhone' />
                <div className='HomeTeilnahmePhone'>
                    <div>Bald ist es wieder so weit.<br />
                        Das FHNW Grümpi wird dieses Jahr vom G2021 organisiert.
                        <p className='PlayDate'>Der offizielle Termin ist der 11. Mai 2023.</p>
                        Mitmachen können alle, welche an der FHNW in Muttenz studieren, dozieren oder arbeiten.
                        <p className='PlayDate'>Meldet euch bis am 01. Mai 2023 an.</p>
                        Mehr Informationen zur Teilnahme und der Anmeldung findest Du im Register "Reglement".
                    </div>
                </div>
            </div>

        )
    }
}

export default TimerPhone;