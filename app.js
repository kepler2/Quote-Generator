const quoteBtn = document.querySelector('#quoteBtn');

let quotes = [
    '"The greatest glory in living lies not in never falling, but in rising every time we fall." - Nelson Mandela',
    '"The way to get started is to quit talking and begin doing." - Walt Disney',
    '"Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking." - Steve Jobs',
    '"If life were predictable it would cease to be life, and be without flavor." - Eleanor Roosevelt',
    '"If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success." - James Cameron',
    '"Life is what happens when you\'re busy making other plans." - John Lennon',
    '"Tell me and I forget. Teach me and I remember. Involve me and I learn." - Benjamin Franklin',
    '"It is during our darkest moments that we must focus to see the light." - Aristotle',
    '"Whoever is happy will make others happy too." - Anne Frank',
    '"Do not go where the path may lead, go instead where there is no path and leave a trail." - Ralph Waldo Emerson',
    '"You will face many defeats in life, but never let yourself be defeated." - Maya Angelou',
    '"In the end, it\'s not the years in your life that count. It\'s the life in your years." - Abraham Lincoln',
    '"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose." - Dr. Seuss',
    '"To live is the rarest thing in the world. Most people exist, that is all." – Oscar Wilde',
    '"I find that the harder I work, the more luck I seem to have." - Thomas Jefferson',
    '"Success is not final; failure is not fatal: It is the courage to continue that counts." - Winston S. Churchill',
    '"The question isn\'t who is going to let me; it\'s who is going to stop me." - Ayn Rand',
    '"Winning isn\'t everything, but wanting to win is." - Vince Lombardi',
    '"You may be disappointed if you fail, but you are doomed if you don\'t try." - Beverly Sills',
    '"Too many of us are not living our dreams because we are living our fears." - Les Brown',
    '"Whatever the mind of man can conceive and believe, it can achieve." - Napoleon Hill',
    '"You miss 100% of the shots you don\'t take." - Wayne Gretzky',
    '"It does not matter how slowly you go as long as you do not stop." - Confucius',
    '“Life is like riding a bicycle. To keep your balance, you must keep moving.” - Albert Einstein',
    '"If you can\'t explain it simply, you don\'t understand it well enough." - Albert Einstein'
];


// Display quote when the page loads
document.onload = newQuote();

// Display quote when clicking the button
quoteBtn.addEventListener('click', newQuote);

// Display quote when pressing Enter key 
document.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        newQuote();
    }
})

// Dislay Date
var d = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.querySelector(".datetime").innerHTML = days[d.getDay()] + " | " + [d.getMonth() + 1] + "/" + d.getDate() + "/" + d.getFullYear();


// Display quoute
function newQuote() {
    let randomNumber = Math.floor(Math.random() * (quotes.length));
    document.querySelector('#quoteDisplay').innerHTML = quotes[randomNumber];
}