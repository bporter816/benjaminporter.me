import os, requests, sys

STEAM_API_KEY = os.environ['STEAM_API_KEY']
STEAM_USER    = os.environ['STEAM_USER_ID']

q = {'key': STEAM_API_KEY, 'steamid': STEAM_USER, 'count': 8, 'format': 'json'}
r = requests.get('http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001', params=q)

if r.status_code != 200:
    sys.exit(f'Error code { r.status_code } getting data from Steam API')

print(r.text)
