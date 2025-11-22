import React, { useEffect } from 'react';
import { ArrowLeft, ShieldCheck, FileText, RefreshCcw, Mail, Lock, AlertTriangle } from 'lucide-react';

export type LegalDocType = 'privacy' | 'terms' | 'refund' | 'dmca' | 'contact';

interface LegalPageProps {
  type: LegalDocType;
  onBack: () => void;
}

const LegalPage: React.FC<LegalPageProps> = ({ type, onBack }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  const getContent = () => {
    switch (type) {
      case 'refund':
        return {
          title: "Refund Policy",
          icon: <RefreshCcw size={32} className="text-primary-500" />,
          date: "Last Updated: January 10, 2025",
          content: (
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg font-medium text-white">
                At IPTVNOVA, we strive to provide the best IPTV Subscription experience possible. However, we understand that technical issues can arise.
              </p>
              
              <h3 className="text-xl font-bold text-white mt-6">1. 7-Day Money-Back Guarantee</h3>
              <p>
                We offer a comprehensive <strong>7-Day Money-Back Guarantee</strong> for all new subscriptions. If you are unable to get our service working on your device and our support team cannot resolve the issue within this timeframe, we will issue a full refund.
              </p>

              <h3 className="text-xl font-bold text-white mt-6">2. Eligible Refund Scenarios</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Technical Failure:</strong> The server is completely inaccessible for more than 48 hours.</li>
                <li><strong>Incompatibility:</strong> Your device is listed as compatible, but our support team cannot help you connect.</li>
                <li><strong>Double Charge:</strong> You were accidentally charged twice for the same plan.</li>
              </ul>

              <h3 className="text-xl font-bold text-white mt-6">3. Non-Refundable Situations</h3>
              <p>
                Refunds are generally <strong>not</strong> provided for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>User inability to set up the device without following our provided guides.</li>
                <li>Slow internet connection on the user's end (Minimum 20Mbps required for 4K).</li>
                <li>Ordering the wrong subscription by mistake and using it.</li>
                <li>Change of mind after 7 days of service usage.</li>
              </ul>

              <h3 className="text-xl font-bold text-white mt-6">4. How to Request a Refund</h3>
              <p>
                To initiate a refund, please contact our support team at <span className="text-primary-400">support@iptvnova.com</span> with your order number and a description of the issue. We aim to process all verified refund requests within 3-5 business days.
              </p>
            </div>
          )
        };
      case 'terms':
        return {
          title: "Terms of Service",
          icon: <FileText size={32} className="text-primary-500" />,
          date: "Last Updated: January 10, 2025",
          content: (
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Welcome to IPTVNOVA. By accessing our website and using our IPTV Provider services, you agree to comply with the following terms and conditions.
              </p>
              
              <h3 className="text-xl font-bold text-white mt-6">1. Service Usage</h3>
              <p>
                IPTVNOVA provides IPTV subscriptions for personal, non-commercial use only. You are not permitted to re-stream, broadcast, or distribute the content provided through our servers to the public.
              </p>

              <h3 className="text-xl font-bold text-white mt-6">2. Account Sharing</h3>
              <p>
                Your subscription allows for a specific number of simultaneous connections (1 to 4 devices) depending on your purchased plan. Sharing your account credentials with others beyond your household limit may result in permanent account suspension without refund.
              </p>

              <h3 className="text-xl font-bold text-white mt-6">3. Content Availability</h3>
              <p>
                While we strive to keep all 22,000+ channels and VOD content available 24/7, channel lineups are subject to change without notice based on source availability and technical maintenance.
              </p>

              <h3 className="text-xl font-bold text-white mt-6">4. Payment & Renewal</h3>
              <p>
                Payments are processed securely. We do not store your full credit card details. Subscriptions do not auto-renew unless explicitly set up by the user. You are responsible for ensuring your payment method is valid.
              </p>
            </div>
          )
        };
      case 'privacy':
        return {
          title: "Privacy Policy",
          icon: <Lock size={32} className="text-primary-500" />,
          date: "Last Updated: January 10, 2025",
          content: (
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Your privacy is our priority. As a premium IPTV Provider, IPTVNOVA is committed to protecting your personal information.
              </p>
              
              <h3 className="text-xl font-bold text-white mt-6">1. Information We Collect</h3>
              <p>
                We collect only the minimum information necessary to provide your service:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Email Address:</strong> To send your login credentials and setup guides.</li>
                <li><strong>Payment Information:</strong> Processed securely by third-party gateways (we do not store card numbers).</li>
                <li><strong>MAC Address:</strong> To activate your specific device (if applicable).</li>
              </ul>

              <h3 className="text-xl font-bold text-white mt-6">2. How We Use Your Data</h3>
              <p>
                We use your data solely for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Activating your IPTV Subscription.</li>
                <li>Providing customer support and troubleshooting.</li>
                <li>Sending important service updates (e.g., downtime notices).</li>
              </ul>

              <h3 className="text-xl font-bold text-white mt-6">3. Zero-Log Policy</h3>
              <p>
                We do not monitor or log your viewing habits. What you watch is your private business. We recommend using a VPN if you wish to hide your streaming activity from your ISP, but it is not required for our service to function.
              </p>
            </div>
          )
        };
      case 'dmca':
        return {
          title: "DMCA Compliance",
          icon: <AlertTriangle size={32} className="text-primary-500" />,
          date: "Last Updated: January 10, 2025",
          content: (
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                IPTVNOVA respects the intellectual property rights of others and expects its users to do the same. In accordance with the Digital Millennium Copyright Act of 1998, we will respond expeditiously to claims of copyright infringement committed using the IPTVNOVA service.
              </p>
              
              <h3 className="text-xl font-bold text-white mt-6">1. Service Provider Status</h3>
              <p>
                IPTVNOVA acts as a conduit for third-party content. We do not host, store, or upload media files to our servers. We simply provide access to streams available on the public internet.
              </p>

              <h3 className="text-xl font-bold text-white mt-6">2. Takedown Notices</h3>
              <p>
                If you are a copyright owner, or are authorized to act on behalf of one, please report alleged copyright infringements taking place on or through the Site by sending a notice to our designated agent at <span className="text-primary-400">dmca@iptvnova.com</span> containing:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Identification of the copyrighted work claimed to have been infringed.</li>
                <li>Identification of the material that is claimed to be infringing.</li>
                <li>Your contact information (address, telephone number, and email).</li>
                <li>A statement that you have a good faith belief that use of the material is not authorized by the copyright owner.</li>
              </ul>
            </div>
          )
        };
      case 'contact':
        return {
          title: "Contact Support",
          icon: <Mail size={32} className="text-primary-500" />,
          date: "Available 24/7/365",
          content: (
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg text-white">
                Need help with your IPTVNOVA subscription? Our dedicated support team is here to assist you.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                 <div className="bg-dark-800 p-6 rounded-xl border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><ShieldCheck className="text-primary-500"/> Technical Support</h3>
                    <p className="mb-4">Having trouble setting up Tivimate, Smarters, or your MAG box?</p>
                    <a href="mailto:support@iptvnova.com" className="text-primary-400 font-bold hover:underline">support@iptvnova.com</a>
                 </div>
                 <div className="bg-dark-800 p-6 rounded-xl border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><FileText className="text-primary-500"/> Sales & Billing</h3>
                    <p className="mb-4">Questions about pricing, renewals, or upgrades?</p>
                    <a href="mailto:sales@iptvnova.com" className="text-primary-400 font-bold hover:underline">sales@iptvnova.com</a>
                 </div>
              </div>

              <h3 className="text-xl font-bold text-white mt-8">Before You Contact Us</h3>
              <p>
                To ensure the fastest resolution, please check our <button onClick={onBack} className="text-primary-400 underline">Setup Guide</button> and <button onClick={onBack} className="text-primary-400 underline">FAQ</button> sections first. 90% of issues are resolved by:
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Restarting your internet router (Power cycle).</li>
                <li>Clearing the cache of your IPTV app.</li>
                <li>Checking if your ISP is blocking the connection (Try a VPN).</li>
              </ol>

              <div className="mt-8 p-6 bg-primary-900/20 border border-primary-500/20 rounded-xl">
                 <p className="text-sm text-primary-200">
                    <strong>Note:</strong> Please include your Order ID or Mac Address in the subject line of your email for priority handling.
                 </p>
              </div>
            </div>
          )
        };
      default:
        return {
            title: "Page Not Found",
            icon: <AlertTriangle />,
            date: "",
            content: "The requested page does not exist."
        };
    }
  };

  const data = getContent();

  return (
    <div className="min-h-screen bg-dark-900 pt-20 pb-12">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <button 
          onClick={onBack}
          className="mb-8 flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        <div className="bg-dark-800 rounded-2xl border border-white/5 overflow-hidden shadow-2xl">
          <div className="p-8 md:p-12 border-b border-white/5 bg-gradient-to-r from-dark-800 to-dark-900">
             <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary-600/20 rounded-xl border border-primary-600/30">
                    {data.icon}
                </div>
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white">{data.title}</h1>
                    <p className="text-sm text-gray-500 mt-1">{data.date}</p>
                </div>
             </div>
          </div>
          
          <div className="p-8 md:p-12 bg-dark-800">
            {data.content}
          </div>
        </div>

      </div>
    </div>
  );
};

export default LegalPage;