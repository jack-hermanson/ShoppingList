from flask import session
from typing import List


def set_alert(text: str, color: str) -> None:
    if not session.get('alerts'):
        session['alerts'] = []
    session['alerts'].append({
        'text': text,
        'color': color
    })
    session['alert'] = True


def get_alert() -> List[dict] or None:
    if session.get('alert'):
        output = session.get('alerts')
        session.clear()
        return output
    else:
        return None
