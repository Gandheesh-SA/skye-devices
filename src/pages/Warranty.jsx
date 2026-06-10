
import { useState } from "react";
import Footer from "../components/Footer";

const warrantyData = [
  {
    title: "Warranty Coverage",
    content: `Skye devices are covered by a limited hardware warranty for a period of 12 months from the date of delivery. If the product exhibits a defect in materials or workmanship during the warranty period under normal consumer use, we will repair or replace the device at no additional cost to you.`
  },
  {
    title: "Dead on Arrival (DOA) — 48 Hours",
    content: `If your device is non-functional upon delivery (Dead on Arrival), you must notify us within 48 hours of receipt. Verified DOA cases will be eligible for replacement at no extra cost. Claims submitted after the 48-hour period will be evaluated under standard warranty rules.`
  },
  {
    title: "Scope of Coverage",
    content: `This warranty covers defects arising from:
• Manufacturing and assembly faults
• Component-level failures under normal usage
• Electrical and functional failures not caused by misuse
• Material or workmanship defects that impair intended use`
  },
  {
    title: "Intended Use Environment",
    content: `Skye devices are designed for everyday consumer use in typical indoor and outdoor environments such as homes, offices, cafes, and travel. The device can tolerate normal variations in temperature, humidity, vibration, shock, and dust consistent with daily handling and transport.

Exposure to extreme or prolonged environmental conditions (e.g., high heat, freezing temperatures, high humidity, heavy dust, impact trauma, or water ingress) may fall outside intended use. If a defect is directly attributable to such extreme exposure, it may not be covered under warranty.`
  },
  {
    title: "Battery & Power Handling",
    content: `If your Skye device includes a rechargeable battery, the following apply:
• Battery performance degradation over time is expected and not considered a defect
• Damage due to use of incompatible chargers, power adapters, or cables is excluded
• Battery swelling or leakage caused by misuse, overcharging, or non-standard storage is excluded
• Battery replacement, if necessary, will follow serviceability rules applicable at the time of claim`
  },
  {
    title: "Exclusions",
    content: `This warranty does not cover:
• Accidental damage (drops, impact, water, spills, crushing, etc.)
• Improper handling or storage
• Unauthorized modifications, tampering, or disassembly
• Use with non-approved accessories or power sources
• Cosmetic wear that does not affect performance
• Damage due to fire, pests, surges, moisture, or natural events
• Commercial or industrial use beyond intended consumer use
• Normal wear and tear consistent with usage`
  },
  {
    title: "Spare Parts & Serviceability Disclosure",
    content: `Where available, spare parts and components may be offered for repair or replacement during the warranty period. Serviceability depends on parts availability, production cycles, and component sourcing.

If spare parts are unavailable due to discontinuation or other supply constraints, we may offer a device replacement or refund in accordance with this policy. Nothing in this section obligates us to maintain indefinite spare part availability beyond reasonable consumer warranty norms in India.`
  },
  {
    title: "How to Make a Warranty Claim",
    content: `To initiate a claim, email contact@skyedevices.com with:
• Order number and purchase date
• Description of the issue
• Photo or video evidence (if applicable)

We may request additional information for verification.`
  },
  {
    title: "Warranty Claim Logistics & Shipping",
    content: `For warranty claims, customers will be required to ship the product to us for inspection. If the issue is covered under warranty, we will reimburse reasonable shipping costs and repair or replace the product at no additional charge.

If inspection determines the issue is not covered under warranty, return shipping charges may apply, and we may offer repair options at a reasonable cost. We approach warranty claims in good faith and aim to keep the process simple, fair, and transparent for our customers.`
  },
  {
    title: "Inspection & Verification",
    content: `We may request the device be returned for inspection. If the issue is confirmed as warranty-eligible, we will proceed with repair or replacement. If not eligible, we will notify you and offer paid repair options (if feasible) without obligation.`
  },
  {
    title: "Remedy: Repair, Replacement, or Refund",
    content: `For valid claims, we will, at our discretion:
• Repair the device, or
• Replace with a new or refurbished unit of equal performance

If neither repair nor replacement is practical, we may offer a refund. These remedies constitute our full obligation under this warranty.`
  },
  {
    title: "Warranty Period for Repaired or Replaced Units",
    content: `Repaired or replaced devices remain covered for the balance of the original 12-month warranty. The warranty period does not renew or extend.`
  },
  {
    title: "Transfer of Warranty",
    content: `This warranty applies only to the original purchaser and is non-transferable.`
  },
  {
    title: "Limitation of Liability",
    content: `To the maximum extent allowed by law, Skye Devices is not liable for indirect, incidental, punitive, or consequential losses. Our liability is strictly limited to repair, replacement, or refund of the device.`
  },
  {
    title: "Consumer Law Rights",
    content: `Nothing in this policy limits any rights you may have under applicable consumer protection laws in India. Where consumer law provides additional remedies, those rights apply in addition to this warranty.`
  },
  {
    title: "Customer Support",
    content: `For warranty queries or claims, contact:

contact@skyedevices.com

We aim to handle all claims fairly, promptly, and transparently.`
  }
];

export default function WarrantyPolicyPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="bg-white">
        <div className="max-w-[900px] mx-auto px-[clamp(20px,5vw,120px)] py-[clamp(80px,10vh,140px)]">
          <h1 className="text-[clamp(28px,2.8vw,44px)] font-semibold text-gray-900 mb-2">
            Warranty Policy
          </h1>

          <p className="text-gray-500 mb-6">
            Effective Date: 01 June 2026
          </p>

          <p className="text-gray-600 text-[clamp(15px,1vw,17px)] leading-relaxed mb-12">
            At Skye Devices, we stand behind the quality of our hardware. This
            Warranty Policy explains how we support you if your Skye device
            develops a manufacturing or functional defect under normal use.
          </p>

          <div className="space-y-6">
            {warrantyData.map((section, index) => (
              <div
                key={index}
                className="border-b border-gray-200 pb-5"
              >
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full text-left flex justify-between items-center text-[clamp(16px,1.1vw,18px)] font-medium text-gray-900"
                >
                  <span>
                    {index + 1}. {section.title}
                  </span>

                  <span className="text-xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="mt-4 whitespace-pre-line text-gray-600 text-[clamp(15px,1vw,17px)] leading-relaxed">
                    {section.content.includes("contact@skyedevices.com") ? (
                      <>
                        {section.content.replace(
                          "contact@skyedevices.com",
                          ""
                        )}
                        <a
                          href="mailto:contact@skyedevices.com"
                          className="underline"
                        >
                          contact@skyedevices.com
                        </a>
                      </>
                    ) : (
                      section.content
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

