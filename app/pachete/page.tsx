import React from 'react'
import { Metadata } from "next";
import Packages from '@/components/packages';

export const metadata: Metadata = {
  title: "Pachete Evenimente & Oferte Speciale",
  description: "Alege pachetele complete Tomis Events pentru nunta sau evenimentul tău în Constanța. Oferte personalizate și prețuri avantajoase pentru servicii premium.",
  keywords: ['oferte nunta constanta', 'preturi pachete evenimente', 'pachete nunta', 'oferta fum greu si artificii', 'reduceri servicii evenimente'],
  alternates: {
    canonical: 'https://tomisevents.com/pachete',
  },
};

const Pachete = () => {
  return (
    <div>
      <Packages/>
    </div>
  )
}

export default Pachete