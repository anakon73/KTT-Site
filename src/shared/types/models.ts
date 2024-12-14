export interface Address {
  id: number
  address: string
  addressUrl: string
}
export interface Services {
  id: number
  scene: string
  date: Date
  microphones: string
  voiceoverZoom: string
  administrator: string
}

export interface Meetings {
  id: number
  date: Date
  leading: string
  speaker: string | null
  speechTitle: string | null
  leadWt: string | null
  reader: string | null
  closingPrayer: string
  specialProgram: string | null
  address: Address
  status: {
    id: number
    title: string
  }
  ministryMeeting: {
    id: number
    date: Date
    leader: string
  }
}

export interface FriendlyMeeting {
  id: number
  date: Date
  description: string
  inviting: string
  address: string
  addressUrl: string
}

export interface MinistryMeeting {
  id: number
  date: Date
  leader: string
  address: Address
  friendlyMeeting: FriendlyMeeting
}
