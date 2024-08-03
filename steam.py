import json, os, requests, sys

STEAM_API_KEY = os.getenv('STEAM_API_KEY')
STEAM_USER    = os.getenv('STEAM_USER_ID')
STEAM_COUNT   = int(os.getenv('STEAM_COUNT'))

q = {'key': STEAM_API_KEY, 'steamid': STEAM_USER, 'count': STEAM_COUNT, 'format': 'json'}
r = requests.get('https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001', params=q)

if r.status_code != 200:
    sys.exit(f'Error code { r.status_code } getting data from Steam API')

data = json.loads(r.text)
if 'games' in data['response']:
    print(json.dumps(data['response']['games']))
else:
    print(json.dumps([]))
