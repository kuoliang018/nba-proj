import React from 'react';
import { AutoComplete, Input, Icon} from 'antd';
import nba from 'nba';
import {PROFILE_PIC_URL_PREFIX} from "../constants"

const Option = AutoComplete.Option;
export class SearchBar extends React.Component {
    state = {
        dataSource: [],
    }

    handleSearch = (value) => {

        this.setState({
            dataSource: !value ? [] : nba.searchPlayers(value).map(
                ({fullName, playerId})=>(
                    <Option key={playerId} value={fullName}>
                        <img className="player-option-image" src={`${PROFILE_PIC_URL_PREFIX}/${playerId}.png`}/>
                        <span className="playrt-option-label">
                            {fullName}
                        </span>
                    </Option>
                ),
            )
        });
    }
    onSelect = (playerName) => {
        this.props.loadPlayerInfo(playerName);
    }
    render() {
        window.nba = nba;
        const { dataSource } = this.state;
        return (
            <AutoComplete
                dataSource={dataSource}
                className="search-bar"
                onSelect={this.onSelect}
                onSearch={this.handleSearch}
                placeholder="Search NBA Player"
                optionLabelProp="value"//emmm, just keep it
                >
                <Input suffix={<Icon type="search" className="certain-category-icon"/>}/>
            </AutoComplete>
        );
    }
}