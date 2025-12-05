import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import GuestMessage from '@/models/GuestMessage';

// POST - Create new guest message
export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const { name, message, willAttend, attendWith, guestOf } = body;

    // Validation
    if (!name || !name.trim()) {
      return NextResponse.json(
        { success: false, error: 'Vui lòng nhập tên của bạn' },
        { status: 400 }
      );
    }

    if (!message || !message.trim()) {
      return NextResponse.json(
        { success: false, error: 'Vui lòng nhập lời nhắn' },
        { status: 400 }
      );
    }

    // Create new message
    const guestMessage = await GuestMessage.create({
      name: name.trim(),
      message: message.trim(),
      willAttend: willAttend || '',
      attendWith: attendWith || '',
      guestOf: guestOf || '',
    });

    return NextResponse.json(
      {
        success: true,
        data: guestMessage,
        message: 'Lời nhắn đã được gửi thành công',
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error creating guest message:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Có lỗi xảy ra khi gửi lời nhắn',
      },
      { status: 500 }
    );
  }
}

// GET - Get all guest messages
export async function GET(request: NextRequest) {
  try {
    await connectDB();

    // Get query parameters for pagination
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '50');
    const skip = (page - 1) * limit;

    // Get messages sorted by newest first
    const messages = await GuestMessage.find({})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    // Get total count for pagination
    const total = await GuestMessage.countDocuments({});

    return NextResponse.json(
      {
        success: true,
        data: messages,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit),
        },
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error fetching guest messages:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Có lỗi xảy ra khi tải lời nhắn',
      },
      { status: 500 }
    );
  }
}

