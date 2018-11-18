import React from 'react';
import _ from 'lodash';
import {ShotChart} from "./shotchart";
import {CountSlider} from "./CountSlider";
import {Row, Col, Radio} from 'antd';
export class DataViewContainer extends React.Component {
    state = {
        minCount: 2,
        chartType: 'hexbin',
    }
    const RadioGroup = Radio.Group;

    onMinCountChange = (minCount) => {

        this.setState({minCount});

    }
    onChartTypeChange = (e) => {
        this.setState({ chartTYpe: e.target.value});
    }
    render(){
        return(
            <div className="data-view">
                <ShotChart playerId={this.props.playerId} minCount = {this.state.minCount}/>
                <div className="filters">
                    <Row>
                        <Col span={2} offset={3} className="filter-label">Shots: </Col>
                        <Col span={16}><CountSlider className="filter-control" onMinCountChange={_.debounce(this.onMinCountChange,500)}/></Col>
                    </Row>
                </div>
            </div>
        );
    }
}