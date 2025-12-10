from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, EmailStr
from fastapi.middleware.cors import CORSMiddleware
from database import connect_db
from fastapi import BackgroundTasks
from email_config import send_welcome_email

app = FastAPI()

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173", 
        "http://127.0.0.1:5173",
        "http://localhost:3000",
        "http://localhost:8080",
        "http://127.0.0.1:8080",
        "*"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Signup(BaseModel):
    email: EmailStr


@app.post("/signup")
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



@app.get("/unsubscribe")
def unsubscribe(email: str):
    # DO NOT REMOVE FROM DB → as requested
    print(f"UNSUBSCRIBE CLICKED BY {email}")
    return {"message": f"{email} has been unsubscribed from updates."}



@app.get("/")
def root():
    return {"message": "Vibbe backend running!"}
