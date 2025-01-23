#!/bin/bash
mkdir -p data
if python3 spotify.py > data/spotify.json; then
    echo "Downloaded Spotify API data to data/spotify.json"
else
    echo "Failed to download Spotify API data" >&2
    exit 1
fi
if python3 steam.py > data/steam.json; then
    echo "Downloaded Steam API data to data/steam.json"
else
    echo "Failed to download Steam API data" >&2
    exit 1
fi
echo "Building site"
hugo --gc
