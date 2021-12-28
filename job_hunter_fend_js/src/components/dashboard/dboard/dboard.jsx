import React, { Component } from 'react';
import { Chart } from "react-google-charts";
import "./dboard.scss";
import {store} from "../../../store/store"
import { MdFolderOpen ,MdLocalMall,MdOutlineLocalFireDepartment,MdOutlineApps,MdOutlineTrain} from "react-icons/md";import { IoMdGlobe,IoMdHeartHalf,IoMdHeart } from "react-icons/io";
class Dboard extends Component {
    render() {
        return (
            <div className="main1">
              Welcome Back,<i>{store.getState()["user"]["username"]}</i>
                <div className="stats">
                    <div className="total">
                    <div className="ica"><MdFolderOpen className="icona"/></div>
                    <div className="number">
                        74581<IoMdGlobe className="icon clr"/>
                    </div>
                    Total Jobs
                    </div>
                    <div className="jforu">
                    <div className="ic"><MdLocalMall className="icon"/></div>
                    <div className="number">
                        19<MdOutlineLocalFireDepartment className="icon clr"/>
                    </div>
                    Jobs For You
                    </div>
                    <div className="total">
                    <div className="ica"><MdOutlineApps className="icona"/></div>
                    <div className="number">
                        14<IoMdHeartHalf className="icon clr"/>
                    </div>
                    Preferred Skills
                    </div>
                    <div className="jforu">
                    <div className="ic"><MdOutlineTrain className="icon"/></div>
                    <div className="number">
                        6<IoMdHeart className="icon clr"/>
                    </div>
                    Preferred City
                    </div>

                    
                </div>
                <div className="graphs">
                    <div className="chrt">
                    <Chart className="chartL"
                        chartType="LineChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                          ['x', 'Jobs'],
                          [1, 10],
                          [2, 23],
                          [3, 17],
                          [4, 18],
                          [5, 9],
                          [6, 11],
                          [7, 27],
                          [8, 33],
                          [9, 40],
                          [10, 32],
                          [11, 19],
                        ]}
                        options={{
                        //     'backgroundColor': {
                        //         'fill': '#b939d0',
                        //         fillOpacity: 0.1
                        //      },

                        //   is3D: true,
                        title:'Daily Jobs',
                          hAxis: {
                            title: 'Day',
                          },
                          vAxis: {
                            title: 'Jobs',
                          },
                        }}
                        rootProps={{ 'data-testid': '1' }}
                    />
                    </div>
                </div>
                <div className="chrt">
                    <Chart
                        chartType="BarChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                          ['Skill', '2019', '2020'],
                          ['Flutter', 8170, 8900],
                          ['React', 3124, 5643],
                          ['Java', 2139, 2064],
                          ['Php', 1200, 1800],
                          
                        ]}
                        options={{
                          title: 'Popular Skills',
                          isStacked: true,
                          
                          vAxis: {
                            title: 'Skills',
                          },
                        }}
                        // For tests
                        rootProps={{ 'data-testid': '3' }}
                    />
                </div>
            </div>
        );
    }
}

export default Dboard;