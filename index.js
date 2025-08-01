const students = ["airi", "akane", "akari", "ako", "aoba", "arisu", "aru", "asuna", "atsuko", "ayane", "azusa", "cherino", "chiaki", "chihiro", 
    "chinatsu", "chise", "eimi", "fubuki", "fuuka", "hanae", "hanako", "hare", "haruka", "haruna", "hasumi", "hibiki", "hifumi", "hikari", 
    "himari", "hina", "hinata", "hiyori", "hoshino", "ibuki", "ichika", "iori", "iroha", "izumi", "izuna", "junko", "juri", "kaede", "kaho", 
    "kanna", "karin", "kasumi", "kayoko", "kazusa", "kikyou", "kirara", "kirino", "kisaki", "koharu", "kokona", "kotama", "kotori", "koyuki", 
    "maki", "makoto", "mari", "marina", "mashiro", "megu", "meru", "michiru", "midori", "mika", "mimori", "mina", "mine", "minori", "misaki", 
    "miyako", "miyu", "moe", "momiji", "momoi", "mutsuki", "nagisa", "nagusa", "natsu", "neru", "niya", "noa", "nodoka", "nonomi", "nozomi", 
    "pina", "rei", "reijo", "reisa", "renge", "rio", "rumi", "saki", "sakurako", "saori", "satsuki", "saya", "seia", "sena", "serika", "serina",
    "shigure", "shimiko", "shiroko", "shiroko terror", "shizuko", "shun", "sumire", "suzumi", "toki", "tomoe", "tsubaki", "tsukuyo", "tsurugi",
    "ui", "umika", "utaha", "wakamo", "yoshimi", "yukari", "yuuka", "yuzu"
    ]

function pickHalo(arng) {
    const rand = Math.ceil(arng.quick() * (students.length+1)) - 1

    const haloImg = $('.guess-image')
    haloImg.src = "students/" + students[randStudent] + "/halo.webp"
}

