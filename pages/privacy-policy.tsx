import Head from 'next/head'

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | [Your App]</title>
      </Head>
      <main style={{ padding: '2rem', lineHeight: '1.7' }}>
        <h1>Privacy Policy</h1>
        <p><strong>Last Updated:</strong> 19 July 2025</p>

        <p>
          Your privacy is important to us. This Privacy Policy explains how <strong>NutriSnap</strong> (“we”, “our”, or “us”) collects, uses, and protects your information when you use our mobile app, website, and related services (the "Service").
        </p>

        <p>By using the Service, you agree to the practices described in this policy.</p>

        <h2>1. Information We Collect</h2>
        <p>We may collect the following types of data:</p>

        <h3>a. Personal Information</h3>
        <ul>
          <li>Name</li>
          <li>Billing and subscription info (if applicable)</li>
        </ul>

        <h3>b. Usage Data</h3>
        <ul>
          <li>Log data (IP address, browser type, access times)</li>
          <li>App activity (features used, actions taken)</li>
          <li>Device information (model, OS version)</li>
        </ul>

        <h3>c. Calendar & AI Input Data (if applicable)</h3>
        <ul>
          <li>Calendar events, reminders, task entries</li>
          <li>AI prompts or text you input into the system</li>
        </ul>
        <p>⚠️ All AI input is stored only to enhance the service and may be used to improve model responses, unless you opt out.</p>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>Provide and maintain the Service</li>
          <li>Personalize your user experience</li>
          <li>Respond to support requests</li>
          <li>Analyze usage to improve features</li>
          <li>Process payments and manage subscriptions</li>
          <li>Ensure security and prevent abuse</li>
        </ul>

        <h2>3. Sharing of Information</h2>
        <p>We do not sell or rent your personal data. We may share your information with:</p>
        <ul>
          <li>Service providers (hosting, analytics, payment processors)</li>
          <li>Legal authorities if required by law</li>
          <li>Third parties with your consent</li>
        </ul>
        <p>All third-party services comply with data protection laws and are bound by confidentiality.</p>

        <h2>4. Data Storage & Security</h2>
        <ul>
          <li>We use industry-standard encryption and secure data centers.</li>
          <li>User passwords are stored hashed and salted.</li>
          <li>AI input data may be anonymized before processing.</li>
          <li>We retain your data as long as needed for service purposes unless legally required to keep it longer.</li>
        </ul>

        <h2>5. Cookies & Analytics</h2>
        <p>We use cookies and similar technologies to provide functionality and improve the Service.</p>
        <p>We may use third-party analytics tools (like Google Analytics) to understand usage behavior.</p>

        <h2>6. Your Rights</h2>
        <p>Depending on your location, you may have the right to:</p>
        <ul>
          <li>Access or correct your personal data</li>
          <li>Request deletion of your data</li>
          <li>Opt out of marketing or analytics</li>
          <li>Request a copy of your stored data</li>
        </ul>
        <p>To exercise any of these rights, contact us at <a href="mailto:akonymike@gmail.com">akonymike@gmail.com</a>.</p>

        <h2>7. Children's Privacy</h2>
        <p>Our Service is not intended for children under 13 (or 16 in some regions). We do not knowingly collect data from children.</p>

        <h2>8. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. If we make material changes, we will notify you via the app or by email. Your continued use of the Service means you accept the updated terms.</p>

        <h2>9. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
        <p>📧 <a href="mailto:akonymike@gmail.com">akonymike@gmail.com</a></p>
      </main>
    </>
  )
}
