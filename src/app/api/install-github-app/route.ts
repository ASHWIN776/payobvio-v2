import { NextResponse } from 'next/server';

export function GET() {
  const installationUrl = `https://github.com/apps/ayimen-github-app/installations/new`;

  return NextResponse.redirect(installationUrl);
}
