from fastapi import FastAPI, HTTPException, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from mangum import Mangum
from email_config import send_welcome_email
from database import connect_db

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Signup(BaseModel):
    email: EmailStr

@app.post("/api/signup")
async def signup_user(data: Signup, background_tasks: BackgroundTasks):
    conn = connect_db()
    cursor = conn.cursor()

    try:
        cursor.execute("INSERT INTO beta_users (email) VALUES (%s)", (data.email,))
        conn.commit()

        background_tasks.add_task(send_welcome_email, data.email)

        return {"message": "Signup successful", "email": data.email}
    except Exception as e:
        print("DB ERROR:", e)
        raise HTTPException(status_code=400, detail="Email already exists")
    finally:
        cursor.close()
        conn.close()


@app.get("/api/unsubscribe")
def unsubscribe(email: str):
    print(f"UNSUBSCRIBE CLICKED → {email}")
    return {"message": f"{email} has been unsubscribed."}


@app.get("/api")
def root():
    return {"message": "Vercel FastAPI backend working!"}


# Vercel serverless adapter
handler = Mangum(app)
