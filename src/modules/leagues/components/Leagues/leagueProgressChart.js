import React from 'react';
import PieChart from 'react-minimal-pie-chart';

const LeagueProgressChart = ({progress}) => {
    return(
        <div className="leagueProgress text-right">
            <PieChart
                rounded={true}
                style={{'height': '40px', 'width': '40px'}}
                totalValue={100}
                animate={true}
                lineWidth={8}
                data={[
                    { value: progress, key: 1, color: '#e90052' },
                    { value: (100-progress), key: 2, color: '#ccc' }
                ]}
            ><span>{Math.round(progress)}%</span></PieChart>
        </div>
    );
}

export default LeagueProgressChart;