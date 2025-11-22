import React, { useState, useEffect } from 'react';
import { Tv, Smartphone, Command, Box, Cpu, Terminal, ArrowLeft, CheckCircle2, AlertCircle, Flame } from 'lucide-react';

interface SetupGuidePageProps {
  onBack: () => void;
}

interface GuideStep {
  text: string;
  warning?: boolean;
}

interface DeviceGuide {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  steps: string[];
}

const guides: DeviceGuide[] = [
  {
    id: 'smart-tv',
    name: 'Smart TV (Samsung/LG)',
    icon: <Tv size={20} />,
    description: 'Setup instructions for LG and Samsung Smart TVs using the Smart IPTV app.',
    steps: [
      "This tutorial will guide you through the simple setup instruction for a LG Smart TV. The Live TV Store IPTV service uses a media controller app called 'Smart IPTV', this app is free to use for a period of seven days, you will then be asked to make a one time donation of €5.49 (Euros) towards the Smart IPTV app development.",
      "In order to check if your Smart TV is compatible with the Live TV Service go to the Smart TV screen and search for the 'Smart IPTV' app. If the app is not displayed on the main screen you may have to search for it in 'All Apps' or 'Updates'.",
      "Launch the 'Smart TV' app.",
      "Make a note of the 'MAC Address' which is displayed on the screen.",
      "Go to http://siptv.eu/mylist/ from any web browser.",
      "Go to the section titled 'Add external playlist links (URLs)' and enter your 'Mac' address and the unique Live TV Playlist URL into the 'Link' field.",
      "Ensure the 'countries' dropdown selection on 'Various'.",
      "If you have any problems with the playlist loading you can place a check in the 'Save online' checkbox.",
      "Click onto the 'Add Link' button.",
      "Restart the 'Smart IPTV' app."
    ]
  },
  {
    id: 'apple-ios',
    name: 'Apple / iOS Devices',
    icon: <Smartphone size={20} />,
    description: 'How to configure IPTV on iPhone, iPad, and Apple TV.',
    steps: [
      "Open the App Store.",
      "In the App Store, go to the Search bar located on the top of the screen.",
      "Enter IPTV in the Search box to search IPTV apps.",
      "List of IPTV players will appear on the screen where you have to select GSE SMART IPTV (One of the best and highly used IPTV apps by the people).",
      "Click the Install button to start the installation procedure.",
      "After the installation gets completed tap Open to launch the IPTV app.",
      "Click the Add Playlist button.",
      "Then click the Remote Playlist File.",
      "Enter the M3U Playlist URL which is provided by us and type the name of the Playlist.",
      "Then select the Playlist Refresh. After entering the details click the Save button.",
      "Wait until the application loads all the channels on the Apple Device. Now you can enjoy all your favorite channels with your family and friends."
    ]
  },
  {
    id: 'android',
    name: 'Android Devices',
    icon: <Smartphone size={20} />,
    description: 'Setup for Android Smartphones, Tablets, and Android TV Boxes.',
    steps: [
      "Open the Google Play Store.",
      "In the Google Play Store, go to the Search bar which located on the top of the screen.",
      "Enter IPTV in the Search box to search IPTV apps.",
      "List of IPTV players will appear on the screen where you have to select GSE SMART IPTV (One of the best and highly used IPTV apps by the people).",
      "Click the Install button to start the installation procedure.",
      "After the installation gets completed tap Open to launch the IPTV app on Android Device.",
      "Click the Add Playlist button.",
      "Then click the Remote Playlist File.",
      "Enter the M3U Playlist URL which is provided by us and type the name of the Playlist.",
      "Then select the days for Channel Refresh and EPG Refresh. After entering the details click the Save button.",
      "Wait until the application loads all the channels. Now you can enjoy all your favorite channels with your family and friends."
    ]
  },
  {
    id: 'firestick',
    name: 'Amazon Firestick',
    icon: <Flame size={20} />,
    description: 'Complete guide for Amazon Fire TV Stick users.',
    steps: [
      "From the Main Menu scroll to hover over Settings.",
      "Click My Fire TV.",
      "Choose Developer Options.",
      "Click Apps from Unknown Sources.",
      "Choose Turn On.",
      "Return to the home screen and hover over the Search icon.",
      "Type in 'Downloader'.",
      "Select the Downloader app.",
      "Click Download & Click on Open.",
      "Select Allow if presented with this prompt & click OK.",
      "Type the following URL exactly as shown here: https://bit.ly/32HqzSz and click Go.",
      "Wait for file to download.",
      "Click Install.",
      "Return to device home-screen and under 'Your Apps & Channels' click See All.",
      "Scroll down to hover over IPTV Smarters.",
      "Click on Menu button on remote (3 horizontal lines), then click Move to Front.",
      "When the App installation is complete open it.",
      "Click Add New User.",
      "Choose login with Xtream Codes API.",
      "Enter your subscription information and click Add User.",
      "Wait for User added successfully message to appear.",
      "Click your Profile and enjoy!"
    ]
  },
  {
    id: 'mag',
    name: 'MAG Devices',
    icon: <Box size={20} />,
    description: 'Setup for MAG 250, 254, 256 and newer boxes.',
    steps: [
      "Make sure your MAC address was registered at our server TVIEWPRO.",
      "When the box is being loaded the main portal screen appears. After that click on 'settings', press remote button 'SETUP/SET'.",
      "Go to the Setting menu. Click on System settings and click on 'Servers'.",
      "Select 'Portals'.",
      "In the 'Portal 1 name' line enter the name of server TECHVIEW TV.",
      "In the 'Portal 1 URL' enter the portal address that we send it to you. Please double check all characters.",
      "When all the operations listed above is done, then press 'OK'.",
      "When all the steps listed above are done press 'EXIT' 2 times on the remote control and restart the portal.",
      "Now everything is ready to start watching Live TV."
    ]
  },
  {
    id: 'formuler',
    name: 'Formuler Z8',
    icon: <Cpu size={20} />,
    description: 'Instructions for Formuler Z8 and MyTVOnline 2.',
    steps: [
      "Download MyTVOnline 2 to connect with our service.",
      "You have two options: add a portal or m3u (URL) playlist. You can set the nickname to any name you prefer.",
      "Click 'Connect'.",
      "Wait for a few minutes to connect to our service and you will receive all the channels associated with your account."
    ]
  },
  {
    id: 'enigma',
    name: 'Enigma 2',
    icon: <Terminal size={20} />,
    description: 'Advanced setup for Enigma 2 / Linux boxes.',
    steps: [
      "This is instruction For Enigma 2/ Linux installation, you need install putty to use it.",
      "Settings > Setup > System Network Device > Setup Adapter > Settings.",
      "And get your IP address it starts with 192.168....",
      "Go to your windows PC and Download Putty Software.",
      "Open Putty.",
      "Add your IP address of your Device.",
      "Add Port 23.",
      "Click on open.",
      "Your default login and password are root.",
      "Copy your line (you will get it after you order your subscription).",
      "wget -O /etc/enigma2/iptv.sh 'your m3u link' && chmod 777 /etc/enigma2/iptv.sh && /etc/enigma2/iptv.sh",
      "RIGHT CLICK MOUSE BUTTON after you enter your line press ENTER",
      "Type reboot and your device will restart."
    ]
  }
];

