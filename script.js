// Sample questions (in a real app, you would load 5000 questions from a database or JSON file)
const questions =[
    //Basic Electrical Engineering

    //1-20

    {
        "question": "3-ফেজ সিস্টেমে কয়টি তার থাকে?", // no 1
        "options": ["1", "2", "3", "4"],
        "answer": 3
    },
    {
        "question": "ইলেকট্রিসিটির এসআই ইউনিট কি?", // no 2
        "options": ["ভোল্ট", "অ্যাম্পিয়ার", "ওয়াট", "কুলম্ব"],
        "answer": 3
    },
    {
        "question": "1 কিলোওয়াট-আওয়ার সমান কত জুল?", // no 3
        "options": ["360", "3600", "36000", "360000"],
        "answer": 1
    },
    {
        "question": "ওহমের সূত্রে কোনটি স্থির থাকে?", // no 4
        "options": ["ভোল্টেজ", "কারেন্ট", "রেজিস্ট্যান্স", "তাপমাত্রা"],
        "answer": 3
    },
    {
        "question": "একটি আদর্শ ভোল্টমিটারের রেজিস্ট্যান্স কেমন হয়?", // no 5
        "options": ["শূন্য", "অনন্ত", "অল্প", "বেশি"],
        "answer": 3
    },
    {
        "question": "সিরিজ সার্কিটে মোট রেজিস্ট্যান্স কিভাবে নির্ণয় করা হয়?", // no 6
        "options": ["সব রেজিস্ট্যান্স যোগ করে", "সব রেজিস্ট্যান্স গুণ করে", "সব রেজিস্ট্যান্স ভাগ করে", "গড় করে"],
        "answer": 0
    },
    {
        "question": "পারালাল সার্কিটে ভোল্টেজ কেমন থাকে?", // no 7
        "options": ["ভিন্ন", "সমান", "শূন্য", "অনন্ত"],
        "answer": 1
    },
    {
        "question": "ক্যাপাসিট্যান্সের এসআই ইউনিট কি?", // no 8
        "options": ["ফ্যারাড", "হেনরি", "ওয়েবার", "টেসলা"],
        "answer": 0
    },
    {
        "question": "ইন্ডাকট্যান্সের এসআই ইউনিট কি?", // no 9
        "options": ["ফ্যারাড", "হেনরি", "ওয়েবার", "টেসলা"],
        "answer": 1
    },
    {
        "question": "একটি 10Ω এবং 20Ω রেজিস্টর সিরিজে থাকলে মোট রেজিস্ট্যান্স কত?", // no 10
        "options": ["10Ω", "20Ω", "30Ω", "200Ω"],
        "answer": 2
    },
    {
        "question": "একটি 10Ω এবং 20Ω রেজিস্টর পারালালে থাকলে মোট রেজিস্ট্যান্স কত?", // no 11
        "options": ["6.67Ω", "10Ω", "15Ω", "30Ω"],
        "answer": 0
    },
    {
        "question": "এসি কারেন্টের ফ্রিকোয়েন্সি বাংলাদেশে কত?", // no 12
        "options": ["50Hz", "60Hz", "100Hz", "120Hz"],
        "answer": 0
    },
    {
        "question": "একটি বাল্বে 220V, 100W লেখা আছে। এর রেজিস্ট্যান্স কত?", // no 13
        "options": ["2.2Ω", "22Ω", "484Ω", "4840Ω"],
        "answer": 2
    },
    {
        "question": "একটি সার্কিটে কারেন্ট 2A এবং রেজিস্ট্যান্স 10Ω হলে ভোল্টেজ কত?", // no 14
        "options": ["5V", "10V", "20V", "200V"],
        "answer": 2
    },
    {
        "question": "একটি সার্কিটে ভোল্টেজ 12V এবং রেজিস্ট্যান্স 4Ω হলে কারেন্ট কত?", // no 15
        "options": ["3A", "4A", "12A", "48A"],
        "answer": 0
    },
    {
        "question": "একটি সার্কিটে 220V এ 5A কারেন্ট প্রবাহিত হলে পাওয়ার কত?", // no 16
        "options": ["44W", "220W", "1100W", "2200W"],
        "answer": 2
    },
    {
        "question": "কোন ধরনের সার্কিটে কারেন্ট সব বিন্দুতে সমান?", // no 17
        "options": ["সিরিজ", "পারালাল", "জটিল", "শর্ট"],
        "answer": 0
    },
    {
        "question": "কোন ধরনের সার্কিটে ভোল্টেজ সব বিন্দুতে সমান?", // no 18
        "options": ["সিরিজ", "পারালাল", "জটিল", "শর্ট"],
        "answer": 1
    },
    {
        "question": "একটি আদর্শ অ্যামিটারের রেজিস্ট্যান্স কেমন হয়?", // no 19
        "options": ["শূন্য", "অনন্ত", "অল্প", "বেশি"],
        "answer": 0
    },
    {
        "question": "একটি 100W বাল্ব দৈনিক 5 ঘন্টা ব্যবহার করলে 30 দিনে কত ইউনিট বিদ্যুৎ খরচ হবে?", // no 20
        "options": ["5kWh", "15kWh", "30kWh", "150kWh"],
        "answer": 1
    },

    //21-40

    {
        "question": "একটি তারের রেজিস্ট্যান্স নির্ভর করে না কোনটির উপর?", // no 21
        "options": ["দৈর্ঘ্য", "প্রস্থচ্ছেদ", "উপাদান", "রঙ"],
        "answer": 3
    },
    {
        "question": "তারের রেজিস্টিভিটি কমলে রেজিস্ট্যান্স কী হবে?", // no 22
        "options": ["বাড়বে", "কমবে", "অপরিবর্তিত থাকবে", "শূন্য হবে"],
        "answer": 1
    },
    {
        "question": "সুপার কন্ডাক্টরে রেজিস্ট্যান্স কত?", // no 23
        "options": ["অনন্ত", "শূন্য", "অল্প", "বেশি"],
        "answer": 1
    },
    {
        "question": "কোন ধাতুর রেজিস্টিভিটি সবচেয়ে কম?", // no 24
        "options": ["লোহা", "তামা", "রূপা", "অ্যালুমিনিয়াম"],
        "answer": 2
    },
    {
        "question": "একটি 10μF ক্যাপাসিটর 100V এ চার্জ করলে কত চার্জ সঞ্চিত হবে?", // no 25
        "options": ["1mC", "10mC", "100mC", "1000mC"],
        "answer": 0
    },
    {
        "question": "একটি ক্যাপাসিটরে সঞ্চিত শক্তি নির্ণয়ের সূত্র কোনটি?", // no 26
        "options": ["½CV²", "CV", "C/V", "V²/R"],
        "answer": 0
    },
    {
        "question": "একটি কয়েলে সঞ্চিত শক্তি নির্ণয়ের সূত্র কোনটি?", // no 27
        "options": ["½LI²", "LI", "L/I", "I²/R"],
        "answer": 0
    },
    {
        "question": "এসি সার্কিটে পাওয়ার ফ্যাক্টর কত হলে পাওয়ার সর্বোচ্চ হয়?", // no 28
        "options": ["0.5", "0.8", "1", "0"],
        "answer": 2
    },
    {
        "question": "রেজিস্টিভ লোডের পাওয়ার ফ্যাক্টর কত?", // no 29
        "options": ["0", "0.5", "0.8", "1"],
        "answer": 3
    },
    {
        "question": "ইন্ডাকটিভ লোডে কারেন্ট এবং ভোল্টেজের মধ্যে কত ডিগ্রী ফেজ ডিফারেন্স থাকে?", // no 30
        "options": ["0°", "45°", "90°", "180°"],
        "answer": 2
    },
    {
        "question": "ক্যাপাসিটিভ লোডে কারেন্ট এবং ভোল্টেজের মধ্যে কত ডিগ্রী ফেজ ডিফারেন্স থাকে?", // no 31
        "options": ["0°", "45°", "90°", "180°"],
        "answer": 2
    },
    {
        "question": "একটি ট্রান্সফরমারের প্রাইমারি ভোল্টেজ 220V এবং সেকেন্ডারি ভোল্টেজ 110V হলে টার্ন রেশিও কত?", // no 32
        "options": ["1:1", "1:2", "2:1", "4:1"],
        "answer": 2
    },
    {
        "question": "ট্রান্সফরমারে কোন ধরনের কারেন্ট ব্যবহৃত হয়?", // no 33
        "options": ["ডিসি", "এসি", "পালসেটিং ডিসি", "উভয়ই"],
        "answer": 1
    },
    {
        "question": "একটি ট্রান্সফরমারের ইনপুট পাওয়ার 1000W এবং দক্ষতা 90% হলে আউটপুট পাওয়ার কত?", // no 34
        "options": ["900W", "1000W", "1100W", "1900W"],
        "answer": 0
    },
    {
        "question": "স্টেপ-আপ ট্রান্সফরমারে কোনটি বেশি?", // no 35
        "options": ["প্রাইমারি ভোল্টেজ", "সেকেন্ডারি ভোল্টেজ", "প্রাইমারি কারেন্ট", "সেকেন্ডারি রেজিস্ট্যান্স"],
        "answer": 1
    },
    {
        "question": "3-ফেজ সিস্টেমে লাইন ভোল্টেজ এবং ফেজ ভোল্টেজের অনুপাত কত?", // no 36
        "options": ["1:1", "√2:1", "√3:1", "3:1"],
        "answer": 2
    },
    {
        "question": "3-ফেজ সিস্টেমে লাইন কারেন্ট এবং ফেজ কারেন্টের অনুপাত কত?", // no 37
        "options": ["1:1", "√2:1", "√3:1", "3:1"],
        "answer": 0
    },
    {
        "question": "স্টার কানেকশনে লাইন ভোল্টেজ এবং ফেজ ভোল্টেজের অনুপাত কত?", // no 38
        "options": ["1:1", "√3:1", "1:√3", "3:1"],
        "answer": 1
    },
    {
        "question": "ডেল্টা কানেকশনে লাইন কারেন্ট এবং ফেজ কারেন্টের অনুপাত কত?", // no 39
        "options": ["1:1", "√3:1", "1:√3", "3:1"],
        "answer": 1
    },
    {
        "question": "বাংলাদেশে স্ট্যান্ডার্ড ডোমেস্টিক ভোল্টেজ কত?", // no 40
        "options": ["110V", "220V", "380V", "440V"],
        "answer": 1
    },


    //41-60


    {
        "question": "একটি সার্কিটে পাওয়ার ক্যালকুলেশনের সূত্র কোনটি?", // no 41
        "options": ["P=IV", "P=I²R", "P=V²/R", "উপরের সবগুলো"],
        "answer": 3
    },
    {
        "question": "একটি 10Ω রেজিস্টরে 5A কারেন্ট প্রবাহিত হলে তাপীয় ক্ষমতা কত?", // no 42
        "options": ["50W", "100W", "250W", "500W"],
        "answer": 2
    },
    {
        "question": "কিরশফের কারেন্ট সূত্র (KCL) কি প্রকাশ করে?", // no 43
        "options": ["নোডে কারেন্টের সমতা", "লুপে ভোল্টেজের সমতা", "শক্তি সংরক্ষণ", "চার্জ সংরক্ষণ"],
        "answer": 0
    },
    {
        "question": "কিরশফের ভোল্টেজ সূত্র (KVL) কি প্রকাশ করে?", // no 44
        "options": ["নোডে কারেন্টের সমতা", "লুপে ভোল্টেজের সমতা", "শক্তি সংরক্ষণ", "চার্জ সংরক্ষণ"],
        "answer": 1
    },
    {
        "question": "একটি নোডে 3A কারেন্ট প্রবেশ করলে এবং 2A কারেন্ট বের হলে তৃতীয় তারে কারেন্ট কত?", // no 45
        "options": ["1A প্রবেশ করবে", "1A বের হবে", "5A প্রবেশ করবে", "5A বের হবে"],
        "answer": 0
    },
    {
        "question": "থেভেনিনের থিওরেমে কোনটি বিবেচনা করা হয়?", // no 46
        "options": ["ভোল্টেজ সোর্স এবং রেজিস্ট্যান্স", "কারেন্ট সোর্স এবং কন্ডাক্ট্যান্স", "ভোল্টেজ সোর্স এবং কন্ডাক্ট্যান্স", "কারেন্ট সোর্স এবং রেজিস্ট্যান্স"],
        "answer": 0
    },
    {
        "question": "নরটনের থিওরেমে কোনটি বিবেচনা করা হয়?", // no 47
        "options": ["ভোল্টেজ সোর্স এবং রেজিস্ট্যান্স", "কারেন্ট সোর্স এবং কন্ডাক্ট্যান্স", "ভোল্টেজ সোর্স এবং কন্ডাক্ট্যান্স", "কারেন্ট সোর্স এবং রেজিস্ট্যান্স"],
        "answer": 1
    },
    {
        "question": "সুপারপজিশন থিওরেম প্রযোজ্য কোন সার্কিটে?", // no 48
        "options": ["নন-লিনিয়ার সার্কিট", "লিনিয়ার সার্কিট", "ডিজিটাল সার্কিট", "উপরের সবগুলো"],
        "answer": 1
    },
    {
        "question": "একটি ব্যাটারির EMF 12V এবং ইন্টার্নাল রেজিস্ট্যান্স 0.5Ω হলে লোড কারেন্ট 2A হলে টার্মিনাল ভোল্টেজ কত?", // no 49
        "options": ["10V", "11V", "12V", "13V"],
        "answer": 1
    },
    {
        "question": "একটি সেলের EMF কে মাপা হয় কোন যন্ত্র দ্বারা?", // no 50
        "options": ["ভোল্টমিটার", "পোটেনশিওমিটার", "অ্যামিটার", "ওহমমিটার"],
        "answer": 1
    },
    {
        "question": "একটি তারের দৈর্ঘ্য দ্বিগুণ করলে রেজিস্ট্যান্স কতগুণ হবে?", // no 51
        "options": ["অপরিবর্তিত", "2 গুণ", "4 গুণ", "অর্ধেক"],
        "answer": 1
    },
    {
        "question": "একটি তারের ব্যাস দ্বিগুণ করলে রেজিস্ট্যান্স কতগুণ হবে?", // no 52
        "options": ["অপরিবর্তিত", "2 গুণ", "4 গুণ", "¼ গুণ"],
        "answer": 3
    },
    {
        "question": "তারের তাপমাত্রা বৃদ্ধি পেলে সাধারণত রেজিস্ট্যান্স কী হবে?", // no 53
        "options": ["বাড়বে", "কমবে", "অপরিবর্তিত থাকবে", "প্রথম কমবে পরে বাড়বে"],
        "answer": 0
    },
    {
        "question": "কোন উপাদানের তাপমাত্রা বৃদ্ধি পেলে রেজিস্ট্যান্স কমে?", // no 54
        "options": ["তামা", "সিলিকন", "রূপা", "অ্যালুমিনিয়াম"],
        "answer": 1
    },
    {
        "question": "একটি 100W, 220V বাল্বের রেজিস্ট্যান্স কত?", // no 55
        "options": ["2.2Ω", "22Ω", "484Ω", "4840Ω"],
        "answer": 2
    },
    {
        "question": "একটি 60W বাল্বের রেজিস্ট্যান্স একটি 100W বাল্বের রেজিস্ট্যান্সের চেয়ে কেমন?", // no 56
        "options": ["কম", "বেশি", "সমান", "দুইগুণ"],
        "answer": 1
    },
    {
        "question": "একটি 10Ω রেজিস্টর এবং 20Ω রেজিস্টর সমান্তরালে সংযুক্ত থাকলে মোট রেজিস্ট্যান্স কত?", // no 57
        "options": ["6.67Ω", "10Ω", "15Ω", "30Ω"],
        "answer": 0
    },
    {
        "question": "তিনটি 30Ω রেজিস্টর সমান্তরালে সংযুক্ত থাকলে মোট রেজিস্ট্যান্স কত?", // no 58
        "options": ["10Ω", "30Ω", "60Ω", "90Ω"],
        "answer": 0
    },
    {
        "question": "একটি 2Ω, 4Ω এবং 8Ω রেজিস্টর সমান্তরালে সংযুক্ত থাকলে মোট রেজিস্ট্যান্স কত?", // no 59
        "options": ["0.5Ω", "1.14Ω", "2Ω", "14Ω"],
        "answer": 1
    },
    {
        "question": "একটি সার্কিটে 10Ω, 20Ω এবং 30Ω রেজিস্টর সিরিজে থাকলে মোট রেজিস্ট্যান্স কত?", // no 60
        "options": ["10Ω", "20Ω", "30Ω", "60Ω"],
        "answer": 3
    },


   // 61-80


   {
    "question": "একটি ক্যাপাসিটরের প্লেটের মধ্যে ডাইইলেক্ট্রিক পদার্থ ব্যবহার করা হয় কেন?", // no 61
    "options": ["ধারকত্ব বাড়ানোর জন্য", "ধারকত্ব কমানোর জন্য", "ভোল্টেজ রেটিং কমানোর জন্য", "আকার ছোট করার জন্য"],
    "answer": 0
},
{
    "question": "একটি কয়েলে কোর ব্যবহার করা হয় প্রধানত কেন?", // no 62
    "options": ["ইন্ডাকট্যান্স বাড়ানোর জন্য", "ইন্ডাকট্যান্স কমানোর জন্য", "ওজন কমানোর জন্য", "দাম কমানোর জন্য"],
    "answer": 0
},
{
    "question": "এসি সার্কিটে ইম্পিডেন্স (Z) নির্ণয় করা হয় কোন সূত্র দ্বারা?", // no 63
    "options": ["Z = R + XL + XC", "Z = √(R² + XL² + XC²)", "Z = √[R² + (XL - XC)²]", "Z = R + (XL × XC)"],
    "answer": 2
},
{
    "question": "রেজোন্যান্স অবস্থায় একটি RLC সার্কিটে কী ঘটে?", // no 64
    "options": ["ইম্পিডেন্স সর্বনিম্ন হয়", "ইম্পিডেন্স সর্বোচ্চ হয়", "কারেন্ট সর্বনিম্ন হয়", "পাওয়ার ফ্যাক্টর শূন্য হয়"],
    "answer": 0
},
{
    "question": "একটি ট্রান্সফরমারের প্রাইমারি কারেন্ট 2A এবং টার্ন রেশিও 1:5 হলে সেকেন্ডারি কারেন্ট কত?", // no 65
    "options": ["0.4A", "2A", "5A", "10A"],
    "answer": 0
},
{
    "question": "ট্রান্সফরমারের লোড বৃদ্ধি পেলে কোনটি ঘটে?", // no 66
    "options": ["প্রাইমারি কারেন্ট বৃদ্ধি পায়", "সেকেন্ডারি কারেন্ট হ্রাস পায়", "কোর লস কমে", "দক্ষতা কমে"],
    "answer": 0
},
{
    "question": "একটি অটো-ট্রান্সফরমারে কয়টি উইন্ডিং থাকে?", // no 67
    "options": ["1", "2", "3", "4"],
    "answer": 0
},
{
    "question": "ইনস্ট্রুমেন্ট ট্রান্সফরমার ব্যবহার করা হয় প্রধানত কেন?", // no 68
    "options": ["ভোল্টেজ বাড়ানোর জন্য", "কারেন্ট পরিমাপের জন্য", "ফ্রিকোয়েন্সি পরিবর্তনের জন্য", "পাওয়ার ফ্যাক্টর উন্নত করার জন্য"],
    "answer": 1
},
{
    "question": "3-ফেজ ইন্ডাকশন মোটরে রোটার কত ধরনের হতে পারে?", // no 69
    "options": ["1", "2", "3", "4"],
    "answer": 1
},
{
    "question": "স্লিপ রিং ইন্ডাকশন মোটরে কোন ধরনের রোটার ব্যবহার করা হয়?", // no 70
    "options": ["স্কুইরেল কেজ", "স্লটেড", "স্লিপ রিং", "কমিউটেটর"],
    "answer": 2
},
{
    "question": "ইন্ডাকশন মোটরের স্লিপ সাধারণত কত?", // no 71
    "options": ["0-1%", "2-5%", "10-20%", "50-100%"],
    "answer": 1
},
{
    "question": "একটি 4-পোল, 50Hz ইন্ডাকশন মোটরের সিনক্রোনাস স্পিড কত?", // no 72
    "options": ["750 rpm", "1000 rpm", "1500 rpm", "3000 rpm"],
    "answer": 2
},
{
    "question": "ডিসি মোটরের গতি নিয়ন্ত্রণ করা যায় কিভাবে?", // no 73
    "options": ["আর্মেচার ভোল্টেজ পরিবর্তন করে", "ফিল্ড কারেন্ট পরিবর্তন করে", "উভয় পদ্ধতিতে", "কোনটিই নয়"],
    "answer": 2
},
{
    "question": "ডিসি জেনারেটরে কমিউটেটরের প্রধান কাজ কী?", // no 74
    "options": ["কারেন্ট রেকটিফাই করা", "ভোল্টেজ রেগুলেট করা", "পাওয়ার ফ্যাক্টর উন্নত করা", "গতি নিয়ন্ত্রণ করা"],
    "answer": 0
},
{
    "question": "সিনক্রোনাস মোটরের প্রধান সুবিধা কী?", // no 75
    "options": ["সস্তা", "হালকা", "ধ্রুব গতি", "উচ্চ স্টার্টিং টর্ক"],
    "answer": 2
},
{
    "question": "স্টেপার মোটর ব্যবহার করা হয় প্রধানত কোথায়?", // no 76
    "options": ["পানির পাম্পে", "ফ্যানে", "পজিশন কন্ট্রোলে", "কম্প্রেসরে"],
    "answer": 2
},
{
    "question": "একটি সার্কিট ব্রেকারের প্রধান কাজ কী?", // no 77
    "options": ["লোড কন্ট্রোল করা", "পাওয়ার ফ্যাক্টর উন্নত করা", "শর্ট সার্কিট প্রটেকশন দেওয়া", "ভোল্টেজ রেগুলেট করা"],
    "answer": 2
},
{
    "question": "একটি ফিউজের রেটিং প্রকাশ করা হয় কীসে?", // no 78
    "options": ["ভোল্টেজে", "কারেন্টে", "পাওয়ারে", "ফ্রিকোয়েন্সিতে"],
    "answer": 1
},
{
    "question": "ELCB কাজ করে কোন নীতিতে?", // no 79
    "options": ["ওভারলোড", "শর্ট সার্কিট", "আর্থ লিকেজ", "ভোল্টেজ ফ্লাকচুয়েশন"],
    "answer": 2
},
{
    "question": "বাংলাদেশে ডোমেস্টিক ওয়্যারিং-এ সাধারণত কোন রঙের তার আর্থিং হিসেবে ব্যবহার করা হয়?", // no 80
    "options": ["লাল", "নীল", "সবুজ/হলুদ", "কালো"],
    "answer": 2
},


//81-100

{
    "question": "একটি ট্রান্সফরমারের নো লোড কারেন্ট প্রধানত কী দ্বারা নির্ধারিত হয়?", // no 81
    "options": ["কপার লস", "আয়রন লস", "মেকানিক্যাল লস", "স্ট্রে লস"],
    "answer": 1
},
{
    "question": "ট্রান্সফরমারের ভোল্টেজ রেগুলেশন সাধারণত কেমন হওয়া উচিত?", // no 82
    "options": ["যত কম সম্ভব", "যত বেশি সম্ভব", "50% এর বেশি", "100% এর সমান"],
    "answer": 0
},
{
    "question": "একটি ট্রান্সফরমারের দক্ষতা সর্বোচ্চ হয় কখন?", // no 83
    "options": ["নো লোডে", "ফুল লোডে", "যখন কপার লস = আয়রন লস", "শর্ট সার্কিট অবস্থায়"],
    "answer": 2
},
{
    "question": "3-ফেজ ট্রান্সফরমার ব্যাঙ্কে ডেল্টা-ডেল্টা কানেকশন ব্যবহার করা হয় কেন?", // no 84
    "options": ["আনব্যালান্সড লোডের জন্য", "হাই ভোল্টেজের জন্য", "থার্ড হারমোনিক কমাতে", "ইন্সুলেশন সাশ্রয়ের জন্য"],
    "answer": 2
},
{
    "question": "স্কট কানেকশন ব্যবহার করা হয় কীভাবে?", // no 85
    "options": ["1-ফেজ থেকে 3-ফেজ রূপান্তরে", "3-ফেজ থেকে 1-ফেজ রূপান্তরে", "ভোল্টেজ বাড়ানোর জন্য", "ফ্রিকোয়েন্সি পরিবর্তনের জন্য"],
    "answer": 0
},
{
    "question": "ইন্ডাকশন মোটরের স্টার্টিং টর্ক বাড়ানোর উপায় কী?", // no 86
    "options": ["স্টার্টার ব্যবহার করে", "ভোল্টেজ কমিয়ে", "ফ্রিকোয়েন্সি বাড়িয়ে", "পাওয়ার ফ্যাক্টর কমিয়ে"],
    "answer": 0
},
{
    "question": "ডিসি শান্ট মোটরের স্পিড-টর্ক ক্যারেক্টারিস্টিক্স কেমন?", // no 87
    "options": ["হাই স্পিড, লো টর্ক", "লো স্পিড, হাই টর্ক", "কনস্ট্যান্ট স্পিড", "স্পিড টর্কের সাথে ব্যাস্তানুপাতিক"],
    "answer": 2
},
{
    "question": "সিনক্রোনাস মোটর সাধারণত কী হিসেবে ব্যবহার করা হয়?", // no 88
    "options": ["জেনারেটর", "কন্ডেনসার", "ট্রান্সফরমার", "রেকটিফায়ার"],
    "answer": 1
},
{
    "question": "স্টেপার মোটরের স্টেপ এঙ্গেল নির্ভর করে কীসের উপর?", // no 89
    "options": ["সাপ্লাই ভোল্টেজ", "সাপ্লাই ফ্রিকোয়েন্সি", "স্টেটর পোল সংখ্যা", "রোটার ইনারশিয়া"],
    "answer": 2
},
{
    "question": "একটি সার্ভো মোটরের প্রধান বৈশিষ্ট্য কী?", // no 90
    "options": ["উচ্চ স্পিড", "নির্ভুল পজিশন কন্ট্রোল", "বড় সাইজ", "সস্তা দাম"],
    "answer": 1
},
{
    "question": "ইলেকট্রিক্যাল ড্রাইভে VFD এর পূর্ণরূপ কী?", // no 91
    "options": ["Variable Frequency Drive", "Voltage Frequency Device", "Variable Field Drive", "Voltage Field Detector"],
    "answer": 0
},
{
    "question": "PLC প্রোগ্রামিং-এ LADDER LOGIC ব্যবহার করা হয় কেন?", // no 92
    "options": ["ইলেকট্রিশিয়ানদের বোঝার সুবিধার জন্য", "কম্পিউটার প্রোগ্রামারদের জন্য", "উচ্চ গতির জন্য", "কম মেমোরি ব্যবহারের জন্য"],
    "answer": 0
},
{
    "question": "একটি সাবস্টেশনে ব্যবহার করা হয় না কোনটি?", // no 93
    "options": ["সার্কিট ব্রেকার", "ট্রান্সফরমার", "কন্ডেনসার", "জেনারেটর"],
    "answer": 3
},
{
    "question": "পাওয়ার সিস্টেমে শান্ট কন্ডেনসার ব্যবহার করা হয় কেন?", // no 94
    "options": ["পাওয়ার ফ্যাক্টর উন্নত করতে", "ভোল্টেজ কমাতে", "কারেন্ট কমাতে", "ফ্রিকোয়েন্সি নিয়ন্ত্রণ করতে"],
    "answer": 0
},
{
    "question": "হাই ভোল্টেজ ডিসি ট্রান্সমিশনের সুবিধা কী?", // no 95
    "options": ["কম ইনসুলেশন খরচ", "কম সিস্টেম লস", "রিয়েক্টিভ পাওয়ার নিয়ন্ত্রণ", "উপরের সবগুলো"],
    "answer": 3
},
{
    "question": "বাংলাদেশে গ্রিড ফ্রিকোয়েন্সি কত?", // no 96
    "options": ["50Hz", "60Hz", "100Hz", "120Hz"],
    "answer": 0
},
{
    "question": "একটি থার্মাল পাওয়ার প্লান্টের দক্ষতা সাধারণত কত?", // no 97
    "options": ["20-30%", "40-50%", "60-70%", "80-90%"],
    "answer": 1
},
{
    "question": "সোলার সেলের উপাদান কী?", // no 98
    "options": ["সিলিকন", "জার্মেনিয়াম", "গ্যালিয়াম আর্সেনাইড", "উপরের সবগুলো"],
    "answer": 3
},
{
    "question": "বায়োগ্যাস প্লান্টে প্রধান উৎপাদন কী?", // no 99
    "options": ["মিথেন", "ইথেন", "প্রোপেন", "বিউটেন"],
    "answer": 0
},
{
    "question": "ইলেকট্রিক্যাল সেফটি ডিভাইস কোনটি?", // no 100
    "options": ["ফিউজ", "সুইচ", "ট্রান্সফরমার", "রেজিস্টর"],
    "answer": 0
},



//




];

