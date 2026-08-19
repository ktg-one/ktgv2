import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, phone, company, service, message } = data;

    // Validate required fields
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "Please provide your full name." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid business email address." },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 6) {
      return NextResponse.json(
        { error: "Please provide a valid contact phone number." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        { error: "Please describe the bottleneck or requirement eating your week." },
        { status: 400 }
      );
    }

    // In production, dispatch notification / CRM entry / email
    // Log submission details safely
    console.log("[Good'ai Contact Submission Received]:", {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      company: company ? company.trim() : "Not provided",
      service: service || "General Automation",
      messageLength: message.length,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out. A human will review your bottleneck and reply within one business day.",
        receivedAt: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("[Good'ai Contact Error]:", err);
    return NextResponse.json(
      { error: "Failed to process consultation request. Please call 08 7741 4191 directly." },
      { status: 500 }
    );
  }
}
