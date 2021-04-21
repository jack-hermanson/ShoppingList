from flask import session
from typing import List


def set_alert(text: str, color: str) -> dict:
    print(f"Received alert text: {text}, color: {color}.")
    if not session.get('alerts'):
        session['alerts'] = []
    new_alert = {
        'text': text,
        'color': color
    }
    session['alerts'].append(new_alert)
    session['alert'] = True
    return new_alert


def get_alerts() -> List[dict] or None:
    print("session.get('alert') is", session.get('alert'))
    if session.get('alert'):
        output = session.get('alerts')
        session.clear()
        print(output)
        return output
    else:
        return None
