import { NextResponse } from "next/server";
import { Twilio } from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilio = new Twilio(accountSid, authToken);

export async function POST(request) {
  try {
    const data = await request.json();
    const { phone, message } = data;

    const newMessage = await twilio.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phone,
    });

    console.log(newMessage.sid);

    return NextResponse.json({ message: "Message sent" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Error sending message" },
      { status: 400 }
    );
  }
}
