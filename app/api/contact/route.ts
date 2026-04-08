import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();

  const { name, email, company, message } = body;

  if (!name || !email || !company || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  // Mock response — replace with real email/CRM integration
  console.log('Contact form submission:', { name, email, company, message });

  return NextResponse.json({ success: true }, { status: 200 });
}
