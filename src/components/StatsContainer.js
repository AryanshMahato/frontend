import React, { Component } from 'react'
import Statistics from './Statistics';
import OverallStats from './OverallStats'
import StatewiseCovidStats from './StatewiseCovidStats';
import LaboratoryStats from './LaboratoryStats';
import HospitalsStats from './HospitalsStats';
import CovidHistoryChart from './CovidHistoryChart';

export default class StatsContainer extends Component {
    render() {
        return (
            <div className="stats-flex">
                <OverallStats />
                {/* <StatewiseCovidStats/> */}
                <CovidHistoryChart width={400} />
                <HospitalsStats />
                <LaboratoryStats />
            </div>
        )
    }
}
