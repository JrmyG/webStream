/*
Imports
*/
    import React from 'react';
    import axios from 'axios';
    import {Link} from 'react-router-dom';
    import './LiveStreams.scss';
    import config from '../../server/config/default';
//

/*
Export
*/
    export default class Navbar extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                live_streams: [],
                users: []
            }
        }

        componentDidMount() {
            this.getLiveStreams();
            this.getUsers();
        }

        getLiveStreams() {
            axios.get('http://127.0.0.1:' + config.rtmp_server.http.port + '/api/streams')
            .then(res => {
                let streams = res.data;
                if (typeof (streams['live'] !== 'undefined')) {
                    this.getStreamsInfo(streams['live']);
                }
            });
        }

        getStreamsInfo(live_streams) {
            axios.get('/streams/info', {
                params: {
                    streams: live_streams
                }
            }).then(res => {
                this.setState({
                    live_streams: res.data
                }, () => {
                    console.log(this.state);
                });
            });
        }

        getLiveStreams() {
            axios.get('http://127.0.0.1:' + config.rtmp_server.http.port + '/api/streams')
            .then(res => {
                let streams = res.data;
                if (typeof (streams['live'] !== 'undefined')) {
                    this.getStreamsInfo(streams['live']);
                }
            });
        }

        
        getUsers() {
            axios.get('http://127.0.0.1:' + config.server.port + '/user/api')
            .then(res => {
                this.setState({
                    users: res.data
                });
            })
            .catch((err) => {
                console.log(err);
            })
        }

        render() {
            let streams = this.state.live_streams.map((stream, index) => {
                return (
                    <div className="stream col-xs-12 col-sm-12 col-md-3 col-lg-4" key={index}>
                        <span className="live-label">LIVE</span>
                        <Link to={'/stream/' + stream.username}>
                            <div className="stream-thumbnail">
                                <img src={'/thumbnails/' + stream.stream_key + '.png'}/>
                            </div>
                        </Link>

                        <span className="username">
                            <Link to={'/stream/' + stream.username}>
                                {stream.username}
                            </Link>
                        </span>
                    </div>
                );
            });

            let users = this.state.users.map((user, index) => {
                return (
                    <div className="users col-xs-12 col-sm-12 col-md-3 col-lg-4" key={index}>
                        <Link to={'/stream/' + user.username}>
                            <div className="profile-image">
                                <img src={user.image_url}/>
                            </div>
                        </Link>

                        <span className="username">
                            <Link to={'/stream/' + user.username}>
                                {user.username}
                            </Link>
                        </span>
                    </div>
                );
            });

            return (
                <div className="container mt-5">
                    <h4>Live Streams</h4>
                    <hr className="my-4"/>

                    <div className="streams row">
                        {streams}
                    </div>

                    <h4>Streamers présents sur la plateforme</h4>
                    <hr className="my-4"/>
                    <div className="streams row">
                        {users}
                    </div>
                </div>
            )
        }
    }
//