// Select 10 random questions
function getRandomQuestions(allQuestions, count) {
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

const quizQuestions = getRandomQuestions(questions, 10);
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 10;

// DOM Elements
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-btn');
const timeElement = document.getElementById('time');
const currentQuestionElement = document.getElementById('current-question');
const scoreElement = document.getElementById('score');

// Load a question
function loadQuestion() {
    resetState();
    startTimer();
    
    const currentQuestion = quizQuestions[currentQuestionIndex];
    currentQuestionElement.textContent = currentQuestionIndex + 1;
    
    questionElement.textContent = currentQuestion.question;
    
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option');
        button.addEventListener('click', () => selectOption(index));
        optionsElement.appendChild(button);
    });
}

// Reset the question state
function resetState() {
    clearInterval(timer);
    timeLeft = 10;
    timeElement.textContent = timeLeft;
    
    while (optionsElement.firstChild) {
        optionsElement.removeChild(optionsElement.firstChild);
    }
    
    nextButton.style.display = 'none';
}

// Start the timer
function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timeElement.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            timeUp();
        }
    }, 1000);
}

// Handle when time is up
function timeUp() {
    const options = document.querySelectorAll('.option');
    const currentQuestion = quizQuestions[currentQuestionIndex];
    
    options.forEach((option, index) => {
        option.disabled = true;
        if (index === currentQuestion.answer) {
            option.classList.add('correct');
        }
    });
    
    nextButton.style.display = 'block';
}

