export interface GuideContent {
  title: string;
  content: string; // HTML string
  pdfUrl: string;
}

export const GUIDE_DATA: Record<string, GuideContent> = {
  "transit-visa-guide": {
    title: "144-Hour Visa-Free Transit Policy Guide",
    content: `
      <div class="space-y-6">
        <p class="text-lg text-gray-600 leading-relaxed">
          China offers a <strong>72/144-hour Visa-Free Transit</strong> policy for citizens of 54 countries. This allows travelers to enter China for a short stay (up to 6 days) without applying for a visa in advance, provided they are in transit to a third country or region.
        </p>

        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r">
          <h3 class="text-blue-800 font-bold text-lg mb-1 mt-0">The "Golden Rule" of Routes</h3>
          <p class="text-blue-900 text-sm mb-0">
            You must travel: <strong>Country A → China → Country C</strong>.<br/>
            (e.g., USA → Shanghai → Hong Kong → USA is <span class="text-green-600 font-bold">VALID</span>)<br/>
            (e.g., USA → Shanghai → USA is <span class="text-red-600 font-bold">INVALID</span>)
          </p>
        </div>

        <h3 class="text-2xl font-bold text-gray-900 border-b pb-2 mb-4">1. Eligible Countries (54 Total)</h3>
        <ul class="grid sm:grid-cols-2 gap-2 text-sm text-gray-700 bg-gray-50 p-4 rounded-lg">
          <li><strong>Europe (40):</strong> Austria, Belgium, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Iceland, Italy, Latvia, Lithuania, Luxembourg, Malta, Netherlands, Poland, Portugal, Slovakia, Slovenia, Spain, Sweden, Switzerland, Russia, UK, Ireland, Cyprus, Bulgaria, Romania, Ukraine, Serbia, Croatia, Bosnia & Herzegovina, Montenegro, Macedonia, Albania, Monaco, Belarus, Norway.</li>
          <li><strong>Americas (6):</strong> United States, Canada, Brazil, Mexico, Argentina, Chile.</li>
          <li><strong>Oceania (2):</strong> Australia, New Zealand.</li>
          <li><strong>Asia (6):</strong> South Korea, Japan, Singapore, Brunei, UAE, Qatar.</li>
        </ul>

        <h3 class="text-2xl font-bold text-gray-900 border-b pb-2 mb-4">2. Key Requirements</h3>
        <ul class="list-disc pl-5 space-y-2">
          <li><strong>Valid Passport:</strong> At least 3 months validity remaining.</li>
          <li><strong>Connecting Ticket:</strong> A confirmed air, train, or ship ticket to a <strong>third country/region</strong> (Hong Kong, Macau, and Taiwan count as third regions).</li>
          <li><strong>No Layover Limits:</strong> The ticket must have a confirmed date and seat within 144 hours.</li>
        </ul>

        <h3 class="text-2xl font-bold text-gray-900 border-b pb-2 mb-4">3. Major Entry Ports & Travel Scope</h3>
        <div class="space-y-4">
          <div class="border rounded-lg p-4 hover:shadow-sm transition">
            <h4 class="font-bold text-lg text-china-red mt-0">Shanghai Region (The Yangtze Delta)</h4>
            <p class="text-sm text-gray-600 mb-2"><strong>Ports:</strong> Shanghai (Pudong/Hongqiao), Hangzhou, Nanjing, Ningbo.</p>
            <p class="text-sm bg-gray-100 p-2 rounded"><strong>Allowed Area:</strong> You can travel freely between <strong>Shanghai</strong>, <strong>Jiangsu Province</strong>, and <strong>Zhejiang Province</strong>.</p>
          </div>
          
          <div class="border rounded-lg p-4 hover:shadow-sm transition">
            <h4 class="font-bold text-lg text-china-red mt-0">Beijing-Tianjin-Hebei Region</h4>
            <p class="text-sm text-gray-600 mb-2"><strong>Ports:</strong> Beijing (Capital/Daxing), Tianjin, Shijiazhuang.</p>
            <p class="text-sm bg-gray-100 p-2 rounded"><strong>Allowed Area:</strong> You can travel freely between <strong>Beijing</strong>, <strong>Tianjin</strong>, and <strong>Hebei Province</strong>.</p>
          </div>

          <div class="border rounded-lg p-4 hover:shadow-sm transition">
            <h4 class="font-bold text-lg text-china-red mt-0">Guangdong Province</h4>
            <p class="text-sm text-gray-600 mb-2"><strong>Ports:</strong> Guangzhou (Baiyun), Shenzhen (Bao'an), Jieyang.</p>
            <p class="text-sm bg-gray-100 p-2 rounded"><strong>Allowed Area:</strong> You can travel freely within the entire <strong>Guangdong Province</strong>.</p>
          </div>
          
          <div class="border rounded-lg p-4 hover:shadow-sm transition">
            <h4 class="font-bold text-lg text-china-red mt-0">Other Cities</h4>
            <p class="text-sm text-gray-600">Chengdu, Kunming, Wuhan, Xiamen, Qingdao, Xi'an, Chongqing.</p>
            <p class="text-sm text-gray-500 italic">Usually limited to the specific city or province of entry.</p>
          </div>
        </div>

        <h3 class="text-2xl font-bold text-gray-900 border-b pb-2 mb-4">4. Step-by-Step Process</h3>
        <ol class="list-decimal pl-5 space-y-4">
          <li>
            <strong>Check-in (Origin):</strong> Inform your airline you are using "144-hour Visa-Free Transit". They may verify your documents before issuing a boarding pass.
          </li>
          <li>
            <strong>Arrival:</strong> Follow signs for "24/144-hour Visa-Free Transit" (do NOT go to the regular Foreigner Immigration line).
          </li>
          <li>
            <strong>Apply:</strong> Fill out the blue/white arrival card. Present your passport and connecting ticket to the officer.
          </li>
          <li>
            <strong>Entry:</strong> The officer will place a "Temporary Entry Permit" sticker in your passport. Welcome to China!
          </li>
        </ol>
      </div>
    `,
    pdfUrl: "./assets/pdfs/transit_visa_guide_en.pdf"
  },
  "transit-visa-qa": {
    title: "Transit Visa Q&A: Critical Details",
    content: `
      <div class="space-y-8">
        <p class="text-gray-600 italic">Common questions and edge cases regarding the 144-hour visa-free policy.</p>

        <!-- Q1 -->
        <div class="bg-white rounded-lg">
          <h3 class="flex items-start text-lg font-bold text-gray-900 mb-2">
            <span class="bg-china-red text-white text-xs px-2 py-1 rounded mr-3 mt-1">Q1</span>
            How exactly is the 144 hours calculated?
          </h3>
          <div class="pl-12 text-gray-700">
            <p>It starts from <strong>00:00 on the day following your arrival</strong>.</p>
            <div class="bg-gray-50 p-3 rounded text-sm border border-gray-200 mt-2">
              <strong>Example:</strong><br/>
              Arrival: Jan 1st at 6:00 AM.<br/>
              Clock Starts: Jan 2nd at 00:00.<br/>
              Expiration: Jan 7th at 23:59.<br/>
              <span class="text-green-600 font-medium">Result: You actually get nearly 162 hours (6 days + 18 hours).</span>
            </div>
          </div>
        </div>

        <!-- Q2 -->
        <div class="bg-white rounded-lg">
          <h3 class="flex items-start text-lg font-bold text-gray-900 mb-2">
             <span class="bg-china-red text-white text-xs px-2 py-1 rounded mr-3 mt-1">Q2</span>
            Can I book a round trip (e.g., USA ↔ Shanghai)?
          </h3>
          <div class="pl-12 text-gray-700">
            <p class="text-red-600 font-bold mb-1">ABSOLUTELY NOT.</p>
            <p>This is the most common mistake. The policy is strictly for <strong>transit</strong>. You must be traveling to a <strong>third country or region</strong>.</p>
            <ul class="list-disc pl-5 mt-2 space-y-1 text-sm">
              <li><span class="text-red-500">Invalid:</span> NY -> Shanghai -> NY</li>
              <li><span class="text-red-500">Invalid:</span> NY -> Shanghai -> LA</li>
              <li><span class="text-green-600">Valid:</span> NY -> Shanghai -> Tokyo</li>
              <li><span class="text-green-600">Valid:</span> NY -> Shanghai -> Hong Kong -> NY (HK counts as a 3rd region)</li>
            </ul>
          </div>
        </div>

        <!-- Q3 -->
        <div class="bg-white rounded-lg">
          <h3 class="flex items-start text-lg font-bold text-gray-900 mb-2">
             <span class="bg-china-red text-white text-xs px-2 py-1 rounded mr-3 mt-1">Q3</span>
            Can I leave the city I arrive in?
          </h3>
          <div class="pl-12 text-gray-700">
            <p><strong>It depends on the region.</strong></p>
            <ul class="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Shanghai/Hangzhou/Nanjing:</strong> Yes, you can travel freely between Shanghai, Jiangsu, and Zhejiang provinces.</li>
              <li><strong>Beijing/Tianjin/Hebei:</strong> Yes, you can travel between these three.</li>
              <li><strong>Guangzhou/Shenzhen:</strong> Yes, anywhere in Guangdong province.</li>
              <li><strong>Others (e.g., Xi'an, Chengdu):</strong> Generally NO. You must stay within the administrative city limits.</li>
            </ul>
          </div>
        </div>

        <!-- Q4 -->
        <div class="bg-white rounded-lg">
          <h3 class="flex items-start text-lg font-bold text-gray-900 mb-2">
             <span class="bg-china-red text-white text-xs px-2 py-1 rounded mr-3 mt-1">Q4</span>
            What happens if I can't leave within 144 hours due to flight cancellation?
          </h3>
          <div class="pl-12 text-gray-700">
            <p>This is considered <em>force majeure</em>. You must immediately go to the local <strong>Public Security Bureau (PSB) - Exit & Entry Administration</strong> to apply for a specialized visa to exit. Do not just stay and pay the fine at the airport; it may affect future entry.</p>
          </div>
        </div>

         <!-- Q5 -->
        <div class="bg-white rounded-lg">
          <h3 class="flex items-start text-lg font-bold text-gray-900 mb-2">
             <span class="bg-china-red text-white text-xs px-2 py-1 rounded mr-3 mt-1">Q5</span>
             Where do I sleep?
          </h3>
          <div class="pl-12 text-gray-700">
            <p>You can stay in any hotel eligible to host foreigners. If you stay with a friend, you <strong>must register with the local police station</strong> within 24 hours of arrival. Hotels do this automatically for you.</p>
          </div>
        </div>

      </div>
    `,
    pdfUrl: "./assets/pdfs/transit_visa_qa_en.pdf"
  },
  "customs-guide": {
    title: "China Customs Declaration Guide",
    content: "When entering China, you must declare cash exceeding 20,000 CNY or 5,000 USD. Valuable items intended to be left in China must also be declared. Pets require quarantine certificates.",
    pdfUrl: "./assets/pdfs/customs_guide_en.pdf"
  },
  "prohibited-items": {
    title: "Prohibited Items List",
    content: "Strictly prohibited items include: Arms, ammunition, explosives, counterfeit currency, drugs (opium, morphine, heroin, etc.), and distinct material detrimental to China's politics, economy, culture, and ethics.",
    pdfUrl: "./assets/pdfs/prohibited_items_en.pdf"
  },
  "wechat-pay-guide": {
    title: "How to Set Up WeChat Pay",
    content: "1. Download WeChat. 2. Go to 'Me' -> 'Services' -> 'Wallet'. 3. Add a Bank Card (International cards are supported). 4. Verify your identity with your passport. You can now scan QR codes to pay.",
    pdfUrl: "./assets/pdfs/wechat_pay_guide_en.pdf"
  },
  "alipay-guide": {
    title: "How to Install and Link Alipay",
    content: "Alipay is very foreigner-friendly. 1. Download Alipay. 2. Sign up with your foreign phone number. 3. Add your Visa/Mastercard. Alipay automatically translates many mini-apps into English.",
    pdfUrl: "./assets/pdfs/alipay_guide_en.pdf"
  },
  "bank-exchange-guide": {
    title: "Bank Currency Exchange Guide",
    content: "Go to a major branch of Bank of China. Bring your physical passport. Take a queue number for 'Personal Cash Business'. There is a daily limit for exchange, usually $500-$1000 equivalent for non-residents without a bank account.",
    pdfUrl: "./assets/pdfs/bank_exchange_guide_en.pdf"
  },
  "amap-guide": {
    title: "Amap (Gaode) User Guide",
    content: "Amap is the most accurate map in China. While the interface is Chinese, the iconography is intuitive. Use it to hail taxis (it aggregates Didi and other providers) and find walking directions.",
    pdfUrl: "./assets/pdfs/amap_guide_en.pdf"
  },
  "12306-guide": {
    title: "Railway 12306 Booking Guide",
    content: "The official app 'Railway 12306' has an English version. Register with your email and passport. When booking, ensure your name matches your passport exactly. You do not need a physical ticket; your passport is your ticket.",
    pdfUrl: "./assets/pdfs/12306_guide_en.pdf"
  },
  "booking-apps-guide": {
    title: "Travel Booking Apps Comparison",
    content: "Trip.com is best for English support and customer service. Fliggy (on Alitrip) often has cheaper hotel deals but requires Chinese navigation. Qunar is another local option.",
    pdfUrl: "./assets/pdfs/booking_apps_guide_en.pdf"
  },
  "airport-guide": {
    title: "China Airport Guide",
    content: "Arrive at least 3 hours before international flights. Security is strict regarding lithium batteries (power banks must be < 100Wh and clearly labeled). Lighters and matches are strictly forbidden.",
    pdfUrl: "./assets/pdfs/airport_guide_en.pdf"
  },
  "train-guide": {
    title: "High-Speed Rail Guide",
    content: "G-series trains are the fastest (350km/h). D-series are slightly slower. Baggage limits are generous but distinct from airlines. No smoking is allowed anywhere on the train, including bathrooms.",
    pdfUrl: "./assets/pdfs/train_guide_en.pdf"
  },
  "taxi-guide": {
    title: "Taxi & Ride-Hailing Guide",
    content: "Official taxis are metered. Do not negotiate a flat rate unless you are sure. Didi Chuxing (within Alipay or standalone app) avoids language barriers as the destination is input digitally.",
    pdfUrl: "./assets/pdfs/taxi_guide_en.pdf"
  },
  "public-transit-guide": {
    title: "Metro & Bus Guide",
    content: "Metros are the best way to move around top-tier cities. Security checks are mandatory at every station entrance (bags must be scanned). Use Alipay 'Transport' code to scan at the turnstiles.",
    pdfUrl: "./assets/pdfs/public_transit_guide_en.pdf"
  },
  "sim-card-guide": {
    title: "SIM Card Buying Guide",
    content: "Buy a SIM at the airport arrival hall for convenience, though it may be slightly pricier. China Unicom and China Mobile are the main carriers. You need your passport. Ensure your phone is unlocked.",
    pdfUrl: "./assets/pdfs/sim_card_guide_en.pdf"
  },
  "wechat-social-guide": {
    title: "WeChat Social Features Guide",
    content: "WeChat is not just for payments. Use 'Moments' to see friends' updates. Long-press messages to translate them. Scan QR codes to add friends.",
    pdfUrl: "./assets/pdfs/wechat_guide_en.pdf"
  },
  "xiaohongshu-guide": {
    title: "Xiaohongshu (RedNote) Guide",
    content: "Xiaohongshu is excellent for finding visual travel inspiration, restaurant reviews, and photo spots. It's like Instagram met Pinterest. Search for city names to see trending spots.",
    pdfUrl: "./assets/pdfs/xiaohongshu_guide_en.pdf"
  },
  "food-delivery-guide": {
    title: "Food Delivery (Waimai) Guide",
    content: "Meituan and Ele.me are the main apps. They can deliver to hotels (often to a robot or a designated table in the lobby). Delivery fees are very low. Tip is not required.",
    pdfUrl: "./assets/pdfs/food_delivery_guide_en.pdf"
  },
  "tax-refund-guide": {
    title: "Tax Refund Guide",
    content: "Look for 'Tax Free' signs in malls. Spend >500 CNY. Get a VAT invoice. At the airport, visit the Customs Tax Refund counter before checking your bags to verify the goods.",
    pdfUrl: "./assets/pdfs/tax_refund_guide_en.pdf"
  },
  "sichuan-cuisine-guide": {
    title: "Sichuan Cuisine Guide",
    content: "Famous for Ma La (numbing spice). Try Mapo Tofu, Kung Pao Chicken, and Hot Pot. The peppercorn numbs your tongue.",
    pdfUrl: "./assets/pdfs/sichuan_cuisine_guide_en.pdf"
  },
  "cantonese-cuisine-guide": {
    title: "Cantonese Cuisine Guide",
    content: "Focused on freshness. Dim Sum (morning tea) is a must-try cultural experience. Roast Goose and Char Siu are staples.",
    pdfUrl: "./assets/pdfs/cantonese_cuisine_guide_en.pdf"
  },
  "shandong-cuisine-guide": {
    title: "Shandong Cuisine Guide",
    content: "Salty, savory, and features many braised dishes and soups. Famous for seafood and high-quality vegetable dishes.",
    pdfUrl: "./assets/pdfs/shandong_cuisine_guide_en.pdf"
  },
  "jiangsu-cuisine-guide": {
    title: "Jiangsu Cuisine Guide",
    content: "Sweet and soft textures. Known for Lion's Head meatballs and various freshwater fish dishes. Very refined presentation.",
    pdfUrl: "./assets/pdfs/jiangsu_cuisine_guide_en.pdf"
  }
};