const SetupGuidePage: React.FC<SetupGuidePageProps> = ({ onBack }) => {
  const [activeGuideId, setActiveGuideId] = useState('smart-tv');
  
  // Scroll top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const activeGuide = guides.find(g => g.id === activeGuideId) || guides[0];

  return (
    <div className="min-h-screen bg-dark-900 pt-20 text-white">
      {/* Header */}
      <div className="bg-dark-800 border-b border-white/5 py-12">
        <div className="container mx-auto px-4">
          <button 
            onClick={onBack}
            className="mb-6 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Home
          </button>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Installation <span className="text-primary-600">Guide</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl">Follow our step-by-step tutorials to set up your IPTV subscription on any device in minutes.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4 flex-shrink-0">
            <div className="bg-dark-800 rounded-2xl border border-white/5 overflow-hidden sticky top-24">
              <div className="p-4 border-b border-white/5 bg-black/20">
                <h3 className="font-bold text-gray-200">Select Device</h3>
              </div>
              <div className="p-2 space-y-1">
                {guides.map((guide) => (
                  <button
                    key={guide.id}
                    onClick={() => setActiveGuideId(guide.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-left ${
                      activeGuideId === guide.id 
                        ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/20 font-medium' 
                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {guide.icon}
                    <span className="flex-grow">{guide.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:w-3/4">
            <div className="bg-dark-800 rounded-2xl border border-white/5 p-6 md:p-10 relative overflow-hidden">
              {/* Decorative BG */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary-600/20 rounded-xl flex items-center justify-center text-primary-500">
                    {activeGuide.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">{activeGuide.name}</h2>
                    <p className="text-gray-400 text-sm mt-1">{activeGuide.description}</p>
                  </div>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent mb-8"></div>

                <div className="space-y-6">
                  {activeGuide.steps.map((step, idx) => (
                    <div key={idx} className="flex gap-4 group">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-dark-700 border border-white/10 flex items-center justify-center text-primary-500 font-bold text-sm group-hover:border-primary-500 transition-colors">
                        {idx + 1}
                      </div>
                      <div className="flex-grow pt-1">
                        <p className="text-gray-300 leading-relaxed">
                          {step.includes('http') ? (
                            <>
                              {step.split(/(https?:\/\/[^\s]+)/g).map((part, i) => 
                                part.match(/https?:\/\//) ? (
                                  <span key={i} className="bg-primary-900/50 text-primary-400 px-2 py-0.5 rounded border border-primary-500/30 font-mono text-sm break-all selection:bg-primary-500 selection:text-white">
                                    {part}
                                  </span>
                                ) : part
                              )}
                            </>
                          ) : step}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Help Box */}
                <div className="mt-12 bg-blue-900/20 border border-blue-500/20 rounded-xl p-6 flex gap-4 items-start">
                  <AlertCircle className="text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold mb-1">Still having trouble?</h4>
                    <p className="text-gray-400 text-sm mb-4">
                      If you can't get your device to work following these instructions, our support team is available 24/7 to help you.
                    </p>
                    <a href="mailto:support@iptvnova.com" className="text-blue-400 hover:text-blue-300 text-sm font-bold underline">Contact Support</a>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SetupGuidePage;