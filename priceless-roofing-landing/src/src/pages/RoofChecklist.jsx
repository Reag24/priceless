// src/pages/RoofChecklist.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const RoofChecklist = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '700px', margin: '0 auto' }}>
      <h1 style={{ color: 'darkred' }}>
        Full Roof Replacement Checklist for Wilmington, Leland, and the 910 Area
      </h1>
      <p>Here’s everything we usually replace on a full, up-to-code roof job in <b>#wilmingtonnc</b> and the 910:</p>
      <ol>
        <li><b>Shingles or Metal</b> – your roof material, the one everyone knows</li>
        <li><b>Underlayment</b> – the water resistant barrier put down under your shingles</li>
        <li><b>Starter Strip</b> – on the first row of shingles (stops wind uplift)</li>
        <li><b>Ridge Cap</b> – the shingles that cover the peak of your roof</li>
        <li><b>Drip Edge</b> – metal trim that keeps water off your fascia</li>
        <li><b>Flashing</b> – metal pieces that seal around chimneys, walls, and exposed areas</li>
        <li><b>Pipe Boots</b> – rubber seals around plumbing vents</li>
        <li><b>Ventilation</b> – ridge vents, box vents, or turbines</li>
        <li><b>Decking</b> – wood underlayment (replaced if rotted)</li>
        <li><b>Fascia Repairs</b> – if damaged or rotted</li>
        <li><b>Nails</b> – 6 per shingle</li>
      </ol>
      <p>
        We also clean up every nail, protect landscaping, and leave your property better than we found it.
      </p>
      <p>
        Thinking about a new roof? Get a free inspection, estimate, and a breakdown like this.
      </p>
      <p style={{ fontStyle: 'italic', fontSize: '0.9rem' }}>
        #wilmingtonnc #wilmingtonncrealestate #lelandnc #hampstead #surfcitync #southportnc #castlehaynenc #roofing
      </p>
      <Link to="/" style={{ display: 'inline-block', marginTop: '1.5rem', backgroundColor: 'darkred', padding: '0.5rem 1rem', color: 'white', borderRadius: '5px', textDecoration: 'none' }}>
        ⬅️ Back to Home
      </Link>
    </div>
  );
};

export default RoofChecklist;