// Handle option selection
function selectOption(selectedIndex) {
    clearInterval(timer);
    
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const options = document.querySelectorAll('.option');
    const isCorrect = selectedIndex === currentQuestion.answer;
    
    options.forEach((option, index) => {
        option.disabled = true;
        if (index === currentQuestion.answer) {
            option.classList.add('correct');
        } else if (index === selectedIndex && !isCorrect) {
            option.classList.add('incorrect');
        }
    });
    
    if (isCorrect) {
        score++;
        scoreElement.textContent = `স্কোর: ${score}`;
    }
    
    nextButton.style.display = 'block';
}

// Show the next question
function showNextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

// Show the final result
function showResult() {
    resetState();
    
    questionElement.textContent = `কুইজ সম্পন্ন! আপনার স্কোর: ${score} / ${quizQuestions.length}`;
    nextButton.style.display = 'none';
    
    // Create a restart button
    const restartButton = document.createElement('button');
    restartButton.textContent = 'আবার খেলুন';
    restartButton.classList.add('next-btn');
    restartButton.addEventListener('click', restartQuiz);
    optionsElement.appendChild(restartButton);
}

// Restart the quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.textContent = `স্কোর: ${score}`;
    loadQuestion();
}

// Event listeners
nextButton.addEventListener('click', showNextQuestion);

// Start the quiz
loadQuestion();