export const metadata = {
  title: "Terms & Conditions | AN Global Services",
  description:
    "Read the Terms and Conditions governing the use of AN Global Services website and consultancy services, including compliance, certification, payments, liability, and legal policies.",
};

export default function TermsAndConditions() {
  return (
    <main className="bg-gray-50">
      {/* HERO SECTION */}
      <section className="bg-[#0e4677] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl font-bold tracking-wide">
            TERMS & CONDITIONS
          </h1>
          <p className="mt-4 text-lg text-blue-100">
            AN Global Services Pvt. Ltd.
          </p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="bg-white rounded-xl shadow-md p-8 md:p-12 space-y-10">

          {/* 1 */}
          <div>
            <h2 className="section-title">1. Introduction</h2>
            <p className="section-text">
              <strong>AN Global Services</strong> is a consultancy and compliance support firm based in
              Noida, India, providing assistance related to Indian regulatory approvals,
              certifications, and market-entry services.
            </p>
            <p className="section-text">
              By accessing, browsing, or using our website and/or availing any of our
              services, you (“User”, “Client”, “You”) agree to be legally bound by these
              Terms & Conditions and applicable laws of India.
            </p>
            <p className="section-text">
              This document is an electronic record under the Information Technology Act,
              2000 and does not require physical or digital signatures.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="section-title">2. Scope of Services</h2>
            <ul className="list-disc pl-6 section-text space-y-1">
              <li>BIS Certification (ISI Mark, CRS)</li>
              <li>BEE Registration</li>
              <li>WPC Approval (ETA)</li>
              <li>TEC Certification</li>
              <li>EPR Authorization (Plastic, E-Waste, Battery)</li>
              <li>ISO Certification Support</li>
              <li>Gold Hallmarking Assistance</li>
              <li>Laboratory Setup & Accreditation Support</li>
              <li>Authorized Indian Representative (AIR) services</li>
              <li>Regulatory advisory and market-entry consultancy</li>
            </ul>

            <p className="mt-4 text-red-600 font-medium">
              Important Disclaimer:
            </p>
            <p className="section-text">
              We are not a law firm, testing laboratory, or government authority.
              We do not issue certificates directly. Final approvals are granted
              solely by respective government bodies or notified agencies.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className="section-title">3. User Eligibility</h2>
            <ul className="list-disc pl-6 section-text space-y-1">
              <li>You are at least 18 years of age</li>
              <li>You are legally competent to enter into a binding contract</li>
              <li>You are authorized to represent the entity (if applicable)</li>
            </ul>
          </div>

          {/* 4 */}
          <div>
            <h2 className="section-title">4. Information Collection & Privacy</h2>
            <ul className="list-disc pl-6 section-text space-y-1">
              <li>Name, email, phone number</li>
              <li>Company details</li>
              <li>Product and technical documentation</li>
              <li>Identification and authorization documents</li>
            </ul>
            <p className="section-text mt-3">
              All personal data is processed in accordance with the Digital Personal
              Data Protection Act, 2023 and applicable Indian laws.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="section-title">5. Confidentiality of Client Information</h2>
            <ul className="list-disc pl-6 section-text space-y-1">
              <li>Ownership of documents remains with the client</li>
              <li>Documents are used strictly for service execution</li>
              <li>Disclosure only if required by law or government authority</li>
            </ul>
          </div>

          {/* 6 */}
          <div>
            <h2 className="section-title">6. Third-Party Association</h2>
            <p className="section-text">
              We may coordinate with government departments, testing laboratories,
              certification bodies, and authorized consultants. We are not responsible
              for delays or decisions beyond our control.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="section-title">7. Payment Terms</h2>
            <ul className="list-disc pl-6 section-text space-y-1">
              <li>All fees must be paid in advance</li>
              <li>Payments only to official AN Global Services accounts</li>
              <li>No responsibility for unauthorized payments</li>
            </ul>
          </div>

          {/* 8 */}
          <div>
            <h2 className="section-title">8. Cancellation & Refund Policy</h2>
            <ul className="list-disc pl-6 section-text space-y-1">
              <li>Fees are non-refundable once services commence</li>
              <li>Refunds subject to management discretion</li>
              <li>Government and third-party fees are non-refundable</li>
            </ul>
          </div>

          {/* 9 */}
          <div>
            <h2 className="section-title">9. No Guarantee of Approval</h2>
            <p className="section-text">
              AN Global Services does not guarantee approval, certification timelines,
              or acceptance by regulatory authorities.
            </p>
          </div>

          {/* 10 */}
          <div>
            <h2 className="section-title">10. Limitation of Liability</h2>
            <p className="section-text">
              Our liability shall not exceed the service fee paid.
              We are not liable for indirect losses, policy changes, or force majeure events.
            </p>
          </div>

          {/* 11 */}
          <div>
            <h2 className="section-title">11. Governing Law & Jurisdiction</h2>
            <p className="section-text">
              Governed by the laws of India. Jurisdiction lies with the courts of
              Noida / New Delhi. Arbitration as per Arbitration & Conciliation Act, 1996.
            </p>
          </div>

          {/* 12 */}
          <div>
            <h2 className="section-title">12. Contact Information</h2>
            <p className="section-text">
              <strong>AN Global Services Pvt. Ltd.</strong><br />
              S-63, 7th Floor, Urbtech NPX, Sector 153, Noida, Uttar Pradesh – 201310<br />
              📞 +91 7782069184<br />
              📧 info@anglobalservices.com
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
