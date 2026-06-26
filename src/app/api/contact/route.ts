import { NextRequest, NextResponse } from 'next/server';
import { getClient } from '@/lib/apollo/client';
import { gql } from '@apollo/client';

const CREATE_FORM_SUBMISSION = gql`
  mutation CpCmsFormSubmissionsAdd($input: FormSubmissionInput!) {
    cpCmsFormSubmissionsAdd(input: $input) {
      _id
      status
    }
  }
`;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    const client = getClient();
    await client.mutate({
      mutation: CREATE_FORM_SUBMISSION,
      variables: {
        input: {
          name,
          email,
          phone,
          message,
          formName: 'Contact Form',
          status: 'new',
        },
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ success: false, error: 'Failed to submit form' }, { status: 500 });
  }
}
