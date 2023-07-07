const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const profile = {};

const questions = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (e.g., dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!"
];

const collectAnswers = () => {
  rl.question(questions[0], (name) => {
    profile.name = name;

    rl.question(questions[1], (activity) => {
      profile.activity = activity;

      rl.question(questions[2], (music) => {
        profile.music = music;

        rl.question(questions[3], (meal) => {
          profile.meal = meal;

          rl.question(questions[4], (food) => {
            profile.food = food;

            rl.question(questions[5], (sport) => {
              profile.sport = sport;

              rl.question(questions[6], (superpower) => {
                profile.superpower = superpower;

                rl.close();

                const profileText = `Name: ${profile.name}\nActivity: ${profile.activity}\nMusic: ${profile.music}\nMeal: ${profile.meal}\nFood: ${profile.food}\nSport: ${profile.sport}\nSuperpower: ${profile.superpower}`;
                console.log("Profile Generated:");
                console.log(profileText);
              });
            });
          });
        });
      });
    });
  });
};

collectAnswers();
