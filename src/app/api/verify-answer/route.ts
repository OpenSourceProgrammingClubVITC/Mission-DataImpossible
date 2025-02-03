import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { answer } = await request.json();

    const isCorrect = answer.toLowerCase() === process.env.CTF_CHALLENGE_ANSWER?.toLowerCase();

    return NextResponse.json({ 
      isCorrect 
    });
  } catch (error) {
    return NextResponse.json({ 

      isCorrect: false, 
      error: error
    }, { status: 500 });
  }
}