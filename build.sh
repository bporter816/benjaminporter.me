mkdir -p data
python3 spotify.py > data/spotify.json
if [ $? -eq 0 ]; then
    echo "Downloaded Spotify API data to data/spotify.json"
else
    echo "Failed to download Spotify API data" >&2
    exit 1
fi
python3 steam.py > data/steam.json
if [ $? -eq 0 ]; then
    echo "Downloaded Steam API data to data/steam.json"
else
    echo "Failed to download Steam API data" >&2
    exit 1
fi
echo "Building site"
hugo --gc
