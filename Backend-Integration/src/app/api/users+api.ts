import { db } from '../../lib/db'

/* =========================
   GET API
========================= */

export async function GET() {
  try {
    const users = await db.execute(
      "SELECT * FROM users_data"
    )

    return Response.json(users.rows, {
      status: 200,
    })
  } catch (error) {
    return Response.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    )
  }
}

/* =========================
   POST API
========================= */

export async function POST(request: Request) {
  try {
    const { name, email } = await request.json()

    if (!name || !email) {
      return new Response(
        "Name and email are required",
        { status: 400 }
      )
    }

    const result = await db.execute(
      "INSERT INTO users_data (name,email) VALUES (?,?)",
      [name, email]
    )

    return Response.json(
      {
        id: result.lastInsertRowid,
        name,
        email,
      },
      { status: 201 }
    )
  } catch (error) {
    return Response.json(
      { error: "Failed to create user" },
      { status: 500 }
    )
  }
}