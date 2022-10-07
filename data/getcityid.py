"""
作者:lil ming
日期:2022年10月03日
"""
import json
import requests
res = requests.get("https://j.i8tq.com/weather2020/search/city.js")
print(eval(res.text.split("\n",1)[1]))