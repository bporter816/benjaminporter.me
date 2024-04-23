# benjaminporter.me

The source for <https://benjaminporter.me>.

Styled with [Bulma](https://bulma.io), built with [Hugo](https://gohugo.io), and deployed to
[Netlify](https://www.netlify.com).

`build.sh` is the entry point for building the site. It runs `spotify.py` and `steam.py` to get data about my recent
music and games from the Spotify and Steam APIs. The responses are placed in the `data/` directory and injected into the
layouts.

Netlify rebuilds the site every night at midnight to update the dynamic content.

# Notes

* When deploying to Netlify with the 20.04 Focal image, the extended version of Hugo, which is needed to compile Sass,
isn't installed by default. Manually setting the `HUGO_VERSION` environment variable seems to fix it.
