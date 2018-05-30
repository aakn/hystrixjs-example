Hystrix JS example app
---

This is a slightly better example for [HystrixJS](https://www.npmjs.com/package/hystrixjs)

It uses a barebone express app (generated using express-generator).
This app has an API which uses a Hystrix command to wrap a network call.


How to run?
---

Install the node modules

```bash
npm install
```

Start the mock server:

```bash
npm run mock-server
```

Start the app:

```bash
npm start
```

Hystrix dashboard
---

The app exposes the stream on the path `/hystrix.stream`

Refer to [Standalone Hystrix dashboard](https://github.com/kennedyoliveira/standalone-hystrix-dashboard) docs for how to start the hystrix dashboard

Once your dashboard is running, open it and set the url as `http://localhost:3000/hystrix.stream`

TODO
---

Add test examples


Licensing
---

Copyright © 2018 Ali Asgar
This work is free. It comes without any warranty, to the extent permitted by applicable law. You can redistribute it and/or modify it under the terms of the Do What The Fuck You Want To Public License, Version 2, as published by Sam Hocevar. See the LICENSE file for more details.