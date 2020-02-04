import json, os, requests, sys

SPOTIFY_REFRESH_TOKEN = os.environ['SPOTIFY_REFRESH_TOKEN']
SPOTIFY_CLIENT_ID     = os.environ['SPOTIFY_CLIENT_ID']
SPOTIFY_CLIENT_SECRET = os.environ['SPOTIFY_CLIENT_SECRET']

spotify_auth_body = {
    'grant_type': 'refresh_token',
    'refresh_token': SPOTIFY_REFRESH_TOKEN,
    'client_id': SPOTIFY_CLIENT_ID,
    'client_secret': SPOTIFY_CLIENT_SECRET
}

r = requests.post('https://accounts.spotify.com/api/token', data=spotify_auth_body)

if r.status_code != 200:
    sys.exit(f'Error code { r.status_code } getting access token from Spotify Accounts Service')

res = json.loads(r.text)

if 'refresh_token' in res:
    sys.exit(f'Error: Spotify Accounts Service issued a new refresh token')

spotify_token_type, spotify_access_token = res['token_type'], res['access_token']

q = {'limit': 50}
h = {'Authorization': f'{ spotify_token_type } { spotify_access_token }'}
r = requests.get('https://api.spotify.com/v1/me/player/recently-played', params=q, headers=h)

if r.status_code != 200:
    sys.exit(f'Error code { r.status_code } getting data from Spotify API')

data = json.loads(r.text)

songs = {}
output = []

for item in data['items']:
    song_id = item['track']['id']
    if song_id in songs:
        songs[song_id] += 1
    else:
        songs[song_id] = 1
        output.append(item)

# sort by frequency, then recency
output.sort(key=lambda x: songs[x['track']['id']], reverse=True)

print(json.dumps(output[:8]))
