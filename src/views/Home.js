import React from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import {SearchBar} from 'react-native-elements';
import LayoutContainer from '../components/layout/Layout';
import ImageView from '../components/image/ImageView';
import stylesheet from '../styles/styles';

// Helpers/filmsData.js

const images = [
  {
    id: 181808,
    image:
      'https://media.discordapp.net/attachments/630112847434874890/631947610525007902/image0.jpg?width=495&height=660',
    username: 'grosse chatte',
    profilepic:
      'https://images-na.ssl-images-amazon.com/images/I/71c-O3GaxLL._SY450_.jpg',
    place: 'chez awesmosh',
    likes: "2 241 J'aime",
    description: 'Je suis le petit chat miaou je suis moche',
    comments: 12,
    title: 'Je suis un chat oui oui oui miaou miaou regardez moi',
  },
  {
    id: 181811,
    image:
      'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/12190981_834909716634762_5265565565079095339_n.jpg?_nc_cat=110&_nc_oc=AQkQZeT6r1lqnO3JtQ6UUWWc5S1jV-r3Qqp5XLJ7T0WGRzzu7ROlvSvlN5qn3anF_MA&_nc_ht=scontent-cdg2-1.xx&oh=415e5773b0cbfe977386e05c2525cc5e&oe=5E2C6E74',
    username: 'chaudrop',
    profilepic:
      'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/12190981_834909716634762_5265565565079095339_n.jpg?_nc_cat=110&_nc_oc=AQkQZeT6r1lqnO3JtQ6UUWWc5S1jV-r3Qqp5XLJ7T0WGRzzu7ROlvSvlN5qn3anF_MA&_nc_ht=scontent-cdg2-1.xx&oh=415e5773b0cbfe977386e05c2525cc5e&oe=5E2C6E74',
    place: 'Salle de bain',
    likes: "193 J'aime",
    description: "Moi à New York c'était cool j'ai mangé des hambourgeurs",
    comments: 27,
    title: 'Sometimes i feel watched',
  },
  {
    id: 181809,
    image:
      'https://scontent-cdg2-1.xx.fbcdn.net/v/t31.0-8/473782_216490601810013_415584806_o.jpg?_nc_cat=107&_nc_oc=AQlfiBs_MIC-CHVrBQ5cWG6chXh9-cTttZWXUoNgAvDxF-J5Y8NkMOENXTyTereSrMY&_nc_ht=scontent-cdg2-1.xx&oh=97203cb513f3480af515561ef6377b51&oe=5E201805',
    username: 'chaudrop',
    profilepic:
      'https://www.jeuneafrique.com/medias/2011/11/09/009112011134618000000chaudrontourmenteoki.jpg',
    place: 'Salle de bain',
    likes: "1 129 J'aime",
    description: 'Moi dans mon jardin lol je jouais à la poupée',
    comments: 3,
    title:
      'How do yo see your future ? I still wanna be a jedi cacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacaca !',
  },
  {
    id: 181810,
    image:
      'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/428373_121516831307391_668733968_n.jpg?_nc_cat=104&_nc_oc=AQnciukq9ntRC__OWA5hIL89n-F4A_PIdMUmAgPBNh-VoHq9vFdTr3yfSZy0pTUV114&_nc_ht=scontent-cdg2-1.xx&oh=1d798257443944f97aa7224ae752a870&oe=5E2A1BE0',
    username: 'chaudrop',
    profilepic:
      'https://www.jeuneafrique.com/medias/2011/11/09/009112011134618000000chaudrontourmenteoki.jpg',
    place: 'Salle de bain',
    likes: "10 721 J'aime",
    description: 'Je te la fais bouffer quand tu veux',
    comments: 45,
    title: 'Sometimes i feel watched',
  },
  {
    id: 181813,
    image:
      'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/14199574_1016648451794220_5942400398641443057_n.jpg?_nc_cat=100&_nc_oc=AQmxnA5MrQbMqGqU7VWRRY9eCjIT3XLFJ-B6ZZgIWMHkixxgRTAVW_gkUUfOcR1dETk&_nc_ht=scontent-cdg2-1.xx&oh=76272974e36b43b72231d8be85818481&oe=5E3BBF49',
    username: 'chaudrop',
    profilepic:
      'https://images-na.ssl-images-amazon.com/images/I/71c-O3GaxLL._SY450_.jpg',
    place: 'Salle de bain',
    likes: "2 241 J'aime",
    description:
      "Moi à la plage, Carjack m'avait sucé derrière les dunes cétait trop cool meme que après Antje elle est venue elle m'a bouffé les couilles",
    comments: 12,
    title: 'Coworkers New Retriever Puppy !',
  },
  {
    id: 181814,
    image:
      'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/12190981_834909716634762_5265565565079095339_n.jpg?_nc_cat=110&_nc_oc=AQkQZeT6r1lqnO3JtQ6UUWWc5S1jV-r3Qqp5XLJ7T0WGRzzu7ROlvSvlN5qn3anF_MA&_nc_ht=scontent-cdg2-1.xx&oh=415e5773b0cbfe977386e05c2525cc5e&oe=5E2C6E74',
    username: 'chaudrop',
    profilepic:
      'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/12190981_834909716634762_5265565565079095339_n.jpg?_nc_cat=110&_nc_oc=AQkQZeT6r1lqnO3JtQ6UUWWc5S1jV-r3Qqp5XLJ7T0WGRzzu7ROlvSvlN5qn3anF_MA&_nc_ht=scontent-cdg2-1.xx&oh=415e5773b0cbfe977386e05c2525cc5e&oe=5E2C6E74',
    place: 'Salle de bain',
    likes: "193 J'aime",
    description: "Moi à New York c'était cool j'ai mangé des hambourgeurs",
    comments: 27,
    title: 'Sometimes i feel watched',
  },
  {
    id: 181815,
    image:
      'https://scontent-cdg2-1.xx.fbcdn.net/v/t31.0-8/473782_216490601810013_415584806_o.jpg?_nc_cat=107&_nc_oc=AQlfiBs_MIC-CHVrBQ5cWG6chXh9-cTttZWXUoNgAvDxF-J5Y8NkMOENXTyTereSrMY&_nc_ht=scontent-cdg2-1.xx&oh=97203cb513f3480af515561ef6377b51&oe=5E201805',
    username: 'chaudrop',
    profilepic:
      'https://www.jeuneafrique.com/medias/2011/11/09/009112011134618000000chaudrontourmenteoki.jpg',
    place: 'Salle de bain',
    likes: "1 129 J'aime",
    description: 'Moi dans mon jardin lol je jouais à la poupée',
    comments: 3,
    title:
      'How do yo see your future ? I still wanna be a jedi cacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacaca !',
  },
  {
    id: 181816,
    image:
      'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/428373_121516831307391_668733968_n.jpg?_nc_cat=104&_nc_oc=AQnciukq9ntRC__OWA5hIL89n-F4A_PIdMUmAgPBNh-VoHq9vFdTr3yfSZy0pTUV114&_nc_ht=scontent-cdg2-1.xx&oh=1d798257443944f97aa7224ae752a870&oe=5E2A1BE0',
    username: 'chaudrop',
    profilepic:
      'https://www.jeuneafrique.com/medias/2011/11/09/009112011134618000000chaudrontourmenteoki.jpg',
    place: 'Salle de bain',
    likes: "10 721 J'aime",
    description: 'Je te la fais bouffer quand tu veux',
    comments: 45,
    title: 'Sometimes i feel watched',
  },
  {
    id: 181817,
    image:
      'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/14199574_1016648451794220_5942400398641443057_n.jpg?_nc_cat=100&_nc_oc=AQmxnA5MrQbMqGqU7VWRRY9eCjIT3XLFJ-B6ZZgIWMHkixxgRTAVW_gkUUfOcR1dETk&_nc_ht=scontent-cdg2-1.xx&oh=76272974e36b43b72231d8be85818481&oe=5E3BBF49',
    username: 'chaudrop',
    profilepic:
      'https://images-na.ssl-images-amazon.com/images/I/71c-O3GaxLL._SY450_.jpg',
    place: 'Salle de bain',
    likes: "2 241 J'aime",
    description:
      "Moi à la plage, Carjack m'avait sucé derrière les dunes cétait trop cool meme que après Antje elle est venue elle m'a bouffé les couilles",
    comments: 12,
    title: 'Coworkers New Retriever Puppy !',
  },
  {
    id: 181818,
    image:
      'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/12190981_834909716634762_5265565565079095339_n.jpg?_nc_cat=110&_nc_oc=AQkQZeT6r1lqnO3JtQ6UUWWc5S1jV-r3Qqp5XLJ7T0WGRzzu7ROlvSvlN5qn3anF_MA&_nc_ht=scontent-cdg2-1.xx&oh=415e5773b0cbfe977386e05c2525cc5e&oe=5E2C6E74',
    username: 'chaudrop',
    profilepic:
      'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/12190981_834909716634762_5265565565079095339_n.jpg?_nc_cat=110&_nc_oc=AQkQZeT6r1lqnO3JtQ6UUWWc5S1jV-r3Qqp5XLJ7T0WGRzzu7ROlvSvlN5qn3anF_MA&_nc_ht=scontent-cdg2-1.xx&oh=415e5773b0cbfe977386e05c2525cc5e&oe=5E2C6E74',
    place: 'Salle de bain',
    likes: "193 J'aime",
    description: "Moi à New York c'était cool j'ai mangé des hambourgeurs",
    comments: 27,
    title: 'Sometimes i feel watched',
  },
  {
    id: 181819,
    image:
      'https://scontent-cdg2-1.xx.fbcdn.net/v/t31.0-8/473782_216490601810013_415584806_o.jpg?_nc_cat=107&_nc_oc=AQlfiBs_MIC-CHVrBQ5cWG6chXh9-cTttZWXUoNgAvDxF-J5Y8NkMOENXTyTereSrMY&_nc_ht=scontent-cdg2-1.xx&oh=97203cb513f3480af515561ef6377b51&oe=5E201805',
    username: 'chaudrop',
    profilepic:
      'https://www.jeuneafrique.com/medias/2011/11/09/009112011134618000000chaudrontourmenteoki.jpg',
    place: 'Salle de bain',
    likes: "1 129 J'aime",
    description: 'Moi dans mon jardin lol je jouais à la poupée',
    comments: 3,
    title:
      'How do yo see your future ? I still wanna be a jedi cacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacaca !',
  },
  {
    id: 181820,
    image:
      'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/428373_121516831307391_668733968_n.jpg?_nc_cat=104&_nc_oc=AQnciukq9ntRC__OWA5hIL89n-F4A_PIdMUmAgPBNh-VoHq9vFdTr3yfSZy0pTUV114&_nc_ht=scontent-cdg2-1.xx&oh=1d798257443944f97aa7224ae752a870&oe=5E2A1BE0',
    username: 'chaudrop',
    profilepic:
      'https://www.jeuneafrique.com/medias/2011/11/09/009112011134618000000chaudrontourmenteoki.jpg',
    place: 'Salle de bain',
    likes: "10 721 J'aime",
    description: 'Je te la fais bouffer quand tu veux',
    comments: 45,
    title: 'Sometimes i feel watched',
  },
  {
    id: 181840,
    image:
      'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/14199574_1016648451794220_5942400398641443057_n.jpg?_nc_cat=100&_nc_oc=AQmxnA5MrQbMqGqU7VWRRY9eCjIT3XLFJ-B6ZZgIWMHkixxgRTAVW_gkUUfOcR1dETk&_nc_ht=scontent-cdg2-1.xx&oh=76272974e36b43b72231d8be85818481&oe=5E3BBF49',
    username: 'chaudrop',
    profilepic:
      'https://images-na.ssl-images-amazon.com/images/I/71c-O3GaxLL._SY450_.jpg',
    place: 'Salle de bain',
    likes: "2 241 J'aime",
    description:
      "Moi à la plage, Carjack m'avait sucé derrière les dunes cétait trop cool meme que après Antje elle est venue elle m'a bouffé les couilles",
    comments: 12,
    title: 'Coworkers New Retriever Puppy !',
  },
  {
    id: 181821,
    image:
      'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/12190981_834909716634762_5265565565079095339_n.jpg?_nc_cat=110&_nc_oc=AQkQZeT6r1lqnO3JtQ6UUWWc5S1jV-r3Qqp5XLJ7T0WGRzzu7ROlvSvlN5qn3anF_MA&_nc_ht=scontent-cdg2-1.xx&oh=415e5773b0cbfe977386e05c2525cc5e&oe=5E2C6E74',
    username: 'chaudrop',
    profilepic:
      'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/12190981_834909716634762_5265565565079095339_n.jpg?_nc_cat=110&_nc_oc=AQkQZeT6r1lqnO3JtQ6UUWWc5S1jV-r3Qqp5XLJ7T0WGRzzu7ROlvSvlN5qn3anF_MA&_nc_ht=scontent-cdg2-1.xx&oh=415e5773b0cbfe977386e05c2525cc5e&oe=5E2C6E74',
    place: 'Salle de bain',
    likes: "193 J'aime",
    description: "Moi à New York c'était cool j'ai mangé des hambourgeurs",
    comments: 27,
    title: 'Sometimes i feel watched',
  },
  {
    id: 181822,
    image:
      'https://scontent-cdg2-1.xx.fbcdn.net/v/t31.0-8/473782_216490601810013_415584806_o.jpg?_nc_cat=107&_nc_oc=AQlfiBs_MIC-CHVrBQ5cWG6chXh9-cTttZWXUoNgAvDxF-J5Y8NkMOENXTyTereSrMY&_nc_ht=scontent-cdg2-1.xx&oh=97203cb513f3480af515561ef6377b51&oe=5E201805',
    username: 'chaudrop',
    profilepic:
      'https://www.jeuneafrique.com/medias/2011/11/09/009112011134618000000chaudrontourmenteoki.jpg',
    place: 'Salle de bain',
    likes: "1 129 J'aime",
    description: 'Moi dans mon jardin lol je jouais à la poupée',
    comments: 3,
    title:
      'How do yo see your future ? I still wanna be a jedi cacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacaca !',
  },
  {
    id: 181823,
    image:
      'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/428373_121516831307391_668733968_n.jpg?_nc_cat=104&_nc_oc=AQnciukq9ntRC__OWA5hIL89n-F4A_PIdMUmAgPBNh-VoHq9vFdTr3yfSZy0pTUV114&_nc_ht=scontent-cdg2-1.xx&oh=1d798257443944f97aa7224ae752a870&oe=5E2A1BE0',
    username: 'chaudrop',
    profilepic:
      'https://www.jeuneafrique.com/medias/2011/11/09/009112011134618000000chaudrontourmenteoki.jpg',
    place: 'Salle de bain',
    likes: "10 721 J'aime",
    description: 'Je te la fais bouffer quand tu veux',
    comments: 45,
    title: 'Sometimes i feel watched',
  },
  {
    id: 181824,
    image:
      'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/14199574_1016648451794220_5942400398641443057_n.jpg?_nc_cat=100&_nc_oc=AQmxnA5MrQbMqGqU7VWRRY9eCjIT3XLFJ-B6ZZgIWMHkixxgRTAVW_gkUUfOcR1dETk&_nc_ht=scontent-cdg2-1.xx&oh=76272974e36b43b72231d8be85818481&oe=5E3BBF49',
    username: 'chaudrop',
    profilepic:
      'https://images-na.ssl-images-amazon.com/images/I/71c-O3GaxLL._SY450_.jpg',
    place: 'Salle de bain',
    likes: "2 241 J'aime",
    description:
      "Moi à la plage, Carjack m'avait sucé derrière les dunes cétait trop cool meme que après Antje elle est venue elle m'a bouffé les couilles",
    comments: 12,
    title: 'Coworkers New Retriever Puppy !',
  },
  {
    id: 181825,
    image:
      'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/12190981_834909716634762_5265565565079095339_n.jpg?_nc_cat=110&_nc_oc=AQkQZeT6r1lqnO3JtQ6UUWWc5S1jV-r3Qqp5XLJ7T0WGRzzu7ROlvSvlN5qn3anF_MA&_nc_ht=scontent-cdg2-1.xx&oh=415e5773b0cbfe977386e05c2525cc5e&oe=5E2C6E74',
    username: 'chaudrop',
    profilepic:
      'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/12190981_834909716634762_5265565565079095339_n.jpg?_nc_cat=110&_nc_oc=AQkQZeT6r1lqnO3JtQ6UUWWc5S1jV-r3Qqp5XLJ7T0WGRzzu7ROlvSvlN5qn3anF_MA&_nc_ht=scontent-cdg2-1.xx&oh=415e5773b0cbfe977386e05c2525cc5e&oe=5E2C6E74',
    place: 'Salle de bain',
    likes: "193 J'aime",
    description: "Moi à New York c'était cool j'ai mangé des hambourgeurs",
    comments: 27,
    title: 'Sometimes i feel watched',
  },
  {
    id: 181826,
    image:
      'https://scontent-cdg2-1.xx.fbcdn.net/v/t31.0-8/473782_216490601810013_415584806_o.jpg?_nc_cat=107&_nc_oc=AQlfiBs_MIC-CHVrBQ5cWG6chXh9-cTttZWXUoNgAvDxF-J5Y8NkMOENXTyTereSrMY&_nc_ht=scontent-cdg2-1.xx&oh=97203cb513f3480af515561ef6377b51&oe=5E201805',
    username: 'chaudrop',
    profilepic:
      'https://www.jeuneafrique.com/medias/2011/11/09/009112011134618000000chaudrontourmenteoki.jpg',
    place: 'Salle de bain',
    likes: "1 129 J'aime",
    description: 'Moi dans mon jardin lol je jouais à la poupée',
    comments: 3,
    title:
      'How do yo see your future ? I still wanna be a jedi cacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacaca !',
  },
  {
    id: 181827,
    image:
      'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/428373_121516831307391_668733968_n.jpg?_nc_cat=104&_nc_oc=AQnciukq9ntRC__OWA5hIL89n-F4A_PIdMUmAgPBNh-VoHq9vFdTr3yfSZy0pTUV114&_nc_ht=scontent-cdg2-1.xx&oh=1d798257443944f97aa7224ae752a870&oe=5E2A1BE0',
    username: 'chaudrop',
    profilepic:
      'https://www.jeuneafrique.com/medias/2011/11/09/009112011134618000000chaudrontourmenteoki.jpg',
    place: 'Salle de bain',
    likes: "10 721 J'aime",
    description: 'Je te la fais bouffer quand tu veux',
    comments: 45,
    title: 'Sometimes i feel watched',
  },
  {
    id: 181828,
    image:
      'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/14199574_1016648451794220_5942400398641443057_n.jpg?_nc_cat=100&_nc_oc=AQmxnA5MrQbMqGqU7VWRRY9eCjIT3XLFJ-B6ZZgIWMHkixxgRTAVW_gkUUfOcR1dETk&_nc_ht=scontent-cdg2-1.xx&oh=76272974e36b43b72231d8be85818481&oe=5E3BBF49',
    username: 'chaudrop',
    profilepic:
      'https://images-na.ssl-images-amazon.com/images/I/71c-O3GaxLL._SY450_.jpg',
    place: 'Salle de bain',
    likes: "2 241 J'aime",
    description:
      "Moi à la plage, Carjack m'avait sucé derrière les dunes cétait trop cool meme que après Antje elle est venue elle m'a bouffé les couilles",
    comments: 12,
    title: 'Coworkers New Retriever Puppy !',
  },
  {
    id: 181829,
    image:
      'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/12190981_834909716634762_5265565565079095339_n.jpg?_nc_cat=110&_nc_oc=AQkQZeT6r1lqnO3JtQ6UUWWc5S1jV-r3Qqp5XLJ7T0WGRzzu7ROlvSvlN5qn3anF_MA&_nc_ht=scontent-cdg2-1.xx&oh=415e5773b0cbfe977386e05c2525cc5e&oe=5E2C6E74',
    username: 'chaudrop',
    profilepic:
      'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/12190981_834909716634762_5265565565079095339_n.jpg?_nc_cat=110&_nc_oc=AQkQZeT6r1lqnO3JtQ6UUWWc5S1jV-r3Qqp5XLJ7T0WGRzzu7ROlvSvlN5qn3anF_MA&_nc_ht=scontent-cdg2-1.xx&oh=415e5773b0cbfe977386e05c2525cc5e&oe=5E2C6E74',
    place: 'Salle de bain',
    likes: "193 J'aime",
    description: "Moi à New York c'était cool j'ai mangé des hambourgeurs",
    comments: 27,
    title: 'Sometimes i feel watched',
  },
  {
    id: 181830,
    image:
      'https://scontent-cdg2-1.xx.fbcdn.net/v/t31.0-8/473782_216490601810013_415584806_o.jpg?_nc_cat=107&_nc_oc=AQlfiBs_MIC-CHVrBQ5cWG6chXh9-cTttZWXUoNgAvDxF-J5Y8NkMOENXTyTereSrMY&_nc_ht=scontent-cdg2-1.xx&oh=97203cb513f3480af515561ef6377b51&oe=5E201805',
    username: 'chaudrop',
    profilepic:
      'https://www.jeuneafrique.com/medias/2011/11/09/009112011134618000000chaudrontourmenteoki.jpg',
    place: 'Salle de bain',
    likes: "1 129 J'aime",
    description: 'Moi dans mon jardin lol je jouais à la poupée',
    comments: 3,
    title:
      'How do yo see your future ? I still wanna be a jedi cacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacaca !',
  },
  {
    id: 181831,
    image:
      'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/428373_121516831307391_668733968_n.jpg?_nc_cat=104&_nc_oc=AQnciukq9ntRC__OWA5hIL89n-F4A_PIdMUmAgPBNh-VoHq9vFdTr3yfSZy0pTUV114&_nc_ht=scontent-cdg2-1.xx&oh=1d798257443944f97aa7224ae752a870&oe=5E2A1BE0',
    username: 'chaudrop',
    profilepic:
      'https://www.jeuneafrique.com/medias/2011/11/09/009112011134618000000chaudrontourmenteoki.jpg',
    place: 'Salle de bain',
    likes: "10 721 J'aime",
    description: 'Je te la fais bouffer quand tu veux',
    comments: 45,
    title: 'Sometimes i feel watched',
  },
];

class HomeContainer extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({search});
  };

  render() {
    const {search} = this.state;
    return (
      <LayoutContainer title={'Ouistigram'}>
        <SearchBar
          inputContainerStyle={{borderRadius: 50}}
          containerStyle={[stylesheet.shadow_box, {borderTopWidth: 0}]}
          placeholder="Rechercher..."
          onChangeText={this.updateSearch}
          value={search}
        />
        <View style={styles.main_container}>
          <FlatList
            data={images}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <ImageView image={item} />}
          />
        </View>
      </LayoutContainer>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: 'hsl(218,15%,15%)',
  },
  textinput: {
    marginLeft: 5,
    height: 50,
    marginRight: 5,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5,
  },
});

export default HomeContainer;
