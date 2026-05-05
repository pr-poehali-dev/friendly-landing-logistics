import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправка заявки с сайта на email владельца через Яндекс SMTP."""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': ''
        }

    body = json.loads(event.get('body', '{}'))
    name = body.get('name', '').strip()
    phone = body.get('phone', '').strip()
    comment = body.get('comment', '').strip()

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Имя и телефон обязательны'}, ensure_ascii=False)
        }

    smtp_user = 'i@mitja1386.ru'
    smtp_password = os.environ['SMTP_PASSWORD']

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка с сайта — {name}'
    msg['From'] = smtp_user
    msg['To'] = smtp_user

    html = f"""
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #c97b3a; padding: 24px; border-radius: 12px 12px 0 0;">
        <h2 style="color: white; margin: 0; font-size: 22px;">Новая заявка с сайта</h2>
        <p style="color: rgba(255,255,255,0.8); margin: 6px 0 0;">Грузоперевозки СПб — Вологда</p>
      </div>
      <div style="background: #fff; padding: 24px; border: 1px solid #e8ddd0; border-top: none; border-radius: 0 0 12px 12px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; color: #888; width: 130px; vertical-align: top;">Имя:</td>
            <td style="padding: 10px 0; color: #1a1a1a; font-weight: 600;">{name}</td>
          </tr>
          <tr style="border-top: 1px solid #f0e8de;">
            <td style="padding: 10px 0; color: #888; vertical-align: top;">Телефон:</td>
            <td style="padding: 10px 0; color: #1a1a1a; font-weight: 600;">
              <a href="tel:{phone}" style="color: #c97b3a;">{phone}</a>
            </td>
          </tr>
          {'<tr style="border-top: 1px solid #f0e8de;"><td style="padding: 10px 0; color: #888; vertical-align: top;">Комментарий:</td><td style="padding: 10px 0; color: #1a1a1a;">' + comment + '</td></tr>' if comment else ''}
        </table>
      </div>
    </div>
    """

    msg.attach(MIMEText(html, 'html', 'utf-8'))

    with smtplib.SMTP_SSL('smtp.yandex.ru', 465) as server:
        server.login(smtp_user, smtp_password)
        server.sendmail(smtp_user, smtp_user, msg.as_string())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'ok': True})
    }