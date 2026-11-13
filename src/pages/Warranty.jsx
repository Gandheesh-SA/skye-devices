
import { useState } from "react";
import Footer from "../components/Footer";

const warrantyData = [
  {
    title: "Warranty Coverage",
    content: `Every Skye device purchased directly from www.skyedevices.com is covered by a limited hardware warranty for 12 months from the date of delivery. If the product develops a defect in materials or workmanship during this period under normal consumer use, we will repair or replace the device at no additional cost, subject to the terms of this policy.`
  },
  {
    title: "Dead on Arrival (DOA) — 48 Hours",
    content: `If your Skye device is non-functional upon delivery, please notify us within 48 hours of receiving it by emailing contact@skyedevices.com. Once the issue is verified, we will arrange a replacement at no additional cost. Any issues reported after this period will be assessed under the standard warranty coverage. This reporting period does not limit any rights available to you under applicable consumer protection laws.`
  },
  {
    title: "Scope of Coverage",
    content: `This warranty covers manufacturing and assembly faults, component-level failures under normal usage, electrical or functional failures not caused by misuse, and defects in materials or workmanship that affect the intended functioning of the device.`
  },
  {
    title: "Intended Use Environment",
    content: `Skye devices are designed for everyday consumer use in typical indoor and outdoor environments such as homes, offices, cafes, and travel. The device can tolerate normal variations in temperature, humidity, vibration, shock, and dust consistent with daily handling and transport.

Exposure to extreme or prolonged environmental conditions (e.g., high heat, freezing temperatures, high humidity, heavy dust, impact trauma, or water ingress) may fall outside intended use. If a defect is directly attributable to such extreme exposure, it may not be covered under warranty.`
  },
  {
    title: "Battery and Power Handling",
    content: `If your Skye device includes a rechargeable battery, some reduction in battery performance over time is considered normal and is not treated as a manufacturing defect. Damage caused by incompatible chargers, power adapters, or cables is not covered. Battery swelling or leakage resulting from misuse, overcharging, or non-standard storage is also excluded. Where battery replacement is necessary, it will be handled based on the serviceability and parts availability at the time of the claim.`
  },
  {
    title: "Warranty Exclusions",
    content: `This warranty does not cover damage caused by accidents, drops, impacts, water, spills, crushing, improper handling or storage, unauthorised modifications, tampering or disassembly, or the use of non-approved accessories or power sources. It also excludes cosmetic wear that does not affect the device's functionality, damage caused by fire, pests, power surges, moisture or natural events, commercial or industrial use beyond the intended consumer use, and normal wear and tear associated with regular usage.`
  },
  {
    title: "Spare Parts and Serviceability",
    content: `Where available, spare parts and components may be used for repair or replacement during the warranty period. Serviceability will depend on parts availability, component sourcing, and the feasibility of repair at the time of the claim.

If the required spare parts are unavailable due to discontinuation or other supply constraints, we may offer a replacement device or refund, as appropriate under this policy and applicable law. We do not guarantee indefinite availability of individual spare parts beyond reasonable warranty and consumer protection obligations.`
  },
  {
    title: "How to Make a Warranty Claim",
    content: `To initiate a warranty claim, please email contact@skyedevices.com with your order number, purchase date, and a description of the issue. You may also include photographs or videos showing the problem, where applicable. We may request additional information or evidence to help us assess and verify the claim.`
  },
  {
    title: "Warranty Claim Logistics & Shipping",
    content: `If a device needs to be returned for inspection or servicing, we will share the necessary instructions. For issues confirmed to be covered under warranty, we will arrange or reimburse reasonable shipping costs and carry out the repair or replacement at no additional charge.

If the inspection determines that the issue is not covered under warranty, return shipping charges may apply. Where feasible, we may also offer paid repair options and inform you of the applicable costs before proceeding. We aim to handle every claim in good faith and keep the process simple, fair, and transparent.`
  },
  {
    title: "Inspection & Verification",
    content: `We may request that the device be returned to us for inspection to determine the cause of the issue and whether it qualifies for warranty coverage. Once the assessment is complete, we will inform you of the outcome. If the issue is covered, we will proceed with the applicable remedy. If it is not covered, we may offer paid repair options, where feasible, without any obligation to do so.`
  },
  {
    title: "Remedy: Repair, Replacement, or Refund",
    content: `For valid warranty claims, we will assess the issue and determine the appropriate remedy. Depending on the nature of the defect and the feasibility of servicing, this may include repairing the device or replacing it with a new or refurbished unit of equivalent functionality and performance. If neither repair nor replacement is reasonably practical, we may offer a refund, subject to applicable law.`
  },
  {
    title: "Warranty Period for Repaired or Replaced Units",
    content: `Any repaired or replacement device will remain covered for the remaining duration of the original 12-month warranty period. Repair or replacement does not restart, renew, or extend the original warranty period, unless required by applicable law.`
  },
  {
    title: "Transfer of Warranty",
    content: `This warranty applies only to the original purchaser and is non-transferable. Proof of purchase may be required when making a warranty claim.`
  },
  {
    title: "Limitation of Liability",
    content: `To the maximum extent permitted under applicable law, Skye Devices shall not be liable for indirect, incidental, punitive, or consequential losses arising from the use of, or inability to use, the device. Our liability under this limited warranty is restricted to the applicable repair, replacement, or refund remedy described in this policy. Nothing in this section excludes or limits liability where such exclusion or limitation is not permitted by law.`
  },
  {
    title: "Consumer Law Rights",
    content: `This warranty is provided in addition to your rights under applicable consumer protection laws in India. Nothing in this policy is intended to exclude, restrict, or limit any statutory rights or remedies available to you. Where applicable law provides additional or stronger protections, those rights will prevail.`
  },
  {
    title: "Customer Support",
    content: `If you have any warranty-related questions, claims, or need assistance, please contact us and we will handle all warranty claims fairly, promptly, and transparently.

Skye Devices Private Limited
Email: contact@skyedevices.com
Address: 82, Arunachalam Street,
Chintadripet, Chennai – 600002,
Tamil Nadu, India.`
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
          <h1 className="text-[clamp(28px,2.8vw,44px)] font-extrabold uppercase text-gray-900 mb-2">
            <span className="text-[var(--accent)]">Warranty</span> Policy
          </h1>

          <p className="text-gray-500 mb-6">
            Effective Date: 1 November 2026
          </p>

          <p className="text-gray-600 text-[clamp(15px,1vw,17px)] leading-relaxed mb-12">
            At Skye Devices, we stand behind the quality of our hardware. This
            Warranty Policy explains the coverage provided if your Skye device
            develops a manufacturing or functional defect under normal use, and
            how you can get support from us.
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

