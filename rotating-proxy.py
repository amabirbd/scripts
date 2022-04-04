import requests
url = 'https://httpbin.org/ip'

proxies = {
'http': 'http://10.10.1.10:3128',
'https': 'http://10.10.1.10:1080',
}

response = requests.get(url,proxies=proxies)
print(response.json())