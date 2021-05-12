import requests

LOGGER_URL = "https://jack-logger.herokuapp.com/api/logs"


def log(body: str, level: int, extra_info: dict or str or None = None):
    requests.post(LOGGER_URL, {
        "body": body,
        "appId": 1,
        "level": level,
        "extraInfo": extra_info
    })
