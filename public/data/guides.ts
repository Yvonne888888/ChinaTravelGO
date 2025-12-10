export interface GuideContent {
  title: string;
  content: string; // HTML-like string or plain text
  pdfUrl: string;
}

export const GUIDE_DATA: Record<string, GuideContent> = {
  "transit-visa-guide": {
    title: "Regional & Transit Visa Policy Guide",
    content: "China offers 72-hour and 144-hour visa-free transit policies for citizens of eligible countries. You must have a connecting ticket to a third country (not back to your origin) and stay within the designated administrative region. Key ports include Beijing, Shanghai, and Guangzhou.",
    pdfUrl: "./assets/pdfs/transit_visa_guide_en.pdf"
  },
  "transit-visa-qa": {
    title: "Transit Visa Q&A",
    content: "Common questions regarding the 144-hour visa-free transit: Can I leave the airport? Yes, after obtaining the temporary entry permit. Can I take a train to another city? Only if that city is within the allowed region (e.g., Shanghai/Jiangsu/Zhejiang are one region).",
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