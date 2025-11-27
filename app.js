let quotes = [`“All our dreams can come true; if we have the courage to pursue them.” – Walt     Disney`,
    `“However difficult life may seem, there is always something you can do and succeed at.” – Stephen Hawking`,
    `“People begin to become successful the minute they decide to be.” – Harvey MacKay`,
    `“It always seems impossible until it’s done.” – Nelson Mandela`,
    `“Nothing is impossible, the word itself says ‘I’m possible’!” – Audrey Hepburn`,
    `“Success isn’t overnight. It’s when everyday you get a little better than the day before. It all adds up.” – Dwayne Johnson`,
    `“It does not matter how slowly you go as long as you do not stop.” – Confucius`,
    `“The more you praise and celebrate your life, the more there is in life to celebrate.” – Oprah Winfrey`,
    `“Do what you can, with what you’ve got, where you are.” – Teddy Roosevelt`,
    `“Success consists of going from failure to failure without loss of enthusiasm.” – Winston Churchill`,
    `“Women, like men, should try to do the impossible. And when they fail, their failure should be a challenge to others.” – Amelia Earhart`];



let quotesPara = document.getElementById("quotes");
let btn = document.getElementById("generate");

btn.onclick = () => {
    let randomQuote = Math.floor(Math.random() * quotes.length);
    quotesPara.textContent = quotes[randomQuote];
};