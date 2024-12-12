export interface Address {
  id: number
  address: string
  addressUrl: string
}
export interface Services {
  id: number
  scene: string
  microphones: string
  voiceoverZoom: string
  administrator: string
}

export interface Meetings {
  id: number
  leading: string
  speaker: string
  speechTitle: string
  leadWt: string
  reader: string
  closingPrayer: string
  specialProgram: string
  placeAddress: string
  placeUrl: string
}
