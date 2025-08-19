import { NextResponse } from 'next/server'
import { createLogger } from '@/lib/logs/console/logger'

const logger = createLogger('API.MicrosoftIdentity')

const body = {
  associatedApplications: [
    {
      applicationId: '5c832c21-eb8e-466c-b5d3-a329d78cf911'
    }
  ]
}

export function GET() {
  logger.info('Served microsoft-identity-association.json via API route')
  return NextResponse.json(body, {
    headers: {
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
      'Content-Type': 'application/json',
    },
  })
}
