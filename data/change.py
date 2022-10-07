import json

json_new = {[]}

with open('./city.json', 'r', encoding='utf8') as fp:
    json_data = json.load(fp)
    print(json_data)

for i in range(len(list(json_data.keys))):
    json_new[0].append