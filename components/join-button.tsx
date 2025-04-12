'use client'

import { Button } from "@/components/ui/button"

export default function JoinButton() {
  return (
    <Button 
      className="bg-secondary text-white px-8 w-96 py-3 font-bold rounded-button hover:bg-white hover:bg-opacity-70 hover:text-secondary transition whitespace-nowrap"
      onClick={() => window.open('https://wa.me/254722451812', '_blank')}
    >
      Join Now
    </Button>
  )
}