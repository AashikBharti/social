import db from "@/prisma";
const bcrypt = require("bcrypt");




export async function POST(request: Request) {
  const data = await request.json();
  // console.log(data);
  const { firstname, lastname, password, email } = data;
  const name = firstname + " " + lastname;

  if (!name || !email || !password) {
    return new Response(
      JSON.stringify({ success: false, message: "invalid email password" }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  const user = await db.user.findUnique({
    where: { email },
  });

  if (user) {
    return Response.json({
      message: "user exists",
      success: false,
    });
  }

  const hash = await bcrypt.hashSync(password, 10);
  const createUser = await db.user.create({
    data: {
      name: name,
      email: email,
      password: hash,
    },
  });

  return new Response(JSON.stringify({ success: true, createUser }), {
    headers: { "Content-Type": "application/json" },
  });
}
