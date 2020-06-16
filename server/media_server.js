/*
Requirements
*/
    const NodeMediaServer = require('node-media-server');
    const { path } = require('./database/UserSchema');
    const config = require('./config/default').rtmp_server;
    const User = require('./database/Schema').User;
//

/*
Definition
*/
    // Run an RTMP Server
    nms = new NodeMediaServer(config);
    nms.on('prePublish', async(id, StreamPath, args) => {
        let stream_key = getStreamKeyFromStreamPath(StreamPath);
        console.log('[NodeEvent on prePublish]', `id=${id} StreamPath = ${StreamPath} args=${JSON.stringify(args)}`);

        User.findOne({ stream_key: stream_key }), (err, user) => {
            if (!err) {
                if (!user) {
                    let session = nms.getSession(id);
                    session.reject();
                } else {
                    // Do something
                }
            }
        }
    });

    const getStreamKeyFromStreamPath = (path) => {
        let parts = path.split('/');
        return parts[parts.length -1];
    };
//

/*
Export
*/
    module.exports = nms;
//