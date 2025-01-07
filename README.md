# benjaminporter.me

The source for <https://benjaminporter.me>.

Styled with [Bulma](https://bulma.io), built with [Hugo](https://gohugo.io), and deployed to
[Cloudflare Pages](https://pages.cloudflare.com).

`build.sh` is the entry point for building the site. It runs `spotify.py` and `steam.py` to get data about my recent
music and games from the Spotify and Steam APIs. The responses are placed in the `data/` directory and injected into the
layouts.

An AWS Lambda function triggers Cloudflare Pages to rebuild the site daily to update the dynamic content.
