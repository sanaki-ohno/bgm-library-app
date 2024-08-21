import React from 'react';
import { Helmet } from 'react-helmet-async';

const LicenseTerms = () => {
  return (
    <>
      <Helmet>
        <title>License and Terms of Use | BGM Library</title>
        <meta
          name="description"
          content="BGM Library の利用規約とライセンス条項。無料で高品質な背景音楽を使用する際の詳細な規定と条件をご確認ください。"
        />
        <link rel="canonical" href="https://convoyafro.com/license-terms" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://convoyafro.com/license-terms"
        />
        <meta
          property="og:title"
          content="License and Terms of Use | BGM Library"
        />
        <meta
          property="og:description"
          content="BGM Library の利用規約とライセンス条項。無料で高品質な背景音楽を使用する際の詳細な規定と条件をご確認ください。"
        />
        <meta
          property="og:image"
          content="https://convoyafro.com/path-to-your-og-image.jpg"
        />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://convoyafro.com/license-terms"
        />
        <meta
          property="twitter:title"
          content="License and Terms of Use | BGM Library"
        />
        <meta
          property="twitter:description"
          content="BGM Library の利用規約とライセンス条項。無料で高品質な背景音楽を使用する際の詳細な規定と条件をご確認ください。"
        />
        <meta
          property="twitter:image"
          content="https://convoyafro.com/path-to-your-og-image.jpg"
        />
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-white">
          License and Terms of Use (Details)
        </h1>
        <div className="bg-primary rounded-lg shadow-lg p-6 text-white">
          <p className="mb-4">
            • Please read this carefully before using any audio or music from
            our site.
          </p>
          <p className="mb-4">
            • By using our audio or music, you are deemed to have agreed to the
            following license and terms of use.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">Basic Rules</h2>
          <ol className="list-decimal list-inside mb-4">
            <li className="mb-2">
              The audio and music on this site can be freely used for both
              personal and commercial purposes, free of charge, as long as the
              use complies with this license and terms of use.
            </li>
            <li className="mb-2">
              You are free to arrange or modify the audio and music.
            </li>
            <li className="mb-2">
              We retain the master rights to the audio and the copyright to the
              music.
            </li>
            <li className="mb-2">
              We greatly appreciate it if you provide credit attribution or
              notify us of your use.
            </li>
          </ol>

          <h2 className="text-2xl font-semibold mt-6 mb-4">Use on YouTube</h2>
          <ol className="list-decimal list-inside mb-4">
            <li className="mb-2">
              We will not claim rights, so you can use our content safely on
              monetized channels.
            </li>
            <li className="mb-2">
              If you use our content for "BGM introduction videos" or "BGM
              repost videos" rather than as regular background music, please
              include credit to our site in the video description. We may claim
              rights if credit is not provided.
            </li>
          </ol>

          <h2 className="text-2xl font-semibold mt-6 mb-4">
            Prohibited Actions
          </h2>
          <ol className="list-decimal list-inside mb-4">
            <li className="mb-2">
              Registering our music with copyright management organizations
              without permission
            </li>
            <li className="mb-2">
              Registering our audio with YouTube Content ID or similar
              fingerprinting systems without permission
            </li>
            <li className="mb-2">
              Redistributing our audio or music while falsely claiming to be the
              composer or rights holder
            </li>
            <li className="mb-2">
              Selling our audio or music as is without permission
            </li>
            <li className="mb-2">Defaming this site or our audio and music</li>
          </ol>

          <h2 className="text-2xl font-semibold mt-6 mb-4">
            Other Considerations
          </h2>
          <ol className="list-decimal list-inside mb-4">
            <li className="mb-2">
              If you receive a claim on YouTube for using our audio or music,
              please file a dispute with YouTube.
            </li>
          </ol>

          <h2 className="text-2xl font-semibold mt-6 mb-4">
            Disclaimer and Other Matters
          </h2>
          <ol className="list-decimal list-inside mb-4">
            <li className="mb-2">
              We are not responsible for any issues that may arise from the use
              of our content (audio, music, website, etc.).
            </li>
            <li className="mb-2">
              We are not liable for any damages resulting from the use of our
              content (audio, music, website, etc.).
            </li>
            <li className="mb-2">
              Our content (audio, music, website, etc.) may be changed or
              deleted without notice.
            </li>
            <li className="mb-2">
              We may change this agreement, license, and terms of use at any
              time. When making changes, we will announce them through methods
              we deem appropriate (such as posting on this site) at least 3 days
              before the effective date. Even if you used this site before
              changes to this agreement, license, and terms of use, the changed
              version will apply to you.
            </li>
            <li className="mb-2">
              If any provision of this agreement is found to be invalid or
              unenforceable by a court or other body with valid jurisdiction,
              that provision shall be enforced to the maximum extent possible by
              law, and the other provisions of this agreement shall remain in
              full force and effect.
            </li>
            <li className="mb-2">
              This agreement shall be governed by and construed in accordance
              with the laws of Japan.
            </li>
            <li className="mb-2">
              In the event of a dispute regarding this agreement, the Tokyo
              District Court shall be the court of exclusive jurisdiction for
              the first instance.
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default LicenseTerms;
