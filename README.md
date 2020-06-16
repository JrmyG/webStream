#### Install dependencies, build code and run server
```
$ npm install

# run webpack and watch for changes
$ npm run watch 

# run node server with supervisor and watch for changes
$ npm run start
```
#### Streaming with OBS

Go to Settings > Stream.  Select Custom service and `rtmp://127.0.0.1:1935/live`
in server input. Enter your streaming key issued by WebStream and click Apply.
Click start streaming to broadcast your stream.