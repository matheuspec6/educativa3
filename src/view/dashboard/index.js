import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import emoji from 'node-emoji'
class Dashboard extends Component {

    constructor(props){
        super(props);
        this.state = {
            chartData :{
                labels: [ 'BigHEre','M4','blood', 'Maicom', 'Matheus','ciboGÃO', 'shadow', 'Felipe'],
                datasets: [{
                    label: 'ESTRAGOU PARTIDA FEEDANDO',
                    data: [500, 1000, 1500, 2000, 3500, 1000, 1500, 10000],
                backgroundColor:[
                    'rgba(255,99,132,0.7)',
                    'rgba(255,99,132,0.7)',
                    'rgba(255,99,132,0.7)',
                    'rgba(255,99,132,0.7)',
                    'rgba(255,99,132,0.7)',
                    'rgba(255,99,132,0.7)',
                    'rgba(255,99,132,0.7)',
                    'rgba(255,99,132,0.7)',
                    'rgba(255,99,132,0.7)',
                ]
                }]
            }
        }
    }

    render() {
        return (
            <div className="col 6">
                <div className="card">
                <Bar
                    data={this.state.chartData}
                    options={{ 
                       
                        title:{
                            display: true,
                            text: 'esse é um texto'
                        },
                        maintainAspectRatio: false 
                    }}
                    
                />
            
            </div>
            </div>
        )
    }

}
export default Dashboard;