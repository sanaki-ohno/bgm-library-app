import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-white">Privacy Policy</h1>
      <div className="bg-primary rounded-lg shadow-lg p-6 text-white">
        <p className="mb-4">Last updated: [Date]</p>
        <p className="mb-4">
          At BGM Library, we are committed to protecting your privacy and
          personal data. This Privacy Policy explains how we collect, use, and
          safeguard your information when you use our website and services, in
          compliance with the General Data Protection Regulation (GDPR).
        </p>

        <h2 className="text-2xl font-semibold mb-2">
          1. Information We Collect
        </h2>
        <p className="mb-4">
          We collect and process the following types of personal data:
        </p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>Identity information (name, username)</li>
          <li>Contact information (email address)</li>
          <li>Technical data (IP address, browser type and version)</li>
          <li>
            Usage data (information on how you use our website and services)
          </li>
          <li>
            Transaction data (details about purchases you make through our
            service)
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">
          2. How We Use Your Information
        </h2>
        <p className="mb-4">
          We use your personal data for the following purposes:
        </p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>To provide and maintain our service</li>
          <li>To notify you about changes to our service</li>
          <li>
            To allow you to participate in interactive features of our service
          </li>
          <li>To provide customer support</li>
          <li>
            To gather analysis or valuable information so that we can improve
            our service
          </li>
          <li>To monitor the usage of our service</li>
          <li>To detect, prevent and address technical issues</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">
          3. Legal Basis for Processing
        </h2>
        <p className="mb-4">
          We process your personal data under the following legal bases:
        </p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>Your consent</li>
          <li>The performance of a contract with you</li>
          <li>Compliance with a legal obligation</li>
          <li>The protection of your vital interests</li>
          <li>The performance of a task carried out in the public interest</li>
          <li>
            For our legitimate interests, provided your fundamental rights do
            not override these interests
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">4. Data Retention</h2>
        <p className="mb-4">
          We will retain your personal data only for as long as is necessary for
          the purposes set out in this Privacy Policy. We will retain and use
          your personal data to the extent necessary to comply with our legal
          obligations, resolve disputes, and enforce our legal agreements and
          policies.
        </p>

        <h2 className="text-2xl font-semibold mb-2">
          5. Your Data Protection Rights
        </h2>
        <p className="mb-4">Under the GDPR, you have the following rights:</p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>
            The right to access, update or delete the information we have on you
          </li>
          <li>The right of rectification</li>
          <li>The right to object</li>
          <li>The right of restriction</li>
          <li>The right to data portability</li>
          <li>The right to withdraw consent</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">
          6. International Data Transfers
        </h2>
        <p className="mb-4">
          Your information, including personal data, may be transferred to — and
          maintained on — computers located outside of your state, province,
          country or other governmental jurisdiction where the data protection
          laws may differ from those of your jurisdiction. If you are located
          outside [Your Country] and choose to provide information to us, please
          note that we transfer the data, including personal data, to [Your
          Country] and process it there.
        </p>

        <h2 className="text-2xl font-semibold mb-2">7. Use of Cookies</h2>
        <p className="mb-4">
          Our website uses cookies to enhance your browsing experience and
          provide personalized services. We use the following types of cookies:
        </p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>
            Necessary cookies: These cookies are essential for the website to
            function properly.
          </li>
          <li>
            Analytics cookies: We use these cookies to analyze how visitors use
            our website and to monitor website performance. This helps us to
            provide a high-quality experience by identifying and fixing any
            issues quickly.
          </li>
          <li>
            Advertising cookies: These cookies are used to make advertising
            messages more relevant to you and your interests. They also perform
            functions like preventing the same ad from continuously reappearing,
            ensuring that ads are properly displayed, and in some cases
            selecting advertisements that are based on your interests.
          </li>
        </ul>
        <p className="mb-4">
          You will be asked to consent to our use of cookies every 24 hours. You
          can adjust your cookie preferences at any time by declining or
          accepting all cookies through the consent banner that appears on our
          website.
        </p>

        <h2 className="text-2xl font-semibold mb-2">
          8. Changes to This Privacy Policy
        </h2>
        <p className="mb-4">
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page and
          updating the "Last updated" date at the top of this Privacy Policy.
        </p>

        <h2 className="text-2xl font-semibold mb-2">9. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us
          at:
        </p>
        <p className="mb-4">[Your Contact Information]</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
