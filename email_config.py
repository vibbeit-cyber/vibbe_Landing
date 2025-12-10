from fastapi_mail import FastMail, MessageSchema, ConnectionConfig, MessageType
from pydantic import EmailStr
from dotenv import load_dotenv
import os

load_dotenv()

conf = ConnectionConfig(
    MAIL_USERNAME=os.getenv("MAIL_USERNAME"),
    MAIL_PASSWORD=os.getenv("MAIL_PASSWORD"),
    MAIL_FROM=os.getenv("MAIL_FROM"),
    MAIL_SERVER=os.getenv("MAIL_SERVER"),
    MAIL_PORT=os.getenv("MAIL_PORT"),
    MAIL_STARTTLS=True,
    MAIL_SSL_TLS=False,
    USE_CREDENTIALS=True,
    TEMPLATE_FOLDER="."   # root backend folder
)


async def send_welcome_email(email: EmailStr):

    unsubscribe_link = f"http://127.0.0.1:8000/unsubscribe?email={email}"

    message = MessageSchema(
        subject="Welcome to Vibbe Social Beta!",
        recipients=[email],
        subtype=MessageType.html,
        template_body={"unsubscribe_link": unsubscribe_link},
        attachments=[
            {
                "file": "static/images/vibbe_logo.png",
                "headers": {"Content-ID": "<vibbe_logo>"},
            }
        ]
    )

    fm = FastMail(conf)

    try:
        await fm.send_message(message, template_name="hello_email.html")
        print("📨 EMAIL SENT SUCCESSFULLY →", email)
    except Exception as e:
        print("❌ EMAIL FAILED →", email)
        print("Error:", e)
        raise e
