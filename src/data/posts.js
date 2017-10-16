const posts = [
    {
       "user": "Margot Robbie",
       "caption":"Lunch #hamont",
       "likes":56,
       "liked": false,
       "img_url":"https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/12552326_495932673919321_1443393332_n.jpg"
    },
    {
       "user": "Margot Robbie",
       "caption":"Snow! ⛄️🌨❄️ #lifewithsnickers",
       "likes":59,
       "liked": false,
       "img_url":"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12407344_1283694208323785_735653395_n.jpg"
    },
    {
       "user": "Margot Robbie",
       "caption":"Cleaned my office and mounted my recording gear overhead. Stoked for 2016!",
       "likes":79,
       "liked": false,
       "img_url":"https://scontent.cdninstagram.com/hphotos-xpf1/t51.2885-15/e35/923995_1704188643150533_1383710275_n.jpg"
    },
    {
       "user": "Margot Robbie",
       "caption":"Making baby pancakes for one early rising baby. ☕️🍴",
       "likes":47,
       "liked": false,
       "img_url":"https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/12407480_1654828594805097_152207166_n.jpg"
    },
    {
       "user": "Margot Robbie",
       "caption":"New Stickers just came in. I'll do another mailing in a few weeks if you want some. #javascript",
       "likes":66,
       "liked": false,
       "img_url":"https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/11875511_1562439187344831_813588280_n.jpg"
    },
    {
       "user": "Margot Robbie",
       "caption":"Tacos for breakfast. I love you Austin. 🇺🇸",
       "likes":33,
       "liked": false,
       "img_url":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e35/11917950_927755223968499_1198055371_n.jpg"
    },
    {
       "user": "Margot Robbie",
       "caption":"Tried poke for the first time at @pokehbar. Delicious! It's like a bowl of sushi",
       "likes":30,
       "liked": false,
       "img_url":"https://scontent.cdninstagram.com/hphotos-xpa1/t51.2885-15/e35/12501993_1504179163220771_2060674913_n.jpg"
    },
    {
       "user": "Margot Robbie",
       "caption":"Brunchin'",
       "likes":40,
       "liked": false,
       "img_url":"https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/1516572_445736812276082_2116173059_n.jpg"
    },
    {
       "user": "Margot Robbie",
       "caption":"2015 can be summed up with one baby and a many lines of code. And sometimes a coding baby. 👶🏼⌨",
       "likes":62,
       "liked": false,
       "img_url":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e35/10723795_1149927178351091_1859033096_n.jpg"
    },
    {
       "user": "Margot Robbie",
       "caption":"Lekker Chocoladeletter",
       "likes":52,
       "liked": false,
       "img_url":"https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e35/12346073_1035047523184672_768982339_n.jpg"
    },
    {
       "user": "Margot Robbie",
       "caption":"Just discovered the #hamont farmers market has a new ramen place! 🍜",
       "likes":35,
       "liked": false,
       "img_url":"https://scontent.cdninstagram.com/hphotos-xft1/t51.2885-15/e35/12331739_1671776806423597_995664526_n.jpg"
    },
    {
       "user": "Margot Robbie",
       "caption":"⛄️",
       "likes":64,
       "liked": false,
       "img_url":"https://scontent.cdninstagram.com/hphotos-xft1/t51.2885-15/e35/12354078_447337935474115_1484398925_n.jpg"
    },
    {
       "user": "Margot Robbie",
       "caption":"6 page spread on flexbox in this months netmag!",
       "likes":74,
       "liked": false,
       "img_url":"https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e35/12362588_1688046211438811_1395882545_n.jpg"
    },
    {
       "user": "Margot Robbie",
       "caption":"Hanging out in my office waiting for 5:00 beers to come around.",
       "likes":54,
       "liked": false,
       "img_url":"https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e35/12301208_1533749386944985_1334730917_n.jpg"
    },
    {
       "user": "Margot Robbie",
       "caption":"Today I learned that a long pull espresso is called a 'lungo'",
       "likes":18,
       "liked": false,
       "img_url":"https://scontent.cdninstagram.com/hphotos-xft1/t51.2885-15/e35/12357319_493317964181479_310198908_n.jpg"
    },
    {
       "user": "Margot Robbie",
       "caption":"Awesome hand lettered gift from @eunibae and the HackerYou crew.",
       "likes":48,
       "liked": false,
       "img_url":"https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e35/12317458_1692845870986430_331905833_n.jpg"
    },
    {
       "user": "Margot Robbie",
       "caption":"Some serious hardware meet JavaScript hacks going down this week at hackeryou. Excited for demo day!",
       "likes":57,
       "liked": false,
       "img_url":"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12276809_750065668431999_184252508_n.jpg"
    },
    {
       "user": "Margot Robbie",
       "caption":"Some major audio upgrades coming to my next videos 😍",
       "likes":39,
       "liked": false,
       "img_url":"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12331333_1650987978502155_1162510634_n.jpg"
    },
    {
       "user": "Margot Robbie",
       "caption":"My baby and me. Thanks to @bearandsparrow for this one.",
       "likes":81,
       "liked": false,
       "img_url":"https://scontent.cdninstagram.com/hphotos-xtf1/t51.2885-15/e35/12298962_863814057068027_460827278_n.jpg"
    },
    {
       "user": "Margot Robbie",
       "caption":"It's too early. Send coffee.",
       "likes":81,
       "liked": false,
       "img_url":"https://scontent.cdninstagram.com/hphotos-xtf1/t51.2885-15/e35/12328347_990748230999662_1512917342_n.jpg"
    },
    {
       "user": "Margot Robbie",
       "caption":"They both have figured it out. #lifewithsnickers",
       "likes":47,
       "liked": false,
       "img_url":"https://scontent.cdninstagram.com/hphotos-xtp1/t51.2885-15/e35/12256736_1758525004381641_1136705181_n.jpg"
    },
    {
       "user": "Margot Robbie",
       "caption":"Kaitlin decorated the house for the Christmas. So gezellig! #casabos",
       "likes":46,
       "liked": false,
       "img_url":"https://scontent.cdninstagram.com/hphotos-xpt1/t51.2885-15/e35/12277581_1028556737218368_1184190781_n.jpg"
    },
    {
       "user": "Margot Robbie",
       "caption":"Trying the new Hamilton Brewery beer. Big fan.",
       "likes":27,
       "liked": false,
       "img_url":"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12224456_175248682823294_1558707223_n.jpg"
    },
    {
       "user": "Margot Robbie",
       "caption":"I'm in Austin for a conference and doing some training. Enjoying some local brew with my baby.",
       "likes":82,
       "liked": false,
       "img_url":"https://scontent.cdninstagram.com/hphotos-xpt1/t51.2885-15/e35/11326072_550275398458202_1726754023_n.jpg"
    }
 ];
 
 
 export default posts;